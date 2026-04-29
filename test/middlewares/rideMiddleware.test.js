import { checkRideBody,checkUpdateRideBody } from "../../src/middlewares/rideMiddleware";
import jest from "jest-mock";

describe('Middleware checkRideBody', () => {
    let req;
    let res;
    let next;

    // Se ejecuta antes de cada test para limpiar los mocks
    beforeEach(() => {
        req = {
            body: {}
        };
        res = {
            status: jest.fn().mockReturnThis(), // Permite encadenar .status().json()
            json: jest.fn().mockReturnThis(),
            send: jest.fn().mockReturnThis()
        };
        next = jest.fn();
    });

    test('Debe llamar a next() si el body es válido', () => {
        req.body = {
            categoryId: 1,
            name: "Dragon Khan",
            creationDate: "26/09/2025",
            durationSeconds: 120,
            minAge: 12,
            minHeightCm: 140,
            status: "open"
        };

        checkRideBody(req, res, next);

        // Verificamos que next fue llamado y no se envió respuesta de error
        expect(next).toHaveBeenCalled();
        expect(res.status).not.toHaveBeenCalled();
        expect(req.ride).toMatchObject(req.body)
    });

    test('Debe devolver 400 si falta el campo "name"', () => {
        req.body = {
            categoryId: 1,
            // name falta
            creationDate: "26/09/2025",
            durationSeconds: 123
        };

        checkRideBody(req, res, next);

        expect(res.status).toHaveBeenCalledWith(400);
        expect(next).not.toHaveBeenCalled();
    });

    test('Debe devolver 400 si "durationSeconds" no es un número', () => {
        req.body = {
            categoryId: 1,
            name: "Test",
            durationSeconds: "mucho tiempo" // Tipo incorrecto
        };

        checkRideBody(req, res, next);

        expect(res.status).toHaveBeenCalledWith(400);
        expect(res.json).toHaveBeenCalledWith(
            expect.objectContaining({ error: expect.any(String) })
        );
    });

    test('Debe devolver 400 si el "status" no es un valor permitido', () => {
        req.body = {
            name: "Test",
            status: "invalid_status"
        };

        checkRideBody(req, res, next);

        expect(res.status).toHaveBeenCalledWith(400);
    });
});