import React from "react";
import Layout from "../layout";
import MaterialList from "../../components/material/materialCard"; // Pastikan path sesuai

const MaterialsPage = () => {
  return (
    <Layout>
      <div className="container mx-auto py-10">
        <MaterialList />
      </div>
    </Layout>
  );
};

export default MaterialsPage;