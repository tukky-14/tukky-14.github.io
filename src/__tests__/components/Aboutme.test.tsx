import React from 'react';
import { render, screen } from '@testing-library/react';
import Aboutme from '../../components/Aboutme';
import '@testing-library/jest-dom';

describe('Aboutme Component', () => {
    test('renders the heading text', () => {
        render(<Aboutme />);
        const heading = screen.getByRole('heading', { name: /about me/i });
        expect(heading).toBeInTheDocument();
    });

    test('renders the image with correct alt text', () => {
        render(<Aboutme />);
        const image = screen.getByAltText('つっきーのアイコン画像');
        expect(image).toBeInTheDocument();
        expect(image).toHaveAttribute('src', '/images/tukky.jpg');
    });

    test('renders the paragraph text about user', () => {
        render(<Aboutme />);
        const paragraph = screen.getByText(/京都府の田舎出身/);
        expect(paragraph).toBeInTheDocument();
    });
});
