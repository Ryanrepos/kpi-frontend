import styled from "styled-components";

export const StyledNavbar = styled.div`
  /* * {
    box-sizing: border-box; 
  } */

  .navbar {
    height: 60px;
    background-color: white;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 20px;
    /* box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05); */
    position: fixed;
    top: 0;
    right: 0;
    left: 250px; /* Matches Sidebar width */
    z-index: 99; /* Below Header but above Content */
    transition: left 0.3s ease, width 0.3s ease; /* Sync with Sidebar transition */
    width: calc(100% - 250px); /* Explicit width */
  }

  .navbar.collapsed {
    left: 70px; /* Matches Sidebar collapsed width */
    width: calc(100% - 70px); /* Adjust width when collapsed */
  }

  .searchContainer {
    position: relative;
    width: 300px; /* Fixed width */
    flex-shrink: 0; /* Prevent shrinking */
    transition: margin-left 0.3s ease; /* Smooth margin adjustment */
  }

  .searchContainer.collapsed {
    margin-left: 0; /* Reset margin when collapsed */
  }

  .searchInput {
    width: 100%;
    padding: 10px 15px 10px 40px;
    border: 1px solid #e0e0e0;
    border-radius: 20px;
    font-size: 14px;
    transition: all 0.3s ease;
  }

  .searchInput:focus {
    outline: none;
    border-color: #4da7de;
    box-shadow: 0 0 0 2px rgba(77, 167, 222, 0.2);
  }

  .searchIcon {
    position: absolute;
    left: 12px;
    top: 50%;
    transform: translateY(-50%);
    color: #9e9e9e;
    width: 18px;
    height: 18px;
  }

  .navActions {
    display: flex;
    align-items: center;
    gap: 20px;
    margin-left: auto; /* Push to right edge */
    transition: margin-right 0.3s ease; /* Smooth margin adjustment */
  }

  .badge {
    position: absolute;
    top: -5px;
    right: -5px;
    background-color: #ff5252;
    color: white;
    font-size: 10px;
    width: 16px;
    height: 16px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .dropdown {
    position: relative;
  }

  .dropdownToggle {
    display: flex;
    align-items: center;
    gap: 8px;
    background: none;
    border: none;
    cursor: pointer;
    padding: 8px 12px;
    border-radius: 4px;
    transition: all 0.2s ease;
  }

  .dropdownToggle:hover {
    background-color: #f5f5f5;
  }

  .userAvatar {
    width: 27px;
    height: 27px;
    border-radius: 50%;
    background-color: #4da7de;
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
  }

  .userName {
    font-weight: 500;
  }

  .currentLanguage {
    font-weight: 500;
  }

  .dropdownMenu {
    position: absolute;
    top: 100%;
    right: 0;
    width: 200px;
    background-color: white;
    border-radius: 8px;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
    padding: 8px 0;
    margin-top: 8px;
    z-index: 100;
    animation: fadeIn 0.2s ease;
  }

  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: translateY(-10px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  .dropdownItem {
    display: flex;
    align-items: center;
    gap: 10px;
    padding: 10px 15px;
    width: 100%;
    text-align: left;
    background: none;
    border: none;
    cursor: pointer;
    transition: all 0.2s ease;
  }

  .dropdownItem:hover {
    background-color: #f5f5f5;
  }

  .divider {
    height: 1px;
    background-color: #e0e0e0;
    margin: 8px 0;
  }

  @media (max-width: 768px) {
    .navbar {
      left: 70px;
      width: calc(100% - 70px);
    }

    .navbar.collapsed {
      left: 0;
      width: 100%;
    }

    .searchContainer {
      width: 200px;
    }

    .userName {
      display: none;
    }
  }

  @media (max-width: 576px) {
    .searchContainer {
      width: 150px;
    }

    .currentLanguage {
      display: none;
    }
  }
`;