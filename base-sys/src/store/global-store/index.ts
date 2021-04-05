import React from "react";

export const useGlobalStore = () => {
  const [store, set_store] = React.useState({});

  return { store, set_store };
};
