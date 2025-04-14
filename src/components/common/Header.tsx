import React, { useState } from 'react';
import { Row, Col, Dropdown } from 'antd';
import { MenuOutlined } from '@ant-design/icons';

const Header: React.FC = () => {
  const [menuVisible, setMenuVisible] = useState(false);

  const handleLogoClick = () => {
    console.log('Logo clicked');
  };

  const handleMenuItemClick = (key: string) => {
    console.log(`Menu item clicked: ${key}`);
    setMenuVisible(false);
  };

  const menuItems = [
    {
      key: 'account',
      label: 'My Account',
      onClick: () => handleMenuItemClick('account'),
    },
    {
      key: 'settings',
      label: 'Settings',
      onClick: () => handleMenuItemClick('settings'),
    },
    {
      key: 'help',
      label: 'Help Center',
      onClick: () => handleMenuItemClick('help'),
    },
  ];

  return (
    <header className="py-4">
      <Row justify="space-between" align="middle">
        <Col>
          <div className="logo-container cursor-pointer" onClick={handleLogoClick}>
            <img
              src="/logo1.png"
              alt="Company Logo"
              className="logo-image"
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.onerror = null; //This removes the error handler after it runs once to prevent an infinite loop of errors if the fallback image also fails.
                target.src =
                  'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwIiBoZWlnaHQ9IjQwIiB2aWV3Qm94PSIwIDAgMTAwIDQwIiBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxyZWN0IHdpZHRoPSIxMDAiIGhlaWdodD0iNDAiIGZpbGw9IiNFNUU3RUIiLz48dGV4dCB4PSI1MCIgeT0iMjAiIGZvbnQtZmFtaWx5PSJBcmlhbCIgZm9udC1zaXplPSIxNCIgZmlsbD0iIzFBMjAyQyIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZHk9IjAuMzVlbSI+UXJlZDwvdGV4dD48L3N2Zz4=';
              }}
            />
          </div>
        </Col>
        <Col>
          <Dropdown
            menu={{ items: menuItems }}
            trigger={['click']}
            open={menuVisible}
            onOpenChange={setMenuVisible}
          >
            <div className="menu-button cursor-pointer p-2">
              <MenuOutlined style={{ fontSize: '28px', color: '#1A202C' }} />
            </div>
          </Dropdown>
        </Col>
      </Row>

      <style>{`
        .logo-container {
          width: 100px;
          height: 40px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 4px;
          padding: 6px;
          overflow: hidden;
        }
        
        .logo-image {
          max-width: 100%;
          object-fit: contain;
          width: auto;
          height: auto;
        }
      `}</style>
    </header>
  );
};

export default Header;
