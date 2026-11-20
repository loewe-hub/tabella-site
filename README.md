# curiact (repo: tabella-site)

Landing page, sign-up and interactive guide. Brand: **Curiact** (decided 20 Nov 2026).

## Renaming
Name, domain, sender and publisher live in `config/brand.ts`. Update that file (and the logo in `components/Logo.tsx` if it changes) and set `SITE_URL`.

## Pages
- `/` landing (EN / IT / DE via `?lang=`)
- `/signup` → `/api/subscribe` → Brevo double opt-in → `/check-inbox`
- `/confirmed` where Brevo sends people after they confirm
- `/g/<token>` personal guide link from the welcome email; sets an access cookie and opens `/guide`
- `/guide` interactive guide: language and prompt-language switches, copy buttons, local-only ticks, print. Not indexed.
- `/privacy`, `/terms` placeholders until the publisher is decided

## Environment variables (Vercel)
| Name | What |
| --- | --- |
| `SITE_URL` | e.g. `https://curiact.com` (no trailing slash) |
| `GUIDE_SECRET` | long random string. Without it the guide is open (preview mode) |
| `BREVO_API_KEY` | Brevo API key. Without it sign-ups run in mock mode (logged only) |
| `BREVO_LIST_ID` | guide list: everyone who confirmed their email |
| `BREVO_NEWSLETTER_LIST_ID` | weekly prompts list: only people who ticked the separate opt-in box |
| `BREVO_DOI_TEMPLATE_ID` | double opt-in confirmation email template |

## Brevo setup
1. Contact attributes (text): `COUNTRY`, `REASON`, `LANGUAGE`, `GUIDE_URL`, `AI_TOOL`, `TOPIC_FOCUS` (women / men / all; optional, no click = all; set by a one-click link in the welcome email); (date): `RETEST_DATE`.
2. Two lists: "Guide 01 · Cholesterol" (everyone) and "Weekly prompts" (opt-in only). Attribute `WEEKLY_OPT_IN` (boolean) records the choice. Only send the newsletter to the second list; guide follow-ups (visit check-in, retest reminder) go to the first.
3. A double opt-in template (Brevo's DOI template type) that contains the confirmation link.
4. Automation "Welcome": trigger = contact added to the list → send welcome email with the button linking to `{{ contact.GUIDE_URL }}`.
5. Automations (built, off until launch): AI-tool and topic-focus click tags (each link sets the attribute), day-14 visit check-in, retest reminder 7 days before `RETEST_DATE`.

## Privacy by design
- We never ask for or store test results. `TOPIC_FOCUS` is optional and used only to tailor content (state this purpose in the privacy notice). Ticks stay in the reader's browser (localStorage).
- Analytics: Vercel Web Analytics (cookieless). Copy clicks are counted per question, anonymously.
- The access cookie is strictly necessary (it only remembers the guide link).
