import React from 'react';
import { Media } from 'reactstrap';
import {baseUrl} from '../shared/baseUrl';
import { Link } from 'react-router-dom';
const Veg = (props) => {

    function RenderItems({dish}) {
        return (
            
                    <Media tag="li" className="col-12">
                        <Link to={`/dishes/${dish.id}`}>

                            <Media left className="col-2 col-md-6 " >
                                <Media object className="rounded-circle" width="170" height="170"  src={baseUrl + dish.image} alt={dish.name} />
                            </Media>
                        </Link>
                        
                        <Media body className="col col-md">
                                <Media heading>{dish.name}</Media>
                                 <p className="d-none d-sm-block">{dish.description}</p>
                        </Media>

                    </Media>

        );
      }
      const menu = props.vegs.vegs.map((dish)=> {
        return (
            <div key={dish.id} className="mb-2 ml-n5">
                <RenderItems dish={dish} />
            </div>
        );
      })

      return (
        <div className="container-fluid col-12" style={{ backgroundColor : '#E2D6DB '}}>
            <Media list>
                {menu}
            </Media>
                
        </div>
          
      )
    
}
 
export default Veg;
