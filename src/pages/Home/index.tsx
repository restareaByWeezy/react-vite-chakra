import { Grid } from '@chakra-ui/react';

import SomeText from './fragments/SomeText';

const Home = () => {
  return (
    <Grid gap={4}>
      <SomeText />
    </Grid>
  );
};

export default Home;
