import React,{Component} from 'react';
import { Media} from 'reactstrap';
import { Card ,CardImg,CardImgOverlay,CardText,CardBody,CardTitle,Breadcrumb,BreadcrumbItem,Button,ButtonGroup} from 'reactstrap';
import {Link} from 'react-router-dom';
import Carousel from 'react-bootstrap/Carousel';
import {KURTAS} from "../shared/Kurtas";
import { render } from 'react-dom';
import { HOMEIMAGES }  from "../shared/homeimages";
import {ProductConsumer} from './context';

class Detail extends Component{

        constructor(props)
        {
            super(props);

            this.state= {
                    
                    navid:parseInt(props.match.params.navid),
                    name:props.match.params.item,
                    kurtas:KURTAS,
                    homeimages:HOMEIMAGES,
                    isSorted:false,
            }
        }

        render()
        {
            

                    
                return(

                    <div className="row">
                        <Media>
                            <ProductConsumer>
                                {value=>{
                                    return(
                                        value.products.map((photo)=>{
                                            if(this.state.navid===photo.navid && this.state.name===photo.item)
                                            {
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
                        
                                                      <Link to='/shoppingbag'><Button type="button" className=" ml-4 mt-3 offset-4 btn btn-danger btn-lg"><span className="fa fa-shopping-bag" onClick={() =>{value.addToCart(photo.cartid)}}>  Add to Bag</span></Button></Link>
                                                        <Button type="button" className="ml-4 mt-3 offset-4 btn btn-success btn-lg col-4"><span className="fa fa-inr fa-lg"> {photo.price}</span></Button>
                                                    </Media>
                                                  </Media>
                                                    </Card>
                                                )
                                            }
                                        })
                                    )
                                }}
                            </ProductConsumer>
                        </Media>
                    </div>

                )
                

            
        }

}
export default Detail;