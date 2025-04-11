import { Router } from "express";
import { getMovimientos, ReadServidor  } from "../controllers/servidores";

const router = Router();

router.get("/api/servidor/read", ReadServidor)
router.get("/api/servidor/movimientos/:id", getMovimientos)


export default router