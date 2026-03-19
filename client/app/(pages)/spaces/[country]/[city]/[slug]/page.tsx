import MembershipCTA from "@/app/(pages)/home/MembershipCTA";
import Footer from "@/app/(pages)/home/Footer";
import { notFound } from "next/navigation";
import Image from "next/image";
import Nav from "@/app/UI/components/Navbar";
import { getSpaces, images } from "@/app/seed/seed";

export const revalidate = 10;

const spaces = getSpaces();

export function generateStaticParams() {
  return spaces.map((space:any) => ({
    country:space.country,
    city:space.city,
    slug: space.slug
  }))
}

export default async function SpacePage ({params}:{params:any}) {

  const p = await params 
 
  const space = spaces.find((s:any) => s.slug === p.slug)

  if (!space) return notFound()

  return (
    <div>
      <div className="bg-foreground m-3 mb-10 rounded-lg">
        <Nav />
      </div>
      <section className="flex max-md:flex-col px-3 max-md:gap-40 gap-8">
        <div className="relative max-md:h-[100dvh] md:sticky md:self-start md:top-3 rounded-lg md:w-[45%] md:h-[calc(100dvh-1.75rem)] max-md:w-full h-70 overflow-hidden">
          <div className="z-10 absolute max-sm:text-3xl text-5xl text-black bg-background font-italiana w-[90%] aspect-video rounded-lg max-md:left-1/2 max-md:-translate-x-1/2 top-3 md:left-3 p-10 flex items-end">
            {space && space.title}
          </div>
          <Image
            width={400}
            height={400}
            alt="image"
            src={"/about-image-1.png"}
            className="relative z-0 size-full object-cover"
          />
        </div>
        <div className="flex-1 md:pt-50 space-y-10 md:px-10">
          <div className="flex gap-12 justify-between items-center w-full  text-sm">
            Location
            <p className="text-[1rem] self-end">
              {space && space.city}, {space && space.country}
            </p>
          </div>
          <hr className="border-dashed" />
          <div className="mb-16 flex  justify-between items-center w-full gap-12 text-sm">
            Size
            <p className="text-[1rem] self-end">
             {space && space.size} members
            </p>
          </div>

          <div className="space-y-5">
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Consequuntur neque velit enim nisi veniam ut officiis explicabo
              labore saepe unde! Qui voluptates, quisquam quas harum soluta
              temporibus eaque magni consequuntur.
            </p>

            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Recusandae autem exercitationem vel voluptate. Incidunt numquam
              ducimus nostrum mollitia ipsam fugit nemo eius fugiat, sapiente
              quaerat neque ratione amet omnis facere?
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore,
              atque voluptas? Libero aperiam hic ad quis aut distinctio,
              consectetur vel ex, assumenda, fugit maiores. Quia dicta iste ad
              qui dignissimos!
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore,
              atque voluptas? Libero aperiam hic ad quis aut distinctio,
              consectetur vel ex, assumenda, fugit maiores. Quia dicta iste ad
              qui dignissimos!
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore,
              atque voluptas? Libero aperiam hic ad quis aut distinctio,
              consectetur vel ex, assumenda, fugit maiores. Quia dicta iste ad
              qui dignissimos!
            </p>
          </div>
          {space.images.map((idx:number)=>(
            <Image
            width={400}
            height={400}
            alt="image"
            src={images[idx]}
            className="relative z-0 w-full aspect-video object-cover rounded-lg"
          />
          ))}
        </div>
      </section>
      <MembershipCTA />
      <Footer />
    </div>
  );
};

