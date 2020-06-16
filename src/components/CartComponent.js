import React,{Component} from 'react';
import { Media} from 'reactstrap';
import { Card ,CardImg,CardImgOverlay,CardText,CardBody,CardTitle,Breadcrumb,BreadcrumbItem,Button,ButtonGroup} from 'reactstrap';
import {Link} from 'react-router-dom';
import Carousel from 'react-bootstrap/Carousel';
import {KURTAS} from "../shared/Kurtas";
import { render } from 'react-dom';
import { HOMEIMAGES }  from "../shared/homeimages";
import {CART} from '../shared/Cart';

class Cart extends  Component{

constructor(props)
{
    super(props);
    this.state={
        item:props.match.params.item,
        navid:parseInt(props.match.params.navid),
        cart:CART,
    }
}
render()
{
    
    const photos =this.state.cart.map((photo)=>{
        
            return(
            
                <Card className="m-5 offset-5">
                    <Media tag="li" className="m-6">
                <Media left middle className="m-5">
                    <Media object src={photo.image} width="100%" className="m-4 zoom" />
                </Media>
                <Media body className="m-5 offset-5">
                  <Media heading  className="offset-4">{photo.name}</Media>
                  <h6 className="offset-3">{photo.description}</h6>
                  <Card  className="col-12 ">
                      <CardBody >
                          <CardText>
                          <p>{photo.info}</p>
                          <p>{photo.info1}</p>
                          <p>{photo.info2}.</p>
                          </CardText>
                      </CardBody>
                  </Card>
                </Media>
              </Media>
                </Card>
            )
    })
    return(

        <div className="row">
            <Media>
                {photos}
            </Media>
        </div>

    )
}

}
export default Cart;
