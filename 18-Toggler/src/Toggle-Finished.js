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
    return <Switch on={on} onClick={this.toggle} />;
  }
}
export default Toggle;
