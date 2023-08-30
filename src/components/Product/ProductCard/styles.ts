import styled from "styled-components";
export const Card = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  background: rgba(255, 255, 255, 0.4);
  backdrop-filter: blur(10px);
  border-radius: 0px 0px 4px 4px;

  width: 256px;

  img {
    width: 256px;
    height: 300px;
    border-radius: 4px 4px 0px 0px;
  }

  h3 {
    font-weight: 300;
    font-size: 16px;
    line-height: 150%;
    color: #41414d;
  }

  p {
    font-weight: 600;
    font-size: 14px;
    line-height: 150%;
    color: #09090a;
  }

  div {
    display: flex;
    align-items: start;
    justify-content: center;
    flex-direction: column;
    padding: 8px 0;

    > div {
      width: 228px;
      height: 1px;
      margin: 8px 0;
      padding: 0px;
      background: rgba(240, 240, 240, 0.4);
    }
  }
`;
