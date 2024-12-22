/**
 * @file MySkills.test.tsx
 */
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import MySkills from '@/components/MySkills';
import { skills } from '@/data/skills';

describe('MySkills コンポーネントのテスト', () => {
    it('セクションタイトル「MY SKILLS」が表示されること', () => {
        render(<MySkills />);
        const headingElement = screen.getByRole('heading', { level: 2, name: 'MY SKILLS' });
        expect(headingElement).toBeInTheDocument();
    });

    it('セクションが id="my_skills" を持つこと', () => {
        render(<MySkills />);
        // テスト対象のDIVが id="my_skills" を持つかどうかを検証
        const sectionElement = document.getElementById('my_skills');
        expect(sectionElement).toBeInTheDocument();
    });

    it('各スキルカテゴリのタイトルが表示されること', () => {
        render(<MySkills />);
        skills.forEach((skill) => {
            // タイトルが表示されているか（例：Frontend, Backend, etc.）
            expect(screen.getByText(skill.title)).toBeInTheDocument();
        });
    });

    it('各カテゴリのスキルリンクが正しく表示されていること', () => {
        render(<MySkills />);

        // skills の各カテゴリごとに内部のリンクをテスト
        skills.forEach((category) => {
            category.skills.forEach((skill) => {
                // skill.name のテキストを含む要素を取得
                const linkElement = screen.getAllByTestId(skill.name);
                // aタグの href属性の確認
                expect(linkElement[0]).toHaveAttribute('href', skill.link);
                expect(linkElement[0]).toHaveAttribute('target', '_blank');
                expect(linkElement[0]).toHaveAttribute('rel', 'noreferrer');
            });
        });
    });

    it('アイコン画像が正しく表示されること', () => {
        render(<MySkills />);

        // skills の各カテゴリごとにアイコン画像をテスト
        skills.forEach((category) => {
            category.skills.forEach((skill) => {
                // altに {category.title}のアイコン画像 が設定されている想定
                const imgElement = screen.getByAltText(`${skill.name}のアイコン画像`);
                expect(imgElement).toBeInTheDocument();
                // 画像パスが正しいか検証
                expect(imgElement).toHaveAttribute('src', `/skill-icons/${skill.icon}`);
            });
        });
    });
});
