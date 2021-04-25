import React from 'react';
import './PetList.css';

const PetList = (props) => {
    return (
        <div className="petlist">
            <h2 className="petlist">{props.gender}</h2>
            <ul data-gender={props.gender} className="petlist" aria-label="pets">
                {props.petsByGender.map((pet, index) => (
                <li data-gender={props.gender} key={index}><span></span>{pet}</li>
            ))}
            </ul>
        </div>
        );
};

export default PetList;