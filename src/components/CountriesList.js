import React from 'react';

const CountriesList = (props) => {
    return (
        <div className="col-5" style={{maxHeight: '90vh', overflow: 'scroll'}}>
            <div className='list-group'>
                {props['countries'].map(country => {
                    return(
                        <a className="list-group-item list-group-item-action" href={`/${country.cca3}`} key={country.name.common}>{country.flag} {country.name.common}</a>
                    );
                })}
            </div>
        </div>
    );
}
 
export default CountriesList;