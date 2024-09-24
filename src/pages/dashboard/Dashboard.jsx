import React from "react";
import Header from "../../components/header/Header";
import Sidebar from "../../components/sidebar/Sidebar";

const Dashboard = () => {
  return (
    <div>
      <Header />
      <div style={{ display: "flex" }}>
        <div style={{ flexBasis: "20%", flexShrink: 0 }}>
          <Sidebar />
        </div>
        <div style={{ flexGrow: 1, backgroundColor: "red" }}>main</div>
      </div>
    </div>
  );
};

export default Dashboard;
