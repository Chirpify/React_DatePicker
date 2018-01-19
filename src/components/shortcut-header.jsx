import React from 'react';
import '../styles/components/shortcut-header.scss';
import moment from 'moment';
import classNames from 'classnames'

class ShortcutHeader extends React.PureComponent {
  constructor(props) {
    super(props);
    // this.toggleClass = this.toggleClass.bind(this);
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

  // toggleClass

  render() {

    return (
      <div>
        <div>{this.state.endDate} -- {this.state.startDate}</div>
        <div>
          {this.state.predefinedHours.map(function(hour, index){
            var btnClass = classNames({
              'button': true,
              'btnActive': hour.active
            })
            return <li className={btnClass} key={index}>{hour.name}</li>
          })}
          <span className={btnClass} onClick={this.toggleClass}>custom</span>
        </div>
      </div>

    );
  }
}
export default ShortcutHeader;
