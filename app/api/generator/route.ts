import { connectToDatabase } from "@/server/utils/db";
import { auth, currentUser } from "@clerk/nextjs";

connectToDatabase();

export async function GET(request: Request, ctx: any) {
  const testAuth = auth();
  const testUser = await currentUser();

  // console.log("Auth : ", testAuth);
  // console.log("Current User : ", testUser);

  return Response.json({
    message: "we are just answering the question",
  });
}

export function POST(request: Request) {
  return Response.json({
    message: "congratulation we got it",
  });
}
