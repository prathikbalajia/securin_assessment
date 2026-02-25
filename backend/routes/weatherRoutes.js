const express = require("express");
const router = express.Router();
const { loadCSV, getAllData } = require("../services/weatherService");

loadCSV();


router.get("/date/:date", (req, res) => {
  const date = req.params.date;
  const data = getAllData().filter(d => d.date === date);
  res.json(data);
});

router.get("/month/:month", (req, res) => {
  const month = req.params.month; // format: 01, 02, etc

  const data = getAllData().filter(d => {
    const dMonth = d.date.split("-")[1];
    return dMonth === month;
  });

  res.json(data);
});


router.get("/year/:year", (req, res) => {
  const year = req.params.year;

  const filtered = getAllData().filter(d => 
    d.date.startsWith(year)
  );

  const monthly = {};

  filtered.forEach(d => {
    const month = d.date.split("-")[1];

    if (!monthly[month]) monthly[month] = [];

    monthly[month].push(d.temperature);
  });

  const result = {};

  Object.keys(monthly).forEach(month => {
    const temps = monthly[month].sort((a,b)=>a-b);
    const min = temps[0];
    const max = temps[temps.length - 1];
    const median = temps[Math.floor(temps.length / 2)];
    result[month]={ min, max, median };
  });

  res.json(result);
});

module.exports = router;