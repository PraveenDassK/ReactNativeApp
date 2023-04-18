import client from "./client";
import moment from "moment";

const GetMastercardData = async() => {
  const data =     
  [
    {
      "transactionId": "ee421c25-f928-4bf6-b884-3600b76b860d",
      "mcc": 3997,
      "cardBrand": "OTH",
      "carbonEmissionInGrams": 48.52,
      "carbonEmissionInOunces": 1.71,
      "category": {
        "mainCategory": "Leisure & Entertainment",
        "subCategory": "Hotels & Vacation",
        "sector": "Hotels, Motels & Resorts",
        "sectorCode": "604"
      }
    },
    {
      "transactionId": "fdc4626c-f51e-4ba6-9728-c79ac1d9aec8",
      "mcc": 5962,
      "carbonEmissionInGrams": 27.98,
      "carbonEmissionInOunces": 0.99,
      "category": {
        "mainCategory": "Shopping",
        "subCategory": "Department Store",
        "sector": "Specialty Retail & Services",
        "sectorCode": "302"
      },
    },
  ]
  return data
}
const GetCarbonSpending = async() => {
    const data = await GetMastercardData()

    const categories = {};
    let total = 0
    data?.forEach((transaction) => {
      total += transaction.carbonEmissionInGrams
      const { carbonEmissionInGrams, category: { mainCategory } } = transaction;
      if (categories[mainCategory]) {
        categories[mainCategory] += carbonEmissionInGrams;
      } else {
        categories[mainCategory] = carbonEmissionInGrams;
      }
    });

    const chartData = [];
    Object.entries(categories).forEach(([category, emissions]) => {
      const chartDatum = {
        x: category,
        y: emissions,
      };
      chartData.push(chartDatum);
    });
    //Change to KG
    total = total/1000
    return {chartData,total};
}

const GetBarGraphData = async() => {
  const data = await GetMastercardData()
  const categories = {};
  data?.forEach((transaction) => {
    const { carbonEmissionInGrams, category: { mainCategory } } = transaction;
    if (categories[mainCategory]) {
      categories[mainCategory] += carbonEmissionInGrams;
    } else {
      categories[mainCategory] = carbonEmissionInGrams;
    }
  });

  const labels = Object.keys(categories); // extract the keys as labels
  const values = Object.values(categories); // extract the values as the data
  const total = values.reduce((acc, curr) => acc + curr, 0); // get the total value

  // calculate the percentage of the total for each value
  const percentages = values.map(value => ((value / total) * 100).toFixed(0) + "%"); 
    
  return {labels,percentages}
}

export default {
    GetCarbonSpending,
    GetBarGraphData
}