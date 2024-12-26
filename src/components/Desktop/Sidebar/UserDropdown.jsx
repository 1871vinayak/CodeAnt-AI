import React, { useState } from 'react';
import { Select, MenuItem } from '@mui/material';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

const users = [
  {
    id: 1,
    name: 'UtkarshDhairyaPanwar',
    avatar: 'https://api.dicebear.com/7.x/initials/svg?seed=UDP'
  },
  {
    id: 2,
    name: 'JohnDoe',
    avatar: 'https://api.dicebear.com/7.x/initials/svg?seed=JD'
  },
  {
    id: 3,
    name: 'AliceSmith',
    avatar: 'https://api.dicebear.com/7.x/initials/svg?seed=AS'
  },
  {
    id: 4,
    name: 'BobJohnson',
    avatar: 'https://api.dicebear.com/7.x/initials/svg?seed=BJ'
  }
];

const UserDropdown = () => {
  const [selectedUser, setSelectedUser] = useState(users[0].id);

  const selectedUserData = users.find(user => user.id === selectedUser);

  return (
    <div className="px-3 py-2 border-b border-gray-200">
      <Select
        value={selectedUser}
        onChange={(e) => setSelectedUser(e.target.value)}
        fullWidth
        variant="outlined"
        IconComponent={KeyboardArrowDownIcon}
        className="rounded-lg"
        renderValue={() => (
          <div className="flex items-center gap-2">
            <img
              src={selectedUserData.avatar}
              alt={selectedUserData.name}
              className="w-6 h-6 rounded-lg"
            />
            <span className="text-gray-700 truncate">{selectedUserData.name}</span>
          </div>
        )}
        sx={{
          '& .MuiOutlinedInput-notchedOutline': {
            border: 'none'
          },
          '&:hover .MuiOutlinedInput-notchedOutline': {
            border: 'none'
          },
          '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
            border: 'none'
          },
          '& .MuiSelect-select': {
            paddingY: '0.5rem'
          }
        }}
      >
        {users.map((user) => (
          <MenuItem key={user.id} value={user.id}>
            <div className="flex items-center gap-2 w-full">
              <img
                src={user.avatar}
                alt={user.name}
                className="w-6 h-6 rounded-lg flex-shrink-0"
              />
              <span className="text-gray-700 truncate">{user.name}</span>
            </div>
          </MenuItem>
        ))}
      </Select>
    </div>
  );
};

export default UserDropdown;