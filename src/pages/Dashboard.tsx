import Cards from "../components/AreaChartCard";
import Charts from "../components/BarChartCard";;
import DataTable from "../components/DataTable";

const Dashboard = () => {
  return (
    <div className="dashboard">
      <Cards />
      <Charts />
      <DataTable />
    </div>
  );
};

export default Dashboard;