

import React, { Component, PureComponent } from 'react'
import { BasicDecorator } from '@/decorators'

@BasicDecorator
class BasicComponent extends Component{}

@BasicDecorator
class BasicPureComponent extends PureComponent{}

export {
  BasicComponent,
  BasicPureComponent
}
export default React