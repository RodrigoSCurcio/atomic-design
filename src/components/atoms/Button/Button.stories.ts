import Button from ".";

export default {
  title: "atoms/Button",
  args: { children: "button" },
  component: Button,
};

export const ButtonPrimary = {
  args: {
    children: "Button",
  },
};

export const ButtonOutline = {
  args: {
    children: "Button",
    outline: true,
  },
};
