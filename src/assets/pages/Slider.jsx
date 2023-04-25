import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import './slider.scss';

function MyCarousel() {
  return (
    <div className='bdycont'>
    <div className='box'>
    <Carousel autoPlay infiniteLoop showThumbs={false} className="carousel">
        
      <div className='image-carousel'>
        <img src=".\src\assets\images\ALPLA.png" alt="Imagen 1" />
        
      </div>
      <div className='image-carousel'>
        <img src="\src\assets\images\BIMBO.png" alt="Imagen 2" />
       
      </div>
      <div className='image-carousel'>
        <img src=".\src\assets\images\HazPan.jpg" alt="Imagen 3" />
        
      </div>
      
      <div className='image-carousel'>
        <img src=".\src\assets\images\ISSSTE.png" alt="Imagen 4" />
        
      </div>
      <div className='image-carousel'>
        <img src=".\src\assets\images\logo_barcel.png" alt="Imagen 5" />
        
      </div>
      <div className='image-carousel'>
        <img src=".\src\assets\images\moldex.png" alt="Imagen 6" />
       
      </div>
      <div className='image-carousel'>
        <img src=".\src\assets\images\Prodemex.png" alt="Imagen 7" />
       
      </div>
      <div className='image-carousel'>
        <img src=".\src\assets\images\Ricolino.png" alt="Imagen 8" />
        
      </div>
      <div className='image-carousel'>
        <img src=".\src\assets\images\suandy.jpg" alt="Imagen 9" />
        
      </div>
      <div className='image-carousel'>
        <img src=".\src\assets\images\teva.png" alt="Imagen 10" />
      </div>
    </Carousel>
    </div>
    </div>
  );
}

export default MyCarousel;