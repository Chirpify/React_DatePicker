import React from 'react';
import _ from 'lodash';
import '../styles/components/relative.scss';


export default class Relative extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
          relativeTime: [
            {
              type: "hours",
              length: 1,
              name: "1",
              active: false
            },
            {
              type: "hours",
              length: 2,
              name: "2",
              active: false
            },
            {
              type: "hours",
              length: 3,
              name: "3",
              active: false
            },
            {
              type: "hours",
              length: 6,
              name: "6",
              active: true
            },
            {
              type: "hours",
              length: 8,
              name: "8",
              active: false
            },
            {
              type: "hours",
              length: 12,
              name: "12",
              active: false
            },
            {
              type: "days",
              length: 1,
              name: "1",
              active: false
            },
            {
              type: "days",
              length: 2,
              name: "2",
              active: false
            },
            {
              type: "days",
              length: 3,
              name: "3",
              active: false
            },
            {
              type: "days",
              length: 4,
              name: "4",
              active: true
            },
            {
              type: "days",
              length: 5,
              name: "5",
              active: false
            },
            {
              type: "days",
              length: 6,
              name: "6",
              active: false
            },
            {
              type: "weeks",
              length: 1,
              name: "1",
              active: false
            },
            {
              type: "weeks",
              length: 2,
              name: "2",
              active: false
            },
            {
              type: "weeks",
              length: 4,
              name: "4",
              active: false
            },
            {
              type: "weeks",
              length: 6,
              name: "6",
              active: true
            },
            {
              type: "months",
              length: 3,
              name: "3",
              active: false
            },
            {
              type: "months",
              length: 6,
              name: "6",
              active: false
            },
            {
              type: "months",
              length: 12,
              name: "12",
              active: false
            },
            {
              type: "months",
              length: 15,
              name: "15",
              active: true
            }
          ]
        };
  }
  componentDidMount() {
    console.log("mounted!")
  }

  render() {
    var self = this;
    console.log('testing', self.state)
    return (
      <div>
        <div>
          <div className={'relative-time-div'}>
            <span className={'type'}>Hours</span>
            <span>{self.state.relativeTime.map(function(hour, index) {
              if(hour.type == 'hours') {
                return (<button key={index} className={"relative-time"}>{hour.name}</button>);
              }
            })}</span>
          </div>

          <div className={'relative-time-div'}>
            <span className={'type'}>Days</span>
            <span>{this.state.relativeTime.map(function(hour, index) {
              if(hour.type == 'days') {
                return <button key={index} className={"relative-time"}>{hour.name}</button>
              }
            })}</span>
          </div>

          <div className={'relative-time-div'}>
            <span className={'type'}>Weeks</span>
            <span>{this.state.relativeTime.map(function(hour, index) {
              if(hour.type == 'weeks') {
                return <button key={index} className={"relative-time"}>{hour.name}</button>
              }
            })}</span>
          </div>

          <div className={'relative-time-div'}>
            <span className={'type'}>Months</span>
            <span>{this.state.relativeTime.map(function(hour, index) {
              if(hour.type == 'months') {
                return <button key={index} className={'relative-time'}>{hour.name}</button>
              }
            })}</span>
          </div>

        </div>
      </div>
    )
  }
}
