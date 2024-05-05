import styled from "styled-components";

export const SInput = styled.div`
  display: flex;
  flex-direction: column;

  label {
    font-size: 16px;
    font-weight: 700;

    color: #fff;
  }

  input {
    border-radius: 16px;
    border: 1px solid red;

    height: 20px;

    padding-left: 8px;
  }
`;
