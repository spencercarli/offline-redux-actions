import React, { Component } from 'react';
import { Provider } from 'react-redux';
import configureStore from './store';
import NameList from './NameList';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      store: configureStore(() => this.setState({ isLoading: false })),
    };
  }

  render() {
   if (this.state.isLoading) return null;
   return (
     <Provider store={this.state.store}>
       <NameList />
     </Provider>
   );
  }
}

export default App;
