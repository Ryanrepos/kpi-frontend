import styled from "styled-components";

export const StyledSidebar = styled.div`
  .sidebar {
    width: 250px;
    height: 100vh;
    background: linear-gradient(to bottom, #d9e8ff 0%, #e6f0fa 100%); /* Softer vertical gradient */
    color: #1a2a44; /* Darker text for better contrast */
    transition: all 0.3s ease;
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.05);
    display: flex;
    flex-direction: column;
    position: fixed;
    left: 0;
    top: 0;
    z-index: 100; /* Above Content, below Header */
  }

  .sidebar.collapsed {
    width: 70px;
  }

  .logo {
    padding: 20px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-bottom: 1px solid rgba(77, 167, 222, 0.2); 
    background: rgba(255, 255, 255, 0.5); 
    height: 60px;
  }

  .logo h2 {
    margin: 0;
    font-size: 1.5rem;
    font-weight: 600;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    color: #1a2a44; 
    letter-spacing: 0.5px;
    transition: opacity 0.3s ease;
  }

  .sidebar.collapsed .logo h2 {
    opacity: 0;
    width: 0;
  }

  .toggleButton {
    background: transparent;
    border: none;
    color: #4da7de;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 5px;
    border-radius: 4px;
    transition: all 0.2s ease;
  }

  .toggleButton:hover {
    background: rgba(77, 167, 222, 0.1); 
  }

  .navigation {
    flex: 1;
    overflow-y: auto;
    padding: 15px 0;
  }

  .navigation ul {
    list-style: none;
    padding: 0;
    margin: 0;
  }

  .navigation li {
    margin-bottom: 2px;
  }

  .navigation a {
    display: flex;
    align-items: center;
    padding: 12px 20px;
    color: #3b4b66; 
    text-decoration: none;
    transition: all 0.2s ease;
    border-radius: 0;
    margin: 0;
    font-weight: 500;
    position: relative;
  }

  .navigation a:hover {
    background: rgba(77, 167, 222, 0.15); 
    color: #4da7de;
  }

  .navigation a.active {
    background: rgba(77, 167, 222, 0.2); 
    color: #4da7de;
    border-left: 3px solid #4da7de;
  }

  .navigation a svg {
    margin-right: 15px;
    width: 18px;
    height: 18px;
    color: #6a7990; 
    transition: color 0.2s ease;
  }

  .navigation a:hover svg,
  .navigation a.active svg {
    color: #4da7de;
  }

  .sidebar.collapsed .linkText {
    display: none;
  }

  .sidebarFooter {
    padding: 15px 20px;
    border-top: 1px solid rgba(77, 167, 222, 0.2); 
    font-size: 0.8rem;
    text-align: center;
    color: #6a7990; 
    background: rgba(255, 255, 255, 0.5); 
    transition: opacity 0.3s ease;
  }

  .sidebar.collapsed .sidebarFooter {
    opacity: 0;
    height: 0;
    padding: 0;
  }

  @media (max-width: 768px) {
    .sidebar {
      width: 70px;
      transform: translateX(0);
    }

    .sidebar.collapsed {
      transform: translateX(-100%);
    }

    .sidebar .linkText,
    .sidebar .logo h2,
    .sidebar .sidebarFooter {
      display: none;
    }
  }
`;