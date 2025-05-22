import { Form } from 'antd';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { Input } from 'ui';

export function LoginForm() {
  const { t } = useTranslation();
  return (
    <div className="form-container">
      <Form layout="vertical">
        <div className="form-group">
          <Input
            suffix={
              <span className="input-icon">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M17 20.5H7C4 20.5 2 19 2 15.5V8.5C2 5 4 3.5 7 3.5H17C20 3.5 22 5 22 8.5V15.5C22 19 20 20.5 17 20.5Z"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeMiterlimit="10"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M17 9L13.87 11.5C12.84 12.32 11.15 12.32 10.12 11.5L7 9"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeMiterlimit="10"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
            }
            label={t('email')}
            rules={[{ required: true, message: t('this_field_required') }]}
            name="email"
            type="email"
          />
        </div>

        <div className="form-group">
          <Input
            type="password"
            label={t('password')}
            rules={[{ required: true, message: t('this_field_required') }]}
            name="password"
          />
        </div>

        <div className="form-actions">
          <button type="submit" className={`login-button `}>
            Sign In
          </button>
        </div>
      </Form>
    </div>
  );
}
