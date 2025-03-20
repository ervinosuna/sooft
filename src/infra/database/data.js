
const database = {
  companies: [
    {
      companyId: 1,
      taxId: "30-12345678-9",
      businessName: "Compañia 1",
      joinDate: "2025-01-01",
    },
    {
      companyId: 2,
      taxId: "30-12345678-8",
      businessName: "Compañia 2",
      joinDate: "2025-03-10",
    },
    {
      companyId: 3,
      taxId: "30-12345678-7",
      businessName: "Compañia 3",
      joinDate: "2025-03-19",
    }
  ],
  transfers: [
    {
      transferId: 1,
      companyId: 1,
      debitAccount: "",
      creditAccount: "",
      transactionDate: "2025-01-01",
      amount: 1000,
      totalAmount: 1000,
    },
    {
      transferId: 2,
      companyId: 1,
      debitAccount: "",
      creditAccount: "",
      transactionDate: "2025-01-02",
      amount: 1000,
      totalAmount: 2000,
    },
    {
      transferId: 3,
      companyId: 1,
      debitAccount: "",
      creditAccount: "",
      transactionDate: "2025-01-03",
      amount: 1000,
      totalAmount: 3000,
    }

  ]
};

module.exports = database;