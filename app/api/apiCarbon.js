import client from "./client";
import moment from "moment";

const GetCarbonSpending = async() => {
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
    const categories = {};
    let total = 0
    data.forEach((transaction) => {
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
    console.log("total",total)
    //Change to KG
    total = total/1000
    return {chartData,total};
}

const GetBarGraphData = async() => {
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
  const categories = {};
  let total = 0
  data.forEach((transaction) => {
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
  
  return categories
}

export default {
    GetCarbonSpending,
    GetBarGraphData
}