import React from 'react';
import ReactDOM from 'react-dom';
import DayPicker from './components/day_picker.jsx';

document.addEventListener('DOMContentLoaded', function() {
  ReactDOM.render(
    React.createElement(DayPicker),
    document.getElementById('mount')
  );
})
