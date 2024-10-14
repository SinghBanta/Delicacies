import { Settings, ShoppingBag, User } from 'lucide-react';
import Link from 'next/link';
import React from 'react'

function Sidebar({showSidebar}:{showSidebar:boolean;}) {
  return (
    <aside id="logo-sidebar" className={`fixed top-0 left-0 z-40 w-64 h-screen pt-20 transition-transform ${showSidebar ? "translate-x-0":"-translate-x-full"} bg-background border-r border-gray-200 sm:translate-x-0  dark:border-gray-700`} aria-label="Sidebar">
   <div className="h-full px-3 pb-4 overflow-y-auto bg-background flex justify-between flex-col">
      <ul className="space-y-2 font-medium">
         <li>
            <Link href="/" className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-green-200 hover:scale-105 dark:hover:bg-gray-700 group duration-200 transition-all">
            <ShoppingBag/>
               <span className="ms-3">Dashboard</span>
            </Link>
         </li>
         <li>
            <Link href="/profile" className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:scale-105 hover:bg-green-200 dark:hover:bg-gray-700 group duration-200 transition-all">
               <User/>
               <span className="flex-1 ms-3 whitespace-nowrap">Profile</span>
            </Link>
         </li>
         <li>
            <Link href="/settings" className="flex items-center p-2 text-gray-900 hover:scale-105 rounded-lg dark:text-white hover:bg-green-200 dark:hover:bg-gray-700 group duration-200 transition-all">
               <Settings/>
               <span className="flex-1 ms-3 whitespace-nowrap">Settings</span>
            </Link>
         </li>
      </ul>

      <div id="dropdown-cta" className="p-4 mt-6 rounded-lg bg-green-300 dark:bg-green-900" role="alert">
         <div className="flex items-center mb-3">
            <span className="bg-orange-100 text-orange-800 text-sm font-semibold me-2 px-2.5 py-0.5 rounded dark:bg-orange-200 dark:text-orange-900">Premium</span>
            <button type="button" className="ms-auto -mx-1.5 -my-1.5 bg-blue-50 inline-flex justify-center items-center w-6 h-6 text-blue-900 rounded-lg focus:ring-2 focus:ring-blue-400 p-1 hover:bg-blue-200 dark:bg-white/80 dark:text-blue-400 dark:hover:bg-white" data-dismiss-target="#dropdown-cta" aria-label="Close">
               <span className="sr-only">Close</span>
               <svg className="w-2.5 h-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
               </svg>
            </button>
         </div>
         <p className="mb-3 text-sm text-green-800 dark:text-green-400">
            Get unlimited access to all features and tools by upgrading to a premium plan. Fast delivery and 24/7 support. 🚀 
         </p>
         <a className="text-sm text-blue-800 underline font-medium hover:text-blue-900 dark:text-blue-400 dark:hover:text-blue-300" href="#">Click to access Premium</a>
      </div>
   </div>
</aside>
  )
}

export default Sidebar