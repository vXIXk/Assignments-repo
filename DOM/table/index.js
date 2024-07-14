"use strict";

const BOFORT_COLORS = [
    "var(--calm)",
    "var(--light-air)",
    "var(--light-breeze)",
    "var(--gentle-breeze)",
    "var(--moderate-breeze)",
    "var(--fresh-breeze)",
    "var(--strong-breeze)",
    "var(--near-gale)",
    "var(--gale)",
    "var(--strong-gale)",
    "var(--storm)",
    "var(--violent-storm)",
    "var(--hurricane-force)",
];

const WEATHER_URL =
    "https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&daily=wind_speed_10m_max,wind_gusts_10m_max&timezone=auto&forecast_days=3";

fetch(WEATHER_URL)
    .then(response => response.json())
    .then(data => fillTable(data))
    .catch(err => console.log(err));

const dateCells = document.querySelectorAll(".date-cell");
const speedCells = document.querySelectorAll(".speed-cell");
const gustsCells = document.querySelectorAll(".gusts-cell");
const pointsCells = document.querySelectorAll(".points-cell");

const fillCells = (cells, filling, measurement = "") => {
    cells !== pointsCells
        ? cells.forEach((cell, index) => {
              cell.textContent = filling[index] + measurement;
          })
        : fillPointsCells(filling);
};
const fillPointsCells = speed => {
    pointsCells.forEach((cell, index) => {
        const point = measurePoints(speed[index]);
        cell.textContent = point;
        cell.style.backgroundColor = BOFORT_COLORS[point];
    });
};

function fillTable({
    daily: { time, wind_speed_10m_max: speedMax, wind_gusts_10m_max: gustsMax },
    daily_units: { wind_speed_10m_max: speedKph, wind_gusts_10m_max: gustsKph },
}) {
    fillCells(dateCells, time);
    fillCells(speedCells, speedMax, speedKph);
    fillCells(gustsCells, gustsMax, gustsKph);
    fillCells(pointsCells, speedMax);
}

function measurePoints(speed) {
    switch (true) {
        case speed < 1.1:
            return 0;
        case speed >= 1.1 && speed < 6:
            return 1;
        case speed >= 6 && speed < 12:
            return 2;
        case speed >= 12 && speed < 20:
            return 3;
        case speed >= 20 && speed < 29:
            return 4;
        case speed >= 29 && speed < 39:
            return 5;
        case speed >= 39 && speed < 50:
            return 6;
        case speed >= 50 && speed < 62:
            return 7;
        case speed >= 62 && speed < 75:
            return 8;
        case speed >= 75 && speed < 89:
            return 9;
        case speed >= 89 && speed < 103:
            return 10;
        case speed >= 103 && speed < 118:
            return 11;
        case speed >= 118:
            return 12;
    }
}
