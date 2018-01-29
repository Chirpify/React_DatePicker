import React from 'react';
import '../styles/components/shortcut-header.scss';
import classNames from 'classnames'
import _ from 'lodash'

class ShortcutHeader extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      customActive: this.props.customActive,
      startDate: this.props.startDate,
      endDate: this.props.endDate,
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

  toggleDate(name,n) {
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
    this.props.toggleDate(n)
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
        <div>
          {this.state.predefinedHours.map(function(hour, index){
            var btnClass = classNames({
              'button': true,
              'btnActive': hour.active
            })
            return <li className={btnClass} key={index} onClick={self.toggleDate.bind(self, hour.name, hour.hours)}>{hour.name}</li>
          })}
          <span className={'button ' + (this.state.customActive ? 'btnActive' : '')} onClick={self.clickCustom.bind(self)}>custom</span>
        </div>
      </div>

    );
  }
}
export default ShortcutHeader;
