interface SlideProps {
    image: string,
    title: string
}

const SlideCard = ({image, title}: SlideProps) => {
    return (
        <>
            <div>
                <img src={image} alt={title} />
            </div>
        </>
    )
}

export default SlideCard;