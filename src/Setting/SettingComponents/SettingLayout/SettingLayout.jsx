import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import SettingSidebar from './SettingSidebar';
import SettingHeader from './SettingHeader';

const SettingLayout = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex min-h-screen">
      {/* Sidebar Component */}
      <SettingSidebar
        isOpen={isOpen}
        onMouseEnter={() => setIsOpen(true)}
        onMouseLeave={() => setIsOpen(false)}
      />

      {/* Main Content Area */}
      <main
        className="flex-1 transition-all duration-300 ease-in-out ml-[72px]">
        {/* Header Component */}
        <div className="sticky top-0 z-40">
          <SettingHeader />
        </div>

        {/* Page Content */}
        <div className="bg-pre-bg overflow-y-auto mt-16">
          <Outlet />
        </div>
      </main>
    </div>
  );
};

export default SettingLayout; 