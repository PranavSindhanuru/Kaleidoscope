import chromatic_cascade from '../image/chromatic_cascade.jpg'
import chromatic_fusion from '../image/chromatic_fusion.webp'
import crimson_riptide from '../image/crimson_riptide.jpg'
import molten_swirl from '../image/molten_swirl.jpg'
import shimmering_strands from '../image/shimmering_strands.jpg'
import tidal_gradient from '../image/tidal_gradient.jpg'

import chromatic_cascade_small from '../image/chromatic_cascade.svg'
import chromatic_fusion_small from '../image/chromatic_fusion.svg'
import crimson_riptide_small from '../image/crimson_riptide.svg'
import molten_swirl_small from '../image/molten_swirl.svg'
import shimmering_strands_small from '../image/shimmering_strands.svg'
import tidal_gradient_small from '../image/tidal_gradient.svg'

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
                <div className="w-full h-full scale-[1.5]">
                    <div className="flex flex-col gap-[21.6vh]">
                        <Row rotate={false} image={image} />
                        <Row rotate={true} image={image} />
                        <Row rotate={false} image={image} />
                        <Row rotate={true} image={image} />
                    </div>
                </div>
            }
        </div>
    )
}

function Row({ rotate, image }: any) {
    return (
        <>
            {window.innerWidth > 450 ?
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
                :
                <>
                    {rotate ?
                        <div className="flex gap-[49.8vh]">
                            <Triangles rotate={false} image={image} />
                            <Triangles rotate={true} image={image} />
                        </div>
                        :
                        <div className="flex gap-[49.8vh]">
                            <Triangles rotate={true} image={image} />
                            <Triangles rotate={false} image={image} />
                        </div>
                    }
                </>
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
            {window.innerWidth > 450 ?
                <img src={
                    image === 'chromatic_cascade' ? chromatic_cascade
                        :
                        image === 'chromatic_fusion' ? chromatic_fusion
                            :
                            image === 'crimson_riptide' ? crimson_riptide
                                :
                                image === 'molten_swirl' ? molten_swirl
                                    :
                                    image === 'shimmering_strands' ? shimmering_strands
                                        :
                                        image === 'tidal_gradient' ? tidal_gradient
                                            :
                                            ''
                } alt="" className={`animate-rotate`} />
                :
                <img src={
                    image === 'chromatic_cascade' ? chromatic_cascade_small
                        :
                        image === 'chromatic_fusion' ? chromatic_fusion_small
                            :
                            image === 'crimson_riptide' ? crimson_riptide_small
                                :
                                image === 'molten_swirl' ? molten_swirl_small
                                    :
                                    image === 'shimmering_strands' ? shimmering_strands_small
                                        :
                                        image === 'tidal_gradient' ? tidal_gradient_small
                                            :
                                            ''
                } alt="" className={`animate-rotate`} />
            }
        </>
    )
}


export default Space;
