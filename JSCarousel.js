import React, {Component} from 'react';
import Carousel from '@brainhubeu/react-carousel';
import '@brainhubeu/react-carousel/lib/style.css';
import 'react-lazy-load-image-component/src/effects/blur.css';

import { LazyLoadImage } from 'react-lazy-load-image-component';

class JSCarousel extends Component {
    state = {
        value : 0
    }
    onChange = e => this.setState({ value: e.target ? e.target.value : e });
    render(){
        const { stateProp } = this.props;
        //console.log(stateProp)
        return <Carousel slidesPerPage={5} arrows infinite
            
                value={this.state.value}
                onChange={this.onChange} 
                >  
            {
                stateProp.map(stateProp =>{
            return <div className="card"  key= {stateProp.id}>
            <LazyLoadImage
            effect= "blur"
                src={stateProp.thumbnailUrl} // use normal <img> attributes as props
             />
                          
            <div className="card-body">albumId: {stateProp.albumId}</div>
            <p className="card-text">id: {stateProp.id}</p>
            </div>
                })
                
            }
    </Carousel>
    }

}

export default JSCarousel;

/**
 * 
 *  className="card-img-top"
className="card-img-top"
className="card-img-top"
 */