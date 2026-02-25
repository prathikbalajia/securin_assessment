# 🌦 Delhi Weather API Project

A full-stack Weather Data API project built using **Node.js, Express, and React**.
This project processes nearly two decades of Delhi weather data stored in a CSV file and provides API endpoints to filter and analyze weather information.

---

## Project Overview

This application:

* Reads and processes a large CSV dataset
* Provides REST API endpoints for weather queries
* Calculates statistical insights (Min, Max, Median temperature)
* Displays data using a React frontend
* Follows modular and scalable architecture

---

## 🏗 Tech Stack

### Backend

* Node.js
* Express.js
* CSV Parser
* CORS
* Nodemon

### Frontend

* React (Create React App)
* Axios

---

## Project Structure

```
weather-project/
│
├── backend/
│   ├── data/
│   │   └── delhi_weather.csv
│   ├── controllers/
│   ├── routes/
│   ├── services/
│   ├── app.js
│   └── package.json
│
└── frontend/
    ├── src/
    │   ├── components/
    │   ├── App.js
    │   └── api.js
    └── package.json
```

---

## Features

1Retrieve Weather by Specific Date

Returns:

* Temperature
* Humidity
* Pressure
* Weather Condition

Endpoint:

```
GET /api/weather/date/:date
```

Example:

```
/api/weather/date/2010-05-12
```

---

### 2️ Retrieve Weather by Month (Across 20 Years)

Endpoint:

```
GET /api/weather/month/:month
```

Example:

```
/api/weather/month/07
```

---

### 3️ Monthly Temperature Statistics by Year

Returns:

* Minimum Temperature
* Maximum Temperature
