import React from 'react';
import Noisebackground from '../components/Noisebackground';

export default function Hero() {
    return (
        <>
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