import { Grid, Heading } from '@chakra-ui/react';

const SomeText = () => {
  return (
    <Grid textAlign="center" gap={2}>
      <Heading fontSize="2xl" fontWeight="extrabold">
        Hi there!
      </Heading>
    </Grid>
  );
};

export default SomeText;
