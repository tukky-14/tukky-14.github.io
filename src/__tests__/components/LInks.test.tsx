/**
 * @file Links.test.tsx
 */
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Links from '@/components/Links';
import { links } from '@/data/links';

describe('Links component', () => {
    it('リンクが正しい数だけ表示されること', () => {
        render(<Links />);
        // aタグ(リンク)として取得
        const linkElements = screen.getAllByRole('link');
        expect(linkElements).toHaveLength(links.length);
    });

    it('各リンクの属性が正しく設定されていること', () => {
        render(<Links />);
        // mapでループしながら個別検証
        links.forEach((link) => {
            // `role="link"` を持ち、内部の <img> の alt が `${link.name}のアイコン画像` になっている要素を検索
            // alt 属性を見つけるには `getByAltText` も利用可能です
            const anchorElement = screen.getByRole('link', {
                name: `${link.name}のアイコン画像`,
            });

            // 属性の検証
            expect(anchorElement).toHaveAttribute('href', link.link);
            expect(anchorElement).toHaveAttribute('target', '_blank');
            expect(anchorElement).toHaveAttribute('rel', 'noreferrer');
        });
    });

    it('アイコン画像の表示が正しいこと', () => {
        render(<Links />);
        // 画像要素を一括取得
        const imageElements = screen.getAllByRole('img');
        expect(imageElements).toHaveLength(links.length);

        links.forEach((link) => {
            const imageElement = screen.getByAltText(`${link.name}のアイコン画像`);
            // 画像のパスが正しいか
            expect(imageElement).toHaveAttribute('src', `/icons/${link.icon}`);
        });
    });
});
