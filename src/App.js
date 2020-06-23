import React, {Component} from 'react';
import {BrowserRouter} from 'react-router-dom';
import Main from "./components/mainComponent";
import {ProductProvider} from './components/context';
import './App.css';

class App extends Component{

  constructor(props)
  {
    super(props);
  }

    render()
    {
      return(

        <ProductProvider>
          <BrowserRouter>
    <div className="App">
      <Main />
    </div>
    </BrowserRouter>
        </ProductProvider>
      )
    }
}

export default App;
