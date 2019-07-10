import React, { Component } from 'react';
import StepListItemContainer from './step_list_item_container';
import StepForm from './step_form';

class StepList extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { steps, todo_id } = this.props;
    const stepItems = steps.map(step => (
      <li>
        <StepListItemContainer key={todo_id} step={step} />
      </li>
    ));

    return (
      <div>
        <ul>{stepItems}</ul>
        <StepForm />
      </div>
    );
  }
}

export default StepList;
