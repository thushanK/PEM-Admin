import React from 'react';
import { ProSidebar, Menu, MenuItem, SubMenu, SidebarHeader, SidebarContent, SidebarFooter } from 'react-pro-sidebar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTable, faPlusSquare, faAddressBook, faAtom, faTachometerAlt, faGlobe, faHome, faChalkboard, faAd, faChartBar, faCheckSquare, faRecycle } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'

const NavBar = ({ activemenu, submenu }) => {
  return (
    <ProSidebar breakPoint={'md'} >
      <SidebarHeader>
        <div
          style={{
            padding: "24px",
            textTransform: "uppercase",
            fontWeight: "bold",
            fontSize: 15,
            letterSpacing: "1px",
            overflow: "hidden",
            textOverflow: "ellipsis",
            whiteSpace: "nowrap"
          }}
        >
          Pocket English Master
        </div>
      </SidebarHeader>
      <SidebarContent>
        <Menu iconShape="round">

          <MenuItem
            active={activemenu === 'DASHBOARD'}
            icon={<FontAwesomeIcon icon={faTachometerAlt} />}>
            Dashboard<Link to="/" />
          </MenuItem>
          <SubMenu title="Lesson" defaultOpen={activemenu === 'LESSON'} icon={<FontAwesomeIcon icon={faChalkboard} />}>
            <MenuItem active={submenu === 'LESSON_LIST'}>Manage Lesson <Link to="/lesson/list" /></MenuItem>
            <MenuItem active={submenu === 'ADD_LESSON'}>Create Lesson<Link to="/lesson/add" /></MenuItem>
          </SubMenu>
        </Menu>
      </SidebarContent>
    
    </ProSidebar>
  );
}

export default NavBar;
