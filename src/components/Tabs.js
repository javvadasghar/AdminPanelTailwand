import React, { useState } from "react";
import App2SideMenu from "./App2SideMenu";
import SideMenu from "./SideMenu";

const AppTabs = () => {
  const [activeTab, setActiveTab] = useState(1);
  const [openTab, setOpenTab] = useState(1);

  const handleTabClick = (tabIndex) => {
    setActiveTab(tabIndex);
  };

  return (
    <div className="flex w-full">
      <App2SideMenu />
      <div className="container mx-auto" style={{ background: "#d3d3d345" }}>
        <div className="flex flex-col">
          <ul className="flex bg-slate-200" style={{ padding: "1rem" }}>
            <li>
              <a
                style={{ width: "20rem", textAlign: "center" }}
                href="#"
                onClick={() => setOpenTab(1)}
                className={` ${
                  openTab === 1 ? "bg-slate-600 py-3 px-4" : ""
                } inline-block px-4 py-3 text-gray-600 bg-white rounded shadow`}
              >
                Tabs 1
              </a>
            </li>
            <li>
              <a
                href="#"
                style={{ width: "20rem", textAlign: "center" }}
                onClick={() => setOpenTab(2)}
                className={` ${
                  openTab === 2 ? "bg-slate-600 py-3 px-4" : ""
                } inline-block px-4 py-3 text-gray-600 bg-white rounded shadow`}
              >
                Tabs 2
              </a>
            </li>
          </ul>
          <div className="p-3 mt-6">
            <div className={openTab === 1 ? "block" : "hidden"}>
              <form className="p-12 bg-white shadow-lg mx-80 hover:shadow-2xl rounded-lg">
                <div className="md:flex md:items-center mb-6 justify-center">
                  <div>
                    <label
                      className="block text-gray-500 w-36 font-bold md:text-left mb-1 md:mb-0 pr-4"
                      htmlFor="inline-full-name"
                    >
                      MSISDN
                    </label>
                  </div>
                  <div>
                    <input
                      className=" appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                      id="inline-full-name"
                      type="text"
                      //   value=""
                    />
                  </div>
                </div>
                <div className="md:flex md:items-center mb-6 justify-center">
                  <div>
                    <label
                      className="block text-gray-500 w-36 font-bold md:text-left mb-1 md:mb-0 pr-4"
                      htmlFor="inline-password"
                    >
                      Subscription-id
                    </label>
                  </div>
                  <div>
                    <input
                      className=" appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                      id="inline-password"
                      type="text"
                    />
                  </div>
                </div>
                <div className="md:flex md:items-center mb-6 justify-center">
                  <div>
                    <label
                      className="block text-gray-500 w-36 font-bold md:text-left mb-1 md:mb-0 pr-4"
                      htmlFor="inline-password"
                    >
                      CSR-ID
                    </label>
                  </div>
                  <div>
                    <input
                      className=" appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                      id="inline-password"
                      type="text"
                    />
                  </div>
                </div>
                <div className="md:flex md:items-center mb-6 justify-center">
                  <div>
                    <label
                      className="block text-gray-500 w-36 font-bold md:text-left mb-1 md:mb-0 pr-4"
                      htmlFor="inline-password"
                    >
                      Reason
                    </label>
                  </div>
                  <div>
                    <input
                      className=" appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                      id="inline-password"
                      type="text"
                    />
                  </div>
                </div>
                <div className="md:flex md:items-center mb-6 justify-center">
                  <div>
                    <label
                      className="block text-gray-500 w-36 font-bold md:text-left mb-1 md:mb-0 pr-4"
                      htmlFor="inline-password"
                    ></label>
                  </div>
                  <div>
                    <button
                      className="shadow bg-slate-600 mr-2 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
                      type="button"
                    >
                      Submit
                    </button>
                  </div>
                  <div>
                    <button
                      className="shadow bg-white-800 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-black font-bold py-2 px-4 rounded"
                      type="button"
                    >
                      Cancel
                    </button>
                  </div>
                </div>
                {/* <div className="md:flex md:items-center mb-6">
          <div ></div>
          <label className="md:w-2/3 block text-gray-500 font-bold">
            <input className="mr-2 leading-tight" type="checkbox" />
            <span className="text-sm">Send me your newsletter!</span>
          </label>
        </div> */}
                {/* <div className="md:flex md:items-center">
          <div></div>
          <div>
            <button
              className="shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
              type="button"
            >
              Submit
            </button>
          </div>
        </div> */}
              </form>
            </div>
            <div className={openTab === 2 ? "block" : "hidden"}>
              React JS with Tailwind CSS Tab 2 Content show
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
// <div className="flex w-full">
//   <App2SideMenu />
//   <div className="mx-auto w-full" style={{ background: "#97f8fb24" }}>
//     <div className="border-b border-gray-200 bg-violet-200">
//       <nav className="-mb-px flex" aria-label="Tabs">
//         <a
//           onClick={() => handleTabClick(1)}
//           href="#"
//           className={`${
//             activeTab === 1
//               ? "border-indigo-500 text-indigo-600"
//               : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
//           } w-1/4 py-4 px-1 text-center border-b-2 font-medium text-sm`}
//         >
//           Tab 1
//         </a>
//         <a
//           onClick={() => handleTabClick(2)}
//           href="#"
//           className={`${
//             activeTab === 2
//               ? "border-indigo-500 text-indigo-600"
//               : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
//           } w-1/4 py-4 px-1 text-center border-b-2 font-medium text-sm`}
//         >
//           Tab 2
//         </a>
//       </nav>
//     </div>
//     <div className="py-8">
//       {activeTab === 1 && (
//         <form className="p-12 mx-12 shadow-2xl bg-white shadow-md rounded">
//           <div className="md:flex md:items-center mb-6 justify-center">
//             <div>
//               <label
//                 className="block text-gray-500 w-36 font-bold md:text-left mb-1 md:mb-0 pr-4"
//                 for="inline-full-name"
//               >
//                 MSISDN
//               </label>
//             </div>
//             <div>
//               <input
//                 className=" appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
//                 id="inline-full-name"
//                 type="text"
//                 //   value=""
//               />
//             </div>
//           </div>
//           <div className="md:flex md:items-center mb-6 justify-center">
//             <div>
//               <label
//                 className="block text-gray-500 w-36 font-bold md:text-left mb-1 md:mb-0 pr-4"
//                 for="inline-password"
//               >
//                 Subscription-id
//               </label>
//             </div>
//             <div>
//               <input
//                 className=" appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
//                 id="inline-password"
//                 type="text"
//               />
//             </div>
//           </div>
//           <div className="md:flex md:items-center mb-6 justify-center">
//             <div>
//               <label
//                 className="block text-gray-500 w-36 font-bold md:text-left mb-1 md:mb-0 pr-4"
//                 for="inline-password"
//               >
//                 CSR-ID
//               </label>
//             </div>
//             <div>
//               <input
//                 className=" appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
//                 id="inline-password"
//                 type="text"
//               />
//             </div>
//           </div>
//           <div className="md:flex md:items-center mb-6 justify-center">
//             <div>
//               <label
//                 className="block text-gray-500 w-36 font-bold md:text-left mb-1 md:mb-0 pr-4"
//                 for="inline-password"
//               >
//                 Reason
//               </label>
//             </div>
//             <div>
//               <input
//                 className=" appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
//                 id="inline-password"
//                 type="text"
//               />
//             </div>
//           </div>
//           <div className="md:flex md:items-center mb-6 justify-center">
//             <div>
//               <label
//                 className="block text-gray-500 w-36 font-bold md:text-left mb-1 md:mb-0 pr-4"
//                 for="inline-password"
//               ></label>
//             </div>
//             <div>
//               <button
//                 className="shadow bg-purple-500 mr-2 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
//                 type="button"
//               >
//                 Submit
//               </button>
//             </div>
//             <div>
//               <button
//                 className="shadow bg-white-800 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-black font-bold py-2 px-4 rounded"
//                 type="button"
//               >
//                 Cancel
//               </button>
//             </div>
//           </div>
//           {/* <div className="md:flex md:items-center mb-6">
//           <div ></div>
//           <label className="md:w-2/3 block text-gray-500 font-bold">
//             <input className="mr-2 leading-tight" type="checkbox" />
//             <span className="text-sm">Send me your newsletter!</span>
//           </label>
//         </div> */}
//           {/* <div className="md:flex md:items-center">
//           <div></div>
//           <div>
//             <button
//               className="shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
//               type="button"
//             >
//               Submit
//             </button>
//           </div>
//         </div> */}
//         </form>
//       )}
//       {activeTab === 2 && <div>Content for Tab 2</div>}
//     </div>
//   </div>
// </div>

export default AppTabs;
