import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import './slider.scss';

function MyCarousel() {
  return (
    <div className='bdycont'>
    <div className='box'>
    <Carousel autoPlay infiniteLoop showThumbs={false} width="40%" className="carousel">
        
      <div>
        <img src=".\src\assets\images\ALPLA.png" alt="Imagen 1" />
        <p className="legend">Imagen 1</p>
      </div>
      <div>
        <img src="\src\assets\images\BIMBO.png" alt="Imagen 2" />
        <p className="legend">Imagen 2</p>
      </div>
      <div>
        <img src=".\src\assets\images\HazPan.jpg" alt="Imagen 3" />
        <p className="legend">Imagen 3</p>
      </div>
      
      <div>
        <img src=".\src\assets\images\ISSSTE.png" alt="Imagen 4" />
        <p className="legend">Imagen 4</p>
      </div>
      <div>
        <img src=".\src\assets\images\logo_barcel.png" alt="Imagen 5" />
        <p className='legend'>imagen 5</p>
      </div>
      <div>
        <img src=".\src\assets\images\moldex.png" alt="Imagen 6" />
        <p className='legend'>imagen 6</p>
      </div>
      <div>
        <img src=".\src\assets\images\Prodemex.png" alt="Imagen 7" />
        <p className='legend'>imagen 7</p>
      </div>
      <div>
        <img src=".\src\assets\images\Ricolino.png" alt="Imagen 8" />
        <p className='legend'>imagen 8</p>
      </div>
      <div>
        <img src=".\src\assets\images\suandy.jpg" alt="Imagen 9" />
        <p className='legend'>imagen 9</p>
      </div>
      <div>
        <img src=".\src\assets\images\teva.png" alt="Imagen 10" />
        <p className='legend'>imagen 10</p>
      </div>
    </Carousel>
    </div>
    </div>
  );
}

export default MyCarousel;