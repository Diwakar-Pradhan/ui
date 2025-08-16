import React from "react";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { InputField } from "./InputField";

const meta: Meta<typeof InputField> = {
  title: "Components/InputField",
  component: InputField,
  parameters: {
    docs: {
      description: {
        component:
          "A flexible input component with label, placeholder, helper text, and error states. Supports multiple variants and sizes.",
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof InputField>;

// -------------------- States & Variants --------------------
export const Default: Story = {
  args: { label: "Email", placeholder: "Enter your email" },
  parameters: { docs: { description: { story: "Default input field." } } },
};

export const ErrorState: Story = {
  args: { label: "Password", placeholder: "Enter password", errorMessage: "Password is required" },
  parameters: { docs: { description: { story: "Shows error message when input is invalid." } } },
};

export const WithHelperText: Story = {
  args: { label: "Username", placeholder: "Enter username", helperText: "This will be visible to others" },
  parameters: { docs: { description: { story: "Displays helper text below input." } } },
};

export const WithState: Story = {
  render: () => {
    const [email, setEmail] = React.useState("");
    return (
      <div style={{ maxWidth: 360, padding: 16 }}>
        <InputField label="Email" placeholder="Enter your email" value={email} onChange={e => setEmail(e.target.value)} />
        <p>You typed: {email || <em>nothing yet</em>}</p>
      </div>
    );
  },
  parameters: { docs: { description: { story: "Demonstrates controlled component state interaction." } } },
};

// -------------------- Anatomy / Structure --------------------
export const Anatomy: Story = {
  render: () => <InputField label="Email" placeholder="Enter your email" />,
  parameters: {
    docs: {
      description: {
        story: `
**InputField Anatomy**

| Element | Description |
|---------|-------------|
| Label | Text displayed above the input field |
| Input | Text input area, styled according to variant (filled, outlined, ghost) |
| Helper Text | Optional guidance text below input |
| Error Message | Optional error text below input |

**Notes:**  
- Label linked to input for accessibility (\`htmlFor\` / \`id\`)  
- Use \`aria-invalid\` when \`invalid\` is true  
- Focus provides visual feedback  
- Best practices: Always provide a label, avoid empty input values without guidance
        `,
      },
    },
  },
};
