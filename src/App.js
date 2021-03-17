import React from 'react';
import './form.scss';
import BackGroundView from './background';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {isLogin: false};
  }

  render() {
    return (
        <BackGroundView></BackGroundView>
    );
  };
}

export default App;
