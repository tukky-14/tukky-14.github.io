
const frontEndSkills = [
    { name: 'HTML', icon: 'html.svg', link: 'https://developer.mozilla.org/ja/docs/Learn/Getting_started_with_the_web/HTML_basics' },
    { name: 'CSS', icon: 'css.svg', link: 'https://developer.mozilla.org/ja/docs/Web/CSS' },
    { name: 'JavaScript', icon: 'javascript.svg', link: 'https://developer.mozilla.org/ja/docs/Web/JavaScript' },
    { name: 'TypeScript', icon: 'typescript.svg', link: 'https://www.typescriptlang.org/' },
    { name: 'React', icon: 'react.svg', link: 'https://ja.react.dev/' },
    { name: 'Next.js', icon: 'nextjs.svg', link: 'https://nextjs.org/' },
    { name: 'TailwindCSS', icon: 'tailwindcss.svg', link: 'https://v2.tailwindcss.com/' },
    { name: 'MUI(旧Material UI)', icon: 'mui.svg', link: 'https://mui.com/' },
];

const backEndSkills = [
    { name: 'Node.js', icon: 'nodejs.svg', link: 'https://nodejs.org/ja/' },
    { name: 'Ruby', icon: 'ruby.svg', link: 'https://www.ruby-lang.org/ja/' },
    { name: 'Python', icon: 'python.svg', link: 'https://www.python.org/' },
    { name: 'InterSystems Cache / IRIS', icon: 'iris.svg', link: 'https://www.intersystems.com/jp/data-platform/' },
    { name: 'AWS Lambda', icon: 'lambda.svg', link: 'https://aws.amazon.com/jp/lambda/' },
];

const serverSkills = [
    { name: 'Oracle', icon: 'oracle.svg', link: 'https://aws.amazon.com/jp/dynamodb/' },
    { name: 'AWS DynamoDB', icon: 'dynamodb.svg', link: 'https://aws.amazon.com/jp/dynamodb/' },
    { name: 'Windows Server', icon: 'windows.svg', link: 'https://www.microsoft.com/ja-jp/windows-server' },
    { name: 'AWS EC2', icon: 'ec2.svg', link: 'https://aws.amazon.com/jp/ec2/' },
    { name: 'Vercel', icon: 'vercel.svg', link: 'https://vercel.com/' },
    { name: 'Firebase', icon: 'firebase.svg', link: 'https://firebase.google.com/?hl=ja' },
];

const devToolSkills = [
    { name: 'Git', icon: 'git.svg', link: 'https://git-scm.com/' },
    { name: 'SVN', icon: 'svn.svg', link: 'https://tortoisesvn.net/support.html' },
    { name: 'Redmine', icon: 'redmine.svg', link: 'https://redmine.jp/' },
    { name: 'Backlog', icon: 'backlog.svg', link: 'https://backlog.com/ja/' },
    { name: 'Visual Studio Code', icon: 'vscode.svg', link: 'https://azure.microsoft.com/ja-jp/products/visual-studio-code' },
    { name: 'Google Workspace', icon: 'googleworkspace.svg', link: 'https://workspace.google.co.jp/intl/ja/' },
    { name: 'Notion', icon: 'notion.svg', link: 'https://www.notion.so/ja-jp' },
];

const certifications = [
    { name: 'ITパスポート', icon: 'ipa.svg', link: 'https://www3.jitec.ipa.go.jp/JitesCbt/' },
    { name: '基本情報技術者', icon: 'ipa.svg', link: 'https://www.jitec.ipa.go.jp/1_11seido/fe.html' },
    { name: 'AWS Cloud Practitioner', icon: 'awsclf.svg', link: 'https://aws.amazon.com/jp/certification/certified-cloud-practitioner/' },
    { name: 'AWS Solutions Architect', icon: 'awssaa.svg', link: 'https://aws.amazon.com/jp/certification/certified-solutions-architect-associate/' },
    { name: 'AWS Developer', icon: 'awsdoa.svg', link: 'https://aws.amazon.com/jp/certification/certified-developer-associate/' },
    { name: 'AWS SysOps Administrator', icon: 'awssoa.svg', link: 'https://aws.amazon.com/jp/certification/certified-sysops-admin-associate/' },
];

const littleSkills = [
    { name: 'Zabbix', icon: 'zabbix.svg', link: 'https://www.zabbix.com/jp' },
    { name: 'Jenkins', icon: 'jenkins.svg', link: 'https://www.jenkins.io/' },
    { name: 'Figma', icon: 'figma.svg', link: 'https://www.figma.com/ja/' },
    { name: 'Google Apps Script', icon: 'gas.svg', link: 'https://workspace.google.co.jp/intl/ja/products/apps-script/' },
    { name: 'Astro', icon: 'astro.svg', link: 'https://astro.build/' },
    { name: 'Wijmo', icon: 'wijmo.svg', link: 'https://developer.mescius.jp/wijmo?utm_medium=link&utm_source=demo-wijm' },
];

export const skills = [
    { title: 'フロントエンド', skills: frontEndSkills },
    { title: 'バックエンド', skills: backEndSkills },
    { title: 'インフラ', skills: serverSkills },
    { title: '開発ツールなど', skills: devToolSkills },
    { title: '資格', skills: certifications },
    { title: 'その他', skills: littleSkills },
];
