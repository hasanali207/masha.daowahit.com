import {
  ArrowLeftRight,
  Banknote,
  BanknoteArrowDown,
  BanknoteArrowUp,
  BarChart3,
  BookOpen,
  BookText,
  CalendarCheck,
  CalendarClock,
  CalendarDays,
  CalendarRange,
  ChevronsLeft,
  ClipboardList,
  Clock3,
  CreditCard,
  DollarSignIcon,
  Download,
  FileBarChart,
  FileDown,
  FileIcon,
  FilePlus,
  FileText,
  Fingerprint,
  GlobeIcon,
  GraduationCap,
  HandHelping,
  HeartHandshake,
  Home,
  IdCard,
  Image,
  KeySquareIcon,
  Library,
  List,
  ListMinus,
  ListPlus,
  LogOut,
  MailOpen,
  Megaphone,
  MonitorSmartphone,
  NotebookPen,
  NotebookPenIcon,
  PenLine,
  Power,
  Printer,
  Settings,
  Stamp,
  User2Icon,
  UserCheck,
  UserCog,
  UserPlus,
  UserRound,
  UserRoundSearch,
  Users,
  Wallet,
} from "lucide-react";

interface MenuItem {
  name: string; // Menu item এর নাম
  icon: any; // Icon component
  href?: string; // সাধারণ লিঙ্ক
  sub?: MenuItem[]; // Dropdown sub items (শুধু এক লেভেল)
  protectedPath?: string; // Protected route এর path
}

/**
 * =====================================================================
 *  মেনু কাঠামো (বাংলাদেশের স্কুলের জন্য)
 * =====================================================================
 *  প্রতিটি role-এর মেনু একই ক্রমে সাজানো:
 *
 *   1. ড্যাশবোর্ড
 *   2. একাডেমিক               (শিক্ষাবর্ষ, শিক্ষার্থী, পরীক্ষা, ফলাফল)
 *   3. শিক্ষক ও কর্মচারী (HR)  (প্রোফাইল, দায়িত্ব, বেতন, হাজিরা)
 *   4. অফিস একাউন্টিং          (ফি, আয়-ব্যয়, অনুদান, ইনভয়েস)
 *   5. ওয়েবসাইট ও ডকুমেন্টস
 *   6. যোগাযোগ (SMS)
 *   7. সিস্টেম / Settings
 *   8. বাহির ও লগ আউট
 *
 *  নিয়ম: dropdown শুধু এক লেভেল। sub-এর ভিতরে আর sub নেই।
 * =====================================================================
 */

export const menus: Record<string, MenuItem[]> = {
  // =====================================================================
  //  ADMIN  (একাডেমিক অফিস)
  // =====================================================================
  admin: [
    { name: "ড্যাশবোর্ড", icon: Home, href: "/admin" },

    // ---------- একাডেমিক ----------
    {
      name: "শিক্ষাবর্ষ ও শ্রেণি",
      icon: CalendarClock,
      sub: [
        { name: "নতুন শিক্ষাবর্ষ", icon: CalendarDays, href: "/admin/session" },
        {
          name: "নতুন শ্রেণি যোগ",
          icon: CalendarDays,
          href: "/admin/addclass",
        },
        { name: "বিষয়সমূহ", icon: FileDown, href: "/admin/subjects" },
      ],
    },
    {
      name: "শিক্ষার্থী",
      icon: Users,
      sub: [
        {
          name: "নতুন শিক্ষার্থী ভর্তি",
          icon: UserPlus,
          href: "/admin/addstudent",
        },
        { name: "শ্রেণিতে ভর্তি", icon: NotebookPen, href: "/admin/admission" },
        {
          name: "সকল শিক্ষার্থী",
          icon: UserRoundSearch,
          href: "/admin/student",
        },
        {
          name: "শ্রেণিভিত্তিক ফি রিপোর্ট",
          icon: UserRoundSearch,
          href: "/admin/classledger",
        },
        { name: "ডাটা ডাউনলোড", icon: FileDown, href: "/admin/downlaod" },
      ],
    },
    {
      name: "পরীক্ষা",
      icon: BookOpen,
      sub: [
        { name: "পরীক্ষার নাম", href: "/admin/examname", icon: BookOpen },
        {
          name: "পরীক্ষার বিষয় সমূহ",
          href: "/admin/examsubjects",
          icon: BookOpen,
        },
        {
          name: "পরীক্ষার্থী নিবন্ধন",
          href: "/admin/examstudent",
          icon: BookOpen,
        },
        { name: "প্রবেশপত্র", href: "/admin/admitcard", icon: BookOpen },
        {
          name: "পরীক্ষার আসন বিন্যাস",
          href: "/admin/examsitserial",
          icon: BookOpen,
        },
      ],
    },
    {
      name: "ফলাফল",
      icon: BookOpen,
      sub: [
        {
          name: "গড় ফলাফল এন্ট্রি",
          href: "/admin/entryresult",
          icon: BookOpen,
        },
        { name: "ফলাফল", href: "/admin/result", icon: BookOpen },
        {
          name: "ফলাফল রিপোর্ট",
          href: "/admin/singleresult",
          icon: BookOpen,
        },
      ],
    },

    // ---------- শিক্ষক ----------
    {
      name: "শিক্ষক",
      icon: Users,
      sub: [
        {
          name: "নতুন শিক্ষক নিয়োগ",
          icon: UserPlus,
          href: "/admin/addteacher",
        },
        {
          name: "সকল শিক্ষক",
          icon: UserRoundSearch,
          href: "/admin/teacher",
        },
        {
          name: "দায়িত্ব বণ্টন",
          icon: UserRoundSearch,
          href: "/admin/teacher/responsibilty",
        },
        {
          name: "দৈনিক দায়িত্ব এন্ট্রি",
          icon: UserRoundSearch,
          href: "/admin/teacher/dailytaskentry",
        },
        {
          name: "দৈনিক দায়িত্ব রিপোর্ট",
          icon: UserRoundSearch,
          href: "/admin/teacher/responsibilitydashboard",
        },
      ],
    },

    // ---------- ওয়েবসাইট ও ডকুমেন্টস ----------
    {
      name: "ওয়েবসাইট",
      icon: GlobeIcon,
      sub: [
        {
          name: "ব্যানার ডিজাইন",
          href: "/admin/website/banner",
          icon: Image,
        },
        {
          name: "পোস্টার যুক্ত",
          href: "/admin/website/poster",
          icon: Image,
        },
        {
          name: "নোটিশ যুক্ত করুন",
          href: "/admin/website/notices",
          icon: Megaphone,
        },
        {
          name: "পড়ালেখার শিট",
          href: "/admin/website/shits",
          icon: NotebookPenIcon,
        },
      ],
    },
    {
      name: "ডকুমেন্টস/ফরমেট",
      icon: FileIcon,
      sub: [
        {
          name: "শিট ফাইল কভার",
          href: "/admin/shitfilecover",
          icon: NotebookPenIcon,
        },
      ],
    },

    // ---------- সিস্টেম ----------
    { name: "সকল ব্যবহারকারী", icon: UserRound, href: "/admin/users" },
    { name: "প্রোফাইল", icon: Settings, href: "/admin/profile" },
    {
      name: "Settings",
      icon: Settings,
      sub: [
        {
          name: "পাসওয়ার্ড পরিবর্তন",
          icon: KeySquareIcon,
          href: "/password",
        },
      ],
    },
    { name: "বাহির", icon: ChevronsLeft, href: "/" },
    { name: "লগ আউট", icon: LogOut, href: "/logout" },
  ],

  // =====================================================================
  //  ACCOUNTANT  (হিসাব বিভাগ)
  // =====================================================================
  accountant: [
    // ---------- শিক্ষার্থী ----------
    {
      name: "শিক্ষার্থী",
      icon: Users,
      sub: [
        {
          name: "নতুন শিক্ষার্থী ভর্তি",
          icon: UserPlus,
          href: "/accountant/addstudent",
        },
        {
          name: "শ্রেণিতে ভর্তি",
          icon: NotebookPen,
          href: "/accountant/studentadmission",
        },
        {
          name: "সকল শিক্ষার্থী",
          icon: UserRoundSearch,
          href: "/accountant/allstudents",
        },
        {
          name: "ডাটা ডাউনলোড",
          icon: FileDown,
          href: "/accountant/downlaod",
        },
      ],
    },

    // ---------- শিক্ষার্থী ফি (সেটআপ → আদায় → রিপোর্ট) ----------
    {
      name: "ফি সেটআপ",
      icon: DollarSignIcon,
      sub: [
        {
          name: "ফি-এর ধরন",
          href: "/accountant/payments/feecategory",
          icon: List,
        },
        {
          name: "শ্রেণিভিত্তিক ফি",
          href: "/accountant/payments/classfees",
          icon: GraduationCap,
        },
        {
          name: "শিক্ষার্থী আলাদা ফি",
          href: "/accountant/payments/studentfees",
          icon: UserCog,
        },
      ],
    },
    {
      name: "ফি তৈরি ও আদায়",
      icon: CreditCard,
      sub: [
        {
          name: "ফি তৈরি",
          href: "/accountant/payments/payment",
          icon: FilePlus,
        },
        {
          name: "অতিরিক্ত ফি যুক্ত",
          href: "/accountant/payments/addextrafee",
          icon: FilePlus,
        },
        {
          name: "শিক্ষার্থী ফি জমা",
          icon: CalendarRange,
          href: "/accountant/accounts/payments/mutiplemonthcash",
        },
        {
          name: "ইনভয়েস প্রিন্ট",
          icon: Printer,
          href: "/accountant/accounts/transactioninvoice",
        },
      ],
    },
    {
      name: "ফি রিপোর্ট",
      icon: BarChart3,
      sub: [
        {
          name: "লেনদেন রিপোর্ট",
          icon: BarChart3,
          href: "/accountant/payments/paidpayments",
        },
        {
          name: "শ্রেণিভিত্তিক রিপোর্ট",
          icon: GraduationCap,
          href: "/accountant/classledger",
        },
      ],
    },

    // ---------- আয়-ব্যয় ----------
    {
      name: "আয়",
      icon: BanknoteArrowUp,
      sub: [
        {
          name: "আয়ের খাতসমূহ",
          href: "/accountant/accounts/income/accountcategory",
          icon: ListPlus,
        },
        {
          name: "আয়ের হিসাব",
          href: "/accountant/accounts/income/accountentries",
          icon: BanknoteArrowUp,
        },
      ],
    },
    {
      name: "ব্যয়",
      icon: BanknoteArrowDown,
      sub: [
        {
          name: "ব্যয়ের খাতসমূহ",
          href: "/accountant/accounts/expense/accountcategory",
          icon: ListMinus,
        },
        {
          name: "ব্যয়ের হিসাব",
          href: "/accountant/accounts/expense/accountentries",
          icon: BanknoteArrowDown,
        },
      ],
    },
    {
      name: "আয়-ব্যয় রিপোর্ট ও ক্লোজিং",
      icon: FileBarChart,
      sub: [
        {
          name: "আয় ব্যয় ম্যাপিং",
          href: "/accountant/accounts/mapping",
          icon: ArrowLeftRight,
        },
        {
          name: "আয় ব্যয় খাত রিপোর্ট",
          href: "/accountant/accounts/allocationreport",
          icon: Banknote,
        },
        {
          name: "আয় ব্যয় রিপোর্ট",
          href: "/accountant/accounts/report",
          icon: FileBarChart,
        },
        {
          name: "বাৎসরিক হিসাব ক্লোজিং",
          href: "/accountant/accounts/yearly",
          icon: Stamp,
        },
      ],
    },

    // ---------- অনুদান ----------
    {
      name: "সাধারণ অনুদান",
      icon: HandHelping,
      sub: [
        {
          name: "জমা করুন",
          icon: KeySquareIcon,
          href: "/accountant/donation",
        },
        {
          name: "রিপোর্ট দেখুন",
          icon: FileBarChart,
          href: "/accountant/donation/report",
        },
      ],
    },
    {
      name: "মাসিক সদস্য অনুদান",
      icon: HeartHandshake,
      sub: [
        {
          name: "দাতা সদস্য তৈরি",
          icon: UserPlus,
          href: "/accountant/donor/adddonor",
        },
        {
          name: "দাতা সদস্যগণ",
          icon: Users,
          href: "/accountant/donor/alldonor",
        },
        {
          name: "দানের পরিমাণ",
          icon: Banknote,
          href: "/accountant/donor/addamount",
        },
        {
          name: "অনুদান পেমেন্ট তৈরি",
          icon: FilePlus,
          href: "/accountant/donor/generateinvoice",
        },
        {
          name: "জমা করুন",
          icon: KeySquareIcon,
          href: "/accountant/donor/receivedamount",
        },
        {
          name: "অনুদান রিপোর্ট",
          icon: FileBarChart,
          href: "/accountant/donor/report",
        },
      ],
    },

    // ---------- বেতন শীট ----------
    {
      name: "বেতন শীট",
      icon: FileText,
      sub: [
        {
          name: "আবাসিক বেতন শিট",
          icon: FileText,
          href: "/accountant/betnsheet",
        },
        {
          name: "প্রাথমিক শাখা বেতন শিট",
          icon: FileText,
          href: "/accountant/nuranibetnsheet",
        },
      ],
    },

    // ---------- যোগাযোগ ----------
    {
      name: "SMS Services",
      icon: MailOpen,
      sub: [
        {
          name: "SMS Dashboard",
          icon: BarChart3,
          href: "/accountant/sms/smsconfig",
        },
        {
          name: "সকল প্রদানকৃত SMS",
          icon: List,
          href: "/accountant/sms/smslogs",
        },
      ],
    },

    // ---------- সিস্টেম ----------
    {
      name: "Settings",
      icon: Settings,
      sub: [
        {
          name: "পাসওয়ার্ড পরিবর্তন",
          icon: KeySquareIcon,
          href: "/password",
        },
      ],
    },
    { name: "বাহির", icon: ChevronsLeft, href: "/" },
    { name: "লগ আউট", icon: LogOut, href: "/logout" },
  ],

  // =====================================================================
  //  TEACHER  (শিক্ষক)
  // =====================================================================
  teacher: [
    { name: "ড্যাশবোর্ড", icon: Home, href: "/teacher" },

    // ---------- ক্লাস সংক্রান্ত ----------
    {
      name: "শিক্ষার্থী ও শ্রেণি",
      icon: Users,
      sub: [
        {
          name: "শ্রেণিভিত্তিক ফি",
          icon: CreditCard,
          href: "/teacher/classledger",
        },
        {
          name: "ডাটা ডাউনলোড",
          icon: FileDown,
          href: "/teacher/download",
        },
      ],
    },

    // ---------- নিজের ছুটি ----------
    {
      name: "ছুটি",
      icon: CalendarClock,
      sub: [
        {
          name: "ছুটির আবেদন",
          icon: CalendarCheck,
          href: "/teacher/leave/leaveapplication",
        },
        {
          name: "আমার ছুটি",
          icon: CalendarDays,
          href: "/teacher/leave/myleave",
        },
      ],
    },

    // ---------- সিস্টেম ----------
    {
      name: "Settings",
      icon: Settings,
      sub: [
        {
          name: "পাসওয়ার্ড পরিবর্তন",
          icon: KeySquareIcon,
          href: "/password",
        },
      ],
    },
    { name: "বাহির", icon: ChevronsLeft, href: "/" },
    { name: "লগ আউট", icon: LogOut, href: "/logout" },
  ],

  // =====================================================================
  //  STUDENT  (শিক্ষার্থী)
  // =====================================================================
  student: [
    { name: "ড্যাশবোর্ড", icon: Home, href: "/studentdashboard" },
    { name: "ফলাফল", icon: BookOpen, href: "/studentdashboard/result" },
    {
      name: "ফি ও পেমেন্ট তথ্য",
      icon: CreditCard,
      href: "/studentdashboard/mypayments",
    },
    { name: "প্রোফাইল", icon: UserRound, href: "/studentdashboard/profile" },
    {
      name: "Settings",
      icon: Settings,
      sub: [
        {
          name: "পাসওয়ার্ড পরিবর্তন",
          icon: KeySquareIcon,
          href: "/password",
        },
      ],
    },
    { name: "বাহির", icon: ChevronsLeft, href: "/" },
    { name: "লগ আউট", icon: LogOut, href: "/logout" },
  ],

  // =====================================================================
  //  DONOR  (দাতা সদস্য)
  // =====================================================================
  donor: [
    // TODO: ড্যাশবোর্ড লিঙ্ক student-এর দিকে যাচ্ছে, "/donordashboard" হবে কি?
    { name: "ড্যাশবোর্ড", icon: Home, href: "/studentdashboard" },
    {
      name: "অনুদানের তথ্য",
      icon: CreditCard,
      href: "/donordashboard/mypayments",
    },
    { name: "প্রোফাইল", icon: UserRound, href: "/donordashboard/profile" },
    {
      name: "Settings",
      icon: Settings,
      sub: [
        {
          name: "পাসওয়ার্ড পরিবর্তন",
          icon: KeySquareIcon,
          href: "/password",
        },
      ],
    },
    { name: "বাহির", icon: ChevronsLeft, href: "/" },
    { name: "লগ আউট", icon: LogOut, href: "/logout" },
  ],

  // =====================================================================
  //  SUPER ADMIN  (প্রধান শিক্ষক / অধ্যক্ষ — সম্পূর্ণ নিয়ন্ত্রণ)
  // =====================================================================
  super_admin: [
    { name: "ড্যাশবোর্ড", icon: Home, href: "/superadmin" },

    // =====================================================
    // ১. একাডেমিক বিভাগ
    //    শিক্ষাবর্ষ → শিক্ষার্থী → পরীক্ষা → ফলাফল
    // =====================================================
    {
      name: "শিক্ষাবর্ষ ও শ্রেণি",
      icon: User2Icon,
      sub: [
        {
          name: "নতুন শিক্ষাবর্ষ",
          icon: CalendarDays,
          href: "/superadmin/admin/session",
        },
        {
          name: "নতুন শ্রেণি যোগ",
          icon: CalendarDays,
          href: "/superadmin/admin/addclass",
        },
        {
          name: "বিষয়সমূহ",
          icon: Library,
          href: "/superadmin/admin/subjects",
        },
      ],
    },
    {
      name: "শিক্ষার্থী",
      icon: Users,
      sub: [
        {
          name: "নতুন শিক্ষার্থী ভর্তি",
          icon: UserPlus,
          href: "/superadmin/admin/addstudent",
        },
        {
          name: "শ্রেণিতে ভর্তি",
          icon: NotebookPen,
          href: "/superadmin/admin/admission",
        },
        {
          name: "সকল শিক্ষার্থী",
          icon: UserRoundSearch,
          href: "/superadmin/admin/student",
        },
        {
          name: "ডাটা ডাউনলোড",
          icon: FileDown,
          href: "/superadmin/admin/downlaod",
        },
      ],
    },
    {
      name: "পরীক্ষা",
      icon: BookOpen,
      sub: [
        {
          name: "পরীক্ষার নাম",
          href: "/superadmin/admin/examname",
          icon: BookText,
        },
        {
          name: "পরীক্ষার বিষয় সমূহ",
          href: "/superadmin/admin/examsubjects",
          icon: Library,
        },
        {
          name: "পরীক্ষার্থী নিবন্ধন",
          href: "/superadmin/admin/examstudent",
          icon: ClipboardList,
        },
        {
          name: "প্রবেশপত্র",
          href: "/superadmin/admin/admitcard",
          icon: IdCard,
        },
      ],
    },
    {
      name: "ফলাফল",
      icon: FileBarChart,
      sub: [
        {
          name: "গড় ফলাফল এন্ট্রি",
          href: "/superadmin/admin/entryresult",
          icon: PenLine,
        },
        {
          name: "ফলাফল",
          href: "/superadmin/admin/result",
          icon: FileBarChart,
        },
        {
          name: "শ্রেণিভিত্তিক মার্কশিট",
          href: "/superadmin/admin/classwarymarksheet",
          icon: FileText,
        },
      ],
    },

    // =====================================================
    // ২. শিক্ষক ও কর্মচারী (HR)
    //    প্রোফাইল → দায়িত্ব → বেতন
    // =====================================================
    {
      name: "শিক্ষক তথ্য",
      icon: Users,
      sub: [
        {
          name: "শিক্ষক প্রোফাইল তৈরি",
          icon: UserPlus,
          href: "/superadmin/admin/addteacher",
        },
        {
          name: "শিক্ষক বায়োডাটা",
          icon: UserRoundSearch,
          href: "/superadmin/teacher/allteacher",
        },
        {
          // TODO: শিক্ষক কোয়ার্টার নীতিমালার আসল route দিন
          name: "শিক্ষক কোয়ার্টার নীতিমালা",
          icon: FileText,
          href: "/superadmin",
        },
      ],
    },
    {
      name: "শিক্ষক দায়িত্ব",
      icon: ClipboardList,
      sub: [
        // TODO: নিচের দুটির route একই — আলাদা route দিন
        {
          name: "শিক্ষকগণের অতিরিক্ত দায়িত্ব",
          icon: ClipboardList,
          href: "/superadmin/teacher/responsibilitydashboard",
        },
        {
          name: "দৈনিক দায়িত্ব রিপোর্ট",
          icon: FileBarChart,
          href: "/superadmin/teacher/responsibilitydashboard",
        },
      ],
    },
    {
      name: "শিক্ষক বেতন",
      icon: Banknote,
      sub: [
        {
          name: "বেতন তৈরি",
          icon: FilePlus,
          href: "/superadmin/teacher/createsalary",
        },
        {
          name: "শিক্ষক প্রোফাইল/বেতন তালিকা",
          icon: List,
          href: "/superadmin/teacher/salarylist",
        },
      ],
    },

    // =====================================================
    // ৩. অফিস একাউন্টিং
    //    শিক্ষার্থী ফি → আয়-ব্যয় → অনুদান
    // =====================================================
    {
      name: "শিক্ষার্থী ফি ব্যবস্থাপনা",
      icon: CreditCard,
      sub: [
        // ফি সেটআপ
        {
          name: "ফি-এর ধরন",
          href: "/superadmin/accountant/payments/feecategory",
          icon: List,
        },
        {
          name: "শ্রেণিভিত্তিক ফি",
          href: "/superadmin/accountant/payments/classfees",
          icon: GraduationCap,
        },
        {
          name: "শিক্ষার্থী আলাদা ফি",
          href: "/superadmin/accountant/payments/studentfees",
          icon: UserCog,
        },
        // ফি তৈরি ও আদায়
        {
          name: "ফি তৈরি",
          href: "/superadmin/accountant/payments/payment",
          icon: FilePlus,
        },
        {
          name: "অতিরিক্ত ফি যুক্ত",
          href: "/superadmin/accountant/addextrafee",
          icon: FilePlus,
        },
        {
          name: "শিক্ষার্থী ফি গ্রহণ",
          href: "/superadmin/accountant/accounts/payments/mutiplemonthcash",
          icon: CalendarRange,
        },
        {
          name: "ইনভয়েস প্রিন্ট",
          href: "/superadmin/accountant/transactioninvoice",
          icon: Printer,
        },
        // রিপোর্ট
        {
          name: "লেনদেন রিপোর্ট",
          href: "/superadmin/accountant/payments/paidpayments",
          icon: BarChart3,
        },
        {
          name: "শ্রেণিভিত্তিক রিপোর্ট",
          href: "/superadmin/admin/classledger",
          icon: GraduationCap,
        },
      ],
    },
    {
      name: "আয়-ব্যয় ব্যবস্থাপনা",
      icon: Wallet,
      sub: [
        // আয়
        {
          name: "আয়ের খাতসমূহ",
          href: "/superadmin/accountant/accounts/income/accountcategory",
          icon: ListPlus,
        },
        {
          name: "হ্যান্ড রশিদ এন্ট্রি",
          href: "/superadmin/accountant/accounts/income/accountentries",
          icon: BanknoteArrowUp,
        },
        // ব্যয়
        {
          name: "ব্যয়ের খাতসমূহ",
          href: "/superadmin/accountant/accounts/expense/accountcategory",
          icon: ListMinus,
        },
        {
          name: "হ্যান্ড ভাউচার এন্ট্রি",
          href: "/superadmin/accountant/accounts/expense/accountentries",
          icon: BanknoteArrowDown,
        },
        // ম্যাপিং ও রিপোর্ট
        {
          name: "আয় ব্যয় ম্যাপিং",
          href: "/superadmin/accountant/accounts/mapping",
          icon: ArrowLeftRight,
        },
        {
          name: "আয় ব্যয় খাত রিপোর্ট",
          href: "/superadmin/accountant/accounts/allocationreport",
          icon: Banknote,
        },
        {
          name: "আয়-ব্যয় রিপোর্ট",
          href: "/superadmin/accountant/accounts/report",
          icon: FileBarChart,
        },
        {
          name: "কলামনার ক্যাশবুক",
          href: "/superadmin/accountant/monthreport",
          icon: BookOpen,
        },
        {
          name: "বছরব্যাপী হিসাব রিপোর্ট",
          href: "/superadmin/accountant/accounts/yearly",
          icon: CalendarDays,
        },
      ],
    },
    {
      name: "সাধারণ অনুদান",
      icon: HandHelping,
      sub: [
        {
          name: "জমা করুন",
          icon: KeySquareIcon,
          href: "/superadmin/accountant/donation",
        },
        {
          name: "রিপোর্ট দেখুন",
          icon: FileBarChart,
          href: "/superadmin/accountant/donations/report",
        },
      ],
    },
    {
      name: "মাসিক সদস্য অনুদান",
      icon: HeartHandshake,
      sub: [
        {
          name: "দাতা সদস্য তৈরি",
          icon: UserPlus,
          href: "/superadmin/accountant/donor/adddonor",
        },
        {
          name: "দাতা সদস্যগণ",
          icon: Users,
          href: "/superadmin/donor/donor_list",
        },
        {
          name: "দানের পরিমাণ",
          icon: Banknote,
          href: "/superadmin/accountant/donor/donoramount",
        },
        {
          name: "অনুদান পেমেন্ট তৈরি",
          icon: FilePlus,
          href: "/superadmin/accountant/monthlydonation/generateinvoice",
        },
        {
          name: "জমা করুন",
          icon: KeySquareIcon,
          href: "/superadmin/accountant/monthlydonation",
        },
        {
          name: "অনুদান রিপোর্ট",
          icon: FileBarChart,
          href: "/superadmin/accountant/monthlydonation/report",
        },
        {
          name: "ডাটা ডাউনলোড",
          icon: Download,
          href: "/superadmin/donor/download",
        },
      ],
    },

    // =====================================================
    // ৪. ডিজিটাল হাজিরা (শিক্ষক ও কর্মচারীর উপস্থিতি/ছুটি)
    // =====================================================
    {
      name: "হাজিরা ডিভাইস",
      icon: Fingerprint,
      sub: [
        {
          name: "ডিভাইস কানেকশন",
          href: "/superadmin/attendance/devicestatus",
          icon: MonitorSmartphone,
        },
        {
          name: "ডিভাইস ইউজার",
          href: "/superadmin/attendance/deviceuser",
          icon: Users,
        },
      ],
    },
    {
      name: "হাজিরা",
      icon: UserCheck,
      sub: [
        {
          name: "উপস্থিতি রিপোর্ট",
          href: "/superadmin/attendance/report",
          icon: ClipboardList,
        },
        {
          name: "ম্যানুয়াল হাজিরা",
          href: "/superadmin/attendance/manual",
          icon: UserCheck,
        },
        {
          // শিক্ষক প্রোফাইল থেকে সরানো হয়েছে
          name: "শিফট বরাদ্দ",
          href: "/superadmin/teacher/assignshift",
          icon: Clock3,
        },
        {
          name: "শিফট",
          href: "/superadmin/attendance/shift",
          icon: Clock3,
        },
      ],
    },
    {
      name: "হাজিরা ছুটি",
      icon: CalendarClock,
      sub: [
        {
          name: "ছুটির দিন",
          href: "/superadmin/attendance/holiday",
          icon: CalendarCheck,
        },
        {
          name: "ছুটির আবেদন",
          href: "/superadmin/attendance/leave",
          icon: CalendarClock,
        },
        {
          // শিক্ষক প্রোফাইল থেকে সরানো হয়েছে
          // TODO: route আলাদা করুন (এখন responsibilitydashboard)
          name: "ছুটি",
          href: "/superadmin/teacher/responsibilitydashboard",
          icon: CalendarDays,
        },
      ],
    },

    // =====================================================
    // ৫. ওয়েবসাইট ও ডকুমেন্টস
    // =====================================================
    {
      name: "ওয়েবসাইট",
      icon: GlobeIcon,
      sub: [
        {
          name: "একাডেমিক তথ্য",
          href: "/superadmin/admin/website/academicinfo",
          icon: Image,
        },
        {
          name: "ব্যানার ডিজাইন",
          href: "/superadmin/admin/website/banner",
          icon: Image,
        },
        {
          name: "পোস্টার যুক্ত",
          href: "/superadmin/admin/website/poster",
          icon: Image,
        },
        {
          name: "নোটিশ যুক্ত করুন",
          href: "/superadmin/admin/website/notices",
          icon: Megaphone,
        },
        {
          name: "পড়ালেখার শিট",
          href: "/superadmin/admin/website/shits",
          icon: NotebookPenIcon,
        },
      ],
    },
    {
      name: "ডকুমেন্টস/ফরমেট",
      icon: FileIcon,
      sub: [
        {
          name: "শিট ফাইল কভার",
          href: "/superadmin/admin/shitfilecover",
          icon: NotebookPenIcon,
        },
        {
          name: "আবাসিক বেতন শিট",
          icon: FileText,
          href: "/superadmin/accountant/betnsheet",
        },
        {
          name: "প্রাথমিক শাখা বেতন শিট",
          icon: FileText,
          href: "/superadmin/accountant/nuranibetnsheet",
        },
      ],
    },

    // =====================================================
    // ৬. যোগাযোগ (SMS)
    // =====================================================
    {
      name: "SMS Services",
      icon: MailOpen,
      sub: [
        {
          name: "SMS Dashboard",
          icon: BarChart3,
          href: "/superadmin/sms/smsconfig",
        },
        {
          name: "সকল প্রদানকৃত SMS",
          icon: List,
          href: "/superadmin/sms/smslogs",
        },
      ],
    },

    // =====================================================
    // ৭. অন্যান্য ব্যবস্থাপনা
    // =====================================================
    {
      name: "ঋণ ব্যবস্থাপনা",
      icon: DollarSignIcon,
      href: "/superadmin/borrower/allborrower",
    },

    // =====================================================
    // ৮. সিস্টেম (ব্যবহারকারী + সুরক্ষিত সংশোধন + পাসওয়ার্ড)
    // =====================================================
    {
      name: "ব্যবহারকারী",
      icon: UserRound,
      sub: [
        {
          name: "সকল ব্যবহারকারী",
          icon: Users,
          href: "/superadmin/admin/users",
        },
        {
          name: "নতুন ব্যবহারকারী",
          icon: UserPlus,
          href: "/superadmin/user/createuser",
        },
      ],
    },
    {
      name: "Settings",
      icon: Settings,
      sub: [
        {
          name: "পাসওয়ার্ড পরিবর্তন",
          icon: KeySquareIcon,
          href: "/password",
        },
        // সুরক্ষিত সংশোধন (protected route)
        {
          name: "পেমেন্ট সংশোধন",
          icon: UserPlus,
          protectedPath: "/superadmin/accountant/paymentmanager",
        },
        {
          name: "ট্রানজেকশন সংশোধন",
          icon: UserPlus,
          protectedPath: "/superadmin/accountant/transactionmanager",
        },
        {
          name: "পেমেন্ট",
          icon: BarChart3,
          protectedPath:
            "/superadmin/accountant/accounts/payments/allstudentpayments",
        },
      ],
    },

    { name: "Subscription", icon: ChevronsLeft, href: "/subscription" },
    { name: "বাহির", icon: ChevronsLeft, href: "/" },
    { name: "লগ আউট", icon: Power, href: "/logout" },
  ],
};
