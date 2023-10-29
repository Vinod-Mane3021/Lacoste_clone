import React from "react";
import LoginForm from "./authentication/logIn/page";
import Header from "@/components/header/Header";
import NavBar from "@/components/navBar/NavBar";
import NavBarMobile from "@/components/navBarMobile/NavBarMobile";
import HomePage from "./home/page";
import ReduxCounter from "@/components/test/ReduxCounter";


const page = () => {
  return (
    <main className="font-fontPoppins bg-white">
      {/* <div className="fixed top-0 w-full z-20 bg-white">
          <Header />
          <div className='fixed w-full z-20 bg-white hidden lg:block'>
            <NavBar />
          </div>
        </div> */}
      <HomePage/>
      
      {/* <NavBarMobile/> */}

     
        {/* <ReduxCounter/> */}
    </main>
  );
};

export default page;
