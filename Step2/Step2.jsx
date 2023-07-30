import { Button, TextField, useMediaQuery } from "@mui/material";
import React from "react";

function StepTwo() {
  const isLg = useMediaQuery("(min-width:1093px)");
  return (
    <div>
      {/* {isLg ? (
        <div className="items-center my-[50px] h-[697px] px-[44px] mx-9 border border-[#707070] rounded-[12px]">
          <div className="flex relative justify-center items-center">
            <div className=" z-0 flex flex-col justify-center mt-[150px]  pr-[30px] w-full bg-[#D29442] rounded-[18px] h-[193px]">
              <h3 className="text-[40px] font-bold mb-[10px]">قدم دوم:</h3>
              <h3 className="text-[30px] leading-7  text-[#F9F9F9]">
                دریافت لیست مدارک مورد نیاز و شرایط لازم
              </h3>
            </div>
            <div className="absolute top-0 left-0 z-10">
              <img
                src="/images/mobile2.svg"
                alt=""
                loading="lazy"
                className="object-cover w-full z-10"
              />
            </div>
          </div>
          <div className="pr-[30px] text-[25px] my-[15px] text-[#0A0A0A]">
            <span>
              افتتاح حساب در بانک آینده
              <br />
              (شما می توانید به صورت حضوری یا آنلاین از طریق
              <br />
              اپلیکیشن کلید افتتاح حساب کنید)
              <br />( اگه از قبل حساب دارین نیازی به افتتاح حساب مجدد ندارید)
            </span>
          </div>
          <div className="pr-[30px]">
            <Button
              variant="outlined"
              sx={{
                height: "76px !important",
                fontSize: "21px !important",
                p: "10px !important",
              }}
            >
              آموزش افتتاح حساب از طریف اپلیکیشن کلید
            </Button>
          </div>
        </div>
      ) : (
        <>
          <div className="items-center my-[50px] h-full">
            <div className="flex relative justify-center items-center">
              <div className="z-0 flex flex-col justify-center mt-[10px] mx-2 pr-[20px] text-[#F9F9F9] w-full bg-[#D29442] rounded-[12px] h-[83px]">
                <h3 className="text-[22px] font-bold mb-[10px]">قدم دوم:</h3>
                <h3 className="text-[16px] leading-7">
                  دریافت لیست مدارک مورد نیاز و شرایط لازم
                </h3>
              </div>
            </div>
            <div className="text-[18px] my-[15px] text-[#0A0A0A] px-[15px] mx-3 leading-8">
            <span>
              افتتاح حساب در بانک آینده
              <br />
              (شما می توانید به صورت حضوری یا آنلاین از طریق
              <br />
              اپلیکیشن کلید افتتاح حساب کنید)
              <br />( اگه از قبل حساب دارین نیازی به افتتاح حساب مجدد ندارید)
            </span>
            </div>
            <div className="mb-[15px] px-[15px] mx-3">
              <Button
                variant="outlined"
                sx={{
                  height: "38px !important",
                  fontSize: "15px !important",
                  p: "10px !important",
                }}
              >
               آموزش افتتاح حساب از طریف اپلیکیشن کلید
              </Button>
            </div>
          </div>
        </>
      )} */} 
      <div className="items-center my-[50px] lg:h-[753px] lg:px-[44px] lg:mx-9  lg:border lg:border-[#707070] lg:rounded-[12px]">
        <div className="flex relative justify-center items-center">
          <div className=" z-0 flex flex-col justify-center lg:mt-[200px] md:mt-[50px] sm:mt-[10px] mt-[10px] lg:mx-0 mx-2 lg:pr-[30px] pr-[20px]  w-full bg-[#D29442] lg:rounded-[18px] rounded-[12px] lg:h-[193px] h-[83px] lg:ml-[100px]">
            <h3 className="lg:text-[40px] md:text-[22px] font-bold mb-[10px]">قدم دوم:</h3>
            <h3 className="lg:text-[30px] md:text-[16px]  text-[#F9F9F9] leading-7">   دریافت لیست مدارک مورد نیاز و شرایط لازم  </h3>
          </div>
          {isLg ? (<div className="absolute top-0 left-0 z-10">
            <img
              src="/images/mobile2.svg"
              alt=""
              loading="lazy"
              className="object-cover w-full z-10"
            />
          </div>) : <></>}
        </div>
        <div className="lg:pr-[30px] lg:mx-0 lg:px-0 mx-3 px-[15px] lg:text-[25px] md:text-[15px] my-[15px] text-[#0A0A0A] leading-[1.85]">
        <span>
              افتتاح حساب در بانک آینده
              <br />
              (شما می توانید به صورت حضوری یا آنلاین از طریق
              <br />
              اپلیکیشن کلید افتتاح حساب کنید)
              <br />( اگه از قبل حساب دارین نیازی به افتتاح حساب مجدد ندارید)
            </span>
        </div>
       <div className="lg:pr-[30px] lg:mx-0 lg:px-0 mx-3 px-[15px]">
          <Button variant="outlined" sx={{ height: {lg:"76px !important",md:"38px !important",sm:"32px !imporntant"},fontSize:{lg:"21px !important",md:"15px !important",sm:"15px !important"},p:"10px !important"}}>
          آموزش افتتاح حساب از طریف اپلیکیشن کلید
          </Button>
        </div>
      </div>
    </div>
  );
}

export default StepTwo;

{
  /* <div className='border-t border-black py-6'>
        <div className="flex relative justify-center items-center h-[67px] font-bold w-full bg-[#4066FF] text-3xl text-[#FFFFFF]">
        <img
          src="images/num2.svg"
          alt=""
          loading="lazy"
          className="absolute bottom-0 right-4"
        />
        <p>انتخاب طرح تسهیلات </p>
      </div>
      <div className='grid gap-5 grid-cols-1 lg:grid-cols-3 xl:grid-cols-3 bg-[#F8F8F8] p-[30px]'>
        <div className='flex flex-col'>
            <div className='flex flex-col gap-3 text-base text-[#4066FF]'>
                <label htmlFor="">انتخاب طرح</label>
                <input type="text" name="" id="" className='h-[67px]'/>
            </div>
            <div className='flex flex-col gap-3 text-base text-[#4066FF] mt-[20px]'>
                <label htmlFor=""> مبلغ تسهیلات به تومان</label>
                <input type="text" name="" id="" className='h-[67px]'/>
            </div>
            <div className="w-full mt-[35px]">
               <Button variant="contained" sx={{width:"100%",height:"67px !important",fontSize:"30px !important",backgroundColor:"#4066FF",mt:"15px"}}>ثبت</Button>
            </div>
        </div>
        <div>
            <p className='mb-2'>توضیحات طرح</p>
        <TextField multiline rows={4} variant="outlined" sx={{width:"100%"}}/>
        </div>
        <div className='hidden lg:block xl:block'>
            <img src="/images/pic2.svg" alt="" loading='lazy'/>
        </div>
      </div>
    </div> */
}
