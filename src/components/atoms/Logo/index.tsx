import LogoDefault from "assets/logo.png";
import LogoBlack from "assets/logo_black.png";

interface ILogo {
  height?: number;
  width?: number;
  black?: boolean;
}
export default function Logo({ height = 40, width = 40, black }: ILogo) {
  return (
    <img
      src={black ? LogoBlack : LogoDefault}
      alt="logo"
      width={width}
      height={height}
    />
  );
}
