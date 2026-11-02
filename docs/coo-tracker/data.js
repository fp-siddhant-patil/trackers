/* COO tracker from Weekly Reports.xlsx only.
   Weeks are Monday–Sunday. A week with no dated rows is omitted. */

window.COO_TRACKER = {
  updated: "2026-11-02",
  jiraBase: "https://fatakpay.atlassian.net/browse",
  weeks: [
    {
      id: "2026-09-06",
      month: "2026-09",
      range: "31 Aug – 6 Sep 2026",
      label: "1 Sep",
      summary:
        "GoDigit still shows a different final premium when the user goes to pay. Open since 1 Sep. Not started.",
      highlights: [
        "Insurance, GoDigit: the final premium shown before payment changes when the user goes to pay. Not started since 1 Sep."
      ],
      sections: [
        {
          id: "queued",
          title: "Not started",
          status: "Assigned",
          items: [
            {
              what: "Insurance, GoDigit: the final premium shown before payment changes when the user goes to pay. Open since 1 Sep."
            }
          ]
        }
      ]
    },
    {
      id: "2026-10-18",
      month: "2026-10",
      range: "12–18 Oct 2026",
      label: "16 Oct",
      summary: "Reverse penny drop for UGRO Capital co-lending was updated on web.",
      highlights: [
        "Web done: reverse penny drop for UGRO Capital co-lending (16 Oct)."
      ],
      sections: [
        {
          id: "done",
          title: "Done",
          status: "Completed",
          items: [
            {
              what: "Web: reverse penny drop for UGRO Capital co-lending is updated (16 Oct)."
            }
          ]
        }
      ]
    },
    {
      id: "2026-10-25",
      month: "2026-10",
      range: "19–25 Oct 2026",
      label: "19 Oct",
      summary:
        "FatakUdaan page revamp and 60-second OTP resend on backend, web, and DSA were done. Insurance vehicle details stay in place on Cancel. The app OTP change was still open.",
      highlights: [
        "Web done: FatakUdaan page revamped to the design reference (23 Oct).",
        "60-second OTP resend is done on backend, web, and DSA (23 Oct). The app change was still open.",
        "Insurance: vehicle details stay in place when the user clicks Cancel (21 Oct)."
      ],
      sections: [
        {
          id: "done",
          title: "Done",
          status: "Completed",
          items: [
            {
              what: "Web: FatakUdaan page revamped to the design reference (23 Oct)."
            },
            {
              key: "FTK-14840",
              what: "60-second OTP resend is done on backend, web, and DSA (23 Oct). The app change was still open."
            },
            {
              what: "Insurance: vehicle details stay in place when the user clicks Cancel (21 Oct)."
            }
          ]
        }
      ]
    },
    {
      id: "2026-11-01",
      month: "2026-10",
      range: "26 Oct – 1 Nov 2026",
      label: "26 Oct",
      summary:
        "Ignosis pass key, location consent, DSA video KYC expiry, and insurance payment retry were done. PAN/DOB consent and two insurance fixes were in progress. Diwali banners and NCB prefill were still open.",
      highlights: [
        "App done: Ignosis pass key (29 Oct), and location consent updated for compliance (28 Oct).",
        "DSA video KYC link can be expired from admin (29 Oct).",
        "Insurance: after a payment fails, the user can pay again (28–29 Oct).",
        "In progress: PAN and DOB in account-aggregator consent on web and app. Sanity and testing. Deadline 31 Oct.",
        "Insurance ready for QA: IDV/NCB dropdown opens only on the control (27 Oct), and net premium is on the breakup (30 Oct).",
        "Still open: Diwali website banners (31 Oct, dev started), and NCB percentage not prefilled on repeat login (29 Oct).",
        "No date on the sheet: web coupon code waiting on JWT, app JWT, in-app promotion, and app OTP resend still in testing.",
        "Desktop design: onboarding and dashboard, FatakUdaan, Refer & Earn, membership, settings, and calculator are done. Loan journey and insurance need changes. Coupons need an internal discussion."
      ],
      sections: [
        {
          id: "done",
          title: "Done",
          status: "Completed",
          items: [
            {
              what: "App: Ignosis pass key is done (29 Oct)."
            },
            {
              what: "App: location consent updated for compliance (28 Oct)."
            },
            {
              what: "DSA: video KYC link can be expired from admin (29 Oct)."
            },
            {
              what: "Insurance: after a payment fails, the user can pay again (28–29 Oct)."
            }
          ]
        },
        {
          id: "progress",
          title: "In progress",
          status: "In progress / QA",
          items: [
            {
              what: "Web and app: PAN and DOB are passed in the account-aggregator consent request (Ignosis, FinFactor, FinBox, CAMS). Sanity and testing are in progress. Deadline was 31 Oct."
            },
            {
              what: "Insurance, ready for QA: the IDV or NCB dropdown opens only when the dropdown itself is clicked (27 Oct)."
            },
            {
              what: "Insurance, ready for QA: net premium is added on the premium breakup from the quotes summary API (30 Oct)."
            },
            {
              key: "FTK-14840",
              what: "App: 60-second OTP resend is in testing. No date on the sheet."
            }
          ]
        },
        {
          id: "queued",
          title: "Not started",
          status: "Assigned",
          items: [
            {
              what: "Web: Diwali campaign banners. Dev has started. Timeline was 31 Oct."
            },
            {
              what: "Insurance: logging in again with the same vehicle number does not show the prefilled NCB percentage (29 Oct)."
            },
            {
              what: "Web: coupon code is waiting on JWT confirmation. No date on the sheet."
            },
            {
              what: "App: JWT on the frontend. No date on the sheet."
            },
            {
              what: "App: in-app promotion. No date on the sheet."
            }
          ]
        },
        {
          id: "design",
          title: "Design",
          status: "On the sheet, no dates",
          items: [
            {
              what: "Desktop web done: onboarding and dashboard, FatakUdaan, Refer & Earn, membership, settings, and calculator."
            },
            {
              what: "Desktop web changes required: loan journey and insurance."
            },
            {
              what: "Desktop web: coupons need an internal discussion."
            },
            {
              what: "Mobile web-app design lists onboarding dashboard, loan, and insurance. Status was left blank."
            }
          ]
        }
      ]
    },
    {
      id: "2026-11-08",
      month: "2026-11",
      range: "2–8 Nov 2026",
      label: "2 Nov",
      summary: "PayU NACH is in progress on web and app. Timeline is 2 Nov. Dev started 30 Oct.",
      highlights: [
        "PayU NACH is in progress on web and app. Timeline 2 Nov. Dev started 30 Oct."
      ],
      sections: [
        {
          id: "progress",
          title: "In progress",
          status: "In progress",
          items: [
            {
              what: "Web and app: PayU NACH integration. Dev started 30 Oct. Timeline 2 Nov."
            }
          ]
        }
      ]
    }
  ]
};
