import { Router } from "express";
import handler from "./handler";

export const router = Router();

router.get('/point', handler.getPoint);
router.post('/point', handler.setPoint);

