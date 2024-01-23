import React from "react";
import MarketingPage from "./page";
import Navbar from "./_components/Navbar";

export default function MarketingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="h-full ">
      <Navbar />
      <main className="h-full pt-40">{children}</main>
    </div>
  );
}

/* 
    1:01:41  
    https://www.youtube.com/watch?v=0OaDyjB9Ib8&t=422s
*/
