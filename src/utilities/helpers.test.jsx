import {getPetNamesByType, sortAscending} from './helpers'

describe('getting pet names by type', () => {
    test("should fetch the correct number of records", () => {

        let pets = [{"name": "Tom","type": "Cat"}, {"name": "Max","type": "Cat"}, {"name": "Sam","type": "Dog"},{"name": "Jim","type": "Cat"}];
        
        let petNames = getPetNamesByType(pets, 'Cat');
        expect(petNames.length).toBe(3);
        expect(petNames[0]).toBe("Tom");
        expect(petNames[1]).toBe("Max");
        expect(petNames[2]).toBe("Jim");
    });

    test("should be case insensitive", () => {

        let pets = [{"name": "Tom","type": "Cat"}, {"name": "Max","type": "Cat"}, {"name": "Sam","type": "Dog"},{"name": "Jim","type": "Cat"}];
        
        let petNames = getPetNamesByType(pets, 'cat');
        expect(petNames.length).toBe(3);
    });

    test("should not fail if the array is empty", () => {

        let pets = [];
        
        let petNames = getPetNamesByType(pets, 'cat');
        expect(petNames.length).toBe(0);
    });
});

describe('sorting array elements alphabetically', () => {
    test("should sort correctly", () => {

        let petNames = ["Tom", "Max", "Jim"];
        
        let result = sortAscending(petNames, 'Cat');
        expect(result.length).toBe(3);
        expect(result[0]).toBe("Jim");
        expect(result[1]).toBe("Max");
        expect(result[2]).toBe("Tom");
    });

    test("should not fail if the array is empty", () => {

        let petNames = [];
        
        let result = sortAscending(petNames, 'Cat');
        expect(result.length).toBe(0);
    });
});