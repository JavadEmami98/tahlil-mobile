import { Button, useMediaQuery } from "@mui/material";
import React from "react";

function StepThree() {
  const isLg = useMediaQuery("(min-width:1335px)");
  return (
    <div>
      <div className="items-center my-[50px]  lg:px-[44px] lg:mx-9  lg:border lg:border-[#707070] lg:rounded-[12px]">
        <div className="flex relative justify-center items-center">
          <div className=" z-0 flex flex-col justify-center lg:mt-[200px] md:mt-[50px] sm:mt-[10px] mt-[10px] lg:mx-0 mx-2 lg:pr-[30px] pr-[20px] text-[#0A0A0A]  w-full bg-[#359DD5] lg:rounded-[18px] rounded-[12px] lg:h-[193px] h-[83px] lg:ml-[100px]">
            <h3 className="lg:text-[40px] md:text-[22px] font-bold mb-[10px]">
              لیست مدارک مورد نیاز:
            </h3>
          </div>
          {isLg ? (
            <div className="absolute top-0 left-0 z-10">
              <img
                src="/images/mobile3.svg"
                alt=""
                loading="lazy"
                className="object-cover w-full z-10"
              />
            </div>
          ) : (
            <></>
          )}
        </div>
        <div className="lg:pr-[30px] lg:mx-0 lg:px-0 mx-3 px-[15px] lg:text-[25px] text-[15px] my-[15px] text-[#0A0A0A] leading-[1.85]">
          <h3 className=" font-bold">مدارک شناسایی:</h3>
          <span>
            شناسنامه به همراه کپی از تمام صفحات
            <br />
            کارت ملی به همراه کپی از پشت و رو کارت
            <br />
            کارت پایان خدمت به همراه کپی از پشت و رو کارت (برگه معافیت مورد قبول
            است)
          </span>
          <h3 className="mt-[20px]  font-bold">مدارک شغلی:</h3>
          <span>
            با توجه به دسته بندی زیر، صنف کاری خود رامشخص کنید و مدارک مورد نیاز
            همان شغل را تهیه کنید .
          </span>
          <h3 className="mt-[20px]  text-[#707070] font-bold">
            کارمندان دولتی :
          </h3>
          <span>
            حکم کارگزینی یا گواهی اشتغال به کار
            <br />
            فیش حقوقی یا پرینت سوابق بیمه
          </span>
          <h3 className="mt-[20px]  text-[#707070] font-bold">
            کارمندان بخش خصوصی :
          </h3>
          <span> گواهی اشتغال به کار</span>
          <br />
          <span> فیش حقوقی</span>
          <br />
          <span>پرینت سوابق بیمه</span>
          <h3 className="mt-[20px]  text-[#707070] font-bold">
            کارمندان نظامی :
          </h3>
          <span>حکم کارگزینی یا گواهی اشتغال به کار</span>
          <h3 className="mt-[20px]  text-[#707070] font-bold">بازنشستگان :</h3>
          <span> فیش حقوقی</span>
          <br />
          <span>آخرین حکم افزایش مستمری</span>
          <h3 className="mt-[20px]  text-[#707070] font-bold">مشاغل آزاد :</h3>
          <span> جواز کسب</span>
          <br />
          <span>
            (کسبه ای که جواز کسب ندارند اجاره نامه یا سند ملک تجاری که در آن
            فعالیت می کنند به همراه برگه استشهادیه
            <br />
            که از سازمان ما دریافت کرده اند را تکیل کنند و تحویل باجه دهنده)
          </span>
          <h3 className="mt-[20px]  text-[#707070] font-bold">
            فروشندگان و کارمندان کسبه:
          </h3>
          <span>
            گواهی اشتغال به کار در سربرگ سازمان با مهر معتبر آن سازمان.
          </span>
          <br />
          <span>
            ( احتمالا خیلی از مشاغل در این دسته بندی قرار نمی گیرند شما باید
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
              اگه منزل شما اجاره است، اجاره نامه با تائیدیه کدپستی، اگه ملک شخصی
              است، سند با تائیدیه کدپستی.
              <br />
              (صرفا به علت احراز هویت محل سکونت شماست و سند ملک شما در رهن یا
              ضمانت بانک قرار نمیگیره)
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
                md: "15px !important",
                sm: "15px !important",
              },
              p: "10px !important",
              mb:"30px"
            }}
          >
            دریافت فایل لیست مدارک مورد نیاز
          </Button>
        </div>
      </div>
    </div>
  );
}

export default StepThree;

/* 
<div className="border-t border-black py-6">
<div className="flex relative justify-center items-center h-[67px] font-bold w-full bg-[#4066FF] text-3xl text-[#FFFFFF]">
  <img
    src="images/num3.svg"
    alt=""
    loading="lazy"
    className="absolute bottom-0 right-4"
  />
  <p> پرداخت و دریافت مدارک </p>
</div>
<div className="grid gap-5 grid-cols-1 lg:grid-cols-6 xl:grid-cols-6 bg-[#F8F8F8] p-[30px]">
  <div className="col-span-2">
    <div className="flex flex-col text-base">
      <div className="flex flex-col gap-3">
        <div className="text-[#FF8000]">
          <p>الزامی</p>
        </div>
        <div className="flex justify-between items-center text-[#4066FF]">
          <p>هزینه پوشه مدارک</p>
          <p>70000تومان</p>
        </div>
      </div>
      <div className="flex flex-col gap-3 text-base mt-[13px]">
        <input type="text" name="" id="" className="h-[67px]" />
      </div>
      <div className="w-full mt-[35px]">
        <Button
          variant="contained"
          sx={{
            width: "100%",
            height: "67px !important",
            fontSize: "30px !important",
            backgroundColor: "#4066FF",
            mt: "15px",
            borderRadius:"5px"
          }}
        >
          پرداخت
        </Button>
      </div>
    </div>
  </div>
  <div className="col-span-2 mt-[30px]">
    <div className="flex justify-between items-center text-[#4066FF]">
      <p> هزینه اعتبارسنجی</p>
      <p>70000تومان</p>
    </div>
    <div className="flex flex-col gap-3 text-base mt-[13px]">
      <input type="text" name="" id="" className="h-[67px]" />
    </div>
    <div className="w-full mt-[35px]">
      <Button
        variant="contained"
        sx={{
          width: "100%",
          height: "67px !important",
          fontSize: "30px !important",
          backgroundColor: "#4066FF",
          mt: "15px",
          borderRadius:"5px"
        }}
      >
        پرداخت
      </Button>
    </div>
  </div>
  <div className="col-span-1 flex flex-col justify-end w-full">
  <div className="w-full">
      <Button
        variant="contained"
        sx={{
          width: "100% !important",
          height: "67px !important",
          fontSize: "30px !important",
          backgroundColor: "#40BEA7",
          mt: "15px",
          borderRadius:"5px"
        }}
      >
        دانلود مدارک
      </Button>
    </div>
  </div>
  <div className="col-span-1 hidden lg:block xl:block">
    <img src="/images/pic3.svg" alt="" loading="lazy" />
  </div>
</div>
</div> */
