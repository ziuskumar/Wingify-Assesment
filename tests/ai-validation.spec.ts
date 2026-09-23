import { test, expect } from "@playwright/test";
import { DreamsDiaryPage } from "../pages/DreamsDiaryPage";
import { classifyDream, fallbackClassifyDream } from "../utils/aiClassifier";

test.setTimeout(120000);

test("AI validation: classify all dreams and compare with diary", async ({
  page,
}) => {
  const diaryPage = new DreamsDiaryPage(page);

  await diaryPage.open();

  const dreams = await diaryPage.getTableRowData();

  const disagreements: string[] = [];

  for (const dream of dreams) {
    let aiResult;
    let source = "Gemini";

    try {
      aiResult = await classifyDream(dream.dreamName);
    } catch {
      source = "Fallback";

      console.log(
        `GEMINI FAILED for "${dream.dreamName}". Using fallback classifier.`,
      );

      aiResult = fallbackClassifyDream(dream.dreamName);
    }

    console.log({
      dream: dream.dreamName,
      expected: dream.dreamType,
      aiLabel: aiResult.label,
      confidence: aiResult.confidence,
      isConfident: aiResult.isConfident,
      source,
      reason: aiResult.reason,
    });

    expect(aiResult.confidence).toBeGreaterThanOrEqual(0);
    expect(aiResult.confidence).toBeLessThanOrEqual(1);

    if (!aiResult.isConfident) {
      console.log(
        `BORDERLINE AI RESULT: ${dream.dreamName} | Confidence: ${aiResult.confidence} | Reason: ${aiResult.reason}`,
      );
    }

    if (aiResult.label !== dream.dreamType) {
      disagreements.push(
        `${dream.dreamName} | Expected: ${dream.dreamType} | AI: ${aiResult.label} | Confidence: ${aiResult.confidence} | Reason: ${aiResult.reason}`,
      );
    }
  }

  console.log("\nAI DISAGREEMENTS:");

  for (const disagreement of disagreements) {
    console.log(disagreement);
  }

  expect(
    disagreements,
    "AI classification disagreed with the diary classification",
  ).toEqual([]);
});
