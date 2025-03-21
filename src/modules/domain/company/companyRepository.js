const companyRepository = require('../../../infra/repositories/companyRepository');

async function create(companyData) {
  return await companyRepository.create(companyData);
}

async function findAll() {
  return await companyRepository.findAll();
}

async function findById(companyId) {
  return await companyRepository.findById(companyId);
}

async function findByLastMonth(month) {
  return await companyRepository.findByLastMonth(month);
}

module.exports = { 
  create,
  findAll,
  findById,
  findByLastMonth,
};