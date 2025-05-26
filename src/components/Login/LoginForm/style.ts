import { styled } from "styled-components";

export const StyledLoginForm = styled.div`
  .form-actions {
    display: flex;
    justify-content: center;
    margin-top: 20px;
  }

  .login-button {
    width: 100%;
    max-width: 300px; 
    height: 45px;
    background:rgb(10, 34, 63); 
    border: none;
    border-radius: 8px;
    color: #ffffff;
    font-size: 1rem;
    font-weight: 600;
    box-shadow: 0 4px 10px rgba(77, 167, 222, 0.3);
    transition: all 0.3s ease;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0 20px;
    cursor: pointer;

    &:hover {
      background: #4da7de; /* Solid darker blue for hover state */
      box-shadow: 0 6px 15px rgba(77, 167, 222, 0.4);
      transform: translateY(-2px);
    }

    &:active {
      transform: translateY(1px);
      box-shadow: 0 2px 5px rgba(77, 167, 222, 0.2);
    }

    &:disabled,
    &[aria-disabled='true'] {
      background: #e6f0fa; /* Solid lighter blue for disabled/loading state */
      color: #a0b0c0;
      box-shadow: none;
      transform: none;
      cursor: not-allowed;
    }

    .ant-btn-loading-icon {
      color: #ffffff;
    }
  }
`;