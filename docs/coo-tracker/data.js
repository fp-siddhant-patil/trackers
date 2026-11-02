/* Last October week, split by pod. Security rows are flagged. No names. */

window.COO_TRACKER = {
  updated: "2026-11-02",
  jiraBase: "https://fatakpay.atlassian.net/browse",
  weeks: [
    {
      id: "2026-11-01",
      month: "2026-10",
      range: "26 Oct – 1 Nov 2026",
      label: "26 Oct",
      summary:
        "26 Oct – 1 Nov across DSA, App, Web, and Design. Security fixes: location consent, Ignosis pass key, DSA video KYC expiry, the 60-second OTP resend, and PAN/DOB in account-aggregator consent.",
      pods: [
        {
          id: "dsa",
          title: "DSA",
          summary: "Video KYC links can be expired from admin. The 60-second OTP resend is already done on DSA.",
          items: [
            {
              status: "Done",
              security: true,
              what: "Video KYC link can be expired from admin (29 Oct)."
            },
            {
              status: "Done",
              security: true,
              key: "FTK-14840",
              what: "60-second OTP resend is done on DSA, backend, and web (23 Oct). The app change is still in testing."
            }
          ]
        },
        {
          id: "app",
          title: "App",
          summary: "Pass key and compliance location consent are done. PAN/DOB consent and OTP resend are in testing. JWT has not started.",
          items: [
            {
              status: "Done",
              security: true,
              what: "Ignosis pass key is done (29 Oct)."
            },
            {
              status: "Done",
              security: true,
              what: "Location consent updated for compliance (28 Oct)."
            },
            {
              status: "In progress",
              security: true,
              what: "PAN and DOB are passed in the account-aggregator consent request (Ignosis, FinFactor, FinBox, CAMS). Sanity and testing are in progress. Deadline was 31 Oct."
            },
            {
              status: "In progress",
              security: true,
              key: "FTK-14840",
              what: "60-second OTP resend on the app journey is in testing."
            },
            {
              status: "In progress",
              what: "PayU NACH integration. Dev started 30 Oct. Timeline 2 Nov."
            },
            {
              status: "Not started",
              security: true,
              what: "JWT on the app frontend. No date on the sheet."
            },
            {
              status: "Not started",
              what: "In-app promotion. No date on the sheet."
            }
          ]
        },
        {
          id: "web",
          title: "Web",
          summary: "Insurance payment retry is done. PAN/DOB consent, PayU NACH, and two insurance QA items are in progress. Coupon code is waiting on JWT.",
          items: [
            {
              status: "Done",
              what: "Insurance: after a payment fails, the user can pay again (28–29 Oct)."
            },
            {
              status: "In progress",
              security: true,
              what: "PAN and DOB are passed in the account-aggregator consent request (Ignosis, FinFactor, FinBox, CAMS). Sanity and testing are in progress. Deadline was 31 Oct."
            },
            {
              status: "In progress",
              what: "PayU NACH integration. Dev started 30 Oct. Timeline 2 Nov."
            },
            {
              status: "In progress",
              what: "Insurance, ready for QA: the IDV or NCB dropdown opens only when the dropdown itself is clicked (27 Oct)."
            },
            {
              status: "In progress",
              what: "Insurance, ready for QA: net premium is added on the premium breakup from the quotes summary API (30 Oct)."
            },
            {
              status: "Not started",
              what: "Diwali campaign banners. Dev has started. Timeline was 31 Oct."
            },
            {
              status: "Not started",
              what: "Insurance: logging in again with the same vehicle number does not show the prefilled NCB percentage (29 Oct)."
            },
            {
              status: "Not started",
              security: true,
              what: "Coupon code is waiting on JWT confirmation. No date on the sheet."
            }
          ]
        },
        {
          id: "design",
          title: "Design",
          summary: "Desktop web: onboarding, FatakUdaan, Refer & Earn, membership, settings, and calculator are done. Loan journey and insurance need changes.",
          items: [
            {
              status: "Done",
              what: "Desktop web: onboarding and dashboard, FatakUdaan, Refer & Earn, membership, settings, and calculator."
            },
            {
              status: "Changes required",
              what: "Desktop web: loan journey and insurance."
            },
            {
              status: "Discussion",
              what: "Desktop web: coupons need an internal discussion."
            },
            {
              status: "Listed",
              what: "Mobile web-app lists onboarding dashboard, loan, and insurance. Status was left blank on the sheet."
            }
          ]
        }
      ]
    }
  ]
};
