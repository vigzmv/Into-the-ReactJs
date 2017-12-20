import React from 'react';
import Switch from './Switch';

class Toggle extends React.Component {
  static defaultProps = { onToggle: () => {} };

  state = { on: false };

  toggle = () =>
    this.setState(
      ({ on }) => ({ on: !on }),
      () => {
        this.props.onToggle(this.state.on);
      }
    );

  render() {
    const { on } = this.state;
    return (
      <div className="toggleWrapper">
        <Switch on={on} onClick={this.toggle} />
      </div>
    );
  }
}

function ToggleApp() {
  return <Toggle textPosition="bottom" />;
}

export default ToggleApp;
