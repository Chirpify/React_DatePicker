import React from 'react';
import '../styles/components/shortcut-header.scss';
import moment from 'moment';
import classNames from 'classnames'
import _ from 'lodash'

class ShortcutHeader extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
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

  toggleClass(name, self) {
    var hours = this.state.predefinedHours
    _.forEach(hours, function(h) {
      h.active = false;
    })
    var result = _.find(hours, function(h) {
      return h.name == name
    })
    result.active = true;
    this.setState({
      predefinedHours: hours
    })
    this.forceUpdate()


  }



  render() {
    var self = this;
    return (
      <div>
        <div>{this.state.endDate} -- {this.state.startDate}</div>
        <div>
          {this.state.predefinedHours.map(function(hour, index){
            var btnClass = classNames({
              'button': true,
              'btnActive': hour.active
            })
            return <li className={btnClass} key={index} onClick={self.toggleClass.bind(self, hour.name)}>{hour.name}</li>
          })}
          <span className={'button'} onClick={self.toggleClass}>custom</span>
        </div>
      </div>

    );
  }
}
export default ShortcutHeader;
