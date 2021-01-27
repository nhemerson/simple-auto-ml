import React, { Component } from 'react';
import Articles from './stream';


class DeployStream extends Component {

    state = {
      articles: []
    };
  
    componentDidMount() {
      fetch('https://raw.githubusercontent.com/nhemerson/feed-curator/main/data/dataDeploy_model_MVP.json')
      .then(res => res.json())
      .then((data) => {
        this.setState({ articles: data })
      })
      .catch(console.log)
    };
  
    render() {
      return (
        <Articles articles={this.state.articles.slice(0,5)} />
      )
    };
  
    
  };

  export default DeployStream;