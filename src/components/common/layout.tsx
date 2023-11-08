import { Outlet } from "react-router-dom";
import Header from "./header";

export default function Layout() {
  return (
    <div className="root-layout">
      <Header />

      <main>
        <Outlet />
      </main>
    </div>
  );
}
