import React from "react";
import MainSection1 from "./mainSection1/MainSection1";
import MainSection2 from "./mainSection2/MainSection2";
import MainSection3 from "./mainSection3/MainSection3";
import MainSection4 from "./mainSection4/MainSection4";
import MainSection5 from "./mainSection5/MainSection5";
import MainSection6 from "./mainSection6/MainSection6";
import MainSection7 from "./mainSection7/MainSection7";

function Main() {
  return (
    <div>
      <div className="main">
        <MainSection1 />
        <MainSection2 />
        <MainSection3 />
        <MainSection4 />
        <MainSection5 />
        <MainSection6 />
        <MainSection7 />
      </div>
    </div>
  );
}

export default Main;
