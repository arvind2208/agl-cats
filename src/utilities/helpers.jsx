export const getPetNamesByType = (pets, petType) => {
    return (pets || []).filter(pet => pet.type.toLowerCase() === petType.toLowerCase()).map(pet => pet.name);
};

export const sortAscending = (pets) => {
    return (pets || []).sort();
};