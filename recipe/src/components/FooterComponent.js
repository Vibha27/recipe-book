import React from 'react';
import { Link } from 'react-router-dom';

function Footer(props){
    return(

<div className="footer" style={{ fontWeight : 'bold',backgroundColor : '#E4C8D2'}}>
        <div className="container">
            <div className="row justify-content-center">             
                <div className="col-4 offset-1 col-sm-2">
                    <h5>Links</h5>
                    <ul className="list-unstyled" style={{fontWeight: 'bold'}}>
                        <li><Link to="/home" style={{ color : 'red'}}>Home</Link></li>
                        <li><Link to='/addrecipe' style={{ color : 'red'}}>Add Recipe</Link></li>
                    </ul>
                </div>
                <div className="col-7 col-sm-5">
                    <h5>For Feedback or Enquiry</h5>
                    
		              <i className="fa fa-envelope fa-lg"></i>Email : <a href="S1032180@gmail.com">
                      S1032180@gmail.com</a>
                    
                </div>
                
            </div>
            <div className="row justify-content-center">             
                <div className="col-auto">
                    <p>© Copyright 2020 Food Lovers</p>
                </div>
            </div>
        </div>
    </div>
    )
}

export default Footer;