import React from 'react';
import ShortcutHeader from './shortcut-header.jsx'
import CustomDayPicker from './custom-day-picker.jsx'

class DayPicker extends React.PureComponent {
  constructor() {
    super();
    this.state = {
      customActive: false
    };
  }

  render() {
    return (
      <div>
        <ShortcutHeader customActive = {this.state.customActive} />
        <CustomDayPicker className={this.state.customActive? "" : 'show-custom-day-picker'} customActive = {this.state.customActive}/>
      </div>

    );
  }
}


export default DayPicker;
