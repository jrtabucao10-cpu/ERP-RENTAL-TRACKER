const STORAGE_KEY = "apartment-erp-demo-v3";

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
  "Dubai Marina, Dubai",
  "Jumeirah Lake Towers, Dubai",
  "Business Bay, Dubai",
  "Al Barsha, Dubai",
  "Downtown Dubai, Dubai",
  "Jumeirah Village Circle, Dubai",
  "Jumeirah Village Triangle, Dubai",
  "Dubai Silicon Oasis, Dubai",
  "International City, Dubai",
  "Deira, Dubai",
  "Bur Dubai, Dubai",
  "Karama, Dubai",
  "Al Nahda, Dubai",
  "Mirdif, Dubai",
  "Dubai Sports City, Dubai",
  "Dubai Investment Park, Dubai",
  "Discovery Gardens, Dubai",
  "Jebel Ali, Dubai",
  "Palm Jumeirah, Dubai",
  "Dubai Hills Estate, Dubai",
  "Meydan, Dubai",
  "Arjan, Dubai",
  "Motor City, Dubai",
  "Al Qusais, Dubai",
  "Sharjah, United Arab Emirates",
  "Al Nahda, Sharjah",
  "Al Majaz, Sharjah",
  "Al Khan, Sharjah",
  "Muwaileh, Sharjah",
  "Abu Dhabi, United Arab Emirates",
  "Al Reem Island, Abu Dhabi",
  "Khalifa City, Abu Dhabi",
  "Ajman, United Arab Emirates"
];

const demoData = {
  apartments: [
    { id: crypto.randomUUID(), unitNumber: "Apt 1", monthlyRent: 3500, location: "Dubai Marina, Dubai" },
    { id: crypto.randomUUID(), unitNumber: "Apt 2", monthlyRent: 3200, location: "Jumeirah Lake Towers, Dubai" },
    { id: crypto.randomUUID(), unitNumber: "Apt 3", monthlyRent: 4200, location: "Business Bay, Dubai" },
    { id: crypto.randomUUID(), unitNumber: "Apt 4", monthlyRent: 2800, location: "Al Barsha, Dubai" }
  ],
  tenants: [],
  logs: []
};

demoData.tenants = [
  { id: crypto.randomUUID(), name: "Maria Santos", phone: "+971 50 123 4567", moveInDate: "2026-05-10", roomId: demoData.apartments[0].id },
  { id: crypto.randomUUID(), name: "Ahmed Khan", phone: "+971 55 222 7788", moveInDate: "2026-06-01", roomId: demoData.apartments[1].id },
  { id: crypto.randomUUID(), name: "Liza Cruz", phone: "+971 52 800 1199", moveInDate: "2026-06-15", roomId: demoData.apartments[2].id }
];

let state = loadState();

const els = {
  currentMonthLabel: document.getElementById("current-month-label"),
  statUnits: document.getElementById("stat-units"),
  statOccupied: document.getElementById("stat-occupied"),
  statExpected: document.getElementById("stat-expected"),
  statCollected: document.getElementById("stat-collected"),
  apartmentForm: document.getElementById("apartment-form"),
  tenantForm: document.getElementById("tenant-form"),
  apartmentsTable: document.getElementById("apartments-table"),
  tenantsTable: document.getElementById("tenants-table"),
  logsTable: document.getElementById("logs-table"),
  tenantRoom: document.getElementById("tenant-room"),
  targetMonth: document.getElementById("target-month"),
  searchLocation: document.getElementById("search-location"),
  apartmentLocation: document.getElementById("apartment-location"),
  locationSuggestions: document.getElementById("location-suggestions"),
  generateLog: document.getElementById("generate-log"),
  downloadLog: document.getElementById("download-log"),
  seedDemo: document.getElementById("seed-demo"),
  resetData: document.getElementById("reset-data"),
  emptyRowTemplate: document.getElementById("empty-row-template")
};

init();

function init() {
  els.targetMonth.value = getCurrentMonthValue();
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
      location
    });

    els.apartmentForm.reset();
    persistAndRender();
  });

  els.tenantForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const name = document.getElementById("tenant-name").value.trim();
    const phone = document.getElementById("tenant-phone").value.trim();
    const moveInDate = document.getElementById("move-in-date").value;
    const roomId = document.getElementById("tenant-room").value;

    if (!name || !phone || !moveInDate || !roomId) return;

    state.tenants.push({
      id: crypto.randomUUID(),
      name,
      phone,
      moveInDate,
      roomId
    });

    els.tenantForm.reset();
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
    renderLocationSuggestions(els.apartmentLocation.value);
  });

  els.apartmentLocation.addEventListener("focus", () => {
    renderLocationSuggestions(els.apartmentLocation.value);
  });

  els.apartmentLocation.addEventListener("keydown", (event) => {
    if (event.key === "Escape") hideLocationSuggestions();
  });

  els.locationSuggestions.addEventListener("click", (event) => {
    const option = event.target.closest("[data-location-option]");
    if (!option) return;
    els.apartmentLocation.value = option.dataset.locationOption;
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
    state = { apartments: [], tenants: [], logs: [] };
    persistAndRender();
  });
}

function render() {
  renderRoomSelect();
  renderApartments();
  renderTenants();
  renderLogs();
  renderStats();
}

function renderRoomSelect() {
  els.tenantRoom.innerHTML = "";
  if (!state.apartments.length) {
    els.tenantRoom.innerHTML = `<option value="">Add an apartment first</option>`;
    return;
  }

  els.tenantRoom.innerHTML = `<option value="">Select room...</option>` + state.apartments
    .map((apartment) => `<option value="${apartment.id}">${escapeHtml(apartment.unitNumber)}</option>`)
    .join("");
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
          <td>${renderLocation(apartment.location)}</td>
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
    renderEmpty(els.tenantsTable, 5);
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

function renderStats() {
  const month = getCurrentMonthValue();
  const currentLogs = state.logs.filter((log) => log.targetMonth === month);
  const occupied = state.apartments.filter((apartment) => getTenantForRoom(apartment.id, month)).length;
  const expected = currentLogs.reduce((sum, log) => sum + Number(log.rentDue || 0), 0);
  const collected = currentLogs.reduce((sum, log) => sum + Number(log.amountPaid || 0), 0);

  els.statUnits.textContent = state.apartments.length;
  els.statOccupied.textContent = occupied;
  els.statExpected.textContent = formatMoney(expected);
  els.statCollected.textContent = formatMoney(collected);
}

function renderLocation(location) {
  const cleanLocation = String(location || "").trim();
  if (!cleanLocation) return "—";

  return `
    <a class="map-link" href="${escapeHtml(getGoogleMapsUrl(cleanLocation))}" target="_blank" rel="noopener">Open Maps</a>
    <span class="location-text">${escapeHtml(cleanLocation)}</span>
  `;
}

function getGoogleMapsUrl(location) {
  const cleanLocation = String(location || "").trim();
  if (/^https?:\/\//i.test(cleanLocation)) return cleanLocation;
  return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(cleanLocation)}`;
}

function renderLocationSuggestions(query) {
  const cleanQuery = String(query || "").trim().toLowerCase();
  const savedLocations = state.apartments
    .map((apartment) => apartment.location)
    .filter(Boolean);
  const uniqueLocations = [...new Set([...savedLocations, ...locationSuggestions])];

  const matches = uniqueLocations
    .filter((location) => {
      if (!cleanQuery) return true;
      return location.toLowerCase().includes(cleanQuery);
    })
    .slice(0, 8);

  if (!matches.length) {
    els.locationSuggestions.hidden = true;
    els.locationSuggestions.innerHTML = "";
    return;
  }

  els.locationSuggestions.innerHTML = matches
    .map((location) => `
      <button type="button" class="location-suggestion" data-location-option="${escapeHtml(location)}">
        <strong>${highlightMatch(location, cleanQuery)}</strong>
        <span>Use this location for Google Maps</span>
      </button>
    `)
    .join("");
  els.locationSuggestions.hidden = false;
}

function hideLocationSuggestions() {
  els.locationSuggestions.hidden = true;
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

  persistAndRender();
}

function searchTypedLocation() {
  const location = els.apartmentLocation.value.trim();
  if (!location) {
    alert("Please type a location or paste a Google Maps link first.");
    els.apartmentLocation.focus();
    return;
  }

  window.open(getGoogleMapsUrl(location), "_blank", "noopener");
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
