interface Props {
  open: boolean;
  setOpen: (value: boolean) => void;
}

const Sidebar = ({ open, setOpen }: Props) => {
  return (
    <div className={`sidebar ${open ? "active" : ""}`}>
      <h2>Dashboard</h2>

      <ul>
        <li>Overview</li>
        <li>Cost Analyzer</li>
        <li>K8s Observability</li>
        <li>GPU & AI</li>
      </ul>

      {/* Close sidebar when clicking link (mobile) */}
      <div className="overlay" onClick={() => setOpen(false)} />
    </div>
  );
};

export default Sidebar;