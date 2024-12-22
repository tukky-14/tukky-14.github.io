import React from 'react';
import { render, screen } from '@testing-library/react';
import Aboutme from '../../components/Aboutme';
import '@testing-library/jest-dom';

describe('Aboutme Component', () => {
    test('見出しのテキストが正しく表示されること', () => {
        render(<Aboutme />);
        const heading = screen.getByRole('heading', { name: /about me/i });
        expect(heading).toBeInTheDocument();
    });

    test('画像がaltテキストとともに正しく表示されること', () => {
        render(<Aboutme />);
        const image = screen.getByAltText('つっきーのアイコン画像');
        expect(image).toBeInTheDocument();
        expect(image).toHaveAttribute('src', '/images/tukky.jpg');
    });

    test('ユーザーに関する一部のテキストが正しく表示されること', () => {
        render(<Aboutme />);
        const paragraph = screen.getByText(/京都府の田舎出身/);
        expect(paragraph).toBeInTheDocument();
    });
});
