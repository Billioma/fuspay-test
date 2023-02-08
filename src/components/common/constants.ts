import { brief, ngn, over, rocket, usa, user } from "../../assets/exports";

export const data = [
  {
    id: 1,
    icon: over,
    name: "Overview",
    path: "/",
  },
  {
    id: 2,
    icon: brief,
    name: "Finance",
    path: "/payments",
  },
  {
    id: 3,
    icon: rocket,
    name: "Payment",
    path: "/transactions",
  },
  {
    id: 3,
    icon: user,
    name: "Profile",
    path: "/profile",
  },
];

export const wallets = [
  {
    id: 1,
    flag: ngn,
    color: "#ebe3ff",
    country: "Nigeria",
  },
  {
    id: 2,
    flag: usa,
    color: "#FFEEC5",
    country: "USA",
  },
  {
    id: 3,
    flag: usa,
    color: "#E0E5FF",
    country: "USA",
  },
  {
    id: 4,
    flag: ngn,
    color: "#FFEEC5",
    country: "Nigeria",
  },
];

export const tableheader = [
  "",
  "Reference",
  "Amount",
  "Description",
  "Date",
  "",
];

export const tabs = ["On-going Tx", "Authorize Tx"];

export const on = ["Processing", "Completed", "Completed", "Completed"];

export const activeStyle = {
  backgroundColor: "#293B96",
  alignItems: "center",
  display: "flex",
  color: "#B8BED9",
  fontSize: "16px",
  lineHeight: "20px",
  padding: "33px 20px",
  height: "45px",
  gap: "8px",
  borderRadius: "16px",
};
