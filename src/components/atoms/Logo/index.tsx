import Img from "assets/logo.png";

interface ILogo {
  height?: number;
  width?: number;
}
export default function Logo({ height = 40, width = 50 }: ILogo) {
  return (
      <img src={Img} alt="logo" width={width} height={height} />
  );
}
