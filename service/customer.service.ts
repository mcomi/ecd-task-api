import { CustomerRepository } from "../repository/customer.repository";

export class CustomerService {
  private customerRepository: CustomerRepository;

  constructor() {
    this.customerRepository = new CustomerRepository();
  }

  async getCustomers() {
    return await this.customerRepository.getCustomers();
  }

  async createCustomer(customer) {
    return await this.customerRepository.createCustomer(customer);
  }
}
