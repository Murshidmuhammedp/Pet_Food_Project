import express from "express"
import { login, signup, userbyid } from "../controllers/userController.js";
import uploadImage from "../middlewares/uploadImage.js";
const router = express.Router();

router.post("/register", uploadImage, signup);
router.post("/login", login);
router.get('/byid/:id',userbyid);

export default router;