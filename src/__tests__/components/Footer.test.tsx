import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Footer from '@/components/Footer';

describe('Footer Component', () => {
    test('クラッシュすることなく正しくレンダリングされること', () => {
        render(<Footer />);
    });

    test('テキストが正しく表示されること', () => {
        render(<Footer />);
        const footerText = screen.getByText(/© 2023 tukky/i);
        expect(footerText).toBeInTheDocument();
    });
});
