import React, { BasicComponent } from '@/service/BasicComponent'
import connect from '@/store/connect'
import { apiGetLotteryBonus } from '@/api'
import {
  Form,
  Input,
  Select,
  Button,
  Typography
} from 'antd'

const { Option } = Select

class LotteryQueryForm extends BasicComponent {
  handleSubmit = e => {
    e.preventDefault()
    this.props.form.validateFieldsAndScroll(async (err, values) => {
      if (!err) {
        this.props.getLotteryResult({ loading: true })
        try {
          let data = await apiGetLotteryBonus(values)
          if (data.error_code !== 0) {
            this.props.getLotteryResult({ result: data.reason, loading: false })
            return false
          }
          this.props.getLotteryResult({ result: data.result, loading: false })
        } catch (e) { console.log(e) }
      }
    })
  }

  renderSelectItem () {
    let { lotteryTypes } = this.props.lottery
    return (
      <Select>   
        {
          lotteryTypes.map(item => (
            <Option key={item.lottery_id} value={item.lottery_id}>{item.lottery_name}</Option>
          ))
        }
      </Select>
    )
  }

  componentDidMount () {
    if (!this.props.lottery.lotteryTypes.length) {
      this.props.lottery_action.getLotteryTypes()
    }
  }

  render () {
    const { getFieldDecorator } = this.props.form
    const { lotteryTypes } = this.props.lottery

    return (
      <div className="lottery-query-form">
        <Form onSubmit={this.handleSubmit}>
          <Form.Item label="彩票号码">
            {getFieldDecorator('lottery_res', {
              rules: [
                { required: true, message: '必须输入彩票号码' }
              ]
            })(<Input />)}
          </Form.Item>
          <Typography.Paragraph>
            提示：号码之间用英文逗号隔开，红色球和蓝色求之间用@连接，例如：01,11,02,09,14,22,25@05,03
          </Typography.Paragraph>
          {
            lotteryTypes.length ? (
              <Form.Item label="彩票类型">
                {getFieldDecorator('lottery_id', {
                  rules: [
                    { required: true, message: '必须选择彩票类型' }
                  ],
                  initialValue: lotteryTypes[0].lottery_id
                })( this.renderSelectItem() )}
              </Form.Item>
            ) : ''
          }

          <Form.Item label="彩票期号">
            {getFieldDecorator('lottery_no', {
              rules: [
                
              ]
            })(<Input />)}
          </Form.Item>
          <Typography.Paragraph>
            提示：不填写则为最近一期
          </Typography.Paragraph>

          <Form.Item >
            <Button type="primary" htmlType="submit">
              查询
            </Button>
          </Form.Item>
        </Form>
      </div>
    )
  }
}
const WrappedRegistrationForm = Form.create({ name: 'query' })(
  connect('lottery')(LotteryQueryForm)
)
export default WrappedRegistrationForm