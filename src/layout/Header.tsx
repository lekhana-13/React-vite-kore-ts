interface Props {
  setOpen: (value: boolean) => void;
}

const Header = ({ setOpen }: Props) => {
  return (
    <div className="header">
      <button className="menu-btn" onClick={() => setOpen(true)}>
        ☰
      </button>
      <h3>Cost Analyzer</h3>
    </div>
  );
};

export default Header;