import { useState, useEffect } from 'react';
import {
  CarouselContainer,
  CarouselImage,
  CarouselControls,
  CarouselButton,
  CarouselDots,
  Dot,
  ProjectMedia,
  CarouselOverlay,
  ModalImage,
  ModalContent,
  CloseButton
  , ModalNavButton
} from './styles';

const Carousel = ({ images = [], icon = null, placeholder = null }) => {
  const [index, setIndex] = useState(0);
  const [open, setOpen] = useState(false);

  // close on ESC
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'Escape') setOpen(false);
    };
    if (open) window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [open]);

  if (!images || images.length === 0) {
    // show icon or placeholder
    return (
      <ProjectMedia>
        {placeholder ? <CarouselImage src={placeholder} alt="placeholder" /> : icon}
      </ProjectMedia>
    );
  }

  const prev = () => {
    const ni = (index - 1 + images.length) % images.length;
    setIndex(ni);
    setOpen(true);
  };

  const next = () => {
    const ni = (index + 1) % images.length;
    setIndex(ni);
    setOpen(true);
  };

  return (
    <ProjectMedia>
      <CarouselContainer>
        <CarouselImage
          src={images[index]}
          alt={`screenshot-${index + 1}`}
          onClick={() => setOpen(true)}
          style={{ cursor: 'zoom-in' }}
        />
        <CarouselControls>
          <CarouselButton onClick={prev} aria-label="Previous">‹</CarouselButton>
          <CarouselButton onClick={next} aria-label="Next">›</CarouselButton>
        </CarouselControls>
        <CarouselDots>
          {images.map((img, i) => (
            <Dot
              key={img}
              aria-label={`Go to slide ${i + 1}`}
              active={i === index}
              onClick={() => setIndex(i)}
            />
          ))}
        </CarouselDots>
      </CarouselContainer>
      {open && (
        <CarouselOverlay onClick={() => setOpen(false)}>
          <ModalContent onClick={(e) => e.stopPropagation()}>
            <CloseButton aria-label="Close" onClick={() => setOpen(false)}>✕</CloseButton>
            {images.length > 1 && (
              <ModalNavButton className="left" aria-label="Previous" onClick={(e) => { e.stopPropagation(); const ni = (index - 1 + images.length) % images.length; setIndex(ni); }}>
                ‹
              </ModalNavButton>
            )}
            <ModalImage src={images[index]} alt={`screenshot-large-${index + 1}`} />
            {images.length > 1 && (
              <ModalNavButton className="right" aria-label="Next" onClick={(e) => { e.stopPropagation(); const ni = (index + 1) % images.length; setIndex(ni); }}>
                ›
              </ModalNavButton>
            )}
          </ModalContent>
        </CarouselOverlay>
      )}
    </ProjectMedia>
  );
};

export default Carousel;
