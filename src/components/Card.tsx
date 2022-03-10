/*
Challenge: Build the Card component
For now, hard-code in the data (like 
the rating, title, price, etc.)

Notes:
- Only render 1 instance (I already did this for you)
- The star icon and photo (katie-zaferes.png) are in the images 
  folder for your use
- Make sure to include:
    - image
    - star icon (star.png), rating, and review count
    - title
    - cost/person
- The main purpose of this challenge is to show you where our limitations
  currently are, so don't worry about the fact that you're hard-coding all
  this data into the component.
*/

import StarIcon from "./images/star.png";

export default function Card(props: {
    id: number;
    title: string;
    price: number;
    coverImg: string;
    stats: {
        rating: number;
        reviewCount: number;
    };
    location: string;
    openSpots: number;
}) {
    return (
        <div className="flex-none w-3/5 mr-8 border rounded-lg md:w-1/3 md:pb-4 lg:w-1/5">
            <div className="relative overflow-hidden rounded">
                <img className="w-screen rounded-lg" src={require(`./images/${props.coverImg}`)} alt={props.title} />

                <div className="absolute top-0 items-center mt-2.5 mb-5">
                    <span className="bg-white text-black text-xs font-light mr-2 px-2.5 py-0.5 rounded ml-3">{(props.openSpots === 0) ? `SOLD OUT` : `${props.openSpots} left`}</span>
                </div>
            </div>

            <div className="p-2 pl-2">
                <div className="pt-2">
                    <div className="flex items-center space-x-2 justify-self-start">
                        <img className="h-3" src={StarIcon} alt="star icon" />
                        <p>{props.stats.rating}</p>
                        <p className="text-gray-400">({props.stats.reviewCount}) •</p>
                        <p className="text-gray-400">{props.location}</p>
                    </div>

                    <h5 className="tracking-tight text-black">{props.title}</h5>

                    <div className="flex">
                        <h3 className="text-sm font-bold">From ${props.price}</h3>
                        <p className="text-sm text-gray-500">&nbsp; / per person</p>
                    </div>
                </div>
            </div>
        </div>
    )
}