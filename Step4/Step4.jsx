import { Button, TextField, useMediaQuery } from "@mui/material";
import React from "react";

function Step4() {
  const isLg = useMediaQuery("(min-width:1208px)");
  return (
    <div>
      <div className="items-center my-[50px] lg:px-[44px] lg:mx-9  lg:border lg:border-[#707070] lg:rounded-[12px]">
        <div className="flex relative justify-center items-center">
          <div className=" z-0 flex flex-col justify-center lg:mt-[200px] md:mt-[50px] sm:mt-[10px] mt-[10px] lg:mx-0 mx-2 lg:pr-[30px] pr-[20px]  w-full bg-[#6FB825] lg:rounded-[18px] rounded-[12px] lg:h-[193px] h-[83px] lg:ml-[100px]">
            <h3 className="lg:text-[40px] md:text-[22px] font-bold mb-[10px]">
              قدم سوم:
            </h3>
            <h3 className="lg:text-[30px] md:text-[16px]  text-[#F9F9F9] leading-7">
              تحویل حضوری مدارک و ثبت نام
            </h3>
          </div>
          {isLg ? (
            <div className="absolute top-0 left-0 z-10">
              <img
                src="/images/mobile4.svg"
                alt=""
                loading="lazy"
                className="object-cover w-full z-10"
              />
            </div>
          ) : (
            <></>
          )}
        </div>
        <div className="lg:pr-[30px] lg:mx-0 lg:px-0 mx-3 px-[15px] lg:text-[25px] md:text-[15px] my-[15px] text-[#0A0A0A] leading-[1.85] ">
          <span>
            در این مرحله باید مدارک خود را به صورت حضوری تحویل باجه دهید
            <br />
            مراحل ثبت نام شما بعد از صحت سنجی مدارک انجام می شود
            <br />
            پرداخت مبلغ 75 هزار تومان بابت هزینه پوشه و فرم های قرارداد بانک
            <br />
            تعیین نوبت و مراجعه به غرفه تسهیلات برای تکمیل فرم های بانکی
          </span>
          <div className="mt-[20px] md:text-[23px] text-[30px] text-[#290101]  leading-[1.85]">
              <h3 >
          آدرس مراجعه حضوری
 :
          </h3>
          <span className="text-[#707070]">خیابان جمهوری، تقاطع حافظ، پاساژ چارسو، طبقه منفی 1، غرفه زیترو</span>
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
   نمایش بر روی نقشه
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Step4;
/*  <div className="border-t border-black py-6">
        <div className="flex relative justify-center items-center h-[67px] font-bold w-full bg-[#4066FF] text-3xl text-[#FFFFFF]">
          <img
            src="images/num4.svg"
            alt=""
            loading="lazy"
            className="absolute bottom-0 right-4"
          />
          <p> صحت سنجی مدارک (حضوری) </p>
        </div>
        <div className="grid gap-5 grid-cols-1 lg:grid-cols-3 xl:grid-cols-3 bg-[#F8F8F8] p-[30px]">
          <div>
            <div className="flex flex-col justify-between text-base">
              <div className="flex flex-col gap-3">
                <div className="text-[#787878] mt-[30px]">
                  <p>مشخصات مدارک</p>
                </div>
              </div>
              <div className="grid grid-cols-1 xl:grid-cols-2 items-center gap-3 text-base mt-[13px]">
                <label htmlFor="">شماره سریال:</label>
                <input type="text" name="" id="" className="h-[67px] w-full" />
              </div>
              <div className="w-full mt-[35px]">
              <div className="grid grid-cols-1 xl:grid-cols-2 items-center gap-3 text-base mt-[13px]">
                <label htmlFor="">وضعیت مدارک :</label>
                <input type="text" name="" id="" className="h-[67px] w-full" />
              </div>
              </div>
            </div>
          </div>
          <div className="mt-[30px]">
          <div>
            <p className='mb-2'>توضیحات نقص مدارک </p>
        <TextField multiline rows={4} variant="outlined" sx={{width:"100%"}}/>
        </div>
          </div>
          <div className="hidden lg:block xl:block">
            <img src="/images/pic4.svg" alt="" loading="lazy" />
          </div>
        </div>
      </div> */
