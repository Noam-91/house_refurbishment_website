import mongoose from "mongoose";

const companyInfoSchema = new mongoose.Schema({
    info: { type: Object }
});

const CompanyInfo = mongoose.model('CompanyInfo', companyInfoSchema);

export default CompanyInfo;