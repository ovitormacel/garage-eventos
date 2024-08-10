// @ts-nocheck
import SlideCard from '@/components/common/SlideCard';
import { Splide, SplideSlide, SplideTrack } from '@splidejs/react-splide';
import "@splidejs/splide/dist/css/splide.min.css";
import styles from "./styles.module.scss";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
import { useEffect, useRef } from 'react';

const MainSlider = ({eventsList}) => {

    
    return (
        <div id='home'>
            <Splide hasTrack={false} options={{
                pagination: false,
            }}>
                <SplideTrack>
                    {eventsList.map(event => (
                        <SplideSlide key={event.id}>
                            <SlideCard id={event.id} image={"/uploads/"+event.cover+".jpg"} title={event.name} date={new Date(event.date.year, event.date.month, event.date.day, event.date.hour, event.date.minutes)}/>
                        </SplideSlide>
                    ))}
                </SplideTrack>

                <div className='splide__arrows'>
                    <button className={`${styles.arrow} splide__arrow splide__arrow--prev`}><FaAngleRight /></button>
                    <button className={`${styles.arrow} splide__arrow splide__arrow--next`}><FaAngleRight /></button>
                </div>
            </Splide>
        </div>
    )
}

export default MainSlider;