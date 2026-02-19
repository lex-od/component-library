import { useState } from "react";
import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import Input from "@/components/input/input";

const meta: Meta<typeof Input> = {
  title: "Components/Input",
  component: Input,
  tags: ["autodocs"],
  argTypes: {
    type: {
      control: "select",
      options: ["text", "password", "number", "email", "tel"],
    },
    clearable: { control: "boolean" },
    disabled: { control: "boolean" },
    placeholder: { control: "text" },
  },
};

export default meta;
type Story = StoryObj<typeof Input>;

export const Default: Story = {
  render: (args) => <Input {...args} />,
  args: {
    type: "text",
    placeholder: "Standard text input",
    clearable: false,
  },
};

export const Password: Story = {
  render: (args) => <Input {...args} />,
  args: {
    type: "password",
    placeholder: "Enter your password",
  },
};

export const Clearable: Story = {
  render: (args) => <Input {...args} />,
  args: {
    type: "text",
    placeholder: "Type something to see the clear button",
    clearable: true,
  },
};

export const NumberInput: Story = {
  render: (args) => <Input {...args} />,
  args: {
    type: "number",
    placeholder: "0",
  },
};

export const Disabled: Story = {
  render: (args) => <Input {...args} />,
  args: {
    placeholder: "You cannot type here",
    disabled: true,
    value: "Read only content",
  },
};

export const CustomStyling: Story = {
  render: (args) => <Input {...args} />,
  args: {
    placeholder: "Custom border color",
    className:
      "border-purple-500 focus:border-purple-700 focus:ring-purple-500/20",
    containerClassName: "max-w-xs",
  },
};
