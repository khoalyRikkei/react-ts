import React from "react";
import Header from "../components/Header";

export default function Layout({ children }: { children: React.ReactElement }) {
  return (
    <>
      <Header />
      <div className="container p-2">{children}</div>
    </>
  );
}
