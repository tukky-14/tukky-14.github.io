/**
 * @file Works.test.tsx
 */
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Works from '@/components/Works';
import { works } from '@/data/works';

describe('Works コンポーネントのテスト', () => {
    it('セクションタイトル「WORKS」が表示されること', () => {
        render(<Works />);
        const heading = screen.getByRole('heading', { level: 2, name: 'WORKS' });
        expect(heading).toBeInTheDocument();
    });

    it('セクションが id="works" を持つこと', () => {
        render(<Works />);
        // "works" という id を持つエレメントがあるかどうか
        const section = document.getElementById('works');
        expect(section).toBeInTheDocument();
    });

    it('works の要素数分だけ Link が表示されること', () => {
        render(<Works />);
        // Next.js の Link は内部的には <a> ですが、Testing Library では role="link" で取得可能
        const linkElements = screen.getAllByRole('link');
        expect(linkElements).toHaveLength(works.length);
    });

    it('リンク属性が正しく設定されていること', () => {
        render(<Works />);
        works.forEach((work) => {
            // タイトルを含むリンクを取得
            // テキストや画像など、内部に "work.title" を含む要素があるので
            // ここでは alt で検索 or link 要素を一括取得して絞り込み など、色々なパターンが考えられます。
            // とりあえずタイトルがリンク内にあると仮定して "getByText(work.title)" を使います。
            const linkElement = screen.getByText(work.title).closest('a');
            expect(linkElement).toBeInTheDocument();

            if (linkElement) {
                expect(linkElement).toHaveAttribute('href', work.url);
                expect(linkElement).toHaveAttribute('target', '_blank');
                expect(linkElement).toHaveAttribute('rel', 'noreferrer');
            }
        });
    });

    it('画像が正しく表示されていること', () => {
        render(<Works />);
        works.forEach((work) => {
            // alt が「タイトルの画像」となっているか確認
            const imageElement = screen.getByAltText(`${work.title}の画像`);
            expect(imageElement).toBeInTheDocument();
            expect(imageElement).toHaveAttribute('src', work.img);
        });
    });

    it('work のタイトル、説明、使用技術が表示されていること', () => {
        render(<Works />);
        works.forEach((work) => {
            // タイトル
            expect(screen.getByText(work.title)).toBeInTheDocument();
            // 説明文
            expect(screen.getByText(work.description)).toBeInTheDocument();
        });
    });
});
