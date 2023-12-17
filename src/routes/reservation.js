import { Router } from "express";
import reservationController from "../controllers/reservation.js";

const router = Router();

router.post("/", reservationController.createReservation);

export default router;