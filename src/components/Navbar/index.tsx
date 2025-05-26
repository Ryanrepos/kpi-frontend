import React, { useState } from "react";
import { StyledNavbar } from "./style";
import { Bell, Search, User, Globe, ChevronDown, LogOut, Settings, UserCircle } from "lucide-react";

interface NavbarProps {
  isCollapsed: boolean;
}

const Navbar: React.FC<NavbarProps> = ({ isCollapsed }) => {
  const [profileOpen, setProfileOpen] = useState(false);
  const [languageOpen, setLanguageOpen] = useState(false);

  const toggleProfile = () => {
    setProfileOpen(!profileOpen);
    if (languageOpen) setLanguageOpen(false);
  };

  const toggleLanguage = () => {
    setLanguageOpen(!languageOpen);
    if (profileOpen) setProfileOpen(false);
  };

  return (
    <StyledNavbar>
      <div className={`navbar ${isCollapsed ? "collapsed" : ""}`}>
        {/* <div className="searchContainer">
          <Search className="searchIcon" />
          <input type="text" placeholder="Search..." className="searchInput" />
        </div> */}

        <div className="navActions">
          <div className="dropdown">
            <button className="dropdownToggle" onClick={toggleLanguage}>
              <Globe />
              <span className="currentLanguage">EN</span>
              <ChevronDown size={14} />
            </button>

            {languageOpen && (
              <div className="dropdownMenu">
                <button className="dropdownItem">English</button>
                <button className="dropdownItem">Korean</button>
              </div>
            )}
          </div>

          <div className="dropdown">
            <button className="dropdownToggle" onClick={toggleProfile}>
              <div className="userAvatar">
                <UserCircle size={20} />
              </div>
              <span className="userName">John Doe</span>
              <ChevronDown size={14} />
            </button>

            {profileOpen && (
              <div className="dropdownMenu">
                <button className="dropdownItem">
                  <User size={14} />
                  <span>Profile</span>
                </button>
                <button className="dropdownItem">
                  <Settings size={14} />
                  <span>Settings</span>
                </button>
                <div className="divider"></div>
                <button className="dropdownItem">
                  <LogOut size={14} />
                  <span>Logout</span>
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </StyledNavbar>
  );
};

export default Navbar;