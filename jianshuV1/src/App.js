import React, { Component } from 'react';
import{ Globalstyle  } from './style';
import {IconFontGlobalstyle} from './static/iconfont/iconfont';
import Header from './common/header/';
import store from './store';
import {Provider} from 'react-redux';
import {BrowserRouter,Route} from 'react-router-dom';
import Home from './pages/home';
import Detail from './pages/detail'
class App extends Component {
  render() {
    return (
      <div className="App">
       <div>
           <Provider store={store}>
               <Globalstyle />
               <IconFontGlobalstyle/>
               <div>
                   <Header/>
                   <BrowserRouter>
                       <div>
                           <Route path='/' exact component={Home}>

                           </Route>

                           <Route path='/detail' exact component={Detail}></Route>
                       </div>
                   </BrowserRouter>
               </div>
           </Provider>
       </div>
      </div>
    );
  }
}

export default App;
