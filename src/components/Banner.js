import React from 'react';

import Banner1 from '../images/galeria/1.jpg';
import Banner2 from '../images/galeria/2.jpg';
import Banner3 from '../images/galeria/3.jpg';
import './Banner.css';
class Banner extends React.Component{
    render(){
        return(
            <React.Fragment>
                <div id="banner" className="carousel slide dark-back" data-ride="carousel">
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <img className="d-block w-100" src={Banner1} alt="First slide" />
                        </div>
                        <div className="carousel-item">
                            <img className="d-block w-100" src={Banner2} alt="Second slide" />
                        </div>
                        <div className="carousel-item">
                            <img className="d-block w-100" src={Banner3} alt="Third slide" />
                        </div>
                    </div>
                    <a className="carousel-control-prev" href="#banner" role="button" data-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    </a>
                    <a className="carousel-control-next" href="#banner" role="button" data-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    </a>
                </div>
            </React.Fragment>
        );
    }
}

export default Banner;