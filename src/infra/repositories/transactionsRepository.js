const Transfer = require('../database/mongo/models/transactionModel');
const repositoryFactory = require('./factory/transactions/transactionRepositoryFactory');

const transferRepository = repositoryFactory(Transfer);

module.exports = transferRepository;