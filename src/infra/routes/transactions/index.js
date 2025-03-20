const express = require('express');

const { getCompaniesWithTransfersController, createTransferController } = require('../../controller/transactions/transactionsController');

const router = express.Router();

router.post("/", createTransferController);
router.get("/", getCompaniesWithTransfersController);

module.exports = router;