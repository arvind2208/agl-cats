import React from "react"
import { render, screen, fireEvent } from '@testing-library/react';
import Pet from './Pet';
import axiosMock from 'axios';
    
describe('should pet component rendering', () => {
  
    test('should render heading', () => {
    render(<Pet />);
    const linkElement = screen.getByText(/Pet Store/i);
    expect(linkElement).toBeInTheDocument();
    });
});


describe('should selection change change value', () => {
  
    test('should set the correct value', () => {
    render(<Pet />);
    const selectElement = screen.getByTitle("drpDownPetType");
    expect(selectElement.value).toBe("Cat");
    fireEvent.change(screen.getByTitle("drpDownPetType"), {
        target: { value: "Dog" },
      });
      expect(selectElement.value).toBe("Dog");
      
    });
});