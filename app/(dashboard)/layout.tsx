"use client";

import Sidebar from "@/components/shared/Sidebar";
import Topbar from "@/components/shared/Topbar";
import { useState } from "react";

export default function DashboardLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    const [showSidebar, setShowSidebar] = useState(false);
    const [showUserDropdown, setShowUserDropdown] = useState(false);

    return (
      <main>
        <Topbar showSidebar={showSidebar} setShowSidebar={setShowSidebar} showUserDropdown={showUserDropdown} setShowUserDropdown={setShowUserDropdown}/>
        <div className="flex">
        <Sidebar showSidebar={showSidebar} />
        {children}
        </div>
      </main>
    );
  }
  