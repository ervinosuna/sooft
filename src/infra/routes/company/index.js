const express = require('express');
const { createCompanyController, getAllCompaniesController, getCompanyByIdController } = require('../../controller/company/companyController');

const router = express.Router();

router.post("/", createCompanyController);
router.get("/", getAllCompaniesController);
router.get("/:id", getCompanyByIdController);

module.exports = router;