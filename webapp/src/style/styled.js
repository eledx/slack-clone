import styled from 'styled-components';

export const SideBar = styled.div`
  height: 100%;
  background-color: #3f0f40;
`;

export const HeaderSideBar = styled.div`
  font-size: 1.2em;
  height: 60px;
  width: 100%;
  color: white;
  background-color: #390e3a;
`;

export const MainSideBar = styled.div`
  /* overflow-y: scroll; */
  height: 100%;
`;

export const FooterSideBar = styled.div`
  position: absolute;
  bottom: 0;
  font-size: 1.2em;
  height: 70px;
  width: 100%;
  color: white;
  background-color: #390e3a;
`;

export const ButtonSideBar = styled.div`
  padding: 10px;
  color: white;
  cursor: pointer;
  outline: none;
  transition: background-color 0.4s;
  &:hover {
    background-color: #621564;
  }
`;

export const Container = styled.div`
  height: 100vh;
`;

export const HeaderChannel = styled.div`
  height: 60px;
  width: 100%;
  border-bottom: 2px solid #e2e2e2;
`;

export const MainChannel = styled.div`
  width: 100%;
`;

export const FooterChannel = styled.div`
  position: absolute;
  bottom: 0;
  width: 100%;
`;

