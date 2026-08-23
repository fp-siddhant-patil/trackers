/* COO week-wise tracker. Add a new week object at the top of weeks[]. */

window.COO_TRACKER = {
  updated: "2026-08-24",
  jiraBase: "https://fatakpay.atlassian.net/browse",
  revamp: {
    title: "App revamp",
    sheetUrl: "https://docs.google.com/spreadsheets/d/1pSMt9Vua2AD2v2WFfmHmT0Z7SDpfM4j4x0ykQfsR0CU/edit?pli=1&gid=0#gid=0",
    sheetId: "1pSMt9Vua2AD2v2WFfmHmT0Z7SDpfM4j4x0ykQfsR0CU",
    gid: "0",
    pulled: "2026-08-24",
    summary:
      "App rebuild by module. Navigation is done. Onboarding, network, coin wallet, investments, and settings are in progress. The rest has not started.",
    rows: [
      { module: "Navigation Stack Architecture", sub: "", key: "", status: "Done" },
      { module: "Onboarding", sub: "Login Flow", key: "", status: "In Progress" },
      { module: "Network Layer", sub: "", key: "", status: "In Progress" },
      { module: "Coin Wallet", sub: "", key: "", status: "In Progress" },
      { module: "Investments", sub: "", key: "", status: "In Progress" },
      { module: "Settings", sub: "Feedback & Ratings", key: "", status: "In Progress" },
      { module: "Settings", sub: "Transaction History", key: "", status: "In Progress" },
      { module: "UPI", sub: "", key: "", status: "Not started" },
      { module: "Calculator", sub: "", key: "", status: "Not started" },
      { module: "EMI Tracker", sub: "", key: "", status: "Not started" },
      { module: "Dashboard", sub: "", key: "", status: "Not started" },
      { module: "Loans", sub: "", key: "", status: "Not started" },
      { module: "BBPS", sub: "", key: "", status: "Not started" },
      { module: "Fatak-Udaan", sub: "", key: "", status: "Not started" },
      { module: "Insurance", sub: "", key: "", status: "Not started" },
      { module: "Financial Wellness", sub: "", key: "", status: "Not started" },
      { module: "Membership", sub: "", key: "", status: "Not started" },
      { module: "Refer & Earn", sub: "", key: "", status: "Not started" },
      { module: "Coupons", sub: "", key: "", status: "Not started" },
      { module: "Settings", sub: "", key: "", status: "Not started" },
      { module: "Credit Card", sub: "", key: "", status: "Not started" }
    ]
  },
  weeks: [
    {
      id: "2026-08-24",
      range: "24–30 August 2026",
      title: "This week",
      label: "Latest",
      summaryApp:
        "App 6.20 stays live. App 6.21 is still with QA, including a repayment fix for a ₹149 extra charge. The migration test build is not a store release.",
      summaryWeb:
        "Website W4 runs through 25 Aug. Yubi GRO details, CIBIL-already-pulled handling, and DSA mobile search are built. Speed, About Us memberships, loan documents, webview lender flow, and app+web monorepo are still in progress.",
      sections: [
        {
          id: "live",
          stream: "app",
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
          stream: "app",
          title: "With QA — app 6.21",
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
            },
            {
              key: "FAT-1526",
              what: "Repayment on Card and EMI: extra ₹149 charge investigated and fixed."
            }
          ]
        },
        {
          id: "migration",
          stream: "app",
          title: "Database migration — internal test",
          status: "Not a store release",
          items: [
            {
              key: "FAT-1532",
              what: "An internal app build was pointed at the migration servers (mig*) so QA could test login, onboarding, and loan screens against the new database. This build is not for Play Store or App Store."
            }
          ]
        },
        {
          id: "web-built",
          stream: "web",
          title: "Built, not live yet",
          status: "Dev done",
          items: [
            {
              key: "FTWB-850",
              what: "Yubi Markets GRO details added on the FDPL Finance website."
            },
            {
              key: "FTWB-854",
              what: "Web correctly handles users whose CIBIL report was already pulled."
            },
            {
              key: "FTWB-872",
              what: "DSA application list: search by mobile number works again."
            }
          ]
        },
        {
          id: "web-wip",
          stream: "web",
          title: "Still in progress",
          status: "In progress / QA",
          items: [
            {
              key: "FTWB-843",
              what: "Making the website faster on mobile (home and product pages load sooner)."
            },
            {
              key: "FTWB-868",
              what: "About Us: FatakPay shown as a proud member of IAMAI, FCC, and PCI."
            },
            {
              key: "FTWB-873",
              what: "KFS and loan agreement documents updated on web."
            },
            {
              key: "FTWB-853",
              what: "New multi-lender activation flow in webview (in QA)."
            },
            {
              key: "FTWB-846",
              what: "Monorepo setup so the app and website share one codebase (in progress)."
            }
          ]
        }
      ]
    },
    {
      id: "2026-08-17",
      range: "17–23 August 2026",
      title: "Last week",
      label: "Previous",
      summaryApp:
        "App 6.20 is live. App 6.21 is with QA. An internal build was used to test the database migration.",
      summaryWeb:
        "Website W4: SEO and journey fixes are live. Speed, About Us memberships, webview lender flow, and app+web monorepo are still in progress.",
      sections: [
        {
          id: "live",
          stream: "app",
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
          stream: "app",
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
          stream: "app",
          title: "Database migration — internal test",
          status: "Not a store release",
          items: [
            {
              key: "FAT-1532",
              what: "An internal app build was pointed at the migration servers (mig*) so QA could test login, onboarding, and loan screens against the new database during Saturday night downtime. This build is not for Play Store or App Store. After testing, APIs go back to live production."
            }
          ]
        },
        {
          id: "web-done",
          stream: "web",
          title: "Done this week",
          status: "Live / monitoring",
          items: [
            {
              key: "FTWB-845",
              what: "SEO fixes on the website: blog pagination 404s, a proper 404 page, and duplicate titles/descriptions cleaned up."
            },
            {
              key: "FTWB-852",
              what: "Press articles and thumbnails updated across the website."
            },
            {
              key: "FTWB-851",
              what: "Refer & Earn page heading (H1) updated."
            },
            {
              key: "FTWB-849",
              what: "Users can tap Next after bank details auto-fill — they were getting stuck."
            },
            {
              key: "FTWB-866",
              what: "Edit-application permission issue on production is fixed."
            },
            {
              key: "FTWB-844",
              what: "Old meta-keywords tag removed sitewide (in production monitoring)."
            },
            {
              key: "FTWB-836",
              what: "DSA self-registration on web can skip OTP where required (in production monitoring)."
            }
          ]
        },
        {
          id: "web-wip",
          stream: "web",
          title: "Still in progress",
          status: "In progress / QA",
          items: [
            {
              key: "FTWB-843",
              what: "Making the website faster on mobile (home and product pages load sooner)."
            },
            {
              key: "FTWB-868",
              what: "About Us: FatakPay shown as a proud member of IAMAI, FCC, and PCI."
            },
            {
              key: "FTWB-873",
              what: "KFS and loan agreement documents updated on web."
            },
            {
              key: "FTWB-854",
              what: "Web correctly handles users whose CIBIL report was already pulled."
            },
            {
              key: "FTWB-850",
              what: "Yubi Markets GRO details added on the FDPL Finance website."
            },
            {
              key: "FTWB-872",
              what: "DSA application list: search by mobile number works again."
            },
            {
              key: "FTWB-853",
              what: "New multi-lender activation flow in webview (in QA)."
            },
            {
              key: "FTWB-846",
              what: "Monorepo setup so the app and website share one codebase (in progress)."
            }
          ]
        }
      ]
    }
  ]
};
