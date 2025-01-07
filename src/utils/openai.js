// import OpenAI from "openai";

import { GoogleGenerativeAI } from "@google/generative-ai";

// const openai = new OpenAI({
//   apiKey: import.meta.env.VITE_APP_OPENAI_API,
//   dangerouslyAllowBrowser: true,
// });

const API_KEY = import.meta.env.VITE_APP_GEMINI_API;
const genAI = new GoogleGenerativeAI(API_KEY);

export default genAI;

