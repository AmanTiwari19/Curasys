import express from "express";
import {
  getAllMessages,
  sendMessage,
} from "../controller/messageController.js";
import { isAdminAuthenticated } from "../middlewares/auth.js";
const router = express.Router();

router.post("/send", sendMessage);
router.get("/getall", isAuthenticatedAndAuthorized("admin"), getAllMessages);

export default router;
