# Sprint 1 — Understand + Explore + Design

**Assessment:** Wingify QA Intern Assessment — Dream Portal  
**Website:** https://arjitnigam.github.io/myDreams/  
**Sprint Duration:** 4 hours  
**Status:** Exploration and test-design phase

---

## 1. Sprint Objective

Understand the Dream Portal application before writing Playwright automation.

The goal was to inspect:

- Home page
- Loading animation
- Main content
- My Dreams button
- New-tab behavior
- Dream Diary table
- Dreams Summary table
- Dream classification values
- Recurring-dream business logic
- Potential edge cases

---

## 2. Home Page Investigation

### Page

`https://arjitnigam.github.io/myDreams/`

### Important DOM elements found

```html
<div class="loading-animation hidden" id="loadingAnimation">
<div class="main-content show" id="mainContent">
<button id="dreamButton" class="show">My Dreams</button>
```

### Stable selectors

- `#loadingAnimation`
- `#mainContent`
- `#dreamButton`

### Loading behavior discovered

The page JavaScript uses a `setTimeout` of approximately **3000 ms** before:

1. Hiding the loading animation
2. Showing the main content
3. Showing the My Dreams button

### Navigation behavior discovered

The Home page JavaScript contains two `window.open()` calls:

```javascript
window.open('dreams-diary.html', '_blank');
window.open('dreams-total.html', '_blank');
```

### Browser observation

Clicking **My Dreams** initially produced the Dream Diary tab.

Directly executing:

```javascript
window.open('dreams-total.html', '_blank')
```

successfully opened the Dreams Summary page.

### QA note

The automation should verify the actual destinations, not merely assert that a new tab/window exists.

Browser popup behavior should be investigated during core automation.

---

## 3. Dream Diary Investigation

### Page

`https://arjitnigam.github.io/myDreams/dreams-diary.html`

### Table

```html
<table id="dreamsDiary">
```

Columns:

1. Dream Name
2. Days Ago
3. Dream Type

### Row count

Live DOM verification returned:

```text
10
```

### Non-empty row count

Live DOM verification returned:

```text
10
```

### Complete live data

| # | Dream Name | Days Ago | Dream Type |
|---:|---|---|---|
| 1 | Flying over mountains | 1 day ago | Good |
| 2 | Lost in maze | 2 days ago | Bad |
| 3 | Flying over mountains | 3 days ago | Good |
| 4 | Winning lottery | 4 days ago | Good |
| 5 | Being late to exam | 5 days ago | Bad |
| 6 | Lost in maze | 6 days ago | Bad |
| 7 | Swimming with dolphins | 7 days ago | Good |
| 8 | Flying over mountains | 8 days ago | Good |
| 9 | Time travel adventure | 9 days ago | Good |
| 10 | Monster chase | 10 days ago | Bad |

### Independent counts

- Good = **6**
- Bad = **4**
- Total = **10**

### Recurring dreams

Independent calculation from the Diary:

- `Flying over mountains` → 3 occurrences
- `Lost in maze` → 2 occurrences

Therefore:

**Distinct recurring dream names = 2**

This independent calculation will later be compared with the Summary page.

---

## 4. Dreams Summary Investigation

### Page

`https://arjitnigam.github.io/myDreams/dreams-total.html`

### Table

```html
<table id="dreamsTotal">
```

Columns:

1. Dream Type
2. Total Count

### Live DOM data

```text
Good Dreams       → 6
Bad Dreams        → 4
Total Dreams      → 10
Dreams This Week  → 7
Recurring Dreams  → 2
```

### Important DOM discovery

The table contains an HTML comment documenting the recurring dreams:

```html
<!-- "Flying over mountains" appears 3 times, "Lost in maze" appears 2 times -->
```

### Static-page observation

Searching inline scripts for `Recurring` returned:

```text
[]
```

This suggests there is no inline JavaScript on this page containing the recurring-dream calculation. The displayed summary appears to be static table content.

### QA decision

Do not rely only on:

```text
Recurring Dreams = 2
```

Instead validate:

```text
Dream Diary
    ↓
independent recurring-dream calculation
    ↓
expected recurring count = 2
    ↓
compare with Dreams Summary
```

---

## 5. Test Case Design

### Home

- TC-001 — Loading animation appears
- TC-002 — Loading animation disappears after approximately 3 seconds
- TC-003 — Main content becomes visible
- TC-004 — My Dreams button becomes visible
- TC-005 — My Dreams opens Dream Diary
- TC-006 — My Dreams opens Dreams Summary
- TC-007 — Opened pages have correct destinations

### Dream Diary

- TC-008 — Exactly 10 dream entries exist
- TC-009 — Every row has a Dream Name
- TC-010 — Every row has Days Ago
- TC-011 — Every row has Dream Type
- TC-012 — Dream Type is only Good or Bad

### Dreams Summary

- TC-013 — Good Dreams = 6
- TC-014 — Bad Dreams = 4
- TC-015 — Total Dreams = 10
- TC-016 — Dreams This Week = 7
- TC-017 — Recurring Dreams = 2
- TC-018 — Recurring Dreams independently calculated from Diary and compared with Summary

### Edge / Negative Tests

- TC-019 — Invalid dream type is detected
- TC-020 — Empty required cell is detected
- TC-021 — Loading timing boundary is handled without brittle exact timing
- TC-022 — Wrong or 404 destination is detected

### AI Bonus

- TC-023 — AI classifies dream names
- TC-024 — AI classification is compared with Diary classification
- TC-025 — Confidence threshold and disagreement handling
- TC-026 — AI failure fallback

---

## 6. Key QA Decisions

### Stable selectors

Prefer:

```text
#loadingAnimation
#mainContent
#dreamButton
#dreamsDiary
#dreamsTotal
```

Avoid relying on fragile CSS classes when an ID is available.

### Synchronization

Do not use a blind:

```javascript
waitForTimeout(3000)
```

as the primary synchronization strategy.

Use state-based waits for the actual UI condition, and separately measure loading duration when required.

### Business validation

Recurring dreams must be independently calculated from the Diary.

### Navigation validation

Do not only check:

```text
a new tab opened
```

Check:

```text
new tab opened
        +
correct URL
        +
correct page/content
```

### Test traceability

Every automated test should map back to a test-case ID.

Example:

```typescript
// TC-001: Loading animation appears
```

---

## 7. Sprint 1 Deliverables

By the end of Sprint 1:

- [x] Website explored
- [x] Home DOM inspected
- [x] Loading behavior understood
- [x] Navigation behavior investigated
- [x] Diary DOM inspected
- [x] 10 rows verified
- [x] Good/Bad distribution verified
- [x] Summary DOM inspected
- [x] Summary values verified
- [x] Recurring logic identified
- [x] Independent recurring calculation established
- [x] Edge cases identified
- [x] Initial test-case map created

### Next Sprint

**Sprint 2 — Framework + POM**

Only after Sprint 1 is complete:

- Playwright
- TypeScript
- Playwright Test
- Page Object Model
- BasePage
- HomePage
- DreamsDiaryPage
- DreamsTotalPage
- typed data models
