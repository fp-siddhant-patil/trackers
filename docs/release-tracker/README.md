# Release Tracker

What we are shipping in each Play Store release.

Live: [fp-siddhant-patil.github.io/trackers/release-tracker](https://fp-siddhant-patil.github.io/trackers/release-tracker/)

## Current releases

| Date | Status |
|---|---|
| 19 August 2026 | Shipping |
| 2 September 2026 | Planned |

## Add or change tickets

Edit [`data.js`](data.js). Each ticket:

```js
{ key: "PROJ-123", type: "Story", summary: "Short title", status: "Ready for Deployment", owner: "Name", notes: "" }
```

`type` is `Story` or `Bug`. Push to `main` and GitHub Pages will update.

## Add a future release

Copy a release object in `data.js`, then set a new `id`, `date`, `title`, and `label`.
