const mongoose = require("mongoose");
const jobsSchema = mongoose.Schema(
  {
    companyname: {
      type: String,
      required: [true, "Please Enter Your CompanyName"],
    },
    position: { type: String, required: [true, "Please Enter Your Position"] },
    contract: { type: String, required: [true, "Please Enter Your Contract"] },

    location: { type: String, required: [true, "Please Enter Your Location"] },
    applied: { type: Boolean, default: false },
  },
  {
    versionKey: false,
  }
);

const JobsModel = mongoose.model("Jobs", jobsSchema);

module.exports = {
  JobsModel,
};
