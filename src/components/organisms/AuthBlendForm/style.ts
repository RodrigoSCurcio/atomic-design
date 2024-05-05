import styled from "styled-components";

export const SAuthBlendForm = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  gap: 8px;

  width: 500px;
  height: 400px;

  border-radius: 16px;
  border: 1px solid #f20e0e;
  box-shadow: 4px 4px 4px 4px #00000040;
  

  padding: 16px;

  img {
    margin-left: auto;
    margin-right: auto;
  }

  .changeForm {
    display: flex;
    gap: 0 10px;
    margin-top: 16px;

    button {
      width: 49%;
    }
  }
`;
