const repositoryFactory = require('../../../infra/repositories/transactionsRepository');


async function create(transferData) {
  return await repositoryFactory.create(transferData);
}


async function findAllByLastMonth(startDate, endDate) {
  return await repositoryFactory.findAllByLastMonth(startDate, endDate);
}

async function findTransferId() {
  return await repositoryFactory.findLatestId();
}

module.exports = {
  create,
  findAllByLastMonth,
  findTransferId,
};