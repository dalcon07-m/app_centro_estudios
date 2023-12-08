import Express from "express";
import { saveSchool } from "../controllers/school_controler.js";
const router = Express.Router();
router.post("/school", saveSchool);
export { router };
