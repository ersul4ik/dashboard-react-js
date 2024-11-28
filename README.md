# React Map Dashboard

This is a small React application built for learning purposes. The app displays a map with markers showing coordinates fetched from an API, representing driver locations.

![alt text](public/screenshot.png)

## Features

- 🌍 Interactive map using React Leaflet.
- 📍 Dynamic markers based on API data.
- 🛠 Designed as a practice project to learn React and map integration.


## Tech Stack

- Frontend: React, React Leaflet
- Map Tiles: OpenStreetMap (free and open-source)
- Backend (API): Example FastAPI server (not included in this repo)

## Getting Started

Prerequisites
- Node.js and npm installed.
- Basic knowledge of React.

## Example Data

The app expects the following format for marker data from the API:

```json
[
  { "lat": 51.505, "lng": -0.09, "created": "2024-09-23T14:16:37.453199" },
  { "lat": 51.515, "lng": -0.1, "label": "2024-09-23T14:16:37.453199" }
]
```

