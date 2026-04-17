BEGIN;

-- --------------------------------------------------------
-- 1. Insertamos 5 Usuarios
-- --------------------------------------------------------
INSERT INTO public.users (id, name, "dateOfBirth", email, password, phone, "createdAt", "updatedAt") VALUES
(1, 'Juan Pérez', '1990-05-15', 'juan.perez@example.com', 'hashed_pass_123', '+34600111222', NOW(), NOW()),
(2, 'María Gómez', '1985-08-22', 'maria.gomez@example.com', 'hashed_pass_456', '+34600333444', NOW(), NOW()),
(3, 'Carlos López', '2005-11-10', 'carlos.lopez@example.com', 'hashed_pass_789', '+34600555666', NOW(), NOW()),
(4, 'Ana Martínez', '1998-02-28', 'ana.martinez@example.com', 'hashed_pass_321', '+34600777888', NOW(), NOW()),
(5, 'Luis Fernández', '2010-07-07', 'luis.fernandez@example.com', 'hashed_pass_654', '+34600999000', NOW(), NOW());

-- --------------------------------------------------------
-- 2. Insertamos 5 Categorías de Atracciones
-- --------------------------------------------------------
INSERT INTO public."rideCategories" (id, name, "createdAt", "updatedAt") VALUES
(1, 'Montaña Rusa', NOW(), NOW()),
(2, 'Acuática', NOW(), NOW()),
(3, 'Familiar', NOW(), NOW()),
(4, 'Infantil', NOW(), NOW()),
(5, 'Extrema', NOW(), NOW());

-- --------------------------------------------------------
-- 3. Insertamos 3 Tipos de Tickets
-- --------------------------------------------------------
INSERT INTO public."ticketTypes" (id, name, cost, "createdAt", "updatedAt") VALUES
(1, 'Pase General', 50, NOW(), NOW()),
(2, 'Pase VIP (Fast Pass)', 100, NOW(), NOW()),
(3, 'Pase Infantil', 30, NOW(), NOW());

-- --------------------------------------------------------
-- 4. Insertamos 10 Atracciones
-- --------------------------------------------------------
INSERT INTO public.rides (id, "categoryId", name, "creationDate", "durationSeconds", "minAge", "minHeight", "createdAt", "updatedAt") VALUES
(1, 1, 'Dragon Khan', '1995-05-01', 120, 12, 140, NOW(), NOW()),
(2, 2, 'Splash Mountain', '2000-06-15', 300, 8, 120, NOW(), NOW()),
(3, 3, 'Las Tazas Locas', '2005-04-10', 180, 0, 0, NOW(), NOW()),
(4, 4, 'Carrusel Mágico', '2010-03-20', 240, 0, 0, NOW(), NOW()),
(5, 5, 'Caída Libre 100m', '2015-08-05', 60, 14, 150, NOW(), NOW()),
(6, 1, 'Shambhala', '2012-05-12', 180, 12, 140, NOW(), NOW()),
(7, 2, 'Río Loco', '2008-07-22', 400, 6, 110, NOW(), NOW()),
(8, 3, 'La Gran Noria', '1998-02-14', 600, 0, 0, NOW(), NOW()),
(9, 4, 'El Tren de la Mina', '2003-09-30', 250, 4, 100, NOW(), NOW()),
(10, 5, 'Vuelo del Cóndor', '2018-05-20', 90, 16, 150, NOW(), NOW());

-- --------------------------------------------------------
-- 5. Insertamos 10 Tickets (Asignados a usuarios)
-- --------------------------------------------------------
INSERT INTO public.tickets (id, "userId", "ticketTypeId", "boughtAt", "validityDate", "createdAt", "updatedAt") VALUES
(1, 1, 1, NOW(), CURRENT_DATE + INTERVAL '1 month', NOW(), NOW()),
(2, 2, 2, NOW(), CURRENT_DATE + INTERVAL '1 month', NOW(), NOW()),
(3, 3, 1, NOW(), CURRENT_DATE + INTERVAL '2 weeks', NOW(), NOW()),
(4, 4, 3, NOW(), CURRENT_DATE + INTERVAL '1 month', NOW(), NOW()),
(5, 5, 3, NOW(), CURRENT_DATE + INTERVAL '3 days', NOW(), NOW()),
(6, 1, 2, NOW(), CURRENT_DATE + INTERVAL '2 months', NOW(), NOW()),
(7, 2, 1, NOW(), CURRENT_DATE + INTERVAL '1 week', NOW(), NOW()),
(8, 3, 2, NOW(), CURRENT_DATE + INTERVAL '1 month', NOW(), NOW()),
(9, 4, 1, NOW(), CURRENT_DATE + INTERVAL '5 days', NOW(), NOW()),
(10, 5, 2, NOW(), CURRENT_DATE + INTERVAL '10 days', NOW(), NOW());

-- --------------------------------------------------------
-- 6. Insertamos +20 Relaciones (Uso de tickets en atracciones)
-- --------------------------------------------------------
INSERT INTO public.ticket_uses_ride ("ticketId", "rideId", "createdAt", "updatedAt") VALUES
-- Ticket 1 (Usuario 1, Pase General) usó 3 atracciones
(1, 1, NOW(), NOW()),
(1, 3, NOW(), NOW()),
(1, 8, NOW(), NOW()),
-- Ticket 2 (Usuario 2, VIP) aprovechó para subir a 5 atracciones
(2, 1, NOW(), NOW()),
(2, 5, NOW(), NOW()),
(2, 6, NOW(), NOW()),
(2, 7, NOW(), NOW()),
(2, 10, NOW(), NOW()),
-- Ticket 3 (Usuario 3, General)
(3, 2, NOW(), NOW()),
(3, 7, NOW(), NOW()),
-- Ticket 4 y 5 (Pases Infantiles)
(4, 3, NOW(), NOW()),
(4, 4, NOW(), NOW()),
(4, 9, NOW(), NOW()),
(5, 4, NOW(), NOW()),
(5, 8, NOW(), NOW()),
-- Ticket 6 (Usuario 1, volvió con pase VIP)
(6, 1, NOW(), NOW()),
(6, 5, NOW(), NOW()),
(6, 6, NOW(), NOW()),
-- Otros usos aleatorios
(7, 2, NOW(), NOW()),
(7, 3, NOW(), NOW()),
(8, 6, NOW(), NOW()),
(9, 7, NOW(), NOW()),
(10, 10, NOW(), NOW());

-- --------------------------------------------------------
-- 7. Ajuste de secuencias (Opcional pero Recomendado)
-- Al insertar IDs manualmente (1, 2, 3...), las secuencias de PostgreSQL
-- se quedan en 1. Esto ajusta las secuencias al valor máximo insertado
-- para que los próximos INSERTs sin ID no den error de colisión.
-- --------------------------------------------------------
SELECT setval(pg_get_serial_sequence('public.users', 'id'), COALESCE(MAX(id), 1)) FROM public.users;
SELECT setval(pg_get_serial_sequence('public."rideCategories"', 'id'), COALESCE(MAX(id), 1)) FROM public."rideCategories";
SELECT setval(pg_get_serial_sequence('public."ticketTypes"', 'id'), COALESCE(MAX(id), 1)) FROM public."ticketTypes";
SELECT setval(pg_get_serial_sequence('public.rides', 'id'), COALESCE(MAX(id), 1)) FROM public.rides;
SELECT setval(pg_get_serial_sequence('public.tickets', 'id'), COALESCE(MAX(id), 1)) FROM public.tickets;

COMMIT;