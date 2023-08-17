'use client'

import Image from "next/image";
import postImg from "../../../../public/cardImg.jpg";
import {useSelector } from "react-redux";

export default function PostsList() {
    const currThems = useSelector((state) => state.SwithThem.value );

    return (
        <div className={`Posts__list flex flex-wrap flex-col ${currThems ? "bg-white": "switchBlackThem"}`}>
            <div className="Post mb-12 flex flex-wrap justify-between">
                <div className="titel__with__img-container">
                    <div className="teg text-sm"> #tech </div>
                    <h2 className={`text-2xl mb-5`}>ferst colum for VR</h2>
                    <Image src={postImg} className=" max-w-[288px] max-h-80 bg-no-repeat bg-cover bg-center rounded-lg" />
                </div>
                <div className="About__post-container self-center">
                    <div className="About mb-5 m-w-[289px] flex flex-wrap">
                        <p className=" text-sm ">autor name </p>
                        <p className=" text-sm ml-1"> | </p>
                        <p className=" text-sm ml-1">02 december 1900 </p>
                        <p className=" text-sm ml-1"> | </p>
                        <p className=" text-sm ml-1">3 Min. To Read </p>
                    </div>
                    <div className="Description">
                        <p>I Created a Developer Rap Video - Here's What I Learned from it. Check it out</p>
                    </div>
                </div>
            </div>
        </div>
    );
}