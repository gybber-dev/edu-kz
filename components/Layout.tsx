import React, { FC, ReactNode } from 'react';
import Footer from './Footer';

interface ILayoutProps {
    children: ReactNode
}

const Layout: FC<ILayoutProps> = ({
  children,
}) => (
  <>
    {/* todo: add header */}
    {children}
    <Footer />
  </>
);

export default Layout;
