import styled, { css } from "styled-components";

interface IStyleButton {
  outline?: boolean;
}

export const SButton = styled.button<IStyleButton>`
  border: none;
  border-radius: 18px;

  background-color: red;
  color: white;

  height: 37px;
  padding: 8px;

  text-transform: uppercase;
  font-weight: 800;
  font-size: 14px;

  cursor: pointer;
  transition: 0.2s;

  &:hover {
    padding: 6px;

    background-color: white;
    color: red;

    border: 2px solid red;
  }

  ${({ outline }) =>
    outline &&
    css`
      padding: 6px;

      background-color: white;
      color: red;

      border: 2px solid red;

      &:hover {
        padding: 8px;

        background-color: red;
        color: white;
        border: none;
      }
    `}
`;
