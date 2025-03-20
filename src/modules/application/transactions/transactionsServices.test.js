const transactionsService = require('../../application/transactions/transactionsServices');
const transactionsRepository = require('../../domain/transactions/transactionsRepository');
const companyRepository = require('../../domain/company/companyRepository');

jest.mock('../../domain/transactions/transactionsRepository');
jest.mock('../../domain/company/companyRepository');

describe('Transactions Services Test', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  test('should create a transfer and assign a transferId correctly', async () => {
    const payload = {
      companyId: '123',
      debitAccount: '001-123456789-01',
      creditAccount: '002-654456001-02',
      amount: 1158.50,
    };

    companyRepository.findById.mockResolvedValue({ companyId: '123', businessName: 'Test Company' });
    transactionsRepository.findTransferId.mockResolvedValue({ transferId: 10 });
    transactionsRepository.create.mockResolvedValue({ ...payload, transferId: 11, operationDate: new Date() });

    const result = await transactionsService.createTransfer(payload);

    expect(companyRepository.findById).toHaveBeenCalledWith('123');
    expect(transactionsRepository.findTransferId).toHaveBeenCalled();
    expect(transactionsRepository.create).toHaveBeenCalledWith(expect.objectContaining({ transferId: 11 }));
    expect(result).toHaveProperty('transferId', 11);
  });

  
  test('should throw an error if company does not exist', async () => {
    const payload = {
      companyId: '123',
      debitAccount: '001-123456789-01',
      creditAccount: '002-654456001-02',
      amount: 5000,
    };

    companyRepository.findById.mockResolvedValue(null);

    await expect(transactionsService.createTransfer(payload)).rejects.toThrow("Company not found.");
  });

  test('should get companies with transfers by month', async () => {
    const mockTransfers = [
      { company: { companyId: '123', businessName: 'Company A' } },
      { company: { companyId: '456', businessName: 'Company B' } },
      { company: { companyId: '123', businessName: 'Company A' } },
    ];

    transactionsRepository.findAllByLastMonth.mockResolvedValue(mockTransfers);

    const result = await transactionsService.getCompaniesWithTransfersByMonth(2024, 3);

    expect(transactionsRepository.findAllByLastMonth).toHaveBeenCalled();
    expect(result).toHaveLength(2);
    expect(result).toEqual(
      expect.arrayContaining([
        expect.objectContaining({ companyId: '123', businessName: 'Company A' }),
        expect.objectContaining({ companyId: '456', businessName: 'Company B' }),
      ])
    );
  });

  test.skip('should throw an error if required fields are missing', async () => {
    const payload = { debitAccount: '123456789', creditAccount: '987654321' }; 

    await expect(transactionsService.createTransfer(payload)).rejects.toThrow("All fields are required.");
  });


});