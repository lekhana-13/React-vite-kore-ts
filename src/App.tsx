import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import BarChartCard from "./components/BarChartCard";
import AreaChartCard from "./components/AreaChartCard";
import DataTable from "./components/DataTable";
import "./index.css";

const App: React.FC = () => {
  return (
    <div className="app-container">
      <Sidebar />
      <div className="content">
        <Header />
        <div className="grid">
          <BarChartCard />
          <AreaChartCard />
        </div>
        <DataTable />
      </div>
    </div>
  );
};

export default App;
        
