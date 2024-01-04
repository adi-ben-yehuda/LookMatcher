import * as React from "react";

import ToolBar from "../components/toolbar/ToolBar";
import SearchByPhoto from "../components/searchByPhoto/SearchByPhoto";

const SearchPhoto = () => {
  return (
    <>
      <SearchByPhoto />
      <ToolBar />
    </>
  );
};

export default SearchPhoto;
