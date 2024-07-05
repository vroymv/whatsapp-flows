import Header from "./Landing-page/Header/Header";
import MetaBar from "./Landing-page/Metabar/Metabar";
import Featuredposts from "./Featured-posts/Featuredposts/Featuredposts";
import Blogarchives from "./Blog-Archives/Blogarchives";
import Footer from "./Footer/Footer";
import { Outlet, useLoaderData } from "react-router-dom";
import Blogs from "../Blogs";


export function loader(){
  return(
    Blogs
  )
}


export function Home(props) {
  const Blogs = useLoaderData();
  return (
    <>
      <MetaBar />
      <Header />
      <div style={{ padding: "96px 100px" }}>
        <Featuredposts />
        <Blogarchives Blog={Blogs} />
        
      </div>
      
      <Footer />
    </>
  );
}
