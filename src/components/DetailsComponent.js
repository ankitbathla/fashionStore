import React,{Component} from 'react';
import { Media} from 'reactstrap';
import { Card ,CardImg,CardImgOverlay,CardText,CardBody,CardTitle,Breadcrumb,BreadcrumbItem,Button,ButtonGroup} from 'reactstrap';
import {Link} from 'react-router-dom';
import Carousel from 'react-bootstrap/Carousel';
import {KURTAS} from "../shared/Kurtas";
import { render } from 'react-dom';
import {CART} from '../shared/Cart';
import { HOMEIMAGES }  from "../shared/homeimages";

class Detail extends Component{

        constructor(props)
        {
            super(props);
            this.handleAddFunc = this.handleAddFunc.bind(this);

            this.state= {
                    
                    navid:parseInt(props.match.params.navid),
                    name:props.match.params.item,
                    kurtas:KURTAS,
                    homeimages:HOMEIMAGES,
                    isSorted:false,
                    cart:CART,
            }
        }

        handleAddFunc(product)
        {
            console.log("clicked",product);
            const existingProduct=this.state.cart.filter((p)=>(p.navid=== product.navid && p.item===product.item));
            if(existingProduct.length>0)
            {
                const withoutExistingProduct =this.state.cart.filter((p)=> (p.navid!==product.navid && p.item!==product.item));
                const updatedUnitsProducts={
                    ...existingProduct[0],
                    units:existingProduct[0].units+product.units
                }
                this.setState({
                    cart:[{...withoutExistingProduct,updatedUnitsProducts}]
                })
            }
            else
            {
                this.setState({
                    cart:[{...this.state.cart,product}],
                })
            }
    
        }
        render()
        {
            

                    const photos =this.state.kurtas.map((photo)=>{
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

                              <Button type="button" className=" ml-4 mt-3 offset-4 btn btn-danger btn-lg" onClick={() => this.handleAddFunc({photo})}><span className="fa fa-shopping-bag">  Add to Bag</span></Button>
                                <Button type="button" className="ml-4 mt-3 offset-4 btn btn-success btn-lg col-4"><span className="fa fa-inr fa-lg"> {photo.price}</span></Button>
                            </Media>
                          </Media>
                            </Card>
                        )
                    }
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
export default Detail;