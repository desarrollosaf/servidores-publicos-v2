import { Router } from "express";
import { ReadServidor  } from "../controllers/servidores";

const router = Router();

router.get("/api/servidor/read", ReadServidor)


export default router