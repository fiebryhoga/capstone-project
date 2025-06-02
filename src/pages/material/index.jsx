import React from "react";
import Layout from "../layout";
import MaterialList from "../../components/material/materialCard";

const MaterialsPage = () => {
  return (
    <Layout>
      <div className="w-full -10">
        <MaterialList />
      </div>
    </Layout>
  );
};

export default MaterialsPage;
