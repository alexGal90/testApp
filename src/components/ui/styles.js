import styled from "styled-components";

export const CustomInput = styled.input`
  outline: none;
  display: block;
  width: 100%;
  margin: 0 0 20px;
  padding: 10px 15px;
  border: ${(props) =>
    props.isInvalid ? "1px solid #fc3503" : "1px solid #ccc"};
  color: #ccc;
  font-family: "Roboto";
  box-sizing: border-box;
  font-size: 14px;
  font-weight: 400;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  transition: 0.2s linear;
  &:focus {
    color: #333;
    border: 1px solid #44c4e7;
  }
`;

export const ServerErrorMessageContainer = styled.div`
  color: #fc3503;
  padding: 4px;
`;
