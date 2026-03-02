const DataTable = () => {
  return (
    <div className="card">
      <h3 className="green">Resource Details</h3>

      <table width="100%" className="resource-table">
        <thead>
          <tr>
            <th>Resource Type</th>
            <th>Owner</th>
            <th style={{ textAlign: "right" }}>Cost</th>
            <th style={{ textAlign: "center" }}>Usage</th>
            <th style={{ textAlign: "center" }}>Change</th>
            <th style={{ textAlign: "center" }}>Status</th>
            <th>AI Suggestion</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>EC2 Instance</td>
            <td>Sai</td>
            <td style={{ textAlign: "right" }}>$42,000</td>
            <td style={{ textAlign: "center" }}>78%</td>
            <td style={{ color: "#22c55e", textAlign: "center" }}>+12%</td>
            <td style={{ textAlign: "center" }}>
              <span className="status healthy">Healthy</span>
            </td>
            <td style={{ color: "#38bdf8" }}>
              Right-size instance to save cost
            </td>
          </tr>

          <tr>
            <td>S3 Bucket</td>
            <td>DevOps</td>
            <td style={{ textAlign: "right" }}>$28,000</td>
            <td style={{ textAlign: "center" }}>64%</td>
            <td style={{ color: "#ef4444", textAlign: "center" }}>-8%</td>
            <td style={{ textAlign: "center" }}>
              <span className="status warning">Warning</span>
            </td>
            <td style={{ color: "#38bdf8" }}>
              Enable lifecycle policy
            </td>
          </tr>

          <tr>
            <td>RDS Database</td>
            <td>Finance</td>
            <td style={{ textAlign: "right" }}>$35,000</td>
            <td style={{ textAlign: "center" }}>88%</td>
            <td style={{ color: "#22c55e", textAlign: "center" }}>+15%</td>
            <td style={{ textAlign: "center" }}>
              <span className="status critical">Critical</span>
            </td>
            <td style={{ color: "#38bdf8" }}>
              Upgrade to reserved instance
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default DataTable;