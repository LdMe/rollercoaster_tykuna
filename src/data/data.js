// 1. RIDE_CATEGORY
const rideCategories = [
  { id: 1, name: "Montañas Rusas" },
  { id: 2, name: "Atracciones Acuáticas" },
  { id: 3, name: "Infantiles / Familiares" },
  { id: 4, name: "Simuladores 4D" }
];

// 2. RIDE (Incluyendo categoryId implícito, minHeightCm y el enum status)
const rides = [
  { id: 1, categoryId: 1, name: "Titan", creationDate: "2012-05-20", durationSeconds: 140, minAge: 14, minHeightCm: 140, status: "open" },
  { id: 2, categoryId: 2, name: "Furia de Poseidón", creationDate: "2018-07-01", durationSeconds: 300, minAge: 8, minHeightCm: 120, status: "closed" }, // Cerrada por mantenimiento
  { id: 3, categoryId: 3, name: "El Bosque Encantado", creationDate: "2005-04-15", durationSeconds: 240, minAge: 0, minHeightCm: 0, status: "open" },
  { id: 4, categoryId: 1, name: "Nebula", creationDate: "2026-01-10", durationSeconds: 95, minAge: 16, minHeightCm: 150, status: "testing" }, // En fase de pruebas
  { id: 5, categoryId: 4, name: "Viaje a Marte", creationDate: "2020-11-30", durationSeconds: 180, minAge: 10, minHeightCm: 130, status: "open" }
];

// 3. USER (Ahora con dateOfBirth en lugar de age)
const users = [
  { id: 1, name: "Elena Mateo", dateOfBirth: "1992-08-14", email: "elena.m@example.com", phone: "+34611222333" },
  { id: 2, name: "Hugo Silva", dateOfBirth: "2012-03-25", email: "hugo.silva@example.com" }, // Sin teléfono
  { id: 3, name: "Roberto Gómez", dateOfBirth: "1985-11-02", email: "roberto.g@example.com", phone: "+34666777888" },
  { id: 4, name: "Lucía Navarro", dateOfBirth: "1998-05-19", email: "lucia.n@example.com", phone: "+34699888777" }
];

// 4. TICKET_TYPE (Precios representados en céntimos para evitar errores de coma flotante)
const ticketTypes = [
  { id: 1, name: "Entrada General Adulto", cost: 4990 }, // 49.90€
  { id: 2, name: "Entrada General Reducida (Niño/Senior)", cost: 3500 }, // 35.00€
  { id: 3, name: "Pase VIP Front-of-Line", cost: 12000 } // 120.00€
];

// 5. TICKET (Incluyendo userId y ticketTypeId para cerrar las relaciones)
const tickets = [
  { id: 1001, userId: 1, ticketTypeId: 1, boughtAt: "2026-04-12T08:30:00Z" },
  { id: 1002, userId: 1, ticketTypeId: 3, boughtAt: "2026-04-12T08:35:00Z" }, // Elena también compró pase VIP
  { id: 1003, userId: 2, ticketTypeId: 2, boughtAt: "2026-04-13T16:20:00Z" },
  { id: 1004, userId: 3, ticketTypeId: 1, boughtAt: "2026-04-14T09:00:00Z" },
  { id: 1005, userId: 4, ticketTypeId: 1, boughtAt: "2026-04-15T10:15:00Z" }
];

export {
    rideCategories,
    rides,
    users,
    ticketTypes,
    tickets
}