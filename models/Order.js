const mongoose = require("mongoose");

const OrderSchema = new mongoose.Schema(
  {
    rno: { type: String, required: true, unique: true },
    name: { type: String, required: true },
    slug: { type: String, required: true, unique: true },
    address: { type: String, default: "" },
    phone: { type: String, default: "" },
    phonetwo: { type: String, default: "" },
    dateofpurchase: { type: String, default: "" },
    dateofdelivery: { type: String, default: "" },
    products: { type: Object, required: false, default: {} },
    discount: { type: String, required: false, default: "" },
    totalprice: { type: String, required: false },
    advance: { type: String, required: false },
    balance: { type: String, required: false },
  },
  { timestamps: true }
);

mongoose.models = {};
export default mongoose.model("Order", OrderSchema);
// export default mongoose.model.Order || mongoose.model("Order", OrderSchema);
