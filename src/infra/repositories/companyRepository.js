const Company = require('../database/mongo/models/companyModel');
const repositoryFactory = require('./factory/company/companyRepositoryFactory');

const companyRepository = repositoryFactory(Company);

module.exports = companyRepository;