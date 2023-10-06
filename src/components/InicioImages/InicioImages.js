import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { images } from './images'; // Importa solo las imágenes
import './InicioImages.css';
import { Link } from 'react-router-dom';


const InicioImages = () => {
  const imageCategories = [
    { id: 'SacosCamperas', title: 'Sacos Camperas', images: images.SacosCamperas },
    { id: 'BlusasCamisas', title: 'Blusas Camisas', images: images.BlusasCamisas },
    { id: 'Pantalones', title: 'Pantalones', images: images.Pantalones },
    { id: 'Remeras', title: 'Remeras', images: images.Remeras },
    { id: 'ShortsPolleras', title: 'Shorts Polleras', images: images.ShortPolleras },
    { id: 'Buzos', title: 'Buzos', images: images.Buzos },
  ];

  function eliminarEspacios(string) {
    // Utiliza una expresión regular para reemplazar todos los espacios en blanco con una cadena vacía
    return string.replace(/\s+/g, '');
  }

  function scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }
  
  const categoriasSinEspacios = imageCategories.map(category => ({
    ...category,
    title: eliminarEspacios(category.title),
  }));

  function renderImageCarousel(images, categoryIndex, route) {
    return (
  
      <div className='contenedorPadre'>
       
        <Carousel
          autoPlay
          infiniteLoop
          showArrows={false}
          showThumbs={false}
          className="image-carousel"
          interval={5000}
          transitionTime={1000}
          showStatus={false}
          showIndicators={false}
          swipeable
        >
          {images.map((image, index) => (
            <div key={index} className="carousel-item">
              <img src={image} alt={`Imagen ${index}`} />
              <div className='btnTitle'>
                <h3 className="image-title">{imageCategories[categoryIndex].title}</h3>
                <Link to={route}>
                  <button onClick={scrollToTop} className="image-button">Ver colección</button>
                </Link>
              </div>
            </div>
          ))}
        </Carousel>
      </div>
     
    );
  }

  return (
    <div className='containerAbuelo'>
     
      <div className='contenedorMain'>
       
        {categoriasSinEspacios.map((category, index) => (
          <div className="inicio-images" key={index}>
            {renderImageCarousel(category.images, index, `/${category.id}`)}
          </div>
        ))}
      </div>
    </div>
  );
};

export default InicioImages;