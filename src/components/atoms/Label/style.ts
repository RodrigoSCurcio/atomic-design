import styled from "styled-components";

interface ISLabel {
  color?: string;
}

export const SLabel = styled.label<ISLabel>`
  font-size: 16px;
  font-weight: 700;

  color: ${({ color }) => color ? color : "#fff"};
`;
