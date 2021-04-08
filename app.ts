import * as bodyParser from "body-parser";
import * as express from "express";
import * as cors from "cors";
import { CustomerController } from "./controller/customer.controller";
import fs = require("fs");

class App {
  public express: express.Application;
  public customerController: CustomerController;

  constructor() {
    this.express = express();
    this.middleware();
    this.routes();
    this.customerController = new CustomerController();
  }

  // Configure Express middleware.
  private middleware(): void {
    this.express.use(bodyParser.json());
    this.express.use(bodyParser.urlencoded({ extended: false }));
    this.express.use(cors());
  }

  private routes(): void {
    this.express.get("/api/customers", (req, res) => {
      this.customerController.getCustomers().then((data) => res.json(data));
    });

    this.express.post("/api/customer", (req, res) => {
      console.log(req.body);
      this.customerController
        .createCustomer(req.body)
        .then((data) => res.json(data));
    });

    this.express.get("/", (req, res, next) => {
      res.send("Typescript Api");
    });

    // handle undefined routes
    this.express.use("*", (req, res, next) => {
      res.send("Not found");
    });
  }
}

export default new App().express;
