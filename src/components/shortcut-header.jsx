import React from 'react';
import '../styles/components/shortcut-header.scss';
import moment from 'moment';
import classNames from 'classnames'
import _ from 'lodash'

class ShortcutHeader extends React.PureComponent {
  constructor(props) {
    super(props);
    console.log(this.props)
    this.state = {
      customActive: this.props.customActive,
      startDate: moment().subtract(24, 'hours').format(),
      endDate: moment().format(),
    };
    this.state.predefinedHours = [
      {
        hours: 1,
        name: "1h",
        active: false
      },
      {
        hours: 3,
        name: "3h",
        active: false
      },
      {
        hours: 12,
        name: "12h",
        active: false
      },
      {
        hours: 24,
        name: "1d",
        active: true
      },
      {
        hours: 72,
        name: "3d",
        active: false
      },
      {
        hours: 168,
        name: "1w",
        active: false
      },
    ]
  }

  toggleClass(name) {
    var hours = this.state.predefinedHours
    _.forEach(hours, function(h) {
      h.active = false;
    })
    var result = _.find(hours, function(h) {
      return h.name == name
    })
    result.active = true;
    this.setState({
      customActive: false,
      predefinedHours: hours
    })
    this.props.hideCustomDayPicker();
    this.forceUpdate()


  }

  clickCustom() {

    var hours = this.state.predefinedHours
    _.forEach(hours, function(h) {
      h.active = false;
    })
    this.setState({
      customActive: true,
      predefinedHours: hours
    })

    this.props.showCustomDayPicker();
    this.forceUpdate()


  }



  render() {
    var self = this;
    return (
      <div className='container'>
        <div>{this.state.endDate} -- {this.state.startDate}</div>
        <div>
          {this.state.predefinedHours.map(function(hour, index){
            var btnClass = classNames({
              'button': true,
              'btnActive': hour.active
            })
            return <li className={btnClass} key={index} onClick={self.toggleClass.bind(self, hour.name)}>{hour.name}</li>
          })}
          <span className={'button ' + (this.state.customActive ? 'btnActive' : '')} onClick={self.clickCustom.bind(self)}>custom</span>
        </div>
      </div>

    );
  }
}
export default ShortcutHeader;
