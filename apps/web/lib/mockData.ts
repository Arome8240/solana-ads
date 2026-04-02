export const overviewStats = [
  {
    label: "Total Impressions",
    value: "2,847,391",
    change: "+12.4%",
    up: true,
  },
  { label: "Total Clicks", value: "184,203", change: "+8.1%", up: true },
  { label: "SOL Spent", value: "1,284.50", change: "+21.3%", up: true },
  { label: "Avg. CTR", value: "6.47%", change: "-0.3%", up: false },
];

export const revenueChartData = [
  { day: "Mon", impressions: 320000, clicks: 21000, spend: 142 },
  { day: "Tue", impressions: 410000, clicks: 27500, spend: 188 },
  { day: "Wed", impressions: 380000, clicks: 24200, spend: 165 },
  { day: "Thu", impressions: 510000, clicks: 33800, spend: 224 },
  { day: "Fri", impressions: 460000, clicks: 29600, spend: 198 },
  { day: "Sat", impressions: 390000, clicks: 25100, spend: 172 },
  { day: "Sun", impressions: 377000, clicks: 23000, spend: 195 },
];

export type CampaignStatus = "active" | "paused" | "completed" | "draft";

export interface Campaign {
  id: string;
  name: string;
  status: CampaignStatus;
  budget: number;
  spent: number;
  impressions: number;
  clicks: number;
  ctr: string;
  startDate: string;
  endDate: string;
  target: string;
}

export const campaigns: Campaign[] = [
  {
    id: "c1",
    name: "DeFi Protocol Launch",
    status: "active",
    budget: 500,
    spent: 312.4,
    impressions: 1240000,
    clicks: 82300,
    ctr: "6.64%",
    startDate: "Mar 1, 2025",
    endDate: "Apr 1, 2025",
    target: "DeFi Users",
  },
  {
    id: "c2",
    name: "NFT Collection Drop",
    status: "active",
    budget: 300,
    spent: 198.7,
    impressions: 890000,
    clicks: 54200,
    ctr: "6.09%",
    startDate: "Mar 10, 2025",
    endDate: "Mar 31, 2025",
    target: "NFT Holders",
  },
  {
    id: "c3",
    name: "GameFi Beta Invite",
    status: "paused",
    budget: 200,
    spent: 87.3,
    impressions: 340000,
    clicks: 19800,
    ctr: "5.82%",
    startDate: "Feb 20, 2025",
    endDate: "Mar 20, 2025",
    target: "Gamers",
  },
  {
    id: "c4",
    name: "Staking Rewards Promo",
    status: "completed",
    budget: 400,
    spent: 400,
    impressions: 1580000,
    clicks: 98400,
    ctr: "6.23%",
    startDate: "Jan 15, 2025",
    endDate: "Feb 15, 2025",
    target: "Token Holders",
  },
  {
    id: "c5",
    name: "Wallet App Awareness",
    status: "draft",
    budget: 150,
    spent: 0,
    impressions: 0,
    clicks: 0,
    ctr: "—",
    startDate: "Apr 5, 2025",
    endDate: "May 5, 2025",
    target: "All Wallets",
  },
];

export const activityFeed = [
  {
    id: 1,
    type: "impression_milestone",
    message: "Campaign 'DeFi Protocol Launch' hit 1M impressions",
    time: "2m ago",
  },
  {
    id: 2,
    type: "budget_alert",
    message: "Campaign 'NFT Collection Drop' is 66% through budget",
    time: "18m ago",
  },
  {
    id: 3,
    type: "campaign_paused",
    message: "Campaign 'GameFi Beta Invite' was paused",
    time: "2h ago",
  },
  {
    id: 4,
    type: "payment",
    message: "0.50 SOL deposited to ad balance",
    time: "5h ago",
  },
  {
    id: 5,
    type: "campaign_completed",
    message: "Campaign 'Staking Rewards Promo' completed",
    time: "1d ago",
  },
  {
    id: 6,
    type: "payment",
    message: "1.00 SOL deposited to ad balance",
    time: "2d ago",
  },
];

export const analyticsBreakdown = [
  { wallet: "Phantom", impressions: 1240000, clicks: 82100, ctr: "6.62%" },
  { wallet: "Solflare", impressions: 780000, clicks: 49200, ctr: "6.31%" },
  { wallet: "Backpack", impressions: 520000, clicks: 31400, ctr: "6.04%" },
  { wallet: "Nightly", impressions: 210000, clicks: 12800, ctr: "6.10%" },
  { wallet: "Other", impressions: 97000, clicks: 8700, ctr: "8.97%" },
];

export const billingHistory = [
  {
    id: "tx1",
    date: "Mar 15, 2025",
    amount: 2.0,
    type: "Deposit",
    status: "confirmed",
    txHash: "5xK3...9mPq",
  },
  {
    id: "tx2",
    date: "Mar 10, 2025",
    amount: 0.5,
    type: "Ad Spend",
    status: "confirmed",
    txHash: "8nR7...2wLv",
  },
  {
    id: "tx3",
    date: "Mar 5, 2025",
    amount: 1.0,
    type: "Deposit",
    status: "confirmed",
    txHash: "3pJ9...6kTy",
  },
  {
    id: "tx4",
    date: "Feb 28, 2025",
    amount: 0.87,
    type: "Ad Spend",
    status: "confirmed",
    txHash: "7mQ2...4xBn",
  },
  {
    id: "tx5",
    date: "Feb 20, 2025",
    amount: 3.0,
    type: "Deposit",
    status: "confirmed",
    txHash: "1vF5...8cWs",
  },
];
