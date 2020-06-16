import React, { Component } from 'react';
import { Navbar, NavbarBrand, Alert } from 'reactstrap';
import  Header from "./headercomponent";
import { HOMEIMAGES }  from "../shared/homeimages";
import Home from './homeComponent';
import Footer from './footercomponent';
import Detail from './DetailsComponent';
import Cart from './CartComponent';
import {Switch, Route,Redirect,withRouter, Router} from 'react-router-dom';
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
        
        <Route exact path="/home" component={()=><Home img={this.state.homeimages}/>}/>
        <Route  exact path="/home/:id" component={Kurtas}/>
        <Route exact path ="/home/:item/:navid" component={Detail}/>
        <Route exact path="/shoppingbag" component={Cart}/>


          </Switch>
          <Footer></Footer>
      </div>
        )
    }
}
export default Main;