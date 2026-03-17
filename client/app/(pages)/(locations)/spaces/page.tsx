import Image from "next/image";
import Nav from "@/app/UI/components/Navbar";
import Footer from "../../home/Footer";
import MembershipCTA from "../../home/MembershipCTA";
import Link from "next/link";
import { getSpaces } from "@/app/seed/seed";
import { images } from "@/app/seed/seed";

export const revalidate = 10;

export function random() {
  return Math.abs(Math.ceil(Math.random() * 4));
}

const Locations = () => {
  const spaces = getSpaces();
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
          <section className="flex flex-col">
            <select
              name="location"
              className="sticky top-3 bg-foreground text-background focus:outline-0 rounded-full p-2 text-sm mb-4"
            >
              <option value="">All locations</option>
              <option value="">London</option>
              <option value="">Paris</option>
              <option value="">New york</option>
            </select>
            <ul className="max-xs:space-y-10">
              {spaces.map((space:any) => (
                <li
                  key={space.id}
                  className="border-t border-black/20 xs:h-48 py-3"
                >
                  <Link
                    href={`/spaces/${space.country}/${space.city}/${space.slug}`}
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
          </section>
        </div>
      </section>
      <MembershipCTA />
      <Footer />
    </div>
  );
};

export default Locations;
