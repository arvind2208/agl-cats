import React from "react"
import { render, screen, within } from '@testing-library/react';
import PetList from './PetList';
    
describe('should petlist component rendering', () => {
  
    test('should render correct number of elements', () => {
    render(<PetList gender = 'Owned by males' petsByGender = {["Jim", "Max", "Tim"]} />);

    const list = screen.getByRole("list", {
        name: /pets/i,
    });

    const { getAllByRole } = within(list)
    const items = getAllByRole("listitem")
    expect(items.length).toBe(3)
    });
});