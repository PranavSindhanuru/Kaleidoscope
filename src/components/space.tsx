// import chromatic_cascade from '../image/chromatic_cascade.jpg'
// import chromatic_fusion from '../image/chromatic_fusion.webp'
// import crimson_riptide from '../image/crimson_riptide.jpg'
// import molten_swirl from '../image/molten_swirl.jpg'
// import shimmering_strands from '../image/shimmering_strands.jpg'
// import tidal_gradient from '../image/tidal_gradient.jpg'

function Space({ image }: any) {
    return (
        <div className="relative h-full w-full">
            {window.innerWidth > 450 ?
                <div className="w-full h-full">
                    <div className="flex flex-col gap-[21.6vh]">
                        <Row rotate={false} image={image} />
                        <Row rotate={true} image={image} />
                        <Row rotate={false} image={image} />
                        <Row rotate={true} image={image} />
                        <Row rotate={false} image={image} />
                    </div>
                </div>
                :
                <div className="w-full h-full scale-[0.7] -ml-[20vh] -mt-[20vh]">
                    <div className="flex flex-col gap-[21.6vh]">
                        <Row rotate={false} image={image} />
                        <Row rotate={true} image={image} />
                        <Row rotate={false} image={image} />
                        <Row rotate={true} image={image} />
                        <Row rotate={false} image={image} />
                        <Row rotate={true} image={image} />
                        <Row rotate={false} image={image} />
                    </div>
                </div>
            }
        </div>
    )
}

function Row({ rotate, image }: any) {
    return (
        <>
            {rotate ?
                <div className="flex gap-[49.8vh]">
                    <Triangles rotate={false} image={image} />
                    <Triangles rotate={true} image={image} />
                    <Triangles rotate={false} image={image} />
                    <Triangles rotate={true} image={image} />
                    <Triangles rotate={false} image={image} />
                    <Triangles rotate={true} image={image} />
                </div>
                :
                <div className="flex gap-[49.8vh]">
                    <Triangles rotate={true} image={image} />
                    <Triangles rotate={false} image={image} />
                    <Triangles rotate={true} image={image} />
                    <Triangles rotate={false} image={image} />
                    <Triangles rotate={true} image={image} />
                    <Triangles rotate={false} image={image} />
                </div>
            }
        </>
    )
}

function Triangles({ rotate, image }: any) {

    return (
        <div className={`flex -ml-[12.5vh] relative`}>
            {rotate ?
                <>
                    <div className="absolute -scale-x-[1] h-[21.6vh] w-[25vh]  scale-[1.01] origin-[50%_66.66%] rotate-[120deg]"
                        style={{
                            clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)'
                        }}
                    >
                        <Image image={image} />
                    </div>
                    <div className="absolute ml-[12.4vh] h-[21.6vh] w-[25vh] rotate-180 scale-[1.01]"
                        style={{
                            clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)'
                        }}
                    >
                        <Image image={image} />
                    </div>
                    <div className="absolute -scale-x-[1] ml-[24.8vh] h-[21.6vh] w-[25vh]  scale-[1.01] origin-[50%_66.66%] -rotate-[120deg]"
                        style={{
                            clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)'
                        }}
                    >
                        <Image image={image} />
                    </div>
                </>
                :
                <>
                    <div className="absolute h-[21.6vh] w-[25vh]  rotate-[60deg] origin-[74.66%_50%] scale-[1.01]"
                        style={{
                            clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)'
                        }}
                    >
                        <Image image={image} />
                    </div>
                    <div className="absolute -scale-x-[1] ml-[12.4vh] h-[21.6vh] w-[25vh]  scale-[1.01]"
                        style={{
                            clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)'
                        }}
                    >
                        <Image image={image} />
                    </div>
                    <div className="absolute ml-[24.8vh] h-[21.6vh] w-[25vh]  -rotate-[60deg] origin-[25.33%_50%] scale-[1.01]"
                        style={{
                            clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)'
                        }}
                    >
                        <Image image={image} />
                    </div>
                </>
            }
        </div>
    )
}

function Image({ image }: any) {

    return (
        <>
            <img src={
                image === 'chromatic_cascade' ? 'https://ik.imagekit.io/pranavsindhanuru/kaleidoscope/chromatic_cascade.jpg?updatedAt=1713206851148'
                    :
                    image === 'chromatic_fusion' ? 'https://ik.imagekit.io/pranavsindhanuru/kaleidoscope/chromatic_fusion.webp?updatedAt=1713206851739'
                        :
                        image === 'crimson_riptide' ? 'https://ik.imagekit.io/pranavsindhanuru/kaleidoscope/crimson_riptide.jpg?updatedAt=1713206851489'
                            :
                            image === 'molten_swirl' ? 'https://ik.imagekit.io/pranavsindhanuru/kaleidoscope/molten_swirl.jpg?updatedAt=1713206851365'
                                :
                                image === 'shimmering_strands' ? 'https://ik.imagekit.io/pranavsindhanuru/kaleidoscope/shimmering_strands.jpg?updatedAt=1713206850525'
                                    :
                                    image === 'tidal_gradient' ? 'https://ik.imagekit.io/pranavsindhanuru/kaleidoscope/tidal_gradient.jpg?updatedAt=1713206851079'
                                        :
                                        ''
            } alt="" className={`animate-rotate`} />
        </>
    )
}


export default Space;
