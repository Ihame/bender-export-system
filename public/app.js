const C = {
  bg: "#080E0A",
  bgCard: "#0F1810",
  surface: "#111A12",
  border: "#1E2E1F",
  borderLight: "#2A3E2B",
  text: "#E8EDE8",
  textMuted: "#6B8A6C",
  textDim: "#3A5A3B",
  gold: "#C8A84B",
  goldLight: "#E4C46A",
  goldDim: "#7A6020",
  coffee: "#B8733A",
  coffeeLight: "#D89055",
  coffeeBg: "#180E06",
  machinery: "#3A7CA8",
  machineryLight: "#5A9CC8",
  machineryBg: "#060F18",
  construction: "#8A5A28",
  constructionLight: "#C8803E",
  constructionBg: "#180E06",
  danger: "#D44040",
  dangerLight: "#E86060",
  success: "#48B860",
  warning: "#D89830",
  warningLight: "#F0B848",
  info: "#4888C8",
  purple: "#8A4EC8",
  purpleLight: "#AA6EE8"
};
const FONT = `@import url('https://fonts.googleapis.com/css2?family=Cormorant:wght@400;600;700&family=Syne:wght@300;400;500;600;700&display=swap');`;
const GS = `${FONT}
*{box-sizing:border-box;margin:0;padding:0;}
body{font-family:'Syne',sans-serif;background:${C.bg};color:${C.text};overflow:auto;}
::-webkit-scrollbar{width:4px;height:4px;}::-webkit-scrollbar-track{background:transparent;}::-webkit-scrollbar-thumb{background:${C.border};border-radius:10px;}
@keyframes fadeUp{from{opacity:0;transform:translateY(14px)}to{opacity:1;transform:translateY(0)}}
@keyframes pulse{0%,100%{opacity:1}50%{opacity:.4}}
@keyframes slideIn{from{transform:translateX(-100%)}to{transform:translateX(0)}}
input,select,textarea,button{font-family:'Syne',sans-serif;}
.tbl-wrap{overflow-x:auto;-webkit-overflow-scrolling:touch;}
.kpi-grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(140px,1fr));gap:12px;}
.two-col{display:grid;grid-template-columns:1fr 1fr;gap:14px;}
.three-col{display:grid;grid-template-columns:repeat(auto-fit,minmax(140px,1fr));gap:12px;}
@media(max-width:600px){
  .two-col{grid-template-columns:1fr!important;}
  .hide-mobile{display:none!important;}
  .show-mobile{display:flex!important;}
  .page-pad{padding:14px!important;}
  .topbar-title{font-size:15px!important;}
}`;
const Ctx = createContext(null);
const useApp = () => useContext(Ctx);
const INIT_CWS = [
  { id: "musaza", name: "Musaza CWS", region: "Northern Province", image: "https://images.unsplash.com/photo-1559305616-3f99cd43e353?w=600&q=70" },
  { id: "nyungwe", name: "Nyungwe CWS", region: "Western Province", image: "https://images.unsplash.com/photo-1523741543316-beb7fc7023d8?w=600&q=70" },
  { id: "nyarubaka", name: "Nyarubaka CWS", region: "Southern Province", image: "https://images.unsplash.com/photo-1495107334309-fcf20504a5ab?w=600&q=70" }
];
const INIT_FARMERS = [
  { id: "f1", cwsId: "musaza", name: "Jean Bosco Nshimiyimana", farmerId: "MSZ-001", group: "Amakara Group", balance: 0, phone: "+250788111001", createdAt: "2024-01-10", active: true },
  { id: "f2", cwsId: "musaza", name: "Vestine Mukamwiza", farmerId: "MSZ-002", group: "Amakara Group", balance: 15e3, phone: "+250788111002", createdAt: "2024-01-10", active: true },
  { id: "f3", cwsId: "musaza", name: "Protais Habimana", farmerId: "MSZ-003", group: "Inzoga Group", balance: 0, phone: "+250788111003", createdAt: "2024-01-15", active: true },
  { id: "f4", cwsId: "nyungwe", name: "Alphonsine Uwamariya", farmerId: "NYU-001", group: "Tuzamuke Group", balance: 8e3, phone: "+250788222001", createdAt: "2024-01-10", active: true },
  { id: "f5", cwsId: "nyungwe", name: "Theogene Niyonzima", farmerId: "NYU-002", group: "Tuzamuke Group", balance: 0, phone: "+250788222002", createdAt: "2024-01-12", active: true },
  { id: "f6", cwsId: "nyarubaka", name: "Esperance Nizeyimana", farmerId: "NYB-001", group: "Inkesha Group", balance: 0, phone: "+250788333001", createdAt: "2024-01-10", active: true },
  { id: "f7", cwsId: "nyarubaka", name: "Faustin Twagirayezu", farmerId: "NYB-002", group: "Inkesha Group", balance: 5e3, phone: "+250788333002", createdAt: "2024-01-14", active: true }
];
const INIT_CHERRY = [
  { id: "ch1", cwsId: "musaza", farmerId: "f1", date: "2025-03-10", gnrNumber: "GNR-MSZ-0001", standardKg: 320, flotantKg: 18, totalKg: 338, rateStandard: 155, rateFlotant: 80, paymentStandard: 49600, paymentFlotant: 1440, totalPaid: 51040, avgRate: 151, paymentMethod: "cash", status: "paid", by: "u_clerk1" },
  { id: "ch2", cwsId: "musaza", farmerId: "f2", date: "2025-03-10", gnrNumber: "GNR-MSZ-0002", standardKg: 480, flotantKg: 25, totalKg: 505, rateStandard: 155, rateFlotant: 80, paymentStandard: 74400, paymentFlotant: 2e3, totalPaid: 76400, avgRate: 151.3, paymentMethod: "mobile_money", status: "paid", by: "u_clerk1" },
  { id: "ch3", cwsId: "musaza", farmerId: "f3", date: "2025-03-11", gnrNumber: "GNR-MSZ-0003", standardKg: 210, flotantKg: 12, totalKg: 222, rateStandard: 155, rateFlotant: 80, paymentStandard: 32550, paymentFlotant: 960, totalPaid: 33510, avgRate: 150.9, paymentMethod: "cash", status: "paid", by: "u_clerk1" },
  { id: "ch4", cwsId: "nyungwe", farmerId: "f4", date: "2025-03-10", gnrNumber: "GNR-NYU-0001", standardKg: 540, flotantKg: 30, totalKg: 570, rateStandard: 152, rateFlotant: 78, paymentStandard: 82080, paymentFlotant: 2340, totalPaid: 84420, avgRate: 148.1, paymentMethod: "cash", status: "paid", by: "u_clerk2" },
  { id: "ch5", cwsId: "nyungwe", farmerId: "f5", date: "2025-03-11", gnrNumber: "GNR-NYU-0002", standardKg: 380, flotantKg: 20, totalKg: 400, rateStandard: 152, rateFlotant: 78, paymentStandard: 57760, paymentFlotant: 1560, totalPaid: 59320, avgRate: 148.3, paymentMethod: "mobile_money", status: "paid", by: "u_clerk2" },
  { id: "ch5b", cwsId: "nyungwe", farmerId: "f4", date: "2025-03-12", gnrNumber: "GNR-NYU-0003", standardKg: 310, flotantKg: 14, totalKg: 324, rateStandard: 152, rateFlotant: 78, paymentStandard: 47120, paymentFlotant: 1092, totalPaid: 48212, avgRate: 148.8, paymentMethod: null, status: "pending", by: "u_clerk2", paidBy: null, paidAt: null },
  { id: "ch6", cwsId: "nyarubaka", farmerId: "f6", date: "2025-03-10", gnrNumber: "GNR-NYB-0001", standardKg: 290, flotantKg: 15, totalKg: 305, rateStandard: 150, rateFlotant: 75, paymentStandard: 43500, paymentFlotant: 1125, totalPaid: 44625, avgRate: 146.3, paymentMethod: "cash", status: "paid", by: "u_clerk3", paidBy: "u_cashier3", paidAt: "2025-03-10 09:00" },
  { id: "ch7", cwsId: "nyarubaka", farmerId: "f7", date: "2025-03-12", gnrNumber: "GNR-NYB-0002", standardKg: 420, flotantKg: 22, totalKg: 442, rateStandard: 150, rateFlotant: 75, paymentStandard: 63e3, paymentFlotant: 1650, totalPaid: 64650, avgRate: 146.3, paymentMethod: null, status: "not_paid", by: "u_clerk3", paidBy: null, paidAt: null, notes: "Cash shortage \u2014 farmer owed" }
];
const INIT_CASHBOOK = [
  { id: "cb1", cwsId: "musaza", date: "2025-03-10", type: "inflow", category: "Fund Transfer", description: "Opening funds from HQ", amount: 3e6, balance: 3e6, ref: "FT-001", by: "u_cashier1" },
  { id: "cb2", cwsId: "musaza", date: "2025-03-10", type: "outflow", category: "Cherry Payment", description: "Payments to farmers GNR-MSZ-0001 & 0002", amount: 127440, balance: 2872560, ref: "CH-PAY-001", by: "u_cashier1" },
  { id: "cb3", cwsId: "musaza", date: "2025-03-11", type: "outflow", category: "Cherry Payment", description: "Payments to farmers GNR-MSZ-0003", amount: 33510, balance: 2839050, ref: "CH-PAY-002", by: "u_cashier1" },
  { id: "cb4", cwsId: "nyungwe", date: "2025-03-10", type: "inflow", category: "Fund Transfer", description: "Opening funds from HQ", amount: 25e5, balance: 25e5, ref: "FT-002", by: "u_cashier2" },
  { id: "cb5", cwsId: "nyungwe", date: "2025-03-10", type: "outflow", category: "Cherry Payment", description: "Payments GNR-NYU-0001", amount: 84420, balance: 2415580, ref: "CH-PAY-003", by: "u_cashier2" },
  { id: "cb6", cwsId: "nyarubaka", date: "2025-03-10", type: "inflow", category: "Fund Transfer", description: "Opening funds from HQ", amount: 2e6, balance: 2e6, ref: "FT-003", by: "u_cashier3" }
];
const INIT_BANK = [
  { id: "bk1", cwsId: "musaza", date: "2025-03-01", type: "credit", description: "HQ bank transfer to station account", amount: 5e6, balance: 5e6, ref: "BK-IN-001", by: "u_hqfin" },
  { id: "bk2", cwsId: "musaza", date: "2025-03-05", type: "debit", description: "Withdrawal for operational cash", amount: 3e6, balance: 2e6, ref: "BK-OUT-001", by: "u_hqfin" },
  { id: "bk3", cwsId: "nyungwe", date: "2025-03-01", type: "credit", description: "HQ bank transfer", amount: 4e6, balance: 4e6, ref: "BK-IN-002", by: "u_hqfin" }
];
const INIT_EXPENSES = [
  { id: "ex1", cwsId: "musaza", date: "2025-03-10", category: "Wages", description: "Daily casual workers - 12 pax", amount: 84e3, exploitable: true, status: "approved", by: "u_mgr1" },
  { id: "ex2", cwsId: "musaza", date: "2025-03-10", category: "Energy", description: "Fuel for pulping machine", amount: 45e3, exploitable: true, status: "approved", by: "u_mgr1" },
  { id: "ex3", cwsId: "musaza", date: "2025-03-11", category: "Packaging", description: "GrainPro bags x50", amount: 62500, exploitable: true, status: "approved", by: "u_mgr1" },
  { id: "ex4", cwsId: "musaza", date: "2025-03-11", category: "Bank Charges", description: "Mobile money transfer fees", amount: 3200, exploitable: false, status: "approved", by: "u_mgr1" },
  { id: "ex5", cwsId: "nyungwe", date: "2025-03-10", category: "Wages", description: "Daily workers - 10 pax", amount: 7e4, exploitable: true, status: "approved", by: "u_mgr2" },
  { id: "ex6", cwsId: "nyungwe", date: "2025-03-10", category: "Energy", description: "Diesel generator", amount: 38e3, exploitable: true, status: "approved", by: "u_mgr2" },
  { id: "ex7", cwsId: "nyarubaka", date: "2025-03-10", category: "Wages", description: "Daily workers - 8 pax", amount: 56e3, exploitable: true, status: "approved", by: "u_mgr3" },
  { id: "ex8", cwsId: "nyarubaka", date: "2025-03-10", category: "Transport", description: "Cherry collection truck", amount: 28e3, exploitable: true, status: "approved", by: "u_mgr3" }
];
const INIT_DEBTS = [
  { id: "dt1", cwsId: "musaza", date: "2025-02-15", type: "debt_given", party: "Jean Bosco Nshimiyimana", description: "Input loan \u2014 fertiliser", amount: 5e4, balance: 5e4, status: "outstanding" },
  { id: "dt2", cwsId: "musaza", date: "2025-01-20", type: "debt_to_others", party: "Agro Supplies Kigali", description: "Pending payment for bags", amount: 12e4, balance: 8e4, status: "partial" },
  { id: "dt3", cwsId: "nyungwe", date: "2025-02-10", type: "debt_given", party: "Alphonsine Uwamariya", description: "Input loan \u2014 seedlings", amount: 3e4, balance: 3e4, status: "outstanding" }
];
const INIT_STOCK = [
  { id: "sk1", cwsId: "musaza", date: "2025-03-11", description: "Parchment coffee - dry mill ready", grade: "Parchment", tonnesIn: 2.1, tonnesOut: 0, tonnesBalance: 2.1, unitCost: 1800, totalValue: 378e4, valuationMethod: "weighted_avg" },
  { id: "sk2", cwsId: "nyungwe", date: "2025-03-11", description: "Parchment coffee batch", grade: "Parchment", tonnesIn: 1.8, tonnesOut: 0, tonnesBalance: 1.8, unitCost: 1750, totalValue: 315e4, valuationMethod: "weighted_avg" },
  { id: "sk3", cwsId: "nyarubaka", date: "2025-03-12", description: "Parchment batch A", grade: "Parchment", tonnesIn: 1.5, tonnesOut: 0, tonnesBalance: 1.5, unitCost: 1700, totalValue: 255e4, valuationMethod: "weighted_avg" }
];
const INIT_FUND_REQUESTS = [
  { id: "fr1", cwsId: "musaza", requestedBy: "u_mgr1", amount: 2e6, reason: "Week 2 cherry purchase payments", status: "approved", requestedAt: "2025-03-12 08:00", verifiedBy: "u_hqop", verifiedAt: "2025-03-12 09:30", approvedBy: "u_md", approvedAt: "2025-03-12 10:15", transferMethod: "bank_transfer", transferRef: "FT-W2-001", notes: "" },
  { id: "fr2", cwsId: "nyungwe", requestedBy: "u_mgr2", amount: 15e5, reason: "Week 2 payments + wages", status: "pending_verification", requestedAt: "2025-03-13 07:45", verifiedBy: null, verifiedAt: null, approvedBy: null, approvedAt: null, transferMethod: null, transferRef: null, notes: "" },
  { id: "fr3", cwsId: "nyarubaka", requestedBy: "u_mgr3", amount: 12e5, reason: "Cherry purchases week 2", status: "pending_verification", requestedAt: "2025-03-13 08:30", verifiedBy: null, verifiedAt: null, approvedBy: null, approvedAt: null, transferMethod: null, transferRef: null, notes: "" }
];
const INIT_MACHINES = [
  { id: "m1", name: "Excavator CAT 320", type: "Excavator", plate: "RAC 001A", status: "available", driverId: "u_drv1", assistantId: "a1" },
  { id: "m2", name: "Bulldozer D6", type: "Bulldozer", plate: "RAC 002B", status: "on_task", driverId: "u_drv2", assistantId: "a2" },
  { id: "m3", name: "Tower Crane 30T", type: "Crane", plate: "RAC 003C", status: "maintenance", driverId: null, assistantId: null }
];
const INIT_ASSISTANTS = [
  { id: "a1", name: "Emmanuel Hakizimana", machineId: "m1", phone: "+250788001001" },
  { id: "a2", name: "Celestin Niyonzima", machineId: "m2", phone: "+250788001002" }
];
const INIT_TASKS = [
  { id: "t1", machineId: "m2", customer: "RSSB", province: "Kigali", district: "Gasabo", sector: "Kimironko", cell: "Bibare", village: "Amahoro", startDate: "2025-03-01", endDate: "2025-03-31", hourlyRate: 45e3, status: "active", totalHours: 120, notes: "Foundation excavation" }
];
const INIT_MACH_TX = [
  { id: "mt1", machineId: "m1", date: "2025-03-01", type: "income", category: "Rental Income", amount: 18e5, desc: "CAT320 RSSB 30d", status: "synced" },
  { id: "mt2", machineId: "m2", date: "2025-03-01", type: "income", category: "Rental Income", amount: 12e5, desc: "D6 Gasabo 20d", status: "synced" },
  { id: "mt3", machineId: "m1", date: "2025-03-05", type: "expense", category: "Maintenance", amount: 24e4, desc: "Engine service", status: "synced" }
];
const INIT_DRIVER_LOGS = [
  { id: "dl1", driverId: "u_drv1", machineId: "m1", date: "2025-03-10", hours: 8, fuelReceived: 120, taskLocation: "Gasabo, Kimironko", condition: "good", comments: "Normal operation", status: "submitted" },
  { id: "dl2", driverId: "u_drv2", machineId: "m2", date: "2025-03-10", hours: 9, fuelReceived: 150, taskLocation: "Nyarugenge, Kiyovu", condition: "good", comments: "Minor hydraulic noise", status: "submitted" }
];
const INIT_LEAVES = [
  { id: "lv1", driverId: "u_drv1", type: "off_day", date: "2025-03-15", reason: "Family commitment", status: "pending" }
];
const INIT_SEASONS = [
  { id: "s1", name: "Season 2024-2025", startDate: "2024-10-01", endDate: "2025-06-30", rateStandard: 155, rateFlotant: 80, status: "active", createdBy: "u2", createdAt: "2024-09-15", closedAt: null, notes: "Main arabica season" },
  { id: "s2", name: "Season 2023-2024", startDate: "2023-10-01", endDate: "2024-06-30", rateStandard: 148, rateFlotant: 75, status: "closed", createdBy: "u2", createdAt: "2023-09-10", closedAt: "2024-07-02", notes: "" }
];
const INIT_STATION_SEASONS = [
  { id: "ss1", seasonId: "s1", cwsId: "musaza", startDate: "2024-10-05", endDate: null, status: "active" },
  { id: "ss2", seasonId: "s1", cwsId: "nyungwe", startDate: "2024-10-10", endDate: null, status: "active" },
  { id: "ss3", seasonId: "s1", cwsId: "nyarubaka", startDate: "2024-10-15", endDate: null, status: "active" },
  { id: "ss4", seasonId: "s2", cwsId: "musaza", startDate: "2023-10-06", endDate: "2024-06-28", status: "closed" },
  { id: "ss5", seasonId: "s2", cwsId: "nyungwe", startDate: "2023-10-12", endDate: "2024-06-25", status: "closed" }
];
const INIT_WAREHOUSE_STOCK = [
  { id: "wh1", fromCwsId: "musaza", sentBy: "u_mgr1", date: "2025-03-12", grade: "Parchment", tonnes: 2.1, lotNumber: "LOT-MSZ-001", gnrRefs: "GNR-MSZ-0001,GNR-MSZ-0002", transportDetails: "Company truck RAC 100A", status: "confirmed", confirmedBy: "u_hqop", confirmedAt: "2025-03-12 14:30", notes: "First batch of season" },
  { id: "wh2", fromCwsId: "nyungwe", sentBy: "u_mgr2", date: "2025-03-12", grade: "Parchment", tonnes: 1.8, lotNumber: "LOT-NYU-001", gnrRefs: "GNR-NYU-0001", transportDetails: "Company truck RAC 101B", status: "pending", confirmedBy: null, confirmedAt: null, notes: "" }
];
const INIT_PROJECTS = [
  { id: "p1", name: "Kigali Office Renovation", client: "Internal", budget: 15e6, startDate: "2025-02-01", endDate: "2025-05-31", status: "active", description: "Renovation of HQ offices in Kigali", createdBy: "u2" },
  { id: "p2", name: "Nyungwe Access Road", client: "Rwanda Roads Authority", budget: 8e7, startDate: "2025-04-01", endDate: "2025-12-31", status: "planning", description: "Construction of 12km access road to Nyungwe CWS", createdBy: "u2" }
];
const INIT_PROJECT_COSTS = [
  { id: "pc1", projectId: "p1", date: "2025-02-10", category: "Materials", description: "Cement and tiles \u2014 200 bags", amount: 32e5, by: "u3" },
  { id: "pc2", projectId: "p1", date: "2025-02-15", category: "Labor", description: "Construction team \u2014 week 2", amount: 18e5, by: "u3" },
  { id: "pc3", projectId: "p1", date: "2025-03-01", category: "Materials", description: "Paint and fittings", amount: 85e4, by: "u3" }
];
const INIT_MILESTONES = [
  { id: "m1", projectId: "p1", title: "Foundation & Demolition", targetDate: "2025-02-28", completedDate: "2025-02-26", status: "completed" },
  { id: "m2", projectId: "p1", title: "Structural Work", targetDate: "2025-03-31", completedDate: null, status: "in_progress" },
  { id: "m3", projectId: "p1", title: "Finishing & Handover", targetDate: "2025-05-31", completedDate: null, status: "pending" }
];
const INIT_CONTRACTORS = [
  { id: "con1", projectId: "p1", name: "Kigali Build Co.", role: "Main Contractor", phone: "+250788500001", contractValue: 8e6, status: "active" }
];
const INIT_USERS = [
  // HQ
  { id: "u1", name: "Jean Pierre Habimana", email: "sudo@bender.rw", password: "sudo123", role: "sudo", cwsAccess: [], machineId: null, avatar: "JP", createdAt: "2024-01-01", active: true },
  { id: "u2", name: "Marie Claire Uwimana", email: "md@bender.rw", password: "md123", role: "md", cwsAccess: [], machineId: null, avatar: "MC", createdAt: "2024-01-01", active: true },
  { id: "u3", name: "Patrick Nzabonimpa", email: "admin@bender.rw", password: "admin123", role: "admin", cwsAccess: [], machineId: null, avatar: "PN", createdAt: "2024-01-10", active: true },
  { id: "u_hqfin", name: "Grace Ingabire", email: "hqfin@bender.rw", password: "fin123", role: "hq_finance", cwsAccess: [], machineId: null, avatar: "GI", createdAt: "2024-01-10", active: true },
  { id: "u_hqacc", name: "Claudine Umuhoza", email: "hqacc@bender.rw", password: "hqacc123", role: "hq_accountant", cwsAccess: [], machineId: null, avatar: "CU", createdAt: "2024-02-10", active: true },
  { id: "u_hqop", name: "Samuel Bizimana", email: "hqop@bender.rw", password: "hqop123", role: "hq_ops", cwsAccess: [], machineId: null, avatar: "SB", createdAt: "2024-02-01", active: true },
  // Station Managers
  { id: "u_mgr1", name: "Alice Mutesi", email: "mgr.musaza@bender.rw", password: "mgr123", role: "station_manager", cwsAccess: ["musaza"], machineId: null, avatar: "AM", createdAt: "2024-01-15", active: true },
  { id: "u_mgr2", name: "Robert Nkusi", email: "mgr.nyungwe@bender.rw", password: "mgr123", role: "station_manager", cwsAccess: ["nyungwe"], machineId: null, avatar: "RN", createdAt: "2024-01-15", active: true },
  { id: "u_mgr3", name: "Eric Habimana", email: "mgr.nyarubaka@bender.rw", password: "mgr123", role: "station_manager", cwsAccess: ["nyarubaka"], machineId: null, avatar: "EH", createdAt: "2024-01-15", active: true },
  // Cashiers
  { id: "u_cashier1", name: "Diane Uwase", email: "cash.musaza@bender.rw", password: "cash123", role: "cashier", cwsAccess: ["musaza"], machineId: null, avatar: "DU", createdAt: "2024-02-01", active: true },
  { id: "u_cashier2", name: "Sandrine Mukamana", email: "cash.nyungwe@bender.rw", password: "cash123", role: "cashier", cwsAccess: ["nyungwe"], machineId: null, avatar: "SM", createdAt: "2024-02-01", active: true },
  { id: "u_cashier3", name: "Thierry Nkurunziza", email: "cash.nyarubaka@bender.rw", password: "cash123", role: "cashier", cwsAccess: ["nyarubaka"], machineId: null, avatar: "TN", createdAt: "2024-02-01", active: true },
  // Clerks
  { id: "u_clerk1", name: "Celestin Hategeka", email: "clerk.musaza@bender.rw", password: "clerk123", role: "clerk", cwsAccess: ["musaza"], machineId: null, avatar: "CH", createdAt: "2024-02-15", active: true },
  { id: "u_clerk2", name: "Yvonne Uwera", email: "clerk.nyungwe@bender.rw", password: "clerk123", role: "clerk", cwsAccess: ["nyungwe"], machineId: null, avatar: "YU", createdAt: "2024-02-15", active: true },
  { id: "u_clerk3", name: "Pacifique Nkurunziza", email: "clerk.nyarubaka@bender.rw", password: "clerk123", role: "clerk", cwsAccess: ["nyarubaka"], machineId: null, avatar: "PK", createdAt: "2024-02-15", active: true },
  // Drivers
  { id: "u_drv1", name: "Claude Niyomugabo", email: "driver1@bender.rw", password: "drv123", role: "driver", cwsAccess: [], machineId: "m1", avatar: "CN", createdAt: "2024-03-01", active: true },
  { id: "u_drv2", name: "Th\xE9ophile Gasana", email: "driver2@bender.rw", password: "drv123", role: "driver", cwsAccess: [], machineId: "m2", avatar: "TG", createdAt: "2024-03-01", active: true }
];
const INIT_PENDING = [];
const INIT_SYSTEM = {
  logoUrl: null,
  heroImageUrl: "",
  companyName: "Bender Exports Ltd.",
  tagline: "Integrated Financial Management \xB7 Kigali, Rwanda",
  labels: { coffee: "Bender Coffee", machinery: "Bender Machine", construction: "Bender Construction" },
  businessModels: [
    { id: "coffee", label: "Bender Coffee", icon: "\u2615", active: true },
    { id: "machinery", label: "Bender Machine", icon: "\u{1F3D7}\uFE0F", active: true },
    { id: "construction", label: "Bender Construction", icon: "\u{1F3DB}\uFE0F", active: true }
  ]
};
const ROLES = {
  sudo: { label: "Super Admin", color: C.purple, light: C.purpleLight, priority: 10 },
  md: { label: "Managing Director", color: C.gold, light: C.goldLight, priority: 9 },
  admin: { label: "Administrator", color: C.info, light: "#68A8E8", priority: 8 },
  hq_finance: { label: "HQ Finance Officer", color: C.warning, light: C.warningLight, priority: 7 },
  hq_accountant: { label: "HQ Accountant", color: "#5A8A6A", light: "#7ABAA0", priority: 7 },
  hq_ops: { label: "HQ Ops Manager", color: "#7A5AC8", light: "#9A7AE8", priority: 6 },
  station_manager: { label: "Station Manager", color: C.coffee, light: C.coffeeLight, priority: 5 },
  cashier: { label: "Cashier", color: C.success, light: "#78D890", priority: 4 },
  clerk: { label: "Clerk", color: "#7AAABB", light: "#9ACADB", priority: 3 },
  driver: { label: "Driver", color: C.machinery, light: C.machineryLight, priority: 2 }
};
const HQ_ROLES = ["sudo", "md", "admin", "hq_finance", "hq_accountant", "hq_ops"];
const WAREHOUSE_ROLES = ["sudo", "md", "admin", "hq_finance", "hq_accountant", "hq_ops"];
const STATION_ROLES = ["station_manager", "cashier", "clerk"];
const hasAccess = (u, sec) => {
  const map = {
    coffee: ["sudo", "md", "admin", "hq_finance", "hq_accountant", "hq_ops", "station_manager", "cashier", "clerk"],
    machinery: ["sudo", "md", "admin", "hq_finance", "hq_accountant", "hq_ops", "driver"],
    construction: ["sudo", "md", "admin", "hq_finance", "hq_accountant", "hq_ops"],
    warehouse: ["sudo", "md", "admin", "hq_finance", "hq_accountant", "hq_ops", "station_manager"],
    users: ["sudo", "md"],
    system: ["sudo"],
    reports: ["sudo", "md", "admin", "hq_finance", "hq_accountant", "hq_ops", "station_manager", "cashier"],
    driver_log: ["driver"],
    fund_requests: ["sudo", "md", "admin", "hq_finance", "hq_accountant", "hq_ops", "station_manager"]
  };
  return (map[sec] || []).includes(u.role);
};
const canApproveFunds = (r) => ["sudo", "md"].includes(r);
const canVerifyFunds = (r) => ["sudo", "md", "hq_ops"].includes(r);
const canManageCash = (r) => ["sudo", "md", "hq_finance", "cashier"].includes(r);
const canEnterCherry = (r) => ["clerk", "sudo", "md", "admin"].includes(r);
const canPayGNR = (r) => ["cashier", "sudo", "md", "admin"].includes(r);
const canRecordExpense = (r) => ["cashier", "sudo", "md", "admin", "hq_finance"].includes(r);
const canApproveExpense = (r) => ["station_manager", "sudo", "md", "admin", "hq_finance"].includes(r);
const canRegisterFarmer = (r) => ["station_manager", "sudo", "md", "admin"].includes(r);
const canRequestFunds = (r) => ["station_manager", "sudo", "md", "admin"].includes(r);
const canManageSeason = (r) => ["md", "sudo"].includes(r);
const canSeeSeasonReports = (r) => ["sudo", "md", "admin", "hq_finance", "hq_accountant", "hq_ops", "station_manager"].includes(r);
const canSendToWarehouse = (r) => ["station_manager", "sudo", "md", "admin"].includes(r);
const canConfirmWarehouse = (r) => ["sudo", "md", "admin", "hq_finance", "hq_accountant", "hq_ops"].includes(r);
const canManageConstruction = (r) => ["sudo", "md", "admin", "hq_finance", "hq_ops"].includes(r);
const canSeeAllStations = (r) => HQ_ROLES.includes(r) || ["admin"].includes(r);
const fmtRWF = (n) => `${Number(n || 0).toLocaleString()} RWF`;
const fmtKg = (n) => `${Number(n || 0).toLocaleString()} kg`;
const today = () => (/* @__PURE__ */ new Date()).toISOString().split("T")[0];
const BtnS = (color, ghost = false, outline = false) => ({ display: "inline-flex", alignItems: "center", gap: 5, border: outline ? `1px solid ${color}40` : "none", borderRadius: 7, cursor: "pointer", fontWeight: 600, fontFamily: "'Syne',sans-serif", transition: "all .15s", ...ghost ? { background: `${color}18`, color, border: `1px solid ${color}30` } : outline ? { background: "transparent", color } : { background: color, color: C.bg } });
const selS = () => ({ width: "100%", padding: "9px 13px", background: C.bg, border: `1.5px solid ${C.border}`, borderRadius: 8, color: C.text, fontSize: 13, outline: "none" });
const EXPENSE_CATS = ["Wages", "Energy", "Travelling", "Packaging", "Communication", "Materials", "Bank Charges", "Donations", "Rent", "Transport", "Legal Fees", "Other"];
const PAYMENT_METHODS = ["cash", "mobile_money", "bank_transfer", "cheque"];
const TABLES = [
  "cws",
  "farmers",
  "cherry",
  "cashbook",
  "bank",
  "expenses",
  "debts",
  "stock",
  "fund_requests",
  "warehouse",
  "projects",
  "project_costs",
  "milestones",
  "contractors",
  "machines",
  "assistants",
  "tasks",
  "mach_tx",
  "driver_logs",
  "leaves",
  "seasons",
  "station_seasons",
  "users",
  "system"
];

// ── Browser persistence (offline DB) ──────────────────────────────────
// The app stores its working state via `window.storage` (used by DB.load/save).
// Earlier builds referenced `window.storage` but didn't define it, so writes
// were silently dropped (caught by try/catch).
(function initBrowserStorage() {
  if (typeof window === "undefined") return;
  if (window.storage && typeof window.storage.get === "function") return;

  const DB_NAME = "bender-storage-v1";
  const STORE = "kv";
  const VERSION = 1;

  function openDB() {
    return new Promise((resolve, reject) => {
      const req = indexedDB.open(DB_NAME, VERSION);
      req.onupgradeneeded = () => {
        const db = req.result;
        if (!db.objectStoreNames.contains(STORE)) {
          db.createObjectStore(STORE, { keyPath: "key" });
        }
      };
      req.onsuccess = () => resolve(req.result);
      req.onerror = () => reject(req.error);
    });
  }

  async function getItem(key) {
    const db = await openDB();
    return new Promise((resolve, reject) => {
      const tx = db.transaction(STORE, "readonly");
      const store = tx.objectStore(STORE);
      const r = store.get(key);
      r.onsuccess = () => resolve(r.result || null);
      r.onerror = () => reject(r.error);
    });
  }

  async function setItem(key, value) {
    const db = await openDB();
    return new Promise((resolve, reject) => {
      const tx = db.transaction(STORE, "readwrite");
      const store = tx.objectStore(STORE);
      const r = store.put({ key, value });
      r.onsuccess = () => resolve(true);
      r.onerror = () => reject(r.error);
    });
  }

  async function delItem(key) {
    const db = await openDB();
    return new Promise((resolve, reject) => {
      const tx = db.transaction(STORE, "readwrite");
      const store = tx.objectStore(STORE);
      const r = store.delete(key);
      r.onsuccess = () => resolve(true);
      r.onerror = () => reject(r.error);
    });
  }

  window.storage = { get: getItem, set: setItem, delete: delItem };
})();

const BENDER_TOKEN_KEY = "bender:access_token";

function getAccessToken() {
  try {
    if (window.__benderAccessToken) return window.__benderAccessToken;
    return localStorage.getItem(BENDER_TOKEN_KEY);
  } catch (e) {
    return window.__benderAccessToken || null;
  }
}

function setAccessToken(token) {
  try {
    window.__benderAccessToken = token;
    if (token) localStorage.setItem(BENDER_TOKEN_KEY, token);
    else localStorage.removeItem(BENDER_TOKEN_KEY);
  } catch (e) {
    window.__benderAccessToken = token;
  }
}

function num(v) {
  if (v === null || v === void 0) return v;
  if (typeof v === "number") return v;
  const n = Number(v);
  return Number.isNaN(n) ? v : n;
}

function toBackendTable(tableKey) {
  // Frontend uses a few shorter keys; backend tables follow migration.sql.
  if (tableKey === "bank") return "bank_transactions";
  if (tableKey === "warehouse") return "warehouse_stock";
  return tableKey;
}

function toBackendRecord(tableKey, rec) {
  // IMPORTANT: server expects snake_case columns matching supabase_migration.sql.
  // We only send known columns to avoid PostgREST "column does not exist" errors.
  switch (tableKey) {
    case "cws":
      return { id: rec.id, name: rec.name, region: rec.region, image: rec.image };
    case "farmers":
      return {
        id: rec.id, cws_id: rec.cwsId, name: rec.name, farmer_id: rec.farmerId, grp: rec.group,
        balance: rec.balance, phone: rec.phone, active: rec.active
      };
    case "seasons":
      return {
        id: rec.id, name: rec.name, start_date: rec.startDate, end_date: rec.endDate,
        rate_standard: rec.rateStandard, rate_flotant: rec.rateFlotant, status: rec.status,
        created_by: rec.createdBy, notes: rec.notes, closed_at: rec.closedAt
      };
    case "station_seasons":
      return {
        id: rec.id, season_id: rec.seasonId, cws_id: rec.cwsId,
        start_date: rec.startDate, end_date: rec.endDate, status: rec.status
      };
    case "cherry":
      return {
        id: rec.id, cws_id: rec.cwsId, farmer_id: rec.farmerId, date: rec.date,
        gnr_number: rec.gnrNumber, standard_kg: rec.standardKg, flotant_kg: rec.flotantKg, total_kg: rec.totalKg,
        rate_standard: rec.rateStandard, rate_flotant: rec.rateFlotant,
        payment_standard: rec.paymentStandard, payment_flotant: rec.paymentFlotant,
        total_paid: rec.totalPaid, avg_rate: rec.avgRate, payment_method: rec.paymentMethod,
        status: rec.status, by_user: rec.by, paid_by: rec.paidBy, paid_at: rec.paidAt, notes: rec.notes
      };
    case "cashbook":
      return {
        id: rec.id, cws_id: rec.cwsId, date: rec.date, type: rec.type, category: rec.category,
        description: rec.description, amount: rec.amount, balance: rec.balance, ref: rec.ref, by_user: rec.by
      };
    case "bank":
      return {
        id: rec.id, cws_id: rec.cwsId, date: rec.date, type: rec.type,
        description: rec.description, amount: rec.amount, balance: rec.balance, ref: rec.ref, by_user: rec.by
      };
    case "expenses":
      return {
        id: rec.id, cws_id: rec.cwsId, date: rec.date, category: rec.category, description: rec.description,
        amount: rec.amount, capitalizable: rec.exploitable, status: rec.status, by_user: rec.by
      };
    case "debts":
      return {
        id: rec.id, cws_id: rec.cwsId, date: rec.date, type: rec.type, party: rec.party,
        description: rec.description, amount: rec.amount, balance: rec.balance, status: rec.status
      };
    case "stock":
      return {
        id: rec.id, cws_id: rec.cwsId, date: rec.date, description: rec.description, grade: rec.grade,
        tonnes_in: rec.tonnesIn, tonnes_out: rec.tonnesOut, tonnes_balance: rec.tonnesBalance,
        unit_cost: rec.unitCost, total_value: rec.totalValue, valuation_method: rec.valuationMethod
      };
    case "fund_requests":
      return {
        id: rec.id, cws_id: rec.cwsId, requested_by: rec.requestedBy,
        amount: rec.amount, reason: rec.reason, status: rec.status,
        requested_at: rec.requestedAt, verified_by: rec.verifiedBy, verified_at: rec.verifiedAt,
        approved_by: rec.approvedBy, approved_at: rec.approvedAt,
        transfer_method: rec.transferMethod, transfer_ref: rec.transferRef, notes: rec.notes
      };
    case "warehouse":
      return {
        id: rec.id, from_cws_id: rec.fromCwsId, sent_by: rec.sentBy, date: rec.date, grade: rec.grade,
        tonnes: rec.tonnes, lot_number: rec.lotNumber, gnr_refs: rec.gnrRefs,
        transport_details: rec.transportDetails, status: rec.status,
        confirmed_by: rec.confirmedBy, confirmed_at: rec.confirmedAt, notes: rec.notes
      };
    case "projects":
      return {
        id: rec.id, name: rec.name, client: rec.client, budget: rec.budget,
        start_date: rec.startDate, end_date: rec.endDate, status: rec.status,
        description: rec.description, created_by: rec.createdBy
      };
    case "project_costs":
      return {
        id: rec.id, project_id: rec.projectId, date: rec.date, category: rec.category,
        description: rec.description, amount: rec.amount, by_user: rec.by
      };
    case "milestones":
      return {
        id: rec.id, project_id: rec.projectId, title: rec.title,
        target_date: rec.targetDate, completed_date: rec.completedDate, status: rec.status
      };
    case "contractors":
      return {
        id: rec.id, project_id: rec.projectId, name: rec.name, role: rec.role,
        phone: rec.phone, contract_value: rec.contractValue, status: rec.status
      };
    case "machines":
      return {
        id: rec.id, name: rec.name, type: rec.type, plate: rec.plate, status: rec.status,
        driver_id: rec.driverId, assistant_id: rec.assistantId
      };
    case "assistants":
      return {
        id: rec.id, name: rec.name, machine_id: rec.machineId, phone: rec.phone
      };
    case "tasks":
      return {
        id: rec.id, machine_id: rec.machineId,
        customer: rec.customer, province: rec.province, district: rec.district, sector: rec.sector,
        cell: rec.cell, village: rec.village,
        start_date: rec.startDate, end_date: rec.endDate, hourly_rate: rec.hourlyRate,
        status: rec.status, total_hours: rec.totalHours, notes: rec.notes
      };
    case "mach_tx":
      return {
        id: rec.id, machine_id: rec.machineId, date: rec.date, type: rec.type, category: rec.category,
        amount: rec.amount, description: rec.desc, status: rec.status
      };
    case "driver_logs":
      return {
        id: rec.id, driver_id: rec.driverId, machine_id: rec.machineId, date: rec.date,
        hours: rec.hours, fuel_received: rec.fuelReceived, task_location: rec.taskLocation,
        condition: rec.condition, comments: rec.comments, status: rec.status
      };
    case "leaves":
      return {
        id: rec.id, driver_id: rec.driverId, type: rec.type, date: rec.date, reason: rec.reason, status: rec.status
      };
    default:
      return null;
  }
}

function fromBackendRecord(tableKey, row) {
  // Convert snake_case columns into the camelCase shapes the UI expects.
  switch (tableKey) {
    case "cws":
      return { id: row.id, name: row.name, region: row.region, image: row.image };
    case "farmers":
      return {
        id: row.id, cwsId: row.cws_id, name: row.name, farmerId: row.farmer_id,
        group: row.grp, balance: num(row.balance), phone: row.phone, active: row.active,
        createdAt: row.created_at, updatedAt: row.updated_at
      };
    case "seasons":
      return {
        id: row.id, name: row.name, startDate: row.start_date, endDate: row.end_date,
        rateStandard: row.rate_standard, rateFlotant: row.rate_flotant, status: row.status,
        createdBy: row.created_by, notes: row.notes, closedAt: row.closed_at,
        createdAt: row.created_at, updatedAt: row.updated_at
      };
    case "station_seasons":
      return {
        id: row.id, seasonId: row.season_id, cwsId: row.cws_id, startDate: row.start_date,
        endDate: row.end_date, status: row.status, updatedAt: row.updated_at
      };
    case "cherry":
      return {
        id: row.id, cwsId: row.cws_id, farmerId: row.farmer_id, date: row.date,
        gnrNumber: row.gnr_number, standardKg: num(row.standard_kg), flotantKg: num(row.flotant_kg), totalKg: num(row.total_kg),
        rateStandard: num(row.rate_standard), rateFlotant: num(row.rate_flotant),
        paymentStandard: num(row.payment_standard), paymentFlotant: num(row.payment_flotant),
        totalPaid: num(row.total_paid), avgRate: num(row.avg_rate), paymentMethod: row.payment_method,
        status: row.status, by: row.by_user, paidBy: row.paid_by, paidAt: row.paid_at, notes: row.notes
      };
    case "cashbook":
      return {
        id: row.id, cwsId: row.cws_id, date: row.date, type: row.type, category: row.category,
        description: row.description, amount: num(row.amount), balance: num(row.balance), ref: row.ref, by: row.by_user,
        createdAt: row.created_at, updatedAt: row.updated_at
      };
    case "bank":
      return {
        id: row.id, cwsId: row.cws_id, date: row.date, type: row.type,
        description: row.description, amount: num(row.amount), balance: num(row.balance), ref: row.ref, by: row.by_user,
        updatedAt: row.updated_at
      };
    case "expenses":
      return {
        id: row.id, cwsId: row.cws_id, date: row.date, category: row.category, description: row.description,
        amount: num(row.amount), exploitable: row.capitalizable, status: row.status, by: row.by_user,
        updatedAt: row.updated_at
      };
    case "debts":
      return {
        id: row.id, cwsId: row.cws_id, date: row.date, type: row.type, party: row.party,
        description: row.description, amount: num(row.amount), balance: num(row.balance), status: row.status,
        updatedAt: row.updated_at
      };
    case "stock":
      return {
        id: row.id, cwsId: row.cws_id, date: row.date, description: row.description, grade: row.grade,
        tonnesIn: num(row.tonnes_in), tonnesOut: num(row.tonnes_out), tonnesBalance: num(row.tonnes_balance),
        unitCost: num(row.unit_cost), totalValue: num(row.total_value), valuationMethod: row.valuation_method,
        updatedAt: row.updated_at
      };
    case "fund_requests":
      return {
        id: row.id, cwsId: row.cws_id, requestedBy: row.requested_by, amount: num(row.amount),
        reason: row.reason, status: row.status, requestedAt: row.requested_at,
        verifiedBy: row.verified_by, verifiedAt: row.verified_at,
        approvedBy: row.approved_by, approvedAt: row.approved_at,
        transferMethod: row.transfer_method, transferRef: row.transfer_ref, notes: row.notes,
        updatedAt: row.updated_at
      };
    case "warehouse":
      return {
        id: row.id, fromCwsId: row.from_cws_id, sentBy: row.sent_by, date: row.date,
        grade: row.grade, tonnes: num(row.tonnes), lotNumber: row.lot_number, gnrRefs: row.gnr_refs,
        transportDetails: row.transport_details, status: row.status,
        confirmedBy: row.confirmed_by, confirmedAt: row.confirmed_at, notes: row.notes,
        updatedAt: row.updated_at
      };
    case "projects":
      return {
        id: row.id, name: row.name, client: row.client, budget: num(row.budget),
        startDate: row.start_date, endDate: row.end_date, status: row.status,
        description: row.description, createdBy: row.created_by, updatedAt: row.updated_at
      };
    case "project_costs":
      return {
        id: row.id, projectId: row.project_id, date: row.date, category: row.category,
        description: row.description, amount: num(row.amount), by: row.by_user, updatedAt: row.updated_at
      };
    case "milestones":
      return {
        id: row.id, projectId: row.project_id, title: row.title,
        targetDate: row.target_date, completedDate: row.completed_date, status: row.status, updatedAt: row.updated_at
      };
    case "contractors":
      return {
        id: row.id, projectId: row.project_id, name: row.name, role: row.role,
        phone: row.phone, contractValue: num(row.contract_value), status: row.status, updatedAt: row.updated_at
      };
    case "machines":
      return {
        id: row.id, name: row.name, type: row.type, plate: row.plate, status: row.status,
        driverId: row.driver_id, assistantId: row.assistant_id, updatedAt: row.updated_at
      };
    case "assistants":
      return { id: row.id, name: row.name, machineId: row.machine_id, phone: row.phone, updatedAt: row.updated_at };
    case "tasks":
      return {
        id: row.id, machineId: row.machine_id,
        customer: row.customer, province: row.province, district: row.district, sector: row.sector,
        cell: row.cell, village: row.village,
        startDate: row.start_date, endDate: row.end_date, hourlyRate: num(row.hourly_rate),
        status: row.status, totalHours: num(row.total_hours), notes: row.notes, updatedAt: row.updated_at
      };
    case "mach_tx":
      return { id: row.id, machineId: row.machine_id, date: row.date, type: row.type, category: row.category, amount: num(row.amount), desc: row.description, status: row.status, updatedAt: row.updated_at };
    case "driver_logs":
      return {
        id: row.id, driverId: row.driver_id, machineId: row.machine_id, date: row.date, hours: num(row.hours),
        fuelReceived: num(row.fuel_received), taskLocation: row.task_location, condition: row.condition,
        comments: row.comments, status: row.status, updatedAt: row.updated_at
      };
    case "leaves":
      return { id: row.id, driverId: row.driver_id, type: row.type, date: row.date, reason: row.reason, status: row.status, updatedAt: row.updated_at };
    default:
      return row;
  }
}

function fromBackendUser(u) {
  if (!u) return null;
  return {
    id: u.id,
    name: u.name,
    email: u.email,
    role: u.role,
    cwsAccess: u.cws_access,
    machineId: u.machine_id,
    avatar: u.avatar,
    active: u.active,
    createdAt: u.created_at,
    updatedAt: u.updated_at
  };
}

async function authFetch(url, opts = {}) {
  const token = getAccessToken();
  const headers = { ...(opts.headers || {}) };
  if (token) headers.Authorization = `Bearer ${token}`;
  headers["Content-Type"] = headers["Content-Type"] || "application/json";
  const res = await fetch(url, { ...opts, headers });
  return res;
}

const DB = {
  async load(tableKey) {
    const token = getAccessToken();
    if (token) {
      try {
        return await DB.loadRemote(tableKey);
      } catch (e) {
        console.warn("Remote load failed, falling back to local:", tableKey, e);
      }
    }
    try {
      const r = await window.storage.get("db:" + tableKey);
      return r ? JSON.parse(r.value) : null;
    } catch (e) {
      return null;
    }
  },
  async save(tableKey, data, prevData) {
    const token = getAccessToken();
    let remoteOk = false;
    if (token) {
      try {
        await DB.saveRemote(tableKey, data, prevData);
        remoteOk = true;
      } catch (e) {
        console.warn("Remote save failed, keeping local copy:", tableKey, e);
      }
    }
    try {
      await window.storage.set("db:" + tableKey, JSON.stringify(data));
    } catch (e) {
      console.error("DB local save error", tableKey, e);
    }
    return remoteOk;
  },
  async loadRemote(tableKey) {
    const token = getAccessToken();
    if (!token) return null;

    // Special endpoints (not part of the generic /api/<table> routes)
    if (tableKey === "system") {
      const res = await authFetch("/api/system", { method: "GET" });
      if (!res.ok) throw new Error("Failed loading system");
      const cfg = await res.json();
      return cfg && Object.keys(cfg).length ? cfg : INIT_SYSTEM;
    }
    if (tableKey === "users") {
      const res = await authFetch("/api/users", { method: "GET" });
      if (!res.ok) throw new Error("Failed loading users");
      const rows = await res.json();
      if (!Array.isArray(rows) || rows.length === 0) return INIT_USERS;
      return rows.map((r) => ({
        id: r.id,
        name: r.name,
        email: r.email,
        role: r.role,
        cwsAccess: r.cws_access,
        machineId: r.machine_id,
        avatar: r.avatar,
        active: r.active,
        createdAt: r.created_at,
        updatedAt: r.updated_at
      }));
    }

    const backendTable = toBackendTable(tableKey);
    const route = "/api/" + backendTable.replace(/_/g, "-");
    const res = await authFetch(route, { method: "GET" });
    if (!res.ok) throw new Error(`Failed loading ${tableKey}`);
    const rows = await res.json();
    return rows.map((row) => fromBackendRecord(tableKey, row));
  },
  async saveRemote(tableKey, data, prevData) {
    const token = getAccessToken();
    if (!token) return;
    if (data === null || data === void 0) return;

    if (tableKey === "system") {
      // Server requires sudo role for system updates.
      const res = await authFetch("/api/system", { method: "PUT", body: JSON.stringify(data) });
      if (!res.ok) throw new Error("Failed saving system");
      return;
    }

    // Users: not wired for bulk sync (auth admin rules vary).
    // We still keep local persistence via DB.save() fallback.
    if (tableKey === "users") return;

    const backendTable = toBackendTable(tableKey);
    const rowsNew = Array.isArray(data) ? data : [];
    const rowsPrev = Array.isArray(prevData) ? prevData : [];

    // Delta-based sync:
    // - Most UI writes prepend a new record (length + 1).
    // - Using full arrays can trigger unique conflicts and failure modes.
    // For adds/removes we upsert/delete only the changed record.
    let operations = [];

    if (rowsNew.length && rowsPrev.length && rowsNew.length === rowsPrev.length + 1) {
      const prevIds = new Set(rowsPrev.map((r) => r && r.id).filter(Boolean));
      const added = rowsNew.filter((r) => r && r.id && !prevIds.has(r.id));
      if (added.length === 1) {
        const mapped = toBackendRecord(tableKey, added[0]);
        if (mapped) operations = [{ table: backendTable, method: "POST", id: mapped.id, data: mapped }];
      }
    }

    if (!operations.length && rowsNew.length + 1 === rowsPrev.length) {
      // one removed: issue DELETE for removed id
      const newIds = new Set(rowsNew.map((r) => r && r.id).filter(Boolean));
      const removed = rowsPrev.filter((r) => r && r.id && !newIds.has(r.id));
      if (removed.length === 1) {
        operations = [{ table: backendTable, method: "DELETE", id: removed[0].id, data: null }];
      }
    }

    // Fallback: upsert all rows (previous behavior)
    if (!operations.length) {
      operations = rowsNew.map((rec) => {
        const mapped = toBackendRecord(tableKey, rec);
        if (!mapped) return null;
        return { table: backendTable, method: "POST", id: mapped.id, data: mapped };
      }).filter(Boolean);
    }

    if (!operations.length) return;

    const res = await authFetch("/api/sync", {
      method: "POST",
      body: JSON.stringify({ operations })
    });
    if (!res.ok) {
      let text = null;
      try { text = await res.text(); } catch {}
      throw new Error("Failed saving via /api/sync: " + (text || ("status=" + res.status)));
    }
  },
  async loadAll() {
    const result = {};
    await Promise.all(TABLES.map(async (t) => {
      const d = await DB.load(t);
      if (d !== null) result[t] = d;
    }));
    return result;
  },
  async saveAll(state) {
    await Promise.all(TABLES.map(async (t) => {
      if (state[t] !== void 0) await DB.save(t, state[t]);
    }));
  },
  async isSeeded() {
    try {
      const r = await window.storage.get("db:seeded");
      return r && r.value === "true";
    } catch (e) {
      return false;
    }
  },
  async markSeeded() {
    try {
      await window.storage.set("db:seeded", "true");
    } catch (e) {
    }
  },
  async reset() {
    try {
      await Promise.all([...TABLES.map((t) => window.storage.delete("db:" + t)), window.storage.delete("db:seeded")]);
    } catch (e) {
    }
  }
};
function App() {
  const [dbReady, setDbReady] = useState(false);
  const [users, setUsersRaw] = useState(INIT_USERS);
  const [cwsList, setCwsListRaw] = useState(INIT_CWS);
  const [farmers2, setFarmersRaw] = useState(INIT_FARMERS);
  const [seasons, setSeasonsRaw] = useState(INIT_SEASONS);
  const [stationSeasons, setStationSeasonsRaw] = useState(INIT_STATION_SEASONS);
  const [cherry, setCherryRaw] = useState(INIT_CHERRY);
  const [cashbook, setCashbookRaw] = useState(INIT_CASHBOOK);
  const [bankTx, setBankTxRaw] = useState(INIT_BANK);
  const [expenses, setExpensesRaw] = useState(INIT_EXPENSES);
  const [debts, setDebtsRaw] = useState(INIT_DEBTS);
  const [stock, setStockRaw] = useState(INIT_STOCK);
  const [fundRequests, setFundRequestsRaw] = useState(INIT_FUND_REQUESTS);
  const [warehouseStock, setWarehouseStockRaw] = useState(INIT_WAREHOUSE_STOCK);
  const [projects, setProjectsRaw] = useState(INIT_PROJECTS);
  const [projectCosts, setProjectCostsRaw] = useState(INIT_PROJECT_COSTS);
  const [milestones, setMilestonesRaw] = useState(INIT_MILESTONES);
  const [contractors, setContractorsRaw] = useState(INIT_CONTRACTORS);
  const [machines, setMachinesRaw] = useState(INIT_MACHINES);
  const [assistants, setAssistantsRaw] = useState(INIT_ASSISTANTS);
  const [tasks, setTasksRaw] = useState(INIT_TASKS);
  const [machTx, setMachTxRaw] = useState(INIT_MACH_TX);
  const [driverLogs, setDriverLogsRaw] = useState(INIT_DRIVER_LOGS);
  const [leaves, setLeavesRaw] = useState(INIT_LEAVES);
  const [pending, setPendingRaw] = useState(INIT_PENDING);
  const [system, setSystemRaw] = useState(INIT_SYSTEM);
  const [currentUser, setCurrentUser] = useState(null);
  const [online, setOnline] = useState(true);
  const [notifications, setNotifications] = useState([
    { id: "n1", text: "Fund request from Nyungwe CWS awaiting verification", type: "fund", read: false, time: "08:30" },
    { id: "n2", text: "Fund request from Nyarubaka CWS awaiting verification", type: "fund", read: false, time: "08:45" },
    { id: "n3", text: "Warehouse shipment from Nyungwe awaiting confirmation", type: "warehouse", read: false, time: "09:00" }
  ]);
  const [page, setPage] = useState({ view: "home", sub: null });
  const mkSet = (raw, table) => (val) => {
    const next = typeof val === "function" ? val : () => val;
    raw((prev) => {
      const newVal = next(prev);
      DB.save(table, newVal, prev);
      return newVal;
    });
  };
  const setUsers = mkSet(setUsersRaw, "users");
  const setCwsList = mkSet(setCwsListRaw, "cws");
  const setFarmers = mkSet(setFarmersRaw, "farmers");
  const setSeasons = mkSet(setSeasonsRaw, "seasons");
  const setStationSeasons = mkSet(setStationSeasonsRaw, "station_seasons");
  const setCherry = mkSet(setCherryRaw, "cherry");
  const setCashbook = mkSet(setCashbookRaw, "cashbook");
  const setBankTx = mkSet(setBankTxRaw, "bank");
  const setExpenses = mkSet(setExpensesRaw, "expenses");
  const setDebts = mkSet(setDebtsRaw, "debts");
  const setStock = mkSet(setStockRaw, "stock");
  const setFundRequests = mkSet(setFundRequestsRaw, "fund_requests");
  const setWarehouseStock = mkSet(setWarehouseStockRaw, "warehouse");
  const setProjects = mkSet(setProjectsRaw, "projects");
  const setProjectCosts = mkSet(setProjectCostsRaw, "project_costs");
  const setMilestones = mkSet(setMilestonesRaw, "milestones");
  const setContractors = mkSet(setContractorsRaw, "contractors");
  const setMachines = mkSet(setMachinesRaw, "machines");
  const setAssistants = mkSet(setAssistantsRaw, "assistants");
  const setTasks = mkSet(setTasksRaw, "tasks");
  const setMachTx = mkSet(setMachTxRaw, "mach_tx");
  const setDriverLogs = mkSet(setDriverLogsRaw, "driver_logs");
  const setLeaves = mkSet(setLeavesRaw, "leaves");
  const setPending = mkSet(setPendingRaw, "pending");
  const setSystem = mkSet(setSystemRaw, "system");
  useEffect(() => {
    async function init() {
      try {
        let d = null;

        // 1) If token exists, try Supabase-first (backend) load.
        let me = null;
        const token = getAccessToken();
        if (token) {
          try {
            const res = await authFetch("/api/auth/me", { method: "GET" });
            if (res.ok) me = await res.json();
          } catch (e) {
          }
        }

        if (me) {
          window.dispatchEvent(new CustomEvent("bender:token", { detail: token }));
          setCurrentUser(fromBackendUser(me));
          d = await DB.loadAll();
        } else {
          // 2) Otherwise fallback to local IndexedDB seed/load.
          const seeded = await DB.isSeeded();
          if (seeded) d = await DB.loadAll();
          else {
            await DB.save("users", INIT_USERS);
            await DB.save("cws", INIT_CWS);
            await DB.save("farmers", INIT_FARMERS);
            await DB.save("seasons", INIT_SEASONS);
            await DB.save("station_seasons", INIT_STATION_SEASONS);
            await DB.save("cherry", INIT_CHERRY);
            await DB.save("cashbook", INIT_CASHBOOK);
            await DB.save("bank", INIT_BANK);
            await DB.save("expenses", INIT_EXPENSES);
            await DB.save("debts", INIT_DEBTS);
            await DB.save("stock", INIT_STOCK);
            await DB.save("fund_requests", INIT_FUND_REQUESTS);
            await DB.save("warehouse", INIT_WAREHOUSE_STOCK);
            await DB.save("projects", INIT_PROJECTS);
            await DB.save("project_costs", INIT_PROJECT_COSTS);
            await DB.save("milestones", INIT_MILESTONES);
            await DB.save("contractors", INIT_CONTRACTORS);
            await DB.save("machines", INIT_MACHINES);
            await DB.save("assistants", INIT_ASSISTANTS);
            await DB.save("tasks", INIT_TASKS);
            await DB.save("mach_tx", INIT_MACH_TX);
            await DB.save("driver_logs", INIT_DRIVER_LOGS);
            await DB.save("leaves", INIT_LEAVES);
            await DB.save("system", INIT_SYSTEM);
            await DB.markSeeded();
            d = await DB.loadAll();
          }
        }

        if (d) {
          if (d.users) setUsersRaw(d.users);
          if (d.cws) setCwsListRaw(d.cws);
          if (d.farmers) setFarmersRaw(d.farmers);
          if (d.seasons) setSeasonsRaw(d.seasons);
          if (d.station_seasons) setStationSeasonsRaw(d.station_seasons);
          if (d.cherry) setCherryRaw(d.cherry);
          if (d.cashbook) setCashbookRaw(d.cashbook);
          if (d.bank) setBankTxRaw(d.bank);
          if (d.expenses) setExpensesRaw(d.expenses);
          if (d.debts) setDebtsRaw(d.debts);
          if (d.stock) setStockRaw(d.stock);
          if (d.fund_requests) setFundRequestsRaw(d.fund_requests);
          if (d.warehouse) setWarehouseStockRaw(d.warehouse);
          if (d.projects) setProjectsRaw(d.projects);
          if (d.project_costs) setProjectCostsRaw(d.project_costs);
          if (d.milestones) setMilestonesRaw(d.milestones);
          if (d.contractors) setContractorsRaw(d.contractors);
          if (d.machines) setMachinesRaw(d.machines);
          if (d.assistants) setAssistantsRaw(d.assistants);
          if (d.tasks) setTasksRaw(d.tasks);
          if (d.mach_tx) setMachTxRaw(d.mach_tx);
          if (d.driver_logs) setDriverLogsRaw(d.driver_logs);
          if (d.leaves) setLeavesRaw(d.leaves);
          if (d.system) setSystemRaw(d.system);
        }
      } catch (e) {
        console.error("DB init error", e);
      }
      setDbReady(true);
    }
    init();
  }, []);
  const addNote = (text, type = "info") => setNotifications((p) => [{ id: Date.now(), text, type, read: false, time: (/* @__PURE__ */ new Date()).toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }) }, ...p]);
  const login = async (email, password) => {
    try {
      const res = await fetch("/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password })
      });
      if (!res.ok) return null;
      const data = await res.json();
      if (!data?.token || !data?.user) return null;

      setAccessToken(data.token);
      // Inform SW (if registered) about the auth token so it can replay offline ops.
      window.dispatchEvent(new CustomEvent("bender:token", { detail: data.token }));
      return fromBackendUser(data.user);
    } catch (e) {
      return null;
    }
  };
  const ctx = { users, setUsers, cwsList, setCwsList, farmers: farmers2, setFarmers, seasons, setSeasons, stationSeasons, setStationSeasons, cherry, setCherry, cashbook, setCashbook, bankTx, setBankTx, expenses, setExpenses, debts, setDebts, stock, setStock, fundRequests, setFundRequests, warehouseStock, setWarehouseStock, projects, setProjects, projectCosts, setProjectCosts, milestones, setMilestones, contractors, setContractors, machines, setMachines, assistants, setAssistants, tasks, setTasks, machTx, setMachTx, driverLogs, setDriverLogs, leaves, setLeaves, pending, setPending, system, setSystem, currentUser, online, setOnline, notifications, setNotifications, addNote, page, setPage, dbReady };
  if (!dbReady) return <div style={{ minHeight: "100vh", background: C.bg, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: 16 }}>
      <div style={{ fontFamily: "'Cormorant',serif", fontSize: 28, fontWeight: 700, color: C.gold }}>Bender Exports</div>
      <div style={{ fontSize: 13, color: C.textMuted }}>Loading database...</div>
      <div style={{ width: 180, height: 3, background: C.border, borderRadius: 4, overflow: "hidden" }}>
        <div style={{ height: "100%", background: C.gold, borderRadius: 4, animation: "pulse 1.2s ease infinite" }} />
      </div>
    </div>;
  if (!currentUser) return <Ctx.Provider value={ctx}><style>{GS}</style><LoginPage onLogin={async (e, p) => {
    const u = await login(e, p);
    if (u) setCurrentUser(u);
    return !!u;
  }} system={system} /></Ctx.Provider>;
  return <Ctx.Provider value={ctx}><style>{GS}</style><Shell onLogout={() => {
    setAccessToken(null);
    setCurrentUser(null);
    setPage({ view: "home", sub: null });
  }} /></Ctx.Provider>;
}
function LoginHero() {
  return <svg
    viewBox="0 0 800 900"
    xmlns="http://www.w3.org/2000/svg"
    style={{ position: "absolute", inset: 0, width: "100%", height: "100%" }}
    preserveAspectRatio="xMidYMid slice"
  >
      <defs>
        <linearGradient id="sky" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#060C07" />
          <stop offset="60%" stopColor="#0D1F10" />
          <stop offset="100%" stopColor="#162818" />
        </linearGradient>
        <linearGradient id="hillL" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#1A3520" />
          <stop offset="100%" stopColor="#0F1F12" />
        </linearGradient>
        <linearGradient id="hillR" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#122815" />
          <stop offset="100%" stopColor="#0A1A0D" />
        </linearGradient>
        <linearGradient id="ground" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#1E3A22" />
          <stop offset="100%" stopColor="#111D13" />
        </linearGradient>
        <linearGradient id="sunGlow" cx="50%" cy="50%" r="50%" fx="50%" fy="50%" gradientUnits="objectBoundingBox">
          <stop offset="0%" stopColor="#C8A84B" stopOpacity="0.25" />
          <stop offset="100%" stopColor="#C8A84B" stopOpacity="0" />
        </linearGradient>
        <radialGradient id="moonGlow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#E4C46A" stopOpacity="0.15" />
          <stop offset="100%" stopColor="#E4C46A" stopOpacity="0" />
        </radialGradient>
        <filter id="blur2">
          <feGaussianBlur stdDeviation="2" />
        </filter>
        <filter id="blur6">
          <feGaussianBlur stdDeviation="6" />
        </filter>
        <filter id="glow">
          <feGaussianBlur stdDeviation="3" result="blur" />
          <feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
        </filter>
        <clipPath id="clip">
          <rect width="800" height="900" />
        </clipPath>
      </defs>

      <g clipPath="url(#clip)">

        {
    /* Sky */
  }
        <rect width="800" height="900" fill="url(#sky)" />

        {
    /* Stars */
  }
        {[
    [80, 60],
    [150, 30],
    [220, 80],
    [310, 20],
    [400, 50],
    [480, 35],
    [560, 70],
    [640, 25],
    [720, 55],
    [760, 80],
    [50, 120],
    [170, 100],
    [290, 130],
    [390, 90],
    [510, 110],
    [630, 95],
    [740, 120],
    [100, 170],
    [240, 155],
    [370, 180],
    [500, 160],
    [660, 175],
    [780, 145],
    [60, 220],
    [200, 200],
    [340, 230],
    [470, 210],
    [600, 225],
    [740, 195]
  ].map(([x, y], i) => <circle
    key={i}
    cx={x}
    cy={y}
    r={Math.random() < 0.3 ? 1.5 : 0.8}
    fill="#E4C46A"
    opacity={0.3 + Math.sin(i) * 0.4}
    filter="url(#blur2)"
  />)}

        {
    /* Moon */
  }
        <circle cx="680" cy="110" r="38" fill="url(#moonGlow)" filter="url(#blur6)" />
        <circle cx="680" cy="110" r="22" fill="#E8DBA0" opacity="0.9" />
        <circle cx="672" cy="104" r="18" fill="#0D1F10" />
        {
    /* Moon craters */
  }
        <circle cx="690" cy="118" r="4" fill="#D4C485" opacity="0.4" />
        <circle cx="675" cy="125" r="2.5" fill="#D4C485" opacity="0.3" />

        {
    /* Milky way band */
  }
        <ellipse cx="400" cy="300" rx="500" ry="80" fill="#C8A84B" opacity="0.02" transform="rotate(-20 400 300)" filter="url(#blur6)" />

        {
    /* Distant mountain range */
  }
        <path
    d="M0,520 Q80,380 160,420 Q240,360 320,400 Q400,320 480,380 Q560,340 640,390 Q720,360 800,400 L800,600 L0,600 Z"
    fill="#0F1E12"
    opacity="0.8"
  />

        {
    /* Left rolling hill */
  }
        <path
    d="M-50,580 Q100,460 250,510 Q350,480 420,540 L420,900 L-50,900 Z"
    fill="url(#hillL)"
  />

        {
    /* Right hill */
  }
        <path
    d="M380,560 Q500,480 620,520 Q720,490 850,530 L850,900 L380,900 Z"
    fill="url(#hillR)"
  />

        {
    /* Main ground */
  }
        <path
    d="M0,640 Q200,600 400,620 Q600,600 800,630 L800,900 L0,900 Z"
    fill="url(#ground)"
  />

        {
    /* Coffee rows — terrace 1 (top) */
  }
        {[0, 1, 2, 3, 4, 5].map((i) => <g key={i} transform={`translate(${60 + i * 110}, 545)`}>
            {
    /* Plant stem */
  }
            <line x1="0" y1="30" x2="0" y2="0" stroke="#2A4A2E" strokeWidth="2" />
            {
    /* Leaves */
  }
            <ellipse cx="-12" cy="12" rx="14" ry="7" fill="#1E3A22" transform="rotate(-20 -12 12)" />
            <ellipse cx="12" cy="10" rx="14" ry="7" fill="#243E28" transform="rotate(20 12 10)" />
            <ellipse cx="-10" cy="3" rx="12" ry="6" fill="#1A3520" transform="rotate(-35 -10 3)" />
            <ellipse cx="10" cy="2" rx="12" ry="6" fill="#223C26" transform="rotate(35 10 2)" />
            {
    /* Cherries */
  }
            <circle cx="-8" cy="14" r="3.5" fill="#B8400A" opacity="0.9" />
            <circle cx="8" cy="12" r="3.5" fill="#C84820" opacity="0.9" />
            <circle cx="0" cy="8" r="3" fill="#A83808" opacity="0.85" />
            {
    /* Cherry shine */
  }
            <circle cx="-7" cy="13" r="1.2" fill="#E86030" opacity="0.6" />
            <circle cx="9" cy="11" r="1.2" fill="#E86030" opacity="0.6" />
          </g>)}

        {
    /* Coffee rows — terrace 2 (middle) */
  }
        {[0, 1, 2, 3, 4, 5, 6].map((i) => <g key={i} transform={`translate(${30 + i * 105}, 610)`}>
            <line x1="0" y1="32" x2="0" y2="0" stroke="#243E28" strokeWidth="2.5" />
            <ellipse cx="-14" cy="14" rx="16" ry="8" fill="#1E3A22" transform="rotate(-18 -14 14)" />
            <ellipse cx="14" cy="12" rx="16" ry="8" fill="#243E28" transform="rotate(18 14 12)" />
            <ellipse cx="-11" cy="4" rx="13" ry="6" fill="#1A3520" transform="rotate(-32 -11 4)" />
            <ellipse cx="11" cy="3" rx="13" ry="6" fill="#203C24" transform="rotate(32 11 3)" />
            <circle cx="-9" cy="16" r="4" fill="#C8400A" opacity="0.9" />
            <circle cx="9" cy="14" r="4" fill="#B83808" opacity="0.85" />
            <circle cx="0" cy="9" r="3.5" fill="#D04A10" opacity="0.9" />
            <circle cx="-15" cy="18" r="3" fill="#A83000" opacity="0.8" />
            <circle cx="-8" cy="15" r="1.5" fill="#E86030" opacity="0.5" />
            <circle cx="10" cy="13" r="1.5" fill="#E86030" opacity="0.5" />
          </g>)}

        {
    /* Coffee rows — terrace 3 (front) */
  }
        {[0, 1, 2, 3, 4, 5, 6, 7].map((i) => <g key={i} transform={`translate(${10 + i * 100}, 680)`}>
            <line x1="0" y1="40" x2="0" y2="0" stroke="#2A4A2E" strokeWidth="3" />
            <ellipse cx="-18" cy="18" rx="20" ry="10" fill="#1E3A22" transform="rotate(-15 -18 18)" />
            <ellipse cx="18" cy="16" rx="20" ry="10" fill="#243E28" transform="rotate(15 18 16)" />
            <ellipse cx="-14" cy="5" rx="16" ry="8" fill="#1A3520" transform="rotate(-30 -14 5)" />
            <ellipse cx="14" cy="4" rx="16" ry="8" fill="#203C24" transform="rotate(30 14 4)" />
            <ellipse cx="0" cy="20" rx="10" ry="5" fill="#182E1A" transform="rotate(-5 0 20)" />
            <circle cx="-12" cy="20" r="5" fill="#C8400A" />
            <circle cx="12" cy="18" r="5" fill="#B83808" />
            <circle cx="0" cy="11" r="4.5" fill="#D04A10" />
            <circle cx="-20" cy="22" r="4" fill="#A83000" />
            <circle cx="20" cy="20" r="4" fill="#C03808" />
            <circle cx="-11" cy="19" r="1.8" fill="#E86030" opacity="0.6" />
            <circle cx="13" cy="17" r="1.8" fill="#E86030" opacity="0.6" />
          </g>)}

        {
    /* Traditional hut (CWS building) */
  }
        <g transform="translate(560, 530)">
          {
    /* Hut body */
  }
          <rect x="-35" y="20" width="70" height="45" fill="#1A2E1C" rx="2" />
          {
    /* Door */
  }
          <rect x="-10" y="38" width="20" height="27" fill="#0E1A10" rx="2" />
          {
    /* Window */
  }
          <rect x="14" y="28" width="14" height="12" fill="#0E1A10" rx="1" />
          <line x1="14" y1="34" x2="28" y2="34" stroke="#243E28" strokeWidth="1" />
          <line x1="21" y1="28" x2="21" y2="40" stroke="#243E28" strokeWidth="1" />
          {
    /* Thatched roof */
  }
          <polygon points="-45,22 0,-18 45,22" fill="#2A3E1E" />
          <polygon points="-40,22 0,-14 40,22" fill="#243818" />
          {
    /* Roof lines (thatch texture) */
  }
          {[-25, -15, -5, 5, 15, 25].map((x, i) => <line
    key={i}
    x1={x}
    y1={22}
    x2={x * 0.4}
    y2={-10 + i * 2}
    stroke="#1A2C14"
    strokeWidth="1"
    opacity="0.6"
  />)}
          {
    /* Smoke from chimney */
  }
          <circle cx="25" cy="-10" r="4" fill="#243E28" opacity="0.4" filter="url(#blur2)" />
          <circle cx="27" cy="-20" r="5" fill="#1E3220" opacity="0.3" filter="url(#blur2)" />
          <circle cx="24" cy="-30" r="6" fill="#182A1A" opacity="0.2" filter="url(#blur2)" />
        </g>

        {
    /* Tall eucalyptus / banana trees */
  }
        {[[120, 520], [180, 540], [640, 500], [700, 515]].map(([x, y], i) => <g key={i} transform={`translate(${x},${y})`}>
            <line x1="0" y1="0" x2="0" y2="-90" stroke="#1A2E1C" strokeWidth="4" />
            {
    /* Fronds */
  }
            {[-40, -20, 0, 20, 40].map((angle, j) => <ellipse
    key={j}
    cx={Math.sin(angle * Math.PI / 180) * 25}
    cy={-85 + Math.cos(angle * Math.PI / 180) * 10}
    rx="28"
    ry="8"
    fill="#1E3A20"
    transform={`rotate(${angle} ${Math.sin(angle * Math.PI / 180) * 25} ${-85 + Math.cos(angle * Math.PI / 180) * 10})`}
    opacity="0.9"
  />)}
          </g>)}

        {
    /* Winding path */
  }
        <path
    d="M200,900 Q240,800 260,720 Q280,660 310,620 Q340,590 380,575"
    stroke="#2A4A2E"
    strokeWidth="6"
    fill="none"
    opacity="0.5"
    strokeDasharray="0"
  />
        <path
    d="M200,900 Q240,800 260,720 Q280,660 310,620 Q340,590 380,575"
    stroke="#1E3820"
    strokeWidth="4"
    fill="none"
    opacity="0.4"
  />

        {
    /* Golden light glow (sunrise/moonrise) */
  }
        <circle cx="400" cy="700" r="300" fill="url(#sunGlow)" filter="url(#blur6)" />

        {
    /* Mist in valleys */
  }
        <ellipse cx="300" cy="620" rx="200" ry="25" fill="#1E3A22" opacity="0.3" filter="url(#blur6)" />
        <ellipse cx="580" cy="600" rx="180" ry="20" fill="#1A3020" opacity="0.25" filter="url(#blur6)" />

        {
    /* Fireflies / lights */
  }
        {[[150, 600], [280, 570], [450, 580], [580, 555], [700, 590]].map(([x, y], i) => <g key={i}>
            <circle cx={x} cy={y} r="3" fill="#C8A84B" opacity="0.6" filter="url(#glow)" />
            <circle cx={x} cy={y} r="1.5" fill="#E4C46A" opacity="0.9" />
          </g>)}

        {
    /* "Rwanda" text watermark */
  }
        <text
    x="400"
    y="870"
    textAnchor="middle"
    fill="#C8A84B"
    opacity="0.12"
    fontSize="11"
    fontFamily="Georgia,serif"
    letterSpacing="6"
  >
          BENDER EXPORTS
        </text>

      </g>
    </svg>;
}
function LoginPage({ onLogin, system }) {
  const [email, setEmail] = useState("");
  const [pw, setPw] = useState("");
  const [err, setErr] = useState("");
  const [loading, setLoading] = useState(false);
  const doLogin = async () => {
    setLoading(true);
    setErr("");
    try {
      const ok = await onLogin(email, pw);
      if (!ok) setErr("Invalid email or password.");
    } catch (e) {
      setErr("Login failed");
    } finally {
      setLoading(false);
    }
  };
  return <div style={{ minHeight: "100vh", display: "flex", background: C.bg, flexDirection: "row" }}>
      <div style={{ flex: 1, position: "relative", overflow: "hidden" }} className="hide-mobile">
        <LoginHero />
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(135deg,rgba(8,14,10,.88) 0%,rgba(8,14,10,.35) 55%,rgba(8,14,10,.92) 100%)" }} />
        <div style={{ position: "absolute", height: "100%", width: "100%", display: "flex", flexDirection: "column", justifyContent: "space-between", padding: "40px 52px" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 14, position: "relative", zIndex: 1 }}>
            <div style={{ width: 48, height: 48, borderRadius: 12, background: `${C.gold}22`, border: `1px solid ${C.gold}40`, display: "flex", alignItems: "center", justifyContent: "center", fontFamily: "'Cormorant',serif", fontSize: 22, fontWeight: 700, color: C.gold }}>BE</div>
            <div><div style={{ fontFamily: "'Cormorant',serif", fontSize: 20, fontWeight: 700, color: C.text }}>{system.companyName}</div><div style={{ fontSize: 11, color: C.textMuted }}>Integrated Operations System</div></div>
          </div>
          <div style={{ position: "relative", zIndex: 1, animation: "fadeUp .8s ease both" }}>
            <div style={{ fontFamily: "'Cormorant',serif", fontSize: 58, fontWeight: 700, color: "#fff", lineHeight: 1.04, marginBottom: 18, textShadow: "0 2px 24px rgba(0,0,0,.5)" }}>Rwanda's<br /><span style={{ color: C.gold }}>Premium</span><br />Exports</div>
            <p style={{ color: "rgba(255,255,255,.5)", fontSize: 14, lineHeight: 1.7, maxWidth: 360 }}>{system.tagline}</p>
            <div style={{ display: "flex", gap: 10, marginTop: 22, flexWrap: "wrap" }}>
              {system.businessModels.filter((m) => m.active).map((m) => <span key={m.id} style={{ padding: "5px 14px", borderRadius: 20, background: "rgba(255,255,255,.07)", border: "1px solid rgba(255,255,255,.13)", color: "rgba(255,255,255,.65)", fontSize: 12 }}>{m.icon} {m.label}</span>)}
            </div>
          </div>
        </div>
      </div>
      <div style={{ width: "min(440px, 100%)", background: C.bgCard, borderLeft: `1px solid ${C.border}`, display: "flex", flexDirection: "column", justifyContent: "center", padding: "40px 28px", overflowY: "auto" }}>
        <div style={{ animation: "fadeUp .5s ease both" }}>
          {/* Mobile logo */}
          <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 28 }} className="show-mobile">
            <div style={{ width: 40, height: 40, borderRadius: 10, background: `${C.gold}22`, border: `1px solid ${C.gold}40`, display: "flex", alignItems: "center", justifyContent: "center", fontFamily: "'Cormorant',serif", fontSize: 18, fontWeight: 700, color: C.gold }}>BE</div>
            <div><div style={{ fontFamily: "'Cormorant',serif", fontSize: 18, fontWeight: 700, color: C.text }}>{system.companyName}</div><div style={{ fontSize: 10, color: C.textMuted }}>Integrated Operations System</div></div>
          </div>
          <div style={{ fontFamily: "'Cormorant',serif", fontSize: 30, fontWeight: 700, color: C.text, marginBottom: 4 }}>Welcome back</div>
          <p style={{ fontSize: 13, color: C.textMuted, marginBottom: 28 }}>Sign in to your account.</p>
          <FI label="Email" type="email" value={email} onChange={setEmail} placeholder="your@bender.rw" onEnter={doLogin} />
          <div style={{ marginTop: 12 }}><FI label="Password" type="password" value={pw} onChange={setPw} placeholder="••••••••" onEnter={doLogin} /></div>
          {err && <div style={{ marginTop: 10, padding: "9px 13px", background: `${C.danger}12`, border: `1px solid ${C.danger}28`, borderRadius: 7, color: C.danger, fontSize: 13 }}>⚠ {err}</div>}
          <button onClick={doLogin} disabled={loading} style={{ ...BtnS(C.gold), width: "100%", marginTop: 18, padding: 13, justifyContent: "center", fontSize: 14, fontWeight: 700, minHeight: 48 }} onMouseEnter={(e) => e.target.style.background = C.goldLight} onMouseLeave={(e) => e.target.style.background = C.gold}>{loading ? "Signing in..." : "Sign In \u2192"}</button>
          <div style={{ marginTop: 24, padding: 13, background: C.surface, borderRadius: 10, border: `1px solid ${C.border}` }}>
            <div style={{ fontSize: 9, fontWeight: 700, color: C.textDim, textTransform: "uppercase", letterSpacing: "1.5px", marginBottom: 9 }}>Demo Accounts</div>
            {INIT_USERS.map((u) => <div key={u.id} onClick={() => onLogin(u.email, u.password)} style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "7px 7px", borderRadius: 6, cursor: "pointer", borderBottom: `1px solid ${C.border}15`, transition: "background .15s", minHeight: 44 }} onMouseEnter={(e) => e.currentTarget.style.background = C.border} onMouseLeave={(e) => e.currentTarget.style.background = "transparent"}>
                <div><div style={{ fontSize: 11, fontWeight: 600, color: C.text }}>{u.name}</div><div style={{ fontSize: 10, color: C.textMuted }}>{u.email}</div></div>
                <RB role={u.role} sm />
              </div>)}
          </div>
        </div>
      </div>
    </div>;
}
function Shell({ onLogout }) {
  const { currentUser: u, page, setPage, notifications, online, setOnline, fundRequests, system } = useApp();
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const unread = notifications.filter((n) => !n.read).length;
  const pendingFunds = fundRequests.filter((f) => f.status === "pending_verification" || f.status === "pending_approval").length;
  const NAV = [
    { id: "home", label: "Dashboard", icon: "\u25C8", show: true },
    { id: "coffee", label: system.labels.coffee || "Bender Coffee", icon: "\u2615", show: hasAccess(u, "coffee") },
    { id: "machinery", label: system.labels.machinery || "Bender Machine", icon: "\u{1F3D7}\uFE0F", show: hasAccess(u, "machinery") },
    { id: "construction", label: system.labels.construction || "Bender Construction", icon: "\u{1F3DB}\uFE0F", show: hasAccess(u, "construction") && !STATION_ROLES.concat("driver").includes(u.role) },
    { id: "warehouse", label: "Warehouse", icon: "\u{1F3ED}", show: hasAccess(u, "warehouse") && !["clerk", "cashier", "driver"].includes(u.role) },
    { id: "reports", label: "Reports", icon: "\u{1F4CA}", show: hasAccess(u, "reports") },
    { id: "users", label: "Users", icon: "\u{1F465}", show: hasAccess(u, "users") },
    { id: "system", label: "System", icon: "\u2699\uFE0F", show: hasAccess(u, "system") }
  ].filter((n) => n.show);
  const closeSidebar = () => setSidebarOpen(false);
  return <div style={{ display: "flex", minHeight: "100vh", overflow: "auto" }}>
      {/* Mobile overlay */}
      {sidebarOpen && <div onClick={closeSidebar} style={{ position: "fixed", inset: 0, background: "rgba(0,0,0,.6)", zIndex: 998, display: "none" }} className="show-mobile" />}
      <aside style={{ width: 224, background: C.bgCard, borderRight: `1px solid ${C.border}`, display: "flex", flexDirection: "column", flexShrink: 0, position: "fixed", top: 0, left: 0, height: "100vh", zIndex: 999, transform: sidebarOpen ? "translateX(0)" : "translateX(-100%)", transition: "transform .25s ease" }} className="show-mobile" />
      <aside style={{ width: 224, background: C.bgCard, borderRight: `1px solid ${C.border}`, display: "flex", flexDirection: "column", flexShrink: 0 }} className="hide-mobile">
        <div style={{ padding: "18px 16px 14px", borderBottom: `1px solid ${C.border}`, display: "flex", alignItems: "center", gap: 9 }}>
          <div style={{ width: 32, height: 32, borderRadius: 7, background: `${C.gold}18`, border: `1px solid ${C.gold}30`, display: "flex", alignItems: "center", justifyContent: "center", fontFamily: "'Cormorant',serif", fontSize: 14, fontWeight: 700, color: C.gold, flexShrink: 0 }}>BE</div>
          <div><div style={{ fontFamily: "'Cormorant',serif", fontSize: 13, fontWeight: 700, color: C.text, lineHeight: 1.1 }}>Bender <span style={{ color: C.gold }}>Exports</span></div><div style={{ fontSize: 9, color: C.textDim, letterSpacing: "1px", textTransform: "uppercase" }}>Management System</div></div>
        </div>
        <nav style={{ flex: 1, padding: "10px 8px", overflowY: "auto" }}>
          {NAV.map((item) => {
    const active = page.view === item.id;
    return <div key={item.id} onClick={() => setPage({ view: item.id, sub: null })} style={{ display: "flex", alignItems: "center", gap: 9, padding: "8px 10px", borderRadius: 8, cursor: "pointer", marginBottom: 2, background: active ? `${C.gold}15` : "transparent", color: active ? C.gold : C.textMuted, fontWeight: active ? 700 : 400, fontSize: 13, transition: "all .15s" }} onMouseEnter={(e) => {
      if (!active) e.currentTarget.style.background = `${C.border}80`;
    }} onMouseLeave={(e) => {
      if (!active) e.currentTarget.style.background = "transparent";
    }}>
              <span style={{ fontSize: 14, width: 18, textAlign: "center" }}>{item.icon}</span>
              <span>{item.label}</span>
              {item.id === "coffee" && pendingFunds > 0 && canVerifyFunds(u.role) && <span style={{ marginLeft: "auto", background: C.warning, color: C.bg, fontSize: 9, padding: "1px 5px", borderRadius: 8, fontWeight: 700 }}>{pendingFunds}</span>}
            </div>;
  })}
        </nav>
        <div style={{ padding: "7px 10px", borderTop: `1px solid ${C.border}` }}>
          <div onClick={() => setOnline(!online)} style={{ display: "flex", alignItems: "center", gap: 7, padding: "7px 10px", borderRadius: 7, cursor: "pointer", background: online ? `${C.success}10` : `${C.danger}10`, color: online ? C.success : C.danger, fontSize: 11, fontWeight: 600 }}>
            <span style={{ width: 6, height: 6, borderRadius: "50%", background: online ? C.success : C.danger, animation: online ? "pulse 2s infinite" : "none", flexShrink: 0 }} />
            {online ? "Online \xB7 Synced" : "Offline mode"}
          </div>
        </div>
        <div style={{ padding: "11px 13px", borderTop: `1px solid ${C.border}`, display: "flex", alignItems: "center", gap: 8 }}>
          <Ava user={u} size={32} />
          <div style={{ flex: 1, minWidth: 0 }}><div style={{ fontSize: 12, fontWeight: 600, color: C.text, whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>{u.name.split(" ").slice(0, 2).join(" ")}</div><RB role={u.role} sm /></div>
          <div onClick={onLogout} style={{ cursor: "pointer", color: C.textDim, fontSize: 14, padding: 4 }} title="Sign out" onMouseEnter={(e) => e.target.style.color = C.danger} onMouseLeave={(e) => e.target.style.color = C.textDim}>↩</div>
        </div>
      </aside>
      {/* Mobile sidebar (rendered separately so it can be fixed/positioned) */}
      <aside style={{ width: 224, background: C.bgCard, borderRight: `1px solid ${C.border}`, display: "flex", flexDirection: "column", position: "fixed", top: 0, left: 0, height: "100vh", zIndex: 999, transform: sidebarOpen ? "translateX(0)" : "translateX(-100%)", transition: "transform .25s ease" }} className="show-mobile">
        <div style={{ padding: "18px 16px 14px", borderBottom: `1px solid ${C.border}`, display: "flex", alignItems: "center", gap: 9 }}>
          <div style={{ width: 32, height: 32, borderRadius: 7, background: `${C.gold}18`, border: `1px solid ${C.gold}30`, display: "flex", alignItems: "center", justifyContent: "center", fontFamily: "'Cormorant',serif", fontSize: 14, fontWeight: 700, color: C.gold, flexShrink: 0 }}>BE</div>
          <div style={{ flex: 1 }}><div style={{ fontFamily: "'Cormorant',serif", fontSize: 13, fontWeight: 700, color: C.text, lineHeight: 1.1 }}>Bender <span style={{ color: C.gold }}>Exports</span></div></div>
          <div onClick={closeSidebar} style={{ cursor: "pointer", color: C.textMuted, fontSize: 18, padding: "0 4px" }}>✕</div>
        </div>
        <nav style={{ flex: 1, padding: "10px 8px", overflowY: "auto" }}>
          {NAV.map((item) => {
    const active = page.view === item.id;
    return <div key={item.id} onClick={() => { setPage({ view: item.id, sub: null }); closeSidebar(); }} style={{ display: "flex", alignItems: "center", gap: 9, padding: "10px 12px", borderRadius: 8, cursor: "pointer", marginBottom: 3, background: active ? `${C.gold}15` : "transparent", color: active ? C.gold : C.textMuted, fontWeight: active ? 700 : 400, fontSize: 14, minHeight: 44 }}>
              <span style={{ fontSize: 16, width: 20, textAlign: "center" }}>{item.icon}</span>
              <span>{item.label}</span>
              {item.id === "coffee" && pendingFunds > 0 && canVerifyFunds(u.role) && <span style={{ marginLeft: "auto", background: C.warning, color: C.bg, fontSize: 9, padding: "1px 5px", borderRadius: 8, fontWeight: 700 }}>{pendingFunds}</span>}
            </div>;
  })}
        </nav>
        <div style={{ padding: "11px 13px", borderTop: `1px solid ${C.border}`, display: "flex", alignItems: "center", gap: 8 }}>
          <Ava user={u} size={32} />
          <div style={{ flex: 1, minWidth: 0 }}><div style={{ fontSize: 12, fontWeight: 600, color: C.text, whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>{u.name.split(" ").slice(0, 2).join(" ")}</div><RB role={u.role} sm /></div>
          <div onClick={onLogout} style={{ cursor: "pointer", color: C.textDim, fontSize: 14, padding: 4 }}>↩</div>
        </div>
      </aside>
      <div style={{ flex: 1, display: "flex", flexDirection: "column", overflow: "auto", marginLeft: 224 }} className="main-content">
        <style>{`.show-mobile{display:none}.main-content{margin-left:224px}@media(max-width:600px){.show-mobile{display:flex!important}.hide-mobile{display:none!important}.main-content{margin-left:0!important}}`}</style>
        <div style={{ height: 50, background: C.bgCard, borderBottom: `1px solid ${C.border}`, display: "flex", alignItems: "center", padding: "0 16px", gap: 12, flexShrink: 0 }}>
          {/* Hamburger — mobile only */}
          <button onClick={() => setSidebarOpen(true)} className="show-mobile" style={{ background: "transparent", border: "none", color: C.textMuted, fontSize: 20, cursor: "pointer", padding: "4px 6px", lineHeight: 1, minWidth: 44, minHeight: 44, display: "none", alignItems: "center", justifyContent: "center", borderRadius: 7 }}>☰</button>
          <div style={{ flex: 1, fontFamily: "'Cormorant',serif", fontSize: 20, fontWeight: 700, color: C.text }} className="topbar-title">{NAV.find((n) => n.id === page.view)?.label || "Dashboard"}{page.sub && <span style={{ color: C.textMuted, fontSize: 13, fontWeight: 400, marginLeft: 8 }}>/ {page.sub}</span>}</div>
          <div style={{ position: "relative", cursor: "pointer", padding: "5px 9px", borderRadius: 7, background: unread > 0 ? `${C.gold}10` : "transparent", border: `1px solid ${unread > 0 ? C.gold + "28" : C.border}`, minWidth: 36, minHeight: 36, display: "flex", alignItems: "center", justifyContent: "center" }}>
            <span style={{ fontSize: 13 }}>🔔</span>
            {unread > 0 && <span style={{ position: "absolute", top: 2, right: 2, width: 7, height: 7, background: C.danger, borderRadius: "50%", border: `2px solid ${C.bgCard}` }} />}
          </div>
          <Ava user={u} size={28} />
        </div>
        <div style={{ flex: 1, overflowY: "auto", padding: "22px 26px", minHeight: 0 }} className="page-pad">
          <PageRouter />
        </div>
      </div>
    </div>;
}
function PageRouter() {
  const { page, currentUser: u } = useApp();
  if (u.role === "driver") return <DriverHome />;
  const views = { home: <HomePage />, coffee: <CoffeePage />, machinery: <MachineryPage />, construction: <ConstructionPage />, warehouse: <WarehousePage />, reports: <ReportsPage />, users: <UsersPage />, system: <SystemPage /> };
  return <div style={{ animation: "fadeUp .3s ease both" }}>{views[page.view] || <HomePage />}</div>;
}
function HomePage() {
  const { currentUser: u, cherry, expenses, cashbook, fundRequests, cwsList, machTx, users, system, setPage } = useApp();
  if (u.role === "clerk") {
    const myCws = cwsList.find((c) => (u.cwsAccess || []).includes(c.id));
    const myCherry = cherry.filter((c) => (u.cwsAccess || []).includes(c.cwsId));
    const todayCherry = myCherry.filter((c) => c.date === today());
    return <div>
        <div style={{ fontFamily: "'Cormorant',serif", fontSize: 26, fontWeight: 700, color: C.text, marginBottom: 4 }}>My Dashboard</div>
        <div style={{ fontSize: 13, color: C.textMuted, marginBottom: 18 }}>{ROLES[u.role]?.label} · {myCws?.name}</div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(130px,1fr))", gap: 12, marginBottom: 18 }}>
          <SC label="Today's Deliveries" value={todayCherry.length} color={C.coffee} />
          <SC label="Today's kg (Standard)" value={fmtKg(todayCherry.reduce((s, c) => s + c.standardKg, 0))} color={C.coffeeLight} />
          <SC label="Today's Total Paid" value={fmtRWF(todayCherry.reduce((s, c) => s + c.totalPaid, 0))} color={C.gold} />
        </div>
        <div style={{ background: C.bgCard, border: `1px solid ${C.border}`, borderRadius: 12, overflow: "hidden" }}>
          <div style={{ padding: "12px 18px", borderBottom: `1px solid ${C.border}`, fontWeight: 700, fontSize: 13 }}>Recent GNR Entries</div>
          <GNRTable rows={myCherry.slice(0, 8)} cwsList={cwsList} farmers={[]} />
        </div>
      </div>;
  }
  if (u.role === "cashier") {
    const myCws = cwsList.find((c) => (u.cwsAccess || []).includes(c.id));
    const myCwsId = (u.cwsAccess || [])[0];
    const myCherry = cherry.filter((c) => c.cwsId === myCwsId);
    const pendingPayment = myCherry.filter((c) => c.status === "pending");
    const notPaid = myCherry.filter((c) => c.status === "not_paid");
    const myCashbook = cashbook.filter((c) => c.cwsId === myCwsId);
    const cashBalance = myCashbook.reduce((s, c) => c.type === "inflow" ? s + c.amount : s - c.amount, 0);
    const paidToday = myCherry.filter((c) => c.date === today() && c.status === "paid");
    return <div>
        <div style={{ fontFamily: "'Cormorant',serif", fontSize: 26, fontWeight: 700, color: C.text, marginBottom: 4 }}>My Dashboard</div>
        <div style={{ fontSize: 13, color: C.textMuted, marginBottom: 14 }}>{ROLES[u.role]?.label} · {myCws?.name}</div>
        {pendingPayment.length > 0 && <Alert text={`\u{1F4CB} ${pendingPayment.length} GNR(s) from clerk awaiting your payment confirmation.`} color={C.warning} />}
        {notPaid.length > 0 && <div style={{ marginTop: 8 }}><Alert text={`\u26A0 ${notPaid.length} GNR(s) marked NOT PAID \u2014 station owes these farmers ${fmtRWF(notPaid.reduce((s, c) => s + c.totalPaid, 0))}`} color={C.danger} /></div>}
        <div style={{ className: "kpi-grid", style: { display: "grid" }, gap: 12, marginTop: 14, marginBottom: 14 }}>
          <SC label="Cash Balance" value={fmtRWF(cashBalance)} color={cashBalance > 5e5 ? C.success : C.danger} sub="Available at station" />
          <SC label="Pending GNRs" value={pendingPayment.length} color={pendingPayment.length > 0 ? C.warning : C.success} sub="Awaiting payment" />
          <SC label="Not Paid (owed)" value={notPaid.length} color={notPaid.length > 0 ? C.danger : C.success} sub="Farmer debts" />
          <SC label="Paid Today" value={paidToday.length} color={C.coffee} sub={`${fmtRWF(paidToday.reduce((s, c) => s + c.totalPaid, 0))}`} />
        </div>
        {pendingPayment.length > 0 && <div style={{ background: C.bgCard, border: `1px solid ${C.warning}28`, borderRadius: 12, overflow: "hidden", marginBottom: 14 }}>
            <div style={{ padding: "11px 16px", borderBottom: `1px solid ${C.border}`, fontWeight: 700, fontSize: 13, color: C.warning }}>
              GNRs Waiting for Payment
              <button onClick={() => setPage({ view: "coffee", sub: myCwsId })} style={{ ...BtnS(C.warning, true), marginLeft: 14, fontSize: 10, padding: "3px 9px" }}>Open Station →</button>
            </div>
            <div className="tbl-wrap"><table style={{ width: "100%", borderCollapse: "collapse" }}>
              <thead><tr style={{ background: C.surface }}>{["GNR #", "Farmer", "Date", "kg", "Total to Pay"].map((h) => <Th key={h}>{h}</Th>)}</tr></thead>
              <tbody>{pendingPayment.slice(0, 5).map((gnr) => {
      const f = farmers.find((x) => x.id === gnr.farmerId);
      return <tr key={gnr.id} style={{ borderBottom: `1px solid ${C.border}15` }} onMouseEnter={(e) => e.currentTarget.style.background = C.surface} onMouseLeave={(e) => e.currentTarget.style.background = "transparent"}>
                  <Td style={{ color: C.gold, fontWeight: 700 }}>{gnr.gnrNumber}</Td>
                  <Td style={{ fontWeight: 600 }}>{f?.name || gnr.farmerId}</Td>
                  <Td style={{ color: C.textMuted }}>{gnr.date}</Td>
                  <Td style={{ color: C.coffee }}>{gnr.totalKg.toLocaleString()} kg</Td>
                  <Td style={{ fontWeight: 700, color: C.danger }}>{fmtRWF(gnr.totalPaid)}</Td>
                </tr>;
    })}</tbody>
            </table></div>
          </div>}
        <div style={{ background: C.bgCard, border: `1px solid ${C.border}`, borderRadius: 12, overflow: "hidden" }}>
          <div style={{ padding: "12px 18px", borderBottom: `1px solid ${C.border}`, fontWeight: 700, fontSize: 13 }}>Today's Cash Book</div>
          <CashTable rows={myCashbook.slice(0, 8)} />
        </div>
      </div>;
  }
  if (u.role === "station_manager") {
    const myCwsId = (u.cwsAccess || [])[0];
    const myCws = cwsList.find((c) => c.id === myCwsId);
    const myCherry = cherry.filter((c) => c.cwsId === myCwsId);
    const myExp = expenses.filter((e) => e.cwsId === myCwsId);
    const myCash = cashbook.filter((c) => c.cwsId === myCwsId);
    const cashBal = myCash.reduce((s, c) => c.type === "inflow" ? s + c.amount : s - c.amount, 0);
    const myFR = fundRequests.filter((f) => f.cwsId === myCwsId);
    const totalKg = myCherry.reduce((s, c) => s + c.totalKg, 0);
    const totalPaid = myCherry.reduce((s, c) => s + c.totalPaid, 0);
    const totalExp2 = myExp.reduce((s, e) => s + e.amount, 0);
    return <div>
        <div style={{ marginBottom: 18 }}>
          <div style={{ fontFamily: "'Cormorant',serif", fontSize: 28, fontWeight: 700, color: C.text }}>Good {(/* @__PURE__ */ new Date()).getHours() < 12 ? "morning" : "afternoon"}, {u.name.split(" ")[0]}</div>
          <div style={{ fontSize: 13, color: C.textMuted, marginTop: 2 }}>{ROLES[u.role]?.label} · {myCws?.name} · {(/* @__PURE__ */ new Date()).toLocaleDateString("en-RW", { weekday: "long", month: "long", day: "numeric" })}</div>
        </div>
        {cashBal < 5e5 && <Alert text={`\u26A0 Low cash balance at station: ${fmtRWF(cashBal)}. Consider requesting funds from HQ.`} color={C.danger} />}
        <div style={{ className: "kpi-grid", style: { display: "grid" }, gap: 12, marginBottom: 18, marginTop: cashBal < 5e5 ? 12 : 0 }}>
          <SC label="Total Cherry (kg)" value={fmtKg(totalKg)} color={C.coffee} />
          <SC label="Total Payments" value={fmtRWF(totalPaid)} color={C.danger} />
          <SC label="Total Expenses" value={fmtRWF(totalExp2)} color={C.warning} />
          <SC label="Cash Available" value={fmtRWF(cashBal)} color={cashBal > 5e5 ? C.success : C.danger} />
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(180px,1fr))", gap: 14, marginBottom: 18 }}>
          <div style={{ background: C.bgCard, border: `1px solid ${C.border}`, borderRadius: 12, overflow: "hidden" }}>
            <div style={{ padding: "12px 18px", borderBottom: `1px solid ${C.border}`, fontWeight: 700, fontSize: 13 }}>Recent Cherry Deliveries</div>
            <GNRTable rows={myCherry.slice(0, 5)} cwsList={cwsList} farmers={[]} />
          </div>
          <div style={{ background: C.bgCard, border: `1px solid ${C.border}`, borderRadius: 12, overflow: "hidden" }}>
            <div style={{ padding: "12px 18px", borderBottom: `1px solid ${C.border}`, fontWeight: 700, fontSize: 13 }}>Fund Requests</div>
            <FundTable rows={myFR} users={[]} short cwsList={cwsList} />
          </div>
        </div>
      </div>;
  }
  const totalCherryKg = cherry.reduce((s, c) => s + c.totalKg, 0);
  const totalCherryPaid = cherry.reduce((s, c) => s + c.totalPaid, 0);
  const totalExp = expenses.reduce((s, e) => s + e.amount, 0);
  const totalMachIncome = machTx.filter((t) => t.type === "income").reduce((s, t) => s + t.amount, 0);
  const pendingFR = fundRequests.filter((f) => ["pending_verification", "pending_approval"].includes(f.status));
  const stationData = cwsList.map((cws) => ({
    name: cws.name.replace(" CWS", ""),
    "Cherry kg": cherry.filter((c) => c.cwsId === cws.id).reduce((s, c) => s + c.totalKg, 0),
    "Payments": cherry.filter((c) => c.cwsId === cws.id).reduce((s, c) => s + c.totalPaid, 0)
  }));
  return <div>
      <div style={{ marginBottom: 18 }}>
        <div style={{ fontFamily: "'Cormorant',serif", fontSize: 28, fontWeight: 700, color: C.text }}>Good {(/* @__PURE__ */ new Date()).getHours() < 12 ? "morning" : "afternoon"}, {u.name.split(" ")[0]}</div>
        <div style={{ fontSize: 13, color: C.textMuted, marginTop: 2 }}>{ROLES[u.role]?.label} · {(/* @__PURE__ */ new Date()).toLocaleDateString("en-RW", { weekday: "long", year: "numeric", month: "long", day: "numeric" })}</div>
      </div>
      <AlertsPanel />
      {pendingFR.length > 0 && canVerifyFunds(u.role) && <div style={{ marginBottom: 16, background: `${C.warning}0A`, border: `1px solid ${C.warning}28`, borderRadius: 12, overflow: "hidden" }}>
          <div style={{ padding: "11px 16px", borderBottom: `1px solid ${C.warning}18`, display: "flex", alignItems: "center", gap: 8 }}>
            <span>💰</span><span style={{ fontWeight: 700, fontSize: 13, color: C.warning }}>{pendingFR.length} Fund Request{pendingFR.length > 1 ? "s" : ""} Pending Action</span>
            <button onClick={() => setPage({ view: "coffee", sub: "fund_requests" })} style={{ ...BtnS(C.warning, true), marginLeft: "auto", fontSize: 11, padding: "5px 11px" }}>Review →</button>
          </div>
          {pendingFR.slice(0, 3).map((fr) => {
    const cws = cwsList.find((c) => c.id === fr.cwsId);
    return <div key={fr.id} style={{ padding: "9px 16px", fontSize: 12, borderBottom: `1px solid ${C.border}15`, display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              <span style={{ color: C.text }}>{cws?.name} · {fmtRWF(fr.amount)}</span>
              <SB status={fr.status} />
            </div>;
  })}
        </div>}
      <div style={{ className: "kpi-grid", style: { display: "grid" }, gap: 12, marginBottom: 18 }}>
        <SC label="Total Cherry Purchased" value={fmtKg(totalCherryKg)} color={C.coffee} sub="All stations combined" />
        <SC label="Total Cherry Payments" value={fmtRWF(totalCherryPaid)} color={C.danger} sub="Paid to farmers" />
        <SC label="Total Expenses" value={fmtRWF(totalExp)} color={C.warning} sub="All stations" />
        <SC label="Machine Revenue" value={fmtRWF(totalMachIncome)} color={C.machinery} sub="Bender Machine" />
      </div>
      <h3 style={{ fontFamily: "'Cormorant',serif", fontSize: 17, fontWeight: 700, color: C.text, marginBottom: 12 }}>Business Units</h3>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(130px,1fr))", gap: 14, marginBottom: 18 }}>
        <BizCard
    id="coffee"
    label={system.labels.coffee || "Bender Coffee"}
    icon="☕"
    color={C.coffee}
    colorLight={C.coffeeLight}
    colorBg={C.coffeeBg}
    stats={[{ l: "Cherry Purchased", v: fmtKg(totalCherryKg) }, { l: "Farmer Payments", v: fmtRWF(totalCherryPaid) }, { l: "Active Stations", v: cwsList.length }]}
  />
        <BizCard
    id="machinery"
    label={system.labels.machinery || "Bender Machine"}
    icon="🏗️"
    color={C.machinery}
    colorLight={C.machineryLight}
    colorBg={C.machineryBg}
    stats={[{ l: "Revenue", v: fmtRWF(totalMachIncome) }, { l: "Machines", v: INIT_MACHINES.length }, { l: "Active Tasks", v: INIT_TASKS.length }]}
  />
        <BizCard
    id="construction"
    label={system.labels.construction || "Bender Construction"}
    icon="🏛️"
    color={C.construction}
    colorLight={C.constructionLight}
    colorBg={C.constructionBg}
    stats={[{ l: "Projects", v: "0" }, { l: "Status", v: "Upcoming" }, { l: "Revenue", v: "0 RWF" }]}
  />
      </div>
      <div style={{ background: C.bgCard, border: `1px solid ${C.border}`, borderRadius: 12, padding: "16px 16px 8px" }}>
        <div style={{ fontWeight: 700, fontSize: 13, marginBottom: 14 }}>Station Comparison — Cherry Purchased (kg) & Payments (RWF)</div>
        <ResponsiveContainer width="100%" height={160}>
          <BarChart data={stationData} barGap={4} barCategoryGap="30%">
            <CartesianGrid strokeDasharray="3 3" stroke={C.border} vertical={false} />
            <XAxis dataKey="name" tick={{ fill: C.textMuted, fontSize: 11 }} axisLine={false} tickLine={false} />
            <YAxis tick={{ fill: C.textMuted, fontSize: 10 }} tickFormatter={(v) => v > 1e3 ? `${(v / 1e3).toFixed(0)}k` : v} axisLine={false} tickLine={false} />
            <Tooltip contentStyle={{ background: C.bgCard, border: `1px solid ${C.border}`, borderRadius: 8, fontSize: 12 }} formatter={(v, n) => n === "Payments" ? fmtRWF(v) : fmtKg(v)} />
            <Legend wrapperStyle={{ fontSize: 11 }} />
            <Bar dataKey="Cherry kg" fill={C.coffee} radius={[4, 4, 0, 0]} />
            <Bar dataKey="Payments" fill={C.gold} radius={[4, 4, 0, 0]} opacity={0.8} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>;
}
function BizCard({ id, label, icon, color, colorLight, colorBg, stats = [] }) {
  const { setPage } = useApp();
  return <div onClick={() => setPage({ view: id, sub: null })} style={{ background: `linear-gradient(145deg,${colorBg},${C.bgCard})`, border: `1px solid ${color}28`, borderRadius: 13, padding: "18px", cursor: "pointer", transition: "all .2s", position: "relative", overflow: "hidden" }} onMouseEnter={(e) => {
    e.currentTarget.style.borderColor = `${color}55`;
    e.currentTarget.style.transform = "translateY(-3px)";
  }} onMouseLeave={(e) => {
    e.currentTarget.style.borderColor = `${color}28`;
    e.currentTarget.style.transform = "translateY(0)";
  }}>
      <div style={{ position: "absolute", top: -15, right: -15, fontSize: 55, opacity: 0.05 }}>{icon}</div>
      <div style={{ fontSize: 24, marginBottom: 8 }}>{icon}</div>
      <div style={{ fontFamily: "'Cormorant',serif", fontSize: 17, fontWeight: 700, color: colorLight, marginBottom: 10 }}>{label}</div>
      {stats.map((s) => <div key={s.l} style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 5 }}>
          <span style={{ fontSize: 10, color: C.textDim }}>{s.l}</span>
          <span style={{ fontSize: 12, fontWeight: 700, color: C.text }}>{s.v}</span>
        </div>)}
      <div style={{ marginTop: 10, fontSize: 11, color, fontWeight: 700 }}>Open {label} →</div>
    </div>;
}
function CoffeePage() {
  const { currentUser: u, cwsList, cherry, expenses, cashbook, farmers: farmers2, fundRequests, seasons, stationSeasons, page, setPage, addNote } = useApp();
  const accessible = canSeeAllStations(u.role) ? cwsList : cwsList.filter((c) => (u.cwsAccess || []).includes(c.id));
  if (page.sub === "fund_requests") return <FundRequestsPage onBack={() => setPage({ view: "coffee", sub: null })} />;
  if (page.sub === "seasons") return <SeasonsPage onBack={() => setPage({ view: "coffee", sub: null })} />;
  if (page.sub && cwsList.find((c) => c.id === page.sub)) return <CWSDetailPage cwsId={page.sub} onBack={() => setPage({ view: "coffee", sub: null })} />;
  const activeSeason = seasons.find((s) => s.status === "active");
  const totalKg = cherry.reduce((s, c) => s + c.totalKg, 0);
  const totalPaid = cherry.reduce((s, c) => s + c.totalPaid, 0);
  const pendingFR = fundRequests.filter((f) => ["pending_verification", "pending_approval"].includes(f.status)).length;
  return <div>
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 14, flexWrap: "wrap", gap: 10 }}>
        <div><div style={{ fontFamily: "'Cormorant',serif", fontSize: 26, fontWeight: 700, color: C.text }}>Bender Coffee</div><div style={{ fontSize: 13, color: C.textMuted }}>Cherry Purchasing · Farmer Management · Cash & Bank · Reports</div></div>
        <div style={{ display: "flex", gap: 8 }}>
          {canManageSeason(u.role) && <button onClick={() => setPage({ view: "coffee", sub: "seasons" })} style={{ ...BtnS(C.gold, true), fontSize: 11, padding: "7px 13px" }}>🗓 Seasons</button>}
          {canVerifyFunds(u.role) && pendingFR > 0 && <button onClick={() => setPage({ view: "coffee", sub: "fund_requests" })} style={{ ...BtnS(C.warning), padding: "7px 14px", fontSize: 12 }}>💰 {pendingFR} Fund Requests</button>}
        </div>
      </div>
      {activeSeason ? <div style={{ marginBottom: 14, padding: "10px 16px", background: `${C.success}0A`, border: `1px solid ${C.success}28`, borderRadius: 10, display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
            <span>🌱</span>
            <div><div style={{ fontWeight: 700, fontSize: 13, color: C.success }}>{activeSeason.name} — Active</div>
            <div style={{ fontSize: 11, color: C.textMuted }}>{activeSeason.startDate} → {activeSeason.endDate || "Ongoing"} · Std: {activeSeason.rateStandard} RWF/kg · Flt: {activeSeason.rateFlotant} RWF/kg</div></div>
          </div>
          {canManageSeason(u.role) && <button onClick={() => setPage({ view: "coffee", sub: "seasons" })} style={{ ...BtnS(C.gold, true), fontSize: 10, padding: "4px 10px" }}>Manage →</button>}
        </div> : <div style={{ marginBottom: 14, padding: "12px 16px", background: `${C.danger}0A`, border: `1px solid ${C.danger}28`, borderRadius: 10 }}>
          <div style={{ fontWeight: 700, fontSize: 13, color: C.danger }}>⚠ No Active Season</div>
          <div style={{ fontSize: 12, color: C.textMuted, marginTop: 2 }}>{canManageSeason(u.role) ? "Create and open a season before station operations can begin." : "Operations are blocked until the MD opens a new season."}</div>
          {canManageSeason(u.role) && <button onClick={() => setPage({ view: "coffee", sub: "seasons" })} style={{ ...BtnS(C.danger), marginTop: 8, fontSize: 11, padding: "5px 12px" }}>Open Season →</button>}
        </div>}
      <div style={{ className: "kpi-grid", style: { display: "grid" }, gap: 12, marginBottom: 20 }}>
        <SC label="Total Cherry (kg)" value={fmtKg(totalKg)} color={C.coffee} sub={`${cherry.length} GNR records`} />
        <SC label="Farmer Payments" value={fmtRWF(totalPaid)} color={C.danger} />
        <SC label="Active Stations" value={accessible.length} color={C.success} />
        <SC label="Registered Farmers" value={farmers2.filter((f) => accessible.map((c) => c.id).includes(f.cwsId)).length} color={C.info} />
      </div>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(130px,1fr))", gap: 14, marginBottom: 20 }}>
        {accessible.map((cws, i) => {
    const cCherry = cherry.filter((c) => c.cwsId === cws.id);
    const cCash = cashbook.filter((c) => c.cwsId === cws.id);
    const cashBal = cCash.reduce((s, c) => c.type === "inflow" ? s + c.amount : s - c.amount, 0);
    const kg = cCherry.reduce((s, c) => s + c.totalKg, 0);
    const paid = cCherry.reduce((s, c) => s + c.totalPaid, 0);
    const pendingGNR = cCherry.filter((c) => c.status === "pending").length;
    const mySS = stationSeasons.find((ss) => ss.cwsId === cws.id && ss.status === "active");
    return <div key={cws.id} onClick={() => setPage({ view: "coffee", sub: cws.id })} style={{ background: `linear-gradient(145deg,${C.coffeeBg},${C.bgCard})`, border: `1px solid ${mySS ? C.coffee + "28" : C.border}`, borderRadius: 13, padding: "18px", cursor: "pointer", transition: "all .2s", animation: `fadeUp .3s ease ${i * 0.08}s both`, position: "relative", overflow: "hidden" }} onMouseEnter={(e) => {
      e.currentTarget.style.borderColor = `${C.coffee}55`;
      e.currentTarget.style.transform = "translateY(-2px)";
    }} onMouseLeave={(e) => {
      e.currentTarget.style.borderColor = mySS ? `${C.coffee}28` : C.border;
      e.currentTarget.style.transform = "translateY(0)";
    }}>
              <img src={cws.image} alt="" style={{ position: "absolute", right: 0, top: 0, height: "100%", width: "40%", objectFit: "cover", opacity: 0.08 }} />
              <div style={{ position: "relative" }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 6 }}>
                  <span style={{ fontSize: 22 }}>☕</span>
                  {mySS ? <span style={{ fontSize: 9, fontWeight: 700, padding: "2px 7px", borderRadius: 10, background: `${C.success}18`, color: C.success }}>Season Active</span> : <span style={{ fontSize: 9, fontWeight: 700, padding: "2px 7px", borderRadius: 10, background: `${C.danger}18`, color: C.danger }}>No Season</span>}
                </div>
                <div style={{ fontFamily: "'Cormorant',serif", fontSize: 18, fontWeight: 700, color: C.coffeeLight, marginBottom: 1 }}>{cws.name}</div>
                <div style={{ fontSize: 11, color: C.textMuted, marginBottom: 10 }}>{cws.region}</div>
                <div style={{ display: "flex", flexDirection: "column", gap: 5, borderTop: `1px solid ${C.coffee}18`, paddingTop: 9 }}>
                  {[["\u{1F352} Cherry Purchased", fmtKg(kg), C.coffeeLight], ["\u{1F4B0} Farmer Payments", fmtRWF(paid), C.danger], ["\u{1F3E6} Cash Balance", fmtRWF(cashBal), cashBal > 3e5 ? C.success : C.danger], ["\u23F3 Pending GNRs", pendingGNR, pendingGNR > 0 ? C.warning : C.success]].map(([l, v, c]) => <div key={l} style={{ display: "flex", justifyContent: "space-between" }}><span style={{ fontSize: 10, color: C.textDim }}>{l}</span><span style={{ fontSize: 11, fontWeight: 700, color: c }}>{v}</span></div>)}
                </div>
                <div style={{ marginTop: 10, fontSize: 11, color: C.coffee, fontWeight: 700 }}>Open {cws.name} →</div>
              </div>
            </div>;
  })}
      </div>
      {canSeeAllStations(u.role) && <div style={{ background: C.bgCard, border: `1px solid ${C.border}`, borderRadius: 12, padding: "16px 16px 8px" }}>
          <div style={{ fontWeight: 700, fontSize: 13, marginBottom: 14 }}>All Stations — Cherry kg vs Farmer Payments</div>
          <ResponsiveContainer width="100%" height={160}>
            <BarChart data={cwsList.map((cws) => ({ name: cws.name.replace(" CWS", ""), "Cherry kg": cherry.filter((c) => c.cwsId === cws.id).reduce((s, c) => s + c.totalKg, 0), "Payments": cherry.filter((c) => c.cwsId === cws.id).reduce((s, c) => s + c.totalPaid, 0) / 1e3 }))} barGap={4}>
              <CartesianGrid strokeDasharray="3 3" stroke={C.border} vertical={false} />
              <XAxis dataKey="name" tick={{ fill: C.textMuted, fontSize: 11 }} axisLine={false} tickLine={false} />
              <YAxis tick={{ fill: C.textMuted, fontSize: 10 }} axisLine={false} tickLine={false} />
              <Tooltip contentStyle={{ background: C.bgCard, border: `1px solid ${C.border}`, borderRadius: 8, fontSize: 12 }} />
              <Legend wrapperStyle={{ fontSize: 11 }} />
              <Bar dataKey="Cherry kg" fill={C.coffee} radius={[4, 4, 0, 0]} />
              <Bar dataKey="Payments" fill={C.gold} radius={[4, 4, 0, 0]} opacity={0.8} />
            </BarChart>
          </ResponsiveContainer>
        </div>}
    </div>;
}
function SeasonsPage({ onBack }) {
  const { currentUser: u, seasons, setSeasons, stationSeasons, setStationSeasons, cwsList, addNote } = useApp();
  const [showForm, setShowForm] = useState(false);
  const [showEnrollForm, setShowEnrollForm] = useState(null);
  const [form, setForm] = useState({ name: "", startDate: "", endDate: "", rateStandard: "155", rateFlotant: "80", notes: "" });
  const [enrollForm, setEnrollForm] = useState({ cwsId: "", startDate: today() });
  const activeSeason = seasons.find((s) => s.status === "active");
  const createSeason = () => {
    if (!form.name || !form.startDate) return;
    if (activeSeason) {
      addNote("Close the current active season before opening a new one", "warning");
      return;
    }
    setSeasons((p) => [{ id: `s${Date.now()}`, name: form.name, startDate: form.startDate, endDate: form.endDate || null, rateStandard: +form.rateStandard, rateFlotant: +form.rateFlotant, status: "active", createdBy: u.id, createdAt: today(), closedAt: null, notes: form.notes }, ...p]);
    setShowForm(false);
    setForm({ name: "", startDate: "", endDate: "", rateStandard: "155", rateFlotant: "80", notes: "" });
    addNote("New season created and opened", "success");
  };
  const closeSeason = (id) => {
    setSeasons((p) => p.map((s) => s.id === id ? { ...s, status: "closed", closedAt: (/* @__PURE__ */ new Date()).toLocaleString() } : s));
    setStationSeasons((p) => p.map((ss) => ss.seasonId === id && ss.status === "active" ? { ...ss, status: "closed", endDate: today() } : ss));
    addNote("Season closed \u2014 all station enrollments ended", "warning");
  };
  const enrollStation = () => {
    if (!enrollForm.cwsId || !activeSeason) return;
    if (stationSeasons.find((ss) => ss.cwsId === enrollForm.cwsId && ss.seasonId === activeSeason.id)) return;
    setStationSeasons((p) => [...p, { id: `ss${Date.now()}`, seasonId: activeSeason.id, cwsId: enrollForm.cwsId, startDate: enrollForm.startDate, endDate: null, status: "active" }]);
    setShowEnrollForm(null);
    addNote(`${cwsList.find((c) => c.id === enrollForm.cwsId)?.name} enrolled in season`, "success");
  };
  const closeStationSeason = (ssId) => {
    setStationSeasons((p) => p.map((ss) => ss.id === ssId ? { ...ss, status: "closed", endDate: today() } : ss));
    addNote("Station season closed", "info");
  };
  return <div>
      <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 20 }}>
        <button onClick={onBack} style={{ ...BtnS(C.border, false, true), padding: "6px 12px", fontSize: 12 }}>← Back</button>
        <div><div style={{ fontFamily: "'Cormorant',serif", fontSize: 22, fontWeight: 700, color: C.goldLight }}>Season Management</div>
        <div style={{ fontSize: 12, color: C.textMuted }}>MD creates & closes seasons · Stations join individually</div></div>
        {canManageSeason(u.role) && !activeSeason && <button onClick={() => setShowForm(true)} style={{ ...BtnS(C.success), marginLeft: "auto", padding: "8px 16px", fontSize: 12 }}>+ Open New Season</button>}
        {canManageSeason(u.role) && activeSeason && <button onClick={() => setShowEnrollForm(activeSeason.id)} style={{ ...BtnS(C.coffee, true), marginLeft: "auto", padding: "7px 13px", fontSize: 11 }}>+ Enroll Station</button>}
      </div>
      {seasons.map((season) => {
    const seasonSS = stationSeasons.filter((ss) => ss.seasonId === season.id);
    const isActive = season.status === "active";
    return <div key={season.id} style={{ background: C.bgCard, border: `1px solid ${isActive ? C.success + "28" : C.border}`, borderRadius: 12, marginBottom: 14, overflow: "hidden" }}>
            <div style={{ padding: "14px 18px", borderBottom: `1px solid ${C.border}`, display: "flex", alignItems: "center", justifyContent: "space-between" }}>
              <div>
                <div style={{ fontFamily: "'Cormorant',serif", fontSize: 18, fontWeight: 700, color: isActive ? C.success : C.textMuted }}>{season.name}</div>
                <div style={{ fontSize: 11, color: C.textMuted }}>{season.startDate} → {season.endDate || "Open ended"} · Std Rate: <b style={{ color: C.gold }}>{season.rateStandard} RWF/kg</b> · Flt Rate: <b style={{ color: C.gold }}>{season.rateFlotant} RWF/kg</b></div>
                {season.notes && <div style={{ fontSize: 11, color: C.textDim, marginTop: 2 }}>{season.notes}</div>}
              </div>
              <div style={{ display: "flex", gap: 8, alignItems: "center" }}>
                <SB status={season.status} />
                {canManageSeason(u.role) && isActive && <button onClick={() => closeSeason(season.id)} style={{ ...BtnS(C.danger, false, true), fontSize: 11, padding: "5px 11px" }}>Close Season</button>}
              </div>
            </div>
            <div style={{ padding: "12px 18px" }}>
              <div style={{ fontSize: 11, fontWeight: 700, color: C.textDim, textTransform: "uppercase", letterSpacing: "1px", marginBottom: 10 }}>Station Enrollments</div>
              {seasonSS.length === 0 ? <div style={{ fontSize: 12, color: C.textDim }}>No stations enrolled yet</div> : <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(130px,1fr))", gap: 8 }}>
                  {seasonSS.map((ss) => {
      const cws = cwsList.find((c) => c.id === ss.cwsId);
      return <div key={ss.id} style={{ padding: "8px 12px", background: C.surface, borderRadius: 8, border: `1px solid ${ss.status === "active" ? C.success + "20" : C.border}`, display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                      <div><div style={{ fontSize: 12, fontWeight: 600, color: C.text }}>{cws?.name || ss.cwsId}</div>
                      <div style={{ fontSize: 10, color: C.textMuted }}>{ss.startDate}{ss.endDate ? ` \u2192 ${ss.endDate}` : ""}</div></div>
                      <div style={{ display: "flex", gap: 6, alignItems: "center" }}>
                        <SB status={ss.status} />
                        {canManageSeason(u.role) && ss.status === "active" && <button onClick={() => closeStationSeason(ss.id)} style={{ ...BtnS(C.warning, false, true), fontSize: 9, padding: "2px 7px" }}>End</button>}
                      </div>
                    </div>;
    })}
                </div>}
            </div>
          </div>;
  })}
      {showForm && <Modal title="Open New Season" onClose={() => setShowForm(false)}>
          <Alert text="Only one season can be active at a time. Closing a season ends all station operations." color={C.gold} />
          <div style={{ marginTop: 12, display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(180px,1fr))", gap: 11 }}>
            <div style={{ gridColumn: "1/-1" }}><FI label="Season Name" value={form.name} onChange={(v) => setForm((p) => ({ ...p, name: v }))} placeholder="e.g. Season 2025-2026" /></div>
            <FI label="Start Date" type="date" value={form.startDate} onChange={(v) => setForm((p) => ({ ...p, startDate: v }))} />
            <FI label="End Date (optional)" type="date" value={form.endDate} onChange={(v) => setForm((p) => ({ ...p, endDate: v }))} />
            <FI label="Standard Rate (RWF/kg)" type="number" value={form.rateStandard} onChange={(v) => setForm((p) => ({ ...p, rateStandard: v }))} placeholder="155" />
            <FI label="Flotant Rate (RWF/kg)" type="number" value={form.rateFlotant} onChange={(v) => setForm((p) => ({ ...p, rateFlotant: v }))} placeholder="80" />
            <div style={{ gridColumn: "1/-1" }}><FI label="Notes" value={form.notes} onChange={(v) => setForm((p) => ({ ...p, notes: v }))} placeholder="Optional notes..." /></div>
          </div>
          <MF onCancel={() => setShowForm(false)} onSave={createSeason} label="Open Season" color={C.success} />
        </Modal>}
      {showEnrollForm && <Modal title="Enroll Station in Season" onClose={() => setShowEnrollForm(null)}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(180px,1fr))", gap: 11 }}>
            <div><FL>Washing Station</FL><select value={enrollForm.cwsId} onChange={(e) => setEnrollForm((p) => ({ ...p, cwsId: e.target.value }))} style={selS()}><option value="">— Select Station —</option>{cwsList.filter((c) => !stationSeasons.find((ss) => ss.cwsId === c.id && ss.seasonId === activeSeason?.id)).map((c) => <option key={c.id} value={c.id}>{c.name}</option>)}</select></div>
            <FI label="Station Start Date" type="date" value={enrollForm.startDate} onChange={(v) => setEnrollForm((p) => ({ ...p, startDate: v }))} />
          </div>
          <MF onCancel={() => setShowEnrollForm(null)} onSave={enrollStation} label="Enroll Station" color={C.coffee} />
        </Modal>}
    </div>;
}
function CWSDetailPage({ cwsId, onBack }) {
  const { currentUser: u, cwsList, farmers: farmers2, setFarmers, cherry, setCherry, cashbook, setCashbook, bankTx, setBankTx, expenses, setExpenses, debts, setDebts, stock, setStock, fundRequests, setFundRequests, users, addNote, online } = useApp();
  const cws = cwsList.find((c) => c.id === cwsId);
  const clerkOnly = u.role === "clerk";
  const [tab, setTab] = useState(clerkOnly ? "cherry" : "overview");
  const [showFarmerForm, setShowFarmerForm] = useState(false);
  const [showCherryForm, setShowCherryForm] = useState(false);
  const [showCashForm, setShowCashForm] = useState(false);
  const [showExpForm, setShowExpForm] = useState(false);
  const [showDebtForm, setShowDebtForm] = useState(false);
  const [showStockForm, setShowStockForm] = useState(false);
  const [showFundReqForm, setShowFundReqForm] = useState(false);
  const [showPayGNR, setShowPayGNR] = useState(null);
  const [farmerForm, setFarmerForm] = useState({ name: "", farmerId: "", group: "", phone: "" });
  const [cherryForm, setCherryForm] = useState({ date: today(), farmerId: "", gnrNumber: "", standardKg: "", flotantKg: "", rateStandard: "155", rateFlotant: "80", notes: "" });
  const [cashForm, setCashForm] = useState({ date: today(), type: "inflow", category: "Fund Transfer", description: "", amount: "", ref: "" });
  const [expForm, setExpForm] = useState({ date: today(), category: "Wages", description: "", amount: "", exploitable: true });
  const [debtForm, setDebtForm] = useState({ date: today(), type: "debt_given", party: "", description: "", amount: "" });
  const [stockForm, setStockForm] = useState({ date: today(), description: "", grade: "Parchment", tonnesIn: "", tonnesOut: "", unitCost: "", valuationMethod: "weighted_avg" });
  const [fundReqForm, setFundReqForm] = useState({ amount: "", reason: "" });
  const [payForm, setPayForm] = useState({ paymentMethod: "cash", notes: "", action: "paid" });
  const [inlineNewFarmer, setInlineNewFarmer] = useState(false);
  const [newFarmerForm, setNewFarmerForm] = useState({ name: "", farmerId: "", group: "", phone: "" });
  const saveInlineFarmer = () => {
    if (!newFarmerForm.name) return null;
    const newId = `f${Date.now()}`;
    const newFarmer = { ...newFarmerForm, id: newId, cwsId, balance: 0, createdAt: today(), active: true };
    setFarmers((p) => [...p, newFarmer]);
    setCherryForm((p) => ({ ...p, farmerId: newId }));
    setInlineNewFarmer(false);
    setNewFarmerForm({ name: "", farmerId: "", group: "", phone: "" });
    addNote(`Farmer ${newFarmerForm.name} registered and selected`, "success");
    return newId;
  };
  if (!cws) return <div style={{ color: C.textMuted, padding: 20 }}>Station not found.</div>;
  const myCwsFarmers = farmers2.filter((f) => f.cwsId === cwsId);
  const myCherry = cherry.filter((c) => c.cwsId === cwsId);
  const myCashbook = cashbook.filter((c) => c.cwsId === cwsId);
  const myBank = bankTx.filter((b) => b.cwsId === cwsId);
  const myExp = expenses.filter((e) => e.cwsId === cwsId);
  const myDebts = debts.filter((d) => d.cwsId === cwsId);
  const myStock = stock.filter((s) => s.cwsId === cwsId);
  const myFR = fundRequests.filter((f) => f.cwsId === cwsId);
  const cashBalance = myCashbook.reduce((s, c) => c.type === "inflow" ? s + c.amount : s - c.amount, 0);
  const bankBalance = myBank.reduce((s, b) => b.type === "credit" ? s + b.amount : s - b.amount, 0);
  const totalKg = myCherry.reduce((s, c) => s + c.totalKg, 0);
  const totalStdKg = myCherry.reduce((s, c) => s + c.standardKg, 0);
  const totalFltKg = myCherry.reduce((s, c) => s + c.flotantKg, 0);
  const totalPaid = myCherry.reduce((s, c) => s + c.totalPaid, 0);
  const totalExp = myExp.reduce((s, e) => s + e.amount, 0);
  const exploitableExp = myExp.filter((e) => e.exploitable).reduce((s, e) => s + e.amount, 0);
  const nonExploitableExp = myExp.filter((e) => !e.exploitable).reduce((s, e) => s + e.amount, 0);
  const calcCherry = (f) => {
    const std = (+f.standardKg || 0) * (+f.rateStandard || 0);
    const flt = (+f.flotantKg || 0) * (+f.rateFlotant || 0);
    const total = std + flt;
    const totalKgCalc = (+f.standardKg || 0) + (+f.flotantKg || 0);
    const avg = totalKgCalc > 0 ? total / totalKgCalc : 0;
    return { paymentStandard: std, paymentFlotant: flt, totalPaid: total, avgRate: +avg.toFixed(1) };
  };
  const cherryCalc = calcCherry(cherryForm);
  const saveFarmer = () => {
    if (!farmerForm.name) return;
    setFarmers((p) => [...p, { ...farmerForm, id: `f${Date.now()}`, cwsId, balance: 0, createdAt: today(), active: true }]);
    setShowFarmerForm(false);
    setFarmerForm({ name: "", farmerId: "", group: "", phone: "" });
    addNote(`Farmer ${farmerForm.name} registered`, "success");
  };
  const saveCherry = () => {
    if (!cherryForm.farmerId || !cherryForm.gnrNumber || !cherryForm.standardKg) return;
    const calc = calcCherry(cherryForm);
    const rec = { ...cherryForm, id: `ch${Date.now()}`, cwsId, ...calc, standardKg: +cherryForm.standardKg, flotantKg: +cherryForm.flotantKg || 0, rateStandard: +cherryForm.rateStandard, rateFlotant: +cherryForm.rateFlotant, paymentMethod: null, status: "pending", by: u.id, paidBy: null, paidAt: null, notes: cherryForm.notes || "" };
    setCherry((p) => [rec, ...p]);
    setShowCherryForm(false);
    setCherryForm({ date: today(), farmerId: "", gnrNumber: "", standardKg: "", flotantKg: "", rateStandard: "155", rateFlotant: "80", notes: "" });
    addNote(`GNR ${cherryForm.gnrNumber} saved \u2014 waiting for cashier to confirm payment`, "success");
  };
  const confirmGNRPayment = (action) => {
    if (!showPayGNR) return;
    const gnr = cherry.find((c) => c.id === showPayGNR);
    if (!gnr) return;
    const newStatus = action === "paid" ? "paid" : "not_paid";
    setCherry((p) => p.map((c) => c.id === showPayGNR ? { ...c, status: newStatus, paymentMethod: action === "paid" ? payForm.paymentMethod : null, paidBy: u.id, paidAt: (/* @__PURE__ */ new Date()).toLocaleString(), notes: payForm.notes || c.notes || "" } : c));
    if (action === "paid") {
      setCashbook((prev) => [{ id: `cb${Date.now()}`, cwsId, date: today(), type: "outflow", category: "Cherry Payment", description: `GNR ${gnr.gnrNumber} \u2014 ${myCwsFarmers.find((f) => f.id === gnr.farmerId)?.name || "Farmer"}`, amount: gnr.totalPaid, balance: 0, ref: gnr.gnrNumber, by: u.id }, ...prev]);
      addNote(`GNR ${gnr.gnrNumber} payment confirmed \u2014 ${payForm.paymentMethod?.replace(/_/g, " ")}`, "success");
    } else {
      addNote(`GNR ${gnr.gnrNumber} marked as NOT PAID \u2014 farmer debt recorded`, "warning");
    }
    setShowPayGNR(null);
    setPayForm({ paymentMethod: "cash", notes: "", action: "paid" });
  };
  const saveCash = () => {
    if (!cashForm.amount) return;
    setCashbook((p) => [{ ...cashForm, id: `cb${Date.now()}`, cwsId, amount: +cashForm.amount, balance: 0, by: u.id }, ...p]);
    setShowCashForm(false);
    setCashForm({ date: today(), type: "inflow", category: "Fund Transfer", description: "", amount: "", ref: "" });
    addNote("Cash book entry saved", "success");
  };
  const saveExp = () => {
    if (!expForm.amount) return;
    setExpenses((p) => [{ ...expForm, id: `ex${Date.now()}`, cwsId, amount: +expForm.amount, status: "pending", by: u.id }, ...p]);
    setShowExpForm(false);
    setExpForm({ date: today(), category: "Wages", description: "", amount: "", exploitable: true });
    addNote("Expense recorded, pending approval", "info");
  };
  const saveDebt = () => {
    if (!debtForm.amount) return;
    setDebts((p) => [{ ...debtForm, id: `dt${Date.now()}`, cwsId, amount: +debtForm.amount, balance: +debtForm.amount, status: "outstanding" }, ...p]);
    setShowDebtForm(false);
    setDebtForm({ date: today(), type: "debt_given", party: "", description: "", amount: "" });
    addNote("Debt/liability recorded", "info");
  };
  const saveStock = () => {
    if (!stockForm.tonnesIn) return;
    const val = (+stockForm.tonnesIn || 0) * (+stockForm.unitCost || 0);
    setStock((p) => [{ ...stockForm, id: `sk${Date.now()}`, cwsId, tonnesIn: +stockForm.tonnesIn, tonnesOut: +stockForm.tonnesOut || 0, tonnesBalance: +stockForm.tonnesIn - (+stockForm.tonnesOut || 0), unitCost: +stockForm.unitCost || 0, totalValue: val }, ...p]);
    setShowStockForm(false);
    setStockForm({ date: today(), description: "", grade: "Parchment", tonnesIn: "", tonnesOut: "", unitCost: "", valuationMethod: "weighted_avg" });
    addNote("Stock movement recorded", "success");
  };
  const saveFundReq = () => {
    if (!fundReqForm.amount || !fundReqForm.reason) return;
    setFundRequests((p) => [{ id: `fr${Date.now()}`, cwsId, requestedBy: u.id, amount: +fundReqForm.amount, reason: fundReqForm.reason, status: "pending_verification", requestedAt: (/* @__PURE__ */ new Date()).toLocaleString(), verifiedBy: null, verifiedAt: null, approvedBy: null, approvedAt: null, transferMethod: null, transferRef: null, notes: "" }, ...p]);
    setShowFundReqForm(false);
    setFundReqForm({ amount: "", reason: "" });
    addNote("Fund request submitted to HQ for verification", "info");
  };
  const tabDefs = clerkOnly ? [
    { id: "cherry", label: `Cherry (${myCherry.length})` }
  ] : [
    { id: "overview", label: "Overview" },
    { id: "farmers", label: `Farmers (${myCwsFarmers.length})` },
    { id: "cherry", label: `Cherry (${myCherry.length})` },
    { id: "cash", label: "Cash & Bank" },
    { id: "expenses", label: `Expenses (${myExp.length})` },
    { id: "debts", label: `Debts` },
    { id: "stock", label: "Stock" },
    { id: "report", label: "Daily Report" }
  ];
  return <div>
      {
    /* Header */
  }
      <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 18 }}>
        <button onClick={onBack} style={{ ...BtnS(C.border, false, true), padding: "6px 12px", fontSize: 12 }}>← Back</button>
        <div style={{ width: 40, height: 40, borderRadius: 10, background: `${C.coffee}18`, border: `1px solid ${C.coffee}35`, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 18 }}>☕</div>
        <div>
          <div style={{ fontFamily: "'Cormorant',serif", fontSize: 22, fontWeight: 700, color: C.coffeeLight }}>{cws.name}</div>
          <div style={{ fontSize: 12, color: C.textMuted }}>{cws.region}</div>
        </div>
        <div style={{ marginLeft: "auto", display: "flex", gap: 7, flexWrap: "wrap", justifyContent: "flex-end" }}>
          {canEnterCherry(u.role) && <button onClick={() => setShowCherryForm(true)} style={{ ...BtnS(C.coffee), fontSize: 11, padding: "6px 12px" }}>🍒 Cherry Entry</button>}
          {canRequestFunds(u.role) && (u.cwsAccess?.includes(cwsId) || canSeeAllStations(u.role)) && <button onClick={() => setShowFundReqForm(true)} style={{ ...BtnS(C.gold, true), fontSize: 11, padding: "6px 12px" }}>💰 Request Funds</button>}
          {canRegisterFarmer(u.role) && (u.cwsAccess?.includes(cwsId) || canSeeAllStations(u.role)) && <button onClick={() => setShowFarmerForm(true)} style={{ ...BtnS(C.info, true), fontSize: 11, padding: "6px 12px" }}>👨‍🌾 Register Farmer</button>}
          {canManageCash(u.role) && <button onClick={() => setShowCashForm(true)} style={{ ...BtnS(C.info, true), fontSize: 11, padding: "6px 12px" }}>+ Cash Entry</button>}
          {canRecordExpense(u.role) && <button onClick={() => setShowExpForm(true)} style={{ ...BtnS(C.warning, true), fontSize: 11, padding: "6px 12px" }}>+ Expense</button>}
        </div>
      </div>

      <Tabs tabs={tabDefs.map((t) => t.id)} labels={tabDefs.map((t) => t.label)} active={tab} onChange={setTab} color={C.coffee} />

      {
    /* ─── OVERVIEW ─────────────────────────────────────── */
  }
      {tab === "overview" && <div>
          <div style={{ className: "kpi-grid", style: { display: "grid" }, gap: 12, marginBottom: 16 }}>
            <SC label="Total Cherry (kg)" value={fmtKg(totalKg)} color={C.coffee} />
            <SC label="Standard kg" value={fmtKg(totalStdKg)} color={C.coffeeLight} />
            <SC label="Flotant kg" value={fmtKg(totalFltKg)} color={C.warning} />
            <SC label="Farmers Served" value={new Set(myCherry.map((c) => c.farmerId)).size} color={C.info} />
          </div>
          <div style={{ className: "kpi-grid", style: { display: "grid" }, gap: 12, marginBottom: 16 }}>
            <SC label="Total Farmer Payments" value={fmtRWF(totalPaid)} color={C.danger} />
            <SC label="Total Expenses" value={fmtRWF(totalExp)} color={C.warning} />
            <SC label="Cash Balance" value={fmtRWF(cashBalance)} color={cashBalance > 3e5 ? C.success : C.danger} />
            <SC label="Bank Balance" value={fmtRWF(bankBalance)} color={C.info} />
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(180px,1fr))", gap: 14, marginBottom: 16 }}>
            <div style={{ background: C.bgCard, border: `1px solid ${C.border}`, borderRadius: 12, padding: "14px 16px 8px" }}>
              <div style={{ fontWeight: 700, fontSize: 12, marginBottom: 12, color: C.textMuted, textTransform: "uppercase", letterSpacing: "1px" }}>Recent Cherry Deliveries</div>
              <GNRTable rows={myCherry.slice(0, 5)} cwsList={[cws]} farmers={myCwsFarmers} />
            </div>
            <div style={{ background: C.bgCard, border: `1px solid ${C.border}`, borderRadius: 12, padding: "14px 16px 8px" }}>
              <div style={{ fontWeight: 700, fontSize: 12, marginBottom: 12, color: C.textMuted, textTransform: "uppercase", letterSpacing: "1px" }}>Recent Expenses</div>
              <ExpTable rows={myExp.slice(0, 5)} />
            </div>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(2,1fr)", gap: 12 }}>
            <SC label="Exploitable Expenses" value={fmtRWF(exploitableExp)} color={C.coffee} sub="Directly tied to production" />
            <SC label="Non-Exploitable Expenses" value={fmtRWF(nonExploitableExp)} color={C.danger} sub="Admin / overhead costs" />
          </div>
        </div>}

      {
    /* ─── FARMERS ─────────────────────────────────────── */
  }
      {tab === "farmers" && <div>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 14 }}>
            <div style={{ fontSize: 13, color: C.textMuted }}>{myCwsFarmers.length} registered farmers at {cws.name}</div>
            {canRegisterFarmer(u.role) && <button onClick={() => setShowFarmerForm(true)} style={{ ...BtnS(C.coffee), fontSize: 11, padding: "7px 13px" }}>+ Register Farmer</button>}
          </div>
          <div style={{ background: C.bgCard, border: `1px solid ${C.border}`, borderRadius: 12, overflow: "hidden" }}>
            {myCwsFarmers.length === 0 ? <ES text="No farmers registered yet" /> : <div className="tbl-wrap"><table style={{ width: "100%", borderCollapse: "collapse" }}>
                <thead><tr style={{ background: C.surface }}>{["Farmer ID", "Name", "Group", "Phone", "Balance", "Status"].map((h) => <Th key={h}>{h}</Th>)}</tr></thead>
                <tbody>{myCwsFarmers.map((f) => <tr key={f.id} style={{ borderBottom: `1px solid ${C.border}15` }} onMouseEnter={(e) => e.currentTarget.style.background = C.surface} onMouseLeave={(e) => e.currentTarget.style.background = "transparent"}>
                    <Td style={{ color: C.gold, fontWeight: 700 }}>{f.farmerId}</Td>
                    <Td style={{ fontWeight: 600, color: C.text }}>{f.name}</Td>
                    <Td style={{ color: C.textMuted }}>{f.group}</Td>
                    <Td style={{ color: C.textMuted }}>{f.phone}</Td>
                    <Td style={{ color: f.balance > 0 ? C.warning : C.success, fontWeight: 700 }}>{fmtRWF(f.balance)}</Td>
                    <Td><SB status={f.active ? "active" : "rejected"} /></Td>
                  </tr>)}</tbody>
              </table></div>}
          </div>
        </div>}

      {
    /* ─── CHERRY PURCHASES ─────────────────────────────── */
  }
      {tab === "cherry" && <div>
          {
    /* Cashier: pending GNRs queue */
  }
          {canPayGNR(u.role) && myCherry.filter((c) => c.status === "pending").length > 0 && <div style={{ background: C.bgCard, border: `1px solid ${C.warning}28`, borderRadius: 12, overflow: "hidden", marginBottom: 14 }}>
              <div style={{ padding: "11px 16px", borderBottom: `1px solid ${C.border}`, fontWeight: 700, fontSize: 13, color: C.warning }}>
                ⏳ GNRs Awaiting Payment ({myCherry.filter((c) => c.status === "pending").length})
              </div>
              <div className="tbl-wrap"><table style={{ width: "100%", borderCollapse: "collapse" }}>
                <thead><tr style={{ background: C.surface }}>{["GNR #", "Farmer", "Date", "Total kg", "Total to Pay", "Action"].map((h) => <Th key={h}>{h}</Th>)}</tr></thead>
                <tbody>{myCherry.filter((c) => c.status === "pending").map((gnr) => {
    const f = myCwsFarmers.find((x) => x.id === gnr.farmerId);
    return <tr key={gnr.id} style={{ borderBottom: `1px solid ${C.border}15` }} onMouseEnter={(e) => e.currentTarget.style.background = C.surface} onMouseLeave={(e) => e.currentTarget.style.background = "transparent"}>
                    <Td style={{ color: C.gold, fontWeight: 700 }}>{gnr.gnrNumber}</Td>
                    <Td style={{ fontWeight: 600 }}>{f?.name || gnr.farmerId}</Td>
                    <Td style={{ color: C.textMuted }}>{gnr.date}</Td>
                    <Td style={{ color: C.coffee, fontWeight: 700 }}>{gnr.totalKg.toLocaleString()} kg</Td>
                    <Td style={{ fontWeight: 700, color: C.danger }}>{fmtRWF(gnr.totalPaid)}</Td>
                    <Td><div style={{ display: "flex", gap: 6 }}>
                      <button onClick={() => {
      setShowPayGNR(gnr.id);
      setPayForm({ paymentMethod: "cash", notes: "", action: "paid" });
    }} style={{ ...BtnS(C.success), fontSize: 10, padding: "4px 10px" }}>✓ Pay</button>
                      <button onClick={() => {
      setShowPayGNR(gnr.id);
      setPayForm({ paymentMethod: null, notes: "", action: "not_paid" });
    }} style={{ ...BtnS(C.danger, false, true), fontSize: 10, padding: "4px 10px" }}>Not Paid</button>
                    </div></Td>
                  </tr>;
  })}</tbody>
              </table></div>
            </div>}
          {
    /* Not paid — station owes these farmers */
  }
          {myCherry.filter((c) => c.status === "not_paid").length > 0 && <div style={{ background: C.bgCard, border: `1px solid ${C.danger}28`, borderRadius: 12, overflow: "hidden", marginBottom: 14 }}>
              <div style={{ padding: "11px 16px", borderBottom: `1px solid ${C.border}`, fontWeight: 700, fontSize: 13, color: C.danger }}>
                ⚠ Not Paid — Station Owes These Farmers ({myCherry.filter((c) => c.status === "not_paid").length})
              </div>
              <div className="tbl-wrap"><table style={{ width: "100%", borderCollapse: "collapse" }}>
                <thead><tr style={{ background: C.surface }}>{["GNR #", "Farmer", "Date", "Total kg", "Owed", "Notes", "Action"].map((h) => <Th key={h}>{h}</Th>)}</tr></thead>
                <tbody>{myCherry.filter((c) => c.status === "not_paid").map((gnr) => {
    const f = myCwsFarmers.find((x) => x.id === gnr.farmerId);
    return <tr key={gnr.id} style={{ borderBottom: `1px solid ${C.border}15` }} onMouseEnter={(e) => e.currentTarget.style.background = C.surface} onMouseLeave={(e) => e.currentTarget.style.background = "transparent"}>
                    <Td style={{ color: C.gold, fontWeight: 700 }}>{gnr.gnrNumber}</Td>
                    <Td style={{ fontWeight: 600 }}>{f?.name || gnr.farmerId}</Td>
                    <Td style={{ color: C.textMuted }}>{gnr.date}</Td>
                    <Td style={{ color: C.coffee, fontWeight: 700 }}>{gnr.totalKg.toLocaleString()} kg</Td>
                    <Td style={{ fontWeight: 700, color: C.danger }}>{fmtRWF(gnr.totalPaid)}</Td>
                    <Td style={{ color: C.textMuted, fontSize: 11 }}>{gnr.notes || "\u2014"}</Td>
                    <Td>{canPayGNR(u.role) && <button onClick={() => {
      setShowPayGNR(gnr.id);
      setPayForm({ paymentMethod: "cash", notes: "", action: "paid" });
    }} style={{ ...BtnS(C.success), fontSize: 10, padding: "4px 10px" }}>Pay Now</button>}</Td>
                  </tr>;
  })}</tbody>
              </table></div>
            </div>}
          <div style={{ className: "kpi-grid", style: { display: "grid" }, gap: 12, marginBottom: 16 }}>
            <SC label="Total Cherry kg" value={fmtKg(totalKg)} color={C.coffee} />
            <SC label="Standard kg" value={fmtKg(totalStdKg)} color={C.coffeeLight} />
            <SC label="Flotant kg" value={fmtKg(totalFltKg)} color={C.warning} />
            <SC label="Total Paid" value={fmtRWF(totalPaid)} color={C.danger} />
          </div>
          <div style={{ background: C.bgCard, border: `1px solid ${C.border}`, borderRadius: 12, overflow: "hidden" }}>
            <div style={{ padding: "11px 16px", borderBottom: `1px solid ${C.border}`, fontWeight: 700, fontSize: 13 }}>All GNR Records</div>
            <GNRTable rows={myCherry} cwsList={[cws]} farmers={myCwsFarmers} full />
          </div>
        </div>}

      {
    /* ─── CASH & BANK ─────────────────────────────────── */
  }
      {tab === "cash" && <div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(130px,1fr))", gap: 12, marginBottom: 16 }}>
            <SC label="Cash Book Balance" value={fmtRWF(cashBalance)} color={cashBalance > 0 ? C.success : C.danger} sub="Station cash on hand" />
            <SC label="Bank Balance" value={fmtRWF(bankBalance)} color={C.info} sub="Station bank account" />
            <SC label="Total Inflows" value={fmtRWF(myCashbook.filter((c) => c.type === "inflow").reduce((s, c) => s + c.amount, 0))} color={C.success} />
          </div>
          <Tabs tabs={["cashbook", "bank"]} labels={["Cash Book", "Bank Transactions"]} active={tab === "cash" ? "cashbook" : tab} onChange={(t) => {
  }} color={C.coffee} />
          <div style={{ background: C.bgCard, border: `1px solid ${C.border}`, borderRadius: 12, overflow: "hidden", marginBottom: 14 }}>
            <div style={{ padding: "11px 16px", borderBottom: `1px solid ${C.border}`, fontWeight: 700, fontSize: 13 }}>Cash Book</div>
            <CashTable rows={myCashbook} />
          </div>
          <div style={{ background: C.bgCard, border: `1px solid ${C.border}`, borderRadius: 12, overflow: "hidden" }}>
            <div style={{ padding: "11px 16px", borderBottom: `1px solid ${C.border}`, fontWeight: 700, fontSize: 13 }}>Bank Transactions</div>
            <BankTable rows={myBank} />
          </div>
        </div>}

      {
    /* ─── EXPENSES ────────────────────────────────────── */
  }
      {tab === "expenses" && <div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(130px,1fr))", gap: 12, marginBottom: 16 }}>
            <SC label="Total Expenses" value={fmtRWF(totalExp)} color={C.warning} />
            <SC label="Exploitable" value={fmtRWF(exploitableExp)} color={C.coffee} sub="Directly allocated to production" />
            <SC label="Non-Exploitable" value={fmtRWF(nonExploitableExp)} color={C.danger} sub="Overhead & admin" />
          </div>
          {
    /* Pending approval alert */
  }
          {myExp.filter((e) => e.status === "pending").length > 0 && canApproveExpense(u.role) && <div style={{ marginBottom: 14 }}>
              <Alert text={`\u23F3 ${myExp.filter((e) => e.status === "pending").length} expense(s) submitted by cashier awaiting your approval.`} color={C.warning} />
              <div style={{ background: C.bgCard, border: `1px solid ${C.warning}28`, borderRadius: 12, overflow: "hidden", marginTop: 8 }}>
                <div style={{ padding: "10px 16px", borderBottom: `1px solid ${C.border}`, fontWeight: 700, fontSize: 12, color: C.warning }}>Pending Approval</div>
                <div className="tbl-wrap"><table style={{ width: "100%", borderCollapse: "collapse" }}>
                  <thead><tr style={{ background: C.surface }}>{["Date", "Category", "Description", "Amount", "Action"].map((h) => <Th key={h}>{h}</Th>)}</tr></thead>
                  <tbody>{myExp.filter((e) => e.status === "pending").map((e) => <tr key={e.id} style={{ borderBottom: `1px solid ${C.border}15` }} onMouseEnter={(ev) => ev.currentTarget.style.background = C.surface} onMouseLeave={(ev) => ev.currentTarget.style.background = "transparent"}>
                      <Td style={{ color: C.textMuted }}>{e.date}</Td>
                      <Td style={{ fontWeight: 600, color: C.warning }}>{e.category}</Td>
                      <Td style={{ color: C.textMuted }}>{e.description || "\u2014"}</Td>
                      <Td style={{ fontWeight: 700, color: C.warning }}>{fmtRWF(e.amount)}</Td>
                      <Td><div style={{ display: "flex", gap: 6 }}>
                        <button onClick={() => setExpenses((p) => p.map((x) => x.id === e.id ? { ...x, status: "approved", approvedBy: u.id } : x))} style={{ ...BtnS(C.success), fontSize: 10, padding: "3px 9px" }}>✓ Approve</button>
                        <button onClick={() => setExpenses((p) => p.map((x) => x.id === e.id ? { ...x, status: "rejected" } : x))} style={{ ...BtnS(C.danger, false, true), fontSize: 10, padding: "3px 9px" }}>✕ Reject</button>
                      </div></Td>
                    </tr>)}</tbody>
                </table></div>
              </div>
            </div>}
          {
    /* By category */
  }
          <div style={{ background: C.bgCard, border: `1px solid ${C.border}`, borderRadius: 12, padding: "14px 16px", marginBottom: 14 }}>
            <div style={{ fontWeight: 700, fontSize: 12, marginBottom: 10, color: C.textMuted, textTransform: "uppercase", letterSpacing: "1px" }}>By Category</div>
            <div style={{ className: "kpi-grid", style: { display: "grid" }, gap: 8 }}>
              {EXPENSE_CATS.map((cat) => {
    const amt = myExp.filter((e) => e.category === cat && e.status === "approved").reduce((s, e) => s + e.amount, 0);
    if (!amt) return null;
    return <div key={cat} style={{ background: C.surface, borderRadius: 8, padding: "8px 10px" }}>
                  <div style={{ fontSize: 10, color: C.textDim, marginBottom: 3 }}>{cat}</div>
                  <div style={{ fontSize: 13, fontWeight: 700, color: C.warning }}>{fmtRWF(amt)}</div>
                </div>;
  }).filter(Boolean)}
            </div>
          </div>
          <div style={{ background: C.bgCard, border: `1px solid ${C.border}`, borderRadius: 12, overflow: "hidden" }}>
            <div style={{ padding: "11px 16px", borderBottom: `1px solid ${C.border}`, fontWeight: 700, fontSize: 13 }}>Expense Ledger</div>
            <ExpTable rows={myExp} full />
          </div>
        </div>}

      {
    /* ─── DEBTS & LIABILITIES ────────────────────────── */
  }
      {tab === "debts" && <div>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 14 }}>
            <div style={{ fontSize: 13, color: C.textMuted }}>Debt register for {cws.name}</div>
            {canManageCash(u.role) && <button onClick={() => setShowDebtForm(true)} style={{ ...BtnS(C.danger, true), fontSize: 11, padding: "7px 13px" }}>+ Add Debt</button>}
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(130px,1fr))", gap: 12, marginBottom: 14 }}>
            <SC label="Debt Given to Others" value={fmtRWF(myDebts.filter((d) => d.type === "debt_given").reduce((s, d) => s + d.amount, 0))} color={C.danger} />
            <SC label="Debt Owed to CWS" value={fmtRWF(myDebts.filter((d) => d.type === "debt_to_others").reduce((s, d) => s + d.amount, 0))} color={C.warning} />
            <SC label="Outstanding Balance" value={fmtRWF(myDebts.reduce((s, d) => s + d.balance, 0))} color={C.info} />
          </div>
          <div style={{ background: C.bgCard, border: `1px solid ${C.border}`, borderRadius: 12, overflow: "hidden" }}>
            {myDebts.length === 0 ? <ES text="No debts or liabilities recorded" /> : <div className="tbl-wrap"><table style={{ width: "100%", borderCollapse: "collapse" }}>
                <thead><tr style={{ background: C.surface }}>{["Date", "Type", "Party", "Description", "Amount", "Balance", "Status"].map((h) => <Th key={h}>{h}</Th>)}</tr></thead>
                <tbody>{myDebts.map((d) => <tr key={d.id} style={{ borderBottom: `1px solid ${C.border}15` }} onMouseEnter={(e) => e.currentTarget.style.background = C.surface} onMouseLeave={(e) => e.currentTarget.style.background = "transparent"}>
                    <Td style={{ color: C.textMuted }}>{d.date}</Td>
                    <Td><span style={{ padding: "2px 7px", borderRadius: 4, fontSize: 10, fontWeight: 700, background: `${d.type === "debt_given" ? C.danger : C.warning}18`, color: d.type === "debt_given" ? C.danger : C.warning }}>{d.type.replace(/_/g, " ")}</span></Td>
                    <Td style={{ fontWeight: 600 }}>{d.party}</Td>
                    <Td style={{ color: C.textMuted }}>{d.description}</Td>
                    <Td style={{ fontWeight: 700, color: C.danger }}>{fmtRWF(d.amount)}</Td>
                    <Td style={{ fontWeight: 700, color: C.warning }}>{fmtRWF(d.balance)}</Td>
                    <Td><SB status={d.status} /></Td>
                  </tr>)}</tbody>
              </table></div>}
          </div>
        </div>}

      {
    /* ─── STOCK ───────────────────────────────────────── */
  }
      {tab === "stock" && <div>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 14 }}>
            <div style={{ fontSize: 13, color: C.textMuted }}>Inventory & stock movements</div>
            {canApproveExpense(u.role) && <button onClick={() => setShowStockForm(true)} style={{ ...BtnS(C.info, true), fontSize: 11, padding: "7px 13px" }}>+ Stock Movement</button>}
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(130px,1fr))", gap: 12, marginBottom: 14 }}>
            <SC label="Total Tonnes In" value={`${myStock.reduce((s, sk) => s + sk.tonnesIn, 0).toFixed(2)} T`} color={C.coffee} />
            <SC label="Total Tonnes Out" value={`${myStock.reduce((s, sk) => s + sk.tonnesOut, 0).toFixed(2)} T`} color={C.warning} />
            <SC label="Total Stock Value" value={fmtRWF(myStock.reduce((s, sk) => s + sk.totalValue, 0))} color={C.gold} />
          </div>
          <div style={{ background: C.bgCard, border: `1px solid ${C.border}`, borderRadius: 12, overflow: "hidden" }}>
            {myStock.length === 0 ? <ES text="No stock movements recorded" /> : <div className="tbl-wrap"><table style={{ width: "100%", borderCollapse: "collapse" }}>
                <thead><tr style={{ background: C.surface }}>{["Date", "Description", "Grade", "Tonnes In", "Tonnes Out", "Balance", "Unit Cost", "Total Value", "Method"].map((h) => <Th key={h}>{h}</Th>)}</tr></thead>
                <tbody>{myStock.map((sk) => <tr key={sk.id} style={{ borderBottom: `1px solid ${C.border}15` }} onMouseEnter={(e) => e.currentTarget.style.background = C.surface} onMouseLeave={(e) => e.currentTarget.style.background = "transparent"}>
                    <Td style={{ color: C.textMuted }}>{sk.date}</Td>
                    <Td style={{ fontWeight: 500 }}>{sk.description}</Td>
                    <Td><span style={{ padding: "2px 7px", borderRadius: 4, fontSize: 10, fontWeight: 700, background: `${C.coffee}18`, color: C.coffeeLight }}>{sk.grade}</span></Td>
                    <Td style={{ color: C.success, fontWeight: 700 }}>{sk.tonnesIn.toFixed(2)} T</Td>
                    <Td style={{ color: sk.tonnesOut > 0 ? C.warning : C.textDim }}>{sk.tonnesOut.toFixed(2)} T</Td>
                    <Td style={{ color: C.gold, fontWeight: 700 }}>{sk.tonnesBalance.toFixed(2)} T</Td>
                    <Td style={{ color: C.textMuted }}>{fmtRWF(sk.unitCost)}/kg</Td>
                    <Td style={{ fontWeight: 700, color: C.text }}>{fmtRWF(sk.totalValue)}</Td>
                    <Td style={{ fontSize: 10, color: C.textDim }}>{sk.valuationMethod.replace(/_/g, " ")}</Td>
                  </tr>)}</tbody>
              </table></div>}
          </div>
        </div>}

      {
    /* ─── DAILY REPORT ────────────────────────────────── */
  }
      {tab === "report" && <div>
          <div style={{ fontFamily: "'Cormorant',serif", fontSize: 18, fontWeight: 700, color: C.text, marginBottom: 14 }}>Daily Station Report — {cws.name}</div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(180px,1fr))", gap: 14, marginBottom: 14 }}>
            <div style={{ background: C.bgCard, border: `1px solid ${C.coffee}28`, borderRadius: 12, padding: "16px 18px" }}>
              <div style={{ fontSize: 10, color: C.textDim, textTransform: "uppercase", letterSpacing: "1px", marginBottom: 12 }}>Today's Snapshot</div>
              {[
    ["Farmers Served Today", new Set(myCherry.filter((c) => c.date === today()).map((c) => c.farmerId)).size],
    ["Total kg Purchased Today", fmtKg(myCherry.filter((c) => c.date === today()).reduce((s, c) => s + c.totalKg, 0))],
    ["Standard kg Today", fmtKg(myCherry.filter((c) => c.date === today()).reduce((s, c) => s + c.standardKg, 0))],
    ["Flotant kg Today", fmtKg(myCherry.filter((c) => c.date === today()).reduce((s, c) => s + c.flotantKg, 0))],
    ["Total Payments Today", fmtRWF(myCherry.filter((c) => c.date === today()).reduce((s, c) => s + c.totalPaid, 0))],
    ["Cash Available", fmtRWF(cashBalance)],
    ["Fund Requests Pending", myFR.filter((f) => f.status.includes("pending")).length]
  ].map(([l, v]) => <div key={l} style={{ display: "flex", justifyContent: "space-between", borderBottom: `1px solid ${C.border}20`, padding: "6px 0" }}>
                  <span style={{ fontSize: 12, color: C.textMuted }}>{l}</span>
                  <span style={{ fontSize: 13, fontWeight: 700, color: C.text }}>{v}</span>
                </div>)}
            </div>
            <div style={{ background: C.bgCard, border: `1px solid ${C.coffee}28`, borderRadius: 12, padding: "16px 18px" }}>
              <div style={{ fontSize: 10, color: C.textDim, textTransform: "uppercase", letterSpacing: "1px", marginBottom: 12 }}>Season Consolidated</div>
              {[
    ["Total Cherry Purchased", fmtKg(totalKg)],
    ["Total Standard Grade", fmtKg(totalStdKg)],
    ["Total Flotant Grade", fmtKg(totalFltKg)],
    ["Total Farmer Payments", fmtRWF(totalPaid)],
    ["Total Expenses (All)", fmtRWF(totalExp)],
    ["Stock on Hand", `${myStock.reduce((s, sk) => s + sk.tonnesBalance, 0).toFixed(2)} T`],
    ["Outstanding Debts", fmtRWF(myDebts.reduce((s, d) => s + d.balance, 0))]
  ].map(([l, v]) => <div key={l} style={{ display: "flex", justifyContent: "space-between", borderBottom: `1px solid ${C.border}20`, padding: "6px 0" }}>
                  <span style={{ fontSize: 12, color: C.textMuted }}>{l}</span>
                  <span style={{ fontSize: 13, fontWeight: 700, color: C.text }}>{v}</span>
                </div>)}
            </div>
          </div>
          <div style={{ background: C.bgCard, border: `1px solid ${C.border}`, borderRadius: 12, padding: "14px 16px 8px" }}>
            <div style={{ fontWeight: 700, fontSize: 12, marginBottom: 12, color: C.textMuted, textTransform: "uppercase", letterSpacing: "1px" }}>Expense Breakdown</div>
            <div style={{ className: "kpi-grid", style: { display: "grid" }, gap: 8 }}>
              {EXPENSE_CATS.map((cat) => {
    const amt = myExp.filter((e) => e.category === cat).reduce((s, e) => s + e.amount, 0);
    if (!amt) return null;
    return <div key={cat} style={{ background: C.surface, borderRadius: 8, padding: "8px 10px" }}><div style={{ fontSize: 10, color: C.textDim, marginBottom: 3 }}>{cat}</div><div style={{ fontSize: 12, fontWeight: 700, color: C.warning }}>{fmtRWF(amt)}</div></div>;
  }).filter(Boolean)}
            </div>
          </div>
        </div>}

      {
    /* ═══ MODALS ══════════════════════════════════════════════════ */
  }
      {showFarmerForm && <Modal title={`Register Farmer \u2014 ${cws.name}`} onClose={() => setShowFarmerForm(false)}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(180px,1fr))", gap: 11 }}>
            <FI label="Full Name" value={farmerForm.name} onChange={(v) => setFarmerForm((p) => ({ ...p, name: v }))} placeholder="Farmer full name" />
            <FI label="Farmer ID (from booklet)" value={farmerForm.farmerId} onChange={(v) => setFarmerForm((p) => ({ ...p, farmerId: v }))} placeholder={`${cwsId.slice(0, 3).toUpperCase()}-XXX`} />
            <FI label="Farmer Group" value={farmerForm.group} onChange={(v) => setFarmerForm((p) => ({ ...p, group: v }))} placeholder="Group name" />
            <FI label="Phone Number" value={farmerForm.phone} onChange={(v) => setFarmerForm((p) => ({ ...p, phone: v }))} placeholder="+250788..." />
          </div>
          <MF onCancel={() => setShowFarmerForm(false)} onSave={saveFarmer} label="Register Farmer" color={C.coffee} />
        </Modal>}
      {showCherryForm && <Modal title={`Cherry Entry \u2014 ${cws.name}`} onClose={() => { setShowCherryForm(false); setInlineNewFarmer(false); setNewFarmerForm({ name: "", farmerId: "", group: "", phone: "" }); }} wide>
          {!online && <Alert text="Offline — saved locally, will sync when online." color={C.warning} />}
          <div style={{ padding: "8px 12px", background: `${C.info}10`, border: `1px solid ${C.info}25`, borderRadius: 7, fontSize: 12, color: C.info, marginBottom: 12 }}>
            ℹ️ <b>Clerk role:</b> Enter GNR data here. The cashier will verify and confirm payment.
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(180px,1fr))", gap: 11 }}>
            <FI label="Date" type="date" value={cherryForm.date} onChange={(v) => setCherryForm((p) => ({ ...p, date: v }))} />
            <div style={{ gridColumn: "1/-1" }}>
              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 5 }}>
                <FL>Farmer</FL>
                <button onClick={() => { setInlineNewFarmer((v) => !v); setCherryForm((p) => ({ ...p, farmerId: "" })); setNewFarmerForm({ name: "", farmerId: "", group: "", phone: "" }); }} style={{ fontSize: 10, padding: "3px 9px", borderRadius: 6, border: `1px solid ${inlineNewFarmer ? C.coffee : C.borderLight}`, background: inlineNewFarmer ? `${C.coffee}18` : "transparent", color: inlineNewFarmer ? C.coffeeLight : C.textMuted, cursor: "pointer", fontWeight: 600 }}>{inlineNewFarmer ? "← Select existing" : "+ Register new farmer"}</button>
              </div>
              {!inlineNewFarmer ? (
                <div>
                  <select value={cherryForm.farmerId} onChange={(e) => setCherryForm((p) => ({ ...p, farmerId: e.target.value }))} style={selS()}>
                    <option value="">— Select Farmer —</option>
                    {myCwsFarmers.map((f) => <option key={f.id} value={f.id}>{f.name} ({f.farmerId})</option>)}
                  </select>
                  {cherryForm.farmerId && (() => { const sel = myCwsFarmers.find((f) => f.id === cherryForm.farmerId); return sel ? <div style={{ marginTop: 7, padding: "8px 12px", background: `${C.coffee}0D`, border: `1px solid ${C.coffee}28`, borderRadius: 8, display: "flex", alignItems: "center", gap: 10 }}><div style={{ width: 30, height: 30, borderRadius: "50%", background: `${C.coffee}28`, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 12, fontWeight: 700, color: C.coffeeLight, flexShrink: 0 }}>{sel.name.split(" ").map((n) => n[0]).slice(0, 2).join("")}</div><div><div style={{ fontSize: 12, fontWeight: 700, color: C.text }}>{sel.name}</div><div style={{ fontSize: 10, color: C.textMuted }}>{sel.farmerId}{sel.group ? ` · ${sel.group}` : ""}{sel.phone ? ` · ${sel.phone}` : ""}</div></div></div> : null; })()}
                </div>
              ) : (
                <div style={{ padding: "14px 16px", background: `${C.coffee}08`, border: `1px solid ${C.coffee}30`, borderRadius: 10 }}>
                  <div style={{ fontSize: 11, fontWeight: 700, color: C.coffeeLight, marginBottom: 10 }}>👨‍🌾 Register New Farmer <span style={{ fontSize: 10, fontWeight: 400, color: C.textMuted }}>— saved to station farmers list</span></div>
                  <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(160px,1fr))", gap: 9 }}>
                    <FI label="Full Name *" value={newFarmerForm.name} onChange={(v) => setNewFarmerForm((p) => ({ ...p, name: v }))} placeholder="Farmer full name" />
                    <FI label="Farmer ID (booklet)" value={newFarmerForm.farmerId} onChange={(v) => setNewFarmerForm((p) => ({ ...p, farmerId: v }))} placeholder={`${cwsId.slice(0, 3).toUpperCase()}-XXX`} />
                    <FI label="Farmer Group" value={newFarmerForm.group} onChange={(v) => setNewFarmerForm((p) => ({ ...p, group: v }))} placeholder="Group name" />
                    <FI label="Phone" value={newFarmerForm.phone} onChange={(v) => setNewFarmerForm((p) => ({ ...p, phone: v }))} placeholder="+250788..." />
                  </div>
                  <button onClick={saveInlineFarmer} disabled={!newFarmerForm.name} style={{ marginTop: 10, ...BtnS(C.coffee), padding: "7px 14px", fontSize: 11, opacity: newFarmerForm.name ? 1 : 0.45 }}>✓ Register & Select This Farmer</button>
                  {cherryForm.farmerId && (() => { const sel = myCwsFarmers.find((f) => f.id === cherryForm.farmerId); return sel ? <div style={{ marginTop: 8, padding: "7px 10px", background: `${C.success}10`, border: `1px solid ${C.success}28`, borderRadius: 7, fontSize: 11, color: C.success }}>✓ Registered and selected: <b>{sel.name}</b></div> : null; })()}
                </div>
              )}
            </div>
            <FI label="GNR Number (from booklet)" value={cherryForm.gnrNumber} onChange={(v) => setCherryForm((p) => ({ ...p, gnrNumber: v }))} placeholder="GNR-XXX-0000" />
            <FI label="Standard kg" type="number" value={cherryForm.standardKg} onChange={(v) => setCherryForm((p) => ({ ...p, standardKg: v }))} placeholder="0" />
            <FI label="Flotant kg" type="number" value={cherryForm.flotantKg} onChange={(v) => setCherryForm((p) => ({ ...p, flotantKg: v }))} placeholder="0" />
            <FI label="Rate Standard (RWF/kg)" type="number" value={cherryForm.rateStandard} onChange={(v) => setCherryForm((p) => ({ ...p, rateStandard: v }))} placeholder="155" />
            <FI label="Rate Flotant (RWF/kg)" type="number" value={cherryForm.rateFlotant} onChange={(v) => setCherryForm((p) => ({ ...p, rateFlotant: v }))} placeholder="80" />
            <div style={{ gridColumn: "1/-1" }}><FI label="Notes (optional)" value={cherryForm.notes || ""} onChange={(v) => setCherryForm((p) => ({ ...p, notes: v }))} placeholder="Any remarks..." /></div>
          </div>
          {(cherryForm.standardKg || cherryForm.flotantKg) && <div style={{ marginTop: 12, padding: "12px 16px", background: `${C.coffee}0E`, border: `1px solid ${C.coffee}28`, borderRadius: 9, display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(90px,1fr))", gap: 8 }}>
              {[["Total kg", fmtKg((+cherryForm.standardKg || 0) + (+cherryForm.flotantKg || 0))], ["Std Payment", fmtRWF(cherryCalc.paymentStandard)], ["Flt Payment", fmtRWF(cherryCalc.paymentFlotant)], ["Total to Pay", fmtRWF(cherryCalc.totalPaid)], ["Avg Rate", `${cherryCalc.avgRate} RWF/kg`]].map(([l, v]) => <div key={l}><div style={{ fontSize: 9, color: C.textDim, marginBottom: 2 }}>{l}</div><div style={{ fontSize: 13, fontWeight: 700, color: C.gold }}>{v}</div></div>)}
            </div>}
          <MF onCancel={() => { setShowCherryForm(false); setInlineNewFarmer(false); setNewFarmerForm({ name: "", farmerId: "", group: "", phone: "" }); }} onSave={saveCherry} label="Save GNR — Send to Cashier" color={C.coffee} />
        </Modal>}
      {showCashForm && <Modal title={`Cash Book Entry \u2014 ${cws.name}`} onClose={() => setShowCashForm(false)}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(180px,1fr))", gap: 11 }}>
            <FI label="Date" type="date" value={cashForm.date} onChange={(v) => setCashForm((p) => ({ ...p, date: v }))} />
            <div><FL>Type</FL><select value={cashForm.type} onChange={(e) => setCashForm((p) => ({ ...p, type: e.target.value }))} style={selS()}><option value="inflow">Inflow</option><option value="outflow">Outflow</option></select></div>
            <div><FL>Category</FL><select value={cashForm.category} onChange={(e) => setCashForm((p) => ({ ...p, category: e.target.value }))} style={selS()}>{["Fund Transfer", "Cherry Payment", "Expense Payment", "Wage Payment", "Other"].map((c) => <option key={c}>{c}</option>)}</select></div>
            <FI label="Reference / Voucher" value={cashForm.ref} onChange={(v) => setCashForm((p) => ({ ...p, ref: v }))} placeholder="REF-000" />
            <FI label="Amount (RWF)" type="number" value={cashForm.amount} onChange={(v) => setCashForm((p) => ({ ...p, amount: v }))} placeholder="0" />
            <div style={{ gridColumn: "1/-1" }}><FI label="Description" value={cashForm.description} onChange={(v) => setCashForm((p) => ({ ...p, description: v }))} placeholder="Brief description..." /></div>
          </div>
          <MF onCancel={() => setShowCashForm(false)} onSave={saveCash} label="Save Entry" color={C.info} />
        </Modal>}
      {showExpForm && <Modal title={`Record Expense \u2014 ${cws.name}`} onClose={() => setShowExpForm(false)}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(180px,1fr))", gap: 11 }}>
            <FI label="Date" type="date" value={expForm.date} onChange={(v) => setExpForm((p) => ({ ...p, date: v }))} />
            <div><FL>Category</FL><select value={expForm.category} onChange={(e) => setExpForm((p) => ({ ...p, category: e.target.value }))} style={selS()}>{EXPENSE_CATS.map((c) => <option key={c}>{c}</option>)}</select></div>
            <FI label="Amount (RWF)" type="number" value={expForm.amount} onChange={(v) => setExpForm((p) => ({ ...p, amount: v }))} placeholder="0" />
            <div style={{ display: "flex", alignItems: "center", gap: 10, paddingTop: 20 }}>
              <input type="checkbox" id="exploitable" checked={expForm.exploitable} onChange={(e) => setExpForm((p) => ({ ...p, exploitable: e.target.checked }))} style={{ width: 15, height: 15, accentColor: C.coffee }} />
              <label htmlFor="exploitable" style={{ fontSize: 12, color: C.textMuted, cursor: "pointer" }}>Exploitable (production-related)</label>
            </div>
            <div style={{ gridColumn: "1/-1" }}><FI label="Description" value={expForm.description} onChange={(v) => setExpForm((p) => ({ ...p, description: v }))} placeholder="What was this expense for?" /></div>
          </div>
          <MF onCancel={() => setShowExpForm(false)} onSave={saveExp} label="Record Expense" color={C.warning} />
        </Modal>}
      {showDebtForm && <Modal title={`Record Debt / Liability \u2014 ${cws.name}`} onClose={() => setShowDebtForm(false)}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(180px,1fr))", gap: 11 }}>
            <FI label="Date" type="date" value={debtForm.date} onChange={(v) => setDebtForm((p) => ({ ...p, date: v }))} />
            <div><FL>Type</FL><select value={debtForm.type} onChange={(e) => setDebtForm((p) => ({ ...p, type: e.target.value }))} style={selS()}><option value="debt_given">Debt Given by CWS</option><option value="debt_to_others">Debt Owed to Others</option><option value="other_credit">Other Credit</option></select></div>
            <FI label="Party (name / company)" value={debtForm.party} onChange={(v) => setDebtForm((p) => ({ ...p, party: v }))} placeholder="Who is the other party?" />
            <FI label="Amount (RWF)" type="number" value={debtForm.amount} onChange={(v) => setDebtForm((p) => ({ ...p, amount: v }))} placeholder="0" />
            <div style={{ gridColumn: "1/-1" }}><FI label="Description" value={debtForm.description} onChange={(v) => setDebtForm((p) => ({ ...p, description: v }))} placeholder="Nature of debt..." /></div>
          </div>
          <MF onCancel={() => setShowDebtForm(false)} onSave={saveDebt} label="Record Debt" color={C.danger} />
        </Modal>}
      {showStockForm && <Modal title={`Stock Movement \u2014 ${cws.name}`} onClose={() => setShowStockForm(false)}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(180px,1fr))", gap: 11 }}>
            <FI label="Date" type="date" value={stockForm.date} onChange={(v) => setStockForm((p) => ({ ...p, date: v }))} />
            <div><FL>Grade</FL><select value={stockForm.grade} onChange={(e) => setStockForm((p) => ({ ...p, grade: e.target.value }))} style={selS()}>{["Parchment", "Green Coffee", "Specialty", "Defects", "By-Products"].map((g) => <option key={g}>{g}</option>)}</select></div>
            <FI label="Tonnes In" type="number" value={stockForm.tonnesIn} onChange={(v) => setStockForm((p) => ({ ...p, tonnesIn: v }))} placeholder="0.00" />
            <FI label="Tonnes Out" type="number" value={stockForm.tonnesOut} onChange={(v) => setStockForm((p) => ({ ...p, tonnesOut: v }))} placeholder="0.00" />
            <FI label="Unit Cost (RWF/kg)" type="number" value={stockForm.unitCost} onChange={(v) => setStockForm((p) => ({ ...p, unitCost: v }))} placeholder="0" />
            <div><FL>Valuation Method</FL><select value={stockForm.valuationMethod} onChange={(e) => setStockForm((p) => ({ ...p, valuationMethod: e.target.value }))} style={selS()}><option value="fifo">FIFO</option><option value="weighted_avg">Weighted Average</option></select></div>
            <div style={{ gridColumn: "1/-1" }}><FI label="Description" value={stockForm.description} onChange={(v) => setStockForm((p) => ({ ...p, description: v }))} placeholder="Describe the stock movement..." /></div>
          </div>
          <MF onCancel={() => setShowStockForm(false)} onSave={saveStock} label="Save Stock Movement" color={C.info} />
        </Modal>}
      {showFundReqForm && <Modal title={`Request Funds from HQ \u2014 ${cws.name}`} onClose={() => setShowFundReqForm(false)}>
          <Alert text="This request will go to HQ Operations Manager for verification, then Managing Director for approval and transfer." color={C.gold} />
          <div style={{ marginTop: 12, display: "grid", gap: 11 }}>
            <FI label="Amount Requested (RWF)" type="number" value={fundReqForm.amount} onChange={(v) => setFundReqForm((p) => ({ ...p, amount: v }))} placeholder="0" />
            <FI label="Reason / Purpose" value={fundReqForm.reason} onChange={(v) => setFundReqForm((p) => ({ ...p, reason: v }))} placeholder="e.g. Week 2 cherry purchase payments" />
          </div>
          <MF onCancel={() => setShowFundReqForm(false)} onSave={saveFundReq} label="Submit Fund Request" color={C.gold} />
        </Modal>}
      {showPayGNR && (() => {
    const gnr = cherry.find((c) => c.id === showPayGNR);
    const farmer = myCwsFarmers.find((f) => f.id === gnr?.farmerId);
    return <Modal title="Confirm GNR Payment" onClose={() => {
      setShowPayGNR(null);
    }}>
            {gnr && <div style={{ padding: "12px 14px", background: C.surface, borderRadius: 9, border: `1px solid ${C.coffee}28`, marginBottom: 14 }}>
              <div style={{ fontWeight: 700, color: C.gold, marginBottom: 4, fontSize: 14 }}>{gnr.gnrNumber}</div>
              <div style={{ fontSize: 12, color: C.textMuted, marginBottom: 2 }}>Farmer: <b style={{ color: C.text }}>{farmer?.name || "\u2014"}</b> · {farmer?.farmerId}</div>
              <div style={{ fontSize: 12, color: C.textMuted, marginBottom: 2 }}>Cherry: <b>{gnr.standardKg.toLocaleString()} kg std</b> + <b>{gnr.flotantKg.toLocaleString()} kg flotant</b> = <b style={{ color: C.coffee }}>{gnr.totalKg.toLocaleString()} kg total</b></div>
              <div style={{ fontSize: 14, fontWeight: 700, color: C.danger, marginTop: 6 }}>Total to Pay: {fmtRWF(gnr.totalPaid)}</div>
            </div>}
            <div style={{ display: "grid", gap: 12 }}>
              <div><FL>Payment Method</FL>
                <select value={payForm.paymentMethod || "cash"} onChange={(e) => setPayForm((p) => ({ ...p, paymentMethod: e.target.value }))} style={selS()}>
                  {PAYMENT_METHODS.map((m) => <option key={m} value={m}>{m.replace(/_/g, " ")}</option>)}
                </select>
              </div>
              <FI label="Notes (optional)" value={payForm.notes} onChange={(v) => setPayForm((p) => ({ ...p, notes: v }))} placeholder="e.g. Paid via Airtel Money" />
            </div>
            <div style={{ display: "flex", gap: 8, marginTop: 20, paddingTop: 14, borderTop: `1px solid ${C.border}` }}>
              <button onClick={() => setShowPayGNR(null)} style={{ padding: "7px 15px", background: "transparent", border: `1px solid ${C.border}`, borderRadius: 7, color: C.textMuted, fontSize: 12, cursor: "pointer" }}>Cancel</button>
              <button onClick={() => confirmGNRPayment("not_paid")} style={{ ...BtnS(C.warning, true), padding: "7px 13px", fontSize: 12, marginLeft: "auto" }}>⚠ Mark Not Paid</button>
              <button onClick={() => confirmGNRPayment("paid")} style={{ ...BtnS(C.success), padding: "7px 16px", fontSize: 12 }}>✓ Confirm Paid</button>
            </div>
          </Modal>;
  })()}
    </div>;
}
function FundRequestsPage({ onBack }) {
  const { currentUser: u, fundRequests, setFundRequests, cwsList, users, addNote } = useApp();
  const [processModal, setProcessModal] = useState(null);
  const [approveModal, setApproveModal] = useState(null);
  const [processForm, setProcessForm] = useState({ notes: "" });
  const [approveForm, setApproveForm] = useState({ transferMethod: "bank_transfer", transferRef: "", notes: "" });
  const verify = (id) => {
    setFundRequests((p) => p.map((f) => f.id === id ? { ...f, status: "pending_approval", verifiedBy: u.id, verifiedAt: (/* @__PURE__ */ new Date()).toLocaleString(), notes: processForm.notes } : f));
    setProcessModal(null);
    setProcessForm({ notes: "" });
    addNote("Fund request verified \u2014 sent to MD for approval", "success");
  };
  const approve = (id) => {
    setFundRequests((p) => p.map((f) => f.id === id ? { ...f, status: "approved", approvedBy: u.id, approvedAt: (/* @__PURE__ */ new Date()).toLocaleString(), transferMethod: approveForm.transferMethod, transferRef: approveForm.transferRef, notes: approveForm.notes } : f));
    setApproveModal(null);
    setApproveForm({ transferMethod: "bank_transfer", transferRef: "", notes: "" });
    addNote("Fund request approved and recorded", "success");
  };
  const reject = (id) => {
    setFundRequests((p) => p.map((f) => f.id === id ? { ...f, status: "rejected" } : f));
    addNote("Fund request rejected", "warning");
  };
  const grouped = { "pending_verification": [], "pending_approval": [], "approved": [], "rejected": [] };
  fundRequests.forEach((f) => {
    if (grouped[f.status]) grouped[f.status].push(f);
  });
  return <div>
      <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 20 }}>
        <button onClick={onBack} style={{ ...BtnS(C.border, false, true), padding: "6px 12px", fontSize: 12 }}>← Back</button>
        <div><div style={{ fontFamily: "'Cormorant',serif", fontSize: 22, fontWeight: 700, color: C.goldLight }}>Fund Requests</div><div style={{ fontSize: 12, color: C.textMuted }}>Station → HQ Ops Verification → MD Approval → Transfer</div></div>
      </div>

      {
    /* Workflow diagram */
  }
      <div style={{ display: "flex", gap: 8, marginBottom: 20, alignItems: "center", flexWrap: "wrap" }}>
        {[["1. Station Manager", "Submits request", "station_manager", C.coffee], ["\u2192", null, null, C.textDim], ["2. HQ Ops Manager", "Verifies request", "hq_ops", C.purple], ["\u2192", null, null, C.textDim], ["3. Managing Director", "Approves & transfers", "md", C.gold], ["\u2192", null, null, C.textDim], ["4. HQ Finance", "Reconciles", "hq_finance", C.warning]].map((item, i) => {
    if (item[0] === "\u2192") return <span key={i} style={{ fontSize: 18, color: item[3] }}>→</span>;
    return <div key={i} style={{ background: C.bgCard, border: `1px solid ${item[3]}30`, borderRadius: 10, padding: "10px 14px", minWidth: 130 }}>
            <div style={{ fontSize: 11, fontWeight: 700, color: item[3] }}>{item[0]}</div>
            <div style={{ fontSize: 10, color: C.textMuted, marginTop: 2 }}>{item[1]}</div>
          </div>;
  })}
      </div>

      {
    /* Pending verification */
  }
      {grouped.pending_verification.length > 0 && <div style={{ marginBottom: 16 }}>
          <div style={{ fontWeight: 700, fontSize: 13, marginBottom: 10, color: C.warning }}>⏳ Pending Verification ({grouped.pending_verification.length})</div>
          {grouped.pending_verification.map((fr) => <FundRequestCard key={fr.id} fr={fr} cwsList={cwsList} users={users} canVerify={canVerifyFunds(u.role)} onVerify={() => {
    setProcessModal(fr.id);
    setProcessForm({ notes: "" });
  }} onReject={() => reject(fr.id)} />)}
        </div>}
      {
    /* Pending approval */
  }
      {grouped.pending_approval.length > 0 && <div style={{ marginBottom: 16 }}>
          <div style={{ fontWeight: 700, fontSize: 13, marginBottom: 10, color: C.gold }}>🔐 Pending MD Approval ({grouped.pending_approval.length})</div>
          {grouped.pending_approval.map((fr) => <FundRequestCard key={fr.id} fr={fr} cwsList={cwsList} users={users} canApprove={canApproveFunds(u.role)} onApprove={() => {
    setApproveModal(fr.id);
    setApproveForm({ transferMethod: "bank_transfer", transferRef: "", notes: "" });
  }} onReject={() => reject(fr.id)} />)}
        </div>}
      {
    /* Approved */
  }
      {grouped.approved.length > 0 && <div style={{ marginBottom: 16 }}>
          <div style={{ fontWeight: 700, fontSize: 13, marginBottom: 10, color: C.success }}>✅ Approved Transfers ({grouped.approved.length})</div>
          {grouped.approved.map((fr) => <FundRequestCard key={fr.id} fr={fr} cwsList={cwsList} users={users} />)}
        </div>}
      {
    /* Rejected */
  }
      {grouped.rejected.length > 0 && <div style={{ marginBottom: 16 }}>
          <div style={{ fontWeight: 700, fontSize: 13, marginBottom: 10, color: C.danger }}>✕ Rejected ({grouped.rejected.length})</div>
          {grouped.rejected.map((fr) => <FundRequestCard key={fr.id} fr={fr} cwsList={cwsList} users={users} />)}
        </div>}

      {processModal && <Modal title="Verify Fund Request" onClose={() => setProcessModal(null)}>
          <Alert text="Verifying this request will send it to the Managing Director for final approval and fund transfer." color={C.warning} />
          <div style={{ marginTop: 12 }}><FI label="Verification Notes (optional)" value={processForm.notes} onChange={(v) => setProcessForm((p) => ({ ...p, notes: v }))} placeholder="Any notes for MD..." /></div>
          <MF onCancel={() => setProcessModal(null)} onSave={() => verify(processModal)} label="Verify & Forward to MD" color={C.warning} />
        </Modal>}
      {approveModal && <Modal title="Approve & Record Transfer" onClose={() => setApproveModal(null)}>
          <Alert text="This will mark the funds as approved. Record the transfer method and reference for reconciliation." color={C.gold} />
          <div style={{ marginTop: 12, display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(180px,1fr))", gap: 11 }}>
            <div><FL>Transfer Method</FL><select value={approveForm.transferMethod} onChange={(e) => setApproveForm((p) => ({ ...p, transferMethod: e.target.value }))} style={selS()}>{PAYMENT_METHODS.map((m) => <option key={m} value={m}>{m.replace(/_/g, " ")}</option>)}</select></div>
            <FI label="Transfer Reference" value={approveForm.transferRef} onChange={(v) => setApproveForm((p) => ({ ...p, transferRef: v }))} placeholder="e.g. FT-2025-001" />
            <div style={{ gridColumn: "1/-1" }}><FI label="Notes" value={approveForm.notes} onChange={(v) => setApproveForm((p) => ({ ...p, notes: v }))} placeholder="Additional notes..." /></div>
          </div>
          <MF onCancel={() => setApproveModal(null)} onSave={() => approve(approveModal)} label="✓ Approve & Record Transfer" color={C.gold} />
        </Modal>}
    </div>;
}
function FundRequestCard({ fr, cwsList, users, canVerify, canApprove, onVerify, onApprove, onReject }) {
  const cws = cwsList.find((c) => c.id === fr.cwsId);
  const reqBy = users.find((u) => u.id === fr.requestedBy);
  const statusColors = { "pending_verification": C.warning, "pending_approval": C.gold, "approved": C.success, "rejected": C.danger };
  const col = statusColors[fr.status] || C.textMuted;
  return <div style={{ background: C.bgCard, border: `1px solid ${col}28`, borderRadius: 11, padding: "16px 18px", marginBottom: 10 }}>
      <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", marginBottom: 10 }}>
        <div>
          <div style={{ fontWeight: 700, fontSize: 14, color: C.text }}>{cws?.name} — <span style={{ color: col }}>{fmtRWF(fr.amount)}</span></div>
          <div style={{ fontSize: 12, color: C.textMuted, marginTop: 2 }}>{fr.reason}</div>
          <div style={{ fontSize: 11, color: C.textDim, marginTop: 2 }}>Requested by {reqBy?.name || "\u2014"} · {fr.requestedAt}</div>
        </div>
        <SB status={fr.status} />
      </div>
      {fr.verifiedBy && <div style={{ fontSize: 11, color: C.textDim, marginBottom: 4 }}>Verified by: {users.find((u) => u.id === fr.verifiedBy)?.name || "\u2014"} · {fr.verifiedAt}</div>}
      {fr.approvedBy && <div style={{ fontSize: 11, color: C.success, marginBottom: 4 }}>✓ Approved by: {users.find((u) => u.id === fr.approvedBy)?.name || "\u2014"} · {fr.approvedAt} · {fr.transferMethod?.replace(/_/g, " ")} · Ref: {fr.transferRef}</div>}
      {(canVerify || canApprove || onReject) && <div style={{ display: "flex", gap: 8, marginTop: 8 }}>
          {canVerify && fr.status === "pending_verification" && <button onClick={onVerify} style={{ ...BtnS(C.warning, true), fontSize: 11, padding: "5px 12px" }}>✓ Verify</button>}
          {canApprove && fr.status === "pending_approval" && <button onClick={onApprove} style={{ ...BtnS(C.gold), fontSize: 11, padding: "5px 12px" }}>✓ Approve & Transfer</button>}
          {onReject && ["pending_verification", "pending_approval"].includes(fr.status) && <button onClick={onReject} style={{ ...BtnS(C.danger, false, true), fontSize: 11, padding: "5px 12px" }}>✕ Reject</button>}
        </div>}
    </div>;
}
function AlertsPanel() {
  const { cherry, expenses, cashbook, fundRequests, cwsList, currentUser: u } = useApp();
  const alerts = [];
  cwsList.forEach((cws) => {
    const cb = cashbook.filter((c) => c.cwsId === cws.id);
    const bal = cb.reduce((s, c) => c.type === "inflow" ? s + c.amount : s - c.amount, 0);
    if (bal < 3e5) alerts.push({ type: "danger", icon: "\u{1F4B8}", msg: `Low cash at ${cws.name}: ${fmtRWF(bal)}`, cws: cws.id });
  });
  const pendExp = expenses.filter((e) => e.status === "pending");
  if (pendExp.length > 0) alerts.push({ type: "warning", icon: "\u23F3", msg: `${pendExp.length} expense(s) pending manager approval` });
  const pendFR = fundRequests.filter((f) => f.status === "pending_verification" || f.status === "pending_approval");
  if (pendFR.length > 0) alerts.push({ type: "warning", icon: "\u{1F4B0}", msg: `${pendFR.length} fund request(s) awaiting action` });
  const bigPurchases = cherry.filter((c) => c.totalKg > 1e3);
  if (bigPurchases.length > 0) alerts.push({ type: "info", icon: "\u{1F4E6}", msg: `${bigPurchases.length} large cherry purchase(s) over 1,000 kg detected` });
  if (!alerts.length) return null;
  return <div style={{ marginBottom: 16 }}>
      {alerts.map((a, i) => <div key={i} style={{ display: "flex", gap: 8, alignItems: "flex-start", padding: "8px 12px", background: `${a.type === "danger" ? C.danger : a.type === "warning" ? C.warning : C.info}10`, border: `1px solid ${a.type === "danger" ? C.danger : a.type === "warning" ? C.warning : C.info}28`, borderRadius: 8, marginBottom: 6, fontSize: 12 }}>
          <span style={{ flexShrink: 0 }}>{a.icon}</span>
          <span style={{ color: a.type === "danger" ? C.danger : a.type === "warning" ? C.warning : C.info, fontWeight: 600 }}>{a.msg}</span>
        </div>)}
    </div>;
}
function WarehousePage() {
  const { currentUser: u, warehouseStock, setWarehouseStock, cwsList, addNote } = useApp();
  const [showForm, setShowForm] = useState(false);
  const [form, setForm] = useState({ fromCwsId: "", grade: "Parchment", tonnes: "", lotNumber: "", gnrRefs: "", transportDetails: "", notes: "" });
  const totalTonnes = warehouseStock.reduce((s, w) => s + w.tonnes, 0);
  const pending = warehouseStock.filter((w) => w.status === "pending");
  const confirmed = warehouseStock.filter((w) => w.status === "confirmed");
  const confirmShipment = (id) => {
    setWarehouseStock((p) => p.map((w) => w.id === id ? { ...w, status: "confirmed", confirmedBy: u.id, confirmedAt: (/* @__PURE__ */ new Date()).toISOString().replace("T", " ").slice(0, 16) } : w));
    addNote("Warehouse shipment confirmed", "warehouse");
  };
  const send = () => {
    if (!form.fromCwsId || !form.tonnes) return;
    setWarehouseStock((p) => [...p, { id: "wh" + Date.now(), fromCwsId: form.fromCwsId, sentBy: u.id, date: (/* @__PURE__ */ new Date()).toISOString().split("T")[0], grade: form.grade, tonnes: parseFloat(form.tonnes), lotNumber: form.lotNumber, gnrRefs: form.gnrRefs, transportDetails: form.transportDetails, status: "pending", confirmedBy: null, confirmedAt: null, notes: form.notes }]);
    setShowForm(false);
    setForm({ fromCwsId: "", grade: "Parchment", tonnes: "", lotNumber: "", gnrRefs: "", transportDetails: "", notes: "" });
    addNote("New shipment sent to warehouse", "warehouse");
  };
  return <div>
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 18 }}>
        <div>
          <div style={{ fontFamily: "'Cormorant',serif", fontSize: 26, fontWeight: 700, color: C.text }}>Warehouse</div>
          <div style={{ fontSize: 13, color: C.textMuted }}>Parchment Stock · Shipment Tracking</div>
        </div>
        {canSendToWarehouse(u.role) && <button onClick={() => setShowForm(true)} style={{ ...BtnS(C.gold), padding: "8px 16px", fontSize: 12 }}>+ Send to Warehouse</button>}
      </div>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(130px,1fr))", gap: 12, marginBottom: 20 }}>
        <SC label="Total Tonnes" value={totalTonnes.toFixed(2) + " T"} color={C.gold} />
        <SC label="Pending Confirmation" value={pending.length} color={C.warning} />
        <SC label="Confirmed" value={confirmed.length} color={C.success} />
      </div>
      {pending.length > 0 && canConfirmWarehouse(u.role) && <div style={{ marginBottom: 18, background: C.bgCard, border: `1px solid ${C.warning}40`, borderRadius: 12, overflow: "hidden" }}>
          <div style={{ padding: "11px 16px", borderBottom: `1px solid ${C.border}`, fontWeight: 700, fontSize: 13, color: C.warning }}>Pending Confirmation</div>
          {pending.map((w) => {
    const cws = cwsList.find((c) => c.id === w.fromCwsId);
    return <div key={w.id} style={{ padding: "11px 16px", borderBottom: `1px solid ${C.border}15`, display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <div>
                  <div style={{ fontWeight: 600, fontSize: 13 }}>{w.lotNumber || "No Lot #"} · {cws?.name}</div>
                  <div style={{ fontSize: 11, color: C.textMuted, marginTop: 2 }}>{w.date} · {w.tonnes} T {w.grade}</div>
                </div>
                <button onClick={() => confirmShipment(w.id)} style={{ ...BtnS(C.success), padding: "6px 14px", fontSize: 11 }}>Confirm</button>
              </div>;
  })}
        </div>}
      <div style={{ background: C.bgCard, border: `1px solid ${C.border}`, borderRadius: 12, overflow: "hidden" }}>
        <div style={{ padding: "11px 16px", borderBottom: `1px solid ${C.border}`, fontWeight: 700, fontSize: 13 }}>All Shipments ({warehouseStock.length})</div>
        {warehouseStock.length === 0 ? <ES text="No shipments yet" /> : <div className="tbl-wrap"><table style={{ width: "100%", borderCollapse: "collapse" }}>
          <thead><tr style={{ background: C.surface }}>{["Date", "Station", "Lot #", "Grade", "Tonnes", "Status", "Confirmed At"].map((h) => <Th key={h}>{h}</Th>)}</tr></thead>
          <tbody>{warehouseStock.map((w) => {
    const cws = cwsList.find((c) => c.id === w.fromCwsId);
    return <tr key={w.id} style={{ borderBottom: `1px solid ${C.border}15` }} onMouseEnter={(e) => e.currentTarget.style.background = C.surface} onMouseLeave={(e) => e.currentTarget.style.background = "transparent"}>
                <Td style={{ color: C.textMuted }}>{w.date}</Td>
                <Td style={{ color: C.coffeeLight, fontWeight: 600 }}>{cws?.name || w.fromCwsId}</Td>
                <Td style={{ color: C.gold, fontWeight: 700 }}>{w.lotNumber || "\u2014"}</Td>
                <Td>{w.grade}</Td>
                <Td style={{ fontWeight: 700, color: C.info }}>{w.tonnes} T</Td>
                <Td><SB status={w.status} /></Td>
                <Td style={{ color: C.textDim, fontSize: 11 }}>{w.confirmedAt?.split(" ")[0] || "\u2014"}</Td>
              </tr>;
  })}</tbody>
        </table></div>}
      </div>
      {showForm && <Modal title="Send Stock to Warehouse" onClose={() => setShowForm(false)} wide>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(180px,1fr))", gap: 12 }}>
            <div><FL>From Station</FL><select value={form.fromCwsId} onChange={(e) => setForm((p) => ({ ...p, fromCwsId: e.target.value }))} style={selS()}><option value="">— Select —</option>{cwsList.map((c) => <option key={c.id} value={c.id}>{c.name}</option>)}</select></div>
            <div><FL>Grade</FL><select value={form.grade} onChange={(e) => setForm((p) => ({ ...p, grade: e.target.value }))} style={selS()}><option>Parchment</option><option>Green</option></select></div>
            <FI label="Tonnes" type="number" value={form.tonnes} onChange={(v) => setForm((p) => ({ ...p, tonnes: v }))} placeholder="e.g. 2.5" />
            <FI label="Lot Number" value={form.lotNumber} onChange={(v) => setForm((p) => ({ ...p, lotNumber: v }))} placeholder="LOT-XXX-001" />
            <FI label="GNR References" value={form.gnrRefs} onChange={(v) => setForm((p) => ({ ...p, gnrRefs: v }))} placeholder="GNR-MSZ-0001" />
            <FI label="Transport Details" value={form.transportDetails} onChange={(v) => setForm((p) => ({ ...p, transportDetails: v }))} placeholder="Truck plate RAC..." />
          </div>
          <div style={{ marginTop: 12 }}><FI label="Notes" value={form.notes} onChange={(v) => setForm((p) => ({ ...p, notes: v }))} placeholder="Optional" /></div>
          <MF onCancel={() => setShowForm(false)} onSave={send} label="Send to Warehouse" color={C.gold} />
        </Modal>}
    </div>;
}
function ReportsPage() {
  const { cherry, expenses, cashbook, bankTx, stock, debts, cwsList, machTx, fundRequests, farmers: farmers2 } = useApp();
  const [reportType, setReportType] = useState("cherry");
  const [filterStation, setFilterStation] = useState("all");
  const [filterFrom, setFilterFrom] = useState("");
  const [filterTo, setFilterTo] = useState("");
  const inRange = (date) => {
    if (filterFrom && date < filterFrom) return false;
    if (filterTo && date > filterTo) return false;
    return true;
  };
  const inStation = (cwsId) => filterStation === "all" || cwsId === filterStation;
  const fCherry = cherry.filter((c) => inStation(c.cwsId) && inRange(c.date));
  const fExpenses = expenses.filter((e) => inStation(e.cwsId) && inRange(e.date));
  const fCashbook = cashbook.filter((c) => inStation(c.cwsId) && inRange(c.date));
  const fBank = bankTx.filter((b) => inStation(b.cwsId) && inRange(b.date));
  const fDebts = debts.filter((d) => inStation(d.cwsId));
  const fStock = stock.filter((s) => inStation(s.cwsId) && inRange(s.date));
  const fFR = fundRequests.filter((f) => inStation(f.cwsId));
  const totalCherryKg = fCherry.reduce((s, c) => s + c.totalKg, 0);
  const totalPaid = fCherry.reduce((s, c) => s + c.totalPaid, 0);
  const totalExp = fExpenses.filter((e) => e.status === "approved").reduce((s, e) => s + e.amount, 0);
  const totalMachIncome = machTx.filter((t) => t.type === "income").reduce((s, t) => s + t.amount, 0);
  const totalStock = fStock.reduce((s, sk) => s + sk.totalValue, 0);
  const totalDebts = fDebts.reduce((s, d) => s + d.balance, 0);
  const expByCat = EXPENSE_CATS.map((cat) => ({ name: cat, value: fExpenses.filter((e) => e.category === cat && e.status === "approved").reduce((s, e) => s + e.amount, 0) })).filter((d) => d.value > 0);
  const PIE_COLORS = ["#B8733A", "#3A7CA8", "#C8A84B", "#48B860", "#D44040", "#8A4EC8", "#D89830", "#7A5AC8", "#5A8A6A", "#4888C8", "#7AAABB", "#8888AA"];
  const stationRows = (filterStation === "all" ? cwsList : cwsList.filter((c) => c.id === filterStation)).map((cws) => {
    const ck = cherry.filter((c) => c.cwsId === cws.id && inRange(c.date));
    const ex = expenses.filter((e) => e.cwsId === cws.id && inRange(e.date) && e.status === "approved");
    const cb = cashbook.filter((c) => c.cwsId === cws.id && inRange(c.date));
    const cashBal = cb.reduce((s, c) => c.type === "inflow" ? s + c.amount : s - c.amount, 0);
    return { cws, kg: ck.reduce((s, c) => s + c.totalKg, 0), paid: ck.reduce((s, c) => s + c.totalPaid, 0), exp: ex.reduce((s, e) => s + e.amount, 0), cashBal, farmers: new Set(ck.map((c) => c.farmerId)).size };
  });
  const exportExcel = (type) => {
    let rows = [];
    let filename = "";
    if (type === "cherry") {
      rows = [
        ["Date", "GNR Number", "Station", "Farmer ID", "Standard kg", "Flotant kg", "Total kg", "Rate Std", "Rate Flt", "Payment Std", "Payment Flt", "Total Paid", "Avg Rate", "Method", "Status"],
        ...fCherry.map((c) => {
          const cws = cwsList.find((x) => x.id === c.cwsId);
          const f = farmers2.find((x) => x.id === c.farmerId);
          return [c.date, c.gnrNumber, cws?.name || c.cwsId, f?.farmerId || c.farmerId, c.standardKg, c.flotantKg, c.totalKg, c.rateStandard, c.rateFlotant, c.paymentStandard, c.paymentFlotant, c.totalPaid, c.avgRate, c.paymentMethod, c.status];
        })
      ];
      filename = "cherry_purchases";
    } else if (type === "expenses") {
      rows = [
        ["Date", "Station", "Category", "Description", "Amount", "Exploitable", "Status"],
        ...fExpenses.map((e) => {
          const cws = cwsList.find((x) => x.id === e.cwsId);
          return [e.date, cws?.name || e.cwsId, e.category, e.description, e.amount, e.exploitable ? "Yes" : "No", e.status];
        })
      ];
      filename = "expenses";
    } else if (type === "cashbook") {
      rows = [
        ["Date", "Station", "Type", "Category", "Description", "Amount", "Reference"],
        ...fCashbook.map((c) => {
          const cws = cwsList.find((x) => x.id === c.cwsId);
          return [c.date, cws?.name || c.cwsId, c.type, c.category, c.description, c.amount, c.ref];
        })
      ];
      filename = "cashbook";
    } else if (type === "fund_requests") {
      rows = [
        ["Station", "Requested By", "Amount", "Reason", "Status", "Requested At", "Transfer Method", "Ref"],
        ...fFR.map((f) => {
          const cws = cwsList.find((x) => x.id === f.cwsId);
          return [cws?.name || f.cwsId, f.requestedBy, f.amount, f.reason, f.status, f.requestedAt || "", f.transferMethod || "", f.transferRef || ""];
        })
      ];
      filename = "fund_requests";
    } else if (type === "station_summary") {
      rows = [
        ["Station", "Region", "Cherry kg", "Farmers", "Payments (RWF)", "Approved Expenses (RWF)", "Cash Balance", "Net"],
        ...stationRows.map((r) => [r.cws.name, r.cws.region, r.kg, r.farmers, r.paid, r.exp, r.cashBal, r.cashBal - r.paid - r.exp])
      ];
      filename = "station_summary";
    }
    const csv = rows.map((r) => r.map((v) => `"${String(v).replace(/"/g, '""')}"`).join(",")).join("\n");
    const blob = new Blob([csv], { type: "text/csv;charset=utf-8;" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    const suffix = filterStation !== "all" ? `_${filterStation}` : "_all_stations";
    const dateStr = filterFrom ? `_${filterFrom}_to_${filterTo || "present"}` : "";
    a.href = url;
    a.download = `bender_${filename}${suffix}${dateStr}.csv`;
    a.click();
    URL.revokeObjectURL(url);
  };
  const printReport = () => {
    const stationName = filterStation === "all" ? "All Stations" : cwsList.find((c) => c.id === filterStation)?.name || filterStation;
    const dateRange = filterFrom ? `${filterFrom} to ${filterTo || "present"}` : "All dates";
    const w = window.open("", "_blank");
    w.document.write(`<html><head><title>Bender Exports \u2014 ${reportType} Report</title>
    <style>body{font-family:Arial,sans-serif;font-size:11px;color:#111;padding:20px;}
    h1{font-size:18px;margin-bottom:4px;}h2{font-size:14px;color:#555;margin-bottom:16px;}
    table{width:100%;border-collapse:collapse;margin-bottom:24px;}
    th{background:#0F1810;color:#C8A84B;padding:7px 10px;text-align:left;font-size:10px;text-transform:uppercase;}
    td{padding:6px 10px;border-bottom:1px solid #ddd;font-size:11px;}
    tr:nth-child(even){background:#f5f5f5;}
    .kpi-grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(140px,1fr));gap:12px;margin-bottom:20px;}
    .kpi{border:1px solid #ddd;padding:10px;border-radius:6px;}
    .kpi-label{font-size:9px;color:#888;text-transform:uppercase;}
    .kpi-value{font-size:16px;font-weight:700;margin-top:4px;}
    @media print{body{padding:0;}}
    </style></head><body>
    <h1>Bender Exports Ltd. \u2014 Report</h1>
    <h2>${stationName} \xB7 ${dateRange} \xB7 Type: ${reportType}</h2>
    <div class="kpi-grid">
      <div class="kpi"><div class="kpi-label">Cherry Purchased</div><div class="kpi-value">${totalCherryKg.toLocaleString()} kg</div></div>
      <div class="kpi"><div class="kpi-label">Farmer Payments</div><div class="kpi-value">${totalPaid.toLocaleString()} RWF</div></div>
      <div class="kpi"><div class="kpi-label">Total Expenses</div><div class="kpi-value">${totalExp.toLocaleString()} RWF</div></div>
      <div class="kpi"><div class="kpi-label">Stock Value</div><div class="kpi-value">${totalStock.toLocaleString()} RWF</div></div>
    </div>
    <table><thead><tr><th>Station</th><th>Cherry kg</th><th>Farmers</th><th>Payments (RWF)</th><th>Expenses (RWF)</th><th>Cash Balance</th><th>Net</th></tr></thead>
    <tbody>${stationRows.map((r) => `<tr><td>${r.cws.name}</td><td>${r.kg.toLocaleString()}</td><td>${r.farmers}</td><td>${r.paid.toLocaleString()}</td><td>${r.exp.toLocaleString()}</td><td>${r.cashBal.toLocaleString()}</td><td>${(r.cashBal - r.paid - r.exp).toLocaleString()}</td></tr>`).join("")}</tbody></table></div>
    <p style="color:#888;font-size:10px;margin-top:20px">Generated: ${(/* @__PURE__ */ new Date()).toLocaleString()} \xB7 Bender Exports Ltd.</p>
    </body></html>`);
    w.document.close();
    w.print();
  };
  const REPORT_TABS = [
    { id: "cherry", label: "Cherry Purchases" },
    { id: "expenses", label: "Expenses" },
    { id: "cashbook", label: "Cash & Bank" },
    { id: "station_summary", label: "Station Summary" },
    { id: "fund_requests", label: "Fund Requests" },
    { id: "stock", label: "Stock" },
    { id: "debts", label: "Debts" }
  ];
  return <div>
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 16, flexWrap: "wrap", gap: 10 }}>
        <div style={{ fontFamily: "'Cormorant',serif", fontSize: 24, fontWeight: 700, color: C.text }}>Consolidated Reports</div>
        <div style={{ display: "flex", gap: 8 }}>
          <button onClick={() => exportExcel(reportType)} style={{ ...BtnS(C.success), fontSize: 11, padding: "7px 13px" }}>⬇ Export Excel</button>
          <button onClick={printReport} style={{ ...BtnS(C.info, true), fontSize: 11, padding: "7px 13px" }}>🖨 Print</button>
        </div>
      </div>

      {
    /* ── FILTER BAR ─────────────────────────────────────────── */
  }
      <div style={{ display: "flex", gap: 10, alignItems: "center", marginBottom: 16, flexWrap: "wrap", padding: "12px 16px", background: C.bgCard, borderRadius: 11, border: `1px solid ${C.border}` }}>
        <span style={{ fontSize: 11, fontWeight: 700, color: C.textDim, textTransform: "uppercase", letterSpacing: "1px", flexShrink: 0 }}>Filters</span>
        <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
          <span style={{ fontSize: 11, color: C.textMuted }}>Station:</span>
          <select value={filterStation} onChange={(e) => setFilterStation(e.target.value)} style={{ ...selS(), width: "auto", padding: "6px 10px", fontSize: 12 }}>
            <option value="all">All Stations</option>
            {cwsList.map((c) => <option key={c.id} value={c.id}>{c.name}</option>)}
          </select>
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
          <span style={{ fontSize: 11, color: C.textMuted }}>From:</span>
          <input type="date" value={filterFrom} onChange={(e) => setFilterFrom(e.target.value)} style={{ ...selS(), width: "auto", padding: "6px 10px", fontSize: 12 }} />
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
          <span style={{ fontSize: 11, color: C.textMuted }}>To:</span>
          <input type="date" value={filterTo} onChange={(e) => setFilterTo(e.target.value)} style={{ ...selS(), width: "auto", padding: "6px 10px", fontSize: 12 }} />
        </div>
        {(filterStation !== "all" || filterFrom || filterTo) && <button onClick={() => {
    setFilterStation("all");
    setFilterFrom("");
    setFilterTo("");
  }} style={{ ...BtnS(C.danger, false, true), fontSize: 11, padding: "5px 10px" }}>✕ Clear</button>}
        <span style={{ marginLeft: "auto", fontSize: 11, color: C.textDim }}>
          {filterStation !== "all" ? cwsList.find((c) => c.id === filterStation)?.name : "All Stations"}
          {filterFrom ? ` \xB7 ${filterFrom}${filterTo ? ` \u2192 ${filterTo}` : " \u2192 present"}` : ""}
        </span>
      </div>

      {
    /* ── KPI SUMMARY ────────────────────────────────────────── */
  }
      <div style={{ className: "kpi-grid", style: { display: "grid" }, gap: 12, marginBottom: 16 }}>
        <SC label="Cherry Purchased" value={fmtKg(totalCherryKg)} color={C.coffee} />
        <SC label="Farmer Payments" value={fmtRWF(totalPaid)} color={C.danger} />
        <SC label="Approved Expenses" value={fmtRWF(totalExp)} color={C.warning} />
        <SC label="Stock Value" value={fmtRWF(totalStock)} color={C.gold} />
      </div>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(130px,1fr))", gap: 12, marginBottom: 16 }}>
        <SC label="Machine Revenue" value={fmtRWF(totalMachIncome)} color={C.machinery} />
        <SC label="Outstanding Debts" value={fmtRWF(totalDebts)} color={C.info} />
        <SC label="Approved Fund Transfers" value={fmtRWF(fFR.filter((f) => f.status === "approved").reduce((s, f) => s + f.amount, 0))} color={C.success} />
      </div>

      {
    /* ── REPORT TYPE TABS ───────────────────────────────────── */
  }
      <Tabs tabs={REPORT_TABS.map((t) => t.id)} labels={REPORT_TABS.map((t) => t.label)} active={reportType} onChange={setReportType} color={C.gold} />

      {
    /* ── CHERRY REPORT ──────────────────────────────────────── */
  }
      {reportType === "cherry" && <div>
          <div style={{ className: "kpi-grid", style: { display: "grid" }, gap: 10, marginBottom: 14 }}>
            <SC label="GNR Records" value={fCherry.length} color={C.coffee} />
            <SC label="Standard kg" value={fmtKg(fCherry.reduce((s, c) => s + c.standardKg, 0))} color={C.coffeeLight} />
            <SC label="Flotant kg" value={fmtKg(fCherry.reduce((s, c) => s + c.flotantKg, 0))} color={C.warning} />
            <SC label="Avg Rate" value={`${fCherry.length > 0 ? (fCherry.reduce((s, c) => s + c.avgRate, 0) / fCherry.length).toFixed(1) : 0} RWF/kg`} color={C.info} />
          </div>
          <div style={{ background: C.bgCard, border: `1px solid ${C.border}`, borderRadius: 12, overflow: "hidden" }}>
            <div style={{ padding: "11px 16px", borderBottom: `1px solid ${C.border}`, fontWeight: 700, fontSize: 13, display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              <span>Cherry Purchase Records ({fCherry.length})</span>
              <button onClick={() => exportExcel("cherry")} style={{ ...BtnS(C.success, true), fontSize: 10, padding: "4px 10px" }}>⬇ CSV</button>
            </div>
            <GNRTable rows={fCherry} cwsList={cwsList} farmers={farmers2} full showStation />
          </div>
        </div>}

      {
    /* ── EXPENSES REPORT ────────────────────────────────────── */
  }
      {reportType === "expenses" && <div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(180px,1fr))", gap: 14, marginBottom: 14 }}>
            <div style={{ background: C.bgCard, border: `1px solid ${C.border}`, borderRadius: 12, padding: "14px 16px 8px" }}>
              <div style={{ fontWeight: 700, fontSize: 12, marginBottom: 12 }}>By Category (Approved)</div>
              <ResponsiveContainer width="100%" height={160}>
                <PieChart><Pie data={expByCat} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={60} label={({ name, percent }) => `${(percent * 100).toFixed(0)}%`} labelLine={false} style={{ fontSize: 9 }}>
                  {expByCat.map((e, i) => <Cell key={i} fill={PIE_COLORS[i % PIE_COLORS.length]} />)}
                </Pie><Tooltip formatter={(v) => fmtRWF(v)} contentStyle={{ background: C.bgCard, border: `1px solid ${C.border}`, borderRadius: 8, fontSize: 11 }} /></PieChart>
              </ResponsiveContainer>
            </div>
            <div style={{ background: C.bgCard, border: `1px solid ${C.border}`, borderRadius: 12, padding: "14px 16px" }}>
              <div style={{ fontWeight: 700, fontSize: 12, marginBottom: 10 }}>Category Breakdown</div>
              {expByCat.map((ec, i) => <div key={ec.name} style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "5px 0", borderBottom: `1px solid ${C.border}15` }}>
                  <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                    <div style={{ width: 8, height: 8, borderRadius: "50%", background: PIE_COLORS[i % PIE_COLORS.length], flexShrink: 0 }} />
                    <span style={{ fontSize: 12, color: C.textMuted }}>{ec.name}</span>
                  </div>
                  <span style={{ fontSize: 12, fontWeight: 700, color: C.warning }}>{fmtRWF(ec.value)}</span>
                </div>)}
            </div>
          </div>
          <div style={{ background: C.bgCard, border: `1px solid ${C.border}`, borderRadius: 12, overflow: "hidden" }}>
            <div style={{ padding: "11px 16px", borderBottom: `1px solid ${C.border}`, fontWeight: 700, fontSize: 13, display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              <span>Expense Ledger ({fExpenses.length})</span>
              <button onClick={() => exportExcel("expenses")} style={{ ...BtnS(C.success, true), fontSize: 10, padding: "4px 10px" }}>⬇ CSV</button>
            </div>
            <ExpTable rows={fExpenses} full showStation cwsList={cwsList} />
          </div>
        </div>}

      {
    /* ── CASH & BANK REPORT ─────────────────────────────────── */
  }
      {reportType === "cashbook" && <div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(130px,1fr))", gap: 12, marginBottom: 14 }}>
            <SC label="Total Cash Inflows" value={fmtRWF(fCashbook.filter((c) => c.type === "inflow").reduce((s, c) => s + c.amount, 0))} color={C.success} />
            <SC label="Total Cash Outflows" value={fmtRWF(fCashbook.filter((c) => c.type === "outflow").reduce((s, c) => s + c.amount, 0))} color={C.danger} />
            <SC label="Total Bank Credits" value={fmtRWF(fBank.filter((b) => b.type === "credit").reduce((s, b) => s + b.amount, 0))} color={C.info} />
          </div>
          <div style={{ background: C.bgCard, border: `1px solid ${C.border}`, borderRadius: 12, overflow: "hidden", marginBottom: 14 }}>
            <div style={{ padding: "11px 16px", borderBottom: `1px solid ${C.border}`, fontWeight: 700, fontSize: 13, display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              <span>Cash Book ({fCashbook.length})</span>
              <button onClick={() => exportExcel("cashbook")} style={{ ...BtnS(C.success, true), fontSize: 10, padding: "4px 10px" }}>⬇ CSV</button>
            </div>
            <CashTable rows={fCashbook} />
          </div>
          <div style={{ background: C.bgCard, border: `1px solid ${C.border}`, borderRadius: 12, overflow: "hidden" }}>
            <div style={{ padding: "11px 16px", borderBottom: `1px solid ${C.border}`, fontWeight: 700, fontSize: 13 }}>Bank Transactions ({fBank.length})</div>
            <BankTable rows={fBank} />
          </div>
        </div>}

      {
    /* ── STATION SUMMARY REPORT ─────────────────────────────── */
  }
      {reportType === "station_summary" && <div>
          <div style={{ background: C.bgCard, border: `1px solid ${C.border}`, borderRadius: 12, overflow: "hidden", marginBottom: 14 }}>
            <div style={{ padding: "11px 16px", borderBottom: `1px solid ${C.border}`, fontWeight: 700, fontSize: 13, display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              <span>Station Summary ({stationRows.length} stations)</span>
              <button onClick={() => exportExcel("station_summary")} style={{ ...BtnS(C.success, true), fontSize: 10, padding: "4px 10px" }}>⬇ CSV</button>
            </div>
            <div className="tbl-wrap"><table style={{ width: "100%", borderCollapse: "collapse" }}>
              <thead><tr style={{ background: C.surface }}>{["Station", "Region", "Cherry kg", "Farmers", "Payments (RWF)", "Expenses (RWF)", "Cash Balance", "Net"].map((h) => <Th key={h}>{h}</Th>)}</tr></thead>
              <tbody>{stationRows.map((row) => {
    const net = row.cashBal - row.paid - row.exp;
    return <tr key={row.cws.id} style={{ borderBottom: `1px solid ${C.border}15` }} onMouseEnter={(e) => e.currentTarget.style.background = C.surface} onMouseLeave={(e) => e.currentTarget.style.background = "transparent"}>
                  <Td style={{ color: C.coffeeLight, fontWeight: 600 }}>☕ {row.cws.name}</Td>
                  <Td style={{ color: C.textMuted }}>{row.cws.region}</Td>
                  <Td style={{ fontWeight: 700, color: C.coffee }}>{fmtKg(row.kg)}</Td>
                  <Td style={{ color: C.info }}>{row.farmers}</Td>
                  <Td style={{ color: C.danger, fontWeight: 700 }}>{fmtRWF(row.paid)}</Td>
                  <Td style={{ color: C.warning, fontWeight: 700 }}>{fmtRWF(row.exp)}</Td>
                  <Td style={{ color: row.cashBal > 0 ? C.success : C.danger, fontWeight: 700 }}>{fmtRWF(row.cashBal)}</Td>
                  <Td><span style={{ padding: "3px 8px", borderRadius: 4, fontSize: 10, fontWeight: 700, background: net > 0 ? `${C.success}15` : `${C.danger}15`, color: net > 0 ? C.success : C.danger }}>{fmtRWF(net)}</span></Td>
                </tr>;
  })}</tbody>
            </table></div>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(180px,1fr))", gap: 14 }}>
            <div style={{ background: C.bgCard, border: `1px solid ${C.border}`, borderRadius: 12, padding: "14px 16px 8px" }}>
              <div style={{ fontWeight: 700, fontSize: 12, marginBottom: 12 }}>Cherry kg per Station</div>
              <ResponsiveContainer width="100%" height={160}>
                <BarChart data={stationRows.map((r) => ({ name: r.cws.name.replace(" CWS", ""), kg: r.kg }))}>
                  <CartesianGrid strokeDasharray="3 3" stroke={C.border} vertical={false} />
                  <XAxis dataKey="name" tick={{ fill: C.textMuted, fontSize: 10 }} axisLine={false} tickLine={false} />
                  <YAxis tick={{ fill: C.textMuted, fontSize: 9 }} axisLine={false} tickLine={false} />
                  <Tooltip contentStyle={{ background: C.bgCard, border: `1px solid ${C.border}`, borderRadius: 8, fontSize: 11 }} formatter={(v) => fmtKg(v)} />
                  <Bar dataKey="kg" fill={C.coffee} radius={[4, 4, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>
            <div style={{ background: C.bgCard, border: `1px solid ${C.border}`, borderRadius: 12, padding: "14px 16px 8px" }}>
              <div style={{ fontWeight: 700, fontSize: 12, marginBottom: 12 }}>Expenses by Category</div>
              <ResponsiveContainer width="100%" height={160}>
                <PieChart><Pie data={expByCat} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={60} label={({ name, percent }) => `${(percent * 100).toFixed(0)}%`} labelLine={false} style={{ fontSize: 9 }}>
                  {expByCat.map((e, i) => <Cell key={i} fill={PIE_COLORS[i % PIE_COLORS.length]} />)}
                </Pie><Tooltip formatter={(v) => fmtRWF(v)} contentStyle={{ background: C.bgCard, border: `1px solid ${C.border}`, borderRadius: 8, fontSize: 11 }} /></PieChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>}

      {
    /* ── FUND REQUESTS REPORT ───────────────────────────────── */
  }
      {reportType === "fund_requests" && <div>
          <div style={{ className: "kpi-grid", style: { display: "grid" }, gap: 12, marginBottom: 14 }}>
            <SC label="Total Requested" value={fmtRWF(fFR.reduce((s, f) => s + f.amount, 0))} color={C.warning} />
            <SC label="Total Approved" value={fmtRWF(fFR.filter((f) => f.status === "approved").reduce((s, f) => s + f.amount, 0))} color={C.success} />
            <SC label="Pending" value={fFR.filter((f) => f.status.includes("pending")).length} color={C.gold} />
            <SC label="Rejected" value={fFR.filter((f) => f.status === "rejected").length} color={C.danger} />
          </div>
          <div style={{ background: C.bgCard, border: `1px solid ${C.border}`, borderRadius: 12, overflow: "hidden" }}>
            <div style={{ padding: "11px 16px", borderBottom: `1px solid ${C.border}`, fontWeight: 700, fontSize: 13, display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              <span>Fund Request Log ({fFR.length})</span>
              <button onClick={() => exportExcel("fund_requests")} style={{ ...BtnS(C.success, true), fontSize: 10, padding: "4px 10px" }}>⬇ CSV</button>
            </div>
            <FundTable rows={fFR} users={[]} cwsList={cwsList} />
          </div>
        </div>}

      {
    /* ── STOCK REPORT ───────────────────────────────────────── */
  }
      {reportType === "stock" && <div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(130px,1fr))", gap: 12, marginBottom: 14 }}>
            <SC label="Total Tonnes In" value={`${fStock.reduce((s, sk) => s + sk.tonnesIn, 0).toFixed(2)} T`} color={C.coffee} />
            <SC label="Total Balance" value={`${fStock.reduce((s, sk) => s + sk.tonnesBalance, 0).toFixed(2)} T`} color={C.gold} />
            <SC label="Total Value" value={fmtRWF(totalStock)} color={C.success} />
          </div>
          <div style={{ background: C.bgCard, border: `1px solid ${C.border}`, borderRadius: 12, overflow: "hidden" }}>
            <div style={{ padding: "11px 16px", borderBottom: `1px solid ${C.border}`, fontWeight: 700, fontSize: 13 }}>Stock Movements</div>
            {fStock.length === 0 ? <ES text="No stock records for selected filters" /> : <div className="tbl-wrap"><table style={{ width: "100%", borderCollapse: "collapse" }}>
                <thead><tr style={{ background: C.surface }}>{["Date", "Station", "Description", "Grade", "Tonnes In", "Balance", "Unit Cost", "Total Value", "Method"].map((h) => <Th key={h}>{h}</Th>)}</tr></thead>
                <tbody>{fStock.map((sk) => {
    const cws = cwsList.find((c) => c.id === sk.cwsId);
    return <tr key={sk.id} style={{ borderBottom: `1px solid ${C.border}15` }} onMouseEnter={(e) => e.currentTarget.style.background = C.surface} onMouseLeave={(e) => e.currentTarget.style.background = "transparent"}>
                  <Td style={{ color: C.textMuted }}>{sk.date}</Td>
                  <Td style={{ color: C.coffeeLight }}>{cws?.name || sk.cwsId}</Td>
                  <Td>{sk.description}</Td>
                  <Td><span style={{ padding: "2px 7px", borderRadius: 4, fontSize: 10, fontWeight: 700, background: `${C.coffee}18`, color: C.coffeeLight }}>{sk.grade}</span></Td>
                  <Td style={{ color: C.success, fontWeight: 700 }}>{sk.tonnesIn.toFixed(2)} T</Td>
                  <Td style={{ color: C.gold, fontWeight: 700 }}>{sk.tonnesBalance.toFixed(2)} T</Td>
                  <Td style={{ color: C.textMuted }}>{fmtRWF(sk.unitCost)}/kg</Td>
                  <Td style={{ fontWeight: 700 }}>{fmtRWF(sk.totalValue)}</Td>
                  <Td style={{ fontSize: 10, color: C.textDim }}>{sk.valuationMethod.replace(/_/g, " ")}</Td>
                </tr>;
  })}</tbody>
              </table></div>}
          </div>
        </div>}

      {
    /* ── DEBTS REPORT ───────────────────────────────────────── */
  }
      {reportType === "debts" && <div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(130px,1fr))", gap: 12, marginBottom: 14 }}>
            <SC label="Total Debt Given" value={fmtRWF(fDebts.filter((d) => d.type === "debt_given").reduce((s, d) => s + d.amount, 0))} color={C.danger} />
            <SC label="Total Owed to CWS" value={fmtRWF(fDebts.filter((d) => d.type === "debt_to_others").reduce((s, d) => s + d.amount, 0))} color={C.warning} />
            <SC label="Total Outstanding" value={fmtRWF(totalDebts)} color={C.info} />
          </div>
          <div style={{ background: C.bgCard, border: `1px solid ${C.border}`, borderRadius: 12, overflow: "hidden" }}>
            <div style={{ padding: "11px 16px", borderBottom: `1px solid ${C.border}`, fontWeight: 700, fontSize: 13 }}>Debt & Liability Register</div>
            {fDebts.length === 0 ? <ES text="No debt records for selected filters" /> : <div className="tbl-wrap"><table style={{ width: "100%", borderCollapse: "collapse" }}>
                <thead><tr style={{ background: C.surface }}>{["Date", "Station", "Type", "Party", "Description", "Amount", "Balance", "Status"].map((h) => <Th key={h}>{h}</Th>)}</tr></thead>
                <tbody>{fDebts.map((d) => {
    const cws = cwsList.find((c) => c.id === d.cwsId);
    return <tr key={d.id} style={{ borderBottom: `1px solid ${C.border}15` }} onMouseEnter={(e) => e.currentTarget.style.background = C.surface} onMouseLeave={(e) => e.currentTarget.style.background = "transparent"}>
                  <Td style={{ color: C.textMuted }}>{d.date}</Td>
                  <Td style={{ color: C.coffeeLight }}>{cws?.name || d.cwsId}</Td>
                  <Td><span style={{ padding: "2px 7px", borderRadius: 4, fontSize: 10, fontWeight: 700, background: `${d.type === "debt_given" ? C.danger : C.warning}18`, color: d.type === "debt_given" ? C.danger : C.warning }}>{d.type.replace(/_/g, " ")}</span></Td>
                  <Td style={{ fontWeight: 600 }}>{d.party}</Td>
                  <Td style={{ color: C.textMuted }}>{d.description}</Td>
                  <Td style={{ fontWeight: 700, color: C.danger }}>{fmtRWF(d.amount)}</Td>
                  <Td style={{ fontWeight: 700, color: C.warning }}>{fmtRWF(d.balance)}</Td>
                  <Td><SB status={d.status} /></Td>
                </tr>;
  })}</tbody>
              </table></div>}
          </div>
        </div>}
    </div>;
}
function MachineryPage() {
  const { currentUser: u, machines, setMachines, tasks, setTasks, machTx, setMachTx, driverLogs, leaves, setLeaves, users, setUsers, assistants, setAssistants, online, pending, setPending, addNote } = useApp();
  const [tab, setTab] = useState("fleet");
  const [showAddTask, setShowAddTask] = useState(null);
  const [showAddMachine, setShowAddMachine] = useState(false);
  const [showAddDriver, setShowAddDriver] = useState(false);
  const [showAddTx, setShowAddTx] = useState(false);
  const [taskForm, setTaskForm] = useState({ customer: "", province: "", district: "", sector: "", cell: "", village: "", startDate: today(), endDate: "", hourlyRate: "", notes: "", machineId: "" });
  const [machForm, setMachForm] = useState({ name: "", type: "", plate: "", driverId: "" });
  const [drvForm, setDrvForm] = useState({ name: "", email: "", password: "", machineId: "" });
  const [txForm, setTxForm] = useState({ date: today(), machineId: "", type: "income", category: "Rental Income", amount: "", desc: "" });
  const canManage = ["sudo", "md", "admin", "hq_finance", "hq_ops"].includes(u.role);
  const PROVINCES = ["Kigali", "Northern Province", "Southern Province", "Eastern Province", "Western Province"];
  const TX_CATS = { income: ["Rental Income", "Operator Fee", "Transport Fee"], expense: ["Maintenance", "Fuel", "Insurance", "Spare Parts", "Labor"] };
  return <div>
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 18 }}>
        <div><div style={{ fontFamily: "'Cormorant',serif", fontSize: 24, fontWeight: 700, color: C.text }}>Bender Machine</div><div style={{ fontSize: 13, color: C.textMuted }}>Fleet · Tasks · Drivers</div></div>
        {canManage && <div style={{ display: "flex", gap: 8 }}>
          <button onClick={() => setShowAddDriver(true)} style={{ ...BtnS(C.machinery, true), fontSize: 11, padding: "7px 13px" }}>+ Driver</button>
          <button onClick={() => setShowAddMachine(true)} style={{ ...BtnS(C.machinery), fontSize: 11, padding: "7px 13px" }}>+ Machine</button>
        </div>}
      </div>
      <Tabs tabs={["fleet", "tasks", "transactions", "driver_logs", "leaves"]} labels={["Fleet", "Tasks", "Transactions", "Driver Logs", "Leave Requests"]} active={tab} onChange={setTab} color={C.machinery} />
      {tab === "fleet" && <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(130px,1fr))", gap: 14 }}>
          {machines.map((m, i) => {
    const driver = users.find((x) => x.id === m.driverId);
    const asst = assistants.find((a) => a.machineId === m.id);
    const activeTask = tasks.find((t) => t.machineId === m.id && t.status === "active");
    return <div key={m.id} style={{ background: `linear-gradient(145deg,${C.machineryBg},${C.bgCard})`, border: `1px solid ${C.machinery}35`, borderRadius: 13, padding: "18px", animation: `fadeUp .3s ease ${i * 0.08}s both` }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 10 }}>
                <div><div style={{ fontFamily: "'Cormorant',serif", fontSize: 16, fontWeight: 700, color: C.machineryLight }}>{m.name}</div><div style={{ fontSize: 11, color: C.textMuted }}>{m.type} · {m.plate}</div></div>
                <SPill status={m.status} />
              </div>
              <div style={{ fontSize: 12, color: C.textMuted, marginBottom: 8 }}>🧑‍💼 <span style={{ color: C.text }}>{driver?.name || "No driver"}</span><br />🔧 <span style={{ color: C.text }}>{asst?.name || "No assistant"}</span></div>
              {activeTask && <div style={{ padding: "8px 10px", background: `${C.machinery}10`, borderRadius: 7, fontSize: 11, marginBottom: 8 }}><div style={{ color: C.machineryLight, fontWeight: 700 }}>{activeTask.customer}</div><div style={{ color: C.textMuted }}>{activeTask.district}, {activeTask.province}</div><div style={{ color: C.gold }}>{fmtRWF(activeTask.hourlyRate)}/hr</div></div>}
              {canManage && m.status === "available" && <button onClick={() => setShowAddTask(m.id)} style={{ ...BtnS(C.machinery, true), width: "100%", justifyContent: "center", fontSize: 11, padding: "5px", marginTop: 8 }}>+ Assign Task</button>}
            </div>;
  })}
        </div>}
      {tab === "tasks" && <div style={{ background: C.bgCard, border: `1px solid ${C.border}`, borderRadius: 12, overflow: "hidden" }}>
          {tasks.length === 0 ? <ES text="No tasks assigned" /> : <div className="tbl-wrap"><table style={{ width: "100%", borderCollapse: "collapse" }}>
              <thead><tr style={{ background: C.surface }}>{["Machine", "Customer", "Location", "Start", "End", "Rate/hr", "Hours", "Status"].map((h) => <Th key={h}>{h}</Th>)}</tr></thead>
              <tbody>{tasks.map((t) => {
    const m = machines.find((x) => x.id === t.machineId);
    return <tr key={t.id} style={{ borderBottom: `1px solid ${C.border}15` }} onMouseEnter={(e) => e.currentTarget.style.background = C.surface} onMouseLeave={(e) => e.currentTarget.style.background = "transparent"}>
                <Td style={{ color: C.machineryLight, fontWeight: 600 }}>{m?.name}</Td><Td>{t.customer}</Td><Td style={{ color: C.textMuted }}>{t.district}, {t.province}</Td>
                <Td style={{ color: C.textMuted }}>{t.startDate}</Td><Td style={{ color: C.textMuted }}>{t.endDate}</Td>
                <Td style={{ color: C.gold, fontWeight: 700 }}>{fmtRWF(t.hourlyRate)}</Td>
                <Td style={{ color: C.info }}>{t.totalHours}h</Td><Td><SB status={t.status} /></Td>
              </tr>;
  })}</tbody>
            </table></div>}
        </div>}
      {tab === "transactions" && <div>
          <div style={{ display: "flex", justifyContent: "flex-end", marginBottom: 12 }}>
            {canManage && <button onClick={() => setShowAddTx(true)} style={{ ...BtnS(C.machinery), fontSize: 11, padding: "7px 13px" }}>+ Transaction</button>}
          </div>
          <div style={{ background: C.bgCard, border: `1px solid ${C.border}`, borderRadius: 12, overflow: "hidden" }}>
            <div className="tbl-wrap"><table style={{ width: "100%", borderCollapse: "collapse" }}>
              <thead><tr style={{ background: C.surface }}>{["Date", "Machine", "Category", "Type", "Amount", "Description", "Status"].map((h) => <Th key={h}>{h}</Th>)}</tr></thead>
              <tbody>{machTx.map((t) => {
    const m = machines.find((x) => x.id === t.machineId);
    return <tr key={t.id} style={{ borderBottom: `1px solid ${C.border}15` }} onMouseEnter={(e) => e.currentTarget.style.background = C.surface} onMouseLeave={(e) => e.currentTarget.style.background = "transparent"}>
                <Td style={{ color: C.textMuted }}>{t.date}</Td><Td style={{ color: C.machineryLight, fontWeight: 600 }}>{m?.name}</Td><Td>{t.category}</Td>
                <Td style={{ color: t.type === "income" ? C.success : C.danger, fontWeight: 600 }}>{t.type}</Td>
                <Td style={{ fontWeight: 700, color: t.type === "income" ? C.success : C.danger }}>{fmtRWF(t.amount)}</Td>
                <Td style={{ color: C.textMuted }}>{t.desc}</Td><Td><SB status={t.status} /></Td>
              </tr>;
  })}</tbody>
            </table></div>
          </div>
        </div>}
      {tab === "driver_logs" && <div style={{ background: C.bgCard, border: `1px solid ${C.border}`, borderRadius: 12, overflow: "hidden" }}>
          {driverLogs.length === 0 ? <ES text="No driver logs" /> : <div className="tbl-wrap"><table style={{ width: "100%", borderCollapse: "collapse" }}>
              <thead><tr style={{ background: C.surface }}>{["Date", "Driver", "Machine", "Hours", "Fuel (L)", "Location", "Condition", "Status"].map((h) => <Th key={h}>{h}</Th>)}</tr></thead>
              <tbody>{driverLogs.map((l) => {
    const drv = users.find((x) => x.id === l.driverId);
    const m = machines.find((x) => x.id === l.machineId);
    return <tr key={l.id} style={{ borderBottom: `1px solid ${C.border}15` }} onMouseEnter={(e) => e.currentTarget.style.background = C.surface} onMouseLeave={(e) => e.currentTarget.style.background = "transparent"}>
                <Td style={{ color: C.textMuted }}>{l.date}</Td><Td style={{ fontWeight: 600 }}>{drv?.name}</Td><Td style={{ color: C.machineryLight }}>{m?.name}</Td>
                <Td style={{ color: C.info, fontWeight: 700 }}>{l.hours}h</Td><Td>{l.fuelReceived}L</Td>
                <Td style={{ color: C.textMuted }}>{l.taskLocation}</Td><Td><CB cond={l.condition} /></Td><Td><SB status={l.status} /></Td>
              </tr>;
  })}</tbody>
            </table></div>}
        </div>}
      {tab === "leaves" && <div style={{ background: C.bgCard, border: `1px solid ${C.border}`, borderRadius: 12, overflow: "hidden" }}>
          {leaves.length === 0 ? <ES text="No leave requests" /> : <div className="tbl-wrap"><table style={{ width: "100%", borderCollapse: "collapse" }}>
              <thead><tr style={{ background: C.surface }}>{["Date", "Driver", "Type", "Reason", "Status", "Action"].map((h) => <Th key={h}>{h}</Th>)}</tr></thead>
              <tbody>{leaves.map((lv) => {
    const drv = users.find((x) => x.id === lv.driverId);
    return <tr key={lv.id} style={{ borderBottom: `1px solid ${C.border}15` }} onMouseEnter={(e) => e.currentTarget.style.background = C.surface} onMouseLeave={(e) => e.currentTarget.style.background = "transparent"}>
                <Td style={{ color: C.textMuted }}>{lv.date}</Td><Td style={{ fontWeight: 600 }}>{drv?.name}</Td><Td style={{ color: C.textMuted }}>{lv.type.replace(/_/g, " ")}</Td>
                <Td style={{ color: C.textMuted }}>{lv.reason}</Td><Td><SB status={lv.status} /></Td>
                <Td>{lv.status === "pending" && canManage && <div style={{ display: "flex", gap: 6 }}>
                  <button onClick={() => setLeaves((p) => p.map((x) => x.id === lv.id ? { ...x, status: "approved" } : x))} style={{ ...BtnS(C.success), fontSize: 10, padding: "3px 8px" }}>✓</button>
                  <button onClick={() => setLeaves((p) => p.map((x) => x.id === lv.id ? { ...x, status: "rejected" } : x))} style={{ ...BtnS(C.danger), fontSize: 10, padding: "3px 8px" }}>✕</button>
                </div>}</Td>
              </tr>;
  })}</tbody>
            </table></div>}
        </div>}
      {showAddTask && <Modal title="Assign Task to Machine" onClose={() => setShowAddTask(null)} wide><div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(180px,1fr))", gap: 11 }}><FI label="Customer" value={taskForm.customer} onChange={(v) => setTaskForm((p) => ({ ...p, customer: v }))} placeholder="Organisation name" /><div><FL>Province</FL><select value={taskForm.province} onChange={(e) => setTaskForm((p) => ({ ...p, province: e.target.value }))} style={selS()}>{PROVINCES.map((pv) => <option key={pv}>{pv}</option>)}</select></div><FI label="District" value={taskForm.district} onChange={(v) => setTaskForm((p) => ({ ...p, district: v }))} placeholder="District" /><FI label="Sector" value={taskForm.sector} onChange={(v) => setTaskForm((p) => ({ ...p, sector: v }))} placeholder="Sector" /><FI label="Start Date" type="date" value={taskForm.startDate} onChange={(v) => setTaskForm((p) => ({ ...p, startDate: v }))} /><FI label="End Date" type="date" value={taskForm.endDate} onChange={(v) => setTaskForm((p) => ({ ...p, endDate: v }))} /><FI label="Hourly Rate (RWF)" type="number" value={taskForm.hourlyRate} onChange={(v) => setTaskForm((p) => ({ ...p, hourlyRate: v }))} placeholder="45000" /><FI label="Notes" value={taskForm.notes} onChange={(v) => setTaskForm((p) => ({ ...p, notes: v }))} placeholder="Optional" /></div><MF onCancel={() => setShowAddTask(null)} onSave={() => {
    if (!taskForm.customer) return;
    setTasks((p) => [...p, { ...taskForm, id: `t${Date.now()}`, machineId: showAddTask, status: "active", totalHours: 0, hourlyRate: +taskForm.hourlyRate }]);
    setMachines((p) => p.map((m) => m.id === showAddTask ? { ...m, status: "on_task" } : m));
    setShowAddTask(null);
    addNote("Task assigned", "success");
  }} label="Assign Task" color={C.machinery} /></Modal>}
      {showAddMachine && <Modal title="Add Machine" onClose={() => setShowAddMachine(false)}><div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(180px,1fr))", gap: 11 }}><FI label="Machine Name" value={machForm.name} onChange={(v) => setMachForm((p) => ({ ...p, name: v }))} placeholder="e.g. CAT 320" /><FI label="Type" value={machForm.type} onChange={(v) => setMachForm((p) => ({ ...p, type: v }))} placeholder="Excavator" /><FI label="Plate Number" value={machForm.plate} onChange={(v) => setMachForm((p) => ({ ...p, plate: v }))} placeholder="RAC 000X" /><div><FL>Assign Driver</FL><select value={machForm.driverId} onChange={(e) => setMachForm((p) => ({ ...p, driverId: e.target.value }))} style={selS()}><option value="">— None —</option>{users.filter((x) => x.role === "driver").map((d) => <option key={d.id} value={d.id}>{d.name}</option>)}</select></div></div><MF onCancel={() => setShowAddMachine(false)} onSave={() => {
    if (!machForm.name) return;
    setMachines((p) => [...p, { ...machForm, id: `m${Date.now()}`, status: "available" }]);
    setShowAddMachine(false);
  }} label="Add Machine" color={C.machinery} /></Modal>}
      {showAddDriver && <Modal title="Add Driver" onClose={() => setShowAddDriver(false)}><div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(180px,1fr))", gap: 11 }}><FI label="Full Name" value={drvForm.name} onChange={(v) => setDrvForm((p) => ({ ...p, name: v }))} placeholder="Driver's full name" /><FI label="Email" type="email" value={drvForm.email} onChange={(v) => setDrvForm((p) => ({ ...p, email: v }))} placeholder="driver@bender.rw" /><FI label="Password" type="password" value={drvForm.password} onChange={(v) => setDrvForm((p) => ({ ...p, password: v }))} placeholder="••••••" /><div><FL>Assign Machine</FL><select value={drvForm.machineId} onChange={(e) => setDrvForm((p) => ({ ...p, machineId: e.target.value }))} style={selS()}><option value="">— None —</option>{machines.map((m) => <option key={m.id} value={m.id}>{m.name}</option>)}</select></div></div><MF onCancel={() => setShowAddDriver(false)} onSave={() => {
    if (!drvForm.name || !drvForm.email) return;
    setUsers((p) => [...p, { ...drvForm, id: `u${Date.now()}`, role: "driver", cwsAccess: [], machineId: drvForm.machineId || null, avatar: drvForm.name.split(" ").map((w) => w[0]).join("").slice(0, 2).toUpperCase(), createdAt: today(), active: true }]);
    setShowAddDriver(false);
    addNote(`Driver ${drvForm.name} created`, "success");
  }} label="Create Driver" color={C.machinery} /></Modal>}
      {showAddTx && <Modal title="Add Machine Transaction" onClose={() => setShowAddTx(false)}><div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(180px,1fr))", gap: 11 }}><FI label="Date" type="date" value={txForm.date} onChange={(v) => setTxForm((p) => ({ ...p, date: v }))} /><div><FL>Machine</FL><select value={txForm.machineId} onChange={(e) => setTxForm((p) => ({ ...p, machineId: e.target.value }))} style={selS()}><option value="">— Select —</option>{machines.map((m) => <option key={m.id} value={m.id}>{m.name}</option>)}</select></div><div><FL>Type</FL><select value={txForm.type} onChange={(e) => setTxForm((p) => ({ ...p, type: e.target.value, category: TX_CATS[e.target.value][0] }))} style={selS()}><option value="income">Income</option><option value="expense">Expense</option></select></div><div><FL>Category</FL><select value={txForm.category} onChange={(e) => setTxForm((p) => ({ ...p, category: e.target.value }))} style={selS()}>{(TX_CATS[txForm.type] || []).map((c) => <option key={c}>{c}</option>)}</select></div><FI label="Amount (RWF)" type="number" value={txForm.amount} onChange={(v) => setTxForm((p) => ({ ...p, amount: v }))} placeholder="0" /><FI label="Description" value={txForm.desc} onChange={(v) => setTxForm((p) => ({ ...p, desc: v }))} placeholder="Description..." /></div><MF onCancel={() => setShowAddTx(false)} onSave={() => {
    if (!txForm.amount || !txForm.machineId) return;
    setMachTx((p) => [{ ...txForm, id: `mt${Date.now()}`, amount: +txForm.amount, status: online ? "synced" : "offline" }, ...p]);
    setShowAddTx(false);
  }} label="Save Transaction" color={C.machinery} /></Modal>}
    </div>;
}
function ConstructionPage() {
  return <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", minHeight: 300, gap: 14 }}>
      <div style={{ fontSize: 44 }}>🏛️</div>
      <div style={{ fontFamily: "'Cormorant',serif", fontSize: 24, fontWeight: 700, color: C.constructionLight }}>Bender Construction</div>
      <div style={{ fontSize: 13, color: C.textMuted, textAlign: "center", maxWidth: 420 }}>Construction project management module is coming soon. It will include project tracking, material costs, contractor management, and site reporting.</div>
      <span style={{ padding: "5px 14px", borderRadius: 20, background: `${C.construction}18`, border: `1px solid ${C.construction}30`, color: C.constructionLight, fontSize: 12 }}>Module in Development</span>
    </div>;
}
function DriverHome() {
  const { currentUser: u, machines, tasks, driverLogs, setDriverLogs, leaves, setLeaves } = useApp();
  const machine = machines.find((m) => m.id === u.machineId);
  const myTask = tasks.find((t) => t.machineId === u.machineId && t.status === "active");
  const myLogs = driverLogs.filter((l) => l.driverId === u.id).slice(0, 5);
  const [showLog, setShowLog] = useState(false);
  const [showLeave, setShowLeave] = useState(false);
  const [log, setLog] = useState({ date: today(), hours: "", fuelReceived: "", taskLocation: myTask ? `${myTask.district}, ${myTask.sector}` : "", condition: "good", comments: "" });
  const [leave, setLeave] = useState({ type: "off_day", date: "", reason: "" });
  return <div>
      <div style={{ fontFamily: "'Cormorant',serif", fontSize: 24, fontWeight: 700, color: C.text, marginBottom: 18 }}>My Dashboard — <span style={{ color: C.machineryLight }}>{machine?.name || "No machine assigned"}</span></div>
      {machine && <div style={{ background: C.bgCard, border: `1px solid ${C.machinery}28`, borderRadius: 13, padding: 18, marginBottom: 16, display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(180px,1fr))", gap: 14 }}>
        <div><div style={{ fontSize: 10, color: C.textDim, textTransform: "uppercase", letterSpacing: "1px", marginBottom: 5 }}>My Machine</div><div style={{ fontFamily: "'Cormorant',serif", fontSize: 18, fontWeight: 700, color: C.machineryLight }}>{machine.name}</div><div style={{ fontSize: 11, color: C.textMuted }}>{machine.type} · {machine.plate}</div><SPill status={machine.status} /></div>
        {myTask && <div><div style={{ fontSize: 10, color: C.textDim, textTransform: "uppercase", letterSpacing: "1px", marginBottom: 5 }}>Active Task</div><div style={{ fontWeight: 700, fontSize: 13 }}>{myTask.customer}</div><div style={{ fontSize: 11, color: C.textMuted }}>{myTask.district}, {myTask.province}</div><div style={{ fontSize: 12, color: C.gold, marginTop: 4 }}>{fmtRWF(myTask.hourlyRate)}/hr</div></div>}
      </div>}
      <div style={{ display: "flex", gap: 10, marginBottom: 18 }}>
        <button onClick={() => setShowLog(true)} style={{ ...BtnS(C.machinery), padding: "8px 16px", fontSize: 12 }}>📋 Submit Daily Log</button>
        <button onClick={() => setShowLeave(true)} style={{ ...BtnS(C.machinery, true), padding: "8px 16px", fontSize: 12 }}>🗓️ Request Leave</button>
      </div>
      <div style={{ background: C.bgCard, border: `1px solid ${C.border}`, borderRadius: 12, overflow: "hidden" }}>
        <div style={{ padding: "12px 18px", borderBottom: `1px solid ${C.border}`, fontWeight: 700, fontSize: 13 }}>My Recent Logs</div>
        {myLogs.length === 0 ? <ES text="No logs submitted yet" /> : <div className="tbl-wrap"><table style={{ width: "100%", borderCollapse: "collapse" }}>
            <thead><tr style={{ background: C.surface }}>{["Date", "Hours", "Fuel (L)", "Location", "Condition", "Status"].map((h) => <Th key={h}>{h}</Th>)}</tr></thead>
            <tbody>{myLogs.map((l) => <tr key={l.id} style={{ borderBottom: `1px solid ${C.border}15` }} onMouseEnter={(e) => e.currentTarget.style.background = C.surface} onMouseLeave={(e) => e.currentTarget.style.background = "transparent"}>
                <Td style={{ color: C.textMuted }}>{l.date}</Td><Td style={{ color: C.info, fontWeight: 700 }}>{l.hours}h</Td>
                <Td>{l.fuelReceived}L</Td><Td style={{ color: C.textMuted }}>{l.taskLocation}</Td>
                <Td><CB cond={l.condition} /></Td><Td><SB status={l.status} /></Td>
              </tr>)}</tbody>
          </table></div>}
      </div>
      {showLog && <Modal title="Submit Daily Log" onClose={() => setShowLog(false)}><div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(180px,1fr))", gap: 11 }}><FI label="Date" type="date" value={log.date} onChange={(v) => setLog((p) => ({ ...p, date: v }))} /><FI label="Hours Worked" type="number" value={log.hours} onChange={(v) => setLog((p) => ({ ...p, hours: v }))} placeholder="8" /><FI label="Fuel Received (L)" type="number" value={log.fuelReceived} onChange={(v) => setLog((p) => ({ ...p, fuelReceived: v }))} placeholder="0" /><FI label="Task Location" value={log.taskLocation} onChange={(v) => setLog((p) => ({ ...p, taskLocation: v }))} placeholder="District, Sector" /><div><FL>Machine Condition</FL><select value={log.condition} onChange={(e) => setLog((p) => ({ ...p, condition: e.target.value }))} style={selS()}>{["good", "fair", "needs_repair", "critical"].map((c) => <option key={c} value={c}>{c.replace(/_/g, " ")}</option>)}</select></div><FI label="Comments" value={log.comments} onChange={(v) => setLog((p) => ({ ...p, comments: v }))} placeholder="Notes..." /></div><MF onCancel={() => setShowLog(false)} onSave={() => {
    if (!log.hours) return;
    setDriverLogs((p) => [{ ...log, id: `dl${Date.now()}`, driverId: u.id, machineId: u.machineId, hours: +log.hours, fuelReceived: +log.fuelReceived, status: "submitted" }, ...p]);
    setShowLog(false);
  }} label="Submit Log" color={C.machinery} /></Modal>}
      {showLeave && <Modal title="Request Leave / Off Day" onClose={() => setShowLeave(false)}><div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(180px,1fr))", gap: 11 }}><div><FL>Leave Type</FL><select value={leave.type} onChange={(e) => setLeave((p) => ({ ...p, type: e.target.value }))} style={selS()}><option value="off_day">Off Day</option><option value="sick_leave">Sick Leave</option><option value="annual_leave">Annual Leave</option></select></div><FI label="Date" type="date" value={leave.date} onChange={(v) => setLeave((p) => ({ ...p, date: v }))} /><div style={{ gridColumn: "1/-1" }}><FI label="Reason" value={leave.reason} onChange={(v) => setLeave((p) => ({ ...p, reason: v }))} placeholder="Reason for leave..." /></div></div><MF onCancel={() => setShowLeave(false)} onSave={() => {
    if (!leave.date) return;
    setLeaves((p) => [...p, { ...leave, id: `lv${Date.now()}`, driverId: u.id, status: "pending" }]);
    setShowLeave(false);
  }} label="Submit Request" color={C.machinery} /></Modal>}
    </div>;
}
function UsersPage() {
  const { users, setUsers, currentUser: cu, cwsList, addNote } = useApp();
  const canAccess = ["sudo", "md"].includes(cu.role);
  if (!canAccess) return <div style={{ padding: "60px 20px", textAlign: "center" }}>
    <div style={{ fontSize: 40, marginBottom: 16 }}>🔒</div>
    <div style={{ fontFamily: "'Cormorant',serif", fontSize: 22, fontWeight: 700, color: C.danger, marginBottom: 8 }}>Access Restricted</div>
    <div style={{ fontSize: 13, color: C.textMuted }}>Only the Managing Director and Super Admin can view user accounts and credentials.</div>
  </div>;
  const [showAdd, setShowAdd] = useState(false);
  const [tab, setTab] = useState("all");
  const [revealedPw, setRevealedPw] = useState({});
  const [form, setForm] = useState({ name: "", email: "", password: "", role: "cashier", cwsAccess: [], machineId: "" });
  const ROLE_OPTS = cu.role === "sudo" ? Object.keys(ROLES) : Object.keys(ROLES).filter((r) => r !== "sudo");
  const togglePw = (id) => setRevealedPw((p) => ({ ...p, [id]: !p[id] }));
  const submitCreate = () => {
    if (!form.name || !form.email || !form.password) return;
    setUsers((p) => [...p, { ...form, id: `u${Date.now()}`, avatar: form.name.split(" ").map((w) => w[0]).join("").slice(0, 2).toUpperCase(), createdAt: today(), active: true, cwsAccess: form.cwsAccess || [], machineId: form.machineId || null }]);
    addNote(`User ${form.name} created`, "success");
    setShowAdd(false);
    setForm({ name: "", email: "", password: "", role: "cashier", cwsAccess: [], machineId: "" });
  };
  const toggleActive = (id) => setUsers((p) => p.map((u) => u.id === id ? { ...u, active: !u.active } : u));
  const filtered = tab === "all" ? users : tab === "inactive" ? users.filter((x) => !x.active) : users.filter((x) => x.active);
  return <div>
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 14, flexWrap: "wrap", gap: 10 }}>
        <div>
          <div style={{ fontFamily: "'Cormorant',serif", fontSize: 24, fontWeight: 700, color: C.text }}>User Management</div>
          <div style={{ fontSize: 13, color: C.textMuted }}>Roles · Access · Credentials</div>
        </div>
        <button onClick={() => setShowAdd(true)} style={{ ...BtnS(C.gold), padding: "8px 16px", fontSize: 12 }}>+ Create User</button>
      </div>
      <div style={{ marginBottom: 14, padding: "9px 14px", background: `${C.purple}0D`, border: `1px solid ${C.purple}28`, borderRadius: 9, display: "flex", alignItems: "center", gap: 10, fontSize: 12, color: C.purpleLight }}>
        <span>🔐</span>
        <span>Credentials are only visible to <b>Super Admin</b> and <b>Managing Director</b>. Passwords are masked by default — click 👁 to reveal individually.</span>
      </div>
      <Tabs tabs={["all", "active", "inactive"]} active={tab} onChange={setTab} />
      <div style={{ background: C.bgCard, border: `1px solid ${C.border}`, borderRadius: 12, overflow: "hidden" }}>
        <div className="tbl-wrap"><table style={{ width: "100%", borderCollapse: "collapse", minWidth: 720 }}>
          <thead><tr style={{ background: C.surface }}>{["User", "Role", "Email", "Password", "Station / Machine", "Created", "Status", ""].map((h) => <Th key={h}>{h}</Th>)}</tr></thead>
          <tbody>{filtered.map((usr) => <tr key={usr.id} style={{ borderBottom: `1px solid ${C.border}15` }} onMouseEnter={(e) => e.currentTarget.style.background = C.surface} onMouseLeave={(e) => e.currentTarget.style.background = "transparent"}>
              <Td><div style={{ display: "flex", alignItems: "center", gap: 8 }}><Ava user={usr} size={28} /><div><div style={{ fontWeight: 600, fontSize: 13 }}>{usr.name}</div><div style={{ fontSize: 10, color: C.textDim }}>{usr.id}</div></div></div></Td>
              <Td><RB role={usr.role} sm /></Td>
              <Td style={{ color: C.textMuted, fontSize: 11 }}>{usr.email}</Td>
              <Td>
                <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
                  <span style={{ fontFamily: "monospace", fontSize: 12, color: revealedPw[usr.id] ? C.warningLight : C.textDim, background: C.surface, padding: "3px 8px", borderRadius: 5, border: `1px solid ${C.border}`, letterSpacing: revealedPw[usr.id] ? 0 : "2px", minWidth: 80, display: "inline-block" }}>{revealedPw[usr.id] ? (usr.password || "—") : "••••••••"}</span>
                  <button onClick={() => togglePw(usr.id)} title={revealedPw[usr.id] ? "Hide" : "Reveal"} style={{ background: "transparent", border: `1px solid ${C.border}`, borderRadius: 5, cursor: "pointer", color: C.textMuted, fontSize: 12, padding: "3px 7px", lineHeight: 1 }}>{revealedPw[usr.id] ? "🙈" : "👁"}</button>
                </div>
              </Td>
              <Td style={{ color: C.textMuted, fontSize: 11 }}>{usr.cwsAccess?.length > 0 ? cwsList.filter((c) => usr.cwsAccess.includes(c.id)).map((c) => c.name).join(", ") : usr.machineId || "—"}</Td>
              <Td style={{ color: C.textDim, fontSize: 11 }}>{usr.createdAt}</Td>
              <Td><SB status={usr.active ? "active" : "rejected"} /></Td>
              <Td><button onClick={() => toggleActive(usr.id)} style={{ ...BtnS(usr.active ? C.danger : C.success, true), fontSize: 10, padding: "3px 9px" }}>{usr.active ? "Deactivate" : "Activate"}</button></Td>
            </tr>)}</tbody>
        </table></div>
      </div>
      {showAdd && <Modal title="Create New User" onClose={() => setShowAdd(false)}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(180px,1fr))", gap: 11 }}>
            <FI label="Full Name" value={form.name} onChange={(v) => setForm((p) => ({ ...p, name: v }))} placeholder="Full name" />
            <FI label="Email" type="email" value={form.email} onChange={(v) => setForm((p) => ({ ...p, email: v }))} placeholder="user@bender.rw" />
            <FI label="Password" value={form.password} onChange={(v) => setForm((p) => ({ ...p, password: v }))} placeholder="Set a password" />
            <div><FL>Role</FL><select value={form.role} onChange={(e) => setForm((p) => ({ ...p, role: e.target.value }))} style={selS()}>{ROLE_OPTS.map((r) => <option key={r} value={r}>{ROLES[r]?.label || r}</option>)}</select></div>
            {["clerk", "cashier", "station_manager"].includes(form.role) && <div style={{ gridColumn: "1/-1" }}><FL>Assign Station</FL><select value={(form.cwsAccess || [])[0] || ""} onChange={(e) => setForm((p) => ({ ...p, cwsAccess: e.target.value ? [e.target.value] : [] }))} style={selS()}><option value="">— None —</option>{cwsList.map((c) => <option key={c.id} value={c.id}>{c.name}</option>)}</select></div>}
          </div>
          <MF onCancel={() => setShowAdd(false)} onSave={submitCreate} label="Create User" color={C.gold} />
        </Modal>}
    </div>;
}
function SystemPage() {
  const { system, setSystem, cwsList, setCwsList, addNote } = useApp();
  const [tab, setTab] = useState("branding");
  const [labels, setLabels] = useState({ ...system.labels });
  const [newCWS, setNewCWS] = useState({ name: "", region: "" });
  return <div>
      <div style={{ fontFamily: "'Cormorant',serif", fontSize: 24, fontWeight: 700, color: C.text, marginBottom: 6 }}>System Configuration</div>
      <div style={{ fontSize: 13, color: C.textMuted, marginBottom: 18 }}>Super Admin settings — rename modules, manage stations, configure branding.</div>
      <Tabs tabs={["branding", "labels", "stations"]} labels={["Branding", "Module Labels", "Washing Stations"]} active={tab} onChange={setTab} />
      {tab === "branding" && <div style={{ maxWidth: 480 }}>
          <FI label="Company Name" value={system.companyName} onChange={(v) => setSystem((p) => ({ ...p, companyName: v }))} />
          <div style={{ marginTop: 11 }}><FI label="Tagline" value={system.tagline} onChange={(v) => setSystem((p) => ({ ...p, tagline: v }))} /></div>
          <div style={{ marginTop: 11 }}><FI label="Hero Image URL" value={system.heroImageUrl} onChange={(v) => setSystem((p) => ({ ...p, heroImageUrl: v }))} /></div>
        </div>}
      {tab === "labels" && <div style={{ maxWidth: 480 }}>
          <div style={{ display: "grid", gap: 11 }}>
            {Object.entries(labels).map(([k, v]) => <FI key={k} label={k.replace(/_/g, " ")} value={v} onChange={(val) => setLabels((p) => ({ ...p, [k]: val }))} />)}
          </div>
          <button onClick={() => {
    setSystem((p) => ({ ...p, labels }));
    addNote("Labels updated", "success");
  }} style={{ ...BtnS(C.gold), marginTop: 16, padding: "8px 16px", fontSize: 12 }}>Save Labels</button>
        </div>}
      {tab === "stations" && <div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(130px,1fr))", gap: 12, marginBottom: 18 }}>
            {cwsList.map((cws) => <div key={cws.id} style={{ background: C.bgCard, border: `1px solid ${C.coffee}28`, borderRadius: 11, padding: "14px 16px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <div><div style={{ fontWeight: 600, color: C.coffeeLight }}>{cws.name}</div><div style={{ fontSize: 11, color: C.textMuted }}>{cws.region}</div></div>
                <button onClick={() => {
    setCwsList((p) => p.filter((c) => c.id !== cws.id));
    addNote(`${cws.name} removed`, "warning");
  }} style={{ ...BtnS(C.danger, false, true), fontSize: 10, padding: "3px 8px" }}>Remove</button>
              </div>)}
          </div>
          <div style={{ background: C.bgCard, border: `1px solid ${C.border}`, borderRadius: 12, padding: "16px 18px", maxWidth: 400 }}>
            <div style={{ fontWeight: 700, fontSize: 13, marginBottom: 12 }}>Add New Station</div>
            <div style={{ display: "grid", gap: 11 }}>
              <FI label="Station Name" value={newCWS.name} onChange={(v) => setNewCWS((p) => ({ ...p, name: v }))} placeholder="e.g. Rwamagana CWS" />
              <FI label="Region" value={newCWS.region} onChange={(v) => setNewCWS((p) => ({ ...p, region: v }))} placeholder="Province / Region" />
            </div>
            <button onClick={() => {
    if (!newCWS.name) return;
    setCwsList((p) => [...p, { ...newCWS, id: newCWS.name.toLowerCase().replace(/\s+cws$/, "").replace(/\s+/g, "_"), image: "https://images.unsplash.com/photo-1559305616-3f99cd43e353?w=600&q=70" }]);
    setNewCWS({ name: "", region: "" });
    addNote(`${newCWS.name} added`, "success");
  }} style={{ ...BtnS(C.coffee), marginTop: 12, fontSize: 12, padding: "7px 14px" }}>+ Add Station</button>
          </div>
        </div>}
    </div>;
}
function GNRTable({ rows, cwsList, farmers: farmers2, full, showStation }) {
  if (!rows.length) return <ES text="No records" />;
  const cols = full ? ["Date", "GNR #", showStation && "Station", "Farmer", "Std kg", "Flt kg", "Total kg", "Rate Std", "Rate Flt", "Total Paid", "Avg Rate", "Method", "Status"] : ["Date", "GNR #", showStation && "Station", "Farmer", "Total kg", "Total Paid", "Method", "Status"];
  const filteredCols = cols.filter(Boolean);
  return <div style={{ overflowX: "auto" }}><div className="tbl-wrap"><table style={{ width: "100%", borderCollapse: "collapse", minWidth: full ? 900 : 500 }}>
    <thead><tr style={{ background: C.surface }}>{filteredCols.map((h) => <Th key={h}>{h}</Th>)}</tr></thead>
    <tbody>{rows.map((c) => {
    const f = farmers2.find((x) => x.id === c.farmerId);
    const cws = cwsList.find((x) => x.id === c.cwsId);
    return <tr key={c.id} style={{ borderBottom: `1px solid ${C.border}15` }} onMouseEnter={(e) => e.currentTarget.style.background = C.surface} onMouseLeave={(e) => e.currentTarget.style.background = "transparent"}>
        <Td style={{ color: C.textMuted, whiteSpace: "nowrap" }}>{c.date}</Td>
        <Td style={{ color: C.gold, fontWeight: 700, whiteSpace: "nowrap" }}>{c.gnrNumber}</Td>
        {showStation && <Td style={{ color: C.coffeeLight, fontSize: 11 }}>{cws?.name || c.cwsId}</Td>}
        <Td style={{ fontWeight: 500, whiteSpace: "nowrap" }}>{f?.name || c.farmerId}</Td>
        {full && <><Td style={{ color: C.coffeeLight }}>{c.standardKg.toLocaleString()}</Td><Td style={{ color: C.warning }}>{c.flotantKg.toLocaleString()}</Td></>}
        <Td style={{ fontWeight: 700, color: C.coffee }}>{c.totalKg.toLocaleString()} kg</Td>
        {full && <><Td style={{ color: C.textMuted }}>{c.rateStandard} RWF</Td><Td style={{ color: C.textMuted }}>{c.rateFlotant} RWF</Td></>}
        <Td style={{ fontWeight: 700, color: C.danger }}>{fmtRWF(c.totalPaid)}</Td>
        {full && <Td style={{ color: C.info }}>{c.avgRate} RWF/kg</Td>}
        <Td>{c.paymentMethod ? <span style={{ padding: "2px 7px", borderRadius: 4, fontSize: 10, fontWeight: 700, background: `${C.info}18`, color: C.info }}>{c.paymentMethod.replace(/_/g, " ")}</span> : <span style={{ fontSize: 10, color: C.textDim, fontStyle: "italic" }}>Pending cashier</span>}</Td>
        <Td><SB status={c.status} /></Td>
      </tr>;
  })}</tbody>
  </table></div></div>;
}
function CashTable({ rows }) {
  if (!rows.length) return <ES text="No cash entries" />;
  return <div className="tbl-wrap"><table style={{ width: "100%", borderCollapse: "collapse" }}>
    <thead><tr style={{ background: C.surface }}>{["Date", "Type", "Category", "Description", "Amount", "Ref", "By"].map((h) => <Th key={h}>{h}</Th>)}</tr></thead>
    <tbody>{rows.map((c) => <tr key={c.id} style={{ borderBottom: `1px solid ${C.border}15` }} onMouseEnter={(e) => e.currentTarget.style.background = C.surface} onMouseLeave={(e) => e.currentTarget.style.background = "transparent"}>
        <Td style={{ color: C.textMuted }}>{c.date}</Td>
        <Td style={{ color: c.type === "inflow" ? C.success : C.danger, fontWeight: 600 }}>{c.type === "inflow" ? "\u25B2 Inflow" : "\u25BC Outflow"}</Td>
        <Td>{c.category}</Td>
        <Td style={{ color: C.textMuted, maxWidth: 160, overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>{c.description}</Td>
        <Td style={{ fontWeight: 700, color: c.type === "inflow" ? C.success : C.danger }}>{fmtRWF(c.amount)}</Td>
        <Td style={{ color: C.textDim, fontSize: 11 }}>{c.ref || "\u2014"}</Td>
        <Td style={{ color: C.textDim, fontSize: 11 }}>{c.by || "\u2014"}</Td>
      </tr>)}</tbody>
  </table></div>;
}
function BankTable({ rows }) {
  if (!rows.length) return <ES text="No bank transactions" />;
  return <div className="tbl-wrap"><table style={{ width: "100%", borderCollapse: "collapse" }}>
    <thead><tr style={{ background: C.surface }}>{["Date", "Type", "Description", "Amount", "Balance", "Ref"].map((h) => <Th key={h}>{h}</Th>)}</tr></thead>
    <tbody>{rows.map((b) => <tr key={b.id} style={{ borderBottom: `1px solid ${C.border}15` }} onMouseEnter={(e) => e.currentTarget.style.background = C.surface} onMouseLeave={(e) => e.currentTarget.style.background = "transparent"}>
        <Td style={{ color: C.textMuted }}>{b.date}</Td>
        <Td style={{ color: b.type === "credit" ? C.success : C.danger, fontWeight: 600 }}>{b.type === "credit" ? "\u25B2 Credit" : "\u25BC Debit"}</Td>
        <Td style={{ color: C.textMuted }}>{b.description}</Td>
        <Td style={{ fontWeight: 700, color: b.type === "credit" ? C.success : C.danger }}>{fmtRWF(b.amount)}</Td>
        <Td style={{ fontWeight: 700, color: C.info }}>{fmtRWF(b.balance)}</Td>
        <Td style={{ color: C.textDim, fontSize: 11 }}>{b.ref || "\u2014"}</Td>
      </tr>)}</tbody>
  </table></div>;
}
function ExpTable({ rows, full, showStation, cwsList = [] }) {
  if (!rows.length) return <ES text="No expenses recorded" />;
  return <div className="tbl-wrap"><table style={{ width: "100%", borderCollapse: "collapse" }}>
    <thead><tr style={{ background: C.surface }}>{["Date", showStation && "Station", "Category", "Description", "Amount", "Type", "Status"].filter(Boolean).map((h) => <Th key={h}>{h}</Th>)}</tr></thead>
    <tbody>{rows.map((e) => {
    const cws = cwsList.find((c) => c.id === e.cwsId);
    return <tr key={e.id} style={{ borderBottom: `1px solid ${C.border}15` }} onMouseEnter={(e2) => e2.currentTarget.style.background = C.surface} onMouseLeave={(e2) => e2.currentTarget.style.background = "transparent"}>
        <Td style={{ color: C.textMuted }}>{e.date}</Td>
        {showStation && <Td style={{ color: C.coffeeLight, fontSize: 11 }}>{cws?.name || e.cwsId}</Td>}
        <Td style={{ fontWeight: 600, color: C.warning }}>{e.category}</Td>
        <Td style={{ color: C.textMuted, maxWidth: 160, overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>{e.description || "\u2014"}</Td>
        <Td style={{ fontWeight: 700, color: C.warning }}>{fmtRWF(e.amount)}</Td>
        <Td><span style={{ padding: "2px 7px", borderRadius: 4, fontSize: 10, fontWeight: 700, background: e.exploitable ? `${C.coffee}18` : `${C.danger}18`, color: e.exploitable ? C.coffeeLight : C.danger }}>{e.exploitable ? "Exploitable" : "Non-Exploitable"}</span></Td>
        <Td><SB status={e.status} /></Td>
      </tr>;
  })}</tbody>
  </table></div>;
}
function FundTable({ rows, users, short, cwsList = [] }) {
  if (!rows.length) return <ES text="No fund requests" />;
  return <div className="tbl-wrap"><table style={{ width: "100%", borderCollapse: "collapse" }}>
    <thead><tr style={{ background: C.surface }}>{(short ? ["Date", "Station", "Amount", "Reason", "Status"] : ["Date", "Station", "Amount", "Reason", "Status", "Verified By", "Approved By", "Transfer"]).map((h) => <Th key={h}>{h}</Th>)}</tr></thead>
    <tbody>{rows.map((fr) => {
    const cws = cwsList.find((c) => c.id === fr.cwsId);
    return <tr key={fr.id} style={{ borderBottom: `1px solid ${C.border}15` }} onMouseEnter={(e) => e.currentTarget.style.background = C.surface} onMouseLeave={(e) => e.currentTarget.style.background = "transparent"}>
        <Td style={{ color: C.textMuted, fontSize: 11 }}>{fr.requestedAt?.split(" ")[0] || "\u2014"}</Td>
        <Td style={{ color: C.coffeeLight, fontSize: 11 }}>{cws?.name || fr.cwsId}</Td>
        <Td style={{ fontWeight: 700, color: C.gold }}>{fmtRWF(fr.amount)}</Td>
        <Td style={{ color: C.textMuted, maxWidth: 160, overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>{fr.reason}</Td>
        <Td><SB status={fr.status} /></Td>
        {!short && <Td style={{ color: C.textDim, fontSize: 11 }}>{fr.verifiedBy ? users.find((u) => u.id === fr.verifiedBy)?.name || fr.verifiedBy : "\u2014"}</Td>}
        {!short && <Td style={{ color: C.textDim, fontSize: 11 }}>{fr.approvedBy ? users.find((u) => u.id === fr.approvedBy)?.name || fr.approvedBy : "\u2014"}</Td>}
        {!short && <Td style={{ color: C.textDim, fontSize: 11 }}>{fr.transferMethod ? fr.transferMethod.replace(/_/g, " ") : "\u2014"}</Td>}
      </tr>;
  })}</tbody>
  </table></div>;
}
function Ava({ user, size = 32 }) {
  const color = ROLES[user?.role]?.color || C.gold;
  return <div style={{ width: size, height: size, borderRadius: "50%", background: `${color}20`, border: `1px solid ${color}32`, color, display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 700, fontSize: size * 0.38, flexShrink: 0 }}>{user?.avatar || "?"}</div>;
}
function RB({ role, sm }) {
  const r = ROLES[role];
  if (!r) return null;
  return <span style={{ padding: sm ? "2px 6px" : "4px 10px", borderRadius: 4, fontSize: sm ? 9 : 11, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.3px", background: `${r.color}18`, color: r.light, border: `1px solid ${r.color}22`, whiteSpace: "nowrap" }}>{r.label}</span>;
}
function SB({ status }) {
  const cfg = { synced: { c: C.success, l: "Synced" }, pending: { c: C.warning, l: "Pending" }, offline: { c: C.danger, l: "Offline" }, submitted: { c: C.info, l: "Submitted" }, approved: { c: C.success, l: "Approved" }, rejected: { c: C.danger, l: "Rejected" }, active: { c: C.success, l: "Active" }, completed: { c: C.info, l: "Completed" }, given: { c: C.success, l: "Given" }, requested: { c: C.warning, l: "Requested" }, paid: { c: C.success, l: "Paid" }, not_paid: { c: C.danger, l: "Not Paid" }, outstanding: { c: C.danger, l: "Outstanding" }, partial: { c: C.warning, l: "Partial" }, pending_verification: { c: C.warning, l: "Pending Verification" }, pending_approval: { c: C.gold, l: "Pending Approval" } };
  const d = cfg[status] || { c: C.textMuted, l: status };
  return <span style={{ padding: "2px 7px", borderRadius: 4, fontSize: 10, fontWeight: 700, background: `${d.c}18`, color: d.c, border: `1px solid ${d.c}22`, whiteSpace: "nowrap" }}>{d.l}</span>;
}
function CB({ cond }) {
  const cfg = { good: { c: C.success, l: "Good" }, fair: { c: C.warning, l: "Fair" }, needs_repair: { c: C.danger, l: "Needs Repair" }, critical: { c: C.dangerLight, l: "Critical" } };
  const d = cfg[cond] || { c: C.textMuted, l: cond };
  return <span style={{ padding: "2px 7px", borderRadius: 4, fontSize: 10, fontWeight: 700, background: `${d.c}18`, color: d.c }}>{d.l}</span>;
}
function SPill({ status }) {
  const cfg = { available: { c: C.success, l: "Available" }, on_task: { c: C.warning, l: "On Task" }, maintenance: { c: C.danger, l: "Maintenance" } };
  const d = cfg[status] || { c: C.textMuted, l: status };
  return <span style={{ display: "inline-block", marginTop: 6, padding: "3px 9px", borderRadius: 20, fontSize: 10, fontWeight: 700, background: `${d.c}18`, color: d.c, border: `1px solid ${d.c}22` }}>{d.l}</span>;
}
function SC({ label, value, color, sub }) {
  return <div style={{ background: C.bgCard, border: `1px solid ${C.border}`, borderRadius: 12, padding: "14px 16px" }}><div style={{ fontSize: 9, color: C.textDim, textTransform: "uppercase", letterSpacing: "1px", marginBottom: 7 }}>{label}</div><div style={{ fontFamily: "'Cormorant',serif", fontSize: 18, fontWeight: 700, color, wordBreak: "break-word" }}>{value}</div>{sub && <div style={{ fontSize: 10, color: C.textMuted, marginTop: 2 }}>{sub}</div>}</div>;
}
function Tabs({ tabs, labels, active, onChange, color = C.gold }) {
  return <div style={{ display: "flex", gap: 3, background: C.bgCard, padding: 3, borderRadius: 9, width: "fit-content", marginBottom: 16, border: `1px solid ${C.border}`, flexWrap: "wrap" }}>{tabs.map((t, i) => <div key={t} onClick={() => onChange(t)} style={{ padding: "5px 12px", borderRadius: 7, cursor: "pointer", fontSize: 11, fontWeight: active === t ? 700 : 400, color: active === t ? color : C.textMuted, background: active === t ? `${color}18` : "transparent", transition: "all .15s", whiteSpace: "nowrap" }}>{labels?.[i] || t.replace(/_/g, " ")}</div>)}</div>;
}
function Modal({ title, onClose, children, wide }) {
  return <div style={{ position: "fixed", inset: 0, background: "rgba(0,0,0,.72)", display: "flex", alignItems: "flex-end", justifyContent: "center", zIndex: 1e3, backdropFilter: "blur(6px)", padding: "0 8px 8px" }} onClick={onClose}><div style={{ background: C.bgCard, border: `1px solid ${C.border}`, borderRadius: 15, padding: 24, width: "100%", maxWidth: wide ? 640 : 490, maxHeight: "92vh", overflowY: "auto", animation: "fadeUp .2s ease both" }} onClick={(e) => e.stopPropagation()}><div style={{ fontFamily: "'Cormorant',serif", fontSize: 20, fontWeight: 700, color: C.text, marginBottom: 18 }}>{title}</div>{children}</div></div>;
}
function MF({ onCancel, onSave, label, color }) {
  return <div style={{ display: "flex", gap: 9, justifyContent: "flex-end", marginTop: 20, paddingTop: 14, borderTop: `1px solid ${C.border}` }}><button onClick={onCancel} style={{ padding: "7px 15px", background: "transparent", border: `1px solid ${C.border}`, borderRadius: 7, color: C.textMuted, fontSize: 12, cursor: "pointer" }}>Cancel</button><button onClick={onSave} style={{ ...BtnS(color || C.gold), padding: "7px 16px", fontSize: 12 }}>{label || "Save"}</button></div>;
}
function FL({ children }) {
  return <div style={{ fontSize: 9, fontWeight: 700, color: C.textDim, textTransform: "uppercase", letterSpacing: "1px", marginBottom: 5 }}>{children}</div>;
}
function FI({ label, type = "text", value, onChange, placeholder, onEnter }) {
  return <div>{label && <FL>{label}</FL>}<input type={type} value={value} onChange={(e) => onChange(e.target.value)} placeholder={placeholder} onKeyDown={(e) => e.key === "Enter" && onEnter && onEnter()} style={{ width: "100%", padding: "9px 12px", background: C.bg, border: `1.5px solid ${C.border}`, borderRadius: 8, color: C.text, fontSize: 13, outline: "none", transition: "border-color .15s" }} onFocus={(e) => e.target.style.borderColor = C.gold} onBlur={(e) => e.target.style.borderColor = C.border} /></div>;
}
function Alert({ text, color }) {
  return <div style={{ padding: "8px 12px", background: `${color}12`, border: `1px solid ${color}28`, borderRadius: 7, fontSize: 12, color }}>{text}</div>;
}
function ES({ text }) {
  return <div style={{ padding: "32px 20px", textAlign: "center", color: C.textDim, fontSize: 13 }}>{text}</div>;
}
function Th({ children }) {
  return <th style={{ padding: "8px 10px", textAlign: "left", fontSize: 10, fontWeight: 700, color: C.textDim, textTransform: "uppercase", letterSpacing: "1px", borderBottom: `1px solid ${C.border}`, whiteSpace: "nowrap" }}>{children}</th>;
}
function Td({ children, style }) {
  return <td style={{ padding: "9px 10px", fontSize: 12, ...style }}>{children}</td>;
}
