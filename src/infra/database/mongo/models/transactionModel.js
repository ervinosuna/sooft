const mongoose = require('mongoose');

const transferSchema = new mongoose.Schema({
  transferId: { type: Number, unique: true, required: true },
  companyId: { type: mongoose.Schema.Types.Number, ref: "Company", required: true },
  debitAccount: { type: String, required: true },
  creditAccount: { type: String, required: true },
  amount: { type: Number, required: true },
  operationDate: { type: Date, default: Date.now },
  totalAmount: { type: Number, required: true }
});

const Transfer = mongoose.model("Transfer", transferSchema);
module.exports = Transfer;