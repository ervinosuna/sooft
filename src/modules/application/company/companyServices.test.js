const companyService = require('../../application/company/companyServices');
const companyRepository = require('../../domain/company/companyRepository');

jest.mock('../../domain/company/companyRepository');

describe('Company Services Test', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  test('should create a company', async () => {
    const companyData = { businessName: 'Test Company', joinDate: new Date() };
    const mockCompany = { ...companyData, companyId: '123' };
    companyRepository.create.mockResolvedValue(mockCompany);

    const result = await companyService.createCompany(companyData);
    expect(companyRepository.create).toHaveBeenCalledWith(companyData);
    expect(result).toEqual(mockCompany);
  });

  test('should get all companies', async () => {
    const mockCompanies = [{ businessName: 'Company A' }, { businessName: 'Company B' }];
    companyRepository.findAll.mockResolvedValue(mockCompanies);

    const result = await companyService.getAllCompanies();
    expect(companyRepository.findAll).toHaveBeenCalled();
    expect(result).toEqual(mockCompanies);
  });

  test('should get a company by ID', async () => {
    const companyId = '123';
    const mockCompany = { businessName: 'Company A', companyId };
    companyRepository.findById.mockResolvedValue(mockCompany);

    const result = await companyService.getCompanyById(companyId);
    expect(companyRepository.findById).toHaveBeenCalledWith(companyId);
    expect(result).toEqual(mockCompany);
  });

  test('should get companies from the last month', async () => {
    const mockCompanies = [{ businessName: 'Recent Company' }];
    companyRepository.findByLastMonth.mockResolvedValue(mockCompanies);

    const result = await companyService.getCompanyByLastMonth();
    expect(companyRepository.findByLastMonth).toHaveBeenCalled();
    expect(result).toEqual(mockCompanies);
  });
});

