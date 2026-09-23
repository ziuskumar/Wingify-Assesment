
# Test Cases — Dream Portal

This document contains the functional and edge-case test scenarios designed for the Wingify QA Intern Assessment.

The test cases are mapped to the automated Playwright tests so that each requirement can be traced from:

**Requirement → Test Case → Automation → Assertion**

---

## Test Case Summary

| ID     | Area    | Test Case                                          | Priority |
| ------ | ------- | -------------------------------------------------- | -------- |
| TC-001 | Home    | Loading animation appears on page load             | High     |
| TC-002 | Home    | Loading animation disappears after loading         | High     |
| TC-003 | Home    | Main content becomes visible                       | High     |
| TC-004 | Home    | My Dreams button becomes visible                   | High     |
| TC-005 | Home    | My Dreams opens the required pages                 | High     |
| TC-006 | Home    | Dreams Diary page opens                            | High     |
| TC-007 | Home    | Dreams Total page opens                            | High     |
| TC-008 | Diary   | Diary contains exactly 10 dream entries            | High     |
| TC-009 | Diary   | Dream types are valid                              | High     |
| TC-010 | Diary   | All required dream fields are populated            | High     |
| TC-011 | Summary | Good Dreams count is 6                             | High     |
| TC-012 | Summary | Bad Dreams count is 4                              | High     |
| TC-013 | Summary | Total Dreams count is 10                           | High     |
| TC-014 | Summary | Recurring Dreams count is 2                        | High     |
| TC-015 | Diary   | Recurring dreams are independently calculated      | High     |
| TC-016 | Diary   | Flying over mountains is recurring                 | Medium   |
| TC-017 | Diary   | Lost in maze is recurring                          | Medium   |
| TC-018 | Summary | Summary recurring count matches diary calculation  | High     |
| TC-019 | Diary   | Invalid dream type is rejected                     | Medium   |
| TC-020 | Diary   | Empty dream cells are rejected                     | Medium   |
| TC-021 | Home    | Loading timing boundary is validated               | Medium   |
| TC-022 | Home    | Destination pages contain expected content         | High     |
| TC-023 | Diary   | Recurring classification follows the business rule | Medium   |
| TC-024 | AI      | Dream classifications are validated using AI       | Medium   |

---

# Home Page Test Cases

## TC-001 — Loading animation appears

**Priority:** High

**Requirement:** Verify that the loading animation is displayed when the Dream Portal is opened.

**Steps:**

1. Open the Dream Portal home page.
2. Locate the loading animation.
3. Check its visibility.

**Expected Result:**

The loading animation should be visible during the initial loading state.

**Automation:**

`tests/home.spec.ts`

---

## TC-002 — Loading animation disappears

**Priority:** High

**Requirement:** Verify that the loading animation disappears after the expected loading period.

**Steps:**

1. Open the Dream Portal.
2. Wait for the loading transition.
3. Check the loading animation.

**Expected Result:**

The loading animation should no longer be visible after the page finishes loading.

**Automation:**

`tests/home.spec.ts`

---

## TC-003 — Main content becomes visible

**Priority:** High

**Requirement:** Verify that the main Dream Portal content becomes visible after loading.

**Steps:**

1. Open the home page.
2. Wait for the loading transition.
3. Check the main content section.

**Expected Result:**

The main Dream Portal content should be visible.

**Automation:**

`tests/home.spec.ts`

---

## TC-004 — My Dreams button becomes visible

**Priority:** High

**Requirement:** Verify that the My Dreams button is available after loading.

**Steps:**

1. Open the home page.
2. Wait for the page to become ready.
3. Locate the My Dreams button.

**Expected Result:**

The My Dreams button should be visible and available for interaction.

**Automation:**

`tests/home.spec.ts`

---

## TC-005 — My Dreams opens the required pages

**Priority:** High

**Requirement:** Verify that clicking My Dreams opens both required Dream Portal pages.

**Steps:**

1. Open the home page.
2. Click My Dreams.
3. Capture the pages opened by the action.
4. Check the opened URLs.

**Expected Result:**

Two required pages should be opened:

- `dreams-diary.html`
- `dreams-total.html`

**Automation:**

`tests/home.spec.ts`

---

## TC-006 — Dreams Diary page opens

**Priority:** High

**Requirement:** Verify that the Dreams Diary page is opened by My Dreams.

**Steps:**

1. Open the home page.
2. Click My Dreams.
3. Locate the opened Dreams Diary page.
4. Verify its URL.

**Expected Result:**

The Dreams Diary page should open at the expected URL.

**Automation:**

`tests/home.spec.ts`

---

## TC-007 — Dreams Total page opens

**Priority:** High

**Requirement:** Verify that the Dreams Total page is opened by My Dreams.

**Steps:**

1. Open the home page.
2. Click My Dreams.
3. Locate the opened Dreams Total page.
4. Verify its URL.

**Expected Result:**

The Dreams Total page should open at the expected URL.

**Automation:**

`tests/home.spec.ts`

---

# Dreams Diary Test Cases

## TC-008 — Diary contains exactly 10 dream entries

**Priority:** High

**Requirement:** Verify that the Dreams Diary contains exactly 10 entries.

**Steps:**

1. Open the Dreams Diary.
2. Locate the table rows.
3. Count the dream entries.

**Expected Result:**

The diary should contain exactly 10 dream entries.

**Automation:**

`tests/dreams-diary.spec.ts`

---

## TC-009 — Dream types are valid

**Priority:** High

**Requirement:** Verify that every dream has either `Good` or `Bad` as its dream type.

**Steps:**

1. Open the Dreams Diary.
2. Read the Dream Type column for every row.
3. Compare each value with the allowed values.

**Expected Result:**

Every dream type should be either:

- `Good`
- `Bad`

No other value should be accepted.

**Automation:**

`tests/dreams-diary.spec.ts`

---

## TC-010 — All required dream fields are populated

**Priority:** High

**Requirement:** Verify that every dream contains Dream Name, Days Ago and Dream Type.

**Steps:**

1. Open the Dreams Diary.
2. Read every row.
3. Check all three cells.

**Expected Result:**

Every required cell should contain a value.

**Automation:**

`tests/dreams-diary.spec.ts`

---

# Dreams Summary Test Cases

## TC-011 — Good Dreams count is 6

**Priority:** High

**Requirement:** Verify the summary shows 6 Good Dreams.

**Expected Result:**

`Good Dreams = 6`

**Automation:**

`tests/dreams-total.spec.ts`

---

## TC-012 — Bad Dreams count is 4

**Priority:** High

**Requirement:** Verify the summary shows 4 Bad Dreams.

**Expected Result:**

`Bad Dreams = 4`

**Automation:**

`tests/dreams-total.spec.ts`

---

## TC-013 — Total Dreams count is 10

**Priority:** High

**Requirement:** Verify the summary shows a total of 10 dreams.

**Expected Result:**

`Total Dreams = 10`

**Automation:**

`tests/dreams-total.spec.ts`

---

## TC-014 — Recurring Dreams count is 2

**Priority:** High

**Requirement:** Verify the summary reports 2 recurring dreams.

**Expected Result:**

`Recurring Dreams = 2`

**Automation:**

`tests/dreams-total.spec.ts`

---

# Recurring Dream Business Logic

## TC-015 — Recurring dreams are independently calculated

**Priority:** High

**Requirement:** Verify recurring dreams independently using the diary data instead of trusting only the summary value.

**Steps:**

1. Read all diary entries.
2. Count occurrences of each dream name.
3. Identify names appearing more than once.
4. Count the recurring dream names.

**Expected Result:**

Exactly 2 distinct dream names should be identified as recurring.

**Automation:**

`tests/dreams-diary.spec.ts`

---

## TC-016 — Flying over mountains is recurring

**Priority:** Medium

**Requirement:** Verify that `Flying over mountains` appears more than once.

**Expected Result:**

`Flying over mountains` should be identified as a recurring dream.

**Automation:**

`tests/dreams-diary.spec.ts`

---

## TC-017 — Lost in maze is recurring

**Priority:** Medium

**Requirement:** Verify that `Lost in maze` appears more than once.

**Expected Result:**

`Lost in maze` should be identified as a recurring dream.

**Automation:**

`tests/dreams-diary.spec.ts`

---

## TC-018 — Summary recurring count matches diary calculation

**Priority:** High

**Requirement:** Verify that the recurring count displayed in the summary agrees with an independent calculation from the diary.

**Steps:**

1. Read the diary entries.
2. Calculate the number of recurring dream names.
3. Open the summary page.
4. Read the Recurring Dreams value.
5. Compare both values.

**Expected Result:**

The summary recurring count should match the independently calculated count.

**Automation:**

`tests/dreams-total.spec.ts`

---

# Edge Case Test Cases

## TC-019 — Invalid dream type is rejected

**Priority:** Medium

**Requirement:** Verify that values outside the supported dream types are rejected by the validation rule.

**Test Value:**

`Neutral`

**Expected Result:**

`Neutral` should not be accepted because the supported values are only `Good` and `Bad`.

**Automation:**

`tests/dreams-diary.spec.ts`

---

## TC-020 — Empty dream cells are rejected

**Priority:** Medium

**Requirement:** Verify that individual required cells cannot be empty.

**Steps:**

1. Read each diary row.
2. Check Dream Name.
3. Check Days Ago.
4. Check Dream Type.
5. Validate each cell separately.

**Expected Result:**

Every required cell should contain a non-empty value.

**Automation:**

`tests/dreams-diary.spec.ts`

---

## TC-021 — Loading timing boundary

**Priority:** Medium

**Requirement:** Verify the loading state is still present before the expected transition.

**Steps:**

1. Open the home page.
2. Wait approximately 2.5 seconds.
3. Check the loading animation.

**Expected Result:**

The loading animation should still be visible before the expected three-second transition.

**Automation:**

`tests/home.spec.ts`

---

## TC-022 — Destination pages contain expected content

**Priority:** High

**Requirement:** Verify that the pages opened by My Dreams are not only opened at the correct URL but also contain the expected page content.

**Steps:**

1. Open the home page.
2. Click My Dreams.
3. Locate the Dreams Diary page.
4. Locate the Dreams Total page.
5. Check the expected table on each page.

**Expected Result:**

- Dreams Diary page contains the `dreamsDiary` table.
- Dreams Total page contains the `dreamsTotal` table.

**Automation:**

`tests/home.spec.ts`

---

## TC-023 — Recurring classification follows the business rule

**Priority:** Medium

**Requirement:** Verify that recurring classification follows the rule that a dream name appearing more than once is recurring.

**Steps:**

1. Read all dream entries.
2. Count each dream name.
3. Apply the recurring rule.
4. Validate the resulting counts.

**Expected Result:**

- A dream appearing more than once should be classified as recurring.
- A dream appearing once should not be classified as recurring.

**Automation:**

`tests/dreams-diary.spec.ts`

---

# AI Bonus Test Case

## TC-024 — AI classification validation

**Priority:** Medium

**Requirement:** Use AI to classify dream names as `Good` or `Bad` and compare the result with the classification in the Dreams Diary.

**Steps:**

1. Read the dream names from the diary.
2. Send each dream name to the Gemini classifier.
3. Receive the predicted label and confidence.
4. Compare the AI label with the diary classification.
5. Record the confidence and reason.
6. Use the fallback classifier if the AI service is unavailable.

**Expected Result:**

- AI returns either `Good` or `Bad`.
- Confidence is between `0` and `1`.
- Results with confidence of `0.8` or higher are considered confident.
- AI classifications are compared against the diary values.
- If Gemini is unavailable, the fallback classifier is used.

**Automation:**

`tests/ai-validation.spec.ts`

---

# Test Data Observed

The current Dreams Diary contains the following entries:

| #  | Dream Name             | Days Ago    | Dream Type |
| -- | ---------------------- | ----------- | ---------- |
| 1  | Flying over mountains  | 1 day ago   | Good       |
| 2  | Lost in maze           | 2 days ago  | Bad        |
| 3  | Flying over mountains  | 3 days ago  | Good       |
| 4  | Winning lottery        | 4 days ago  | Good       |
| 5  | Being late to exam     | 5 days ago  | Bad        |
| 6  | Lost in maze           | 6 days ago  | Bad        |
| 7  | Swimming with dolphins | 7 days ago  | Good       |
| 8  | Flying over mountains  | 8 days ago  | Good       |
| 9  | Time travel adventure  | 9 days ago  | Good       |
| 10 | Monster chase          | 10 days ago | Bad        |

## Expected Summary

| Metric           | Expected Value |
| ---------------- | -------------: |
| Good Dreams      |              6 |
| Bad Dreams       |              4 |
| Total Dreams     |             10 |
| Recurring Dreams |              2 |

The recurring dreams identified from the diary are:

- `Flying over mountains`
- `Lost in maze`

---

# Traceability

The test IDs in this document correspond to the test names used in the Playwright test files.

This provides a simple traceability path:

**Requirement → Test Case ID → Playwright Test → Assertion → Test Report**

The test cases include both positive functional scenarios and selected edge cases to make failures easier to diagnose.

git status
