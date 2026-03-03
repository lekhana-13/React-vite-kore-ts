import { useState } from "react";
import Sidebar from "./Sidebar";
import Header from "./Header";

interface Props {
  children: React.ReactNode;
}

const Layout = ({ children }: Props) => {
  const [open, setOpen] = useState(false);

  return (
    <div className="app">
      <Sidebar open={open} setOpen={setOpen} />
      <div className="main">
        <Header setOpen={setOpen} />
        {children}
      </div>
    </div>
  );
};

export default Layout;