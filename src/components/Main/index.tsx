import * as S from './styles';

const Main = ({
  title = 'React Avançado',
  description = 'Typescript, ReactJS, NextJS, Styled Components',
}) => (
  <S.Wrapper>
    <S.Logo
      src="/img/icon-512.png"
      alt="Imagem de um átomo e React Avançado escrito ao lado."
    />
    <S.Title>{title}</S.Title>
    <S.Description>{description}</S.Description>
    <S.Ilustration
      src="/img/hero-illustration.svg"
      alt="Um desenvolvedor de frente para tela com código"
    />
  </S.Wrapper>
);

export default Main;
