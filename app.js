const STORAGE_KEY = "apartment-erp-demo-v5";

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

const demoData = {
  apartments: [
    { id: crypto.randomUUID(), unitNumber: "Apt 1", monthlyRent: 3500, location: "Dubai Marina, Dubai" },
    { id: crypto.randomUUID(), unitNumber: "Apt 2", monthlyRent: 3200, location: "Jumeirah Lake Towers, Dubai" },
    { id: crypto.randomUUID(), unitNumber: "Apt 3", monthlyRent: 4200, location: "Business Bay, Dubai" },
    { id: crypto.randomUUID(), unitNumber: "Apt 4", monthlyRent: 2800, location: "Al Barsha, Dubai" }
  ],
  tenants: [],
  logs: [],
  expenses: []
};

demoData.tenants = [
  { id: crypto.randomUUID(), name: "Maria Santos", phone: "+971 50 123 4567", moveInDate: "2026-05-10", deposit: 2000, roomId: demoData.apartments[0].id },
  { id: crypto.randomUUID(), name: "Ahmed Khan", phone: "+971 55 222 7788", moveInDate: "2026-06-01", deposit: 1800, roomId: demoData.apartments[1].id },
  { id: crypto.randomUUID(), name: "Liza Cruz", phone: "+971 52 800 1199", moveInDate: "2026-06-15", deposit: 2500, roomId: demoData.apartments[2].id }
];

demoData.expenses = [
  { id: crypto.randomUUID(), roomId: demoData.apartments[0].id, name: "AC filter cleaning", amount: 180, date: "2026-06-08" },
  { id: crypto.randomUUID(), roomId: demoData.apartments[2].id, name: "Plumbing repair", amount: 320, date: "2026-06-18" }
];

let state = loadState();
let selectedMapQuery = "";

const els = {
  currentMonthLabel: document.getElementById("current-month-label"),
  statUnits: document.getElementById("stat-units"),
  statOccupied: document.getElementById("stat-occupied"),
  statExpected: document.getElementById("stat-expected"),
  statCollected: document.getElementById("stat-collected"),
  statExpenses: document.getElementById("stat-expenses"),
  apartmentForm: document.getElementById("apartment-form"),
  tenantForm: document.getElementById("tenant-form"),
  expenseForm: document.getElementById("expense-form"),
  apartmentsTable: document.getElementById("apartments-table"),
  tenantsTable: document.getElementById("tenants-table"),
  logsTable: document.getElementById("logs-table"),
  expensesTable: document.getElementById("expenses-table"),
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
  seedDemo: document.getElementById("seed-demo"),
  resetData: document.getElementById("reset-data"),
  emptyRowTemplate: document.getElementById("empty-row-template")
};

init();

function init() {
  els.targetMonth.value = getCurrentMonthValue();
  document.getElementById("expense-date").value = getTodayValue();
  els.currentMonthLabel.textContent = monthFormatter.format(monthValueToDate(getCurrentMonthValue()));
  bindEvents();
  if (state.apartments.length && !state.logs.length) {
    generateMonthLog(getCurrentMonthValue());
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  }
  render();
}

function bindEvents() {
  els.apartmentForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const unitNumber = document.getElementById("unit-number").value.trim();
    const monthlyRent = Number(document.getElementById("monthly-rent").value || 0);
    const location = document.getElementById("apartment-location").value.trim();

    if (!unitNumber || monthlyRent < 0) return;

    state.apartments.push({
      id: crypto.randomUUID(),
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
    const name = document.getElementById("tenant-name").value.trim();
    const phone = document.getElementById("tenant-phone").value.trim();
    const moveInDate = document.getElementById("move-in-date").value;
    const deposit = Number(document.getElementById("tenant-deposit").value || 0);
    const roomId = document.getElementById("tenant-room").value;

    if (!name || !phone || !moveInDate || deposit < 0 || !roomId) return;

    state.tenants.push({
      id: crypto.randomUUID(),
      name,
      phone,
      moveInDate,
      deposit,
      roomId
    });

    els.tenantForm.reset();
    persistAndRender();
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
    persistAndRender();
  });

  els.generateLog.addEventListener("click", () => {
    generateMonthLog(els.targetMonth.value || getCurrentMonthValue());
    persistAndRender();
  });

  els.downloadLog.addEventListener("click", () => {
    downloadCurrentMonthCsv();
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
    persistAndRender();
  });

  document.addEventListener("click", (event) => {
    const button = event.target.closest("[data-delete]");
    if (!button) return;
    deleteRecord(button.dataset.delete, button.dataset.id);
  });

  els.seedDemo.addEventListener("click", () => {
    state = cloneData(demoData);
    generateMonthLog(getCurrentMonthValue());
    persistAndRender();
  });

  els.resetData.addEventListener("click", () => {
    if (!confirm("Clear all demo data?")) return;
    state = { apartments: [], tenants: [], logs: [], expenses: [] };
    persistAndRender();
  });
}

function render() {
  ensureStateShape();
  renderRoomSelect();
  renderApartments();
  renderTenants();
  renderLogs();
  renderExpenses();
  renderStats();
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
    .map((apartment) => `<option value="${apartment.id}">${escapeHtml(apartment.unitNumber)}</option>`)
    .join("");
  const allRoomOptions = state.apartments
    .map((apartment) => `<option value="${apartment.id}">${escapeHtml(apartment.unitNumber)}</option>`)
    .join("");

  els.tenantRoom.innerHTML = vacantApartments.length
    ? `<option value="">Select vacant room...</option>` + vacantRoomOptions
    : `<option value="">No vacant apartments available</option>`;
  els.tenantRoom.disabled = !vacantApartments.length;
  els.expenseRoom.innerHTML = `<option value="">Select apartment...</option>` + allRoomOptions;
}

function renderApartments() {
  if (!state.apartments.length) {
    renderEmpty(els.apartmentsTable, 6);
    return;
  }

  const month = getCurrentMonthValue();
  els.apartmentsTable.innerHTML = state.apartments
    .map((apartment) => {
      const tenant = getTenantForRoom(apartment.id, month);
      const occupied = Boolean(tenant);
      return `
        <tr>
          <td><strong>${escapeHtml(apartment.unitNumber)}</strong></td>
          <td>${formatMoney(apartment.monthlyRent)}</td>
          <td>${renderLocation(apartment.location, apartment.mapQuery)}</td>
          <td><span class="badge ${occupied ? "yes" : "no"}">${occupied ? "Yes" : "No"}</span></td>
          <td>${tenant ? escapeHtml(tenant.name) : "â€”"}</td>
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
    renderEmpty(els.tenantsTable, 6);
    return;
  }

  els.tenantsTable.innerHTML = state.tenants
    .map((tenant) => {
      const apartment = state.apartments.find((item) => item.id === tenant.roomId);
      return `
        <tr>
          <td><strong>${escapeHtml(tenant.name)}</strong></td>
          <td>${escapeHtml(tenant.phone)}</td>
          <td>${formatDate(tenant.moveInDate)}</td>
          <td>${formatMoney(tenant.deposit || 0)}</td>
          <td>${apartment ? escapeHtml(apartment.unitNumber) : "Room deleted"}</td>
          <td>
            <div class="row-actions">
              <button class="small-btn danger" data-delete="tenant" data-id="${tenant.id}">Delete</button>
            </div>
          </td>
        </tr>
      `;
    })
    .join("");
}

function renderLogs() {
  const month = els.targetMonth.value || getCurrentMonthValue();
  const logs = state.logs
    .filter((log) => log.targetMonth === month)
    .sort((a, b) => a.roomName.localeCompare(b.roomName, undefined, { numeric: true }));

  if (!logs.length) {
    renderEmpty(els.logsTable, 7, "No monthly rows yet. Choose a target month and click Generate month log.");
    return;
  }

  els.logsTable.innerHTML = logs
    .map((log) => {
      const status = getPaymentStatus(log.rentDue, log.amountPaid);
      return `
        <tr>
          <td>${formatMonth(log.targetMonth)}</td>
          <td><strong>${escapeHtml(log.roomName)}</strong></td>
          <td>${escapeHtml(log.renterName || "Vacant")}</td>
          <td>${formatMoney(log.rentDue)}</td>
          <td><input class="money-input" data-paid-input="${log.id}" type="number" min="0" step="1" value="${log.amountPaid}"></td>
          <td><span class="badge ${status.toLowerCase()}">${status}</span></td>
          <td>
            <div class="row-actions">
              <button class="small-btn danger" data-delete="log" data-id="${log.id}">Delete</button>
            </div>
          </td>
        </tr>
      `;
    })
    .join("");
}

function renderExpenses() {
  ensureStateShape();
  if (!state.expenses.length) {
    renderEmpty(els.expensesTable, 5, "No expenses yet. Add an apartment expense above.");
    return;
  }

  els.expensesTable.innerHTML = state.expenses
    .slice()
    .sort((a, b) => new Date(b.date) - new Date(a.date))
    .map((expense) => {
      const apartment = state.apartments.find((item) => item.id === expense.roomId);
      return `
        <tr>
          <td>${formatDate(expense.date)}</td>
          <td><strong>${apartment ? escapeHtml(apartment.unitNumber) : "Apartment deleted"}</strong></td>
          <td>${escapeHtml(expense.name)}</td>
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

function renderLocation(location, mapQuery = location) {
  const cleanLocation = String(location || "").trim();
  if (!cleanLocation) return "â€”";

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
    const row = {
      targetMonth: month,
      roomId: apartment.id,
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
  const monthEnd = getMonthEnd(month);
  return state.tenants
    .filter((tenant) => tenant.roomId === roomId && new Date(`${tenant.moveInDate}T00:00:00`) <= monthEnd)
    .sort((a, b) => new Date(b.moveInDate) - new Date(a.moveInDate))[0];
}

function getPaymentStatus(rentDue, amountPaid) {
  const due = Number(rentDue || 0);
  const paid = Number(amountPaid || 0);
  if (paid <= 0) return "Unpaid";
  if (paid < due) return "Partial";
  return "Paid";
}

function deleteRecord(type, id) {
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
    ["Target Month", "Room", "Renter Name", "Rent Due", "Amount Paid", "Payment Status"],
    ...logs.map((log) => [
      formatMonth(log.targetMonth),
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
  state.apartments ||= [];
  state.tenants ||= [];
  state.logs ||= [];
  state.expenses ||= [];
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
  if (!value) return "â€”";
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


