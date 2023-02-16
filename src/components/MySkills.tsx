const MySkills = () => {
    return (
        <div className="mb-40">
            <h2 className="text-center text-2xl mb-8 m-auto font-bold border-b-4 w-1/2 border-blue-500">MY SKILLS</h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-10">
                <div className="border h-60 p-2 bg-white">
                    <p className="text-center">フロントエンド</p>
                </div>
                <div className="border h-60 p-2 bg-white">
                    <p className="text-center">バックエンド</p>
                </div>
                <div className="border h-60 p-2 bg-white">
                    <p className="text-center">サーバ・インフラ</p>
                </div>
            </div>
        </div>
    );
};

export default MySkills;
