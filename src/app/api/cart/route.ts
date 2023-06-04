import { NextRequest, NextResponse } from "next/server";
import { cartTable, db } from "@/lib/drizzle";
import { v4 as uuid } from "uuid"; //random id generator
import { cookies } from "next/headers";



export const GET = async (request: NextRequest) => {
  try {
    const res = await db.select().from(cartTable);
    return NextResponse.json({ res });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ message: "Something Went Wrong" });
  }
};



export const POST = async (request: NextRequest) => {
  const req = await request.json();
  const uid = uuid(); //random generator of id
  const setCookies = cookies();
  
  setCookies.set("user_id",uid); //jesy hi browser pr kreyga add to cart yeh cookies browser pr store hojyeingy.
  
  const user_id =cookies().get("user_id")?.value
//   if (!user_id) {

//   }

  console.log(user_id)
  try {
    const res = await db.insert(cartTable).values({
        product_id: req.product_id,
        quantity: 1,
        user_id: user_id as string,
      }).returning();
    return NextResponse.json({ res });
  } catch (error) {}
};
