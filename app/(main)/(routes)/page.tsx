"use client";

import About from "@/components/about/page";
import Home from "@/components/home/page";
import Navbar from "@/components/navbar/page";
import { Separator } from "@/components/ui/separator"
import Works from "@/components/works/page";
import { useState } from "react";


const MainPage = () => {
  return (
  <>
  <div className="bg-[#F9F9F9]  ">
<Navbar />
<Home />
<About />
</div>
</>
  )
}

export default MainPage