import React from 'react';

export default class Relative extends React.PureComponent {
  constructor(props) {
    super(props);

  }

  render() {
    console.log('testing')
    return (
      <div>
        <div>
          {this.props.relativeTime.map(function(index, hour) {
            return <span key={index}>{hour.name}</span>
          })}
        </div>
      </div>
    )
  }
}
