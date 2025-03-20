const companyRepository = require('../../domain/company/companyRepository');

async function createCompany(companyData) {
  return await companyRepository.create(companyData);
}

async function getAllCompanies() {
  return await companyRepository.findAll();
}

async function getCompanyById(companyId) {
  return await companyRepository.findById(companyId);
}

async function getCompanyByLastMonth() {
  const lastMonth = new Date();
  lastMonth.setMonth(lastMonth.getMonth() - 1);
  return await companyRepository.findByLastMonth(lastMonth);
}

module.exports = { 
  createCompany, 
  getAllCompanies, 
  getCompanyById,
  getCompanyByLastMonth,
};
