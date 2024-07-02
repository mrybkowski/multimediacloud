import { useState, useRef, useEffect, ReactNode } from "react";
import { Box, IconButton } from "@mui/material";
import { ArrowBackIos, ArrowForwardIos } from "@mui/icons-material";
import { styled } from "@mui/system";
import theme from "../../utils/theme/theme";

interface ISlider {
  items: ReactNode[];
}

const SliderContainer = styled(Box)({
  display: "flex",
  overflow: "hidden",
  position: "relative",
  width: "100%",
  height: "100%"
});

const SliderContent = styled(Box)({
  display: "flex",
  transition: "transform 0.3s ease-in-out",
  height: "100%"
});

const SliderItem = styled(Box)({
  width: "100%",
  height: "100%",
  flexShrink: 0,
  boxSizing: "border-box",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  textAlign: "center"
});

const DotsContainer = styled(Box)({
  position: "absolute",
  bottom: "15%",
  left: "50%",
  transform: "translateX(-50%)",
  width: "100%",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  gap: 5
});

const Dot = styled(Box)(({ active }: { active: boolean }) => ({
  position: "relative",
  width: "45px",
  height: "45px",
  borderRadius: "50%",
  backgroundColor: "transparent",
  border: `1px solid ${theme.palette.common.white}`,
  cursor: "pointer",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",

  "&::after": active ? {
    content: '""',
    position: "absolute",
    width: "8px",
    height: "8px",
    borderRadius: "50%",
    backgroundColor: theme.palette.primary.light,
  } : {}
}));

function Slider({ items }: ISlider) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [startPosition, setStartPosition] = useState<number | null>(null);
  const [currentPosition, setCurrentPosition] = useState<number | null>(null);
  const sliderRef = useRef<HTMLDivElement>(null);

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const handleNext = () => {
    if (currentIndex < items?.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const handleDotClick = (index: number) => {
    setCurrentIndex(index);
  };

  const handleMouseDown = (event: React.MouseEvent) => {
    setStartPosition(event?.clientX);
  };

  const handleMouseMove = (event: React.MouseEvent) => {
    if (startPosition !== null) {
      setCurrentPosition(event?.clientX);
    }
  };

  const handleMouseUp = () => {
    if (startPosition !== null && currentPosition !== null) {
      const distance = startPosition - currentPosition;
      if (distance > 50) {
        handleNext();
      } else if (distance < -50) {
        handlePrev();
      }
    }
    setStartPosition(null);
    setCurrentPosition(null);
  };

  const handleKeyDown = (event: KeyboardEvent) => {
    if (event.key === "ArrowLeft") {
      handlePrev();
    } else if (event.key === "ArrowRight") {
      handleNext();
    }
  };

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentIndex]);

  return (
    <Box 
      position="relative" 
      width="100%" 
      height="100%" 
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseUp}
      ref={sliderRef}
    >
      <SliderContainer>
        <SliderContent style={{ transform: `translateX(-${currentIndex * 100}%)`, width: `${items?.length * 100}%` }}>
          {items.map((item, index) => (
            <SliderItem key={index}>
              {item}
            </SliderItem>
          ))}
        </SliderContent>
      </SliderContainer>
      {currentIndex > 0 && (
        <IconButton onClick={handlePrev} sx={{ position: "absolute", left: 50, top: "50%", transform: "translateY(-50%)" }}>
          <ArrowBackIos htmlColor={theme.palette.common.white} fontSize="large" />
        </IconButton>
      )}
      {currentIndex < items.length - 1 && (
        <IconButton onClick={handleNext} sx={{ position: "absolute", right: 50, top: "50%", transform: "translateY(-50%)" }}>
          <ArrowForwardIos htmlColor={theme.palette.common.white} fontSize="large" />
        </IconButton>
      )}
      <DotsContainer>
          {items?.map((_, index) => (
            <Dot key={index} active={index === currentIndex} onClick={() => handleDotClick(index)} />
          ))}
      </DotsContainer>
    </Box>
  );
};

export default Slider;
