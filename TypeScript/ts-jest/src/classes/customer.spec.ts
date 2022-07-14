import { IndividualCustomer, EnterpriseCustomer } from './customer';

const createIndividualCustomer = (
  firstName: string,
  lastName: string,
  cpf: string,
): IndividualCustomer => new IndividualCustomer(firstName, lastName, cpf);

const createEnterpriseCustomer = (
  name: string,
  cnpj: string,
): EnterpriseCustomer => new EnterpriseCustomer(name, cnpj);

describe('Individual Customer', () => {
  afterEach(() => jest.clearAllMocks());

  it('should have firstName, lastName and CPF', () => {
    const sut = createIndividualCustomer('Laura', 'Silva', '123.456.789-10');
    expect(sut.firstName).toBe('Laura');
    expect(sut.lastName).toBe('Silva');
    expect(sut.cpf).toBe('123.456.789-10');
  });

  it('should have methods to get name and idn', () => {
    const sut = createIndividualCustomer('Laura', 'Silva', '123.456.789-10');
    expect(sut.getName()).toBe('Laura Silva');
    expect(sut.getIDN()).toBe('123.456.789-10');
  });
});

describe('Entreprise Customer', () => {
  afterEach(() => jest.clearAllMocks());

  it('should have name and cnpj', () => {
    const sut = createEnterpriseCustomer('Empresa', '123.456.789/0001-11');
    expect(sut).toHaveProperty('name', 'Empresa');
  });

  it('should have methods to get name and idn', () => {
    const sut = createEnterpriseCustomer('Company', '123.456.789-10');
    expect(sut.getName()).toBe('Company');
    expect(sut.getIDN()).toBe('123.456.789-10');
  });
});
