'use client'
import './components.css';
import Image from 'next/image';
import searcheImg from '../../../../public/search.svg';
import Link from 'next/link';
import Sunny from '../../../../public/sunny.svg';

import SwithThem from './SwithThem';
// import { list } from 'tar';

export default function Header(){

    const ClickBurger = () =>{
        let menu = document.querySelector(".menu");
        menu.classList.toggle("active");
        let burger = document.querySelector('.burger');
        burger.classList.toggle("open");
        // alert('awdaf');
    }

    const ClickSearch = () =>{
        let btn = document.querySelector(".search-input");
        btn.classList.toggle("active");
        // alert('awdaf');
    }

    return(
        <>
        {/* flex flex-wrap justify-between */}
            <header className='header h-16 pt-5'>
                <div className='wrap grid grid-cols-3'>
                    <nav className='menu w-80'>
                        <ul className='nav-list flex flex-wrap justify-between text-lg'>
                            <li className='nav-list-item'> <Link href='/PostView' className ='Link'> Homepages </Link></li>
                            <li className='nav-list-item'>about</li>
                            <li className='nav-list-item'>Categories</li>
                            <li className='nav-list-item'>pages</li>
                        </ul>
                    </nav>

                    <button className='burger bg-red-600  w-[40px] h-[40px] relative z-10' onClick={()=> ClickBurger()}>
                        <span className='bg-white top-4 left-1 w-8 h-1 absolute'></span>
                        <span className='bg-white top-6 left-1 w-8 h-1 absolute'></span>
                    </button>

                    <div className='searche flex justify-center'>
                        <button onClick={ClickSearch} className='search-btn'> <Image src={searcheImg} className=' relative z-10' /> </button>
                        <div className='search'>
                            <input className='search-input hidden absolute bg-red-600 rounded-lg top-20 left-20' placeholder='searhe'/>
                        </div>
                        {/* <button className=' ml-1'> <Image src={Sunny}/> </button> */}
                        <SwithThem />
                    </div>

                    <div className='titel flex justify-self-end'>
                        <p className=' bg-red-600'>The</p>
                        <h2>Concerto.</h2>
                    </div>
                </div>
            </header>
        </>
    );
}