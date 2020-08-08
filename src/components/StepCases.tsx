import React, { FunctionComponent } from 'react'
import {CaseModel} from 'pages/Step';
import {Link} from 'react-router-dom'

type Props = {
  cases: Array<CaseModel>
}

export const StepCases : FunctionComponent<Props> = ({cases}) => {
  return (
    <div>
        {
          cases.map(caseModel => 
            <div key={caseModel.id}>
              <Link to={`/cases/${caseModel.id}`}>
                Case {caseModel.id}
              </Link>
            </div>)
        }
    </div>
  )   
}
