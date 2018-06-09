import React, {Component} from 'react'
import {render} from 'react-dom'

import Icon from '../../src/index';
import { ICONS } from '../../src/svg';

class Demo extends Component {
  render() {
    return <div>
      <h1>react-icon Demo</h1>
      {Object.keys(ICONS).map(type => (
        <div>
          <Icon type={type} size={16} style={{fill: "#000"}}/>
          {" - "}{type}
        </div>
      ))}
    </div>
  }
}

render(<Demo/>, document.querySelector('#demo'))
