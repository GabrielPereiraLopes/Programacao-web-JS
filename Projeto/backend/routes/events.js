import express from "express";
import { createEvent, getEvents, deleteEvent, updateEvent } from "../controller/events.js";

const router = express.Router();

router.post("/create", createEvent);
router.get("/", getEvents);
router.delete("/:id", deleteEvent);
router.put("/:id", updateEvent);

export default router;
