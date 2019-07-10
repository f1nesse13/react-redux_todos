import React, { Component } from 'react';

class StepListItem extends Component {
  constructor(props) {
    super(props);
  }

  toggleStep(e) {
    e.preventDefault();
    const toggledStep = Object.assign({}, this.props.step, { done: !this.props.step.done });
    this.props.receiveStep(toggledStep);
  }

  render() {
    const { removeStep, receiveStep, step } = this.props;
    return (
      <div>
        {step.title}
        {step.body}
        <button onClick={this.toggleStep.bind(this)}>
          {step.done === true ? 'Undone' : 'Done'}
        </button>
        <button onClick={removeStep}>Remove Step</button>
      </div>
    );
  }
}

export default StepListItem;
