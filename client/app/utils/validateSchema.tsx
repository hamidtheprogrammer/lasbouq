import z from "zod";

export const SpaceSchema = z.object({
  title: z.string(),
  slug: z.object({ _type: z.string(), current: z.string() }),
  description: z.string().optional(),
  capacity: z.number().optional(),
  images: z.array(z.number()).optional(),
  city: z.string().optional(),
  country: z.string().optional(),
});

export function normalizeSpace(data: unknown) {
  const result = SpaceSchema.safeParse(data);

  if (!result.success) {
    return null;
  }

  const space = result.data;

  return {
    title: space.title,
    slug: space.slug,
    description: space.description ?? "No description available",
    capacity: space.capacity ?? 0,
    images: space.images ?? [],
    city: space.city ?? "Unknown city",
    country: space.country ?? "Unknown country",
  };
}
