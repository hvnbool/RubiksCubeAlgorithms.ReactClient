import React, { Component } from 'react';
import {
  Switch,
  Route,
  Link,
  match
} from "react-router-dom";

import Method from "pages/Method";
import axios from 'axios';
import {APICONFIG} from 'services/api-config';

interface Props {
  match: match
}

interface StateParams {
  loadingMethods: boolean,
  methods: Array<MethodType>
}

type MethodType = {
  id: number,
  name: string
}

export class Methods extends Component<Props> {
  state : StateParams = {
    loadingMethods: true,
    methods: []
  }

  async componentDidMount(){
    this.updateAllMethods();
  }

  async updateAllMethods(){
    this.setState({ loadingMethods: true});
    axios.get(`${APICONFIG.baseUrl}/methods`)
      .then(response => {
        let methods = response.data;
        this.setState({
          loadingMethods: false,
          methods
        });
      })
      .catch(err => console.log(err));  
  }

  render() {
    let match = this.props.match;

    return (
      <div>
        <h1>Methods page</h1>
        {this.state.loadingMethods ? (
          <h3>Loading methods...</h3>
        ) : (
          <ul>
            {this.state.methods.map(method => <Link to={`${match.path}/${method.id}`} key={method.id}> Method {method.id} </Link>)}
          </ul>
        )}
        <Switch>
            <Route path={`${match.path}/:methodId`} component={Method} />
            <Route exact path={match.path}>
              <h3>Please select a method.</h3>
            </Route>
        </Switch>
      </div>
    )
  }
}

export default Methods;
