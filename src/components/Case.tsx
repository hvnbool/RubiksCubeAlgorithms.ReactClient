import React, { FunctionComponent } from 'react'
import { Card } from 'react-bootstrap'
import CaseModel from "models/case-model"
import {APICONFIG} from 'services/api-config'

interface TProps {
  caseModel: CaseModel
}

export const Case : FunctionComponent<TProps> = ({caseModel}) => {
  console.log(`${APICONFIG.baseUrl}/images/${caseModel.imageRelativePath}`);
  return (
    <Card style={{ width: '18rem'}}>
      <Card.Img variant="top" src={`${APICONFIG.baseUrl}/images/${caseModel.imageRelativePath}`}/>
      <Card.Title>Case {caseModel.id}</Card.Title>
      <Card.Subtitle>{caseModel.name}</Card.Subtitle>
    </Card>
  )
}

export default Case;
