import React, { Component } from 'react';
import { Navbar, NavbarBrand, Alert } from 'reactstrap';
import  Header from "./headercomponent";
import { HOMEIMAGES }  from "../shared/homeimages";
import Home from './homeComponent';
import {Switch, Route,Redirect,withRouter} from 'react-router-dom';
import Kurtas from './KurtasComponent';


class Main extends Component{

    constructor(props)
    {
        super(props);
        this.state={
            homeimages:HOMEIMAGES,
        }
    }

    

    render()
    {

        
        

        return(

        <div>
        <Header></Header>
        <Switch>
        
        <Route exact path="/Home" component={()=><Home img={this.state.homeimages}/>}/>
        <Route path="/home/:id" component={Kurtas}/>
          </Switch>
      </div>
        )
    }
}
export default Main;