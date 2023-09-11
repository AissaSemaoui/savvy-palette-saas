import OpenAI from "openai";

import { OPENAI_API_KEY } from "@/environments";

export const openai = new OpenAI({
  apiKey: OPENAI_API_KEY,
});
