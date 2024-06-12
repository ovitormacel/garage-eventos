// @ts-nocheck
import SlideCard from '@/components/common/SlideCard';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import "@splidejs/splide/dist/css/splide.min.css";

const MainSlider = () => {
    return (
        <>
            <Splide aria-label="Eventos em Destaque">
                <SplideSlide>
                    <SlideCard image="/banda-teste.jpg" title="Brothers Rush"/>
                </SplideSlide>

                <SplideSlide>
                    <SlideCard image={"/palco.jpg"} title={"Palco de Teste"}/>
                </SplideSlide>
            </Splide>
        </>
    )
}

export default MainSlider;