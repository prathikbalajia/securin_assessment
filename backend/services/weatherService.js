const fs = require("fs");
const csv = require("csv-parser");
let weatherData = [];
function loadCSV() {
  return new Promise((resolve, reject) => {
    weatherData = [];
    fs.createReadStream("data/delhi_weather.csv")
      .pipe(csv())
      .on("data", (row) => {
        weatherData.push({
          date: row.date,
          temperature: parseFloat(row.temperature),
          humidity: parseFloat(row.humidity),
          pressure: parseFloat(row.pressure),
          condition: row.condition
        });
      })
      .on("end", () => {
        resolve(weatherData);
      })
      .on("error", reject);
  });
}

function getAllData(){
  return weatherData;
}

module.exports = {loadCSV,getAllData };