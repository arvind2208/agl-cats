import React, {useEffect, useState} from 'react';
import './Pet.css';
import {getPets} from '../../services/PetsService';
import PetList from '../PetList/PetList';

const Pet = () => {
    const initializeCats = () => {
        return { male: [], female: [] };
    };

    const [cats, setCats] = useState(initializeCats());
    const [petType, setPetType] = useState("Cat");

    const handlePetTypeChange = (event) => {
        setPetType(event.target.value);
      }
    
    const filterByType = (pets, petType) => {
        return (pets || []).filter(pet => pet.type === petType).map(pet => pet.name);
    };

    const sortAscending = (pets) => {
        return (pets || []).sort();
    };

    useEffect(() => {

        getPets()
        .then(results => {

        const owners = results;

        console.log('owners ' + JSON.stringify(owners));

        const petOwners = owners.reduce((petsByGender, owner) => {
            const key = owner.gender.toLowerCase();

            petsByGender[key] = sortAscending(petsByGender[key].concat(filterByType(owner.pets, petType)))

            return petsByGender;
        }, initializeCats());

        setCats(petOwners);
        console.log('pet owners' + JSON.stringify(petOwners));
    });

    }, [petType]);  
    return (
    <div className="Pet">
        <div className="top">
            <h1 className="pet">Pet Store</h1>
            <label htmlFor="drpDownPetType" className="pet">Choose a pet type from the list: </label>
            <select id="drpDownPetType" className="pet" name="petType" value={petType} onChange={handlePetTypeChange}>
                <option value="Cat">Cat</option>
                <option value="Dog">Dog</option>
            </select>
        </div>
        <div className="left"><PetList gender = 'Owned by males' petsByGender = {cats.male}/></div>
        <div className="left"><PetList gender = 'Owned by females' petsByGender = {cats.female}/></div>
    </div>
    );
}

export default Pet;
