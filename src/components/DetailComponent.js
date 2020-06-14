import React from 'react';
import { Media} from 'reactstrap';
import { Card ,CardImg,CardImgOverlay,CardText,CardBody,CardTitle,Breadcrumb,BreadcrumbItem} from 'reactstrap';
import {Link} from 'react-router-dom';
const Detail = (props) =>{
    if(props.dish != null){
        return(       
            <div className="container">
                <div className="row">
                    <Breadcrumb>
                        <BreadcrumbItem><Link to="/Home">Home</Link></BreadcrumbItem>
                        <BreadcrumbItem active>{props.dish.name}</BreadcrumbItem>
                    </Breadcrumb>
                    <div className="col-12">
                        <h3>{props.dish.name}</h3>
                        <hr/>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12 col-md-5 m-1">
                        <RenderDish paramDish={props.dish}/>
                    </div>
                </div>
            </div>
        );
    }else{
        return <div></div>;
    }
}   


function RenderDish({paramDish}){
    return(
        <Card>
            <CardImg src={paramDish.image} width="100%" alt={paramDish.name}/>
        </Card>
    );
}

export default Detail;