// @ts-nocheck
import SlideCard from '@/components/common/SlideCard';
import { Splide, SplideSlide, SplideTrack } from '@splidejs/react-splide';
import "@splidejs/splide/dist/css/splide.min.css";
import styles from "./styles.module.scss";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";

const MainSlider = ({eventsList}) => {
    
    return (
        <>
            <Splide hasTrack={false} options={{
                speed: 300,
                pagination: false,
                waitForTransition: true,
            }}>
                <SplideTrack>
                    {eventsList.map(event => (
                        <SplideSlide key={event.id}>
                            <SlideCard image={"/uploads/"+event.cover+".jpg"} title={event.name} date={new Date(event.date.year, event.date.month, event.date.day, event.date.hour, event.date.minutes)}/>
                        </SplideSlide>
                    ))}
                </SplideTrack>

                <div className='splide__arrows'>
                    <button className={`${styles.arrow} splide__arrow splide__arrow--prev`}><FaAngleRight /></button>
                    <button className={`${styles.arrow} splide__arrow splide__arrow--next`}><FaAngleRight /></button>
                </div>
            </Splide>
        </>
    )
}

export default MainSlider;