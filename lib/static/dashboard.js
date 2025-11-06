import { BarChart, LineChart, PieChart, Radar, Table } from 'lucide-react';

export const barChartData = {
  weekly: [
    { name: 'Leads', uv: 120, pv: 90, amt: 80 },
    { name: 'Meetings', uv: 85, pv: 70, amt: 60 },
    { name: 'Deals', uv: 60, pv: 110, amt: 20 },
    { name: 'Follow-ups', uv: 40, pv: 30, amt: 15 },
    { name: 'Contracts', uv: 25, pv: 20, amt: 10 },
    { name: 'Renewals', uv: 50, pv: 45, amt: 25 },
    { name: 'Upsells', uv: 70, pv: 60, amt: 35 },
  ],
  monthly: [
    { name: 'Leads', uv: 500, pv: 420, amt: 400 },
    { name: 'Meetings', uv: 350, pv: 310, amt: 300 },
    { name: 'Deals', uv: 150, pv: 140, amt: 130 },
    { name: 'Follow-ups', uv: 400, pv: 280, amt: 160 },
    { name: 'Contracts', uv: 190, pv: 250, amt: 80 },
    { name: 'Renewals', uv: 220, pv: 200, amt: 150 },
    { name: 'Upsells', uv: 300, pv: 270, amt: 100 },
  ],
  yearly: [
    { name: 'Leads', uv: 6200, pv: 5800, amt: 5500 },
    { name: 'Meetings', uv: 4200, pv: 4000, amt: 3800 },
    { name: 'Deals', uv: 1800, pv: 1700, amt: 1650 },
    { name: 'Follow-ups', uv: 2600, pv: 2500, amt: 2400 },
    { name: 'Contracts', uv: 3000, pv: 4280, amt: 1050 },
    { name: 'Renewals', uv: 3500, pv: 6500, amt: 2500 },
    { name: 'Upsells', uv: 6500, pv: 4480, amt: 470 },
  ],
};

export const pieChartData = {
  weekly: [
    { name: 'Website', value: 40 },
    { name: 'Referrals', value: 25 },
    { name: 'Paid Ads', value: 20 },
    { name: 'Events', value: 15 },
  ],
  monthly: [
    { name: 'Website', value: 110 },
    { name: 'Referrals', value: 100 },
    { name: 'Paid Ads', value: 80 },
    { name: 'Events', value: 70 },
  ],
  yearly: [
    { name: 'Website', value: 1800 },
    { name: 'Referrals', value: 1600 },
    { name: 'Paid Ads', value: 1100 },
    { name: 'Events', value: 700 },
  ],
};

export const crmRadarData = [
  { subject: 'Lead Conversion', Enterprise: 140, SMB: 110, fullMark: 150 },
  { subject: 'Customer Retention', Enterprise: 80, SMB: 130, fullMark: 150 },
  { subject: 'Response Time', Enterprise: 86, SMB: 110, fullMark: 150 },
  { subject: 'Deal Closure Rate', Enterprise: 99, SMB: 85, fullMark: 150 },
  { subject: 'Follow-up Consistency', Enterprise: 110, SMB: 90, fullMark: 150 },
  { subject: 'Upsell Success', Enterprise: 65, SMB: 110, fullMark: 150 },
];

export const dashboardTableData = [
  {
    invoice: 'INV-1001',
    status: 'Paid',
    method: 'Credit Card',
    amount: '₹1,200.00',
  },
  {
    invoice: 'INV-1002',
    status: 'Pending',
    method: 'Bank Transfer',
    amount: '₹850.00',
  },
  {
    invoice: 'INV-1003',
    status: 'Overdue',
    method: 'PayPal',
    amount: '₹450.00',
  },
  {
    invoice: 'INV-1004',
    status: 'Paid',
    method: 'Credit Card',
    amount: '₹2,100.00',
  },
  {
    invoice: 'INV-1005',
    status: 'Pending',
    method: 'Cash',
    amount: '₹320.00',
  },
  {
    invoice: 'INV-1006',
    status: 'Paid',
    method: 'Bank Transfer',
    amount: '₹980.00',
  },
  {
    invoice: 'INV-1007',
    status: 'Cancelled',
    method: 'PayPal',
    amount: '₹110.00',
  },
];

export const dialogData = [
  {
    type: 'pie',
    title: 'Pie Chart',
    Icon: PieChart,
    description: 'Visualize data distribution with a pie chart.',
    inputTitle: 'Sales by Category',
  },
  {
    type: 'bar',
    title: 'Bar Chart',
    Icon: BarChart,
    description: 'Compare categories with a bar chart.',
    inputTitle: 'Revenue',
  },
  {
    type: 'line',
    title: 'Line Chart',
    Icon: LineChart,
    description: 'Show trends over time with a line chart.',
    inputTitle: 'Users (Line)',
  },
  {
    type: 'radar',
    title: 'Radar Chart',
    Icon: Radar,
    description: 'Analyze data across multiple variables with a radar chart.',
    inputTitle: 'Skill Radar',
  },
  {
    type: 'table',
    title: 'Table',
    Icon: Table,
    description: 'Display data in a tabular format.',
    inputTitle: 'Top Customers',
  },
];

export const notifications = [
  {
    id: 1,
    type: 'lead',
    title: 'New Lead Assigned',
    message: 'John Doe has been assigned to you',
    time: '2 minutes ago',
    read: false,
    priority: 'high',
  },
  {
    id: 2,
    type: 'task',
    title: 'Task Due Today',
    message: 'Follow up with Microsoft regarding quotation',
    time: '1 hour ago',
    read: false,
    priority: 'medium',
  },
  {
    id: 3,
    type: 'meeting',
    title: 'Meeting Scheduled',
    message: 'Team meeting at 3:00 PM',
    time: '3 hours ago',
    read: true,
    priority: 'low',
  },
  {
    id: 4,
    type: 'deal',
    title: 'Deal Won',
    message: 'ABC Corp deal closed successfully',
    time: '5 hours ago',
    read: true,
    priority: 'high',
  },
  {
    id: 5,
    type: 'system',
    title: 'System Update',
    message: 'CRM will be down for maintenance',
    time: '1 day ago',
    read: true,
    priority: 'medium',
  },
];

export const months = [
  'Jan',
  'Feb',
  'Mar',
  'Apr',
  'May',
  'Jun',
  'Jul',
  'Aug',
  'Sep',
  'Oct',
  'Nov',
  'Dec',
];

export const initialTableColumns = [
  { key: 'id', label: 'ID' },
  { key: 'name', label: 'Name' },
  { key: 'age', label: 'Age' },
  { key: 'email', label: 'Email' },
];

export const initialTableData = [
  { id: 1, name: 'John Doe', age: 30, email: 'john@example.com' },
  { id: 2, name: 'Jane Smith', age: 25, email: 'jane@example.com' },
];
