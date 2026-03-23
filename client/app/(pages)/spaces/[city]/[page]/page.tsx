import Image from "next/image";
import Nav from "@/app/UI/components/Navbar";
import Footer from "../../../home/Footer";
import MembershipCTA from "../../../home/MembershipCTA";
import Link from "next/link";
import { getSpaces } from "@/app/seed/seed";
import { images } from "@/app/seed/seed";
import Filter from "../../Filter";

export const revalidate = 10;

export function random() {
  return Math.abs(Math.ceil(Math.random() * 4));
}

export default async function Locations({ params }: { params: any }) {
  const spaces = getSpaces();

  const p = await params

  const city = p.city;
  const page = p.page;

  const validCities = ["london", "new york", "paris"]


    const chunk = 6;
  

  function filter() {
    let newSpaces = [...spaces]
    let pages=Math.ceil(spaces.length/chunk);
    if (validCities.includes(city.toLowerCase())) {
      newSpaces= spaces.filter((space: any) => space.city.toLowerCase() === city);
      pages = Math.ceil(newSpaces.length/chunk)
      
    }

    if(Number(page)){
      return {spaces:newSpaces.slice((page-1)*chunk,(page * chunk)), pages}
    }

    return {spaces, pages};
  }

  return (
    <div>
      <div className="bg-foreground m-3 mb-10 rounded-lg">
        <Nav />
      </div>
      <section className="w-full flex gap-5 p-3 max-md:flex-col">
        <Image
          width={400}
          height={400}
          loading="eager"
          fetchPriority="high"
          alt="image"
          src={"/about-image-1.png"}
          className="md:sticky md:self-start md:top-3 rounded-lg object-cover md:w-1/3 md:h-[calc(100dvh-1.75rem)] max-md:w-full h-70"
        />
        <div className="flex-1">
          <section className="uppercase text-center flex flex-col items-center justify-center w-full max-sm:space-y-3 space-y-6 aspect-[16/7] max-md:aspect-[12/6] min-h-[20rem]">
            <p className="text-xs tracking-[0.5rem]">lasbouq</p>
            <div className="">
              <h1 className="max-sm:text-4xl max-md:text-5xl text-7xl">
                Our member
              </h1>
              <h2 className="max-sm:text-5xl max-md:text-6xl text-8xl font-italiana">
                Locations
              </h2>
            </div>
            <p className="max-sm:text-sm max-w-[25rem]">
              We craft a unique blend of style and functionality, made for
              working.
            </p>
          </section>
          <Filter  pages={filter().pages}>
            <ul className="max-xs:space-y-10">
              {filter().spaces.map((space: any) => (
                <li
                  key={space.id}
                  className="border-t border-black/20 xs:h-48 py-3"
                >
                  <Link
                    href={`/spaces/${space.city}/pagenumber/${space.slug}`}
                    className="size-full flex max-xs:flex-col max-xs:gap-8 gap-4"
                  >
                    <div className="max-xs:h-70 max-xs:w-full aspect-video max-sm:w-1/3  rounded-sm overflow-hidden ">
                      <Image
                        src={images[space.images[random()]]}
                        width={300}
                        height={300}
                        alt="image"
                        className="size-full object-cover"
                      />
                    </div>
                    <div className="flex flex-col justify-between text-foreground">
                      <div>
                        <h1 className="font-semibold text-xl">{space.title}</h1>
                        <p className="text-sm">
                          {space.city + ", " + space.country}, England
                        </p>
                      </div>
                      <div className="text-sm">{space.size}</div>
                    </div>
                  </Link>
                </li>
              ))}
            </ul>
          </Filter>
        </div>
      </section>
      <MembershipCTA />
      <Footer />
    </div>
  );
}
