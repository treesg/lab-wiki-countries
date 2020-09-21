import React from 'react';
import countries from '../countries.json';

const CountryDetails = (props) => {
    let country = countries.find(country => country.cca3 === props.match.params.id);
    return (
        <div>
            <h1>{country.name.common}</h1>
            <table className="table">
                <tbody>
                    <tr>
                        <td style={{width: '30%'}}>Capital</td>
                        <td>{country.capital[0] ? country.capital[0] : 'None'}</td>
                    </tr>
                    <tr>
                        <td>Area</td>
                        <td>{country.area} km <sup>2</sup></td>
                    </tr>
                    <tr>
                        <td>Borders</td>
                        <td><ul>{country.borders[0] ? country.borders.map(cca3 => {
                            let borderCountry = countries.find(country => country.cca3 === cca3);
                            return (
                                <li key={borderCountry.cca3}><a href={`/${borderCountry.cca3}`}>{borderCountry.name.common}</a></li>
                            );
                        }): 'None'}</ul></td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}
 
export default CountryDetails;