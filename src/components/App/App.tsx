import styled from "styled-components";
import BaseApparelLogo from "../../assets/logo.svg";
import HeroMobile from "../../assets/hero-mobile.jpg";

const Wrapper = styled.main`
  --padding: 30px;
  height: 100vh;
  width: 100%;
  background: var(--gradient-white-softwhite);
  padding-left: var(--padding);
  padding-right: var(--padding);
`;
const Logo = styled.header`
  padding: 32px;
`;
const Hero = styled.div`
  margin-left: -30px;
  margin-right: -30px;
  & > img {
    width: 100%;
    min-height: 200px;
    max-height: 300px;
    object-fit: cover;
  }
`;
const Title = styled.h1`
  font-size: 36px;
  text-transform: uppercase;
  text-align: center;
  margin-top: 65px;
  color: var(--dark-grayish-red);
  line-height: 1.2;
  letter-spacing: 3px;
  & > span {
    color: var(--desaturated-red);
    font-weight: var(--fw-light);
  }
`;
const Copy = styled.p`
  margin-top: 32px;
  color: var(--desaturated-red);
  line-height: 1.4;
  letter-spacing: 0.02rem;
`;

function App() {
  return (
    <Wrapper data-testid="app">
      <Logo>
        <img src={BaseApparelLogo} alt="" />
      </Logo>
      <Hero>
        <img src={HeroMobile} alt="" />
      </Hero>
      <Title>
        <span>we're</span>
        <br />
        coming
        <br />
        soon
      </Title>
      <Copy>
        Hello fellow shoppers! We're currently building our new fashion store.
        Add your email below to stay up-to-date with announcements and our
        launch deals.
      </Copy>
    </Wrapper>
  );
}

export default App;
