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
  column-gap: 19px;
  margin-top: 16px;
  margin-left: 10px;
  .MuiTypography-body2 {
    position: relative;
    &::before {
      content: "";
      position: absolute;
      left: -9px;
      top: 33.3%;
      width: 5px;
      height: 5px;
      background-color: #333333;
      border-radius: 50%;
    }
  }
  .MuiTypography-body2:first-of-type {
    &::before {
      background-color: #0090ff;
    }
  }
  .MuiTypography-body2:last-of-type {
    &::before {
      background-color: #c6c6c6;
    }
  }
`;
export const TopData = styled.div`
  display: grid;
  grid-template-columns: 1fr max-content;
  margin-top: 16px;
  margin-bottom: 26px;
`;
