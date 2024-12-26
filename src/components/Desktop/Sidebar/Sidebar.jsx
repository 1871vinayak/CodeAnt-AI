import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import Logo from './Logo';
import MenuItem from './MenuItem';
import UserDropdown from './UserDropdown';
import MenuTwoToneIcon from '@mui/icons-material/MenuTwoTone';
import HomeTwoToneIcon from '@mui/icons-material/HomeTwoTone';
import CodeTwoToneIcon from '@mui/icons-material/CodeTwoTone';
import CloudTwoToneIcon from '@mui/icons-material/CloudTwoTone';
import HelpCenterTwoToneIcon from '@mui/icons-material/HelpCenterTwoTone';
import SettingsApplicationsTwoToneIcon from '@mui/icons-material/SettingsApplicationsTwoTone';
import SupportTwoToneIcon from '@mui/icons-material/SupportTwoTone';
import LogoutTwoToneIcon from '@mui/icons-material/LogoutTwoTone';
import { IconButton } from '@mui/material';
import MobileMenu from './MobileMenu';

const Sidebar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  const menuItems = [
    { icon: HomeTwoToneIcon, label: "Repositories", path: "/dashboard" },
    { icon: CodeTwoToneIcon, label: "AI Code Review", path: "/dashboard/code-review" },
    { icon: CloudTwoToneIcon, label: "Cloud Security", path: "/dashboard/security" },
    { icon: HelpCenterTwoToneIcon, label: "How to Use", path: "/dashboard/help" },
    { icon: SettingsApplicationsTwoToneIcon, label: "Settings", path: "/dashboard/settings" },
    { icon: SupportTwoToneIcon, label: "Support", path: "/dashboard/support" },
    { icon: LogoutTwoToneIcon, label: "Logout", path: "/logout" },
  ];

  return (
    <>
      {/* Mobile Header */}
      <div className="md:hidden fixed top-0 left-0 right-0 bg-white border-b border-gray-200 z-40 h-[72px]">
        <div className="flex items-center justify-between p-4">
          <Logo />
          <IconButton onClick={() => setIsMobileMenuOpen(true)}>
            <MenuTwoToneIcon />
          </IconButton>
        </div>
      </div>
      
      {/* Desktop Sidebar */}
      <div className="hidden md:flex fixed md:sticky top-0 left-0 h-[100dvh] w-64 bg-white border-r border-gray-200 flex-col">
        <Logo />
        <UserDropdown />
        <div className="flex-1 px-3 py-2 overflow-y-auto">
          {menuItems.slice(0, 5).map((item) => (
            <MenuItem
              key={item.label}
              {...item}
              isActive={location.pathname === item.path}
            />
          ))}
        </div>
        <div className="border-t border-gray-200 px-3 py-2">
          {menuItems.slice(5).map((item) => (
            <MenuItem
              key={item.label}
              {...item}
              isActive={location.pathname === item.path}
            />
          ))}
        </div>
      </div>

      {/* Mobile Menu */}
      <MobileMenu 
        isOpen={isMobileMenuOpen} 
        onClose={() => setIsMobileMenuOpen(false)}
        menuItems={menuItems}
        currentPath={location.pathname}
      />
    </>
  );
};

export default Sidebar;