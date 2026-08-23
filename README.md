# Engineering Trackers

Single place for release boards, process docs, and playbooks.

Live site: [fp-siddhant-patil.github.io/trackers](https://fp-siddhant-patil.github.io/trackers/)

GitHub Pages is served from branch `main`, folder `/docs`.

## Docs catalog

| Doc | Type | Status |
|---|---|---|
| [Release Tracker](docs/release-tracker/) | 19 Aug + 2 Sep boards | Active |
| [CTO Write Tracker](docs/cto-write-tracker/) | Executive board from Jira + Google Sheet | Ready for sources |
| [Jira Development Workflow](docs/jira-development-workflow/) | Process + flowchart | Active |
| [Jira Workflow Prompt](docs/jira-development-workflow/PROMPT.md) | AI / setup prompt | Active |

## Add a new doc

1. Copy [`_templates/doc`](_templates/doc/) to `docs/<your-doc-slug>/`
2. Fill in `README.md`
3. Add optional assets (diagrams, HTML, images) in the same folder
4. Link it in the catalog table above and in [`index.html`](index.html)

Suggested slug style: `kebab-case` (example: `release-checklist`).
