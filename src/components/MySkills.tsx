import { backEndSkills, certifications, devToolSkills, frontEndSkills, littleSkills, serverSkills } from '@/data/skills';

const MySkills = () => {
    return (
        <div className="mb-40 pt-10" id="my_skills">
            <h2 className="text-center text-2xl mb-8 m-auto font-bold border-b-4 w-1/2 border-blue-500">MY SKILLS</h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-10">
                <div className="border h-72 p-2 bg-white">
                    <p className="text-center font-bold mb-2">フロントエンド</p>
                    {frontEndSkills.map((skill: { name: string; icon: string }, index: number) => (
                        <div className="flex mb-1" key={index}>
                            <img className="w-4 mr-1" src={`/skill-icons/${skill.icon}`} alt="" />
                            <p>{skill.name}</p>
                        </div>
                    ))}
                </div>
                <div className="border h-72 p-2 bg-white">
                    <p className="text-center font-bold mb-2">バックエンド</p>
                    {backEndSkills.map((skill: { name: string; icon: string }, index: number) => (
                        <div className="flex mb-1" key={index}>
                            <img className="w-4 mr-1" src={`/skill-icons/${skill.icon}`} alt="" />
                            <p>{skill.name}</p>
                        </div>
                    ))}
                </div>
                <div className="border h-72 p-2 bg-white">
                    <p className="text-center font-bold mb-2">サーバ・インフラ</p>
                    {serverSkills.map((skill: { name: string; icon: string }, index: number) => (
                        <div className="flex mb-1" key={index}>
                            <img className="w-4 mr-1" src={`/skill-icons/${skill.icon}`} alt="" />
                            <p>{skill.name}</p>
                        </div>
                    ))}
                </div>
                <div className="border h-72 p-2 bg-white">
                    <p className="text-center font-bold mb-2">開発ツールなど</p>
                    {devToolSkills.map((skill: { name: string; icon: string }, index: number) => (
                        <div className="flex mb-1" key={index}>
                            <img className="w-4 mr-1" src={`/skill-icons/${skill.icon}`} alt="" />
                            <p>{skill.name}</p>
                        </div>
                    ))}
                </div>
                <div className="border h-72 p-2 bg-white">
                    <p className="text-center font-bold mb-2">資格</p>
                    {certifications.map((skill: { name: string; icon: string }, index: number) => (
                        <div className="flex mb-1" key={index}>
                            <img className="w-4 mr-1" src={`/skill-icons/${skill.icon}`} alt="" />
                            <p>{skill.name}</p>
                        </div>
                    ))}
                </div>
                <div className="border h-72 p-2 bg-white">
                    <p className="text-center font-bold mb-2">ちょっとだけ</p>
                    {littleSkills.map((skill: { name: string; icon: string }, index: number) => (
                        <div className="flex mb-1" key={index}>
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
