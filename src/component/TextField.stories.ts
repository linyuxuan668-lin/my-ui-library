import type { Meta, StoryObj } from '@storybook/react';
import { TextField } from './TextField';

const meta = {
  title: 'Components/TextField',
  component: TextField,
  tags: ['autodocs'],
  argTypes: {
    type: {
      control: 'select',
      // 對應 Figma 的 4 種 Type 變體
      options: ['input', 'dropdown', 'with btn', 'with icon'],
      description: '輸入框類型',
    },
    state: {
      control: 'select',
      // 對應 Figma 的 6 種 State 變體 (網頁規範中 no edit 即為 readonly)
      options: ['default', 'filled', 'error', 'readonly', 'disabled', 'null'],
      description: '輸入框狀態',
    },
    placeholder: { control: 'text', description: '提示文字 (Placeholder)' },
    errorMessage: { control: 'text', description: '錯誤提示訊息' },
    btnLabel: { control: 'text', description: '按鈕文字 (僅在 with btn 款式有效)' },
    icon: {
      control: 'select',
      options: ['eye-off', 'eye', 'search'],
      description: '選擇 Icon 圖示 (僅在 with icon 款式有效)',
    }
  },
} satisfies Meta<typeof TextField>;

export default meta;
type Story = StoryObj<typeof meta>;

// 1. 預設輸入框故事
export const Default: Story = {
  args: {
    type: 'input',
    state: 'default',
    placeholder: '請輸入',
  },
};

// 2. 下拉選單故事 (新增)
export const Dropdown: Story = {
  args: {
    type: 'dropdown',
    state: 'default',
    placeholder: '請選擇',
  },
};

// 3. 附帶按鈕故事 (新增)
export const WithButton: Story = {
  args: {
    type: 'with btn',
    state: 'default',
    placeholder: '請輸入',
    btnLabel: '文字',
  },
};

// 4. 附帶 Icon 故事
export const WithIcon: Story = {
  args: {
    type: 'with icon',
    state: 'default',
    placeholder: '請輸入',
    icon: 'eye-off',
  },
};