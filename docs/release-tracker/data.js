/* Release tracker source of truth.
   Add a ticket object to the matching release.tickets array, then commit and push.
   Future releases: copy a release object, set a new id/date/title. */

window.RELEASE_TRACKER = {
  updated: "2026-08-19",
  jiraBase: "https://fatakpay.atlassian.net/browse",
  releases: [
    {
      id: "2026-08-19",
      date: "2026-08-19",
      title: "19 August 2026",
      label: "Shipping",
      note: "Tickets going out in this Play Store release.",
      tickets: [
        // { key: "PROJ-1", type: "Story", summary: "Example", status: "Ready for Deployment", owner: "Name", notes: "" }
      ]
    },
    {
      id: "2026-09-02",
      date: "2026-09-02",
      title: "2 September 2026",
      label: "Planned",
      note: "Tickets planned for the next release.",
      tickets: [
        // { key: "PROJ-2", type: "Bug", summary: "Example", status: "In Progress", owner: "Name", notes: "" }
      ]
    }
  ]
};
