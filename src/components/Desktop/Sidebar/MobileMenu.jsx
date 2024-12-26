import React from 'react';
import CloseIcon from '@mui/icons-material/Close';
import { IconButton } from '@mui/material';
import MenuItem from './MenuItem';
import UserDropdown from './UserDropdown';
import Logo from './Logo';

const MobileMenu = ({ isOpen, onClose, menuItems, currentPath }) => {
  return (
    <>
      <div 
        className={`fixed inset-0 bg-black/30 z-40 transition-opacity duration-300 md:hidden ${
          isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        onClick={onClose}
      />

      <div className={`
        fixed top-0 left-0 right-0 bg-white z-50 transition-all duration-300 ease-in-out md:hidden overflow-hidden
        ${isOpen ? 'translate-y-0' : '-translate-y-full'}
        h-auto max-h-[70vh] rounded-b-2xl
      `}>
        <div className="flex justify-between items-center p-4">
          <Logo />
          <IconButton onClick={onClose} edge="end" size="small">
            <CloseIcon />
          </IconButton>
        </div>
        
        <div className="px-2 pb-4">
          <UserDropdown />
          <div className="mt-2">
            {menuItems.map((item) => (
              <MenuItem
                key={item.label}
                {...item}
                isActive={currentPath === item.path}
                onClick={onClose}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default MobileMenu;