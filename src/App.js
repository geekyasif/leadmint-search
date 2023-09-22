import { useState } from "react";
import TopHeader from "./components/TopHeader";
import InputSearch from "./components/InputSearch";
import BottomHeader from "./components/BottomHeader";
import CardContainer from "./components/CardContainer";
import Loader from "./components/Loader";
import useSearch from "./hook/useSearch";

function App() {
  const [searchText, setSearchText] = useState("");
  const { loading, response } = useSearch(searchText);

  return (
    <div className="bg-gray-100 w-screen h-screen lg:flex lg:justify-center lg:items-center p-4">
      <div className="bg-white h-full lg:m-0 lg:w-[50vw] lg:h-[80vh] rounded shadow-sm overflow-y-auto scrollbar-hide">
        <div className="sticky top-0 bg-white p-4 ">
          <TopHeader />
          <InputSearch searchText={searchText} setSearchText={setSearchText} />
        </div>
        {loading === false && searchText === "" && <BottomHeader />}
        {loading && <Loader />}
        <CardContainer data={response} />
      </div>
    </div>
  );
}

export default App;
