import styled from "styled-components";
import db from "../db.json";

const Title = styled.h1`
  font-size: 50px;
  color: ${({ theme }) => theme.colors.primary};
`;

// function Title(props) {
//   return <h1>{props.children}</h1>;
// }

const BackgroundImage = styled.div`
  background-image: url(${db.bg});
  flex: 1;
  background-size: cover;
  background-position: center;
`;

const Widget = styled.div`
  margin-top: 24px;
  margin-bottom: 24px;
  border: 1px solid #4caf50;
  border-radius: 4px;
  overflow: hidden;

  h1,
  h2,
  h3 {
    font-size: 16px;
    font-weight: 700;
    line-height: 1;
    margin-bottom: 0;
  }
  p {
    font-size: 14px;
    font-weight: 400;
    line-height: 1;
  }
`;

const QuizContainer = styled.div`
  width: 100%;
  padding-top: 45px;
  margin: auto 10%;
  border: 3px purple solid;
  @media screen and (max-width: 500px) {
    margin: auto;
    padding: 15px;
  }
`;

export default function Home() {
  return (
    <BackgroundImage>
      <QuizContainer>
        <Widget>
          <h1>Isto é um título</h1>
          <p>Lorem ipsum</p>
        </Widget>
        ahuauahuaahuahuahuahauauauahuauahuahuauahuahauuauaahuauahuaahuahuahuahauauauahuauahuahuauahuahauuauaahu
      </QuizContainer>
    </BackgroundImage>
  );
}
