const express = require('express');
const { createCompanyController, getAllCompaniesController, getCompanyByIdController, getCompaniesCreatedLastMonth } = require('../../controller/company/companyController');

const router = express.Router();

router.post("/", createCompanyController);
router.get("/", getAllCompaniesController);
router.get("/:id", getCompanyByIdController);
router.get("/last", getCompaniesCreatedLastMonth);

module.exports = router;