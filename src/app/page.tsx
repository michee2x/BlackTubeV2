import Image from "next/image";
import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";
import Maincontent from "./components/Maincontent";
import Shorts from "./components/Shorts";
import NavTabs from "./components/NavTabs";
import Search from "./components/Search";

export default function Home() {
  return (
    <>
      {/* Main Content Section */}
      <div className="flex-1 w-full">
        {/* Search */}
        <Search />
        {/* Navigation Tabs */}
        <NavTabs />

        <div
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1625838144804-300f3907c110?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzQ3fHxjb29sJTIwZGV2ZWxvcGVyfGVufDB8MHwwfHx8Mg%3D%3D')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            zIndex: -1,
          }}
          className="w-full hidden text-gray-400 pb-[80px] justify-end flex-col h-[60vh] bg-gray-900 p-8"
        >
          <h1 className=" geistsans text-gray-200 text-3xl">
            Narrow And Optimize <br /> How You Watch Videos
          </h1>
          <p className="text-[12px] geistsans mt-5">
            Explore our community built end to end resources <br /> to help
            level up your development productivity and <br />
            timespan
          </p>
        </div>
        {/* Main Content Section */}
        <Maincontent />

        {/* Shorts Section */}
        {/* <Shorts /> */}
      </div>
    </>
  );
}

//write a nextjs and tailwindcss code for the youtube design above. let it be exact pls. fonts and every thing. except images. let all code be in a single file. And document each section
