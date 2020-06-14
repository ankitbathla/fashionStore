import React from 'react';
import { Card, CardImg, CardImgOverlay,CardTitle,Breadcrumb,BreadcrumbItem } from 'reactstrap';
import { Link } from 'react-router-dom';
function Renderimg({img}) {

    const photos=img.map((photo)=>{
        return(
            <Link to={`/home/${photo.id}`}><img src={photo.image} height="250" className="m-2"></img></Link>
        );
    })

    return(
        <a>
          {photos}
        </a>
    )

}

function Home(props) {
    return(
        <div className="container">
            <div className="row align-items-start">
                <h3 className="col-12 m-5"><strong># Shop Top Categories</strong></h3>
                <div className="col-2 col-md m-1">
                    <Renderimg img={props.img} />
                </div>
            </div>
        </div>
    );
}

export default Home;
