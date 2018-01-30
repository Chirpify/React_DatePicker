import React from 'react';
import _ from 'lodash'


export default class Relative extends React.PureComponent {
  constructor(props) {
    super(props);
    this.props.relativeTime = [
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

  }
  //
  // var relativeTime = [
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

  render() {
    console.log('testing')
    return (
      <div>
        <div>
          <div>
            <span>Hours</span>
            <span>{this.props.relativeTime.map(function(index, hour) {
              if(hour.type == 'hours') {
                return <span key={index}>{hour.name}</span>
              }
            })}</span>
          </div>

          <div>
            <span>Days</span>
            <span>{this.props.relativeTime.map(function(index, hour) {
              if(hour.type == 'days') {
                return <span key={index}>{hour.name}</span>
              }
            })}</span>
          </div>

          <div>
            <span>Weeks</span>
            <span>{this.props.relativeTime.map(function(index, hour) {
              if(hour.type == 'weeks') {
                return <span key={index}>{hour.name}</span>
              }
            })}</span>
          </div>

          <div>
            <span>Months</span>
            <span>{this.props.relativeTime.map(function(index, hour) {
              if(hour.type == 'months') {
                return <span key={index}>{hour.name}</span>
              }
            })}</span>
          </div>

        </div>
      </div>
    )
  }
}
