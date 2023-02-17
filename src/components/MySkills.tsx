const frontEndSkills = [
    { name: 'HTML', icon: 'html.svg' },
    { name: 'CSS', icon: 'css.svg' },
    { name: 'JavaScript', icon: 'javascript.svg' },
    { name: 'TypeScript', icon: 'typescript.svg' },
    { name: 'React', icon: 'react.svg' },
    { name: 'Next.js', icon: 'nextjs.svg' },
    { name: 'TailwindCSS', icon: 'tailwindcss.svg' },
    { name: 'MUI(旧Material UI)', icon: 'mui.svg' },
];

const backEndSkills = [
    { name: 'Node.js', icon: 'nodejs.svg' },
    { name: 'Ruby', icon: 'ruby.svg' },
    { name: 'Cache / IRIS', icon: 'iris.svg' },
    { name: 'MySQL', icon: 'mysql.svg' },
    { name: 'AWS Lambda', icon: 'lambda.svg' },
    { name: 'AWS DynamoDB', icon: 'dynamodb.svg' },
];
const serverSkills = [
    { name: 'Windows Server', icon: 'windows.svg' },
    { name: 'Linux', icon: 'linux.svg' },
    { name: 'AWS EC2', icon: 'ec2.svg' },
];

const devToolSkills = [
    { name: 'Git', icon: 'git.svg' },
    { name: 'SVN', icon: 'svn.svg' },
    { name: 'Redmine', icon: 'redmine.svg' },
    { name: 'Backlog', icon: 'backlog.svg' },
    { name: 'Visual Studio Code', icon: 'vscode.svg' },
    { name: 'Google Workspace', icon: 'googleworkspace.svg' },
    { name: 'Notion', icon: 'notion.svg' },
];

const certifications = [
    { name: 'ITパスポート', icon: 'ipa.svg' },
    { name: '基本情報技術者', icon: 'ipa.svg' },
    { name: 'AWS Cloud Practitioner', icon: 'awsclf.svg' },
    { name: 'AWS Solutions Architect', icon: 'awssaa.svg' },
    { name: 'AWS Developer', icon: 'awsdoa.svg' },
    { name: 'AWS SysOps Administrator', icon: 'awssoa.svg' },
];

const littleSkills = [
    { name: 'Zabbix', icon: 'zabbix.svg' },
    { name: 'Jenkins', icon: 'jenkins.svg' },
    { name: 'Firebase', icon: 'firebase.svg' },
    { name: 'Figma', icon: 'figma.svg' },
    { name: 'Google Apps Script', icon: 'gas.svg' },
];

const MySkills = () => {
    return (
        <div className="mb-40">
            <h2 className="text-center text-2xl mb-8 m-auto font-bold border-b-4 w-1/2 border-blue-500">MY SKILLS</h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-10">
                <div className="border h-72 p-2 bg-white">
                    <p className="text-center font-bold mb-2">フロントエンド</p>
                    {frontEndSkills.map((skill: { name: string; icon: string }) => (
                        <div className="flex mb-1">
                            <img className="w-4 mr-1" src={`/skill-icons/${skill.icon}`} alt="" />
                            <p>{skill.name}</p>
                        </div>
                    ))}
                </div>
                <div className="border h-72 p-2 bg-white">
                    <p className="text-center font-bold mb-2">バックエンド</p>
                    {backEndSkills.map((skill: { name: string; icon: string }) => (
                        <div className="flex mb-1">
                            <img className="w-4 mr-1" src={`/skill-icons/${skill.icon}`} alt="" />
                            <p>{skill.name}</p>
                        </div>
                    ))}
                </div>
                <div className="border h-72 p-2 bg-white">
                    <p className="text-center font-bold mb-2">サーバ・インフラ</p>
                    {serverSkills.map((skill: { name: string; icon: string }) => (
                        <div className="flex mb-1">
                            <img className="w-4 mr-1" src={`/skill-icons/${skill.icon}`} alt="" />
                            <p>{skill.name}</p>
                        </div>
                    ))}
                </div>
                <div className="border h-72 p-2 bg-white">
                    <p className="text-center font-bold mb-2">開発ツールなど</p>
                    {devToolSkills.map((skill: { name: string; icon: string }) => (
                        <div className="flex mb-1">
                            <img className="w-4 mr-1" src={`/skill-icons/${skill.icon}`} alt="" />
                            <p>{skill.name}</p>
                        </div>
                    ))}
                </div>
                <div className="border h-72 p-2 bg-white">
                    <p className="text-center font-bold mb-2">資格</p>
                    {certifications.map((skill: { name: string; icon: string }) => (
                        <div className="flex mb-1">
                            <img className="w-4 mr-1" src={`/skill-icons/${skill.icon}`} alt="" />
                            <p>{skill.name}</p>
                        </div>
                    ))}
                </div>
                <div className="border h-72 p-2 bg-white">
                    <p className="text-center font-bold mb-2">ちょっとだけ</p>
                    {littleSkills.map((skill: { name: string; icon: string }) => (
                        <div className="flex mb-1">
                            <img className="w-4 mr-1" src={`/skill-icons/${skill.icon}`} alt="" />
                            <p>{skill.name}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default MySkills;
