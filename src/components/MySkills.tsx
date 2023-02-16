const MySkills = () => {
    return (
        <div className="mb-40">
            <h2 className="text-center text-2xl mb-8 m-auto font-bold border-b-4 w-1/2 border-blue-500">MY SKILLS</h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-10">
                <div className="border h-60 p-2 bg-white">
                    <p className="text-center font-bold mb-2">フロントエンド</p>
                    <li>HTML</li>
                    <li>CSS</li>
                    <li>JavaScript</li>
                    <li>TypeScript</li>
                    <li>React</li>
                    <li>Next.js</li>
                    <li>TailwindCSS</li>
                    <li>MUI(旧Material UI)</li>
                </div>
                <div className="border h-60 p-2 bg-white">
                    <p className="text-center font-bold mb-2">バックエンド</p>
                    <li>Node.js</li>
                    <li>Ruby</li>
                    <li>Cache / IRIS</li>
                </div>
                <div className="border h-60 p-2 bg-white">
                    <p className="text-center font-bold mb-2">サーバ・インフラ</p>
                    <li>Windows Server</li>
                    <li>IIS</li>
                    <li>Linux</li>
                    <li>AWS</li>
                </div>
                <div className="border h-60 p-2 bg-white">
                    <p className="text-center font-bold mb-2">開発ツール</p>
                    <li>Git</li>
                    <li>SVN</li>
                    <li>Redmine</li>
                    <li>Backlog</li>
                    <li>Visual Studio Code</li>
                    <li>Google Workspace</li>
                    <li>Notion</li>
                </div>
                <div className="border h-60 p-2 bg-white">
                    <p className="text-center font-bold mb-2">資格</p>
                    <li>ITパスポート</li>
                    <li>基本情報技術者</li>
                    <li>AWS SAA</li>
                    <li>AWS DOA</li>
                    <li>AWS SOA</li>
                </div>
                <div className="border h-60 p-2 bg-white">
                    <p className="text-center font-bold mb-2">ちょっとだけ</p>
                    <li>Zabbix</li>
                    <li>Jenkins</li>
                    <li>Docker</li>
                    <li>Firebase</li>
                    <li>Figma</li>
                    <li>Google Apps Script</li>
                </div>
            </div>
        </div>
    );
};

export default MySkills;
