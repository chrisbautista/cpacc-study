# NotebookLM Setup for CPACC

You've chosen NotebookLM as the active-recall layer. This file is the one-time setup; `PROMPTS.md` is
what you use week to week.

**The division of labour:** `notes/` in this folder is the *reference* — compressed, verifiable,
edited by hand. NotebookLM is the *drill* — flashcards, quizzes, and audio you consume on a phone.
Notes get read once per topic; NotebookLM gets hit repeatedly.

---

## One-time setup (~20 minutes, do this in Week 1)

### Build four notebooks, not one

A single notebook covering all three domains produces vague, cross-domain questions. Separate
notebooks keep the model's retrieval tight and make quiz questions specific.

| Notebook | Sources to upload |
|---|---|
| **CPACC — Domain One (40%)** | `notes/01-domain-one.md`, plus `CPACCBoK.pdf` |
| **CPACC — Domain Two (40%)** | `notes/02-domain-two.md`, plus `CPACCBoK.pdf` |
| **CPACC — Domain Three (20%)** | `notes/03-domain-three.md`, plus `CPACCBoK.pdf` |
| **CPACC — Full Mock Exam** | All three note files + `notes/99-cheatsheets.md` + `CPACCBoK.pdf` |

Uploading the full BoK PDF alongside each domain note matters: the notes are compressed, and the PDF
lets NotebookLM ground answers in the original wording. **When they conflict, the PDF is right.**

### Steps

1. Go to **notebooklm.google.com** and sign in.
2. **Create notebook** → name it `CPACC — Domain One (40%)`.
3. **Add sources** → upload `notes/01-domain-one.md` and `CPACCBoK.pdf`.
4. Repeat for Domains Two and Three, then the Full Mock notebook.
5. In each notebook, paste the **Notebook Priming Prompt** below as your first chat message. It sets
   the frame for every later interaction in that notebook.

### Notebook Priming Prompt — paste this first in each domain notebook

```
You are helping me prepare for the IAAP CPACC certification exam (Certified Professional in
Accessibility Core Competencies). The sources in this notebook are my condensed study notes and the
official IAAP Body of Knowledge v4.0.

Ground rules for everything you produce in this notebook:

1. Only use the sources. Never invent facts, statistics, dates, or organization names. If something
   isn't in the sources, say so rather than filling the gap.
2. When the notes and the Body of Knowledge PDF conflict, the PDF is authoritative. Flag the conflict.
3. The CPACC exam tests conceptual application, not rote recall. Favor scenario questions — "an
   organization does X, which model/principle/law applies?" — over pure definition questions, at
   roughly a 60/40 ratio.
4. Always give the rationale for the correct answer AND say why each distractor is wrong. That's
   where the learning is.
5. Never reveal answers before I've attempted the questions. Put answers in a clearly separated
   section at the end.

Confirm you understand, then wait for my next instruction.
```

---

## The five things NotebookLM does that matter here

**1. Flashcards** — NotebookLM has a built-in flashcard generator in the Studio panel. Generate a deck
per domain, then use the prompts in `PROMPTS.md` for targeted decks on the memorization-dense material
(dates, statistics, the two maturity models).

**2. Practice quizzes** — Also in Studio. Generate these *after* reading a topic, not before, and
regenerate on later weeks so you get fresh questions rather than memorizing an answer key.

**3. Audio Overview** — this is the highest-leverage feature for you specifically. At 2–4 hrs/week you
have very little desk time, but you probably have commute, dishwashing, and walking time. Generate an
Audio Overview per domain and listen to it in the gaps. It doesn't replace active recall — it makes
the second and third exposures free.

> Use the **"customize"** option on Audio Overview to steer it. Suggested steering text:
> *"Focus on the distinctions that are easy to confuse: the seven models of disability, the difference
> between accommodation and universal design, and the two maturity models. Assume I've already read
> the material once."*

**4. Mind Maps** — click the **Mind Map chip** in the chat and the map lands in the Studio panel. You
can expand and collapse branches, and clicking a node lets you ask about that node in chat. There's no
custom prompt — the map reflects whatever sources are in the notebook, which is another argument for
keeping the domain notebooks separate. Daily generation is quota-limited (10/day on the free tier), and
the mobile app doesn't support it yet.

Mind maps suit this exam more than most. CPACC is largely a taxonomy test: seven models, nine
disability categories, seven mental functions, seven UD principles, and a hierarchy of treaties and
national laws. A map shows that shape instead of describing it.

> **Reading a finished map is rereading with better graphics**, and it produces the same false
> confidence. Use it only in the blind-map-then-compare form — prompt **E1** in `PROMPTS.md`. Draw the
> structure from memory first, *then* open the map. What you missed is the week's study list.

**5. Slide Decks** — also in Studio. Two formats: *Detailed Deck* (full text, reads on its own) and
*Presenter Slides* (talking points only). You also get a length setting, an output language, and a
custom prompt field. Decks export to PDF or PowerPoint. Generation runs in the background and takes a
few minutes. You can revise a slide by prompt, but you can't add or remove slides, and revisions don't
re-check your sources — so if a fact is wrong, regenerate rather than patch.

**Use Presenter Slides. Skip Detailed Deck.** A detailed deck is your notes again in a worse layout.
Presenter Slides give you a prompt with no answer attached, which is a cue card. Two jobs worth
doing: teaching the material back out loud (prompt **F1**) and the exam-morning cold-recall deck
(prompt **F2**).

---

## Weekly rhythm

Per `STUDY-PLAN.md`, each week looks roughly like this:

1. **Read** the week's section in `notes/` (~30–45 min) — this is the only "input" step
2. **Generate** a quiz in the matching notebook using a prompt from `PROMPTS.md` (~2 min)
3. **Take it cold**, without looking at the notes (~15 min)
4. **Log the score and the misses** in `PROGRESS.md` (~3 min)
5. **Listen** to the Audio Overview during the week's dead time (free)
6. **Map or compress** — only in the weeks listed below, and inside the hour you already have,
   not on top of it

The logging step is the one people skip and the one that matters most — your misses are the entire
basis for what gets re-studied in Weeks 10–12.

### Where mind maps and decks go

Five fixed points across the twelve weeks. Everything else stays as `STUDY-PLAN.md` has it.

| When | What | Where it comes out of |
|---|---|---|
| End of Week 5 | Mind map, Domain One — blind-map first (**E1**) | 10 min of Session B |
| Week 6 onward | Domain One map as the spine of Session D: map from memory, compare, drill the branches you dropped | Session D, no extra time |
| Week 7 | Teach-back deck on the seven UD principles (**F1**) | 15 min of Session B |
| End of Week 8, end of Week 11 | Mind map for Domains Two and Three (**E1**); post-mock error deck (**F3**) | Session B, after the mock is logged |
| Week 12 | Exam-morning cold-recall deck (**F2**), exported to PDF on your phone | Consolidation week |

None of this is new hours, and if it starts eating them, drop it. The cut order gains one rung:
**Audio Overviews → mind maps and decks → Session D → Session A.** Session B and the mocks are still
untouchable.

---

## Things to avoid

- **Don't generate a 500-card deck.** You will not review it. Generate 30–40 cards per domain, focused
  on what you actually got wrong.
- **Don't quiz on material you haven't read yet.** Retrieval practice on a blank slate is just
  guessing, and it teaches you the wrong answers.
- **Don't trust generated statistics without checking them** against `99-cheatsheets.md`. Numbers are
  exactly where a language model is most likely to drift, and CPACC tests numbers.
- **Don't skip the "why the distractors are wrong" part.** CPACC questions are frequently
  "which of these is *most* correct" — the reasoning is the skill being tested.
- **Don't map a domain you haven't read.** The map will look like a structure you understand, you'll
  feel ahead, and you'll shortchange the reading. Map after, never before.
- **Don't regenerate a map every week.** The sources barely change, so neither will the map. You'd be
  spending quota to see the same picture.
- **Don't build a deck of material you're still learning.** A deck compresses, and compression only
  helps over material you already hold. Week 7 and Week 12, not Week 3.
- **Don't take a map or a deck as a source.** Both are generated, both drift on numbers, and both get
  checked against `99-cheatsheets.md` and the BoK like everything else here.
