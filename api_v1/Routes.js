import { Router } from "express";
import { getStores } from "./Controller.js";

const router = new Router();

router.get("/stores", getStores);

export default router;
