import styled from "@emotion/styled";

export const CityTabStyle = styled.div`
  display: grid;
  margin: 0 auto;
`;
export const CardContentTop = styled.div`
  display: flex;
  margin-bottom: 20px;
`;
export const CityData = styled.div`
  display: grid;
`;

export const PaperWrapper = styled.div`
  .MuiPaper-root {
    background-color: #007aff;
    .MuiCardHeader-root {
      display: grid;
      align-content: center;
    }
    .MuiCardHeader-avatar {
      justify-self: end;
      display: grid;
      width: max-content;
    }
    .MuiCardHeader-content {
      justify-self: start;
      display: grid;
      width: max-content;
    }
  }
`;
export const IconWrapper = styled.div`
  display: grid;
  width: 30px;
  max-width: 100px;
`;
