import { AppColors } from '../../constants/AppColors'
import TypewriterText from '../widgets/TypeWriterText';
import { User } from '../../model/user';

const PortfolioPage1 = ({ user }: { user: User })  => {
    return (
        <div className='relative mt-24'
            style={{ background: user.primaryColor, height: 'calc(100vh - 2rem)' }}>

            <div className='justify-center'>
                <h1 className='text-black text-center font-alfaSlab font-bold tracking-wider'
                    style={{ fontSize: '18vw', lineHeight: '1em' }}>
                    {user.name.toUpperCase()}

                </h1>
            </div>

            {/* Image positioned between text and the bottom */}



            <div className="absolute top-32 left-1/2 w-1/3 transform -translate-x-1/2 rounded-2xl overflow-hidden"
            style={{borderWidth:"12px",borderColor: user.primaryColor,backgroundColor:AppColors.secondaryBackground}}>
                <img
                    src={user.imageLocation}
                    alt="Image Description"
                    className="object-cover w-full rounded-md"
                    style={{ height: '70.00vh' }}
                />
            </div>

            {/* Text description at the bottom left */}
            <div className="absolute bottom-4 left-0 pl-16" style={{paddingBottom:"6em"}}>
                <p className="text-black text-lg font-normal line-clamp-4">
                    <TypewriterText text={user.slogan1}></TypewriterText>

                </p>
            </div>

             {/* Text description at the bottom right */}
             <div className="absolute bottom-4 right-0 pr-16"  style={{paddingBottom:"6em"}}>
             <TypewriterText text={user.slogan2}></TypewriterText>
             </div>

        </div>
    )
    
}

export default PortfolioPage1
