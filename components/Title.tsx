import { FC, ReactNode } from 'react';

interface ITitleProps {
    children: ReactNode
}

const Title: FC<ITitleProps> = ({ children }) => (
  <h2 className='w-full py-12 text-center font-bold text-4xl font-title'>
    {children}
  </h2>
);

export default Title;