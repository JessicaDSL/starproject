import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  border-radius: 5px;
  padding: 10px 0;
  margin: 5px 0;
  color: #1b1e23;
  h2 {
    margin: 0 1rem;
  }
  span {
    font-weight: lighter;
  }
  button {
    padding: 0.3rem 1rem;
    cursor: pointer;
    font-weight: bolder;
    letter-spacing: 0.5px;
    color: #eee;
    background: #333333;
    border: none;
    border-radius: 5px;
    &:hover {
      color: #eee;
      background: #101010;
      transition: .5s ease-in;
    }
  }
`;
