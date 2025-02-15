import React from "react";
import styles from "./MainSection6.module.css";

// Функция для генерации случайного оттенка зеленого
const getRandomGreen = () => {
  const g = Math.floor(Math.random() * 156) + 100; // Зеленый канал: 100-255
  return `#00${g.toString(16).padStart(2, '0')}00`;
};

// Пример данных активности
const activityData = [
  { date: "2023-10-01", count: 2 },
  { date: "2023-10-02", count: 5 },
  { date: "2023-10-03", count: 0 },
  { date: "2023-10-04", count: 3 },
  { date: "2023-10-05", count: 7 },
  { date: "2023-10-06", count: 1 },
  { date: "2023-10-07", count: 4 },
];

// Функция для генерации сетки активности
const generateActivityGrid = () => {
  const grid = [];
  for (let i = 0; i < 52; i++) {
    const week = [];
    for (let j = 0; j < 7; j++) {
      const date = new Date();
      date.setDate(date.getDate() - (52 - i) * 7 + j);
      const dateStr = date.toISOString().split("T")[0];
      const activity = activityData.find(a => a.date === dateStr);
      const randomColor = getRandomGreen(); // Генерация случайного цвета
      week.push(
        <div
          key={`${i}-${j}`}
          className={styles.cell}
          data-count={activity ? activity.count : 0}
          title={`${date.toDateString()}: ${activity ? activity.count : 0} activities`}
        >
          <div
            className={styles.innerFill}
            data-count={activity ? activity.count : 0}
            style={{ backgroundColor: randomColor }} // Применение случайного цвета
          />
        </div>
      );
    }
    grid.push(<div key={i} className={styles.week}>{week}</div>);
  }
  return grid;
};

function MainSection6() {
  return (
    <section className={styles.activitySection}>
      <h2>Development Activity</h2>
      <div className={styles.gridContainer}>
        <div className={styles.grid}>{generateActivityGrid()}</div>
        <div className={styles.monthsLabel}>
          {["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"].map((month, i) => (
            <span key={i}>{month}</span>
          ))}
        </div>
      </div>
      <div className={styles.legend}>
        <span>Less</span>
        {[0, 1, 2, 3, 4].map((level) => (
          <div key={level} className={styles.legendCell} data-level={level} />
        ))}
        <span>More</span>
      </div>
    </section>
  );
}

export default MainSection6;