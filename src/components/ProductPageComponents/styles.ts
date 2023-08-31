import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const SubContainer = styled.div`
  display: flex;
  gap: 25px;
  justify-content: space-between;

  flex-direction: row;
  @media (max-width: 1468px) {
    flex-wrap: wrap;
  }
  margin-top: 50px;
`;

export const Title = styled.h1`
  font-size: 24px;
`;

export const Price = styled.p`
  font-size: 18px;
  margin-top: 10px;
`;

export const BuyButtonArea = styled.div`
  width: 100%;
  height: 50%;
  display: flex;
  align-items: end;

  @media (max-width: 968px) {
    align-items: normal;
  }
`;

export const BuyButton = styled.button`
  appearance: none;
  background-color: #000000;
  border: 2px solid #1a1a1a;
  border-radius: 15px;
  box-sizing: border-box;
  color: #ffffff;
  cursor: pointer;
  display: inline-block;
  font-family: Roobert, -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica,
    Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
  font-size: 16px;
  font-weight: 600;
  line-height: normal;
  margin: 0;
  min-height: 60px;
  min-width: 0;
  outline: none;
  padding: 10px;
  text-align: center;
  text-decoration: none;
  transition: all 300ms cubic-bezier(0.23, 1, 0.32, 1);
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  width: 150px;
  min-height: 60px;
  max-width: 100px;
  will-change: transform;

  &:disabled {
    pointer-events: none;
  }

  &:hover {
    box-shadow: rgba(0, 0, 0, 0.25) 0 8px 15px;
    transform: translateY(-2px);
  }

  &:active {
    box-shadow: none;
    transform: translateY(0);
  }
`;

export const Description = styled.p`
  font-size: 16px;
  margin-top: 20px;
`;

export const Image = styled.img`
  max-height: 500px;
  max-width: 700px;

  @media (max-width: 968px) {
    width: 568px;
  }
  @media (max-width: 760px) {
    width: 100%;
  }
`;
