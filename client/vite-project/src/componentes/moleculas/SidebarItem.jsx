import React from 'react';
import Icon from '../atomos/icon';

const SidebarItem = ({ text, icon }) => {
  return (
    <div className="sidebar-item">
      <Icon icon={icon} text={text} />
    </div>
  );
};

export default SidebarItem;
