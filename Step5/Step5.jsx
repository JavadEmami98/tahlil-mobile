import { useMediaQuery, Button } from "@mui/material";
import React from "react";

function Step5() {
  const isLg = useMediaQuery("(min-width:1093px)");
  return (
    <div>
      <div className="items-center my-[50px] lg:h-[607px] lg:px-[44px] lg:mx-9  lg:border lg:border-[#707070] lg:rounded-[12px] leading-[1.85]">
        <div className="flex relative justify-center items-center">
          <div className=" z-0 flex flex-col justify-center lg:mt-[200px] md:mt-[50px] sm:mt-[10px] mt-[10px] lg:mx-0 mx-2 lg:pr-[30px] pr-[20px]  w-full bg-[#D1B589] lg:rounded-[18px] rounded-[12px] lg:h-[193px] h-[83px] lg:ml-[100px]">
            <h3 className="lg:text-[40px] md:text-[22px] font-bold mb-[10px]">
              قدم چهارم:
            </h3>
            <h3 className="lg:text-[30px] md:text-[16px]  text-[#F9F9F9] leading-7">
    
              مراجعه به غرفه تسهیلات{" "}
            </h3>
          </div>
          {isLg ? (
            <div className="absolute top-5 left-0 z-10">
              <img
                src="/images/mobile5.svg"
                alt=""
                loading="lazy"
                className="object-cover w-full z-10"
              />
            </div>
          ) : (
            <></>
          )}
        </div>
        <div  className="lg:pr-[30px] lg:mx-0 lg:px-0 mx-3 px-[15px] lg:text-[25px] md:text-[15px] my-[15px] text-[#0A0A0A] leading-[1.85]">
          <span>
            مراجعه به غرفه تسهیلات برای تکمیل فرم های بانکی و
            <br />
            بررسی مدارک ضامن (در صورت نیاز به ضامن) و ارائه
            <br />
            چک ضمانت به کارشاناسان بانک.
          </span>
        </div>
      </div>
    </div>
  );
}

export default Step5;
