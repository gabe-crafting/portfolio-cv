# Learning

Study material kept alongside the CV. Currently: JavaScript essentials as spreadsheets.

## Files

| File | What it is |
| --- | --- |
| `javascript-essentials.xlsx` | Reference workbook. 12 topic sheets, 188 concepts, one row each. |
| `javascript-practice-tracker.xlsx` | Progress tracker with live formulas and a dashboard. |
| `scripts/content.py` | All the text that goes into the reference workbook. |
| `scripts/generate_sheets.py` | Builds both `.xlsx` files. |

## javascript-essentials.xlsx

Starts on a **Start here** sheet with clickable links to every topic. Each topic sheet uses
the same five columns, with a filter on the header row:

`Concept` · `What it does` · `Example` · `Result / Output` · `Notes and gotchas`

Topics: Variables and Scope · Types and Coercion · Operators · Strings · Arrays · Objects ·
Functions · Modern Syntax · Asynchronous JavaScript · DOM and Events · Errors and Debugging ·
Gotchas and Interview Prep.

The Example column is real code you can paste into a browser console. On the Arrays sheet,
filter `Notes and gotchas` for `MUTATES` to see which methods change the original array.

## javascript-practice-tracker.xlsx

22 topics with a suggested exercise for each.

- **Tracker** — the yellow cells are yours to fill in: Difficulty, Status, Confidence 1-5,
  Last reviewed, Notes. Status is a dropdown; Progress is calculated from it.
- **Dashboard** — overall progress, breakdown by status and difficulty, and which topic to
  pick up next. Every number is a formula, nothing is typed in.
- **Lists** — the dropdown values and the status weights (Not started 0%, Learning 35%,
  Practising 70%, Confident 100%). Those weights are a study convention, not a measurement,
  so change them if they do not match how you work.
- **How to use** — legend plus one filled-in example row.

## Regenerating

The spreadsheets are generated, so edit `scripts/content.py` rather than the cells:

```bash
pip install openpyxl
python3 learning/scripts/generate_sheets.py
```

This overwrites both `.xlsx` files, and any progress typed into the tracker goes with them.
Copy the tracker somewhere else first if you have filled it in.
