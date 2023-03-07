const { Router } = require("express");
const { JobsModel } = require("../model/JobsModel");

const router = Router();

router.get("/getjobs", async (req, res) => {
  if (req.query == "companyname") {
    var jobs = await JobsModel.find({ companyname: req.query.companyname });
    res.send(jobs);
  } else if (req.query == "contract") {
    var jobs = await JobsModel.find({ contract: req.query.contract });
    res.send(jobs);
  } else {
    var jobs = await JobsModel.find();
    res.send(jobs);
  }
});

router.post("/addjob", async (req, res) => {
  const payload = req.body;
  try {
    const job = new JobsModel(payload);
    await job.save();
    res.send("New job Added");
  } catch (err) {
    console.log({ ERR: err });
  }
});

router.delete("/:id", async (req, res) => {
  const id = req.params.id;

  try {
    await JobsModel.findByIdAndDelete({ _id: id });
    res.send(`job with id ${id} deleted`);
  } catch (err) {
    console.log({ ERR: err });
  }
});

router.patch("/:id", async (req, res) => {
  const id = req.params.id;
  const payload = req.body;
  try {
    await JobsModel.findByIdAndUpdate({ _id: id }, payload);
    res.send(`job with id ${id} Updated`);
  } catch (err) {
    console.log({ ERR: err });
  }
});

module.exports = { router };
