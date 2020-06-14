import React,{Component} from 'react';
import Carousel from 'react-bootstrap/Carousel';

  
export class Abc extends Component { 
    
    constructor(props)
    {
        super(props);
        
    }
    
  render() { 
      
    const carouselimg=this.props.carouselimages.map((image)=>{
        return(
            <Carousel.Item >  
                <img  className="d-block w-100"src={image.image}></img>        
           </Carousel.Item>  

        )
    })
       return (  
          
            <div className='container-fluid' >  
                <Carousel interval={700} keyboard={false} pauseOnHover={true}>  
                {carouselimg}
                </Carousel>       
              </div>  
       )
  }
}

export default Abc;