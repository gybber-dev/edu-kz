import { Modal, ModalProps } from 'antd';
import React, { FC, ReactNode } from 'react';

export interface ICustomModalProps {
  children: ReactNode
}

export const CustomizedModal: FC<ICustomModalProps & ModalProps> = ({
  children,
  ...modalProps
}) => (
  (<Modal
    className='border-2 border-red-700 w-4/5  rounded-4xl shadow-root overflow-hidden !pb-0 bg-modal'
    {...modalProps}
  >
    {children}
  </Modal>)
);
