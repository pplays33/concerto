'use client'
import Sunny from '../../../../public/sunny.svg';

import Image from 'next/image';
import { useDispatch, useSelector } from "react-redux";
import { Switch } from '@/app/GlobalRedux/Features/sliceThem';


export default function SwithThem(){

    const currState = useSelector((state) => state.SwithThem.value);
    const dispatch = useDispatch();

    return(
        <button className='ml-1 z-10' onClick={() => dispatch(Switch())}> <Image src={Sunny}/> {currState} </button>
    );
    
}