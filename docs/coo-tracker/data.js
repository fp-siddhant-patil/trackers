/* COO week-wise tracker. Add a new week object at the top of weeks[]. */

window.COO_TRACKER = {
  updated: "2026-08-23",
  jiraBase: "https://fatakpay.atlassian.net/browse",
  weeks: [
    {
      id: "2026-08-17",
      range: "17–23 August 2026",
      title: "This week",
      label: "Latest",
      summary:
        "App 6.20 is live on the stores. App 6.21 build is with QA. A separate internal build was used to test the database migration.",
      sections: [
        {
          id: "live",
          title: "Live on stores — app 6.20",
          status: "Published",
          items: [
            {
              key: "FAT-1477",
              what: "Campaign users skip the home dashboard and go straight to Card or Personal Loan, based on the link they opened."
            },
            {
              key: "FAT-1463",
              what: "We now track when the home dashboard actually loads, so marketing numbers are reliable."
            },
            {
              key: "FAT-1462",
              what: "On home, Credit Card and Gold tiles swapped places."
            },
            {
              key: "FAT-1475",
              what: "Membership screen fixed for a rare case that was breaking the flow."
            },
            {
              key: "FAT-1476",
              what: "Western Capital is enabled as a payment partner in the app."
            }
          ]
        },
        {
          id: "build",
          title: "Build given to QA — app 6.21",
          status: "Not on stores yet",
          items: [
            {
              key: "FAT-1527",
              what: "App is more stable: crashes fixed on notifications, insurance, accepted offer, and UPI payment."
            },
            {
              key: "FAT-1523",
              what: "App is lighter: images compressed so the download is smaller."
            },
            {
              key: "FAT-1494",
              what: "Closed FatakLite EMI customers (small loan, paid on time) see a “take EMI again” banner on home and can apply without a bank statement."
            },
            {
              key: "FAT-1521",
              what: "Udaan users whose credit score was stuck at -1 can refresh it by confirming another mobile number."
            },
            {
              key: "FAT-1520",
              what: "After sanction, users see a clear status (pending, in progress, overdue, rejected) instead of a blank or wrong screen."
            },
            {
              key: "FAT-1524",
              what: "Membership banner added on the home carousel."
            },
            {
              key: "FAT-1492",
              what: "We now record whether the user opted in or out of membership during the loan journey."
            }
          ]
        },
        {
          id: "migration",
          title: "Database migration — internal test",
          status: "Not a store release",
          items: [
            {
              key: "FAT-1532",
              what: "An internal app build was pointed at the migration servers (mig*) so QA could test login, onboarding, and loan screens against the new database during Saturday night downtime. This build is not for Play Store or App Store. After testing, APIs go back to live production."
            }
          ]
        }
      ]
    }
  ]
};
