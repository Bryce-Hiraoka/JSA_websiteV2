import Carousel from 'react-bootstrap/Carousel';
import FirstGen from '../assets/fall2023firstgen.JPG';
import Kyoudai from '../assets/kyoudai.jpg';
import Soran from '../assets/soran.jpg';

const carouselItems = [
  { src: Soran, alt: "Soran Dance Performance", caption: "Soran Dance Performance" },
  { src: FirstGen, alt: "First-Generation Event", caption: "Fall 2023 First-Gen Meetup" },
  { src: Kyoudai, alt: "Kyoudai Program", caption: "Kyoudai Program Social" }
];

function HomeCarousel() {
  return (
    <Carousel interval={3000} className="home-carousel">
      {carouselItems.map((item, index) => (
        <Carousel.Item key={index} className="carousel-item">
          <img className="carousel-image" src={item.src} alt={item.alt} />
          {item.caption && (
            <Carousel.Caption>
              <p className="carousel-caption-text">{item.caption}</p>
            </Carousel.Caption>
          )}
        </Carousel.Item>
      ))}
    </Carousel>
  );
}

export default HomeCarousel;
