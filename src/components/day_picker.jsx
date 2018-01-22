import React from 'react';
import ShortcutHeader from './shortcut-header.jsx'
import CustomDayPicker from './custom-day-picker.jsx'

class DayPicker extends React.PureComponent {
  constructor() {
    super();
    this.state = {
    };
  }

  render() {
    console.log("Testing! from alex! adsfsadWAIT alex is here ");
    return (
      <div>
        <ShortcutHeader />
        <CustomDayPicker />
      </div>

    );
  }
}
export default DayPicker;
