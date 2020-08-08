import React, { FunctionComponent } from 'react'
import CaseModel from 'models/case-model';
import { ListGroup } from 'react-bootstrap'

import Case from 'components/Case'

type Props = {
  cases: Array<CaseModel>
}

export const StepCases : FunctionComponent<Props> = ({cases}) => {
  return (
    <ListGroup horizontal>
        {
          cases.map(caseModel => 
            <ListGroup.Item>
              <Case key={caseModel.id} caseModel={caseModel} />
            </ListGroup.Item>
            )
        }
    </ListGroup>
  )   
}
