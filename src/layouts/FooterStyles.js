import styled from "styled-components";

export const Box = styled.div`
  background: white;
  border-top: 6px solid green;
  bottom: 0;
  width: 100%;

  @media (max-width: 1000px) {
    padding: 20px 30px;
  }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  max-width: 1000px;
  margin: 0 auto;
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
`;

export const Row = styled.div`
  display: flex;
`;

export const FooterLink = styled.a`
  color: black;
  margin-bottom: 5px;
  font-size: 14px;
  text-decoration: none;

  &:hover {
    color: green;
    transition: 200ms ease-in;
  }
`;

export const Heading = styled.p`
  font-size: 18px;
  color: black;
  margin-bottom: 10px;
  font-weight: bold;
`;
