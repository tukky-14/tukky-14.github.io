import { skills } from '@/data/skills';
import Link from 'next/link';

const MySkills = () => {
    return (
        <div className="mb-40 pt-10" id="my_skills">
            <h2 className="text-center text-2xl mb-8 m-auto font-bold border-b-4 w-1/2 border-blue-500">MY SKILLS</h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-10">
                {skills.map((array: { title: string; skills: { name: string; icon: string; link: string }[] }, index: number) => (
                    <div className="border h-72 p-2 bg-white" key={index}>
                        <p className="text-center font-bold mb-2">{array.title}</p>
                        {array.skills.map((skill: { name: string; icon: string; link: string }, index: number) => (
                            <Link
                                href={skill.link}
                                className="flex py-0.5 hover:bg-blue-100 duration-200"
                                target="_blank"
                                rel="noreferrer"
                                key={index}
                                data-testid={skill.name}
                            >
                                <img className="w-4 mr-1" src={`/skill-icons/${skill.icon}`} alt={`${skill.name}のアイコン画像`} />
                                <p>{skill.name}</p>
                            </Link>
                        ))}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default MySkills;
