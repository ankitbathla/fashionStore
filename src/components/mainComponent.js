import React, { Component } from 'react';
import { Navbar, NavbarBrand, Alert } from 'reactstrap';
import  Header from "./headercomponent";
import { HOMEIMAGES }  from "../shared/homeimages";
import Home from './homeComponent';
import Detail from './DetailComponent';
import {Switch, Route,Redirect,withRouter} from 'react-router-dom';
import { TOPCATEGORIESIMAGES } from '../shared/topcategoriesimages';


class Main extends Component{

    constructor(props)
    {
        super(props);
        this.state={
            homeimages:HOMEIMAGES,
            topcategoriesimages:TOPCATEGORIESIMAGES,
        }
    }

    

    render()
    {

        const DishWithId = ({match}) => {
            return(
                <Detail dish={this.state.topcategoriesimages.filter((dish) => dish.id === parseInt(match.params.dishId,10))[0]} />
            );
          };
        

        return(

        <div>
        <Header></Header>
        <Switch>
        
        <Route exact path="/Home" component={()=><Home img={this.state.homeimages}/>}/>
        <Route path="/Home/:DishId" component={DishWithId}/> 
        <Redirect to="/Home"></Redirect>      
          </Switch>
      </div>
        )
    }
}
export default Main;