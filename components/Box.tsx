import React, { FC, ReactNode } from 'react';

interface IBoxProps {
  children: ReactNode
}

const Box: FC<IBoxProps> = ({ children }) => (
  <div className='flex justify-center w-full'>
    <div className='w-full max-w-[1366px]'>
      {children}
    </div>
  </div>
);

export default Box;
