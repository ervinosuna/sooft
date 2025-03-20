const Company = require('../../../infra/database/mongo/models/companyModel');

async function create(companyData) {
  const newCompany = new Company(companyData);
  return await newCompany.save();
}

async function findAll() {
  return await Company.find();
}

async function findById(companyId) {
  return await Company.findOne({ companyId: companyId });
}

async function findByLastMonth(month) {
  return await Company.find({ joinDate: { $gte: month } });
}

module.exports = { 
  create,
  findAll,
  findById,
  findByLastMonth,
};

/* const db = require('../../../infra/database/data');

const getAllCompanies = () => {
  return db.companies;
};

const getCompanyById = (id) => {
  return db.companies.find((company) => company.companyId === id) || null;
};

module.exports = { 
  getAllCompanies,
  getCompanyById,
}; */