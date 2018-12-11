import React, { Component } from 'react';
import{ Globalstyle  } from './style';
import {IconFontGlobalstyle} from './static/iconfont/iconfont';
import Header from './common/header/';
import store from './store';
import {Provider} from 'react-redux';
class App extends Component {
  render() {
    return (
      <div className="App">
       <div>
           <Provider store={store}>
           <Globalstyle />
           <IconFontGlobalstyle/>
         <Header/>
           </Provider>
       </div>
      </div>
    );
  }
}

export default App;
