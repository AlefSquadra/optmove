import { Meta, StoryObj } from "@storybook/react";
import { Table } from "./Table";

const meta = {
  title: "Tables/Table",
  tags: ["autodocs"],
  component: Table,
} satisfies Meta<typeof Table>;

export default meta;

type Story = StoryObj<typeof Table>;

export const Default: Story = {
  render: () => (
    <Table>
      <Table.Head
        columns={[
          { label: "Name", accessor: "name", sortable: true },
          { label: "Age", accessor: "age", sortable: true },
        ]}
      />
      <Table.Body<{ id: string; name: string; age: number; group: string }>
        data={[
          { id: "1", name: "John", age: 30, group: "Group A" },
          { id: "2", name: "Doe", age: 25, group: "Group A" },
          { id: "3", name: "Jane", age: 35, group: "Group B" },
        ]}
        columnIdName="id"
        renderRow={(row, isExpanded, toggleExpand) => (
          <tr key={row.id} className="false h-[38px] transition duration-300 ease-in-out">
            <td className="text-gray-light-200 whitespace-nowrap border-y border-l border-gray-light-100 px-6 font-manrope text-13">
              {row.name}
            </td>
            <td className="text-gray-light-200 whitespace-nowrap border-y border-r border-gray-light-100 px-6 font-manrope text-13">
              {row.age}
            </td>
          </tr>
        )}
      />
    </Table>
  ),
};

export const Grouped: Story = {
  render: () => (
    <Table>
      <Table.Head
        columns={[
          { label: "Name", accessor: "name", sortable: true },
          { label: "Age", accessor: "age", sortable: true },
        ]}
      />
      <Table.Body<{ id: string; name: string; age: number; group: string }>
        data={[
          { id: "1", name: "John", age: 30, group: "Group A" },
          { id: "2", name: "Doe", age: 25, group: "Group A" },
          { id: "3", name: "Jane", age: 35, group: "Group B" },
        ]}
        columnIdName="id"
        groupBy="group"
        renderExpandedContent={(row) => (
          <div className="bg-gray-100 p-2">Esse é um expanded content do - {row.group}</div>
        )}
        renderRow={(row, isExpanded, toggleExpand) => (
          <tr key={row.id} className="hover:bg-gray-50">
            <td
              onClick={toggleExpand}
              className="text-gray-light-200 cursor-pointer whitespace-nowrap border-y border-l border-gray-light-100 px-6 font-manrope text-13"
            >
              {row.name} {isExpanded ? "[-]" : "[+]"}
            </td>
            <td className="px-6 py-2">{row.age}</td>
          </tr>
        )}
      />
    </Table>
  ),
};
