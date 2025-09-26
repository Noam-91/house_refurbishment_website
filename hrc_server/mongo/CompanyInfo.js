import mongoose from "mongoose";

const companyInfoSchema = new mongoose.Schema({
    tel: {
        salesTel: [String],
        type: mongoose.Schema.Types.Mixed,
        default: {}
    },
    offices: {
        type: mongoose.Schema.Types.Mixed,
        default: {}
    },
    socialMedia: {
        type: mongoose.Schema.Types.Mixed,
        default: {}
    },
    email:{
        contact: String,
        type: mongoose.Schema.Types.Mixed,
        default: {}
    }
});

const CompanyInfo = mongoose.model('CompanyInfo', companyInfoSchema);

export default CompanyInfo;