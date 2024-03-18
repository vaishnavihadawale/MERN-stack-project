import  express from 'express';
import { getAllUser,signup,login,verifyToken } from '../controllers/user-controller.js';
const router=express.Router();

router.get("/getalluser",verifyToken,getAllUser);
router.post("/signup",signup);
router.post("/login", login);

export default router;
