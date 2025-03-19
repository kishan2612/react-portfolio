import TypewriterText from '../widgets/TypeWriterText';
import {User} from '../../model/User.ts';

const PortfolioIntro = ({user}: { user: User }) => {
    return (
        <div className='relative mt-24'
             style={{background: user.primaryColor, height: 'calc(100vh - 2rem)'}}>

            <div className='justify-center'>
                <h1 className='text-black text-center font-alfaSlab font-bold tracking-wider text-8xl lg:text-12xl md:text-9xl'
                    style={{lineHeight: '1em'}}>
                    {user.name.toUpperCase()}

                </h1>
            </div>

            {/* Image positioned between text and the bottom */}


            <div className="absolute top-16 md:top-32 left-1/2 w-2/3 md:w-1/3 h-1/2 md:h-3/4
            transform -translate-x-1/2 rounded-2xl overflow-hidden border-12"
                 style={{
                     borderColor: user.primaryColor,
                 }}>
                <img
                    src={user.imageLocation}
                    className="object-cover w-full h-full rounded-xl"
                    alt=""/>
            </div>

            {/* Text description at the bottom left */}
            <div className="absolute bottom-4 left-0 pl-4 md:pl-16 pb-24">
                <p className="text-blackfont-normal line-clamp-4">
                    <TypewriterText text={user.slogan1}></TypewriterText>

                </p>
            </div>

            {/* Text description at the bottom right */}
            <div className="absolute bottom-4 right-0 pr-4 md:pr-16" style={{paddingBottom: "6em"}}>
                <TypewriterText text={user.slogan2}></TypewriterText>
            </div>

        </div>
    )

}

export default PortfolioIntro
