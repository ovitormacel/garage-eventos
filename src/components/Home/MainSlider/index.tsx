// @ts-nocheck
import SlideCard from '@/components/common/SlideCard';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import "@splidejs/splide/dist/css/splide.min.css";

const MainSlider = ({eventsList}) => {
    console.log(eventsList);
    return (
        <>
            <Splide options={{
                type: "loop",
                perMove: 1,
                speed: 500,
            }} aria-label="Eventos em Destaque">
                {eventsList.map(event => (
                    <SplideSlide>
                        <SlideCard image={"/uploads/"+event.cover+".jpg"} title={event.name} date={new Date(event.date.year, event.date.month, event.date.day, event.date.hour, event.date.minutes)}/>
                    </SplideSlide>
                ))}
            </Splide>
        </>
    )
}

export default MainSlider;