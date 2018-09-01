import React, { Component } from 'react';
import Navbar from './components/navbar/NavBar';
import Search from './components/search/Search';
import MultiThemeProvider from 'material-ui/styles/MuiThemeProvider';


class App extends Component {

  render() {

    return (
      <MultiThemeProvider>
        <div>
          <Navbar />
          <Search />
        </div>
      </MultiThemeProvider>
    );
  }
}

export default App;
