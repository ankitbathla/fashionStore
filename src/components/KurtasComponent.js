import React,{Component} from 'react';
import { Media} from 'reactstrap';
import { Card ,CardImg,CardImgOverlay,CardText,CardBody,CardTitle,Breadcrumb,BreadcrumbItem,Button,ButtonGroup} from 'reactstrap';
import {Link} from 'react-router-dom';
import Carousel from 'react-bootstrap/Carousel';
import {KURTAS} from "../shared/Kurtas";
import { render } from 'react-dom';
import { HOMEIMAGES }  from "../shared/homeimages";
import { ProductConsumer} from './context';


class Kurtas extends Component{

    constructor(props)
    {
        super(props);
        this.state= {
                
                id:parseInt(props.match.params.id),
                kurtas:KURTAS,
                homeimages:HOMEIMAGES,
                isSorted:false,
        }

    }
    
   
       render()
      { 
          const photos=this.state.homeimages.map((photo)=>{
              if(this.state.id===photo.id)
              {
                  return(
                    <div className="container">
                    <div className="row">
                        <Breadcrumb>
    
                            <BreadcrumbItem><Link to="/home"> HOME</Link></BreadcrumbItem>
                            <BreadcrumbItem active>{photo.name}</BreadcrumbItem>
                        </Breadcrumb>
                      </div>
                    </div>  
                  );
              }
              else{
                  return(
                      null
                  );
              }

            })

            

                        
            return(
                <div className="container">
                    <div className="row">
                        {photos}
                    </div>
                    <div className="row">
                        <div className="col-12 col-md-2">
                            <Button className="m-2 btn btn-danger" type="button">SortByPrice</Button>
                        </div>
                    <div className="col-10">
                    
                    <div className="row">
                        <ProductConsumer>
                            {
                            value=>{
                                return(
                                     value.products.map((img)=>{
                                        if(this.state.id===img.id)
                                        {
                                            return(
                                               <Card className="col-12 col-md-3 m-4"  class="cardresize">
                                                    <Link to={`/home/${img.item}/${img.navid}`}><CardImg  src={img.image} className="card-img-top zoom">
                                                    </CardImg></Link>
                                                    <CardBody>
                                                    <CardTitle className="card-title">
                                                        <ButtonGroup>
                                                        <Button className="btn btn-success  btn-lg" type="button"onClick={() =>{value.addToCart(img.cartid);value.openModal(img.cartid)}}><span className="fa fa-shopping-bag">  Add to Bag</span></Button>
                                                        </ButtonGroup>
                                                    </CardTitle>
                                                    <CardText>
                                                        <h7><strong>{img.name}</strong></h7>
                                                            <h6>{ '                '}</h6>
                                                           <h8>{img.description}</h8>
                                                        <h6 className="offset-5 m-1"><Button className="btn btn-secondary"><span className="fa fa-inr fa-lg">{img.price}</span></Button></h6>
                        
                                                    </CardText>
                                                    </CardBody>
                                                </Card>
                                            )
                                        }
                                    }
                                    )
                                )
                                
                            }}
                        </ProductConsumer>
                    </div>
                    </div>
                    </div>
                </div>   
                
            )

    }
}
export default Kurtas;