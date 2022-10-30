import React, { FC } from 'react';

interface IStepProps {
    title: string
    index: string
}

const Step: FC<IStepProps> = ({
  title,
  index,
}) => (
  <li className='flex w-full items-center mb-12'>
    <div className='relative w-16 h-16 bg-modal rounded-tr-3xl rounded-bl-3xl'>
      <div className='absolute top-0 right-0 font-bold text-6xl w-full h-full mr-[-50%] mt-[-50%]'>
        {index}
      </div>
    </div>
    <div className='ml-16 text-2xl font-bold'>{title}</div>
  </li>
);

export default Step;
