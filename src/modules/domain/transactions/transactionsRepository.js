const Transfer = require('../../../infra/database/mongo/models/transactionModel');

async function create(transferData) {
  const newTransfer = new Transfer(transferData);
  return await newTransfer.save();
}


async function findAllByLastMonth(startDate, endDate) {
  const result = await Transfer.aggregate([
    { $match: { operationDate: { $gte: startDate, $lt: endDate } } },
    { $lookup: { 
        from: "companies", 
        localField: "companyId", 
        foreignField: "companyId",
        as: "company" 
      } 
    },
    { 
      $unwind: "$company" 
    }
  ]);
  return result;
}

async function findTransferId() {
  return await Transfer.findOne().sort({ transferId: -1 });
}

module.exports = {
  create,
  findAllByLastMonth,
  findTransferId,
};