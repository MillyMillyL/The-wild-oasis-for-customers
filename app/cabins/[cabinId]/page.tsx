import { getCabin } from "@/app/_lib/data-service";
import { EyeSlashIcon, MapPinIcon, UsersIcon } from "@heroicons/react/24/solid";
import Image from "next/image";
import React from "react";

export async function generateMetadata({ params }) {
  const { name } = await getCabin(params.cabinId);

  return { title: `Cabin ${name}` };
}

async function page({ params }) {
  const cabinId = params.cabinId;
  const cabin = await getCabin(cabinId);
  const { name, maxCapacity, image, description } = cabin;

  return (
    <div className=" max-w-6xl mx-auto mt-8">
      <div className=" grid grid-cols-[3fr_4fr] gap-20 border border-primary-800 py-3 px-10 mb-24">
        <div className=" relative scale-[1.15] -translate-x-3">
          <Image
            src={image}
            alt={`Cabin ${name}`}
            fill
            className="object-cover"
          />
        </div>
        <div>
          <h3 className=" text-accent-100 font-black text-7xl mb-5 translate-x-[-254px] bg-primary-950 p-6 pb-1 w-[150%]">
            Cabin {name}
          </h3>
          <p className="text-lg text-primary-300 mb-10">
            {/* TextExpander is now just a regular React component like all others */}
            <p>{description}</p>
          </p>

          <ul className="flex flex-col gap-4 mb-7">
            <li className="flex gap-3 items-center">
              <UsersIcon className="h-5 w-5 text-primary-600" />
              <span className="text-lg">
                For up to <span className="font-bold">{maxCapacity}</span>{" "}
                guests
              </span>
            </li>
            <li className="flex gap-3 items-center">
              <MapPinIcon className="h-5 w-5 text-primary-600" />
              <span className="text-lg">
                Located in the heart of the{" "}
                <span className="font-bold">Dolomites</span> (Italy)
              </span>
            </li>
            <li className="flex gap-3 items-center">
              <EyeSlashIcon className="h-5 w-5 text-primary-600" />
              <span className="text-lg">
                Privacy <span className="font-bold">100%</span> guaranteed
              </span>
            </li>
          </ul>
        </div>
      </div>
      <div className="flex justify-center text-3xl text-primary-50">
        Reserve today. Pay on arrival!
      </div>
    </div>
  );
}

export default page;
