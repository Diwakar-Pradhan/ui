import type { Meta, StoryObj } from "@storybook/react-vite";
import { DataTable } from "./DataTable";

interface User { id: number; name: string; email: string; }

const sampleData: User[] = [
  { id: 1, name: "Alice", email: "alice@mail.com" },
  { id: 2, name: "Bob", email: "bob@mail.com" },
  { id: 3, name: "Charlie", email: "charlie@mail.com" },
];

const columns: { key: keyof User; label: string }[] = [
  { key: "name", label: "Name" },
  { key: "email", label: "Email" },
];

const meta: Meta<typeof DataTable<User>> = {
  title: "Components/DataTable",
  component: DataTable<User>,
  parameters: {
    docs: {
      description: {
        component:
          "A flexible data table component supporting sorting, selectable rows, loading, and empty states. Ensure each row has a unique `id`.",
      },
    },
  },
};
export default meta;
type Story = StoryObj<typeof DataTable<User>>;

// -------------------- States & Variants --------------------
export const Default: Story = {
  render: () => <DataTable data={sampleData} columns={columns} />,
  parameters: { docs: { description: { story: "Default DataTable displaying user data." } } },
};

export const Loading: Story = {
  render: () => <DataTable data={[]} columns={columns} loading />,
  parameters: { docs: { description: { story: "Shows loading state with placeholder text." } } },
};

export const Empty: Story = {
  render: () => <DataTable data={[]} columns={columns} />,
  parameters: { docs: { description: { story: "Displays message when no data is available." } } },
};

export const Selectable: Story = {
  render: () => (
    <DataTable
      data={sampleData}
      columns={columns}
      selectable
      onRowSelect={(rows) => console.log("Selected:", rows)}
    />
  ),
  parameters: { docs: { description: { story: "Selectable rows with checkbox; ARIA role `checkbox` applied." } } },
};

// -------------------- Anatomy / Structure --------------------
export const Anatomy: Story = {
  render: () => <DataTable data={sampleData} columns={columns} selectable />,
  parameters: {
    docs: {
      description: {
        story: `
**DataTable Anatomy**

| Element | Description |
|---------|-------------|
| Table | Root <table> element |
| Thead / Th | Column headers, clickable for sorting with ▲▼ |
| Tbody / Tr | Table rows, each with unique id |
| Td | Table cells with row data |
| Checkbox | Optional selection input if selectable is true |
| Loading State | Placeholder text when loading |
| Empty State | Message when data is empty |

**Notes:**  
- Column headers should be focusable via keyboard  
- Use ARIA role \`table\` for screen readers  
- Ensure each row has unique \`id\`  
- Best practices: Provide meaningful column labels, avoid long unwrapped text
        `,
      },
    },
  },
};
