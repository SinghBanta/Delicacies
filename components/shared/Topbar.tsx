"use client";

import React, { useEffect, useState } from 'react'
import ThemeToggle from './ThemeToggle';
import Image from 'next/image';
import { Button } from '../ui/button';
import Link from 'next/link';

function Topbar({showSidebar, setShowSidebar, showUserDropdown, setShowUserDropdown}:{showSidebar:boolean; setShowSidebar:React.Dispatch<React.SetStateAction<boolean>>; showUserDropdown:boolean; setShowUserDropdown:React.Dispatch<React.SetStateAction<boolean>>}) {
  const [isLogin, setIsLogin] = useState(false);

  useEffect(() => {
    if (localStorage.getItem('login')) {
      setIsLogin(true);
    }
  }, []);

  const handleSignOut = () => {
    localStorage.removeItem('login');
    setIsLogin(false);
  }
  
  return (
    <nav className="fixed top-0 z-50 w-full bg-background border-b border-gray-200  dark:border-gray-700">
  <div className="px-3 py-3 lg:px-5 lg:pl-3">
    <div className="flex items-center justify-between">
      <div className="flex items-center justify-start rtl:justify-end">
        <button data-drawer-target="logo-sidebar" data-drawer-toggle="logo-sidebar" aria-controls="logo-sidebar" type="button" className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
        onClick={() => setShowSidebar(!showSidebar)}>
            <span className="sr-only">Open sidebar</span>
            <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
               <path clip-rule="evenodd" fill-rule="evenodd" d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"></path>
            </svg>
         </button>
        <a href="https://flowbite.com" className="flex ms-2 md:me-24">
          <Image height={100} width={100} src="/logo.png" className="me-3 h-10 w-10 rounded-full" alt="FlowBite Logo" />
          <span className="self-center text-xl font-semibold sm:text-2xl whitespace-nowrap dark:text-white tracking-wide">Delicacies</span>
        </a>
      </div>
      <div className="flex items-center">
          <div className="flex items-center ms-3 gap-2">
            <ThemeToggle/>
            <div>
              {isLogin ? (<button type="button" className="flex text-sm bg-gray-800 rounded-full focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600" aria-expanded="false" data-dropdown-toggle="dropdown-user"
              onClick={() => setShowUserDropdown(!showUserDropdown)}>
                <span className="sr-only">Open user menu</span>
                <Image className="w-8 h-8 rounded-full" src="https://flowbite.com/docs/images/people/profile-picture-5.jpg" width={28} height={28} alt="user photo"/>
              </button>):(<Button asChild><Link href="/login">Log In</Link></Button>)}
            </div>

            <div className={`z-50 absolute right-1 top-10 ${showUserDropdown ? "block":"hidden"} ${!isLogin && "hidden"} my-4 text-base list-none bg-white divide-y divide-gray-100 rounded shadow dark:bg-zinc-800 dark:divide-gray-600`} id="dropdown-user">
              <div className="px-4 py-3" role="none">
                <p className="text-sm text-gray-900 dark:text-white" role="none">
                  Banta Singh
                </p>
                <p className="text-sm font-medium text-gray-900 truncate dark:text-gray-300" role="none">
                  singhbanta84@gmail.com
                </p>
              </div>
              <ul className="py-1" role="none">
                <li>
                  <Link href="/" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white" role="menuitem">Dashboard</Link>
                </li>
                <li>
                  <Link href="/settings" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white" role="menuitem">Settings</Link>
                </li>
                <li>
                  <div className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white cursor-pointer" role="menuitem" onClick={handleSignOut}>Sign out</div>
                </li>
              </ul>
            </div>
          </div>
        </div>
    </div>
  </div>
</nav>
  )
}

export default Topbar