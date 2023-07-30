import { CheckBox } from "@mui/icons-material";
import { Box, Button, useMediaQuery } from "@mui/material";
import React from "react";

function StepOne() {
  const isLg = useMediaQuery("(min-width:1093px)");
  return (
    <div>
      <div>
        <img
          src="/images/header.svg"
          alt=""
          loading="lazy"
          className="w-full h-[670px] object-cover"
        />
      </div>
      <div className="items-center my-[50px] lg:h-[697px] lg:px-[44px] lg:mx-9  lg:border lg:border-[#707070] lg:rounded-[12px] leading-[1.75]">
        <div className="flex relative justify-center items-center">
          <div className=" z-0 flex flex-col justify-center lg:mt-[200px] md:mt-[50px] sm:mt-[10px] mt-[10px] lg:mx-0 mx-2 lg:pr-[30px] pr-[20px] text-[#F9F9F9] w-full bg-[#234D5F] lg:rounded-[18px] rounded-[12px] lg:h-[193px] h-[83px] lg:ml-[100px]">
            <h3 className="lg:text-[40px] md:text-[22px] font-bold mb-[10px]">
              قدم اول:
            </h3>
            <h3 className="lg:text-[30px] md:text-[16px]   leading-7">
              اعتبار سنجی اولیه
            </h3>
          </div>
          {isLg ? (
            <div className="absolute top-0 left-0 z-10">
              <img
                src="/images/mobile1.svg"
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
            اعتبار سنجی اولیه برای مشخص شدن واجد شرایط بودن شما
            <br />
            برای دریافت وام و شرط داشتن یا نداشتن ضامن است
            <br />
            اعتباری سنجی از طریق سامانه آیس
          </span>
        </div>
        <div className="lg:pr-[30px] lg:mx-0 lg:px-0 mx-3 px-[15px]">
          <Button
            variant="outlined"
            sx={{
              height: {
                lg: "76px !important",
                md: "38px !important",
                sm: "32px !imporntant",
              },
              fontSize: {
                lg: "21px !important",
                md: "15px !important",
                sm: "15px !important",
              },
              p: "10px !important",
            }}
          >
            مشاهده آموزش اعتبار سنجی
          </Button>
        </div>
      </div>

      {/*    <div className="items-center my-[50px] h-full">
        <div className="flex relative justify-center items-center">
          <div className="z-0 flex flex-col justify-center mt-[10px] mx-2 pr-[20px] text-[#F9F9F9] w-full bg-[#234D5F] rounded-[12px] h-[83px]">
            <h3 className="text-[22px] font-bold mb-[10px]">قدم اول:</h3>
            <h3 className="text-[16px] leading-7">اعتبار سنجی اولیه</h3>
          </div>
        </div>
        <div className=" text-[18px] my-[15px] text-[#0A0A0A] px-[15px] mx-3 leading-8">
          <span>
            اعتبار سنجی اولیه برای مشخص شدن واجد شرایط بودن شما
            <br />
            برای دریافت وام و شرط داشتن یا نداشتن ضامن است
            <br />
            اعتباری سنجی از طریق سامانه آیس
          </span>
        </div>
        <div className="mb-[15px] px-[15px] mx-3">
          <Button variant="outlined" sx={{ height: "38px !important",fontSize:"15px !important",p:"10px !important"}}>
            مشاهده آموزش اعتبار سنجی
          </Button>
        </div>
      </div> */}
    </div>
  );
}

export default StepOne;

{
  /*    <div className="flex relative justify-center items-center h-[67px] font-bold w-full bg-[#4066FF] text-3xl text-[#FFFFFF]">
        <img
          src="images/num1.svg"
          alt=""
          loading="lazy"
          className="absolute bottom-0 right-4"
        />
        <p>تکمیل مشخصات</p>
      </div>
      <div className="container xl">
        <div className="flex items-center py-6 font-bold text-3xl text-[#787878]">
          <input type="radio" checked className="w-[18px] h-[18px]" />
          <span className="pr-2">حقیقی</span>
        </div>
        <div className="grid xl:grid-cols-4 lg:grid-cols-4 grid-cols-1 gap-1">
          Right
          <div className="col-span-3">
            <div className="flex flex-col gap-8 xl:pr-[40px] lg:pr-[40px] pr-4 pl-3 py-8 bg-[#F8F8F8] rounded-[20px]">
              <div className="grid grid-cols-1 lg:grid-cols-4 xl:grid-cols-4 items-center gap-3 text-base text-[#4066FF]">
                <div className="col-span-1">نام:</div>
                <div className="col-span-3">
                  <input
                    type="text"
                    className="border-[#787878] h-[67px] w-full xl:w-[330px] lg:w-[330px] text-black"
                  />
                </div>
              </div>
              <div className="grid grid-cols-1 lg:grid-cols-4 xl:grid-cols-4 items-center gap-3 text-base text-[#4066FF]">
                <div className="col-span-1">نام خانوادگی:</div>
                <div className="col-span-3">
                  <input
                    type="text"
                    className="border-[#787878] h-[67px] w-full xl:w-[330px] lg:w-[330px] text-black"
                  />
                </div>
              </div>
              <div className="grid grid-cols-1 lg:grid-cols-4 xl:grid-cols-4 items-center gap-3 text-base text-[#4066FF]">
                <div className="col-span-1">تاریخ تولد:</div>
                <div className="col-span-3">
                  <input
                    type="text"
                    className="border-[#787878] h-[67px] w-full xl:w-[330px] lg:w-[330px] text-black"
                  />
                </div>
              </div>
              <div className="grid grid-cols-1 lg:grid-cols-4 xl:grid-cols-4 items-center gap-3 text-base text-[#4066FF]">
                <div className="col-span-1">کد ملی :</div>
                <div className="col-span-3">
                  <input
                    type="text"
                    className="border-[#787878] h-[67px] w-full xl:w-[330px] lg:w-[330px] text-black"
                  />
                </div>
              </div>
              <div className="grid grid-cols-1 lg:grid-cols-4 xl:grid-cols-4 items-center gap-3 text-base text-[#4066FF]">
                <div className="col-span-1">شماره همراه :</div>
                <div className="col-span-3">
                  <input
                    type="text"
                    className="border-[#787878] h-[67px] w-full xl:w-[330px] lg:w-[330px] text-black"
                  />
                </div>
              </div>
              <div className="grid grid-cols-1 lg:grid-cols-4 xl:grid-cols-4 items-center gap-3 text-base text-[#4066FF]">
                <div className="col-span-1">ایمیل :</div>
                <div className="col-span-3">
                  <input
                    type="text"
                    className="border-[#787878] h-[67px] w-full xl:w-[330px] lg:w-[330px] text-black"
                  />
                </div>
              </div>
              <div className="grid grid-cols-1 lg:grid-cols-4 xl:grid-cols-4 items-center gap-3 text-base text-[#4066FF]">
                <div className="col-span-1">استان :</div>
                <div className="col-span-3">
                  <input
                    type="text"
                    className="border-[#787878] h-[67px] w-full xl:w-[330px] lg:w-[330px] text-black"
                  />
                </div>
              </div>
              <div className="grid grid-cols-1 lg:grid-cols-4 xl:grid-cols-4 items-center gap-3 text-base text-[#4066FF]">
                <div className="col-span-1">شهر :</div>
                <div className="col-span-3">
                  <input
                    type="text"
                    className="border-[#787878] h-[67px] w-full xl:w-[330px] lg:w-[330px] text-black"
                  />
                </div>
              </div>
              <div className="grid grid-cols-1 lg:grid-cols-4 xl:grid-cols-4 items-center gap-3 text-base text-[#4066FF]">
                <div className="col-span-1">پلاک :</div>
                <div className="col-span-3">
                  <input
                    type="text"
                    className="border-[#787878] h-[67px] w-full xl:w-[330px] lg:w-[330px] text-black"
                  />
                </div>
              </div>
              <div className="grid grid-cols-1 lg:grid-cols-4 xl:grid-cols-4 items-center gap-3 text-base text-[#4066FF]">
                <div className="col-span-1"> طبقه:</div>
                <div className="col-span-3">
                  <input
                    type="text"
                    className="border-[#787878] h-[67px] w-full xl:w-[330px] lg:w-[330px] text-black"
                  />
                </div>
              </div>
              <div className="grid grid-cols-1 lg:grid-cols-4 xl:grid-cols-4 items-center gap-3 text-base text-[#4066FF]">
                <div className="col-span-1">واحد :</div>
                <div className="col-span-3">
                  <input
                    type="text"
                    className="border-[#787878] h-[67px] w-full xl:w-[330px] lg:w-[330px] text-black"
                  />
                </div>
              </div>
              <div className="grid grid-cols-1 lg:grid-cols-4 xl:grid-cols-4 items-center gap-3 text-base text-[#4066FF]">
                <div className="col-span-1">کد پستی :</div>
                <div className="col-span-3">
                  <input
                    type="text"
                    className="border-[#787878] h-[67px] w-full xl:w-[330px] lg:w-[330px] text-black"
                  />
                </div>
              </div>
              <div className="grid grid-cols-1 lg:grid-cols-4 xl:grid-cols-4 items-center gap-3 text-base text-[#4066FF] pb-[50px]">
                <div className="col-span-1">نشانی :</div>
                <div className="col-span-3">
                  <input
                    type="text"
                    className="border-[#787878] h-[67px] w-full xl:w-[330px] lg:w-[330px] text-black"
                  />
                </div>
              </div>
              <div className="grid grid-cols-1 lg:grid-cols-4 xl:grid-cols-4 items-center gap-3 text-base text-[#4066FF] border-t-[2px] border-[#707070] pt-[30px]">
                <div className="col-span-1">رمز عبور :</div>
                <div className="col-span-3">
                  <input
                    type="text"
                    className="border-[#787878] h-[67px] w-full xl:w-[330px] lg:w-[330px] text-black"
                  />
                </div>
              </div>
            </div>
            <div className="flex items-center pt-[30px] pb-[20px] font-bold text-3xl text-[#787878]">
              <input type="radio" checked className="w-[18px] h-[18px]" />
              <span className="pr-2">حقیقی</span>
            </div>
            <div className="flex flex-col gap-8 xl:pr-[40px] lg:pr-[40px] pr-4 pl-3 py-8 bg-[#F8F8F8] rounded-[20px]">
              <div className="grid grid-cols-1 lg:grid-cols-4 xl:grid-cols-4 items-center gap-3 text-base text-[#4066FF]">
                <div className="col-span-1">نام شرکت :</div>
                <div className="col-span-3">
                  <input
                    type="text"
                    className="border-[#787878] h-[67px] w-full xl:w-[330px] lg:w-[330px] text-black"
                  />
                </div>
              </div>
              <div className="grid grid-cols-1 lg:grid-cols-4 xl:grid-cols-4 items-center gap-3 text-base text-[#4066FF]">
                <div className="col-span-1">تلفن :</div>
                <div className="col-span-3">
                  <input
                    type="text"
                    className="border-[#787878] h-[67px] w-full xl:w-[330px] lg:w-[330px] text-black"
                  />
                </div>
              </div>
              <div className="grid grid-cols-1 lg:grid-cols-4 xl:grid-cols-4 items-center gap-3 text-base text-[#4066FF]">
                <div className="col-span-1">کد اقتصادی :</div>
                <div className="col-span-3">
                  <input
                    type="text"
                    className="border-[#787878] h-[67px] w-full xl:w-[330px] lg:w-[330px] text-black"
                  />
                </div>
              </div>
              <div className="grid grid-cols-1 lg:grid-cols-4 xl:grid-cols-4 items-center gap-3 text-base text-[#4066FF]">
                <div className="col-span-1"> شناسه ثبت :</div>
                <div className="col-span-3">
                  <input
                    type="text"
                    className="border-[#787878] h-[67px] w-full xl:w-[330px] lg:w-[330px] text-black"
                  />
                </div>
              </div>
            </div>
          </div>
          Left
          <div className="col-span-1">
            <img
              src="/images/pic1.svg"
              alt=""
              loading="lazy"
              className="hidden xl:block lg:block"
            />
          </div>
        </div>
        <div className="flex xl:justify-end justify-center w-full">
          <Button
            variant="contained"
            sx={{
              width: "330px",
              height: "67px !important",
              backgroundColor: "#4066FF",
              mt: "15px",
            }}
          >
            ثبت
          </Button>
        </div>
      </div> */
}
