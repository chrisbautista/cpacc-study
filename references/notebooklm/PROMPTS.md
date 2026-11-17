# NotebookLM Prompt Library

Copy-paste these into the matching notebook. Prime the notebook first (see `SETUP.md`).

---

## A. Flashcard generation

### A1. Core deck per domain
> Use in: the matching domain notebook. Run once per domain, in the week you read that domain.

```
Generate 35 flashcards covering this domain, weighted toward what the CPACC exam actually tests.

Rules:
- Front: a question or a prompt. Never a bare term with "define this."
- Back: the answer in one to three lines. No padding.
- Include every number, date, percentage, and proper name from the sources for this domain — those
  are the cheapest points on the exam and the easiest to lose.
- For any concept with a sibling that's easy to confuse, write the card as a discrimination:
  "X vs Y — what's the difference?" rather than two separate definition cards.
- Do not create cards for material that isn't in the sources.

Output as a plain two-column list I can review directly.
```

### A2. Numbers-only deck
> Use in: any domain notebook, or the Full Mock notebook. This is the deck you drill in the last week.

```
Extract every statistic, percentage, count, date, and year from the sources and turn each into a
flashcard. Include nothing else — no concepts, no definitions.

Group them under headings: Global prevalence / Vision / Hearing / Speech and language / Mobility /
Cognitive / Seizure / Psychological / Legal dates / Ratification counts.

For each, the front is the question ("What percentage of males have red-green color vision
deficiency?") and the back is the number plus the source organization.

If a number appears differently in two places in the sources, make a card that shows both and
explains which context each belongs to.
```

### A3. Confusion-pairs deck
> Use in: Full Mock notebook, Week 9 onward. These are where points are actually lost.

```
Identify every pair or set of concepts in these sources that are easy to confuse with each other, and
write a discrimination flashcard for each.

Start with these, then find more on your own:
- The Business Disability Forum maturity model vs. the Capability Maturity Model
- Reasonable accommodation vs. accessibility as legal approaches
- Accessibility vs. usability vs. universal design
- Declaration vs. convention
- Apraxia vs. dysarthria vs. aphasia
- Dyslexia vs. dyscalculia vs. dysgraphia
- The medical vs. the economic vs. the charity model
- Person-first vs. identity-first language
- The Web Accessibility Directive vs. the European Accessibility Act

Front: "What's the difference between A and B?" Back: the distinction stated so sharply that I could
answer a scenario question with it.
```

---

## B. Practice quizzes

### B1. Standard weekly quiz
> Use in: the matching domain notebook, after reading that week's section.

```
Write a 15-question multiple-choice practice quiz on [TOPIC] from this notebook's sources.

Format:
- 4 options each (A/B/C/D), exactly one correct
- About 60% scenario-based ("An organization does X..." / "A user encounters Y...") and 40% direct recall
- Distractors must be plausible — draw them from adjacent concepts in the sources, not from nonsense
- Match the CPACC's real style: conceptual application, not trivia, and not code

Put ALL questions first. Then a separator line. Then the answer key, and for each question explain
why the correct answer is correct AND why each of the other three is wrong.

Do not show me the answers before the questions.
```

### B2. Scenario-heavy quiz — models of disability
> Use in: Domain One notebook.

```
Write 12 scenario questions on the theoretical models of disability. Each question describes a
situation, a policy, a piece of language, or an organizational decision, and asks which model it best
reflects.

Make several of them genuinely ambiguous between two models, the way real exam questions are — and in
the answer key, explain what specific detail in the scenario tips it to one model over the other.

Include at least one scenario for each of the seven models. Questions first, answers after a separator.
```

### B3. Law-sorting quiz
> Use in: Domain Three notebook.

```
Write 20 questions that test whether I can sort legal instruments correctly. Mix these formats:

- Given a description, name the instrument
- Given an instrument, name its year, jurisdiction, and binding status
- Given a scenario in a specific country or sector, name which law applies
- "Which of these is the FIRST/ONLY instrument to do X" — superlative questions
- Questions where the distractors are other instruments from the same region

Cover: UDHR, the 1975 Declaration, CRPD, Marrakesh Treaty, ECHR, European Social Charter, EU Charter
of Fundamental Rights, African Charter and ADRP, the Inter-American Convention, the Equality Act 2010,
the ADA, Section 508, the Ontarians with Disabilities Act, the Employment Equality Directive, the Web
Accessibility Directive, the European Accessibility Act, CVAA, the Air Carrier Access Act, AVMSD, and
the procurement directives.

Questions first, answers after a separator.
```

### B4. Full mock exam
> Use in: Full Mock notebook. Run in Week 8 and again in Week 11.

```
Write a full-length CPACC practice exam of 50 multiple-choice questions.

Weight it to match the real exam:
- 20 questions on Domain One (Disabilities, Challenges, and Assistive Technologies) — 40%
- 20 questions on Domain Two (Accessibility and Universal Design) — 40%
- 10 questions on Domain Three (Standards, Laws, and Management Strategies) — 20%

Within each domain, spread across all sub-topics rather than clustering. About 60% scenario-based.
4 options each, one correct, plausible distractors drawn from adjacent concepts.

Present all 50 questions with no answers. After a clear separator, give the answer key with
per-question rationale and an explanation of why each distractor fails.

I'll be timing myself, so don't include any commentary before the first question.
```

### B5. Targeted remediation quiz
> Use in: whichever notebook covers your weak area. This is the Week 10–12 workhorse.

```
I got these questions wrong on my last practice attempt:

[PASTE YOUR MISSES FROM PROGRESS.md HERE]

For each one, first explain the underlying concept I clearly don't have solid — not just the right
answer, but what I was probably thinking that led me to the wrong one.

Then write 3 new questions on that same concept, approached from a different angle, so I can't pass
by remembering the previous question. Questions first, answers after a separator.
```

---

## C. Explanation and synthesis

### C1. Explain a confusion
```
I keep mixing up [A] and [B]. Using only these sources:
1. State the single clearest distinction between them in one sentence.
2. Give me a memory hook or mnemonic for keeping them straight.
3. Give me two scenarios — one that's clearly A, one that's clearly B — and one that's genuinely
   borderline, with an explanation of how to decide.
```

### C2. Weekly wrap-up
> Run at the end of each week's session, in that week's notebook.

```
Summarize what I should be able to do after this week's material as a checklist of 8-10 specific
capabilities, phrased as "I can..." statements. Be concrete — "I can name the seven principles of
universal design and give an example of each" rather than "I understand universal design."

Then flag the two or three items on that list that are most likely to appear on the exam.
```

### C3. Last-week compression
> Run in Week 12, in the Full Mock notebook.

```
Build me a one-page, exam-morning review sheet from these sources.

Include only: things that must be recalled cold and can't be reasoned out — the numbered lists, the
dates, the statistics, the superlatives ("first binding treaty..."), and the pairs that are easy to
confuse.

Exclude anything I could derive from understanding the underlying concept. Ruthlessly short. If it
doesn't fit on one page, cut the least likely to be tested.
```

---

## D. Audio Overview steering

Paste into the "customize" field when generating an Audio Overview.

**Per domain:**
```
Focus on the distinctions that are easy to confuse rather than basic definitions. Assume I've already
read the material once and I'm on my second pass. Spend the most time on the numbered lists and the
concepts that have close siblings. Skip the introductory framing.
```

**For the final week:**
```
This is my last review before the exam. Rapid-fire the facts that have to be recalled cold: the seven
models of disability, the seven principles of universal design, POUR, the three UDL principles, the
key dates and statistics, and the two maturity models. Prioritize breadth of coverage over depth of
explanation.
```

---

## E. Mind maps

Mind Maps have no custom prompt field — what shapes the map is which sources sit in the notebook. That
means the domain notebooks give you three tight maps and the Full Mock notebook gives you one sprawling
one. Use the domain maps. The mock notebook's map is too wide to be useful.

### E1. Blind map, then compare
> Use in: a domain notebook, in the week you finish reading that domain. This is a protocol, not a
> prompt — the retrieval happens before you open anything.

1. **Don't open the map yet.** Take a blank page and write out the structure of the domain from
   memory: top-level topics first, then everything you can put under each. Five minutes, hard stop.
2. Open the Mind Map and expand every branch.
3. Mark your page in three colours: **branches you missed entirely**, **branches you named but
   couldn't populate**, and **branches you invented that aren't in the map at all**.
4. Read them differently. Missed entirely is a reading gap — go back to that section of `notes/`.
   Named but empty is a recall gap — that's flashcard work. Invented is the one to take seriously:
   it means you're importing structure from frontend work that the Body of Knowledge doesn't frame
   that way, and that's the failure mode you're most exposed to on Domain Two.
5. Log all three in `PROGRESS.md`.

### E2. Node interrogation
> Use in: any domain notebook. Click a node you couldn't populate, then paste this into the chat.

```
Explain this branch the way the CPACC exam would test it. Give me three things: the one-sentence
definition as the sources state it, the sibling concept it's most often confused with, and one
scenario question where the answer turns on telling those two apart.

Put the scenario's answer after a separator so I can attempt it first.
```

### E3. Structural gap check
> Use in: the same notebook, straight after E1. This catches misplacement, which colour-coding a page
> by hand won't.

```
I wrote out this domain's structure from memory and got the following:

[PASTE YOUR BLIND MAP]

Compare it against the sources and tell me three things:
1. Top-level topics I left out entirely
2. Topics I named but filed under the wrong parent
3. Anything I listed that does not appear in the sources at all

Be blunt about item 3 and don't soften it — if I've invented a category or borrowed one from web
accessibility practice, say so plainly. Cite the Body of Knowledge section for each correction.
```

---

## F. Slide decks

Set **Presenter Slides** as the format for all three of these, not Detailed Deck. Presenter Slides give
you a cue with no answer attached; a detailed deck restates your notes. Length is noted per prompt.
Decks export to PDF or PowerPoint from the Studio panel.

### F1. Teach-back deck
> Use in: Domain Two notebook, Week 7. Format: **Presenter Slides**, length **short**.

```
Build presenter slides on [TOPIC] for someone who has to explain it out loud from memory.

One slide per concept. Each slide carries the concept name and two or three keyword cues — nothing
else. No sentences, no definitions, no explanations. The slide should be useless to anyone who doesn't
already know the material; it's a cue card, not a handout.

Order the slides the way the Body of Knowledge orders them.
```

**How to use it:** put the deck on screen and explain each slide out loud, as if to someone who's
never heard of it. Drill wherever you stall. Feeling shaky about a topic you can still explain out
loud is a much weaker signal than stalling on one you thought you had.

### F2. Exam-morning cold-recall deck
> Use in: Full Mock notebook, Week 12. Format: **Presenter Slides**, length **default**.

```
Build a cold-recall deck for the morning of my exam.

Include only what has to be recalled exactly and cannot be reasoned out: the numbered lists, the
dates, the statistics, the superlatives ("the first binding treaty to..."), and the pairs that are
easy to confuse. Exclude anything I could derive from understanding the concept.

One item per slide. Front-load the highest-yield material — the seven models of disability, the seven
principles of universal design, POUR and its 13 guidelines, the three UDL principles, and the two
maturity models — then the dates and statistics, then everything else.

No title slide, no introduction, no summary, no transitions.
```

> **This does the same job as prompt C3.** Do one or the other. The one-page sheet wins if you'll
> print it; the deck wins if you'll be reading it on your phone in a parking lot twenty minutes before
> the exam. Pick based on where you'll be.

### F3. Post-mock error deck
> Use in: Full Mock notebook, after each mock (Weeks 8 and 11). Format: **Presenter Slides**, length
> **short**.

```
Here are the questions I got wrong on my practice exam:

[PASTE YOUR MISSES FROM PROGRESS.md]

Build one slide per underlying concept — not one per question. Group questions that fail for the same
reason onto the same slide.

Each slide: the concept, the specific distinction I got wrong, and the correction in one line.

Order the slides by how many of my misses each concept accounts for, largest first. If a concept
accounts for only one miss, put it at the end.
```

The ordering turns a list of mistakes into a ranked list of repairs. The top three slides are your
Week 10–12 curriculum.
