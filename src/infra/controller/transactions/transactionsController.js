const transferServices = require('../../../modules/application/transactions/transactionsServices');

async function createTransferController (req, res) {
  try {
    const transferData = req.body;
    const newTransfer = await transferServices.createTransfer(transferData);
    res.status(201).json(newTransfer);
  } catch (error) {
    res.status(500).json({ error: "Error creating transfer" });
  }
};

async function getCompaniesWithTransfersController (req, res){
  try {
    const { year, month } = req.query;

    if (!year || !month) {
        return res.status(400).json({ error: "Must provide year and month" });
    }
    
    const companies = await transferServices.getCompaniesWithTransfersByMonth(parseInt(year), parseInt(month));
    res.json(companies);

  } catch (error) {
    res.status(500).json({ error: "Error getting transactions" });
  }
};

module.exports = {
  getCompaniesWithTransfersController,
  createTransferController,
};