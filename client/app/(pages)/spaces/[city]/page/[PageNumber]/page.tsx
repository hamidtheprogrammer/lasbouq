import Image from "next/image";
import Nav from "@/app/UI/components/Navbar";
import Footer from "../../../../home/Footer";
import MembershipCTA from "../../../../home/MembershipCTA";
import Link from "next/link";
import { images } from "@/app/seed/seed";
import Filter from "./Filter";
import { client } from "@/app/sanity/client";
import { normalizeSpace } from "@/app/utils/validateSchema";
import { Suspense } from "react";
import Loading from "../../loading";
import { Metadata } from "next";

export const revalidate = 60;

export const dynamicParams = true;

export function random() {
  return Math.abs(Math.ceil(Math.random() * 4));
}

export const metadata: Metadata = {
  title: "Spaces | Lasbouq",
  description: "Our available spaces",
};

export default async function Locations({
  params,
}: {
  params: Promise<{ city: string; page: string }>;
}) {
  async function filter() {
    const chunk = 6;

    const p = await params;

    const city = p.city?.split("_").join(" ").toLowerCase();
    const page = Number(p.page) || 1;

    const validCities = ["london", "new york", "paris"];

    const start = (page - 1) * chunk;
    const end = page * chunk;

    let query = `*[_type == "space"]`;
    let countQuery = `count(*[_type == "space"])`;

    if (city && validCities.includes(city)) {
      query = `*[_type == "space" && lower(city) == $city]`;
      countQuery = `count(*[_type == "space" && lower(city) == $city])`;
    }

    query += `[${start}...${end}]{
    title,
    slug,
    city,
    country,
    capacity,
    images
  }`;

    const [data, total] = await Promise.all([
      client.fetch(query, { city }),
      client.fetch(countQuery, { city }),
    ]);

    const pages = Math.ceil(total / chunk);

    return { data, pages };
  }

  const { data, pages } = await filter();

  const spaces = data.map(normalizeSpace);

  return (
    <Suspense fallback={<Loading />}>
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
                Discover our locations and find spaces built for work, wellness,
                and community.
              </p>
            </section>
            <Filter pages={pages}>
              <ul data-testid="spaces-grid" className="max-xs:space-y-10">
                {spaces.map((space: any, idx: number) => (
                  <>
                    {space !== null ? (
                      <li
                        data-testid="space-card"
                        key={space.id}
                        className="border-t border-black/20 xs:h-48 py-3"
                      >
                        <Link
                          href={`/spaces/${space.city}/${space.slug.current}`}
                          className="size-full flex max-xs:flex-col max-xs:gap-8 gap-4"
                        >
                          <div className="max-xs:h-70 max-xs:w-full aspect-video max-sm:w-1/3  rounded-sm overflow-hidden ">
                            <Image
                              src={images[space.images[random()]]}
                              width={300}
                              height={300}
                              alt="image"
                              loading="eager"
                              className="size-full object-cover"
                            />
                          </div>
                          <div className="flex flex-col justify-between text-foreground">
                            <div>
                              <h1 className="font-semibold text-xl">
                                {space.title}
                              </h1>
                              <p className="text-sm">
                                {space.city + ", " + space.country}
                              </p>
                            </div>
                            <div className="text-sm">{space.size}</div>
                          </div>
                        </Link>
                      </li>
                    ) : (
                      <li
                        key={idx}
                        className="border-t border-black/20 xs:h-48 py-3"
                      >
                        <div className="size-full flex max-xs:flex-col max-xs:gap-8 gap-4">
                          <div className="max-xs:h-70 max-xs:w-full aspect-video max-sm:w-1/3  rounded-sm overflow-hidden ">
                            <Image
                              src={"/icon.png"}
                              width={300}
                              height={300}
                              loading="eager"
                              alt="image"
                              className="size-full object-cover"
                            />
                          </div>
                          <div className="flex flex-col justify-between text-foreground">
                            <div>
                              <h1 className="font-semibold text-xl">
                                {"Failed to fetch"}
                              </h1>
                              <p className="text-sm">Failed to fetch</p>
                            </div>
                            <div className="text-sm">{"Failed to fetch"}</div>
                          </div>
                        </div>
                      </li>
                    )}
                  </>
                ))}
              </ul>
            </Filter>
          </div>
        </section>
        <MembershipCTA />
        <Footer />
      </div>
    </Suspense>
  );
}
