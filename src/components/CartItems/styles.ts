import styled from "styled-components";

export const Container = styled.div`
display: flex;
justify-content: center;
align-items: center;
position: relative;
}
`;

export const CartCount = styled.p`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 20px;
  height: 20px;
  color: #fff;
  position: absolute;
  top: 80%;
  left: 60%;
  background: red;
  color: #fff;
  border-radius: 20%;
`;

export const Item = styled.li`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 210px;

  border-radius: 8px;
  background-color: white;

  position: relative;

  button {
    position: absolute;
    top: 16px;
    right: 24px;

    border: none;
    background: transparent;
    cursor: pointer;
  }

  img {
    max-height: 100%;
    width: 256px;
    border-radius: 8px 0 0 8px;
  }

  > div {
    display: flex;
    width: 1264px;
    height: 100%;
    align-items: flex-start;
    justify-content: space-between;
    flex-direction: column;
    padding: 16px 24px;
    line-height: 150%;
    color: #41414d;
    @media (max-width: 1464px) {
      width: 100%;
    }
    h4 {
      font-weight: 300;
      font-size: 20px;
    }

    p {
      font-weight: 400;
      font-size: 12px;
      max-height: 50%;
      overflow: hidden;
      text-overflow: ellipsis;
    }

    div {
      display: flex;
      align-items: center;
      justify-content: space-between;
      width: 100%;

      span {
        font-weight: 600;
        font-size: 16px;
        color: #09090a;
      }
    }
  }
`;

export const SelectQuantity = styled.select`
  padding: 8px;
  border: 1.5px solid #a8a8b3;
  border-radius: 8px;
  background-color: #f3f5f6;
  color: #737380;
  font-weight: 400;
  font-size: 16px;
`;
