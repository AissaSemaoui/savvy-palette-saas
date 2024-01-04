import { connectToDatabase } from "@/server/utils/db";
import { openai } from "@/services/openai";
import { auth, currentUser } from "@clerk/nextjs";
import { NextResponse } from "next/server";

connectToDatabase();

export async function POST(req: Request, ctx: any) {
  try {
    const request = await req.json();
    const prompt = request.prompt;

    console.log("hello guys : ", prompt);

    const response = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: [
        {
          role: "system",
          content:
            'You are a senior UI UX Designer, The User will share what type of website he\'s building and you\'ll generate a color palette with shades for him based on color theory, user preferences, and professional look. the color palette should be only  a JSON object formatted like this one, no text no description only JSON object : \n   {\n  "background": "#fbfbfb",\n  "foreground": "#1b1b1d",\n  "neutral": {\n    "50": "#fafafa",\n    "100": "#f7f7f7",\n    "200": "#eaeaeb",\n    "300": "#dadadb",\n    "400": "#a8a8aa",\n    "500": "#787879",\n    "600": "#58585a",\n    "700": "#454547",\n    "800": "#2b2b2d",\n    "900": "#1b1b1d"\n  },\n  "blue": {\n    "DEFAULT": "#3b82f6",\n    "50": "#f2f8ff",\n    "100": "#cfe6ff",\n    "200": "#9fcfff",\n    "300": "#6fc7ff",\n    "400": "#4bafff",\n    "500": "#3b82f6",\n    "600": "#2e62d9",\n    "700": "#2249b5",\n    "800": "#153694",\n    "900": "#0d276f"\n  },\n// other colors here ....\n}\n\n// the input should be what the website is about..\nGenerate as many colors as match the desired strategy 3,4,5, just follow a professional strategy.\n',
        },
        {
          role: "user",
          content: prompt,
        },
      ],
      temperature: 1,
      max_tokens: 2000,
      top_p: 1,
      frequency_penalty: 0,
      presence_penalty: 0,
    });

    if (response.choices[0].finish_reason !== "stop") {
      console.log(response.choices[0].message.content);
      throw new Error("Error occured while generating the color palette");
    }

    console.log(response);
    console.log(response.choices[0].message.content);

    return NextResponse.json(
      {
        palette: response.choices[0].message.content,
      },
      {
        status: 200,
      }
    );
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      {
        message: "Ops failed generating the color palette",
      },
      {
        status: 500,
      }
    );
  }
}
