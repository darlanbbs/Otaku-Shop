import styled from "styled-components";

export const CartListContainer = styled.div`
  h3 {
    font-size: 24px;
    font-weight: 500;
    line-height: 150%;
    text-transform: uppercase;
    color: #41414d;
    margin-top: 60px;
  }

  p {
    font-weight: 300;
    font-size: 16px;
    line-height: 150%;
    color: #41414d;

    span {
      font-weight: 600;
    }
  }
`;

export const CartList = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 16px;
  margin-top: 24px;
`;

export const CartResultContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  min-width: 352px;
  padding: 16px 24px;

  background: white;

  h3 {
    font-weight: 600;
    font-size: 20px;
    color: #41414d;
    text-transform: uppercase;
    margin-bottom: 30px;
  }
`;

export const TotalItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;

  font-weight:600";
  font-size: 16px;
  line-height: 150%;

  margin-bottom: 12px;
`;

export const StyledButton = styled.button`
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
  width: 250px;
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
  @media (max-width: 768px) {
    width: 100%;
  }
`;
