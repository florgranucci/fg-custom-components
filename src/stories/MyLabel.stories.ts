import { Meta, StoryObj } from "@storybook/react";
import { MyLabel, type MyLabelProps } from "../components/MyLabel";

const meta:Meta<MyLabelProps> = {
  title: "UI/MyLabel",
  component: MyLabel,
  tags: ["autodocs"],
  argTypes: {
    label: { control: "text" },
    size: { control: "select", options: ["normal", "h1", "h2", "h3"] },
    fontColor: { control: "color" },
  },
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof MyLabel>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Basic: Story = {
    args: {
        label: "My Label",
    }
};

export const AllCaps: Story = {
    args: {
        label: "AllCaps Label",
        allCaps: true,
    }
};

export const Secondary: Story = {
    args: {
        label: "Secondary Label",
        color: "text-secondary",
    }
};

export const CustomColor: Story = {
    args: {
        label: "CustomColor Label",
        fontColor: "#ff0000",
    }
};

export const CustomBackgroundColor: Story = {
    args: {
        label: "CustomColor Label",
        fontColor: "white",
        backgroundColor: "black"
    }
};
