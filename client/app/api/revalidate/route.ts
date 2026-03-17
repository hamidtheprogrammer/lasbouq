import { revalidatePath } from "next/cache";
import { NextResponse } from "next/server";
import fs from "fs"
import path from "path"


export async function POST() {
 const filePath = path.join(process.cwd(), "/app/seed/data.json")

  const data = JSON.parse(fs.readFileSync(filePath, "utf8"))

  data[0].title = data[0].title + "updated"

  fs.writeFileSync(filePath, JSON.stringify(data))
  revalidatePath("/spaces");

  return NextResponse.json({ message: "Catalogue revalidated" });
}
