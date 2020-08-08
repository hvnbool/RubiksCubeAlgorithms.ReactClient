import React, { Component } from 'react'
import { RouteComponentProps } from 'react-router-dom'
import axios from 'axios'
import {APICONFIG} from 'services/api-config'
import {StepCases} from 'components/StepCases'
import CaseModel from 'models/case-model'

interface MatchParams{
  stepId: string
}

interface StateParams{
  loadingCases: boolean,
  stepId: number,
  cases: Array<CaseModel>
}

export class Step extends Component<RouteComponentProps<MatchParams>> {

  state: StateParams = {
    loadingCases: false,
    stepId: 0,
    cases: []
  }

  componentDidMount(){
    let stepId = parseInt(this.props.match.params.stepId);
    this.updateStepData(stepId);
  }

  componentDidUpdate(prevProps: RouteComponentProps<MatchParams>){
    let stepId = parseInt(this.props.match.params.stepId);
    if (stepId.toString() !== prevProps.match.params.stepId){
      this.updateStepData(stepId);
    }
  }

  updateStepData = async (stepId: number) => {
    this.setState({stepId});
    this.updateStepCases(stepId);
  }

  updateStepCases = async (stepId: number) => {
    this.setState({loadingCases: true});
    axios.get(`${APICONFIG.baseUrl}/steps/${stepId}/cases`)
    .then(response => {
      console.log("Recieved step cases, updating");
      this.setState({
        loadingCases: false,
        cases: response.data,
      })
    })
  }

  render() {
    console.log(`Rendering step with id ${this.state.stepId}`)
    return (
      <div>
        {this.state.loadingCases ? <div>Loading cases...</div> : <StepCases cases={this.state.cases}/> }
      </div>
    )
  }
}



export default Step
