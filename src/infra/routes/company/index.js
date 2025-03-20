const express = require('express');
const { createCompanyController, getAllCompaniesController, getCompanyByIdController, getCompaniesCreatedLastMonth } = require('../../controller/company/companyController');

const router = express.Router();

router.post("/", createCompanyController);
router.get("/", getAllCompaniesController);
router.get("/last/", getCompaniesCreatedLastMonth);
router.get("/:id", getCompanyByIdController);

module.exports = router;