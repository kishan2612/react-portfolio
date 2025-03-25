import TypewriterText from '../widgets/TypeWriterText';
import { User } from '../../model/User.ts';
import { useUser } from "../../hooks/UserContext.tsx";
import SplitText from '../../widgets/SplitText/SplitText.tsx';
import Aurora from '../../widgets/Aurora/Aurora.tsx';

const PortfolioIntro = () => {

    const user: User = useUser();

    return (

        <div
            style={{ background: user.primaryColor, height: 'calc(100vh - 2rem)' }}>

            {/* Aurora positioned at the bottom */}
            <div className="absolute bottom-0 left-0 w-full h-full rotate-180">
                <Aurora
                    colorStops={["#FF998C", "#E96B3A", "#B55428"]}
                    blend={0.5}
                    amplitude={0.7}
                    speed={0.6}
                />
            </div>

            <div className='justify-center'>
                <h1
                    style={{ lineHeight: '1em' }}>

                    <SplitText
                        text={user.name.toUpperCase()}
                        className="text-black text-center font-alfaSlab font-bold tracking-wider text-8xl lg:text-12xl md:text-9xl"
                        delay={75}
                        animationFrom={{ opacity: 0, transform: 'translate3d(0,40px,0)' }}
                        animationTo={{ opacity: 1, transform: 'translate3d(0,0,0)' }}
                        threshold={0.2}
                    />


                </h1>
            </div>

            {/* Image positioned between text and the bottom */}


            <div className="absolute top-16 md:top-32 left-1/2 w-2/3 md:w-1/3 h-1/2 md:h-3/4
            transform -translate-x-1/2 rounded-2xl overflow-hidden border-12 showdow:lg md:shadow-xl"
                style={{
                    borderColor: user.primaryColor,
                    backgroundColor: user.primaryColor
                }}>
                <img
                    src={user.imageLocation}
                    className="object-cover w-full h-full rounded-xl"
                    alt="" />
            </div>

            {/* Text description at the bottom left */}
            <div className="absolute bottom-4 left-0 pl-4 md:pl-16 pb-24">
                <p className="text-blackfont-normal line-clamp-4">
                    <TypewriterText text={user.slogan1}></TypewriterText>

                </p>
            </div>

            {/* Text description at the bottom right */}
            <div className="absolute bottom-4 right-0 pr-4 md:pr-16" style={{ paddingBottom: "6em" }}>
                <TypewriterText text={user.slogan2}></TypewriterText>
            </div>

        </div>
    )

}

export default PortfolioIntro
