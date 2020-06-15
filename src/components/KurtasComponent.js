import React,{Component} from 'react';
import { Media} from 'reactstrap';
import { Card ,CardImg,CardImgOverlay,CardText,CardBody,CardTitle,Breadcrumb,BreadcrumbItem} from 'reactstrap';
import {Link} from 'react-router-dom';
import Carousel from 'react-bootstrap/Carousel';
import {KURTAS} from "../shared/Kurtas";
import { render } from 'react-dom';
import { HOMEIMAGES }  from "../shared/homeimages";


class Kurtas extends Component{

    constructor(props)
    {
        super(props);
        this.state= {
                
                id:parseInt(props.match.params.id),
                kurtas:KURTAS,
                homeimages:HOMEIMAGES,
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
                  )
              }
              else{
                  return(
                      null
                  )
              }

            })

            const img=this.state.homeimages.map((img)=>{
                if(this.state.id===img.id)
                {
                    return(

                        <Card>
                    <CardImg src={img.image} />
                        </Card>
                    )
                }
            })
            return(
                <div className="container">
                    <div className="row">
                        {photos}
                    </div>
                    <div className="row">
                        {img}
                    </div>
                    </div>
                
            )

    }
}
export default Kurtas;