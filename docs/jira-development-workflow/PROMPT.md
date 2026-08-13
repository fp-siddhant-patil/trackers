# Jira Workflow Setup Prompt

Copy everything inside the block below into Cursor / ChatGPT / Jira AI when you want it to configure, document, or enforce this workflow.

---

```text
You are helping set up and enforce our Jira software delivery workflow.

## Issue types (only these two)
1. Story
2. Bug

## Backlog rule
- Every ticket starts in the Backlog.
- Initial status for both Story and Bug is: To Do.

## Statuses (exact names)
1. To Do
2. Ready for Estimation
3. Ready for Development
4. In Progress
5. Code Review
6. Dev Done
7. Ready to QA
8. QA In Progress
9. QA Passed
10. QA Testing Failed
11. Ready for Deployment
12. Production Monitoring
13. Done

## Role ownership (who is allowed to move the status)
- PM (Project Manager or Product Manager):
  - To Do
  - Ready for Estimation
- Tech Lead:
  - Ready for Development
  - Ready to QA
  - Production Monitoring (only after the build is deployed to Play Store)
- Developer:
  - In Progress
  - Code Review
  - Dev Done
  - Ready for Deployment
  - After QA Testing Failed, Developer moves ticket back to In Progress
- QA Lead / QA members:
  - QA In Progress
  - QA Passed
  - QA Testing Failed
  - Done

## Story flow (full path)
To Do
→ Ready for Estimation (PM)
→ Ready for Development (Tech Lead)
→ In Progress (Developer)
→ Code Review (Developer)
→ Dev Done (Developer)
→ Ready to QA (Tech Lead)
→ QA In Progress (QA)
→ then branch:
   - If pass: QA Passed (QA)
     → Ready for Deployment (Developer)
     → Production Monitoring (Tech Lead, after Play Store deploy)
     → Done (QA)
   - If fail: QA Testing Failed (QA)
     → In Progress (Developer)
     → Code Review → Dev Done → Ready to QA → QA In Progress (repeat until pass)

## Bug flow (short entry, same QA/release path)
To Do
→ In Progress (Developer)   [SKIP Ready for Estimation and Ready for Development]
→ Code Review (Developer)
→ Dev Done (Developer)
→ Ready to QA (Tech Lead)
→ QA In Progress (QA)
→ then same pass/fail branch as Story:
   - Pass: QA Passed → Ready for Deployment → Production Monitoring → Done
   - Fail: QA Testing Failed → In Progress → Code Review → Dev Done → Ready to QA → QA In Progress (loop)

## Hard rules
1. Code Review stays in Code Review even if review feedback fails / changes are requested.
2. Move Code Review → Dev Done only after the PR is merged.
3. Ready to QA is always moved by Tech Lead (for both Story and Bug).
4. QA In Progress is moved only by QA Lead or QA members.
5. Production Monitoring is moved by Tech Lead only after Play Store deployment.
6. Done is moved only by QA.
7. A sprint item is complete only when status is Done (after Production Monitoring).

## What I want you to do
Using the rules above, do the following for our Jira project:
1. Create/confirm the statuses listed.
2. Configure Story workflow transitions exactly as the Story flow.
3. Configure Bug workflow transitions exactly as the Bug flow (no estimation statuses on the happy path).
4. Restrict transitions by role wherever Jira permissions/conditions allow.
5. Give me a short verification checklist to confirm the board columns and transitions match this prompt.
```

---

## Short version (if the tool has a small prompt limit)

```text
Jira workflow:

Types: Story, Bug. Both start in Backlog as To Do.

Story:
To Do (PM) → Ready for Estimation (PM) → Ready for Development (Tech Lead) → In Progress (Dev) → Code Review (Dev, stay until merge) → Dev Done (Dev, after merge) → Ready to QA (Tech Lead) → QA In Progress (QA) → QA Passed (QA) → Ready for Deployment (Dev) → Production Monitoring (Tech Lead after Play Store) → Done (QA).
If QA fails: QA Testing Failed (QA) → In Progress (Dev) → Code Review → Dev Done → Ready to QA → QA In Progress (loop).

Bug:
To Do → In Progress (skip estimation) → then same path from Code Review onward as Story.

Rules: Code Review does not leave until merge. Ready to QA = Tech Lead. Done = QA only. Sprint item complete only at Done.
```
