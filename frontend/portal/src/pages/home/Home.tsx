import { Box, Container, Typography } from "@mui/material";
import { Slider } from "../../components";

function Home() {
  const items = [
    <Box className="bg-rose-500 flex flex-col items-center justify-center w-full h-full">
      <Container>
        <Typography variant="h2">123</Typography>
        <Typography variant="inherit">123</Typography>
      </Container>
    </Box>,
    <Box className="bg-violet-500 flex flex-col items-center justify-center w-full h-full">
      <Container>
        <Typography variant="h2">123</Typography>
        <Typography variant="inherit">123</Typography>
      </Container>
    </Box>,
    <Box className="bg-cyan-500 flex flex-col items-center justify-center w-full h-full">
      <Container>
        <Typography variant="h2">123</Typography>
        <Typography variant="inherit">123</Typography>
      </Container>
    </Box>,
  ];

  return (
    <Box className="h-screen">
      <Slider items={items} />
    </Box>
  );
}

export default Home;