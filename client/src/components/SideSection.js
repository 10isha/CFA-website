import React from "react";
import "../index.css";
// import MaterialIcon, { colorPalette } from "material-icons-react";
import Icon from '@mui/material/Icon';
export default function SideSection() {
  return (
    <section className="text-gray-600 body-font overflow-hidden">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-wrap -m-12">
          <div className="p-12 md:w-1/2 flex flex-col items-start">
            <span className="inline-block py-1 px-2 rounded bg-indigo-50 text-indigo-500 text-xs font-medium tracking-widest">
             Now Live!
            </span>
            <h2 className="sm:text-3xl text-2xl title-font font-medium text-gray-900 mt-4 mb-4">
                A DEEP DIVE INTO DATA SCIENCE
            </h2>
            <div className="flex items-center flex-wrap pb-4 mb-4 border-b-2 border-gray-100 mt-auto w-full"></div>

            <div>
              <h2 class="animate-typing overflow-hidden border-r-4 border-r-white text-3xl text-black font-bold">
                Python
              </h2>
            </div>
            <br />
            <div className="border-l-4 border-#3F51B5 lg:border-l-4 lg:border-#3F51B5 p-1 px-2">
              <div className="flex flex-row text-black  gap-2 font-bold">
              <Icon  sx={{ fontSize: 30 }}>query_builder_icon</Icon>8 Weeks + Projects</div>
              <br />
              <br />
              <div className="flex flex-row gap-2 text-black font-bold ">
              <Icon  sx={{ fontSize: 30 }}> location_on_icon</Icon> Online</div>
              <br />
              <br />
              <div className="flex flex-row gap-2 text-black font-bold ">
              <Icon  sx={{ fontSize: 30 }}>auto_stories_icon</Icon>Prerequisites: None!</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
