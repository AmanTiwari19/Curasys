import express from "express";
import {
  deleteAppointment,
  getAllAppointments,
  postAppointment,
  updateAppointmentStatus,
} from "../controller/appointmentController.js";
import {
  isAdminAuthenticated,
  isPatientAuthenticated,
} from "../middlewares/auth.js";

const router = express.Router();

router.post("/post", isAuthenticatedAndAuthorized("patient"), postAppointment);
router.get("/getall", isAuthenticatedAndAuthorized("admin"), getAllAppointments);
router.put("/update/:id", isAuthenticatedAndAuthorized("admin"), updateAppointmentStatus);
router.delete("/delete/:id",isAuthenticatedAndAuthorized("admin"), deleteAppointment);

export default router;
