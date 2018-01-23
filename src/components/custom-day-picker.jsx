import React from 'react';
import '../styles/components/shortcut-header.scss';
import '../styles/components/custom-day-picker.scss';

class CustomDayPicker extends React.PureComponent {

  constructor(props) {
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


      </div>
    )
  }

}

export default CustomDayPicker;
