// jest.config.js

const nextJest = require('next/jest');

// Next.js アプリのルートディレクトリを指定
const createJestConfig = nextJest({
    dir: './',
});

// Jest のカスタム設定をここに書く
const customJestConfig = {
    testEnvironment: 'jest-environment-jsdom',
    // TypeScript + JSX を扱うために transform を設定
    transform: {
        '^.+\\.(js|jsx|ts|tsx)$': ['babel-jest', { presets: ['next/babel'] }],
    },
    // もしカバレッジレポートなど設定したい場合
    // collectCoverage: true,
    // collectCoverageFrom: ['**/*.{js,jsx,ts,tsx}', '!**/node_modules/**'],
};

module.exports = createJestConfig(customJestConfig);
