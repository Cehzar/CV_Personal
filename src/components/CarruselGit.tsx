// components/Carousel.tsx
import React, { useState } from 'react';
import '../components/CarruselGit.css';

interface CarouselProps {
  items: any[];
  renderItem: (item: any) => React.ReactNode;
}

const Carousel: React.FC<CarouselProps> = ({ items, renderItem }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const index = currentIndex === 0 ? items.length - 1 : currentIndex - 1;
    setCurrentIndex(index);
  };

  const nextSlide = () => {
    const index = currentIndex === items.length - 1 ? 0 : currentIndex + 1;
    setCurrentIndex(index);
  };

  if (items.length === 0) {
    return <div>No items to display</div>;
  }

  return (
    <div className="carousel">
      <button onClick={prevSlide} className="carousel-button prev-button" style={{ margin: '0px' }}>◀</button>
      <div className="carousel-content">
        {renderItem(items[currentIndex])}
      </div>
      <button onClick={nextSlide} className="carousel-button next-button" style={{ margin: '0px' }}>▶</button>
    </div>
  );
  
};

export default Carousel;
