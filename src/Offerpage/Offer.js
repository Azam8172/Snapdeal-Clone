import Carousel from 'react-multi-carousel'
import { bannerData } from './Data';

const Banner = () => {
    return (
        <Carousel
            swipeable={false}
            draggable={false}
            infinite={true}
            autoPlay={true}
            autoPlaySpeed={4000}
            keyBoardControl={true}
            slidesToSlide={1}
            dotListClass="custom-dot-list-style"
            itemClass="carousel-item-padding-40-px"
            containerClass="carousel-container"
        >
            {
                bannerData.map(data => (
                    <img src={data.url} alt="banner" />
                ))
            }
        </Carousel>
    )
}

export default Banner;