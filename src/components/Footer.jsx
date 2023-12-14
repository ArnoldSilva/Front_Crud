import React from "react";


function Footer(){
    return(
        <div className="w-full">
                  {/* footer */}
            <div className="items-center bg-zinc-900 self-stretch flex w-full flex-col mt-24 px-5 py-2">
              <div className="flex w-full max-w-[1320px] items-stretch justify-between gap-5 my-6 max-md:max-w-full max-md:flex-wrap max-md:justify-center">

                <div className="items-stretch flex grow basis-[0%] flex-col self-start">
                  <div className="justify-between items-stretch flex gap-2">
                    
                    <div className="text-white text-2xl sm:text-4xl sm:mt-10 font-bold leading-10 tracking-tighter self-center">
                    sneaker house
                    </div>
                  </div>
                  <div className="text-slate-300 text-sm sm:text-lg leading-5 mt-6">
                    Customer Supports:
                  </div>
                  <div className="text-white text-xs sm:text-base leading-6 sm:mt-4 mt-1">
                    (629) 555-0129
                  </div>
                  <div className="text-gray-400 text-xs sm:text-base leading-6 sm:mt-4 mt-1">
                    4517 Washington Ave. Manchester, Kentucky 39495
                  </div>
                  <div className="text-white text-xs sm:text-base  leading-6 sm:mb-7 sm:mt-4 mt-1">
                    info@kinbo.com
                  </div>
                </div>


                

              </div>
            </div>
        </div>
    )
}

export default Footer;