import React, { Component } from 'react';
import {render, screen} from '@testing-library/react';
import '@testing-library/jest-dom';
import App from '../App';

describe('App', () => {
    let items;
    beforeEach(() => {
        render(<App />);
        items = screen.getAllByText("Click to copy emoji");
    });

    test("Emoji List Render Test", () => {
            expect(items.length).toBe(20);
    });

    
    test("Emoji Copy Test", () => {
        const item = screen.getByText("Click to copy emoji");
        item.click();
        expect(item).toHaveAttribute("data-clipboard-text", "Click to copy emoji");
    });
    
});