const mongoose = require('mongoose');

const companySchema = new mongoose.Schema({
  companyId: {  type: Number, unique: true, required: true },
  taxId: { type: String, required: true },
  businessName: { type: String, required: true },
  joinDate: { type: Date, default: Date.now, required: true }
});

const Company = mongoose.model('Company', companySchema);
module.exports = Company;
