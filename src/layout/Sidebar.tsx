interface Props {
  open: boolean;
  setOpen: (value: boolean) => void;
}

const Sidebar = ({ open, setOpen }: Props) => {
  return (
    <>
      {/* Sidebar */}
      <div className={`sidebar ${open ? "active" : ""}`}>
        <h2>Dashboard</h2>

        <ul>
          <li onClick={() => setOpen(false)}>Overview</li>
          <li onClick={() => setOpen(false)}>Cost Analyzer</li>
          <li onClick={() => setOpen(false)}>GPU & AI</li>
        </ul>
      </div>

      {/* Overlay (IMPORTANT) */}
      {open && <div className="overlay" onClick={() => setOpen(false)} />}
    </>
  );
};

export default Sidebar;