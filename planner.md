
# 🔒🔥 WINGIFY FY QA ASSESSMENT — 48-HOUR BATTLE PLAN

> **MISSION:** Build a professional QA automation project for the Wingify FY QA Assessment and submit it within the 48-hour execution window.

---

## 🧠 PLAN STATUS

| Status                      | Details                                                 |
| --------------------------- | ------------------------------------------------------- |
| 🔒**Plan**            | **LOCKED**                                        |
| ⏱️**Total Window**  | **48 Hours**                                      |
| 🚀**Execution Model** | 7 Sprints + 12-Hour Buffer                              |
| 🎯**Primary Goal**    | Complete all mandatory QA automation requirements       |
| 🤖**Secondary Goal**  | Add AI as a controlled differentiator                   |
| 🏆**Final Goal**      | Professional, reproducible, submission-ready repository |

### 🚨 LOCKED EXECUTION RULE

From this point onward:

> **We do NOT change the 7-sprint structure or their time allocation midway.**

We follow:

**Sprint 1 → Sprint 2 → Sprint 3 → Sprint 4 → Sprint 5 → Sprint 6 → Sprint 7 → SUBMIT**

No random restructuring.
No unnecessary feature expansion.
No sacrificing core automation for bonus features.

---

# ⏱️ 48-HOUR EXECUTION MAP

| Sprint               | Focus                                |          Time | Priority            |
| -------------------- | ------------------------------------ | ------------: | ------------------- |
| 🚀**1**        | Understand + Explore + Design        |  **4h** | 🥇 Mandatory        |
| 🏗️**2**      | Framework + POM                      |  **5h** | 🥇 Mandatory        |
| 🧪**3**        | Core Automation                      |  **8h** | 🥇**Highest** |
| 🚨**4**        | Edge Cases + Business Logic          |  **5h** | 🥈 Differentiator   |
| 🤖**5**        | AI Bonus                             |  **5h** | 🥉 Bonus            |
| 📊**6**        | Reports + README + Git               |  **5h** | 🥈 Differentiator   |
| 🏆**7**        | Final Audit + Submission             |  **4h** | 🥇 Mandatory        |
| 🛡️**BUFFER** | Debugging + Rest + Unexpected Issues | **12h** | 🛡️ Protected      |
|                      | **TOTAL**                      | **48h** | 🔒                  |

---

# 🥇 PRIORITY SYSTEM

When something goes wrong, we use this priority hierarchy.

## 🥇 LEVEL 1 — NON-NEGOTIABLE

The submission **must work**.

Includes:

* Core framework
* Page Object Model
* Home automation
* Diary validation
* Summary validation
* Recurring-dream logic
* Mandatory test cases
* Required reports
* README
* Git repository
* No secrets
* Final submission

> **If Level 1 is not complete, nothing else matters.**

---

## 🥈 LEVEL 2 — DIFFERENTIATOR

Once the mandatory requirements work:

* Edge-case validation
* Business-rule validation
* Better logging
* Screenshots
* HTML reporting
* Clean test architecture
* Strong documentation
* Professional repository structure

---

## 🥉 LEVEL 3 — BONUS

Only after Levels 1 and 2 are stable:

* AI classification
* Confidence handling
* AI disagreement analysis
* AI explanations/evidence
* Fallback classifier
* Additional intelligent validation

> 🤖 **AI must never destabilize the core submission.**

---

# 🚀 SPRINT 1 — UNDERSTAND + EXPLORE + DESIGN

### ⏱️ Time: **4 Hours**

### 🎯 Objective

Understand **exactly what we are building before writing automation code.**

---

## 🔍 Tasks

### 🌐 1. Explore Dream Portal

Understand:

* Homepage
* Main content
* Navigation
* Available links
* Buttons
* Diary
* Summary
* Dream data
* Loading behavior

---

### 🔎 2. Inspect the DOM

Identify:

* Stable selectors
* IDs
* Classes
* Attributes
* Tables
* Buttons
* Links
* Dynamic elements
* Loading elements

> 🎯 Prefer stable selectors over brittle selectors.

---

### 🧭 3. Understand Navigation

Verify:

* Page navigation
* New tabs/windows
* External destinations
* Expected URLs
* Incorrect destinations
* 404 behavior

---

### 📊 4. Understand Diary Table

Determine:

* Number of entries
* Required columns
* Dream names
* Good/Bad classification
* Days Ago
* Dream Type

---

### 📈 5. Understand Summary Statistics

Identify:

* Good dreams
* Bad dreams
* Total dreams
* Recurring dreams

Expected:

```text
Good     = 6
Bad      = 4
Total    = 10
Recurring = 2
```

---

### 🔁 6. Understand Recurring-Dream Logic

Recurring dreams:

* ✈️ Flying over mountains
* 🌀 Lost in maze

These must be cross-referenced against the diary data.

---

### 📋 7. Convert Requirements → Test Cases

Create:

```text
TEST_CASES.md
```

The document should contain:

* Test Case ID
* Feature
* Scenario
* Preconditions
* Steps
* Expected Result
* Priority
* Status

---

## 🚫 Sprint 1 Restriction

We **DO NOT**:

* Build unnecessary framework features
* Over-engineer
* Start AI
* Add bonus functionality
* Code blindly before understanding the application

### ✅ Sprint 1 Exit Condition

> **Application behavior, requirements, test cases, and automation strategy are clearly understood.**

---

# 🏗️ SPRINT 2 — FRAMEWORK + POM

### ⏱️ Time: **5 Hours**

### 🎯 Objective

Build the automation foundation.

---

## 🧱 Framework

Establish:

* Project structure
* Test runner
* Configuration
* Fixtures/setup
* Utilities
* Page Objects
* Test organization
* Logging
* Environment configuration

---

## 🧩 Page Object Model

Separate:

```text
Pages
   ↓
Locators + Page Actions
   ↓
Tests
   ↓
Assertions
```

Tests should focus on **behavior and validation**, not raw DOM manipulation.

---

## 🧠 Type-Safe Models

Create appropriate models/types for:

* Dream entries
* Dream types
* Summary data
* Test data
* Configuration

---

### 📦 Deliverable

A clean, scalable automation framework ready for core test implementation.

### ✅ Sprint 2 Exit Condition

> **Framework runs successfully and Page Object Model is operational.**

---

# 🧪 SPRINT 3 — CORE AUTOMATION

### ⏱️ Time: **8 Hours**

# 🚨 HIGHEST PRIORITY SPRINT

> **This sprint completes the actual assignment.**

Everything here is **mandatory**.

---

# 🏠 HOME

Validate:

* ✅ Loading animation
* ✅ Main content
* ✅ My Dreams
* ✅ New tabs/windows
* ✅ Correct destinations

---

# 📔 DIARY

Validate:

* ✅ Exactly **10 entries**
* ✅ Good/Bad values
* ✅ Dream Name
* ✅ Days Ago
* ✅ Dream Type

---

# 📊 SUMMARY

Validate:

```text
Good      = 6
Bad       = 4
Total     = 10
Recurring = 2
```

---

# 🔁 RECURRING-DREAM LOGIC

Validate:

```text
✈️ Flying over mountains
🌀 Lost in maze
```

The automation must:

1. Identify recurring dreams from the summary/business rule.
2. Cross-reference the diary.
3. Confirm the expected dreams exist.
4. Validate the relationship between summary and diary data.

---

# 🎯 SPRINT 3 EXIT CONDITION

## 🟢 ALL MANDATORY REQUIREMENTS PASS

> **Nothing else matters until this happens.**

No AI.

No unnecessary features.

No polishing.

No scope expansion.

**CORE FIRST. 🔥**

---

# 🚨 SPRINT 4 — EDGE CASES + BUSINESS LOGIC

### ⏱️ Time: **5 Hours**

### 🎯 Objective

Transform the project from basic assignment automation into a stronger QA automation solution.

---

## ❌ Edge Cases

Add validation for:

### 1. Invalid Dream Type

Verify the system handles an invalid dream type correctly.

---

### 2. Empty Cell

Validate behavior when a required diary cell is empty.

---

### 3. Loading Boundary Behavior

Validate behavior around:

* Loading start
* Loading completion
* Boundary timing
* Unexpected delay

Avoid arbitrary sleeps where a proper wait strategy is possible.

---

### 4. New Tab + Incorrect Destination

Validate:

* New tab opens
* Destination is correct
* Incorrect destination is detected
* 404/error destination is detected

---

# 🧠 BUSINESS VALIDATION

Validate relationships between:

```text
Diary Data
     ↓
Business Rules
     ↓
Summary Statistics
```

The automation should not merely verify that elements exist.

It should verify that the **data makes sense according to the application's business rules.**

---

### 📦 Deliverable

A robust suite covering:

* Edge cases
* Invalid data
* Missing data
* Navigation failures
* Loading behavior
* Business logic

---

# 🤖 SPRINT 5 — AI BONUS

### ⏱️ Time: **5 Hours**

# ⚠️ BONUS ONLY

AI starts **only after core automation is stable.**

---

## 🤖 AI FLOW

```text
Dream Data
     ↓
AI Classification
     ↓
Confidence
     ↓
Compare With Application Data
     ↓
Agreement / Disagreement
     ↓
Evidence / Explanation
```

---

## 🧠 AI Capabilities

Add:

### 🤖 Classification

Classify dreams according to the defined dream classification requirements.

---

### 📊 Confidence Handling

Capture:

* Prediction
* Confidence
* Threshold
* Accepted/rejected prediction

---

### ⚠️ Disagreement Logging

When:

```text
Application Result ≠ AI Result
```

log:

* Dream
* Application classification
* AI classification
* Confidence
* Reason/evidence

---

### 🧠 Explanation / Evidence

Provide useful evidence for the AI decision rather than treating the prediction as an unexplained black box.

---

### 🔄 Fallback Classifier

If AI is unavailable:

```text
AI unavailable
      ↓
Fallback classifier
      ↓
Continue validation
```

---

### 🔐 API Key Protection

Secrets must **never** be committed.

Use:

```text
.env
```

and provide:

```text
.env.example
```

---

# 🛡️ AI SAFETY RULE

> **AI is bonus. Core automation is the submission.**

If AI introduces:

* Instability
* API failures
* Flaky tests
* Dependency issues
* Excessive complexity
* Time pressure

then protect the working core submission first.

**CORE > AI. 🔥**

---

# 📊 SPRINT 6 — REPORTS + README + GIT

### ⏱️ Time: **5 Hours**

### 🎯 Objective

Turn the project into a **professional QA automation repository**, not merely a folder containing tests.

---

# 📊 REPORTING

Create:

### HTML Report

Include:

* Test status
* Passed tests
* Failed tests
* Execution details
* Useful metadata

---

### 📸 Screenshots

Capture useful evidence for:

* Successful validations
* Failures
* Edge cases
* AI disagreements where applicable

---

### 📝 Logs

Logs should help answer:

```text
What happened?
Where did it happen?
Why did it fail?
What data was involved?
```

---

### 🎥 Video

Add video evidence where useful.

Do not create unnecessary recordings merely for the sake of having them.

---

### 📎 AI Evidence

If AI is implemented, include useful evidence for:

* Classification
* Confidence
* Disagreement
* Explanation

---

# 📝 README

The README should explain:

* Project overview
* Objective
* Tech stack
* Setup instructions
* Installation
* Environment variables
* Test execution
* Test architecture
* POM structure
* Test coverage
* AI implementation
* Reporting
* Screenshots/evidence
* Known limitations
* Repository structure

---

# 🐙 GIT

Ensure:

* Meaningful commits
* Clean history
* `.gitignore`
* `.env.example`
* No secrets
* No unnecessary files

---

## 📦 DELIVERABLE

A repository that looks like a **professional QA automation project**.

Not:

```text
random-files/
├── test1
├── test2
├── random-script
└── final-final-final/
```

But a structured, understandable, reproducible automation project.

---

# 🏆 SPRINT 7 — FINAL AUDIT + SUBMISSION

### ⏱️ Time: **4 Hours**

# 🚨 FINAL QUALITY GATE

> **NO NEW FEATURES unless absolutely necessary.**

This sprint is about:

**VERIFY → FIX → CLEAN → SUBMIT**

---

# 🧪 FRESH-CLONE TEST

Pretend the evaluator has never seen the project.

Clone the repository into a clean environment and verify everything from scratch.

---

## ✅ CORE TESTS

Verify:

* [ ] Home
* [ ] Loading behavior
* [ ] My Dreams
* [ ] Navigation
* [ ] New tabs/windows
* [ ] Diary
* [ ] Exactly 10 entries
* [ ] Good/Bad values
* [ ] Dream Name
* [ ] Days Ago
* [ ] Dream Type
* [ ] Summary
* [ ] Good = 6
* [ ] Bad = 4
* [ ] Total = 10
* [ ] Recurring = 2
* [ ] Flying over mountains
* [ ] Lost in maze
* [ ] Cross-reference logic

---

## 🚨 EDGE TESTS

Verify:

* [ ] Invalid dream type
* [ ] Empty cell
* [ ] Loading boundary
* [ ] Incorrect destination
* [ ] 404 destination
* [ ] New-tab behavior
* [ ] Business logic

---

## 🤖 AI

If implemented:

* [ ] Classification
* [ ] Confidence
* [ ] Disagreement logging
* [ ] Evidence/explanation
* [ ] Fallback
* [ ] API key protection

---

## 📊 REPORTING

Verify:

* [ ] HTML report
* [ ] Screenshots
* [ ] Logs
* [ ] Video where useful
* [ ] AI disagreement evidence

---

## 📚 DOCUMENTATION

Verify:

* [ ] `README.md`
* [ ] `TEST_CASES.md`
* [ ] Setup instructions
* [ ] Execution instructions
* [ ] Architecture explanation
* [ ] Known limitations

---

## 🐙 GITHUB

Verify:

* [ ] Repository accessible
* [ ] Meaningful commits
* [ ] Clean history
* [ ] `.gitignore`
* [ ] `.env.example`
* [ ] No secrets
* [ ] No broken paths
* [ ] No unnecessary files

---

# 🛡️ THE 12-HOUR BUFFER

The buffer is **intentional and protected.**

It is **not free time.**

It exists to absorb:

| Risk                    | Buffer Protection   |
| ----------------------- | ------------------- |
| 🐛 Unexpected bugs      | Debugging time      |
| 🌐 Website changes      | Re-validation       |
| 📦 Dependency problems  | Environment fixes   |
| 🤖 AI API issues        | Recovery/fallback   |
| 🧪 Flaky tests          | Stabilization       |
| 💻 Environment problems | Setup/rebuild       |
| 😴 Rest                 | Sleep/food breaks   |
| 🔍 Final debugging      | Last-minute fixes   |
| ⏳ Unexpected delays    | Schedule protection |

---

# 🚫 BUFFER RULE

> **We do NOT casually redistribute the buffer.**

The buffer exists precisely because unexpected problems will happen.

Protect it.

---

# 🔥 THE 7-SPRINT EXECUTION CONTRACT

## ❌ WE DO NOT:

* Jump between sprints
* Randomly change the roadmap
* Rebuild the plan every few hours
* Add unnecessary features
* Start AI before core automation
* Sacrifice mandatory tests for bonus features
* Over-engineer the framework
* Waste buffer time unnecessarily

---

# ✅ WE DO:

* Follow the sprint order
* Finish the current sprint objective
* Validate before moving forward
* Protect mandatory functionality
* Use the buffer intelligently
* Keep the repository clean
* Document meaningful decisions
* Test from the evaluator's perspective
* Submit only after the final audit

---

# 🧠 EXECUTION MINDSET

```text
UNDERSTAND
    ↓
DESIGN
    ↓
BUILD
    ↓
AUTOMATE
    ↓
VALIDATE
    ↓
HARDEN
    ↓
ENHANCE
    ↓
DOCUMENT
    ↓
AUDIT
    ↓
SUBMIT
```

---

# 🏁 FINAL MISSION

## 🔒 48 HOURS

### → Professional QA Automation Project

### → Strong Test Architecture

### → Mandatory Requirements Covered

### → Edge Cases Covered

### → Business Logic Validated

### → AI Bonus Where Stable

### → Reports + Documentation

### → Clean GitHub Repository

### → Fresh-Clone Verified

### → 🚀 SUBMITTED

---

# 🔥 FINAL COMMAND

> **CORE FIRST. QUALITY SECOND. AI THIRD. SUBMISSION ALWAYS.**

> **We don't chase features. We chase a working, explainable, professional QA automation solution.**

### 🚀 SPRINT 1

### ↓

### 🏗️ SPRINT 2

### ↓

### 🧪 SPRINT 3

### ↓

### 🚨 SPRINT 4

### ↓

### 🤖 SPRINT 5

### ↓

### 📊 SPRINT 6

### ↓

### 🏆 SPRINT 7

### ↓

### 🚀 SUBMIT

# 🔒🔥 PLAN LOCKED. EXECUTION BEGINS.
