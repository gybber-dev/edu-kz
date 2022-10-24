import React, { FC, MouseEventHandler, ReactNode } from 'react';

interface IButtonProps {
  children: ReactNode
  onClick?: MouseEventHandler<HTMLButtonElement>
  className?: string
}

const Button: FC<IButtonProps> = ({
  children,
  onClick,
  className = '',
}) => (
  <button onClick={onClick} className={`bg-yellow px-7 shadow-root active:shadow-none py-3.5 rounded-tl-4xl rounded-br-4xl ${className}`}>
    {children}
  </button>
);

export default Button;
