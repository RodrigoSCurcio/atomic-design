import { SLabel } from "./style";

export default function Label({
  text,
  color,
}: {
  text: string;
  color?: string;
}) {
  return <SLabel color={color}>{text}</SLabel>;
}
