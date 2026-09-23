import dotenv from "dotenv";

dotenv.config({ path: ".env" });

export interface AIClassification {
  label: "Good" | "Bad";
  confidence: number;
  reason: string;
  isConfident: boolean;
}

export async function classifyDream(
  dreamName: string,
): Promise<AIClassification> {
  const apiKey = process.env.GEMINI_API_KEY;

  if (!apiKey) {
    throw new Error("GEMINI_API_KEY is not configured");
  }

  const { GoogleGenAI } = await import("@google/genai");

  const ai = new GoogleGenAI({
    apiKey,
  });

  const prompt = `
Classify the following dream name as either "Good" or "Bad".

Dream name: "${dreamName}"

Return ONLY valid JSON in exactly this structure:
{
  "label": "Good" or "Bad",
  "confidence": number between 0 and 1,
  "reason": "short explanation"
}

Do not include markdown or code fences.
`;

  const response = await ai.models.generateContent({
    model: "gemini-2.5-flash",
    contents: prompt,
  });

  const text = response.text?.trim();

  if (!text) {
    throw new Error("Gemini returned an empty response");
  }

  const result = JSON.parse(text) as Omit<
    AIClassification,
    "isConfident"
  >;

  if (result.label !== "Good" && result.label !== "Bad") {
    throw new Error(`Invalid AI classification: ${result.label}`);
  }

  if (result.confidence < 0 || result.confidence > 1) {
    throw new Error(`Invalid confidence: ${result.confidence}`);
  }

  return {
    ...result,
    isConfident: result.confidence >= 0.8,
  };
}

export function fallbackClassifyDream(
  dreamName: string,
): AIClassification {
  const name = dreamName.toLowerCase();

  const badKeywords = [
    "lost",
    "late",
    "exam",
    "monster",
    "chase",
    "maze",
  ];

  const goodKeywords = [
    "flying",
    "winning",
    "lottery",
    "dolphins",
    "adventure",
  ];

  const hasBadKeyword = badKeywords.some((keyword) =>
    name.includes(keyword),
  );

  const hasGoodKeyword = goodKeywords.some((keyword) =>
    name.includes(keyword),
  );

  if (hasBadKeyword && !hasGoodKeyword) {
    return {
      label: "Bad",
      confidence: 0.85,
      isConfident: true,
      reason:
        "Fallback keyword classifier detected a negative dream keyword.",
    };
  }

  if (hasGoodKeyword && !hasBadKeyword) {
    return {
      label: "Good",
      confidence: 0.85,
      isConfident: true,
      reason:
        "Fallback keyword classifier detected a positive dream keyword.",
    };
  }

  return {
    label: "Good",
    confidence: 0.5,
    isConfident: false,
    reason:
      "Fallback classifier could not confidently classify the dream name.",
  };
}