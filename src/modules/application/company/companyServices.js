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

module.exports = { createCompany, getAllCompanies, getCompanyById };