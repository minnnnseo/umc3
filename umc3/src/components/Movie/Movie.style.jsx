import styled from 'styled-components';

export const AppContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin: 16px;
  background-color: #373b69;
  background-color: #22254b;
  color: white;
  border-radius: 5px;
  box-shadow: 3px 3px 5px rgba(0, 0, 0, 0.1);
`;

export const MovieContainer = styled.div`
  width: 250px;
  margin: 10px;
  border: 1px solid black;
  position: relative;
  height: auto;

  &:hover .movie-detail {
    display: block;
  }

  img {
    max-width: 100%;
  }
`;

export const MovieInfo = styled.div`
  display: flex;
  padding: 20px;
  justify-content: space-between;
  align-items: center;

  h4 {
    margin: 0;
  }

  span {
    margin-left: 3px;
  }
`;

export const MovieDetail = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.8); /* 투명도 조절 */
  border: 1px solid #ccc;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  z-index: 999;
  width: 100%;
  height: 100%;
  display: none;
  justify-content: center;

  h4, p {
    margin: 1;
    font-size: 13px;
    text-align: left;
    margin-left: 3px;
    margin-right: 3px;
    padding: 3px;
  }
`;
