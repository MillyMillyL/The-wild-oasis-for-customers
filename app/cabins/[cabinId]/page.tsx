import Cabin from "@/app/_components/Cabin";
import Reservation from "@/app/_components/Reservation";
import Spinner from "@/app/_components/Spinner";
import { getCabin, getCabins } from "@/app/_lib/data-service";
import { Suspense } from "react";

// export const revalidate = 60;

export async function generateMetadata({
  params,
}: {
  params: { cabinId: string };
}) {
  const { name } = await getCabin(params.cabinId);

  return { title: `Cabin ${name}` };
}

export async function generateStaticParams() {
  const cabins = await getCabins();
  const cabinIds = cabins.map((cabin) => ({
    cabinId: String(cabin.id),
  }));

  return cabinIds;
}

async function page({ params }: { params: { cabinId: string } }) {
  const cabinId = params.cabinId;
  const cabin = await getCabin(cabinId);

  return (
    <div className=" max-w-6xl mx-auto mt-8">
      <Cabin cabin={cabin} />
      <div className="">
        <h2 className=" text-5xl font-semibold text-center mb-10 text-accent-400">
          Reserve {cabin.name} today. Pay on arrival!
        </h2>
        <Suspense fallback={<Spinner />}>
          <Reservation cabin={cabin} />
        </Suspense>
      </div>
    </div>
  );
}

export default page;
