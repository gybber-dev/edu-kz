import React, { FC, ReactNode } from 'react';

interface IBoxProps {
  children: ReactNode
  className?: string
}

const Box: FC<IBoxProps> = ({ children, className = '' }) => (
  <div className={`flex justify-center w-full px-4 ${className}`}>
    <div className='w-full max-w-[1366px]'>
      {children}
    </div>
  </div>
);

export default Box;
