const express = require("express");
const app = express();
const axios = require("axios");
const { Agent } = require("https");
const data = require("./data.json");
require("dotenv").config();

app.use(express.json());
app.listen(process.env.PORT, () => {
    console.log("Server is running on port"+process.env.PORT);
})
app.post("/filterReportData", async (req, res) => {
  const { filterdata, requst } = req.body;

  const url = process.env.BASE_URL + requst;
  console.log(url);
  async function reqData() {
    await axios
      .post(url, filterdata, {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        responseType: "stream",
        httpsAgent: new Agent({ rejectUnauthorized: false }),
      })
      .then(function (response) {
        let data = "";
        response.data.on("data", (chunk) => {
          data += chunk.toString();
        });
        response.data.on("end", () => {
          const stringResponse = JSON.stringify(data);
          if (stringResponse.match("html") || data === undefined) {
            res.status(400).json({
              message: "server response is unknown",
            });
          } else {
            const jsonData = JSON.parse(data);
            res.status(200).send(jsonData);
          }
        });
      });
  }
  reqData();
});
app.post("/reportPrefData", async (req, res) => {
  const { filterdata, requst } = req.body;

  const url = process.env.BASE_URL + requst;
  if (filterdata.menuId === "239") {
   reqMenu()
  } else{
    reqData()
  }
  async function reqMenu(){
  return res.status(200).send(data[0].data);
}

  async function reqData() {
    await axios.post(url, filterdata, {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        responseType: "stream",
        httpsAgent: new Agent({ rejectUnauthorized: false }),
      })
      .then(function (response) {
        let data = "";
        response.data.on("data", (chunk) => {
          data += chunk.toString();
        });
        response.data.on("end", () => {
          const stringResponse = JSON.stringify(data);
          if (stringResponse.match("html") || data === undefined) {
            res.status(400).json({
              message: "server request problem",
            });
          } else {
            const jsonData = JSON.parse(data);
            res.status(200).send(jsonData);
          }
        });
      });
  }
});
app.post("/autoCompleteData", async (req, res) => {
    const { filterdata, requst } = req.body;
  
    const url = process.env.BASE_URL + requst;
    console.log(url);
    async function reqData() {
      await axios
        .post(url, filterdata, {
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          responseType: "stream",
          httpsAgent: new Agent({ rejectUnauthorized: false }),
        })
        .then(function (response) {
          let data = "";
          response.data.on("data", (chunk) => {
            data += chunk.toString();
          });
          response.data.on("end", () => {
            const stringResponse = JSON.stringify(data);
            if (stringResponse.match("html") || data === undefined) {
              res.status(400).json({
                message: "server response is unknown",
              });
            } else {
              const jsonData = JSON.parse(data);
              res.status(200).send(jsonData);
            }
          });
        });
    }
    reqData();
  });
  app.post("/generateReports", async (req, res) => {
    const { filterdata, requst } = req.body;
  
    const url = process.env.R_B_U + requst+`?${filterdata}`
    console.log(url);
    async function reqData() {
      await axios
        .get(url, {
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          responseType: "stream",
          httpsAgent: new Agent({ rejectUnauthorized: false }),
        })
        .then(function (response) {
          let data = "";
          response.data.on("data", (chunk) => {
            data += chunk.toString();
          });
          response.data.on("end", () => {
            const stringResponse = JSON.stringify(data);
            if (stringResponse.match("html") || data === undefined) {
              res.status(400).json({
                message: "server response is unknown",
              });
            } else {
              const jsonData = JSON.parse(data);
              res.status(200).send(jsonData);
            }
          });
        });
    }
    reqData();
  });
  app.post("/reportsGenerate", async (req, res) => {
    const { filterdata, requst } = req.body;
  
    const url = process.env.BASE_URL + requst;
    console.log(url);
    async function reqData() {
      await axios
        .post(url, filterdata, {
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          responseType: "stream",
          httpsAgent: new Agent({ rejectUnauthorized: false }),
        })
        .then(function (response) {
          let data = "";
          response.data.on("data", (chunk) => {
            data += chunk.toString();
          });
          response.data.on("end", () => {
            const stringResponse = JSON.stringify(data);
            if (stringResponse.match("html") || data === undefined) {
              res.status(400).json({
                message: "server response is unknown",
              });
            } else {
              const jsonData = JSON.parse(data);
              res.status(200).send(jsonData);
            }
          });
        });
    }
    reqData();
  });
  app.post("/vhCount", async (req, res) => {
    const { filterdata, requst } = req.body;
  
    const url = process.env.C_B_U + requst;
    console.log(url);
    async function reqData() {
      await axios
        .post(url, filterdata, {
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          responseType: "stream",
          httpsAgent: new Agent({ rejectUnauthorized: false }),
        })
        .then(function (response) {
          let data = "";
          response.data.on("data", (chunk) => {
            data += chunk.toString();
          });
          response.data.on("end", () => {
            const stringResponse = JSON.stringify(data);
            if (stringResponse.match("html") || data === undefined) {
              res.status(400).json({
                message: "server response is unknown",
              });
            } else {
              const jsonData = JSON.parse(data);
              res.status(200).send(jsonData);
            }
          });
        });
    }
    reqData();
  });
  app.post("/vhDetailsList", async (req, res) => {
    const { filterdata, requst } = req.body;
  
    const url = process.env.C_B_U + requst;
    console.log(url);
    async function reqData() {
      await axios
        .post(url, filterdata, {
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          responseType: "stream",
          httpsAgent: new Agent({ rejectUnauthorized: false }),
        })
        .then(function (response) {
          let data = "";
          response.data.on("data", (chunk) => {
            data += chunk.toString();
          });
          response.data.on("end", () => {
            const stringResponse = JSON.stringify(data);
            if (stringResponse.match("html") || data === undefined) {
              res.status(400).json({
                message: "server response is unknown",
              });
            } else {
              const jsonData = JSON.parse(data);
              res.status(200).send(jsonData);
            }
          });
        });
    }
    reqData();
  });
// export the app for vercel serverless functions
module.exports = app;
