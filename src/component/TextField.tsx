import React from 'react';
import './TextField.css';

// 1. 建立你的 Guideline Icon 庫（未來所有的 Icon 都往這裡塞）
const IconMap: Record<string, React.ReactNode> = {
  'eye-off': (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
      <g clipPath="url(#clip0_14210_39653)">
        <path d="M14.6797 14.6797C13.3329 15.7063 11.6929 16.275 9.99967 16.3027C4.48452 16.3027 1.33301 9.99967 1.33301 9.99967C2.31304 8.17329 3.67233 6.57761 5.31967 5.31967M8.34513 3.88574C8.88745 3.75879 9.44269 3.69534 9.99967 3.69664C15.5148 3.69664 18.6663 9.99967 18.6663 9.99967C18.1881 10.8944 17.6177 11.7367 16.9645 12.513M11.67 11.67C11.4536 11.9022 11.1926 12.0885 10.9027 12.2177C10.6128 12.3468 10.2998 12.4163 9.98241 12.4219C9.66505 12.4275 9.3498 12.3691 9.05549 12.2502C8.76117 12.1314 8.49382 11.9544 8.26937 11.73C8.04492 11.5055 7.86798 11.2382 7.74911 10.9439C7.63023 10.6495 7.57185 10.3343 7.57745 10.0169C7.58305 9.69957 7.65251 9.38658 7.7817 9.09665C7.91089 8.80671 8.09715 8.54576 8.32937 8.32937M1.33301 1.33301L18.6663 18.6663" 
              stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </g>
      <defs>
        <clipPath id="clip0_14210_39653">
          <rect width="20" height="20" fill="white"/>
        </clipPath>
      </defs>
    </svg>
  ),
  // 這裡先幫你寫兩個假 Icon 示範，讓你在選單看得到動態切換效果
  'eye': (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
      <path d="M1 10S4 3 10 3s9 7 9 7-3 7-9 7-9-7-9-7z" stroke="currentColor" strokeWidth="1.5"/>
      <circle cx="10" cy="10" r="3" stroke="currentColor" strokeWidth="1.5"/>
    </svg>
  ),
  'search': (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
      <circle cx="9" cy="9" r="5" stroke="currentColor" strokeWidth="1.5"/>
      <path d="M13 13l4 4" stroke="currentColor" strokeWidth="1.5"/>
    </svg>
  )
};

export interface TextFieldProps {
  type?: 'input' | 'dropdown' | 'with btn' | 'with icon';
  state?: 'default' | 'filled' | 'error' | 'readonly' | 'disabled' | 'null';
  placeholder?: string;
  errorMessage?: string;
  btnLabel?: string;
  /**
   * 選擇要顯示哪一個 Guideline Icon
   */
  icon?: keyof typeof IconMap;
}

export const TextField = ({
  type = 'input',
  state = 'default',
  placeholder = '請輸入',
  errorMessage = '錯誤提示文字',
  btnLabel = '文字',
  icon = 'eye-off',
}: TextFieldProps) => {
  // 將 'with icon' 轉成 'with-icon-type' 的 class 名稱
  const className = `text-field text-field--${type.replace(' ', '-')}-type text-field--${state}`;

  return (
    <div className={className}>
      <div className="input-container">
        {type === 'dropdown' ? (
          <>
            <select disabled={state === 'disabled' || state === 'readonly'}>
              <option value="" disabled selected hidden>{placeholder}</option>
              <option value="1">已選文字</option>
            </select>
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none" className="dropdown-icon">
              <path d="M14.7994 6L5.19908 6C5.10188 6.00031 5.00661 6.02716 4.92351 6.07767C4.84042 6.12819 4.77265 6.20045 4.72749 6.28667C4.68235 6.3729 4.66153 6.46983 4.66728 6.56703C4.67303 6.66423 4.70513 6.75801 4.76013 6.8383L9.56027 13.784C9.75921 14.072 10.2382 14.072 10.4376 13.784L15.2378 6.8383C15.2933 6.75818 15.3259 6.66435 15.332 6.56699C15.338 6.46963 15.3174 6.37246 15.2722 6.28605C15.227 6.19964 15.159 6.12729 15.0756 6.07686C14.9923 6.02643 14.8967 5.99985 14.7994 6Z" fill="currentColor"/>
            </svg>
          </>
        ) : type === 'with btn' ? (
          <>
            <input type="text" placeholder={placeholder} disabled={state === 'disabled'} readOnly={state === 'readonly'} />
            <button className="field-button" disabled={state === 'disabled' || state === 'readonly'}>{btnLabel}</button>
          </>
        ) : type === 'with icon' ? (
          <>
            {/* With Icon 的輸入框本體 */}
            <input type="text" placeholder={placeholder} disabled={state === 'disabled'} readOnly={state === 'readonly'} />
            {/* 根據選單動態渲染對應的 Icon */}
            <div className="field-icon-wrapper">
              {IconMap[icon]}
            </div>
          </>
        ) : (
          <input type="text" placeholder={placeholder} disabled={state === 'disabled'} readOnly={state === 'readonly'} />
        )}
      </div>
      {state === 'error' && <div className="error-message">{errorMessage}</div>}
    </div>
  );
};
