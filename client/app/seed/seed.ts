import fs from "fs";
import path from "path";

export const images = [
  "/space-1.png",
  "/space-2.png",
  "/space-3.png",
  "/space-4.png",
  "/space-5.png",
  "/space-6.png",
  "/space-7.png",
  "/space-8.png",
  "/hero.png",
  "/about-image-3.png",
];

const desc = "lorem ipsum";


export function getSpaces() {
  const file = fs.readFileSync(
    path.join(process.cwd(), "/app/seed/data.json"),
    "utf8"
  )

  return JSON.parse(file)
}

