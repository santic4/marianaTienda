import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { images } from './images'; // Importa solo las imágenes
import './InicioImages.css';

const InicioImages = () => {
  const imageCategories = [
    { title: 'Blusas y Camisas', images: images.blusasCamisas },
    { title: 'Pantalones', images: images.pantalones },
    { title: 'Remeras', images: images.remeras },
    { title: 'Sacos y Camperas', images: images.sacosCamperas },
    { title: 'Shorts y Polleras', images: images.shortPolleras },
    { title: 'Noche', images: images.noche },
    { title: 'Sweters', images: images.sweters },
    { title: 'Buzos', images: images.buzos },
    { title: 'Outlet', images: images.outlet },

  ];

  function renderImageCarousel(images, categoryIndex) {
    return (
      <div className='yo'>

        <Carousel
          autoPlay
          infiniteLoop
          showArrows={false}
          showThumbs={false}
          className="image-carousel"
          interval={3000}
          transitionTime={500}
          showStatus={false}
          showIndicators={false}
          swipeable
        >
          {images.map((image, index) => (
            <div key={index} className="carousel-item">
              <img src={image} alt={`Imagen ${index}`} />
              <div className='btnTitle'>
              <h3 className="image-title">{imageCategories[categoryIndex].title}</h3>
              <button className="image-button">Ver más</button>
              </div>
            </div>
          ))}
        </Carousel>
      </div>
    );
  }

  return (
    <div  className='contenedorMain'>
      {imageCategories.map((category, index) => (
        <div className="inicio-images" key={index}>
          {renderImageCarousel(category.images, index)}
        </div>
      ))}
    </div>
  );
};

export default InicioImages;