import React, { Component } from 'react';
import StepListItemContainer from './step_list_item_container';
import StepForm from './step_form';

class StepList extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { steps, todo_id, receiveStep } = this.props;
    console.log(steps);
    const stepItems = steps.map(step => (
      <li>
        <StepListItemContainer step={step} />
      </li>
    ));

    return (
      <div>
        <ul>{stepItems}</ul>;
        <StepForm />
      </div>
    );
  }
}

export default StepList;
