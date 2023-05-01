import { Button, Grid } from '@chakra-ui/react';

import SomeText from './fragments/SomeText';

const Home = () => {
  return (
    <Grid gap={4}>
      <SomeText />
      <Button bg="secondary">button</Button>
    </Grid>
  );
};

export default Home;
