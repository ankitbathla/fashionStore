import React,{Component} from 'react';
import { Media, ModalHeader, ModalBody,Toast,Button, Card,Modal} from 'reactstrap';
import {Link} from 'react-router-dom';
import Carousel from 'react-bootstrap/Carousel';
import {ProductConsumer} from './context';
export default class ModalContainer extends Component {
    render()
    {
        return(
            <ProductConsumer>
                {(value)=>{
                    const {modalOpen,closeModal}=value;
                    const {item,price ,image ,description}=value.modalProduct;
                    if(!modalOpen)
                    {
                        return null;
                    }
                    else
                    {
                        return(
                               
                                
                                    <div className="container" >
                  <div className="row">
                    <div
                      className="col-8 mx-auto col-md-6 col-lg-4 p-5 text-center text-capitalize"
                      id="modal"
                    >
                      <Button className="btn btn-danger btn-lg m-3"><h5>item added to cart</h5></Button>
                      <img src={image} className="img-fluid m-2" alt="" />
                      <h5 className="text-muted">price : <span className="fa fa-inr fa-lg">{price}</span></h5>
                        <Button className="btn btn-success btn-lg m-2"
                          onClick={() => {
                            closeModal();
                          }}
                        >
                          Continue Shopping   
                        </Button>
                      <Link to="/shoppingbag">
                        <Button
                          className="btn btn-warning btn-lg"
                          onClick={() => {
                            closeModal();
                          }}
                        >
                          Go To Bag
                        </Button>{ "  "}
                      </Link>
                    </div>
                  </div>
                </div>
                               
                
                        
                        ) 
                    }
                }}
            </ProductConsumer>
        )
    }
}