import { connect, disconnect } from "../config/db.config";
import { CustomerModel } from "../model/customer.model";

export class CustomerRepository {
  constructor() {
    connect();
  }

  async getCustomers() {
    const customers = await CustomerModel.find({});
    return customers;
  }

  async createCustomer(customer) {
    let data = {};
    try {
      data = await CustomerModel.create(customer);
      console.log(data);
    } catch (err) {
      console.log("Error::" + err);
    }
    return data;
  }
}
