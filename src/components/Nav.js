import React from 'react';

export default function Nav() {
  return (
    <section className="relative z-10 h-[70px] ">
        <div className="flex flex-row justify-between item-center w-100% mx-[70px] pt-[50px]">
          <div className= "font-normal text-[20px] font-serif">
            <h2>FOCUS</h2>
          </div>

          <div className="flex flex-row justify-end item-center gap-[3em]">
            <a href = '#' className= "font-normal text-[20px] font-serif">
              <p>About us</p>
            </a>

            <div className= "font-normal text-[20px] font-serif">
              <p>Our Purpose</p>
            </div>

            <div className= "font-normal text-[20px] font-serif">
              <p>Contact us</p>
            </div>
          </div>
        </div>
      </section>
  );
}