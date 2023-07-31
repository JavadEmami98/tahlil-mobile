import { Button, TextField, useMediaQuery } from "@mui/material";
import React from "react";

function Step4() {
  const isLg = useMediaQuery("(min-width:1208px)");
  return (
    <div>
       <div className="items-center my-[50px]  lg:mb-[15px] py-[20px] lg:px-[44px] px-[8px] lg:mx-9 mx-4 border border-[#707070] rounded-[8px] lg:border lg:border-[#707070] lg:rounded-[12px] leading-[1.75]">
        <div className="flex relative justify-center items-center">
          <div className=" z-0 flex flex-col justify-center lg:mt-[200px] md:mt-[100px] mt-[100px] lg:mx-0 mx-2 lg:pr-[30px] pr-[20px] text-[#0A0A0A] w-full bg-[#6FB825] lg:rounded-[18px] rounded-[12px] lg:h-[193px] h-[83px] lg:ml-[100px] ml-[100px]">
            <h3 className="lg:text-[40px] text-[16px] font-bold mb-[10px]">
              قدم سوم:
            </h3>
            <h3 className="lg:text-[30px] text-[12px] leading-7 text-[#F9F9F9]">
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
            <div className="absolute top-0 left-5 z-10">
              <img
                src="/images/mobile4s.svg"
                alt=""
                loading="lazy"
                className="object-cover h-[261px] w-full z-10"
              />
            </div>
          )}
        </div>
        <div className="lg:pr-[30px] lg:mx-0 lg:px-0 mx-3 px-[15px] lg:text-[25px] md:text-[15px] text-[13px] my-[15px] text-[#0A0A0A] leading-[1.85] mt-[75px]">
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
                md: "10px !important",
                sm: "10px !important",
              },
              p: "10px !important",
              border: "2px solid #3E81E6",
            }}
          >
             نمایش بر روی نقشه
          </Button>
        </div>
      </div>    </div>
  );
}

export default Step4;
