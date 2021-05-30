import styled from "styled-components";
import { Link } from "react-router-dom";

export const PokemonListContainer = styled.div`
  width: 90%;
  margin: 20px auto;
`;

export const PokemonFiltersContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  flex-direction: column;
`;

export const SingleFilterContainer = styled.div`
  min-width: 550px;
  padding: 4px;
`;

export const CardLinkContainer = styled(Link)`
  cursor: pointer;
  background: #44c4e7;
  width: 100%;
  padding: 10px;
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
