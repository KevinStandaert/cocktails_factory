import React from "react";
import MaterialCard from "../../../components/materialCard";

const MaterialsList = () => {
  const dataUrl = "/materials";

  return (
    <div className="flex min-h-screen flex-col items-center p-12">
      <div className="flex flex-col gap-2 text-center">
        <div className="grid gap-20 md:grid-cols-2 lg:grid-cols-3">
          <MaterialCard dataUrl={dataUrl} />
        </div>
      </div>
    </div>
  );
};

export default MaterialsList;
