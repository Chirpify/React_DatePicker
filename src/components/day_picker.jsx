import React from 'react';
import ShortcutHeader from './shortcut-header.jsx'
import CustomDayPicker from './custom-day-picker.jsx'
import '../styles/components/app.scss';
import moment from 'moment';


class DayPicker extends React.PureComponent {
  constructor() {
    super();
    this.state = {
      customActive: false,
      startDate: moment().subtract(24, 'hours').format(),
      endDate: moment().format(),

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

  toggleDate(n) {
    console.log(n, 'hi')
    var newDate = moment().subtract(n, 'hours').format();
    this.setState({
      startDate: newDate,
    })

  }

  cancelCustom() {
    this.setState({
      customActive: false
    })
  }

  render() {
    console.log(this.state.startDate)
    return (
      <div>
        {this.state.startDate} - {this.state.endDate}
        <ShortcutHeader customActive = {this.state.customActive} startDate={this.state.startDate} endDate={this.state.endDate} toggleDate={this.toggleDate.bind(this)} showCustomDayPicker={this.showCustomDayPicker.bind(this)} hideCustomDayPicker={this.hideCustomDayPicker.bind(this)}/>
        {this.state.customActive && <div>
          <CustomDayPicker customActive = {this.state.customActive} cancelCustom={this.cancelCustom.bind(this)}/>
        </div>}
      </div>

    );
  }
}


export default DayPicker;
