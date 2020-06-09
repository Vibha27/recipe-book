import React from 'react';
import { Media } from 'reactstrap';
import {baseUrl} from '../shared/baseUrl';
import { Link } from 'react-router-dom';

const Drink = (props) => {

    function RenderItems({dish}) {
        return (
                <Media tag="li" className="col-12">
                    <Link to={`/dishes/${dish.id}`}>

                        <Media left middle>
                            <Media className="rounded-circle" width="170" height="170" object src={baseUrl + dish.image} alt={dish.name} />
                        </Media>
                    </Link>
                    
                        <Media body className="col col-md">
                                <Media heading>{dish.name}</Media>
                                    <p className="d-none d-sm-block">{dish.description}</p>
                        </Media>
                </Media>
            
        );
      }
      const menu = props.drinks.drinks.map((dish)=> {
        return (
            <div key={dish.id} className="mb-2 ml-n4">
                <RenderItems dish={dish} />
            </div>
        );
      })

      return (
        <Media list className="col-12" style={{ backgroundColor : '#E2D6DB '}}>
            {menu}
        </Media>
      )
    
}
 
export default Drink;
