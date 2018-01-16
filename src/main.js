import React from 'react';
import ReactDOM from 'react-dom';
import DayPicker from './component/day_picker.jsx';

document.addEventListener('DOMContentLoaded', function() {
  ReactDOM.render(
    React.createElement(DayPicker),
    document.getElementById('mount')
  );
})
