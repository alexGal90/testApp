import styled from "styled-components";

export const ImageContainer = styled.div`
  display: ${(props) => (props.isVisible ? "block" : "none")};
  text-align: center;
`;

export const DetailedInfoContainer = styled.div`
  width: 90%;
  margin: 20px auto;
`;

export const CardTitle = styled.h1`
  text-align: center;
  padding: 10px;
`;

export const GoBackButton = styled.button`
  cursor: pointer;
  background: #44c4e7;
  width: 90px;
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

export const LoaderContainer = styled.div`
  margin: 100px calc(50% - 50px);
`;
