import { useState } from "react";
import { NavLink } from "react-router-dom";
import {
  BarChartIcon as BarChartOutlined,
  LayoutDashboardIcon as DashboardOutlined,
  PieChartIcon as PieChartOutlined,
  UnderlineIcon as TeamOutlined,
  BaselineIcon as SettingOutlined,
  MenuIcon as MenuFoldOutlined,
  UnfoldVerticalIcon as MenuUnfoldOutlined,
} from "lucide-react";
import { StyledSidebar } from "./style";

interface SidebarProps {
  isCollapsed: boolean;
  handleChangeCollapse: () => void;
}

export default function Sidebar({ isCollapsed, handleChangeCollapse }: SidebarProps) {
  return (
    <StyledSidebar>
      <div className={`sidebar ${isCollapsed ? "collapsed" : ""}`}>
        <div className="logo">
          <h2>KPI</h2>
          <button className="toggleButton" onClick={handleChangeCollapse}>
            {isCollapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
          </button>
        </div>

        <nav className="navigation">
          <ul>
            <li>
              <NavLink
                to="/dashboard"
                className={({ isActive }) => (isActive ? "active" : "")}
              >
                <DashboardOutlined />
                <span className="linkText">Dashboard</span>
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/analytics"
                className={({ isActive }) => (isActive ? "active" : "")}
              >
                <BarChartOutlined />
                <span className="linkText">Analytics</span>
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/reports"
                className={({ isActive }) => (isActive ? "active" : "")}
              >
                <PieChartOutlined />
                <span className="linkText">Translations</span>
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/team"
                className={({ isActive }) => (isActive ? "active" : "")}
              >
                <TeamOutlined />
                <span className="linkText">Team</span>
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/settings"
                className={({ isActive }) => (isActive ? "active" : "")}
              >
                <SettingOutlined />
                <span className="linkText">Settings</span>
              </NavLink>
            </li>
          </ul>
        </nav>

        <div className="sidebarFooter">
          <p>© 2025 KPI Dashboard</p>
        </div>
      </div>
    </StyledSidebar>
  );
}