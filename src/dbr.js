import DBR from "dynamsoft-javascript-barcode";
DBR.organizationID = "100856235";

DBR.productKeys = "t0068NQAAABsqzk0TWhlE8/ZjKzO4vRPJduV42j4I9gG89vOZz3kWCQ4JmFLpeiA5jE0ZWULN8Bj3f1+Bl/p9MYjto9+mu2U=";

//2 Make sure to set the key before you call any other APIs under Dynamsoft.DBR           
console.log(DBR)
DBR.engineResourcePath = "https://cdn.jsdelivr.net/npm/dynamsoft-javascript-barcode@8.8.3/dist/";
export default DBR;