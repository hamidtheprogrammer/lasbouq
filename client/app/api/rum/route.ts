
export async function POST(req: Request) {
  const data = await req.json();

  console.log("RUM EVENT:", data);

  return new Response(null, { status: 200 });
}