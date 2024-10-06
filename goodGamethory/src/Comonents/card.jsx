import React from "react";
export default function Card({ quote }) {

    return (
        <div className="max-w-lg  flex  lg:max-w-1/2 lg:flex cursor-pointer"  >
            <img src="https://www.ocregister.com/wp-content/uploads/migration/meo/meoo8s-b781035692z.120121207150252000ggr1bhbvj.1.jpg?w=535" alt="Ron Swanson" className="h-48 w-full object-cover object-center lg:h-auto lg:w-36" />
            <div className="border-2 border-gray-400  w-full lg:border-gray-400 bg-gray-700 rounded-b  p-4 flex flex-col justify-between leading-normal">
                <div className="mb-8 w-full">

                    <div className="text-white font-bold text-xl mb-2">{quote}</div>

                </div>
            </div>
        </div>
    )
}