import styled from 'styled-components';
import Subscribe from '../Subscribe';
import useWindowSize from '../../hooks/useWindowSize';
import { ReactComponent as BaseApparelLogo } from '../../assets/logo.svg';
import HeroMobile from '../../assets/hero-mobile.jpg';
import HeroDesktop from '../../assets/hero-desktop.jpg';

interface Size {
  width: number | undefined;
  height: number | undefined;
}

const Wrapper = styled.main`
  --padding: 30px;
  height: 100vh;
  width: 100%;
  background: var(--gradient-white-softwhite);
  padding-left: var(--padding);
  padding-right: var(--padding);
  display: grid;
  grid-template-rows: 80px 1fr 1fr 1fr 1fr;
`;
const Logo = styled.div`
  display: flex;
  align-items: center;
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
  const size: Size = useWindowSize();
  const isMobile = size && size?.width && size?.width < 768;
  return (
    <Wrapper data-testid='app'>
      <Logo>
        <BaseApparelLogo title='base apparel logo' />
      </Logo>
      <Hero>
        <img
          src={isMobile ? HeroMobile : HeroDesktop}
          alt='stylish woman with brown hair, orange shirt, and bracelet'
        />
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
      <Subscribe />
    </Wrapper>
  );
}

export default App;
