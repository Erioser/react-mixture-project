import { message } from 'antd'

export const BasicDecorator = (target) => {
  target.prototype.msgHandler = message
}