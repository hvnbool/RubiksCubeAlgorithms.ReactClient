import React, { FunctionComponent } from 'react';
import {
  Link
} from 'react-router-dom';

type Step = {
  id: number,
  name: string,
}

type StepsProps = {
  steps: Array<Step>,
}

export const Steps: FunctionComponent<StepsProps> = ({steps}) => {
  return (
    <div>
      {
        steps.map(step => 
        <div key={step.id}>
          <Link to={`/steps/${step.id}`}>
            {step.name}
          </Link>
        </div>)
      }
    </div>
  )
}
