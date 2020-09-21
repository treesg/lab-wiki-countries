import React from 'react';
import { Link } from 'react-router-dom';

const CountriesList = (props) => {
    return (
        <div className="col-5" style={{maxHeight: '90vh', overflow: 'scroll'}}>
            <div className='list-group'>
                {props['countries'].map(country => {
                    return(
                        <Link className="list-group-item list-group-item-action" to={`/${country.cca3}`} key={country.name.common}>{country.flag} {country.name.common}</Link>
                    );
                })}
            </div>
        </div>
    );
}
 
export default CountriesList;