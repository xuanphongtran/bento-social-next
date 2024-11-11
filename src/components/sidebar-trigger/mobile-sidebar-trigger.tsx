import React from 'react';

import MobileSidebar from '@/layouts/mobile-sidebar';

//----------------------------------------------------------------------

type Props = {
  className?: string;
  children?: React.ReactNode;
  onClick?: () => void;
};

const MobileSidebarTrigger = ({ children, className }: Props) => {
  const [isSidebarOpen, setIsSidebarOpen] = React.useState(false);

  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };

  const openSidebar = () => {
    setIsSidebarOpen(true);
  };

  return (
    <>
      <button className={className} onClick={openSidebar}>
        {children}
      </button>
      <MobileSidebar
        className={`transition-all ${isSidebarOpen ? ' opacity-100 translate-x-0 ' : ' opacity-0 -translate-x-full '}`}
        onClose={closeSidebar}
      />
    </>
  );
};

export default MobileSidebarTrigger;
