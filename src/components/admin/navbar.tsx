
'use client';

import { Avatar, Dropdown, Navbar, Button } from 'flowbite-react';
import { IoIosNotificationsOutline } from "react-icons/io";
import { RiMenu2Fill } from "react-icons/ri";

interface Props {
  toggleSidebar: () => void
}

export default function AdminNavbar(props: Props) {
  const { toggleSidebar } = props;

  return (
    <Navbar fluid rounded className={`bg-gray-50`}>
      <Navbar.Toggle barIcon={RiMenu2Fill} onClick={toggleSidebar} />
      <Navbar.Brand href="/admin">
        <img src="https://flowbite.com/docs/images/logo.svg" className="mr-3 h-6 sm:h-9" alt="Flowbite React Logo" />
        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">Admin Panel</span>
      </Navbar.Brand>
      <div className="flex md:order-2">
        <Dropdown arrowIcon={false} inline label={
          <IoIosNotificationsOutline size={30} color="gray" className="mr-3" />
        } className='mr-3'>
          <Dropdown.Item>New customer created the account</Dropdown.Item>
          <Dropdown.Divider />
          <Dropdown.Item>Another notification will appear here!</Dropdown.Item>
        </Dropdown>

        <Dropdown
          arrowIcon={false}
          inline
          label={
            <Avatar alt="User settings" img="https://flowbite.com/docs/images/people/profile-picture-5.jpg" rounded />
          }
        >
          <Dropdown.Header>
            <span className="block text-sm">Bonnie Green</span>
            <span className="block truncate text-sm font-medium">name@flowbite.com</span>
          </Dropdown.Header>
          <Dropdown.Item>Dashboard</Dropdown.Item>
          <Dropdown.Item>Settings</Dropdown.Item>
          <Dropdown.Item>Earnings</Dropdown.Item>
          <Dropdown.Divider />
          <Dropdown.Item>Sign out</Dropdown.Item>
        </Dropdown>
      </div>
    </Navbar>
  );
}
