import { Meta, StoryObj } from "@storybook/react";
import { Text } from "./Text";

const meta = {
  title: "Typography/Text",
  component: Text.Headline,
} satisfies Meta<typeof Text.Headline>;

export default meta;

type Story = StoryObj;

export const HeadlineVariants: Story = {
  render: () => (
    <div className="space-y-4 p-4">
      <Text.Headline variant="1" className="font-inter">
        Headline Variant 1 (h1)
      </Text.Headline>
      <Text.Headline variant="2">Headline Variant 2 (h2)</Text.Headline>
      <Text.Headline variant="3">Headline Variant 3 (h3)</Text.Headline>
      <Text.Headline variant="4">Headline Variant 4 (h4)</Text.Headline>
    </div>
  ),
};

export const BodyVariants: Story = {
  render: () => (
    <div className="space-y-4 p-4">
      <Text.Body variant="1">Body Variant 1</Text.Body>
      <Text.Body variant="2">Body Variant 2</Text.Body>
      <Text.Body variant="3">Body Variant 3</Text.Body>
    </div>
  ),
};

export const FieldVariants: Story = {
  render: () => (
    <div className="flex flex-col space-y-4 p-4">
      <Text.Field variant="1">Field Variant 1</Text.Field>
      <Text.Field variant="2">Field Variant 2</Text.Field>
    </div>
  ),
};

export const LabelVariants: Story = {
  render: () => (
    <div className="flex flex-col space-y-4 p-4">
      <Text.Label variant="1">Field Variant 1</Text.Label>
    </div>
  ),
};

export const AllVariants: Story = {
  render: () => (
    <div className="space-y-6 p-6">
      <div className="space-y-4">
        <h2 className="text-lg font-bold">Headlines</h2>
        <Text.Headline variant="1">Headline 1</Text.Headline>
        <Text.Headline variant="2">Headline 2</Text.Headline>
        <Text.Headline variant="3">Headline 3</Text.Headline>
        <Text.Headline variant="4">Headline 4</Text.Headline>
      </div>

      <div className="space-y-4">
        <h2 className="text-lg font-bold">Bodies</h2>
        <Text.Body variant="1">Body 1</Text.Body>
        <Text.Body variant="2">Body 2</Text.Body>
        <Text.Body variant="3">Body 3</Text.Body>
      </div>

      <div className="flex flex-col space-y-4">
        <h2 className="text-lg font-bold">Fields</h2>
        <Text.Field variant="1">Field 1</Text.Field>
        <Text.Field variant="2">Field 2</Text.Field>
      </div>

      <div className="flex flex-col space-y-4">
        <h2 className="text-lg font-bold">Label</h2>
        <Text.Label variant="1">Field 1</Text.Label>
      </div>
    </div>
  ),
};
