import Image from "next/image";
import './globals.css'
import Noisebackground from '../components/Noisebackground';

export default function Home() {
  return (
    <>

      {/* NAV */}
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


      {/* Hero*/}
      <Noisebackground />
      <section className="relative z-10 flex flex-col w-100% gap-[3em] pl-[100px] pt-[150px]">
        {/* Paragraph */}
        <div className="flex flex-col justify-between items-start gap-[3em]">
          <div>
            <h1 className="font-normal text-[60px] font-serif"> FOCUS </h1>
          </div>

          <div>
            <p className="font-normal text-[20px] font-serif text-[20px]">Expand your concentration</p>
          </div>
        </div>


        {/* Buttons */}
        <div className="flex flex-row gap-[60px] pt-[100px]">
          <div className="bg-black text-white p-[20px]">
            <a className="font-serif" href="#" target="_blank"> Click to Start</a>
          </div>


          <div className="border-black border solid text-black p-[20px]">
            <a className="font-serif" href="#" target="_blank">Explore</a>
          </div>
        </div>
      </section>

    </>
  );
}










