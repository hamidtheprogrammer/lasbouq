"use client";
import { ReactNode, useState } from "react";
import { useRouter, useParams } from "next/navigation";

const Filter = ({
  children,
  pages,
}: {
  children: ReactNode;
  pages: number;
}) => {
  const [filter, setFilter] = useState<{ page: number; city: string }>({
    page: 1,
    city: "city",
  });

  const params = useParams();
  const city = params.city;
  const page = Number(params.page ?? 1);

  const router = useRouter();

  return (
    <section className="flex flex-col">
      <select
        value={city as string}
        name="location"
        className="sticky top-3 bg-foreground text-background focus:outline-0 rounded-full p-2 text-sm mb-4"
        onChange={(e) => {
          const newFilter = { city: e.target.value, page: 1 };
          setFilter(newFilter);
          router.push(`/spaces/${newFilter.city}/page/${newFilter.page}`, {
            scroll: false,
          });
        }}
      >
        <option value="all">All locations</option>
        <option value="london">London</option>
        <option value="paris">Paris</option>
        <option value="new york">New york</option>
      </select>
      {children}
      <div className="sticky bottom-5 text-white w-full flex justify-center gap-4  bg-foreground rounded-full px-2 text-sm">
        {Array.from({ length: pages }).map((_, idx) => (
          <p
            key={idx}
            onClick={(e) => {
              const newFilter = { ...filter };
              newFilter.page = idx + 1;
              newFilter.city = city as string;
              setFilter(newFilter);
              router.push(`/spaces/${newFilter.city}/page/${newFilter.page}`, {
                scroll: false,
              });
            }}
            className={`${
              idx + 1 === page && "bg-background text-black"
            } cursor-pointer size-8 rounded-2 flex justify-center items-center`}
          >
            {idx + 1}
          </p>
        ))}
      </div>
    </section>
  );
};

export default Filter;
