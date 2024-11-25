import landingImage from "@/assets/landing.webp";
import appDownloadImage from "@/assets/appDownload.webp";
// import SearchBar, { SearchForm } from "@/components/SearchBar";
import { useNavigate } from "react-router-dom";

const HomePage = () => {
  const navigate = useNavigate();

  // const handleSearchSubmit = (searchFormValues) => {
  //   navigate({
  //     pathname: `/search/${searchFormValues.searchQuery}`,
  //   });
  // };

  return (
    <div className="flex flex-col gap-12">
      <div className="flex max-md:w-[92%] mx-auto flex-col gap-5 py-8 -mt-16 text-center bg-white rounded-lg shadow-md md:px-32">
        <h1 className="text-5xl font-bold tracking-tight text-orange-600">
          Tuck into a takeway today
        </h1>
        <span className="text-xl">Food is just a click away!</span>
        {/* <SearchBar
          placeHolder="Search by City or Town"
          onSubmit={handleSearchSubmit}
        /> */}
      </div>
      <div className="grid gap-5 md:grid-cols-2">
        <img src={landingImage} />
        <div className="flex flex-col gap-4 justify-center items-center text-center">
          <span className="text-3xl font-bold tracking-tighter">
            Order takeaway even faster!
          </span>
          <span>
            Download the MernEats App for faster ordering and personalised
            recommendations
          </span>
          <img src={appDownloadImage} />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
