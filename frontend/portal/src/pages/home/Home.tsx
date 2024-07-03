import { Box, Container, Typography } from "@mui/material";
import { SEO, Slider } from "../../components";
import { useTranslation } from "react-i18next";

interface IHomeSliderElements {
  bgColor: string;
  titleKey: string;
  descriptionKey: string;
}

function Home() {
  const [t] = useTranslation();

  const createSliderItem = (bgColor: string, titleKey: string, descriptionKey: string): IHomeSliderElements => ({
    bgColor,
    titleKey,
    descriptionKey
  });

  const sliders: IHomeSliderElements[] = [
    createSliderItem('bg-rose-500', 'home.slider.first.title', 'home.slider.first.description'),
    createSliderItem('bg-violet-500', 'home.slider.second.title', 'home.slider.second.description'),
    createSliderItem('bg-cyan-500', 'home.slider.third.title', 'home.slider.third.description'),
    createSliderItem('bg-orange-500', 'home.slider.fourth.title', 'home.slider.fourth.description'),
    createSliderItem('bg-green-500', 'home.slider.fifth.title', 'home.slider.fifth.description')
  ];

  return (
    <>
      <SEO
        title={t("seo:home.title")}
        description={t("seo:home.description")}
        name="marpio Sp. z o.o."
        type="article" 
      />
      <Box className="h-screen">
        <Slider items={sliders.map(slider => (
          <Box className={`${slider.bgColor} flex flex-col items-center justify-center w-full h-full`}>
            <Container className="flex flex-col items-center justify-center gap-5">
              <Typography className="text-balance" variant="h2">{t(slider.titleKey)}</Typography>
              <Typography className="text-balance w-full lg:w-[50%]" variant="inherit">{t(slider.descriptionKey)}</Typography>
            </Container>
          </Box>
        ))} />
      </Box>
    </>
  );
}

export default Home;
