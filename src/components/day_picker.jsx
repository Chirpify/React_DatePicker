import React from 'react';
import ShortcutHeader from './shortcut-header.jsx'
import CustomDayPicker from './custom-day-picker.jsx'
import Absolute from './absolute.jsx'
import '../styles/components/app.scss';

class DayPicker extends React.PureComponent {
  constructor() {
    super();
    this.state = {
      customActive: false
    };
  }

  showCustomDayPicker() {
    this.setState({
      customActive: true
    })
  }

  hideCustomDayPicker() {
    this.setState({
      customActive: false
    })
  }

  render() {
    return (
      <div>
        <ShortcutHeader customActive = {this.state.customActive} showCustomDayPicker={this.showCustomDayPicker.bind(this)} hideCustomDayPicker={this.hideCustomDayPicker.bind(this)}/>
        <div className={(this.state.customActive? 'show-custom-day-picker' : 'hide-custom-day-picker')}>
          <CustomDayPicker customActive = {this.state.customActive}/>
        </div>
      </div>

    );
  }
}


export default DayPicker;
