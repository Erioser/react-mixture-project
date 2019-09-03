import React, { BasicPureComponent } from '@/service/BasicComponent'
import { Result, Button } from 'antd'

const ErrorUI = ({title}) => {
  let tryAgainAction = () => {
    window.location.href = window.location.href + ''
  }
  return (
    <Result
      status="500"
      title="不好意思，出错了"
      subTitle={title || '这个错误可能来自于内部的某一个功能模块.'}
      extra={<Button type="primary" onClick={tryAgainAction}>重试一下</Button>}
    />
  )
}

class ErrorBoundary extends BasicPureComponent {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    // 更新 state 使下一次渲染能够显示降级后的 UI
    return { hasError: true, error }
    
  }

  componentDidCatch(error, info) {
    // 你同样可以将错误日志上报给服务器
    // logErrorToMyService(error, info);
  }

  render() {
    if (this.state.hasError) {
      // 你可以自定义降级后的 UI 并渲染
      return <ErrorUI title={this.state.error}/>;
    }

    return this.props.children; 
  }
}

export default ErrorBoundary