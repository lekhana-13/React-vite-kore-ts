import { FaChartBar, FaHome, FaCog } from "react-icons/fa";
import { MdAnalytics } from "react-icons/md";

const Sidebar = () => {
  return (
    <div style={styles.sidebar}>
      <h2 style={{ color: "#00ff88" }}>Dashboard</h2>

      <ul style={styles.menu}>
        <li style={styles.item}>
          <FaHome style={styles.icon} />
          Overview
        </li>

        <li style={styles.item}>
          <MdAnalytics style={styles.icon} />
           Cost Analyzer
        </li>

        <li style={styles.item}>
          <FaChartBar style={styles.icon} />
          K8s Observability
        </li>

        <li style={styles.item}>
          <FaCog style={styles.icon} />
          GPU &n AI Workloads
        </li>
      </ul>
    </div>
  );
};

const styles = {
  sidebar: {
    width: "220px",
    background: "#0b0f14",
    padding: "20px",
    minHeight: "100vh",
  },
  menu: {
    listStyle: "none",
    marginTop: "20px",
    padding: 0,
  },
  item: {
    display: "flex",
    alignItems: "center",
    gap: "10px",
    padding: "12px 0",
    cursor: "pointer",
  },
  icon: {
    color: "#00ff88",
  },
};

export default Sidebar;