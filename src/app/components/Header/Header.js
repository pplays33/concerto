'use client'
import './components.css';
import Image from 'next/image';
import searcheImg from '../../../../public/search.svg';
import Sunny from '../../../../public/sunny.svg';

import SwithThem from './SwithThem';

export default function Header(){
    return(
        <>
            <header className='header h-16 pt-5'>
                <div className='wrap flex flex-wrap justify-between'>
                    <nav className='menu w-80'>
                        <ul className='nav-list flex flex-wrap justify-between text-lg'>
                            <li>Homepages</li>
                            <li>about</li>
                            <li>Categories</li>
                            <li>pages</li>
                        </ul>
                    </nav>
                    <div className='titel flex'>
                        <p className=' bg-red-600'>The</p>
                        <h2>Concerto.</h2>
                    </div>
                    <div className='searche flex justify-center'>
                        <Image src={searcheImg} />
                        {/* <button className=' ml-1'> <Image src={Sunny}/> </button> */}
                        <SwithThem />
                    </div>
                </div>
            </header>
        </>
    );
}