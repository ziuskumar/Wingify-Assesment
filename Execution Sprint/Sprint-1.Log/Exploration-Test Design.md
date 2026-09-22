
# 🔒 Sprint 1 — Exploration & Test Design

**Assessment:** Wingify QA Intern Assessment — Dream Portal
**Website:** https://arjitnigam.github.io/myDreams/
**Duration:** 4 Hours
**Status:** ✅ Complete

---

## 🎯 Objective

Understand the Dream Portal before implementing Playwright automation.

Focus areas:

* Website behavior
* DOM structure
* Dream Diary
* Summary data
* Recurring-dream logic
* Navigation
* Edge cases
* Test-case design

---

## 🌐 1. Application Exploration

### Home Page

Key elements identified:

```text
#loadingAnimation
#mainContent
#dreamButton
```

### Loading Behavior

The application uses an approximately **3-second delay** before:

* Loading animation is hidden
* Main content becomes visible
* My Dreams button becomes available

### Navigation

The My Dreams flow opens Dream Portal pages in new tabs.

Expected destinations:

```text
dreams-diary.html
dreams-total.html
```

**QA decision:** Validate both the new tab **and its destination URL/content**.

---

## 📔 2. Dream Diary

**Table:** `#dreamsDiary`

| Field            |       Result |
| ---------------- | -----------: |
| Total entries    | **10** |
| Good             |  **6** |
| Bad              |  **4** |
| Required columns |  **3** |

### Columns

1. Dream Name
2. Days Ago
3. Dream Type

### Recurring Dreams

| Dream                 | Occurrences |
| --------------------- | ----------: |
| Flying over mountains |           3 |
| Lost in maze          |           2 |

Therefore:

> **Distinct recurring dreams = 2**

---

## 📊 3. Dreams Summary

**Table:** `#dreamsTotal`

| Metric           |     Expected |
| ---------------- | -----------: |
| Good Dreams      |  **6** |
| Bad Dreams       |  **4** |
| Total Dreams     | **10** |
| Dreams This Week |  **7** |
| Recurring Dreams |  **2** |

### Business Validation

Recurring count will **not** be trusted blindly.

Instead:

```text
Dream Diary
     ↓
Calculate recurring dreams independently
     ↓
Expected = 2
     ↓
Compare with Summary
```

This validates the **business logic**, not just the displayed number.

---

## 🔎 4. DOM & Locator Strategy

Stable selectors identified:

```text
#loadingAnimation
#mainContent
#dreamButton
#dreamsDiary
#dreamsTotal
```

### Strategy

Prefer:

1. Stable IDs
2. Stable data attributes
3. Semantic locators
4. Reliable CSS selectors

Avoid brittle selectors where possible.

---

## 🧪 5. Test Coverage

### Home & Navigation

* TC-001 — Loading animation
* TC-002 — Loading completion
* TC-003 — Main content visibility
* TC-004 — My Dreams button
* TC-005 — Dream Diary navigation
* TC-006 — Summary navigation
* TC-007 — Correct destination validation

### Dream Diary

* TC-008 — Exactly 10 entries
* TC-009 — Required fields present
* TC-010 — Valid Days Ago values
* TC-011 — Dream Type validation
* TC-012 — Good/Bad classification

### Summary & Business Logic

* TC-013 — Good = 6
* TC-014 — Bad = 4
* TC-015 — Total = 10
* TC-016 — Dreams This Week = 7
* TC-017 — Recurring = 2
* TC-018 — Diary-to-Summary recurring validation

### Edge Cases

* TC-019 — Invalid dream type
* TC-020 — Empty required cell
* TC-021 — Loading boundary behavior
* TC-022 — Incorrect/404 destination

### AI Bonus

* TC-023 — AI classification
* TC-024 — AI vs Diary comparison
* TC-025 — Confidence & disagreement handling
* TC-026 — AI fallback

---

## 🧠 6. Key QA Decisions

### Synchronization

Avoid using a fixed:

```text
waitForTimeout(3000)
```

as the primary synchronization mechanism.

Use **state-based waits** for UI conditions and measure loading duration separately when required.

### Navigation

Validate:

```text
New Tab
   +
Correct URL
   +
Expected Page
```

### Business Logic

Recurring dreams are independently calculated from the Diary and compared against the Summary.

### Traceability

Every automated test maps to a test-case ID:

```text
TC-001 → test implementation
TC-002 → test implementation
...
```

---

## ✅ Sprint 1 Deliverables

* [X] Website explored
* [X] DOM inspected
* [X] Loading behavior understood
* [X] Navigation investigated
* [X] Diary structure verified
* [X] 10 entries verified
* [X] Good/Bad distribution verified
* [X] Summary values verified
* [X] Recurring logic identified
* [X] Edge cases identified
* [X] Test cases designed

---

## 🚀 Next Sprint

### Sprint 2 — Framework + POM

Build the automation foundation using:

* **Playwright**
* **TypeScript**
* **Playwright Test**
* **Page Object Model**
* `BasePage`
* `HomePage`
* `DreamsDiaryPage`
* `DreamsTotalPage`
* Typed data models

> 🔒 **Sprint 1 complete → Proceed to Sprint 2.**
