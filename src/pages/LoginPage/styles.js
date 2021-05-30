import styled from "styled-components";

export const LoginFormContainer = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  background: #fff;
  width: 280px;
  margin: -140px;
  padding: 40px;
  box-shadow: 0 0 3px rgba(0, 0, 0, 0.3);
`;

export const LoginTitle = styled.h2`
  margin: 0 0 20px;
  line-height: 1;
  color: #44c4e7;
  font-size: 18px;
  font-weight: 400;
`;

export const LoginButton = styled.button`
  cursor: pointer;
  background: #44c4e7;
  width: 100%;
  padding: 10px 15px;
  border: 0;
  color: #fff;
  font-family: "Roboto";
  font-size: 14px;
  font-weight: 400;
  &:hover {
    background: #369cb8;
  }
`;

export const ErrorText = styled.p`
  color: #fc3503;
`;
