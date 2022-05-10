import styled from "@emotion/styled";

export const MainScreen = styled.div`
  display: grid;
  width: 100%;
  .buttonAddObject {
    height: 40px;
    border-radius: 20px;
  }
`;
export const ObjectsData = styled.div`
  display: grid;
`;
export const ObjectsStatus = styled.div`
  display: grid;
  grid-template-columns: repeat(3, max-content);
  column-gap: 8px;
  margin-top: 16px;
`;
export const TopData = styled.div`
  display: grid;
  grid-template-columns: 1fr max-content;
  margin-top: 16px;
  margin-bottom: 26px;
`;
