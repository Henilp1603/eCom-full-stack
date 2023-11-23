import Company from "../models/Company.js";
import asyncHandler from "express-async-handler";
import { validateMongoDbId } from "../utils/validateMongoDbId.js";
import { cloudinaryUploadImg } from "../utils/Cloudinary.js";
import fs from "fs";




const createCompanyDetail = asyncHandler(async (req, res) => {

  

    const uploader = (path) => cloudinaryUploadImg(path, "images");
    const urls = [];
    const files = req.files;

    for (const file of files) {
      const {path} = file;
      const newpath = await uploader(path);
      urls.push(newpath.url);
      fs.unlinkSync(path);
    }
    const images = urls.map((file) => {
      return file;
    });

    const companyData={
        companyName:req.body.companyName,
        AdminName:req.body.AdminName,
        GSTNo:req.body.GSTNo,
        businessAddress:req.body.businessAddress,
        businessPhoneNumber:req.body.businessPhoneNumber,
        adminPhoneNumber:req.body.adminPhoneNumber,
        profileImg:[images[0]],
        companyLogo:[images[1]]
    }

    
    try {
      const newCompany = await Company.create(companyData);
      res.json(newCompany);
    } catch (error) {
      throw new Error(error);
    }
});


export {
    createCompanyDetail
};