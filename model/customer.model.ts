import { model, Schema, Model, Document } from "mongoose";

export interface ICustomer extends Document {
  name: string;
  createDate: string;
  estimatedDate: string;
  idCar: string;
}

const CustomerSchema: Schema = new Schema({
  name: { type: String, required: true },
  createDate: { type: Date, default: Date.now },
  estimatedDate: {
    type: Date,
    default: new Date(+new Date() + 7 * 24 * 60 * 60 * 1000),
  },
  idCar: { type: Number, required: true },
});

export const CustomerModel: Model<ICustomer> = model<ICustomer>(
  "customers",
  CustomerSchema
);
