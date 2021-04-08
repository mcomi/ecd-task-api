import { CustomerService } from "../service/customer.service";

export class CustomerController {
  private customerService: CustomerService;

  constructor() {
    this.customerService = new CustomerService();
  }

  async getCustomers() {
    return await this.customerService.getCustomers();
  }

  async createCustomer(customer) {
    return await this.customerService.createCustomer(customer);
  }
}
