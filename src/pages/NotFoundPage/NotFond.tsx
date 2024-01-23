import { Link } from 'react-router-dom';
import { Box, Typography } from '@mui/material';
import styled from 'styled-components';

import Ghosts from './assets/ghosts.png';
import gengar from './assets/gengar.png';

const NotFoundPageContainer = styled(Box)`
  &.notFoundPage {
    // Your styles for the notFoundPage class
  }
`;

const Title = styled(Typography)`
  &.title {
    font-size: 2rem;
    color: #F7B6B6;
    text-align: center;
    margin: 10px;
  }
`;

const ErrorMessage = styled.p`
  color: #F7B6B6;
  font-size: 2rem;
  text-align: center;
  margin: 10px;
`;

const HomeLink = styled(Link)`
  text-decoration: none;
  color: white;
  background-color: red;
  padding: 10px;
  border-radius: 10px;
`;

const GhostsImage = styled.img`
  width: 500rem;
`;

export default function NotFoundPage() {
  return (
    <NotFoundPageContainer className="notFoundPage">
      <Title variant="h1" className="title">
        The page does not exist
        <Link to="/Search">
          <img src={gengar} width="70rem" alt="Gengar" />
        </Link>
        <ErrorMessage>err:404</ErrorMessage>
      </Title>
      <Typography variant="h2">
        <HomeLink to="/" color="danger" underline="hover" variant="solid">
          Go home !
        </HomeLink>
      </Typography>
      <GhostsImage src={Ghosts} width="500rem" alt="Fantasmas" />
    </NotFoundPageContainer>
  );
}
