import { TextField, useMediaQuery } from "@mui/material";
import React from "react";

function Step6() {
  const isLg = useMediaQuery("(min-width:1093px)");
  return (
    <div>
        <div className="my-[50px] lg:h-[607px] lg:px-[44px] lg:mx-9  lg:border lg:border-[#707070] lg:rounded-[12px] leading-[1.85]">
        <div className="flex relative justify-center items-center">
          <div className=" z-0 flex flex-col justify-center lg:mt-[250px] md:mt-[50px] sm:mt-[10px] mt-[10px] lg:mx-0 mx-2 lg:pr-[30px] pr-[20px]  w-full bg-[#656BD1] lg:rounded-[18px] rounded-[12px] lg:h-[193px] h-[83px] lg:ml-[100px]">
            <h3 className="lg:text-[40px] md:text-[22px] font-bold mb-[10px]">
              قدم پنجم:
            </h3>
            <h3 className="lg:text-[30px] md:text-[16px]  text-[#F9F9F9] leading-7">
            ارسال مدارک   
            </h3>
          </div>
          {isLg ? (
            <div className="absolute top-5 left-0 z-10">
              <img
                src="/images/mobile6.svg"
                alt=""
                loading="lazy"
                className="object-cover w-full z-10"
              />
            </div>
          ) : (
            <></>
          )}
        </div>
        <div className="lg:pr-[30px] lg:mx-0 lg:px-0 mx-3 px-[15px] lg:text-[25px] md:text-[15px] my-[15px] text-[#0A0A0A] leading-[1.85]">
          <span>
          مدارک شما بعد از بررسی کارشناسان به بانک ارسال می شود.
          </span>
        </div>
      </div>
    </div>
  );
}

export default Step6;
{/* <div className="border-t border-black py-6">
        <div className="flex relative justify-center items-center h-[67px] font-bold w-full bg-[#4066FF] text-3xl text-[#FFFFFF]">
          <img
            src="images/num6.svg"
            alt=""
            loading="lazy"
            className="absolute bottom-0 right-4"
          />
          <p> تحویل مدارک به باجه </p>
        </div>
        <div className="grid gap-5 grid-cols-1 lg:grid-cols-3 xl:grid-cols-3 bg-[#F8F8F8] p-[30px]">
          <div>
            <div className="flex flex-col justify-between text-base">
              <div className="flex flex-col gap-3">
                <div className="text-[#212121] mt-[30px]">
                  <p>وضعیت </p>
                </div>
              </div>
              <div className="flex justify-center">
                <div className="flex items-center justify-center w-[177px] h-[177px] rounded-[50%] bg-[#FFFFFF]">
                  <img
                    src="images/tik.svg"
                    alt=""
                    loading="lazy"
                    className="h-[92px] object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="mt-[30px]">
            <div>
              <p className="mb-2">توضیحات نقص مدارک </p>
              <TextField
                multiline
                rows={4}
                variant="outlined"
                sx={{ width: "100%" }}
              />
            </div>
          </div>
          <div className="hidden lg:block xl:block">
            <img src="/images/pic6.svg" alt="" loading="lazy" />
          </div>
        </div>
      </div> */}