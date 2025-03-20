const transactionsRepository = require('../../domain/transactions/transactionsRepository');
const companyRepository = require('../../domain/company/companyRepository');

async function createTransfer(payload) {

  const { companyId, debitAccount, creditAccount, amount, totalAmount } = payload;

  if (!companyId || !debitAccount || !creditAccount || !amount) {
    throw new Error("All fields are required.");
  }

  const companyExists = await companyRepository.findById(companyId);
  if (!companyExists) {
    throw new Error("Company not found.");
  }
  const lastTransfer = await transactionsRepository.findTransferId();
  const nextTransferId = lastTransfer ? lastTransfer.transferId + 1 : 1;
  payload.transferId = payload.transferId || nextTransferId;

  return await transactionsRepository.create({
    ...payload,
    operationDate: new Date(),
  });
}

async function getCompaniesWithTransfersByMonth(year, month) {
  const startDate = new Date(year, month - 1, 1);
  const endDate = new Date(year, month, 1);

  const transfers = await transactionsRepository.findAllByLastMonth(startDate, endDate);
  const uniqueCompanies = [...new Map(transfers.map(t => [t.company.companyId, t.company])).values()];

  return uniqueCompanies;
}

module.exports = {
  createTransfer,
  getCompaniesWithTransfersByMonth,
};
