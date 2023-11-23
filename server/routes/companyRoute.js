import express from "express"
import { createCompanyDetail } from "../controllers/companyCtrl.js";
import { uploadPhoto } from "../middlewares/uploadImgaes.js";





const router=express.Router();

router.post("/create-company",uploadPhoto.array("images",10),createCompanyDetail)


export default router
