import { PiStarFourFill } from "react-icons/pi";

const  AgencyPageDivider = ({ color }: Readonly<{ color: string }>)=> {
  return (
    <div className="flex justify-center">
      <PiStarFourFill className=" text-4xl md:text-6xl" style={{ fill: color }} />
    </div>
  );
}

export default AgencyPageDivider;
