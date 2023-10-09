import Footer from "../components/Footer";
import Header from "../components/Header";

import { Outlet } from "react-router-dom";

export default function Layout({ children }: { children: React.ReactElement }) {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
}
export function LayoutSidebar({ children }: { children: React.ReactElement }) {
  return (
    <>
      <Header />
      <div className="row">
        <aside className="col-4"></aside>
        <main className="col-8">{children}</main>
      </div>

      <Footer />
    </>
  );
}
