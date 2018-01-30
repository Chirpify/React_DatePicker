import React from 'react';
import ShortcutHeader from './shortcut-header.jsx';
import Relative from './relative.jsx';
import Absolute from './absolute.jsx';
import '../styles/components/app.scss';
import moment from 'moment';


class DayPicker extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      customActive: false,
      startDate: moment().subtract(24, 'hours').format(),
      endDate: moment().format(),
      newStartDate: undefined,
      newEndDate: undefined

    };

    // this.props.relativeTime = [
    //   {
    //     type: "hours",
    //     length: 1,
    //     name: "1",
    //     active: false
    //   },
    //   {
    //     type: "hours",
    //     length: 2,
    //     name: "2",
    //     active: false
    //   },
    //   {
    //     type: "hours",
    //     length: 3,
    //     name: "3",
    //     active: false
    //   },
    //   {
    //     type: "hours",
    //     length: 6,
    //     name: "6",
    //     active: true
    //   },
    //   {
    //     type: "hours",
    //     length: 8,
    //     name: "8",
    //     active: false
    //   },
    //   {
    //     type: "hours",
    //     length: 12,
    //     name: "12",
    //     active: false
    //   },
    //   {
    //     type: "days",
    //     length: 1,
    //     name: "1",
    //     active: false
    //   },
    //   {
    //     type: "days",
    //     length: 2,
    //     name: "2",
    //     active: false
    //   },
    //   {
    //     type: "days",
    //     length: 3,
    //     name: "3",
    //     active: false
    //   },
    //   {
    //     type: "days",
    //     length: 4,
    //     name: "4",
    //     active: true
    //   },
    //   {
    //     type: "days",
    //     length: 5,
    //     name: "5",
    //     active: false
    //   },
    //   {
    //     type: "days",
    //     length: 6,
    //     name: "6",
    //     active: false
    //   },
    //   {
    //     type: "weeks",
    //     length: 1,
    //     name: "1",
    //     active: false
    //   },
    //   {
    //     type: "weeks",
    //     length: 2,
    //     name: "2",
    //     active: false
    //   },
    //   {
    //     type: "weeks",
    //     length: 4,
    //     name: "4",
    //     active: false
    //   },
    //   {
    //     type: "weeks",
    //     length: 6,
    //     name: "6",
    //     active: true
    //   },
    //   {
    //     type: "months",
    //     length: 3,
    //     name: "3",
    //     active: false
    //   },
    //   {
    //     type: "months",
    //     length: 6,
    //     name: "6",
    //     active: false
    //   },
    //   {
    //     type: "months",
    //     length: 12,
    //     name: "12",
    //     active: false
    //   },
    //   {
    //     type: "months",
    //     length: 15,
    //     name: "15",
    //     active: true
    //   }
    // ]

  };



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

  toggleAbsolute(v) {
    this.setState(
      {
        absolute: v
      }
    )
  }

  applyDaysSelected() {
    this.setState({
      startDate: this.state.newStartDate,
      endDate: this.state.newEndDate
      }
    )

  }

  changeDate(from, to) {
    this.setState({
      newStartDate: moment(from).format(),
      newEndDate: moment(to).format()
    })
  }


  render() {
    console.log(this.state.startDate, this.state.endDate)
    return (
      <div>
        {this.state.startDate} - {this.state.endDate}
        <ShortcutHeader customActive = {this.state.customActive} startDate={this.state.startDate} endDate={this.state.endDate} toggleDate={this.toggleDate.bind(this)} showCustomDayPicker={this.showCustomDayPicker.bind(this)} hideCustomDayPicker={this.hideCustomDayPicker.bind(this)}/>
        {this.state.customActive && <div className={'dayPickerContainer'} customActive = {this.state.customActive} cancelCustom={this.cancelCustom.bind(this)}>
          <div>
            <span className={'button ' + (this.state.absolute? 'btnActive' : '')} onClick={this.toggleAbsolute.bind(this, true)}>Absolute</span>
            <span className={'button ' + (this.state.absolute? '' : 'btnActive')} onClick={this.toggleAbsolute.bind(this, false)}>Relative</span>
          </div>
          <div>
            {this.state.absolute && <Absolute changeDate={this.changeDate.bind(this)}/>}
            {/* {!this.state.absolute && <Relative relativeTime={this.props.relativeTime}/>} */}
            {!this.state.absolute && <Relative />}

          </div>

          <div className="float-right">
            <span className={'link-btn'} onClick={this.cancelCustom.bind(this)}>Cancel</span>
            <span className={'blue-sqaure-btn'} onClick={this.applyDaysSelected.bind(this)}>Apply</span>
          </div>

        </div>}
      </div>

    )
  }
}


export default DayPicker;
