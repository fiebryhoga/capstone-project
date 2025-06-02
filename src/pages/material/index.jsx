import React from "react";
import Layout from "../layout";
import MaterialList from "../../components/material/materialCard";

const MaterialsPage = () => {
  return (
    <Layout>
      <div className="w-full px-4 sm:px-6 md:px-8 lg:px-16 xl:px-24 py-10">
        <MaterialList />
      </div>
    </Layout>
  );
};

export default MaterialsPage;
