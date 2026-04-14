import MembershipCTA from "@/app/(pages)/home/MembershipCTA";
import Footer from "@/app/(pages)/home/Footer";
import Image from "next/image";
import Nav from "@/app/UI/components/Navbar";
import { images } from "@/app/seed/seed";
import { client } from "@/app/sanity/client";
import { normalizeSpace } from "@/app/utils/validateSchema";
import SpaceFetchFail from "@/app/UI/components/SpaceFetchFail";
import { SpaceSchema } from "@/app/utils/validateSchema";
import z from "zod";
import { Metadata } from "next";

export const revalidate = 10;

export async function generateStaticParams() {
  const spaces = await client.fetch(`*[_type == "space"]{title,
    slug,
    city,
    country,
    capacity,
    images}`);
  return spaces.map((space: any) => ({
    country: space.country,
    city: space.city,
    slug: space.slug.current,
  }));
}

export default async function SpacePage({ params }: { params: any }) {
  const p = await params;

  const query = `*[_type == "space" && lower(slug.current) == $slug][0]{title,
    slug,
    city,
    country,
    capacity,
    images}`;

  const space = normalizeSpace(await client.fetch(query, { slug: p.slug }));

  if (!space)
    return (
      <>
        <div className="bg-foreground m-3 mb-10 rounded-lg">
          <Nav />
        </div>
        <SpaceFetchFail /> <Footer />
      </>
    );

  // (SEO)  structured data markup for crumblist
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Spaces",
        item: "https://atlas.com/spaces",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: space.city,
        item: `https://atlas.com/spaces/${space.city}`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: space.title,
        item: `https://atlas.com/spaces/${space.city}/${space.slug}`,
      },
    ],
  };

  // (SEO)  structured data markup for the workspace
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: space.title,
    description:
      "Premium flexible workspaces for startups, remote teams, and creative professionals.",
    image: space.images[0],
    address: {
      "@type": "PostalAddress",
      addressLocality: space.city,
      addressCountry: space.country,
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(localBusinessSchema),
        }}
      />
      <div>
        <div className="bg-foreground m-3 mb-10 rounded-lg relative z-20">
          <Nav />
        </div>
        <section className="relative flex max-md:flex-col px-3 max-md:gap-40 gap-8">
          <div className="relative max-md:h-[100dvh] md:sticky md:self-start md:top-3 rounded-lg md:w-[45%] md:h-[calc(100dvh-1.75rem)] max-md:w-full h-70 overflow-hidden">
            <div className="z-10 absolute max-sm:text-3xl text-5xl text-black bg-background font-italiana w-[90%] aspect-video rounded-lg max-md:left-1/2 max-md:-translate-x-1/2 top-3 md:left-3 p-10 flex items-end">
              {space && space.title}
            </div>
            <Image
              width={400}
              height={400}
              alt="image"
              loading="eager"
              fetchPriority="high"
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
                {space && space.capacity} members
              </p>
            </div>

            <div className="space-y-5">
              <p>
                {space.title} in {space.city ?? space.country} is designed to
                support a balanced and productive experience, offering a refined
                environment where focus, flexibility, and comfort come together.
              </p>
              <p>
                With capacity for up to {space.capacity} people, the space
                accommodates both individual work and collaborative sessions,
                creating a setting that adapts naturally to different working
                styles throughout the day. Carefully considered layouts, calm
                interiors, and shared areas make it easy to move between deep
                concentration and light interaction, while maintaining a steady
                and uninterrupted flow.
              </p>
              <p>
                Whether you are working independently or alongside a team, the
                space provides the right conditions to stay engaged and
                productive. Beyond functionality, {space.title} encourages a
                more sustainable rhythm of work, where moments of pause and
                reset are just as accessible as moments of focus. The
                environment is shaped to support not only output, but also
                clarity, energy, and consistency over time.
              </p>
              <p>
                Positioned within {space.city ?? space.country}, the space
                connects you to a wider network of professionals and
                opportunities, making it more than just a place to work, but a
                place to grow, connect, and create meaningful progress. Every
                detail within {space.title} reflects a commitment to quality and
                intentional design, ensuring that whether for a few hours or a
                full day, the experience remains consistent, reliable, and
                aligned with the way modern work is meant to feel.
              </p>
            </div>
            {space.images.map((idx: number) => (
              <Image
                key={idx}
                width={400}
                height={400}
                alt="image"
                loading="lazy"
                src={images[idx]}
                className="relative z-0 w-full aspect-video object-cover rounded-lg"
              />
            ))}
          </div>
        </section>
        <MembershipCTA />
        <Footer />
      </div>
    </>
  );
}

export async function generateMetadata({
  params,
}: {
  params: any;
}): Promise<Metadata> {
  const p = await params;

  const query = `*[_type == "space" && lower(slug.current) == $slug][0]{slug,
    title,
    city}`;

  const space = normalizeSpace(await client.fetch(query, { slug: p.slug }));

  if (!space) {
    return { title: "Workspace | Lasbouq" };
  }

  return {
    title: `${space.title} | Lasbouq`,
    description: `High-end flexible workspace in ${space.city}`,
  };
}
