import React, { Component } from 'react';
import {
  RouteComponentProps
} from 'react-router-dom';

import axios from 'axios';
import {APICONFIG} from 'services/api-config';
import {Steps} from 'components/MethodSteps';

interface MatchParams {
  methodId: string;
}

interface StateParams {
  loadingSteps: boolean,
  methodId: number,
  steps: Array<Step>
}

type Step = {
  id: number,
  name: string
}

export class Method extends Component<RouteComponentProps<MatchParams>> {
  state : StateParams = {
    loadingSteps: true,
    steps: [],
    methodId: 0
  }

  componentDidMount(){
    this.updateMethodData(parseInt(this.props.match.params.methodId));
  }

  componentDidUpdate(prevProps: RouteComponentProps<MatchParams>){
    let methodId = this.props.match.params.methodId;
    if (methodId !== prevProps.match.params.methodId){
      this.updateMethodData(parseInt(methodId));
    }
  }

  updateMethodData = (methodId: number) => {
    this.setState({methodId});
    this.updateSteps(methodId);
  }

  updateSteps = async (methodId: number) => {
    this.setState({loadingSteps: true});
    axios.get(`${APICONFIG.baseUrl}/methods/${methodId}/steps`)
    .then(response => {
      let steps = response.data;
      this.setState({
        loadingSteps: false,
        steps
      });
    })
    .catch(err => console.log(err));
  }

  render() {
    return (
      <div>
        <h1>Page for a method with ID {this.state.methodId}</h1>
        {this.state.loadingSteps ? <div>Loading steps...</div> : <Steps steps={this.state.steps}/> }
      </div>
    )
  }
}

export default Method;
