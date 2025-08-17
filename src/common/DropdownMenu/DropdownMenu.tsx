import React, { useState } from 'react';
import { IconButton, Menu } from '@mui/material';

type IDropdownMenuProps =
  | {
      icon: React.ReactNode;
      customIconButton?: never;
      children: React.ReactNode;
      onSelect?: (value: any) => void;
    }
  | {
      icon?: never;
      customIconButton: React.ReactElement;
      children: React.ReactNode;
      onSelect?: (value: any) => void;
    };

const DropdownMenu: React.FC<IDropdownMenuProps> = ({
  icon,
  children,
  customIconButton,
  onSelect,
}) => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const handleOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);

  return (
    <>
      {customIconButton ? (
        // Clone the custom button and attach onClick
        React.cloneElement(customIconButton as React.ReactElement<any>, {
          onClick: handleOpen,
        })
      ) : (
        <IconButton size="small" onClick={handleOpen}>
          {icon}
        </IconButton>
      )}

      <Menu
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
        transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      >
        {React.Children.map(children, (child) => {
          if (React.isValidElement(child)) {
            const { onClick: originalOnClick, value } = child.props as any;

            return React.cloneElement(child as React.ReactElement<any>, {
              onClick: (e: any) => {
                originalOnClick?.(e);
                onSelect?.(value);
                handleClose();
              },
            });
          }
          return child;
        })}
      </Menu>
    </>
  );
};

export default DropdownMenu;
