# Engineering Docs

Single place for process docs, workflows, and playbooks.

Browse on GitHub, or enable **Settings → Pages → Deploy from branch `main` / root** to host the hub site.

## Docs catalog

| Doc | Type | Status |
|---|---|---|
| [Jira Development Workflow](docs/jira-development-workflow/) | Process + flowchart | Active |

## Add a new doc

1. Copy [`_templates/doc`](_templates/doc/) to `docs/<your-doc-slug>/`
2. Fill in `README.md`
3. Add optional assets (diagrams, HTML, images) in the same folder
4. Link it in the catalog table above and in [`index.html`](index.html)

Suggested slug style: `kebab-case` (example: `release-checklist`).
