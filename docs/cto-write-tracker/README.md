# CTO Weekly Tracker

Week-wise write-up for the CTO: what went live, what is in the next app build, and infra tests. No developer names.

Live: [fp-siddhant-patil.github.io/trackers/cto-write-tracker](https://fp-siddhant-patil.github.io/trackers/cto-write-tracker/)

## Add a new week

Edit [`data.js`](data.js). Put a new object at the **top** of `weeks[]`:

```js
{
  id: "2026-08-24",
  range: "24–30 August 2026",
  title: "This week",
  label: "Latest",
  summary: "One-line week summary.",
  sections: [
    { id: "live", title: "Live on stores — app x.xx", status: "Published", items: [{ key: "FAT-1", what: "Plain-language outcome." }] }
  ]
}
```

Then set the previous week’s `label` to `"Previous"`. Push to `main`.
