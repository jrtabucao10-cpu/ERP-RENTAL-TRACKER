const STORAGE_KEY = "apartment-erp-demo-v7";
const AUTH_SESSION_KEY = "apartment-erp-demo-auth";
const DEMO_PASSWORD = "admin123";

const monthFormatter = new Intl.DateTimeFormat("en-US", {
  month: "long",
  year: "numeric"
});

const moneyFormatter = new Intl.NumberFormat("en-AE", {
  style: "currency",
  currency: "AED",
  maximumFractionDigits: 0
});

const locationSuggestions = [
  "Abu Hail, Dubai",
  "Academic City, Dubai",
  "Al Awir, Dubai",
  "Dubai Marina, Dubai",
  "Jumeirah Lake Towers, Dubai",
  "Business Bay, Dubai",
  "Al Barsha, Dubai",
  "Al Barsha 1, Dubai",
  "Al Barsha 2, Dubai",
  "Al Barsha 3, Dubai",
  "Al Barsha South, Dubai",
  "Downtown Dubai, Dubai",
  "Jumeirah Village Circle, Dubai",
  "Jumeirah Village Triangle, Dubai",
  "Dubai Silicon Oasis, Dubai",
  "International City, Dubai",
  "Deira, Dubai",
  "Bur Dubai, Dubai",
  "Karama, Dubai",
  "Al Nahda, Dubai",
  "Al Mamzar, Dubai",
  "Al Mankhool, Dubai",
  "Al Mina, Dubai",
  "Al Mizhar, Dubai",
  "Al Muraqqabat, Dubai",
  "Al Murar, Dubai",
  "Al Quoz, Dubai",
  "Al Qusais, Dubai",
  "Al Rigga, Dubai",
  "Al Safa, Dubai",
  "Al Satwa, Dubai",
  "Al Sufouh, Dubai",
  "Al Twar, Dubai",
  "Al Warqa, Dubai",
  "Al Wasl, Dubai",
  "Arabian Ranches, Dubai",
  "Bluewaters Island, Dubai",
  "Damac Hills, Dubai",
  "Damac Hills 2, Dubai",
  "Dubai Creek Harbour, Dubai",
  "Dubai Festival City, Dubai",
  "Dubai Harbour, Dubai",
  "Dubai Healthcare City, Dubai",
  "Dubai Hills Estate, Dubai",
  "Dubai Investment Park, Dubai",
  "Dubai Land, Dubai",
  "Dubai Media City, Dubai",
  "Dubai Production City, Dubai",
  "Dubai Science Park, Dubai",
  "Dubai Sports City, Dubai",
  "Dubai Studio City, Dubai",
  "Dubai South, Dubai",
  "Emirates Hills, Dubai",
  "Garhoud, Dubai",
  "Hor Al Anz, Dubai",
  "Jaddaf, Dubai",
  "Jebel Ali, Dubai",
  "Jumeirah, Dubai",
  "Jumeirah 1, Dubai",
  "Jumeirah 2, Dubai",
  "Jumeirah 3, Dubai",
  "Jumeirah Beach Residence, Dubai",
  "Jumeirah Golf Estates, Dubai",
  "Jumeirah Islands, Dubai",
  "Jumeirah Park, Dubai",
  "Liwan, Dubai",
  "Mirdif, Dubai",
  "Meydan, Dubai",
  "Motor City, Dubai",
  "Mudon, Dubai",
  "Nad Al Hamar, Dubai",
  "Nad Al Sheba, Dubai",
  "Palm Jumeirah, Dubai",
  "Ras Al Khor, Dubai",
  "Remraam, Dubai",
  "Sheikh Zayed Road, Dubai",
  "Tecom / Barsha Heights, Dubai",
  "The Greens, Dubai",
  "The Springs, Dubai",
  "The Lakes, Dubai",
  "The Meadows, Dubai",
  "The Gardens, Dubai",
  "The Views, Dubai",
  "Town Square, Dubai",
  "Umm Hurair, Dubai",
  "Umm Ramool, Dubai",
  "Umm Suqeim, Dubai",
  "Warsan, Dubai",
  "Za'abeel, Dubai",
  "Mirdif, Dubai",
  "Discovery Gardens, Dubai",
  "Arjan, Dubai",
  "Sharjah, United Arab Emirates",
  "Abu Shagara, Sharjah",
  "Al Azra, Sharjah",
  "Al Butina, Sharjah",
  "Al Darari, Sharjah",
  "Al Fisht, Sharjah",
  "Al Ghafia, Sharjah",
  "Al Gharayen, Sharjah",
  "Al Jazzat, Sharjah",
  "Al Jubail, Sharjah",
  "Al Khan, Sharjah",
  "Al Majaz, Sharjah",
  "Al Mamzar, Sharjah",
  "Al Mareija, Sharjah",
  "Al Nahda, Sharjah",
  "Al Nasserya, Sharjah",
  "Al Qasimia, Sharjah",
  "Al Rahmaniya, Sharjah",
  "Al Ramla, Sharjah",
  "Al Riffa, Sharjah",
  "Al Rolla, Sharjah",
  "Al Shahba, Sharjah",
  "Al Taawun, Sharjah",
  "Al Yarmook, Sharjah",
  "Industrial Area, Sharjah",
  "Muwailih, Sharjah",
  "Muwaileh, Sharjah",
  "Rolla, Sharjah",
  "University City, Sharjah",
  "Khalidiyah, Sharjah",
  "Kalba, Sharjah",
  "Khor Fakkan, Sharjah",
  "Dibba Al Hisn, Sharjah",
  "Al Nahda, Sharjah",
  "Abu Dhabi, United Arab Emirates",
  "Al Bateen, Abu Dhabi",
  "Al Danah, Abu Dhabi",
  "Al Falah, Abu Dhabi",
  "Al Khalidiyah, Abu Dhabi",
  "Al Markaziyah, Abu Dhabi",
  "Al Maryah Island, Abu Dhabi",
  "Al Mina, Abu Dhabi",
  "Al Mushrif, Abu Dhabi",
  "Al Muroor, Abu Dhabi",
  "Al Nahyan, Abu Dhabi",
  "Al Raha Beach, Abu Dhabi",
  "Al Reef, Abu Dhabi",
  "Al Reem Island, Abu Dhabi",
  "Al Rowdah, Abu Dhabi",
  "Al Shamkha, Abu Dhabi",
  "Al Wahda, Abu Dhabi",
  "Al Zahiyah, Abu Dhabi",
  "Baniyas, Abu Dhabi",
  "Corniche, Abu Dhabi",
  "Khalifa City, Abu Dhabi",
  "Madinat Zayed, Abu Dhabi",
  "Mohammed Bin Zayed City, Abu Dhabi",
  "Mussafah, Abu Dhabi",
  "Saadiyat Island, Abu Dhabi",
  "Yas Island, Abu Dhabi",
  "Al Ain, Abu Dhabi",
  "Al Jimi, Al Ain",
  "Al Muwaiji, Al Ain",
  "Al Towayya, Al Ain",
  "Falaj Hazza, Al Ain",
  "Zakher, Al Ain",
  "Ajman, United Arab Emirates",
  "Al Bustan, Ajman",
  "Al Hamidiya, Ajman",
  "Al Jurf, Ajman",
  "Al Mowaihat, Ajman",
  "Al Nuaimiya, Ajman",
  "Al Rashidiya, Ajman",
  "Al Rawda, Ajman",
  "Al Rumailah, Ajman",
  "Ajman Corniche, Ajman",
  "Emirates City, Ajman",
  "Garden City, Ajman",
  "Umm Al Quwain, United Arab Emirates",
  "Al Salamah, Umm Al Quwain",
  "Al Raas, Umm Al Quwain",
  "Al Humrah, Umm Al Quwain",
  "Falaj Al Mualla, Umm Al Quwain",
  "Ras Al Khaimah, United Arab Emirates",
  "Al Dhait, Ras Al Khaimah",
  "Al Hamra Village, Ras Al Khaimah",
  "Al Jazeera Al Hamra, Ras Al Khaimah",
  "Al Nakheel, Ras Al Khaimah",
  "Al Qusaidat, Ras Al Khaimah",
  "Al Rams, Ras Al Khaimah",
  "Khuzam, Ras Al Khaimah",
  "Mina Al Arab, Ras Al Khaimah",
  "Fujairah, United Arab Emirates",
  "Al Faseel, Fujairah",
  "Al Gurfa, Fujairah",
  "Dibba Al Fujairah, Fujairah",
  "Kalba Road, Fujairah",
  "Mirbah, Fujairah",
  "Sakamkam, Fujairah",
  "Dibba, Fujairah",
  "Masafi, Fujairah",
  "Khalifa City, Abu Dhabi",
  "Ajman, United Arab Emirates"
].filter((location, index, list) => list.indexOf(location) === index);

const demoData = createManiDemoData();

function createManiDemoData() {
  const properties = [
    { id: crypto.randomUUID(), name: "Mani 6", location: "" },
    { id: crypto.randomUUID(), name: "Mani 7", location: "" },
    { id: crypto.randomUUID(), name: "Mani 8", location: "" }
  ];
  const propertyByName = Object.fromEntries(properties.map((property) => [property.name, property]));
  const apartments = [
    ...createUnits(propertyByName["Mani 6"].id, "SF", 11),
    ...createUnits(propertyByName["Mani 7"].id, "M7", 11),
    ...createUnits(propertyByName["Mani 8"].id, "M8", 34)
  ];
  const unitByNumber = Object.fromEntries(apartments.map((apartment) => [apartment.unitNumber, apartment]));

  return {
    properties,
    apartments,
    tenants: [
      createDemoTenant("T-1001", "Maria Santos", unitByNumber["SF-01"], "2026-01-10", "2026-01-15", "2026-12-31", 1400, 2800, "Received", "Filipino", "Female", "Single", "+971 50 123 4567", "+63 917 111 2222", "maria@example.com"),
      createDemoTenant("T-1002", "Ahmed Khan", unitByNumber["M7-01"], "2026-02-01", "2026-02-05", "2027-01-31", 1500, 3000, "Received", "Pakistani", "Male", "Couple", "+971 55 222 7788", "+92 300 222 7788", "ahmed@example.com"),
      createDemoTenant("T-1003", "Liza Cruz", unitByNumber["M8-01"], "2026-03-12", "2026-03-15", "2026-09-14", 1300, 2600, "Used by tenant", "Filipino", "Female", "Family", "+971 52 800 1199", "+63 920 800 1199", "liza@example.com")
    ],
    logs: [],
    expenses: [
      { id: crypto.randomUUID(), roomId: unitByNumber["SF-01"].id, name: "AC filter cleaning", amount: 180, date: "2026-06-08" },
      { id: crypto.randomUUID(), roomId: unitByNumber["M8-01"].id, name: "Plumbing repair", amount: 320, date: "2026-06-18" }
    ]
  };
}

function createUnits(propertyId, prefix, count) {
  return Array.from({ length: count }, (_, index) => ({
    id: crypto.randomUUID(),
    propertyId,
    unitNumber: `${prefix}-${String(index + 1).padStart(2, "0")}`,
    monthlyRent: 0,
    location: "",
    mapQuery: ""
  }));
}

function createDemoTenant(tenantIdNumber, name, apartment, contractSignUpDate, moveInDate, contractEndDate, monthlyRent, deposit, depositStatus, nationality, gender, occupancy, localPhone, internationalPhone, email) {
  apartment.monthlyRent = monthlyRent;
  return {
    id: crypto.randomUUID(),
    tenantIdNumber,
    name,
    phone: localPhone,
    localPhone,
    internationalPhone,
    email,
    contractSignUpDate,
    moveInDate,
    moveOutDate: contractEndDate,
    contractEndDate,
    monthlyRent,
    deposit,
    depositStatus,
    nationality,
    gender,
    occupancy,
    roomId: apartment.id
  };
}

let state = loadState();
let selectedMapQuery = "";
let detailReturnView = "tenants";

const els = {
  currentMonthLabel: document.getElementById("current-month-label"),
  statUnits: document.getElementById("stat-units"),
  statOccupied: document.getElementById("stat-occupied"),
  statExpected: document.getElementById("stat-expected"),
  statCollected: document.getElementById("stat-collected"),
  statExpenses: document.getElementById("stat-expenses"),
  loginScreen: document.getElementById("login-screen"),
  loginForm: document.getElementById("login-form"),
  loginPassword: document.getElementById("login-password"),
  loginError: document.getElementById("login-error"),
  propertyForm: document.getElementById("property-form"),
  apartmentForm: document.getElementById("apartment-form"),
  tenantForm: document.getElementById("tenant-form"),
  openTenantForm: document.getElementById("open-tenant-form"),
  closeTenantForm: document.getElementById("close-tenant-form"),
  tenantDetailsTitle: document.getElementById("tenant-page-title"),
  tenantDetailsBody: document.getElementById("tenant-page-body"),
  backTenantDetails: document.getElementById("back-tenant-details"),
  propertyDetailsTitle: document.getElementById("property-page-title"),
  propertyDetailsBody: document.getElementById("property-page-body"),
  backPropertyDetails: document.getElementById("back-property-details"),
  expenseDetailsBody: document.getElementById("expense-page-body"),
  backExpenseDetails: document.getElementById("back-expense-details"),
  openExpenseForm: document.getElementById("open-expense-form"),
  closeExpenseForm: document.getElementById("close-expense-form"),
  expenseForm: document.getElementById("expense-form"),
  propertiesTable: document.getElementById("properties-table"),
  apartmentsTable: document.getElementById("apartments-table"),
  tenantsTable: document.getElementById("tenants-table"),
  clientSummaryTable: document.getElementById("client-summary-table"),
  utilitiesTable: document.getElementById("utilities-table"),
  profitLossTable: document.getElementById("profit-loss-table"),
  reportMonthLabel: document.getElementById("report-month-label"),
  reportExpectedRent: document.getElementById("report-expected-rent"),
  reportCollectedRent: document.getElementById("report-collected-rent"),
  reportOutstandingRent: document.getElementById("report-outstanding-rent"),
  reportExpenses: document.getElementById("report-expenses"),
  reportNetProfit: document.getElementById("report-net-profit"),
  reportDepositsReceived: document.getElementById("report-deposits-received"),
  reportDepositsReturned: document.getElementById("report-deposits-returned"),
  reportDepositsUsed: document.getElementById("report-deposits-used"),
  logsTable: document.getElementById("logs-table"),
  expensesTable: document.getElementById("expenses-table"),
  apartmentProperty: document.getElementById("apartment-property"),
  tenantRoom: document.getElementById("tenant-room"),
  expenseRoom: document.getElementById("expense-room"),
  targetMonth: document.getElementById("target-month"),
  searchLocation: document.getElementById("search-location"),
  apartmentLocation: document.getElementById("apartment-location"),
  locationSuggestions: document.getElementById("location-suggestions"),
  mapModal: document.getElementById("map-modal"),
  locationMapFrame: document.getElementById("location-map-frame"),
  mapModalLocation: document.getElementById("map-modal-location"),
  closeMapPreview: document.getElementById("close-map-preview"),
  useMapLocation: document.getElementById("use-map-location"),
  generateLog: document.getElementById("generate-log"),
  downloadLog: document.getElementById("download-log"),
  downloadExcel: document.getElementById("download-excel"),
  downloadPdf: document.getElementById("download-pdf"),
  seedDemo: document.getElementById("seed-demo"),
  signOut: document.getElementById("sign-out"),
  emptyRowTemplate: document.getElementById("empty-row-template"),
  viewLinks: document.querySelectorAll("[data-view-link]"),
  views: document.querySelectorAll("[data-view]")
};

init();

function init() {
  els.targetMonth.value = getCurrentMonthValue();
  document.getElementById("expense-date").value = getTodayValue();
  els.currentMonthLabel.textContent = monthFormatter.format(monthValueToDate(getCurrentMonthValue()));
  bindEvents();
  updateLoginView();
  ensureStateShape();
  if (state.apartments.length && !state.logs.length) {
    generateMonthLog(getCurrentMonthValue());
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  }
  render();
  setActiveView(getInitialView());
}

function bindEvents() {
  els.viewLinks.forEach((link) => {
    link.addEventListener("click", (event) => {
      event.preventDefault();
      setActiveView(link.dataset.viewLink);
    });
  });

  window.addEventListener("hashchange", () => {
    setActiveView(getInitialView(), { replaceHash: false });
  });

  els.loginForm.addEventListener("submit", (event) => {
    event.preventDefault();
    if (els.loginPassword.value === DEMO_PASSWORD) {
      localStorage.setItem(AUTH_SESSION_KEY, "yes");
      els.loginPassword.value = "";
      els.loginError.hidden = true;
      updateLoginView();
      return;
    }

    els.loginError.hidden = false;
    els.loginPassword.select();
  });

  els.signOut.addEventListener("click", () => {
    localStorage.removeItem(AUTH_SESSION_KEY);
    updateLoginView();
  });

  els.openTenantForm.addEventListener("click", () => {
    showTenantForm();
  });

  els.openExpenseForm.addEventListener("click", () => {
    showExpenseForm();
  });

  els.closeTenantForm.addEventListener("click", () => {
    hideTenantForm();
  });

  els.closeExpenseForm.addEventListener("click", () => {
    hideExpenseForm();
  });

  els.backTenantDetails.addEventListener("click", () => {
    hideTenantDetails();
  });

  els.backPropertyDetails.addEventListener("click", () => {
    hidePropertyDetails();
  });

  els.backExpenseDetails.addEventListener("click", () => {
    hideExpenseDetails();
  });

  els.propertyForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const name = document.getElementById("property-name").value.trim();
    const location = document.getElementById("property-location").value.trim();

    if (!name) return;

    state.properties.push({
      id: crypto.randomUUID(),
      name,
      location
    });

    els.propertyForm.reset();
    persistAndRender();
  });

  els.apartmentForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const propertyId = document.getElementById("apartment-property").value;
    const unitNumber = document.getElementById("unit-number").value.trim();
    const monthlyRent = Number(document.getElementById("monthly-rent").value || 0);
    const location = document.getElementById("apartment-location").value.trim();

    if (!propertyId || !unitNumber || monthlyRent < 0) return;

    state.apartments.push({
      id: crypto.randomUUID(),
      propertyId,
      unitNumber,
      monthlyRent,
      location,
      mapQuery: selectedMapQuery || location
    });

    selectedMapQuery = "";
    els.apartmentForm.reset();
    persistAndRender();
  });

  els.tenantForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const tenantIdNumber = document.getElementById("tenant-id-number").value.trim();
    const name = document.getElementById("tenant-name").value.trim();
    const localPhone = document.getElementById("tenant-phone").value.trim();
    const internationalPhone = document.getElementById("tenant-international-phone").value.trim();
    const email = document.getElementById("tenant-email").value.trim();
    const contractSignUpDate = document.getElementById("contract-signup-date").value;
    const moveInDate = document.getElementById("move-in-date").value;
    const contractEndDate = document.getElementById("move-out-date").value;
    const monthlyRent = Number(document.getElementById("tenant-monthly-rent").value || 0);
    const deposit = Number(document.getElementById("tenant-deposit").value || 0);
    const depositStatus = document.getElementById("deposit-status").value;
    const nationality = document.getElementById("tenant-nationality").value.trim();
    const gender = document.getElementById("tenant-gender").value;
    const occupancy = document.getElementById("tenant-occupancy").value;
    const roomId = document.getElementById("tenant-room").value;

    if (!tenantIdNumber || !name || !localPhone || !contractSignUpDate || !moveInDate || !contractEndDate || monthlyRent < 0 || deposit < 0 || !roomId) return;
    if (new Date(`${contractEndDate}T00:00:00`) < new Date(`${contractSignUpDate}T00:00:00`)) {
      alert("Contract end cannot be before the contract sign up date.");
      return;
    }
    if (new Date(`${contractEndDate}T00:00:00`) < new Date(`${moveInDate}T00:00:00`)) {
      alert("Contract end cannot be before the moving-in start date.");
      return;
    }

    const apartment = state.apartments.find((item) => item.id === roomId);
    if (apartment) {
      apartment.monthlyRent = monthlyRent;
    }

    state.tenants.push({
      id: crypto.randomUUID(),
      tenantIdNumber,
      name,
      phone: localPhone,
      localPhone,
      internationalPhone,
      email,
      contractSignUpDate,
      moveInDate,
      moveOutDate: contractEndDate,
      contractEndDate,
      monthlyRent,
      deposit,
      depositStatus,
      nationality,
      gender,
      occupancy,
      roomId
    });

    els.tenantForm.reset();
    hideTenantForm();
    persistAndRender();
    setActiveView("tenants");
  });

  els.expenseForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const roomId = document.getElementById("expense-room").value;
    const name = document.getElementById("expense-name").value.trim();
    const amount = Number(document.getElementById("expense-amount").value || 0);
    const date = document.getElementById("expense-date").value;

    if (!roomId || !name || amount < 0 || !date) return;

    state.expenses.push({
      id: crypto.randomUUID(),
      roomId,
      name,
      amount,
      date
    });

    els.expenseForm.reset();
    document.getElementById("expense-date").value = getTodayValue();
    hideExpenseForm();
    persistAndRender();
  });

  els.generateLog.addEventListener("click", () => {
    generateMonthLog(els.targetMonth.value || getCurrentMonthValue());
    persistAndRender();
  });

  els.targetMonth.addEventListener("change", () => {
    renderLogs();
    renderReports();
  });

  els.downloadLog.addEventListener("click", () => {
    downloadCurrentMonthCsv();
  });

  els.downloadExcel.addEventListener("click", () => {
    downloadExcelReport();
  });

  els.downloadPdf.addEventListener("click", () => {
    openPdfReport();
  });

  els.apartmentLocation.addEventListener("input", () => {
    selectedMapQuery = "";
    renderLocationSuggestions(els.apartmentLocation.value);
  });

  els.apartmentLocation.addEventListener("focus", () => {
    renderLocationSuggestions(els.apartmentLocation.value);
  });

  els.apartmentLocation.addEventListener("keydown", (event) => {
    if (event.key === "Escape") hideLocationSuggestions();
    if (event.key === "Enter") {
      event.preventDefault();
      searchTypedLocation();
    }
  });

  els.locationSuggestions.addEventListener("click", (event) => {
    const option = event.target.closest("[data-location-option]");
    if (!option) return;
    els.apartmentLocation.value = option.dataset.locationOption;
    selectedMapQuery = option.dataset.locationOption;
    hideLocationSuggestions();
    els.apartmentLocation.focus();
  });

  document.addEventListener("click", (event) => {
    if (event.target.closest(".location-picker")) return;
    hideLocationSuggestions();
  });

  els.searchLocation.addEventListener("click", () => {
    searchTypedLocation();
  });

  els.closeMapPreview.addEventListener("click", () => {
    hideLocationMapPreview();
  });

  els.useMapLocation.addEventListener("click", () => {
    hideLocationMapPreview();
    els.apartmentLocation.focus();
  });

  els.mapModal.addEventListener("click", (event) => {
    if (event.target === els.mapModal) hideLocationMapPreview();
  });

  els.logsTable.addEventListener("input", (event) => {
    const input = event.target.closest("[data-paid-input]");
    if (!input) return;
    const log = state.logs.find((item) => item.id === input.dataset.paidInput);
    if (!log) return;
    log.amountPaid = Number(input.value || 0);
    updatePaymentStatusRow(input, log);
    updateMonthlyTotalsRow();
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
    renderStats();
    renderReports();
  });

  document.addEventListener("click", (event) => {
    const propertyDetailsTarget = event.target.closest("[data-property-details]");
    if (propertyDetailsTarget) {
      showPropertyDetails(propertyDetailsTarget.dataset.propertyDetails);
      return;
    }

    const tenantDetailsButton = event.target.closest("[data-tenant-details]");
    if (tenantDetailsButton) {
      showTenantDetails(tenantDetailsButton.dataset.tenantDetails);
      return;
    }

    const expenseDetailsButton = event.target.closest("[data-expense-details]");
    if (expenseDetailsButton) {
      showExpenseDetails(expenseDetailsButton.dataset.expenseDetails);
      return;
    }

    const button = event.target.closest("[data-delete]");
    if (!button) return;
    deleteRecord(button.dataset.delete, button.dataset.id);
  });

  els.seedDemo.addEventListener("click", () => {
    state = cloneData(demoData);
    generateMonthLog(getCurrentMonthValue());
    persistAndRender();
  });
}

function render() {
  ensureStateShape();
  renderPropertySelect();
  renderProperties();
  renderRoomSelect();
  renderApartments();
  renderTenants();
  renderClientSummary();
  renderReports();
  renderLogs();
  renderExpenses();
  renderUtilities();
  renderStats();
}

function getInitialView() {
  const hashView = window.location.hash.replace("#", "");
  const allowedViews = [...els.views].map((section) => section.dataset.view);
  return allowedViews.includes(hashView) ? hashView : "dashboard";
}

function setActiveView(view, options = {}) {
  const activeView = view || "dashboard";
  els.views.forEach((section) => {
    section.classList.toggle("active-view", section.dataset.view === activeView);
  });
  els.viewLinks.forEach((link) => {
    link.classList.toggle("active", link.dataset.viewLink === activeView);
  });
  if (options.replaceHash !== false && window.location.hash !== `#${activeView}`) {
    history.replaceState(null, "", `#${activeView}`);
  }
}

function getActiveView() {
  return [...els.views].find((section) => section.classList.contains("active-view"))?.dataset.view || "dashboard";
}

function showTenantForm() {
  setActiveView("add-tenant");
  setTimeout(() => document.getElementById("tenant-id-number").focus(), 50);
}

function hideTenantForm() {
  setActiveView("tenants");
}

function showExpenseForm() {
  setActiveView("add-expense");
  setTimeout(() => els.expenseRoom.focus(), 50);
}

function hideExpenseForm() {
  setActiveView("expenses");
}

function showTenantDetails(tenantId) {
  const tenant = state.tenants.find((item) => item.id === tenantId);
  if (!tenant) return;
  detailReturnView = getActiveView();

  const apartment = state.apartments.find((item) => item.id === tenant.roomId);
  const property = apartment ? getPropertyById(apartment.propertyId) : null;
  const metrics = getContractMetrics(tenant);
  const status = getContractStatus(tenant);
  const details = [
    ["Property", property?.name || "-"],
    ["Tenant ID", tenant.tenantIdNumber || "-"],
    ["Unit Number", apartment?.unitNumber || "Room deleted"],
    ["Tenant Name", tenant.name],
    ["Local Contact", tenant.localPhone || tenant.phone || "-"],
    ["International Contact", tenant.internationalPhone || "-"],
    ["Email", tenant.email || "-"],
    ["Nationality", tenant.nationality || "-"],
    ["Gender", tenant.gender || "-"],
    ["Occupancy", tenant.occupancy || "-"],
    ["Contract Sign Up", formatDate(tenant.contractSignUpDate)],
    ["Start of Moving In", formatDate(tenant.moveInDate)],
    ["End", formatDate(getTenantEndDate(tenant))],
    ["Remaining Days", metrics.remainingDays],
    ["Total Stay", metrics.totalStay],
    ["Total Month", metrics.totalMonths],
    ["Total Years", metrics.totalYears],
    ["Status", status],
    ["Monthly Rental Amount", formatMoney(getTenantMonthlyRent(tenant, apartment))],
    ["Deposit Amount", formatMoney(tenant.deposit || 0)],
    ["Deposit Status", tenant.depositStatus || "Received"]
  ];

  els.tenantDetailsBody.innerHTML = details
    .map(([label, value]) => `
      <div class="detail-item">
        <span>${escapeHtml(label)}</span>
        <strong>${escapeHtml(value)}</strong>
      </div>
    `)
    .join("");
  els.tenantDetailsTitle.textContent = tenant.name || "Tenant Profile";
  setActiveView("tenant-details");
}

function hideTenantDetails() {
  setActiveView(detailReturnView || "tenants");
  els.tenantDetailsBody.innerHTML = "";
}

function showPropertyDetails(propertyId) {
  const property = getPropertyById(propertyId);
  if (!property) return;

  const month = getCurrentMonthValue();
  const occupiedUnits = state.apartments
    .filter((apartment) => apartment.propertyId === propertyId)
    .map((apartment) => ({
      apartment,
      tenant: getTenantForRoom(apartment.id, month)
    }))
    .filter((item) => item.tenant)
    .sort((a, b) => a.apartment.unitNumber.localeCompare(b.apartment.unitNumber, undefined, { numeric: true }));

  els.propertyDetailsTitle.textContent = `${property.name} Occupied Units`;

  if (!occupiedUnits.length) {
    els.propertyDetailsBody.innerHTML = `<div class="empty-state property-empty">No occupied units in this property for the selected month.</div>`;
  } else {
    els.propertyDetailsBody.innerHTML = `
      <div class="table-wrap property-details-wrap">
        <table class="property-details-table">
          <thead>
            <tr>
              <th>Tenant ID</th>
              <th>Name</th>
              <th>Current Room</th>
              <th>Monthly Rent</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            ${occupiedUnits
              .map(({ apartment, tenant }) => {
                const status = getContractStatus(tenant);
                return `
                  <tr>
                    <td>${escapeHtml(tenant.tenantIdNumber || "-")}</td>
                    <td>
                      <button class="link-button tenant-name-button" type="button" data-tenant-details="${tenant.id}">
                        ${escapeHtml(tenant.name)}
                      </button>
                    </td>
                    <td>${escapeHtml(apartment.unitNumber)}</td>
                    <td>${escapeHtml(formatMoney(getTenantMonthlyRent(tenant, apartment)))}</td>
                    <td><span class="badge ${status === "Checked in" ? "yes" : "danger"}">${escapeHtml(status)}</span></td>
                  </tr>
                `;
              })
              .join("")}
          </tbody>
        </table>
      </div>
    `;
  }

  setActiveView("property-details");
}

function hidePropertyDetails() {
  setActiveView("properties");
  els.propertyDetailsBody.innerHTML = "";
}

function showExpenseDetails(expenseId) {
  const expense = state.expenses.find((item) => item.id === expenseId);
  if (!expense) return;

  const apartment = state.apartments.find((item) => item.id === expense.roomId);
  const property = apartment ? getPropertyById(apartment.propertyId) : null;
  const details = [
    ["Date", formatDate(expense.date)],
    ["Property", property?.name || "-"],
    ["Apartment", apartment ? getApartmentLabel(apartment) : "Apartment deleted"],
    ["Expense", expense.name || "-"],
    ["Amount", formatMoney(expense.amount)]
  ];

  els.expenseDetailsBody.innerHTML = details
    .map(([label, value]) => `
      <div class="detail-item">
        <span>${escapeHtml(label)}</span>
        <strong>${escapeHtml(value)}</strong>
      </div>
    `)
    .join("");
  setActiveView("expense-details");
}

function hideExpenseDetails() {
  setActiveView("expenses");
  els.expenseDetailsBody.innerHTML = "";
}

function renderPropertySelect() {
  if (!state.properties.length) {
    els.apartmentProperty.innerHTML = `<option value="">Add a property first</option>`;
    els.apartmentProperty.disabled = true;
    return;
  }

  els.apartmentProperty.disabled = false;
  els.apartmentProperty.innerHTML = `<option value="">Select property...</option>` + state.properties
    .map((property) => `<option value="${property.id}">${escapeHtml(property.name)}</option>`)
    .join("");
}

function renderProperties() {
  const activePropertyNames = ["Mani 6", "Mani 7", "Mani 8"];
  const activeProperties = state.properties.filter((property) => activePropertyNames.includes(property.name));

  if (!activeProperties.length) {
    renderEmpty(els.propertiesTable, 4, "No active properties yet.");
    return;
  }

  const month = getCurrentMonthValue();
  els.propertiesTable.innerHTML = activeProperties
    .map((property) => {
      const apartments = state.apartments.filter((apartment) => apartment.propertyId === property.id);
      const occupied = apartments.filter((apartment) => getTenantForRoom(apartment.id, month)).length;
      return `
        <tr>
          <td><strong>${escapeHtml(property.name)}</strong></td>
          <td>${escapeHtml(property.location || "—")}</td>
          <td>${apartments.length}</td>
          <td>${occupied}</td>
          <td>
            <div class="row-actions">
              <button class="small-btn danger" data-delete="property" data-id="${property.id}">Delete</button>
            </div>
          </td>
        </tr>
      `;
    })
    .join("");
}

function renderProperties() {
  const activePropertyNames = ["Mani 6", "Mani 7", "Mani 8"];
  const activeProperties = state.properties.filter((property) => activePropertyNames.includes(property.name));

  if (!activeProperties.length) {
    renderEmpty(els.propertiesTable, 4, "No active properties yet.");
    return;
  }

  const month = getCurrentMonthValue();
  els.propertiesTable.innerHTML = activeProperties
    .map((property) => {
      const apartments = state.apartments.filter((apartment) => apartment.propertyId === property.id);
      const occupied = apartments.filter((apartment) => getTenantForRoom(apartment.id, month)).length;
      return `
        <tr class="clickable-row" data-property-details="${property.id}">
          <td>
            <button class="link-button property-name-button" type="button">
              ${escapeHtml(property.name)}
            </button>
          </td>
          <td>${apartments.length}</td>
          <td>${occupied}</td>
          <td><span class="badge yes">Active</span></td>
        </tr>
      `;
    })
    .join("");
}

function renderRoomSelect() {
  els.tenantRoom.innerHTML = "";
  if (!state.apartments.length) {
    els.tenantRoom.innerHTML = `<option value="">Add an apartment first</option>`;
    els.expenseRoom.innerHTML = `<option value="">Add an apartment first</option>`;
    return;
  }

  const month = getCurrentMonthValue();
  const vacantApartments = state.apartments.filter((apartment) => !getTenantForRoom(apartment.id, month));
  const vacantRoomOptions = vacantApartments
    .map((apartment) => `<option value="${apartment.id}">${escapeHtml(getApartmentLabel(apartment))}</option>`)
    .join("");
  const allRoomOptions = state.apartments
    .map((apartment) => `<option value="${apartment.id}">${escapeHtml(getApartmentLabel(apartment))}</option>`)
    .join("");

  els.tenantRoom.innerHTML = vacantApartments.length
    ? `<option value="">Select vacant room...</option>` + vacantRoomOptions
    : `<option value="">No vacant apartments available</option>`;
  els.tenantRoom.disabled = !vacantApartments.length;
  els.expenseRoom.innerHTML = `<option value="">Select apartment...</option>` + allRoomOptions;
}

function renderApartments() {
  if (!state.apartments.length) {
    renderEmpty(els.apartmentsTable, 7);
    return;
  }

  const month = getCurrentMonthValue();
  els.apartmentsTable.innerHTML = state.apartments
    .map((apartment) => {
      const property = getPropertyById(apartment.propertyId);
      const tenant = getTenantForRoom(apartment.id, month);
      const occupied = Boolean(tenant);
      return `
        <tr>
          <td>${escapeHtml(property?.name || "No property")}</td>
          <td><strong>${escapeHtml(apartment.unitNumber)}</strong></td>
          <td>${formatMoney(apartment.monthlyRent)}</td>
          <td>${renderLocation(apartment.location, apartment.mapQuery)}</td>
          <td><span class="badge ${occupied ? "yes" : "no"}">${occupied ? "Yes" : "No"}</span></td>
          <td>${tenant ? escapeHtml(tenant.name) : "—"}</td>
          <td>
            <div class="row-actions">
              <button class="small-btn danger" data-delete="apartment" data-id="${apartment.id}">Delete</button>
            </div>
          </td>
        </tr>
      `;
    })
    .join("");
}

function renderTenants() {
  if (!state.tenants.length) {
    renderEmpty(els.tenantsTable, 10);
    return;
  }

  const totalDeposit = state.tenants.reduce((sum, tenant) => sum + Number(tenant.deposit || 0), 0);
  const rows = state.tenants
    .map((tenant) => {
      const apartment = state.apartments.find((item) => item.id === tenant.roomId);
      const status = getContractStatus(tenant);
      return `
        <tr>
          <td>${escapeHtml(tenant.tenantIdNumber || "—")}</td>
          <td><strong>${escapeHtml(tenant.name)}</strong></td>
          <td>${escapeHtml(tenant.localPhone || tenant.phone || "—")}</td>
          <td>${formatDate(tenant.contractSignUpDate)}</td>
          <td>${formatDate(tenant.moveInDate)}</td>
          <td>${formatDate(getTenantEndDate(tenant))}</td>
          <td>${apartment ? escapeHtml(getApartmentLabel(apartment)) : "Room deleted"}</td>
          <td>${formatMoney(getTenantMonthlyRent(tenant, apartment))}</td>
          <td>${formatMoney(tenant.deposit || 0)}</td>
          <td><span class="badge ${status === "Checked in" ? "yes" : "no"}">${status}</span></td>
          <td>
            <div class="row-actions">
              <button class="small-btn danger" data-delete="tenant" data-id="${tenant.id}">Delete</button>
            </div>
          </td>
        </tr>
      `;
    })
    .join("");

  els.tenantsTable.innerHTML = rows + `
    <tr class="total-row">
      <td colspan="8">Total Deposit</td>
      <td>${formatMoney(totalDeposit)}</td>
      <td></td>
    </tr>
  `;
}

function renderTenants() {
  if (!state.tenants.length) {
    renderEmpty(els.tenantsTable, 5);
    return;
  }

  els.tenantsTable.innerHTML = state.tenants
    .map((tenant) => {
      const apartment = state.apartments.find((item) => item.id === tenant.roomId);
      const status = getContractStatus(tenant);
      return `
        <tr>
          <td>${escapeHtml(tenant.tenantIdNumber || "-")}</td>
          <td>
            <button class="link-button tenant-name-button" type="button" data-tenant-details="${tenant.id}">
              ${escapeHtml(tenant.name)}
            </button>
          </td>
          <td>${apartment ? escapeHtml(getApartmentLabel(apartment)) : "Room deleted"}</td>
          <td>${formatMoney(getTenantMonthlyRent(tenant, apartment))}</td>
          <td><span class="badge ${status === "Checked in" ? "yes" : "no"}">${status}</span></td>
        </tr>
      `;
    })
    .join("");
}

function renderClientSummary() {
  const rows = getClientSummaryRows();
  if (!rows.length) {
    renderEmpty(els.clientSummaryTable, 6, "No client summary yet. Add a tenant above to start.");
    return;
  }

  els.clientSummaryTable.innerHTML = rows
    .map((row) => `
      <tr>
        <td><strong>${escapeHtml(row.tenantId)}</strong></td>
        <td>
          <button class="link-button tenant-name-button" type="button" data-tenant-details="${row.tenantRecordId}">
            ${escapeHtml(row.tenantName)}
          </button>
        </td>
        <td>${escapeHtml(row.property)}</td>
        <td>${escapeHtml(row.unitNumber)}</td>
        <td>${escapeHtml(row.monthlyRent)}</td>
        <td><span class="badge ${row.status === "Checked in" ? "yes" : "no"}">${escapeHtml(row.status)}</span></td>
      </tr>
    `)
    .join("");
}
function renderReports() {
  const month = els.targetMonth.value || getCurrentMonthValue();
  const report = getProfitLossReport(month);

  els.reportMonthLabel.textContent = formatMonth(month);
  els.reportExpectedRent.textContent = formatMoney(report.totals.expectedRent);
  els.reportCollectedRent.textContent = formatMoney(report.totals.collectedRent);
  els.reportOutstandingRent.textContent = formatMoney(report.totals.outstandingRent);
  els.reportExpenses.textContent = formatMoney(report.totals.expenses);
  els.reportNetProfit.textContent = formatMoney(report.totals.netProfit);
  els.reportNetProfit.classList.toggle("loss", report.totals.netProfit < 0);
  els.reportDepositsReceived.textContent = formatMoney(report.depositTotals.received);
  els.reportDepositsReturned.textContent = formatMoney(report.depositTotals.returned);
  els.reportDepositsUsed.textContent = formatMoney(report.depositTotals.usedByTenant);

  if (!report.propertyRows.length) {
    renderEmpty(els.profitLossTable, 8, "No profit and loss data yet. Generate a monthly rental log first.");
    return;
  }

  els.profitLossTable.innerHTML = report.propertyRows
    .map((row) => `
      <tr>
        <td><strong>${escapeHtml(row.property)}</strong></td>
        <td>${row.totalUnits}</td>
        <td>${row.occupied}</td>
        <td>${formatMoney(row.expectedRent)}</td>
        <td>${formatMoney(row.collectedRent)}</td>
        <td>${formatMoney(row.outstandingRent)}</td>
        <td>${formatMoney(row.expenses)}</td>
        <td><strong class="${row.netProfit < 0 ? "loss-text" : ""}">${formatMoney(row.netProfit)}</strong></td>
      </tr>
    `)
    .join("") + `
      <tr class="total-row">
        <td>All Properties Total</td>
        <td>${report.totals.totalUnits}</td>
        <td>${report.totals.occupied}</td>
        <td>${formatMoney(report.totals.expectedRent)}</td>
        <td>${formatMoney(report.totals.collectedRent)}</td>
        <td>${formatMoney(report.totals.outstandingRent)}</td>
        <td>${formatMoney(report.totals.expenses)}</td>
        <td>${formatMoney(report.totals.netProfit)}</td>
      </tr>
    `;
}

function renderLogs() {
  const month = els.targetMonth.value || getCurrentMonthValue();
  const logs = state.logs
    .filter((log) => log.targetMonth === month)
    .sort((a, b) => a.roomName.localeCompare(b.roomName, undefined, { numeric: true }));

  if (!logs.length) {
    renderEmpty(els.logsTable, 8, "No monthly rows yet. Choose a target month and click Generate month log.");
    return;
  }

  const totals = getLogTotals(logs);
  const rows = logs
    .map((log) => {
      const status = getPaymentStatus(log.rentDue, log.amountPaid);
      return `
        <tr>
          <td>${formatMonth(log.targetMonth)}</td>
          <td>${escapeHtml(log.propertyName || getPropertyByApartmentId(log.roomId)?.name || "—")}</td>
          <td><strong>${escapeHtml(log.roomName)}</strong></td>
          <td>${escapeHtml(log.renterName || "Vacant")}</td>
          <td>${formatMoney(log.rentDue)}</td>
          <td><input class="money-input" data-paid-input="${log.id}" type="number" min="0" step="1" value="${log.amountPaid}"></td>
          <td><span class="badge ${status.toLowerCase()}" data-payment-status>${status}</span></td>
          <td>
            <div class="row-actions">
              <button class="small-btn danger" data-delete="log" data-id="${log.id}">Delete</button>
            </div>
          </td>
        </tr>
      `;
    })
    .join("");

  els.logsTable.innerHTML = rows + `
    <tr class="total-row">
      <td colspan="4">Total</td>
      <td data-log-total-due>${formatMoney(totals.rentDue)}</td>
      <td data-log-total-paid>${formatMoney(totals.amountPaid)}</td>
      <td data-log-total-balance>Balance: ${formatMoney(totals.balance)}</td>
      <td></td>
    </tr>
  `;
}

function renderExpenses() {
  ensureStateShape();
  if (!state.expenses.length) {
    renderEmpty(els.expensesTable, 4, "No expenses yet. Add an apartment expense above.");
    return;
  }

  const sortedExpenses = state.expenses
    .slice()
    .sort((a, b) => new Date(b.date) - new Date(a.date));
  const totalExpenses = sortedExpenses.reduce((sum, expense) => sum + Number(expense.amount || 0), 0);
  const rows = sortedExpenses
    .map((expense) => {
      const apartment = state.apartments.find((item) => item.id === expense.roomId);
      return `
        <tr>
          <td>${formatDate(expense.date)}</td>
          <td>
            <button class="link-button expense-name-button" type="button" data-expense-details="${expense.id}">
              ${escapeHtml(expense.name)}
            </button>
          </td>
          <td>${formatMoney(expense.amount)}</td>
          <td>
            <div class="row-actions">
              <button class="small-btn danger" data-delete="expense" data-id="${expense.id}">Delete</button>
            </div>
          </td>
        </tr>
      `;
    })
    .join("");

  els.expensesTable.innerHTML = rows + `
    <tr class="total-row">
      <td colspan="2">Total Expenses</td>
      <td>${formatMoney(totalExpenses)}</td>
      <td></td>
    </tr>
  `;
}

function renderUtilities() {
  if (!state.expenses.length) {
    renderEmpty(els.utilitiesTable, 4, "No utility or expense records yet.");
    return;
  }

  const utilityRows = state.expenses
    .slice()
    .sort((a, b) => new Date(b.date) - new Date(a.date))
    .map((expense) => {
      const apartment = state.apartments.find((item) => item.id === expense.roomId);
      return `
        <tr>
          <td>${formatDate(expense.date)}</td>
          <td><strong>${apartment ? escapeHtml(getApartmentLabel(apartment)) : "Apartment deleted"}</strong></td>
          <td>${escapeHtml(expense.name)}</td>
          <td>${formatMoney(expense.amount)}</td>
        </tr>
      `;
    })
    .join("");

  els.utilitiesTable.innerHTML = utilityRows;
}

function renderStats() {
  const month = getCurrentMonthValue();
  const currentLogs = state.logs.filter((log) => log.targetMonth === month);
  const currentExpenses = state.expenses.filter((expense) => expense.date && expense.date.slice(0, 7) === month);
  const occupied = state.apartments.filter((apartment) => getTenantForRoom(apartment.id, month)).length;
  const expected = currentLogs.reduce((sum, log) => sum + Number(log.rentDue || 0), 0);
  const collected = currentLogs.reduce((sum, log) => sum + Number(log.amountPaid || 0), 0);
  const expenses = currentExpenses.reduce((sum, expense) => sum + Number(expense.amount || 0), 0);

  els.statUnits.textContent = state.apartments.length;
  els.statOccupied.textContent = occupied;
  els.statExpected.textContent = formatMoney(expected);
  els.statCollected.textContent = formatMoney(collected);
  els.statExpenses.textContent = formatMoney(expenses);
}

function getPropertyById(propertyId) {
  return state.properties.find((property) => property.id === propertyId);
}

function getPropertyByApartmentId(apartmentId) {
  const apartment = state.apartments.find((item) => item.id === apartmentId);
  return apartment ? getPropertyById(apartment.propertyId) : null;
}

function getApartmentLabel(apartment) {
  const property = getPropertyById(apartment.propertyId);
  return property ? `${property.name} — ${apartment.unitNumber}` : apartment.unitNumber;
}

function getClientSummaryRows() {
  return state.tenants
    .slice()
    .sort((a, b) => {
      const apartmentA = state.apartments.find((item) => item.id === a.roomId);
      const apartmentB = state.apartments.find((item) => item.id === b.roomId);
      return `${getPropertyById(apartmentA?.propertyId)?.name || ""}-${apartmentA?.unitNumber || ""}`
        .localeCompare(`${getPropertyById(apartmentB?.propertyId)?.name || ""}-${apartmentB?.unitNumber || ""}`, undefined, { numeric: true });
    })
    .map((tenant) => {
      const apartment = state.apartments.find((item) => item.id === tenant.roomId);
      const property = apartment ? getPropertyById(apartment.propertyId) : null;
      const metrics = getContractMetrics(tenant);

      return {
        tenantRecordId: tenant.id,
        property: property?.name || "Property deleted",
        tenantId: tenant.tenantIdNumber || "—",
        unitNumber: apartment?.unitNumber || "Unit deleted",
        contractSignUp: formatDate(tenant.contractSignUpDate),
        moveInStart: formatDate(tenant.moveInDate),
        end: formatDate(getTenantEndDate(tenant)),
        remainingDays: metrics.remainingDays,
        totalStay: metrics.totalStay,
        totalMonths: metrics.totalMonths,
        totalYears: metrics.totalYears,
        status: getContractStatus(tenant),
        monthlyRent: formatMoney(getTenantMonthlyRent(tenant, apartment)),
        depositAmount: formatMoney(tenant.deposit || 0),
        depositStatus: tenant.depositStatus || "Received",
        tenantName: tenant.name,
        localContact: tenant.localPhone || tenant.phone || "—",
        internationalContact: tenant.internationalPhone || "—",
        nationality: tenant.nationality || "—",
        gender: tenant.gender || "—",
        occupancy: tenant.occupancy || "—",
        email: tenant.email || "—"
      };
    });
}

function getContractMetrics(tenant) {
  const signUp = parseDateValue(tenant.contractSignUpDate || tenant.moveInDate);
  const end = parseDateValue(getTenantEndDate(tenant));
  if (!signUp || !end) {
    return {
      remainingDays: "—",
      totalStay: "—",
      totalMonths: "—",
      totalYears: "—"
    };
  }

  const today = startOfDay(new Date());
  const totalDays = Math.max(0, diffDays(signUp, end));
  const remaining = Math.max(0, diffDays(today, end));
  const totalMonths = totalDays / 30.4375;
  const totalYears = totalDays / 365.25;

  return {
    remainingDays: getContractStatus(tenant) === "Checked out" ? "0" : String(remaining),
    totalStay: `${totalDays} days`,
    totalMonths: totalMonths.toFixed(1),
    totalYears: totalYears.toFixed(2)
  };
}

function getContractStatus(tenant) {
  const end = parseDateValue(getTenantEndDate(tenant));
  if (!end) return "Checked in";
  return end < startOfDay(new Date()) ? "Checked out" : "Checked in";
}

function getTenantEndDate(tenant) {
  return tenant.contractEndDate || tenant.moveOutDate || "";
}

function getTenantMonthlyRent(tenant, apartment = null) {
  return Number(tenant.monthlyRent || apartment?.monthlyRent || 0);
}

function parseDateValue(value) {
  if (!value) return null;
  const date = new Date(`${value}T00:00:00`);
  return Number.isNaN(date.getTime()) ? null : date;
}

function startOfDay(date) {
  return new Date(date.getFullYear(), date.getMonth(), date.getDate());
}

function diffDays(start, end) {
  const millisecondsPerDay = 24 * 60 * 60 * 1000;
  return Math.ceil((startOfDay(end) - startOfDay(start)) / millisecondsPerDay);
}

function renderLocation(location, mapQuery = location) {
  const cleanLocation = String(location || "").trim();
  if (!cleanLocation) return "—";

  return `
    <a class="map-link" href="${escapeHtml(getGoogleMapsUrl(mapQuery || cleanLocation))}" target="_blank" rel="noopener">Open Maps</a>
    <span class="location-text">${escapeHtml(cleanLocation)}</span>
  `;
}

function getGoogleMapsUrl(location) {
  const cleanLocation = String(location || "").trim();
  if (/^https?:\/\//i.test(cleanLocation)) return cleanLocation;
  return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(cleanLocation)}`;
}

function getGoogleMapsEmbedUrl(location) {
  const cleanLocation = String(location || "").trim();
  if (/^https?:\/\//i.test(cleanLocation)) return cleanLocation;
  return `https://maps.google.com/maps?q=${encodeURIComponent(cleanLocation)}&z=16&output=embed`;
}

function showLocationMapPreview(location) {
  const cleanLocation = String(location || "").trim();
  if (!cleanLocation) {
    alert("Please type a location first.");
    els.apartmentLocation.focus();
    return;
  }

  els.mapModalLocation.textContent = cleanLocation;
  els.mapModal.hidden = false;
  els.mapModal.setAttribute("aria-hidden", "false");
  els.locationMapFrame.src = getGoogleMapsEmbedUrl(cleanLocation);
}

function hideLocationMapPreview() {
  els.mapModal.hidden = true;
  els.mapModal.setAttribute("aria-hidden", "true");
  els.locationMapFrame.src = "";
}

function renderLocationSuggestions(query) {
  const cleanQuery = String(query || "").trim().toLowerCase();
  const matches = getLocationMatches(query);

  if (!matches.length) {
    els.locationSuggestions.hidden = true;
    els.locationSuggestions.innerHTML = "";
    return matches;
  }

  els.locationSuggestions.innerHTML = matches
    .map((location) => `
      <button type="button" class="location-suggestion" data-location-option="${escapeHtml(location)}">
        <strong>${highlightMatch(location, cleanQuery)}</strong>
        <span>Use this suggested location</span>
      </button>
    `)
    .join("");
  els.locationSuggestions.hidden = false;
  return matches;
}

function hideLocationSuggestions() {
  els.locationSuggestions.hidden = true;
}

function updateLoginView() {
  const isLoggedIn = localStorage.getItem(AUTH_SESSION_KEY) === "yes";
  document.body.classList.toggle("is-locked", !isLoggedIn);
  els.loginScreen.hidden = isLoggedIn;
  els.loginScreen.setAttribute("aria-hidden", String(isLoggedIn));
  if (!isLoggedIn) {
    setTimeout(() => els.loginPassword.focus(), 50);
  }
}

function getLocationMatches(query) {
  const cleanQuery = String(query || "").trim().toLowerCase();
  const savedLocations = state.apartments
    .map((apartment) => apartment.location)
    .filter(Boolean);
  const uniqueLocations = [...new Set([...savedLocations, ...locationSuggestions])];

  return uniqueLocations
    .filter((location) => {
      if (!cleanQuery) return true;
      return location.toLowerCase().includes(cleanQuery);
    })
    .sort((a, b) => scoreLocationMatch(a, cleanQuery) - scoreLocationMatch(b, cleanQuery))
    .slice(0, 14);
}

function highlightMatch(location, cleanQuery) {
  const safeLocation = escapeHtml(location);
  if (!cleanQuery) return safeLocation;
  const index = location.toLowerCase().indexOf(cleanQuery);
  if (index === -1) return safeLocation;

  const before = escapeHtml(location.slice(0, index));
  const match = escapeHtml(location.slice(index, index + cleanQuery.length));
  const after = escapeHtml(location.slice(index + cleanQuery.length));
  return `${before}<mark>${match}</mark>${after}`;
}

function scoreLocationMatch(location, cleanQuery) {
  if (!cleanQuery) return 0;
  const lowerLocation = location.toLowerCase();
  if (lowerLocation === cleanQuery) return 0;
  if (lowerLocation.startsWith(cleanQuery)) return 1;
  if (lowerLocation.split(/[,\s/]+/).some((word) => word.startsWith(cleanQuery))) return 2;
  return 3;
}

function generateMonthLog(month) {
  state.apartments.forEach((apartment) => {
    const existing = state.logs.find((log) => log.targetMonth === month && log.roomId === apartment.id);
    const tenant = getTenantForRoom(apartment.id, month);
    const property = getPropertyById(apartment.propertyId);
    const row = {
      targetMonth: month,
      roomId: apartment.id,
      propertyId: apartment.propertyId || "",
      propertyName: property?.name || "",
      roomName: apartment.unitNumber,
      renterId: tenant?.id || "",
      renterName: tenant?.name || "",
      rentDue: Number(apartment.monthlyRent || 0)
    };

    if (existing) {
      Object.assign(existing, row);
      return;
    }

    state.logs.push({
      id: crypto.randomUUID(),
      ...row,
      amountPaid: 0
    });
  });
}

function getTenantForRoom(roomId, month) {
  const monthStart = monthValueToDate(month);
  const monthEnd = getMonthEnd(month);
  return state.tenants
    .filter((tenant) => {
      const moveIn = new Date(`${tenant.moveInDate}T00:00:00`);
      const tenantEndDate = getTenantEndDate(tenant);
      const moveOut = tenantEndDate ? new Date(`${tenantEndDate}T23:59:59`) : null;
      return tenant.roomId === roomId && moveIn <= monthEnd && (!moveOut || moveOut >= monthStart);
    })
    .sort((a, b) => new Date(b.moveInDate) - new Date(a.moveInDate))[0];
}

function getPaymentStatus(rentDue, amountPaid) {
  const due = Number(rentDue || 0);
  const paid = Number(amountPaid || 0);
  if (paid <= 0) return "Unpaid";
  if (paid < due) return "Partial";
  return "Paid";
}

function getLogTotals(logs) {
  const rentDue = logs.reduce((sum, log) => sum + Number(log.rentDue || 0), 0);
  const amountPaid = logs.reduce((sum, log) => sum + Number(log.amountPaid || 0), 0);
  return {
    rentDue,
    amountPaid,
    balance: rentDue - amountPaid
  };
}

function getProfitLossReport(month) {
  const logs = state.logs.filter((log) => log.targetMonth === month);
  const expenses = state.expenses.filter((expense) => expense.date && expense.date.slice(0, 7) === month);
  const depositTotals = state.tenants.reduce((totals, tenant) => {
    const amount = Number(tenant.deposit || 0);
    const status = String(tenant.depositStatus || "Received").toLowerCase();
    if (status === "returned") totals.returned += amount;
    else if (status === "used by tenant") totals.usedByTenant += amount;
    else totals.received += amount;
    return totals;
  }, {
    received: 0,
    returned: 0,
    usedByTenant: 0
  });

  const propertyRows = state.properties.map((property) => {
    const apartments = state.apartments.filter((apartment) => apartment.propertyId === property.id);
    const apartmentIds = apartments.map((apartment) => apartment.id);
    const propertyLogs = logs.filter((log) => apartmentIds.includes(log.roomId));
    const propertyExpenses = expenses.filter((expense) => apartmentIds.includes(expense.roomId));
    const expectedRent = propertyLogs.reduce((sum, log) => sum + Number(log.rentDue || 0), 0);
    const collectedRent = propertyLogs.reduce((sum, log) => sum + Number(log.amountPaid || 0), 0);
    const expenseTotal = propertyExpenses.reduce((sum, expense) => sum + Number(expense.amount || 0), 0);

    return {
      property: property.name,
      totalUnits: apartments.length,
      occupied: apartments.filter((apartment) => getTenantForRoom(apartment.id, month)).length,
      expectedRent,
      collectedRent,
      outstandingRent: expectedRent - collectedRent,
      expenses: expenseTotal,
      netProfit: collectedRent - expenseTotal
    };
  });

  const totals = propertyRows.reduce((sum, row) => ({
    totalUnits: sum.totalUnits + row.totalUnits,
    occupied: sum.occupied + row.occupied,
    expectedRent: sum.expectedRent + row.expectedRent,
    collectedRent: sum.collectedRent + row.collectedRent,
    outstandingRent: sum.outstandingRent + row.outstandingRent,
    expenses: sum.expenses + row.expenses,
    netProfit: sum.netProfit + row.netProfit
  }), {
    totalUnits: 0,
    occupied: 0,
    expectedRent: 0,
    collectedRent: 0,
    outstandingRent: 0,
    expenses: 0,
    netProfit: 0
  });

  return {
    month,
    depositTotals,
    propertyRows,
    totals
  };
}

function updatePaymentStatusRow(input, log) {
  const status = getPaymentStatus(log.rentDue, log.amountPaid);
  const badge = input.closest("tr")?.querySelector("[data-payment-status]");
  if (!badge) return;
  badge.textContent = status;
  badge.className = `badge ${status.toLowerCase()}`;
}

function updateMonthlyTotalsRow() {
  const month = els.targetMonth.value || getCurrentMonthValue();
  const logs = state.logs.filter((log) => log.targetMonth === month);
  const totals = getLogTotals(logs);
  const totalDue = els.logsTable.querySelector("[data-log-total-due]");
  const totalPaid = els.logsTable.querySelector("[data-log-total-paid]");
  const totalBalance = els.logsTable.querySelector("[data-log-total-balance]");

  if (totalDue) totalDue.textContent = formatMoney(totals.rentDue);
  if (totalPaid) totalPaid.textContent = formatMoney(totals.amountPaid);
  if (totalBalance) totalBalance.textContent = `Balance: ${formatMoney(totals.balance)}`;
}

function deleteRecord(type, id) {
  if (!confirmPasswordForDelete()) return;

  if (type === "property") {
    const apartmentIds = state.apartments
      .filter((item) => item.propertyId === id)
      .map((item) => item.id);
    state.properties = state.properties.filter((item) => item.id !== id);
    state.apartments = state.apartments.filter((item) => item.propertyId !== id);
    state.tenants = state.tenants.filter((item) => !apartmentIds.includes(item.roomId));
    state.logs = state.logs.filter((item) => !apartmentIds.includes(item.roomId));
    state.expenses = state.expenses.filter((item) => !apartmentIds.includes(item.roomId));
  }

  if (type === "apartment") {
    state.apartments = state.apartments.filter((item) => item.id !== id);
    state.tenants = state.tenants.filter((item) => item.roomId !== id);
    state.logs = state.logs.filter((item) => item.roomId !== id);
    state.expenses = state.expenses.filter((item) => item.roomId !== id);
  }

  if (type === "tenant") {
    state.tenants = state.tenants.filter((item) => item.id !== id);
    state.logs.forEach((log) => {
      if (log.renterId === id) {
        log.renterId = "";
        log.renterName = "";
      }
    });
  }

  if (type === "log") {
    state.logs = state.logs.filter((item) => item.id !== id);
  }

  if (type === "expense") {
    state.expenses = state.expenses.filter((item) => item.id !== id);
  }

  persistAndRender();
}

function confirmPasswordForDelete() {
  const password = prompt("Please enter the login password to delete this record.");
  if (password === null) return false;
  if (password !== DEMO_PASSWORD) {
    alert("Incorrect password. Delete cancelled.");
    return false;
  }
  return true;
}

function searchTypedLocation() {
  const location = els.apartmentLocation.value.trim();
  if (!location) {
    renderLocationSuggestions("");
    els.apartmentLocation.focus();
    return;
  }

  const matches = renderLocationSuggestions(location);
  if (!matches.length) {
    hideLocationSuggestions();
    showLocationMapPreview(location);
  }
  els.apartmentLocation.focus();
}

function downloadCurrentMonthCsv() {
  const month = els.targetMonth.value || getCurrentMonthValue();
  const logs = state.logs.filter((log) => log.targetMonth === month);
  if (!logs.length) {
    alert("Generate the month log first.");
    return;
  }

  const rows = [
    ["Target Month", "Property", "Room", "Renter Name", "Rent Due", "Amount Paid", "Payment Status"],
    ...logs.map((log) => [
      formatMonth(log.targetMonth),
      log.propertyName || getPropertyByApartmentId(log.roomId)?.name || "",
      log.roomName,
      log.renterName || "Vacant",
      log.rentDue,
      log.amountPaid,
      getPaymentStatus(log.rentDue, log.amountPaid)
    ])
  ];

  const csv = rows
    .map((row) => row.map((cell) => `"${String(cell).replaceAll('"', '""')}"`).join(","))
    .join("\n");

  const blob = new Blob([csv], { type: "text/csv;charset=utf-8" });
  const link = document.createElement("a");
  link.href = URL.createObjectURL(blob);
  link.download = `rental-month-log-${month}.csv`;
  link.click();
  URL.revokeObjectURL(link.href);
}

function downloadExcelReport() {
  const sections = getReportSections();
  const html = `
    <html>
      <head>
        <meta charset="UTF-8">
        <style>
          body { font-family: Arial, sans-serif; color: #0e2321; }
          h1 { color: #24543e; }
          h2 { margin-top: 28px; color: #24543e; }
          table { border-collapse: collapse; width: 100%; margin-bottom: 18px; }
          th { background: #e9f3ed; color: #0e2321; }
          th, td { border: 1px solid #ded8cc; padding: 8px; text-align: left; }
          .report-total td { background: #e9f3ed; color: #24543e; font-weight: 700; }
        </style>
      </head>
      <body>
        <h1>Apartment Rental ERP Report</h1>
        <p>Generated: ${escapeHtml(new Date().toLocaleString())}</p>
        ${sections.map(renderReportSection).join("")}
      </body>
    </html>
  `;

  const blob = new Blob([html], { type: "application/vnd.ms-excel;charset=utf-8" });
  downloadBlob(blob, `apartment-rental-erp-report-${getCurrentMonthValue()}.xls`);
}

function openPdfReport() {
  const sections = getReportSections();
  const reportWindow = window.open("", "_blank");
  if (!reportWindow) {
    alert("Please allow popups so the PDF report can open.");
    return;
  }

  reportWindow.document.write(`
    <!DOCTYPE html>
    <html>
      <head>
        <title>Apartment Rental ERP Report</title>
        <style>
          @page { margin: 16mm; }
          body {
            font-family: "Segoe UI", Arial, sans-serif;
            color: #0e2321;
            margin: 0;
          }
          h1 {
            font-family: Georgia, "Times New Roman", serif;
            font-size: 30px;
            margin: 0 0 6px;
          }
          h2 {
            font-size: 18px;
            margin: 24px 0 10px;
            color: #24543e;
          }
          .report-meta {
            color: #667571;
            margin-bottom: 18px;
          }
          table {
            width: 100%;
            border-collapse: collapse;
            margin-bottom: 18px;
            page-break-inside: avoid;
          }
          th, td {
            border: 1px solid #ded8cc;
            padding: 8px;
            text-align: left;
            font-size: 12px;
          }
          th {
            background: #e9f3ed;
          }
          .report-total td {
            background: #e9f3ed;
            color: #24543e;
            font-weight: 700;
          }
          .print-note {
            margin: 18px 0;
            padding: 10px 12px;
            background: #faf7ef;
            border: 1px solid #ded8cc;
            border-radius: 10px;
            color: #667571;
          }
          @media print {
            .print-note { display: none; }
          }
        </style>
      </head>
      <body>
        <h1>Apartment Rental ERP Report</h1>
        <div class="report-meta">Generated: ${escapeHtml(new Date().toLocaleString())}</div>
        <div class="print-note">Choose “Save as PDF” in the print window to download this report as a PDF.</div>
        ${sections.map(renderReportSection).join("")}
        <script>
          window.addEventListener("load", () => setTimeout(() => window.print(), 300));
        <\/script>
      </body>
    </html>
  `);
  reportWindow.document.close();
}

function getReportSections() {
  const month = els.targetMonth.value || getCurrentMonthValue();
  const allLogs = state.logs
    .slice()
    .sort((a, b) => `${a.targetMonth}-${a.roomName}`.localeCompare(`${b.targetMonth}-${b.roomName}`, undefined, { numeric: true }));
  const totalMonthlyRent = state.apartments.reduce((sum, apartment) => sum + Number(apartment.monthlyRent || 0), 0);
  const totalDeposits = state.tenants.reduce((sum, tenant) => sum + Number(tenant.deposit || 0), 0);
  const logTotals = getLogTotals(allLogs);
  const totalExpenses = state.expenses.reduce((sum, expense) => sum + Number(expense.amount || 0), 0);
  const profitLossReport = getProfitLossReport(month);

  return [
    {
      title: "Client Data Summary",
      headers: ["Property", "Tenant ID", "Unit Number", "Contract Sign Up", "Start of Moving In", "End", "Remaining Days", "Total Stay", "Total Month", "Total Years", "Status", "Monthly Rental Amount", "Deposit Amount", "Deposit Status", "Tenant Name", "Local Contact", "International Contact", "Nationality", "Gender", "Occupancy", "Email"],
      rows: getClientSummaryRows().map((row) => [
        row.property,
        row.tenantId,
        row.unitNumber,
        row.contractSignUp,
        row.moveInStart,
        row.end,
        row.remainingDays,
        row.totalStay,
        row.totalMonths,
        row.totalYears,
        row.status,
        row.monthlyRent,
        row.depositAmount,
        row.depositStatus,
        row.tenantName,
        row.localContact,
        row.internationalContact,
        row.nationality,
        row.gender,
        row.occupancy,
        row.email
      ])
    },
    {
      title: `Profit and Loss Summary (${formatMonth(month)})`,
      headers: ["Item", "Amount"],
      rows: [
        ["Expected Rent", formatMoney(profitLossReport.totals.expectedRent)],
        ["Rent Collected", formatMoney(profitLossReport.totals.collectedRent)],
        ["Outstanding Rent", formatMoney(profitLossReport.totals.outstandingRent)],
        ["Total Expenses", formatMoney(profitLossReport.totals.expenses)],
        ["Net Profit / Loss", formatMoney(profitLossReport.totals.netProfit)],
        ["Deposits Received", formatMoney(profitLossReport.depositTotals.received)],
        ["Deposits Returned", formatMoney(profitLossReport.depositTotals.returned)],
        ["Deposits Used by Tenant", formatMoney(profitLossReport.depositTotals.usedByTenant)]
      ]
    },
    {
      title: `Profit and Loss by Property (${formatMonth(month)})`,
      headers: ["Property", "Total Units", "Occupied", "Expected Rent", "Collected Rent", "Outstanding", "Expenses", "Net Profit / Loss"],
      rows: profitLossReport.propertyRows.map((row) => [
        row.property,
        row.totalUnits,
        row.occupied,
        formatMoney(row.expectedRent),
        formatMoney(row.collectedRent),
        formatMoney(row.outstandingRent),
        formatMoney(row.expenses),
        formatMoney(row.netProfit)
      ]),
      totalRows: [["Total", profitLossReport.totals.totalUnits, profitLossReport.totals.occupied, formatMoney(profitLossReport.totals.expectedRent), formatMoney(profitLossReport.totals.collectedRent), formatMoney(profitLossReport.totals.outstandingRent), formatMoney(profitLossReport.totals.expenses), formatMoney(profitLossReport.totals.netProfit)]]
    },
    {
      title: "Property Profile",
      headers: ["Property", "Location", "Total Units", "Occupied Units"],
      rows: state.properties.map((property) => {
        const apartments = state.apartments.filter((apartment) => apartment.propertyId === property.id);
        const occupied = apartments.filter((apartment) => getTenantForRoom(apartment.id, getCurrentMonthValue())).length;
        return [
          property.name,
          property.location || "—",
          apartments.length,
          occupied
        ];
      })
    },
    {
      title: "Unit Profile",
      headers: ["Property", "Unit Number", "Monthly Rent", "Location", "Occupied This Month", "Current Tenant"],
      rows: state.apartments.map((apartment) => {
        const property = getPropertyById(apartment.propertyId);
        const tenant = getTenantForRoom(apartment.id, getCurrentMonthValue());
        return [
          property?.name || "No property",
          apartment.unitNumber,
          formatMoney(apartment.monthlyRent),
          apartment.location || "—",
          tenant ? "Yes" : "No",
          tenant ? tenant.name : "—"
        ];
      }),
      totalRows: [["Total Monthly Rent", "", formatMoney(totalMonthlyRent), "", "", ""]]
    },
    {
      title: "Tenant Profile",
      headers: ["Tenant ID", "Name", "Local Contact", "International Contact", "Email", "Contract Sign Up", "Move-in Start", "Contract End", "Monthly Rent", "Deposit", "Deposit Status", "Current Room", "Nationality", "Gender", "Occupancy", "Status"],
      rows: state.tenants.map((tenant) => {
        const apartment = state.apartments.find((item) => item.id === tenant.roomId);
        return [
          tenant.tenantIdNumber || "—",
          tenant.name,
          tenant.localPhone || tenant.phone || "—",
          tenant.internationalPhone || "—",
          tenant.email || "—",
          formatDate(tenant.contractSignUpDate),
          formatDate(tenant.moveInDate),
          formatDate(getTenantEndDate(tenant)),
          formatMoney(getTenantMonthlyRent(tenant, apartment)),
          formatMoney(tenant.deposit || 0),
          tenant.depositStatus || "Received",
          apartment ? getApartmentLabel(apartment) : "Room deleted",
          tenant.nationality || "—",
          tenant.gender || "—",
          tenant.occupancy || "—",
          getContractStatus(tenant)
        ];
      }),
      totalRows: [["Total Deposit", "", "", "", "", "", "", "", "", formatMoney(totalDeposits), "", "", "", "", "", ""]]
    },
    {
      title: `Monthly Rental Record (${formatMonth(month)} selected)`,
      headers: ["Target Month", "Property", "Room", "Renter Name", "Rent Due", "Amount Paid", "Payment Status"],
      rows: allLogs.map((log) => [
        formatMonth(log.targetMonth),
        log.propertyName || getPropertyByApartmentId(log.roomId)?.name || "—",
        log.roomName,
        log.renterName || "Vacant",
        formatMoney(log.rentDue),
        formatMoney(log.amountPaid),
        getPaymentStatus(log.rentDue, log.amountPaid)
      ]),
      totalRows: [["Total", "", "", "", formatMoney(logTotals.rentDue), formatMoney(logTotals.amountPaid), `Balance: ${formatMoney(logTotals.balance)}`]]
    },
    {
      title: "Apartment Expenses",
      headers: ["Date", "Apartment", "Expense", "Amount"],
      rows: state.expenses
        .slice()
        .sort((a, b) => new Date(b.date) - new Date(a.date))
        .map((expense) => {
          const apartment = state.apartments.find((item) => item.id === expense.roomId);
          return [
            formatDate(expense.date),
            apartment ? getApartmentLabel(apartment) : "Apartment deleted",
            expense.name,
            formatMoney(expense.amount)
          ];
        }),
      totalRows: [["Total Expenses", "", "", formatMoney(totalExpenses)]]
    }
  ];
}

function renderReportSection(section) {
  const rows = section.rows.length
    ? section.rows
    : [["No records yet."]];

  const headers = section.rows.length
    ? section.headers
    : ["Status"];

  return `
    <h2>${escapeHtml(section.title)}</h2>
    <table>
      <thead>
        <tr>${headers.map((header) => `<th>${escapeHtml(header)}</th>`).join("")}</tr>
      </thead>
      <tbody>
        ${rows.map((row) => `<tr>${row.map((cell) => `<td>${escapeHtml(cell)}</td>`).join("")}</tr>`).join("")}
        ${(section.totalRows || []).map((row) => `<tr class="report-total">${row.map((cell) => `<td>${escapeHtml(cell)}</td>`).join("")}</tr>`).join("")}
      </tbody>
    </table>
  `;
}

function downloadBlob(blob, filename) {
  const link = document.createElement("a");
  link.href = URL.createObjectURL(blob);
  link.download = filename;
  link.click();
  URL.revokeObjectURL(link.href);
}

function loadState() {
  const saved = localStorage.getItem(STORAGE_KEY);
  if (saved) {
    try {
      return JSON.parse(saved);
    } catch {
      localStorage.removeItem(STORAGE_KEY);
    }
  }

  const initial = cloneData(demoData);
  return initial;
}

function ensureStateShape() {
  state.properties ||= [];
  state.apartments ||= [];
  state.tenants ||= [];
  state.logs ||= [];
  state.expenses ||= [];

  if (!state.properties.length && state.apartments.length) {
    state.properties.push({
      id: crypto.randomUUID(),
      name: "Main Property",
      location: ""
    });
  }

  if (state.properties.length) {
    const fallbackPropertyId = state.properties[0].id;
    state.apartments.forEach((apartment) => {
      apartment.propertyId ||= fallbackPropertyId;
      apartment.monthlyRent = Number(apartment.monthlyRent || 0);
      apartment.location ||= "";
      apartment.mapQuery ||= apartment.location;
    });
  }

  state.tenants.forEach((tenant, index) => {
    tenant.tenantIdNumber ||= `TEN-${String(index + 1).padStart(4, "0")}`;
    tenant.localPhone ||= tenant.phone || "";
    tenant.phone ||= tenant.localPhone;
    tenant.internationalPhone ||= "";
    tenant.email ||= "";
    tenant.contractSignUpDate ||= tenant.moveInDate || getTodayValue();
    tenant.contractEndDate ||= tenant.moveOutDate || "";
    tenant.moveOutDate ||= tenant.contractEndDate;
    tenant.depositStatus ||= "Received";
    tenant.nationality ||= "";
    tenant.gender ||= "";
    tenant.occupancy ||= "Single";
    const apartment = state.apartments.find((item) => item.id === tenant.roomId);
    tenant.monthlyRent = Number(tenant.monthlyRent || apartment?.monthlyRent || 0);
    if (apartment && tenant.monthlyRent) {
      apartment.monthlyRent = tenant.monthlyRent;
    }
    tenant.deposit = Number(tenant.deposit || 0);
  });

  const maniConfig = [
    { propertyName: "Mani 6", prefix: "SF", count: 11 },
    { propertyName: "Mani 7", prefix: "M7", count: 11 },
    { propertyName: "Mani 8", prefix: "M8", count: 34 }
  ];

  maniConfig.forEach((config) => {
    let property = state.properties.find((item) => item.name === config.propertyName);
    if (!property) {
      property = { id: crypto.randomUUID(), name: config.propertyName, location: "" };
      state.properties.push(property);
    }

    for (let index = 1; index <= config.count; index += 1) {
      const unitNumber = `${config.prefix}-${String(index).padStart(2, "0")}`;
      const existing = state.apartments.find((apartment) => apartment.propertyId === property.id && apartment.unitNumber === unitNumber);
      if (!existing) {
        state.apartments.push({
          id: crypto.randomUUID(),
          propertyId: property.id,
          unitNumber,
          monthlyRent: 0,
          location: property.location || "",
          mapQuery: property.location || ""
        });
      }
    }
  });
}

function persistAndRender() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  render();
}

function cloneData(data) {
  return JSON.parse(JSON.stringify(data));
}

function renderEmpty(target, colspan, message = "No records yet. Add data above to start.") {
  target.innerHTML = `<tr><td colspan="${colspan}" class="empty-state">${message}</td></tr>`;
}

function getCurrentMonthValue() {
  const now = new Date();
  return `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, "0")}`;
}

function getTodayValue() {
  const now = new Date();
  return `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, "0")}-${String(now.getDate()).padStart(2, "0")}`;
}

function monthValueToDate(monthValue) {
  return new Date(`${monthValue}-01T00:00:00`);
}

function getMonthEnd(monthValue) {
  const [year, month] = monthValue.split("-").map(Number);
  return new Date(year, month, 0, 23, 59, 59);
}

function formatMonth(monthValue) {
  return monthFormatter.format(monthValueToDate(monthValue));
}

function formatDate(value) {
  if (!value) return "—";
  return new Intl.DateTimeFormat("en-GB", {
    day: "2-digit",
    month: "short",
    year: "numeric"
  }).format(new Date(`${value}T00:00:00`));
}

function formatMoney(value) {
  return moneyFormatter.format(Number(value || 0));
}

function escapeHtml(value) {
  return String(value ?? "")
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}


