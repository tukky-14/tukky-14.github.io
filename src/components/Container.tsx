import { ReactNode } from 'react';

const Container = ({ children }: { children: ReactNode }) => {
    return <div className="w-4/5 sm:w-2/3 m-auto mb-6">{children}</div>;
};

export default Container;
