import React from "react";
import styles from "./MainSection6.module.css";

// Пример данных активности (можно заменить на реальные данные)
const activityData = [
  { date: "2023-10-01", count: 2 },
  { date: "2023-10-02", count: 5 },
  { date: "2023-10-03", count: 0 },
  { date: "2023-10-04", count: 3 },
  { date: "2023-10-05", count: 7 },
  { date: "2023-10-06", count: 1 },
  { date: "2023-10-07", count: 4 },
  // Добавьте данные для других дней
];

// Функция для генерации сетки активности
const generateActivityGrid = () => {
  const grid = [];
  for (let i = 0; i < 52; i++) {
    // 52 колонки (недели в году)
    const week = [];
    for (let j = 0; j < 7; j++) {
      // 7 строк (дни недели)
      const date = new Date();
      date.setDate(date.getDate() - (52 - i) * 7 + j);
      const activity = activityData.find(
        (a) => a.date === date.toISOString().split("T")[0]
      );
      week.push(
        <div
          key={`${i}-${j}`}
          className={styles.cell}
          data-count={activity ? activity.count : 0}
          title={`${date.toDateString()}: ${activity ? activity.count : 0} activities`}
        >
          {/* Внутренняя раскраска */}
          <div className={styles.innerFill} data-count={activity ? activity.count : 0} />
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