import styled from "styled-components";

export const SHeader = styled.aside`
  padding: 5px;

  display: flex;
  justify-content: space-between;
  align-items: center;

  box-shadow: 0px 4px 4px 0px #00000040;

  background: rgb(247, 2, 73);
  background: linear-gradient(
    90deg,
    rgba(247, 2, 73, 1) 3%,
    rgba(212, 6, 24, 1) 71%
  );

  div {
    padding: 5px;
    display: flex;
    gap: 0 8px;
  }
`;
