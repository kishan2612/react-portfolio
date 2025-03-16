import {PiStarFourFill} from "react-icons/pi";

export function Page2Divider({ color }: Readonly<{ color: string }>) {
    return (
        <div className="flex justify-center py-24">
            <PiStarFourFill className="text-6xl" style={{ fill: color }} />
        </div>
    );
}