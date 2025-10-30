import express from "express";
import {
  addNewAdmin,
  addNewDoctor,
  getAllDoctors,
  getUserDetails,
  login,
  logoutAdmin,
  logoutPatient,
  patientRegister,
} from "../controller/userController.js";
import {
  isAdminAuthenticated,
  isPatientAuthenticated,
} from "../middlewares/auth.js";

const router = express.Router();

router.post("/patient/register", patientRegister);
router.post("/login", login);
router.post("/admin/addnew", isAuthenticatedAndAuthorized("admin"), addNewAdmin);
router.post("/doctor/addnew", isAuthenticatedAndAuthorized("admin"), addNewDoctor);
router.get("/doctors", getAllDoctors);
router.get("/patient/me", isAuthenticatedAndAuthorized("patient"), getUserDetails);
router.get("/admin/me",isAuthenticatedAndAuthorized("admin"), getUserDetails);
router.get("/patient/logout", isAuthenticatedAndAuthorized("patient"), logoutPatient);
router.get("/admin/logout", isAuthenticatedAndAuthorized("admin"), logoutAdmin);

export default router;
