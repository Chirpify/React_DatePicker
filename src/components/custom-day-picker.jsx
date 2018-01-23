import React from 'react';
import '../styles/components/shortcut-header.scss';
import '../styles/components/custom-day-picker.scss';
import Absolute from './absolute.jsx'


class CustomDayPicker extends React.PureComponent {

  constructor(props) {
    console.log('hi')
    super(props);
    this.state = {
      customActive: this.props.customActive,
      absolute: true,
    }

  }

  toggleAbsolute(v) {
    this.setState(
      {
        absolute: v
      }
    )
  }

  render() {
    return (
      <div className={'dayPickerContainer'}>
        <div>
          <span className={'button ' + (this.state.absolute? 'btnActive' : '')} onClick={this.toggleAbsolute.bind(this, true)}>Absolute</span>
          <span className={'button ' + (this.state.absolute? '' : 'btnActive')} onClick={this.toggleAbsolute.bind(this, false)}>Relative</span>
        </div>
        <div>
          <Absolute />
        </div>


      </div>
    )
  }

}

export default CustomDayPicker;
