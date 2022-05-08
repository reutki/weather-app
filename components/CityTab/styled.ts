import styled from "@emotion/styled";

export const PaperWrapper = styled.div`
  .MuiPaper-root {
    background-color: #007aff;
  }
  .MuiCardHeader-root {
    display: grid;
    grid-template-columns: max-content max-content;
  }
  .MuiCardContent-root {
    display: grid;
    grid-template-columns: max-content max-content max-content;
    column-gap: 20px;
  }
`;
export const IconWrapper = styled.div`
  display: grid;
  width: 30px;
`;
export const RainProbability = styled.div`
  display: grid;
  grid-template-columns: max-content max-content;
  column-gap: 10px;
  align-items: center;
`;
export const Wind = styled.div`
  display: grid;
  grid-template-columns: max-content max-content;
  column-gap: 10px;
  align-items: center;
`;
