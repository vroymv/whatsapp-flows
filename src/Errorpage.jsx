import React from "react";
import {useRouteError} from "react-router-dom";
import MetaBar from "./Components/Landing-page/Metabar/Metabar";
import Header from "./Components/Landing-page/Header/Header";
import Footer from "./Components/Footer/Footer";

export default function Errorpage(props) {
  const error = useRouteError();
  console.error(error);

  return (
    <>
      <MetaBar />
      <Header />
      <div style={{ padding: "96px 100px" }}>
        <h1>Oops!</h1>
        <p>Sorry an Unexpected Error Occured</p>
        <p>
            <i>{error.statusText || error.message}</i>
        </p>
      </div>
      <Footer />
    </>
  );
}
