import React from 'react';
import '../styles/components/shortcut-header.scss';

class ShortcutHeader extends React.PureComponent {
  constructor() {
    super();
    this.state = {
    };
  }

  render() {
    return (
      <div>
        <span>1h</span>
        <span>3h</span>
        <span>12h</span>
        <span>1d</span>
        <span>3d</span>
        <span>1w</span>
        <span>custom</span>
      </div>

    );
  }
}
export default ShortcutHeader;
