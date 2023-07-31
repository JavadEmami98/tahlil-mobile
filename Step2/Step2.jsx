import { Button, TextField, useMediaQuery } from "@mui/material";
import React from "react";

function StepTwo() {
  const isLg = useMediaQuery("(min-width:1024px)");
  return (
  <div className="items-center my-[50px]  lg:mb-[15px] py-[20px] lg:px-[44px] px-[8px] lg:mx-9 mx-4 border border-[#707070] rounded-[8px] lg:border lg:border-[#707070] lg:rounded-[12px] leading-[1.75]">
        <div className="flex relative justify-center items-center">
          <div className=" z-0 flex flex-col justify-center lg:mt-[200px] md:mt-[100px] mt-[100px] lg:mx-0 mx-2 lg:pr-[30px] pr-[20px] text-[#F89833] w-full bg-[#101010] lg:rounded-[18px] rounded-[12px] lg:h-[193px] h-[83px] lg:ml-[100px] ml-[100px]">
            <h3 className="lg:text-[40px] text-[16px] font-bold mb-[10px]">
              قدم دوم:
            </h3>
            <h3 className="lg:text-[30px] text-[12px] leading-7 text-[#F9F9F9]">
              دریافت لیست مدارک مورد نیاز / افتتاح حساب در بانک آینده
            </h3>
          </div>
          {isLg ? (
            <div className="absolute top-0 left-0 z-10">
              <img
                src="/images/mobile2.svg"
                alt=""
                loading="lazy"
                className="object-cover w-full z-10"
              />
            </div>
          ) : (
            <div className="absolute top-0 left-3 z-10">
              <img
                src="/images/mobile2s.svg"
                alt=""
                loading="lazy"
                className="object-cover h-[261px] w-full z-10"
              />
            </div>
          )}
        </div>
        <div className="lg:pr-[30px] lg:mx-0 lg:px-0 mx-3 px-[15px] lg:text-[25px] md:text-[15px] text-[13px] my-[15px] text-[#0A0A0A] leading-[1.85] mt-[75px]">
          <span>
          -  لیست مدارک مورد نیاز جهت ثبت نام در تسهیلات را از باجه و یا آنلاین دریافت کنید

            <br />
          -  افتتاح حساب در بانک آینده

            <br />
          *  شما می توانید به صورت حضوری و یا آنلاین از طریق اپلیکیشن کیلید افتتاح حساب کنید

            <br />( اگه از قبل حساب دارین نیازی به افتتاح حساب مجدد ندارید)
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
                md: "10px !important",
                sm: "10px !important",
              },
              p: "10px !important",
              border: "2px solid #F89833",
              mb: "20px",
              color: "#F89833",
            }}
          >
            آموزش افتتاح حساب از طریق اپلیکیشن کلید
          </Button>
        </div>
        <h3 className="lg:pr-[30px] lg:mx-0 lg:px-0 mx-3 px-[15px] lg:text-[40px] text-[16px]  mb-[10px]">
          لیست مدارک مورد نیاز:
        </h3>
        <div className="lg:pr-[30px] lg:mx-0 lg:px-0 mx-3 px-[15px] lg:text-[25px] md:text-[15px] text-[13px] my-[15px] text-[#0A0A0A] leading-[1.85] ">
          <h3 className=" font-bold">مدارک شناسایی:</h3>
          <span>
            - شناسنامه به همراه کپی از تمام صفحات
            <br />
            - کارت ملی به همراه کپی از پشت و رو کارت
            <br />- کارت پایان خدمت به همراه کپی از پشت و رو کارت (برگه معافیت
            مورد قبول است)
          </span>
          <h3 className="mt-[20px]  font-bold">مدارک شغلی:</h3>
          <span>
            با توجه به دسته بندی زیر، صنف کاری خود رامشخص کنید و مدارک مورد نیاز
            همان شغل را تهیه کنید .
          </span>
          <h3 className="mt-[20px]  text-[#F8A854] font-bold">
            - کارمندان دولتی :
          </h3>
          <span>
            حکم کارگزینی یا گواهی اشتغال به کار
            <br />
            فیش حقوقی یا پرینت سوابق بیمه
          </span>
          <h3 className="mt-[20px]  text-[#F8A854] font-bold">
            - کارمندان بخش خصوصی :
          </h3>
          <span> گواهی اشتغال به کار</span>
          <br />
          <span> فیش حقوقی</span>
          <br />
          <span>پرینت سوابق بیمه</span>
          <h3 className="mt-[20px]  text-[#F8A854] font-bold">
            - کارمندان نظامی :
          </h3>
          <span>حکم کارگزینی یا گواهی اشتغال به کار</span>
          <h3 className="mt-[20px]  text-[#F8A854] font-bold"> -   بازنشستگان:  
          
          </h3>
          <span> فیش حقوقی</span>
          <br />
          <span>آخرین حکم افزایش مستمری</span>
          <h3 className="mt-[20px]  text-[#F8A854] font-bold"> - مشاغل آزاد:
          
           </h3>
          <span> جواز کسب</span>
          <br />
          <span>
            * (کسبه ای که جواز کسب ندارند اجاره نامه یا سند ملک تجاری که در آن
            فعالیت می کنند به همراه برگه استشهادیه
            <br />
            که از سازمان ما دریافت کرده اند را تکیل کنند و تحویل باجه دهنده)
          </span>
          <h3 className="mt-[20px]  text-[#F8A854] font-bold">
            - فروشندگان و کارمندان کسبه:
          </h3>
          <span>
            گواهی اشتغال به کار در سربرگ سازمان با مهر معتبر آن سازمان.
          </span>
          <br />
          <span>
            * ( احتمالا خیلی از مشاغل در این دسته بندی قرار نمی گیرند شما باید
            برای تشکیل پرونده یک مدرک شغلی معتبر
            <br />
            به بانک ارائه بدید و فرقی ندارد که شغل شما در کدام دسته بندی قرار
            دارد به عنوان مثل رانندگان تاکسیرانی کپی
            <br />
            سند ماشین با کارت اتحادیه تاکسیرانی میارن)
          </span>
          <h3 className="mt-[20px]   text-[#290101] font-bold">
            مدارک محل سکونت :
          </h3>
          <div className="mb-[20px]">
            <span>
              - اگه منزل شما اجاره است، اجاره نامه با تائیدیه کدپستی، اگه ملک
              شخصی است، سند با تائیدیه کدپستی.
              <br />* (صرفا به علت احراز هویت محل سکونت شماست و سند ملک شما در
              رهن یا ضمانت بانک قرار نمیگیره)
            </span>
          </div>
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
                md: "10px !important",
                sm: "10px !important",
              },
              p: "10px !important",
              border: "2px solid #F89833",
              mb: "20px",
              color: "#F89833",
            }}
          >
            دریافت فایل لیست مدارک مورد نیاز
          </Button>
        </div>
      </div>
  );
}

export default StepTwo;
