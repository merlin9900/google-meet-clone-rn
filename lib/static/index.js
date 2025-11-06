import {
  LayoutDashboard,
  Users,
  Box,
  ClipboardList,
  Settings,
  LogOut,
  DollarSign,
  Target,
  Phone,
  BriefcaseBusiness,
  Handshake,
  DoorOpen,
  ChartNoAxesCombined,
  Handbag,
  Landmark,
  BookUser,
  List,
  ShieldHalf,
  CircleUserRound,
  ChartLine,
  ListTodo,
  WalletMinimal,
  CalendarFold,
  Megaphone,
  SquareMousePointer,
  BookmarkCheck,
} from 'lucide-react';

export const menuItems = [
  {
    name: 'Dashboard',
    icon: LayoutDashboard,
    url: '/dashboard',
    subTitle: 'Business & Revenue',
    subTitleIcon: BriefcaseBusiness,
  },
  {
    name: 'Sales',
    icon: ChartNoAxesCombined,
    subItems: [
      { name: 'Quotation', url: '/sales/quotation' },
      { name: 'Sales Order', url: '/sales/sales-order' },
      { name: 'Delivery Challan', url: '/sales/delivery-challan' },
      { name: 'Invoice', url: '/sales/invoice' },
      { name: 'Credit Notes', url: '/sales/credit-notes' },
      { name: 'Debit Notes', url: '/sales/debit-notes' },
      { name: 'Payments', url: '/sales/payments' },
    ],
  },
  {
    name: 'Purchase',
    icon: Handbag,
    subItems: [
      { name: 'Purchase Order', url: '/purchase/purchase-order' },
      { name: 'GRN', url: '/purchase/grn' },
      { name: 'Purchase Invoice', url: '/purchase/purchase-invoice' },
      { name: 'Vendor Credit', url: '/purchase/vendor-credit' },
      { name: 'Payment Advice', url: '/purchase/payment-advice' },
    ],
  },
  {
    name: 'Banking',
    icon: Landmark,
    url: '/banking',
  },
  {
    name: 'Inventory',
    icon: Box,
    subItems: [
      { name: 'Inventory List', url: '/inventory/inventory-list' },
      { name: 'Godown', url: '/inventory/godown' },
    ],
  },
  {
    name: 'Projects',
    icon: ListTodo,
    url: '/projects',
  },
  {
    name: 'Deals',
    icon: WalletMinimal,
    url: '/deals',
  },
  {
    name: 'Contacts',
    icon: BookUser,
    subItems: [
      { name: 'Customer', url: '/contacts/customer' },
      { name: 'Vendor', url: '/contacts/vendor' },
      { name: 'Transporter', url: '/contacts/transporter' },
    ],
    subTitle: 'People & Relationships',
    subTitleIcon: Handshake,
  },
  {
    name: 'Leads',
    icon: List,
    url: '/leads',
  },

  {
    name: 'HR',
    icon: Users,
    subItems: [
      { name: 'Employee', url: '/hr/employee' },
      { name: 'Leaves', url: '/hr/leaves' },
      { name: 'Holiday', url: '/hr/holiday' },
      { name: 'Employee Salary', url: '/hr/employee-salary' },
    ],
  },
  {
    name: 'Meetings',
    icon: CalendarFold,
    url: '/meetings',
  },
  {
    name: 'Campaigns',
    icon: Megaphone,
    url: '/campaigns',
  },
  {
    name: 'Visits',
    icon: SquareMousePointer,
    url: '/visits',
  },
  {
    name: 'Tasks',
    icon: BookmarkCheck,
    url: '/tasks',
  },
  {
    name: 'Master',
    icon: ShieldHalf,
    subItems: [
      { name: 'Designation', url: '/master/designation' },
      { name: 'Department', url: '/master/department' },
      { name: 'Leave Type', url: '/master/leave-type' },
    ],
    subTitle: 'Management & Setup',
    subTitleIcon: Handshake,
  },
  {
    name: 'Account',
    icon: CircleUserRound,
    subItems: [
      { name: 'Cash Voucher', url: '/account/cash-voucher' },
      { name: 'Expense', url: '/account/expense' },
      { name: 'Expense Advice', url: '/account/expense-advice' },
      { name: 'Customer Ledger', url: '/account/customer-ledger' },
      { name: 'Vendor Ledger', url: '/account/vendor-ledger' },
    ],
  },
  {
    name: 'Report',
    icon: ChartLine,
    subItems: [
      { name: 'Credit Note', url: '/report/credit-note' },
      { name: 'Inventory Report', url: '/report/inventory-report' },
      { name: 'Sales Register', url: '/report/sales-register' },
      { name: 'Purchase Register', url: '/report/purchase-register' },
      { name: 'Customer Outstanding', url: '/report/customer-outstanding' },
      { name: 'Vendor Outstanding', url: '/report/vendor-outstanding' },
      { name: 'Pending Sales Order Report', url: '/report/pending-report' },
      { name: 'Cash Voucher Report', url: '/report/cash-voucher-report' },
      { name: 'HSN Wise Report', url: '/report/hsn-wise-report' },
      { name: 'Expense Report', url: '/report/expense-report' },
      {
        name: 'Inventory Division Wise',
        url: '/report/inventory-division-wise',
      },
    ],
  },

  {
    name: 'Document',
    icon: ClipboardList,
    subItems: [
      { name: 'Customer', url: '/document/customer' },
      { name: 'Vendor', url: '/document/vendor' },
      { name: 'Inventory', url: '/document/inventory' },
    ],
  },
  {
    name: 'Settings',
    icon: Settings,
    url: '/settings',
  },
  {
    name: 'Logout',
    icon: LogOut,
    url: '/login',
    subTitle: 'Exit',
    subTitleIcon: DoorOpen,
  },
];

export const metrics = [
  {
    title: 'Total Revenue',
    value: '$847,290',
    change: '+12.5%',
    trend: 'up',
    icon: DollarSign,
    color: 'text-green-600',
  },
  {
    title: 'Active Leads',
    value: '1,247',
    change: '+8.2%',
    trend: 'up',
    icon: Users,
    color: 'text-blue-600',
  },
  {
    title: 'Conversion Rate',
    value: '24.8%',
    change: '-2.1%',
    trend: 'down',
    icon: Target,
    color: 'text-orange-600',
  },
  {
    title: 'Calls Made',
    value: '892',
    change: '+15.3%',
    trend: 'up',
    icon: Phone,
    color: 'text-purple-600',
  },
];

export const states = [
  { value: 'Maharashtra', label: 'Maharashtra' },
  { value: 'Goa', label: 'Goa' },
  { value: 'Daman and Diu', label: 'Daman and Diu' },
  { value: 'Delhi', label: 'Delhi' },
  { value: 'Assam', label: 'Assam' },
  { value: 'Kerala', label: 'Kerala' },
  { value: 'Uttrakhand', label: 'Uttrakhand' },
  { value: 'Punjab', label: 'Punjab' },
  { value: 'Haryana', label: 'Haryana' },
  { value: 'Rajasthan', label: 'Rajasthan' },
  { value: 'Gujarat', label: 'Gujarat' },
  { value: 'Madhya Pradesh', label: 'Madhya Pradesh' },
  { value: 'Chhattisgarh', label: 'Chhattisgarh' },
  { value: 'Odisha', label: 'Odisha' },
  { value: 'Jharkhand', label: 'Jharkhand' },
  { value: 'Bihar', label: 'Bihar' },
  { value: 'West Bengal', label: 'West Bengal' },
  { value: 'Sikkim', label: 'Sikkim' },
  { value: 'Arunachal Pradesh', label: 'Arunachal Pradesh' },
  { value: 'Nagaland', label: 'Nagaland' },
  { value: 'Manipur', label: 'Manipur' },
  { value: 'Mizoram', label: 'Mizoram' },
  { value: 'Tripura', label: 'Tripura' },
  { value: 'Meghalaya', label: 'Meghalaya' },
  { value: 'Andhra Pradesh', label: 'Andhra Pradesh' },
  { value: 'Telangana', label: 'Telangana' },
  { value: 'Karnataka', label: 'Karnataka' },
  { value: 'Tamil Nadu', label: 'Tamil Nadu' },
];

export const paymentTerms = [
  { value: 'standard', label: 'Standard Payment Term' },
  { value: 'proforma', label: 'Proforma Payment Term' },
  { value: 'commercial', label: 'Commercial Payment Term' },
  { value: 'tax', label: 'Tax Payment Term' },
  { value: 'credit', label: 'Credit Payment Term' },
  { value: 'debit', label: 'Debit Payment Term' },
  { value: 'recurring', label: 'Recurring Payment Term' },
  { value: 'export', label: 'Export Payment Term' },
  { value: 'supplementary', label: 'Supplementary Payment Term' },
  { value: 'self', label: 'Self-Billed Payment Term' },
];

export const departments = [
  { value: 'engineering', label: 'Engineering' },
  { value: 'hr', label: 'HR' },
  { value: 'finance', label: 'Finance' },
  { value: 'marketing', label: 'Marketing' },
  { value: 'sales', label: 'Sales' },
  { value: 'support', label: 'Support' },
  { value: 'admin', label: 'Admin' },
  { value: 'design', label: 'Design' },
];

export const designations = [
  { value: 'software_engineer', label: 'Software Engineer' },
  { value: 'hr_manager', label: 'HR Manager' },
  { value: 'accountant', label: 'Accountant' },
  { value: 'marketing_executive', label: 'Marketing Executive' },
  { value: 'frontend_developer', label: 'Frontend Developer' },
  { value: 'sales_executive', label: 'Sales Executive' },
  { value: 'support_engineer', label: 'Support Engineer' },
  { value: 'office_administrator', label: 'Office Administrator' },
  { value: 'backend_developer', label: 'Backend Developer' },
  { value: 'ui_ux_designer', label: 'UI/UX Designer' },
];

export const employeeStatus = [
  { value: 'active', label: 'Active' },
  { value: 'inactive', label: 'Inactive' },
  { value: 'on_leave', label: 'On Leave' },
  { value: 'resigned', label: 'Resigned' },
  { value: 'terminated', label: 'Terminated' },
];

export const leaveTypes = [
  { value: 'sick_leave', label: 'Sick Leave' },
  { value: 'casual_leave', label: 'Casual Leave' },
  { value: 'annual_leave', label: 'Annual Leave' },
  { value: 'maternity_leave', label: 'Maternity Leave' },
  { value: 'paternity_leave', label: 'Paternity Leave' },
  { value: 'bereavement_leave', label: 'Bereavement Leave' },
  { value: 'unpaid_leave', label: 'Unpaid Leave' },
];

export const employeeNames = [
  { value: 'john_doe', label: 'John Doe' },
  { value: 'jane_smith', label: 'Jane Smith' },
  { value: 'amit_sharma', label: 'Amit Sharma' },
  { value: 'priya_patel', label: 'Priya Patel' },
  { value: 'rahul_mehta', label: 'Rahul Mehta' },
  { value: 'sara_khan', label: 'Sara Khan' },
  { value: 'david_johnson', label: 'David Johnson' },
  { value: 'meera_iyer', label: 'Meera Iyer' },
  { value: 'karan_verma', label: 'Karan Verma' },
  { value: 'ananya_roy', label: 'Ananya Roy' },
];

export const costCenter = [
  { value: 'office_cleaning', label: 'Office Cleaning' },
  { value: 'electricity_bill', label: 'Electricity Bill' },
  { value: 'rent', label: 'Rent' },
  { value: 'drinking_water', label: 'Drinking Water' },
  { value: 'consultancy_charges', label: 'Consultancy Charges' },
  { value: 'software_design', label: 'Software Design' },
  { value: 'repair', label: 'Repair and Maintenance' },
  { value: 'other', label: 'Other Expenses' },
  { value: 'transport', label: 'Transport' },
  { value: 'wages', label: 'Loading and Unloading Wages' },
  { value: 'canteen', label: 'Canteen' },
];

export const statuses = [
  { value: 'active', label: 'Active' },
  { value: 'inactive', label: 'Inactive' },
  { value: 'completed', label: 'Completed' },
  { value: 'pending', label: 'Pending' },
  { value: 'suspended', label: 'Suspended' },
  { value: 'closed', label: 'Closed' },
];

export const priorities = [
  { value: 'low', label: 'Low' },
  { value: 'medium', label: 'Medium' },
  { value: 'high', label: 'High' },
  { value: 'urgent', label: 'Urgent' },
];

export const stages = [
  { value: 'planning', label: 'Planning' },
  { value: 'requirement_gathering', label: 'Requirement Gathering' },
  { value: 'design', label: 'Design' },
  { value: 'execution', label: 'Execution' },
  { value: 'testing', label: 'Testing' },
  { value: 'review', label: 'Review' },
  { value: 'deployment', label: 'Deployment' },
  { value: 'maintenance', label: 'Maintenance' },
];

export const priorityColors = {
  Low: 'bg-gray-100 text-gray-800',
  Medium: 'bg-blue-100 text-blue-800',
  High: 'bg-orange-100 text-orange-800',
  Urgent: 'bg-red-100 text-red-800',
};

export const statusColors = {
  Active: 'bg-green-100 text-green-800',
  Inactive: 'bg-gray-100 text-gray-800',
  Pending: 'bg-yellow-100 text-yellow-800',
  Suspended: 'bg-orange-100 text-orange-800',
  Closed: 'bg-red-100 text-red-800',
};
