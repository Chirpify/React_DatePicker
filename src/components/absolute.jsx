import React from 'react';
import DayPicker, { DateUtils } from 'react-day-picker';
import Helmet from 'react-helmet';
import 'react-day-picker/lib/style.css';

class Absolute extends React.Component {
  constructor(props) {
    super(props);
    this.handleDayClick = this.handleDayClick.bind(this);
    this.handleResetClick = this.handleResetClick.bind(this);
    this.state = this.getInitialState();
  }

  getInitialState() {
    return {
      from: undefined,
      to: undefined,
    };
  }
  handleDayClick(day) {
    const range = DateUtils.addDayToRange(day, this.state);
    this.setState(range);
  }
  handleResetClick() {
    this.setState(this.getInitialState());
  }


  render() {
    const { from, to } = this.state;
    const modifiers = { start: from, end: to };
    return (
      <div className="RangeExample">
        {/* <p>
          {!from && !to && 'Please select the first day.'}
          {from && !to && 'Please select the last day.'}
          {from &&
            to &&
            `Selected from ${from.toLocaleDateString()} to
                ${to.toLocaleDateString()}`}{' '}
          {from &&
            to && (
              <button className="link" onClick={this.handleResetClick}>
                Reset
              </button>
            )}
        </p> */}
        <DayPicker
          className="Selectable"
          numberOfMonths={this.props.numberOfMonths}
          selectedDays={[from, { from, to }]}
          modifiers={modifiers}
          onDayClick={this.handleDayClick}
        />
        <Helmet>
          <style>{`
  .Selectable .DayPicker-Day--selected:not(.DayPicker-Day--start):not(.DayPicker-Day--end):not(.DayPicker-Day--outside) {
    background-color: #fff !important;
    color: #28b5e1;
  }
  .Selectable .DayPicker-Day {
    border-radius: 0 !important;
  }

  .DayPicker:not(.DayPicker--interactionDisabled) .DayPicker-Day:not(.DayPicker-Day--disabled):not(.DayPicker-Day--selected):not(.DayPicker-Day--outside):hover {
    background-color: #28b5e1 !important;
  }

  .DayPicker-Day--selected:not(.DayPicker-Day--disabled):not(.DayPicker-Day--outside) {
    background-color: #28b5e1 !important;

  }
  .Selectable .DayPicker-Day--start {
    border-top-left-radius: 50% !important;
    border-bottom-left-radius: 50% !important;
  }
  .Selectable .DayPicker-Day--end {
    border-top-right-radius: 50% !important;
    border-bottom-right-radius: 50% !important;
  }
`}</style>
        </Helmet>

        <div className="float-right">
          <span className={'link-btn'}>Cancel</span>
          {/* <span onClick={this.handleResetClick}>Reset</span> */}
          <span className={'blue-sqaure-btn'}>Apply</span>
        </div>


      </div>
    );

  }
}

Absolute.defaultProps = {
  numberOfMonths: 2
}
export default Absolute
