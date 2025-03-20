const companyServices = require('../../../modules/application/company/companyServices');


async function createCompanyController (req, res) {
  try {
    const companyData = req.body;
    const newCompany = await companyServices.createCompany(companyData);
    res.status(201).json(newCompany);
  } catch (error) {
    res.status(500).json({ error: "Error creating company" });
  }
}

async function getAllCompaniesController (req, res){
  try {
    const companies = await companyServices.getAllCompanies();
    res.json(companies);
  } catch (error) {
    res.status(500).json({ error: "Error getting companies 1" });
  }
};


async function getCompanyByIdController (req, res) {
  try {
    const  id = +req.params.id;
    if (isNaN(id)) res.status(400).json({ error: "Id is not a number" });
    const company = await companyServices.getCompanyById(id);
    if (company) {
      res.json(company);
    } else {
      res.status(404).json({ error: "Company no found" });
    }
  } catch (error) {
    res.status(500).json({ error: "Error getting company" });
  }
};


module.exports = {
  createCompanyController,
  getAllCompaniesController,
  getCompanyByIdController,
};