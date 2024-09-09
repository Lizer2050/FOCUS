import React from 'react';
import Noisebackground from '../components/Noisebackground'
import Nav from '@/components/Nav';
import Hero from '@/components/Hero';
import Sidebar from '@/components/Sidebar';


export default function Mainpage() {
    return (
        <>
            <section className='relative z-0'>
                <div>
                    <Noisebackground />
                    <Nav />
                    <Hero />
                </div>
            </section>
        </>
    );
}