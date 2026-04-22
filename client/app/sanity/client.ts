import { createClient } from "@sanity/client";
import fs from "fs"
import path from "path"

function getSpaces() {
  const file = fs.readFileSync(
    path.join(process.cwd(), "/app/seed/data.json"),
    "utf8"
  )

  return JSON.parse(file)
}

export const client = createClient({
  projectId: "a8cmf2n8",
  dataset: "production",
  apiVersion: "2024-01-01",
  token:process.env.SANITY_API_TOKEN,
  useCdn: true,
});

async function importData() {
  for (const space of getSpaces()) {
    await client.create({
      _type: "space",
      title: space.title,
      slug: {
        _type: "slug",
        current: space.slug,
      },
      description: space.description,
      capacity: space.size,
      images: space.images,
      city: space.city,
      country: space.country,
    });
  }

  console.log("Done importing 🚀");
}

// importData();
