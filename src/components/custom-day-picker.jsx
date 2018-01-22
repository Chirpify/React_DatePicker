import React from 'react';
import '../styles/components/shortcut-header.scss';
import '../styles/components/custom-day-picker.scss';

class CustomDayPicker extends React.PureComponent {

  constructor(props) {
    super(props);
    this.state = {
      absolute: true,
    }

  }

  toggleClass(v) {
    if(v == 'absolute') {
      this.setState({
        absolute: true
      })
    }else {
      this.setState({
        absolute: false
      })
    }
  }

  render() {
    return (
      <div className={'dayPickerContainer'}>
        <div>
          <span className={'button ' + (this.state.absolute? 'btnActive' : '')} onClick={this.toggleClass.bind(this, 'absolute')}>Absolute</span>
          <span className={'button ' + (this.state.absolute? '' : 'btnActive')} onClick={this.toggleClass.bind(this, 'relative')}>Relative</span>
        </div>


      </div>
    )
  }

}

export default CustomDayPicker;
