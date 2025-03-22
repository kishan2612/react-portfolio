import { PiStarFourFill } from "react-icons/pi";

const  Page2Divider = ({ color }: Readonly<{ color: string }>)=> {
  return (
    <div className="flex justify-center py-8 md:py-16">
      <PiStarFourFill className=" text-4xl md:text-6xl" style={{ fill: color }} />
    </div>
  );
}

export default Page2Divider;