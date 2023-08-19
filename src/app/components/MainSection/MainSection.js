"use client"
import Image from "next/image";
import welcome from '../../../../public/welcome.jpg';
import city from '../../../../public/city.jpg';
import PostsList from "./PostsList";
import TitelsSection from "./TitelSections";
import TopAutors from "./TopAutors";
import AdBlocMain from "../AdBlocks/AdBlockMain";
import Pagination from "../Pagination/Pagination";

import { useDispatch, useSelector } from "react-redux";
import { increment } from "../../GlobalRedux/Features/slice";
import { Fragment_Mono } from "next/font/google";

const font = Fragment_Mono({ subsets: ['latin'], weight: ['400'] })

export default function MainSection(){
    // const count = useSelector((state) => state.counter.value);
    // const dispatch = useDispatch();

    const isLightThems = useSelector((state)=> state.SwithThem.value);

    return(
        // <>
        //     <h1 className="text-3xl"> {count} </h1>
        //     <button onClick={() => dispatch(increment())}> + </button>
        //     <button onClick={() => dispatch(increment())}> - </button>
        // </>
        <>
        <section className={`main ${ isLightThems ? "switchLightThem" : "switchBlackThem" } min-h-full`}>
            <div className=" wrap container__titels pt-20 grid grid-cols-3">
                <div><h2>Featured  This month</h2></div>
                <div></div>
                <div><h2>populer Posted</h2></div>
            </div>

            <div className="section__popular-news wrap pt-20 pb-16 grid grid-cols-3 overflow: hidden; ">
                <div className="container__Featured ">
                    <div className="teg text-sm"> #culture </div>
                    <h1 className={`text-2xl mb-5`}>ferst colum</h1>
                    <Image src={welcome} className=" max-w-sm max-h-80 rounded-sm bg-no-repeat bg-cover bg-center"/>
                    <div className="About mb-5 m-w-[289px] flex flex-wrap">
                        <p className=" text-sm ">autor name </p>
                        <p className=" text-sm ml-1"> | </p>
                        <p className=" text-sm ml-1">02 december 1900 </p>
                        <p className=" text-sm ml-1"> | </p>
                        <p className=" text-sm ml-1">3 Min. To Read </p>
                    </div>
                    <div className="Description">
                        <p>Did you come here for something in particular or just general Riker-bashing? And blowing into</p>
                    </div>
                </div>
                <div className="container__Featured ">
                    <div className="teg text-sm">#city</div>
                    <h1 className={`text-2xl mb-5`}>two colum</h1>
                    <Image src={city} className=" max-w-sm max-h-80 rounded-sm bg-no-repeat bg-cover bg-center"/>
                    <div className="About mb-5 m-w-[289px] flex flex-wrap">
                        <p className=" text-sm ">autor name </p>
                        <p className=" text-sm ml-1"> | </p>
                        <p className=" text-sm ml-1">02 december 1900 </p>
                        <p className=" text-sm ml-1"> | </p>
                        <p className=" text-sm ml-1">3 Min. Read </p>
                    </div>
                    <div className="Description">
                        <p>Did you come here for something in particular or just general Riker-bashing? And blowing into</p>
                    </div>
                </div>

                <div className="container__popular-post p-2 overflow-y-scroll max-h-96 ">
                    {/* <p className={`text-lg ${font.className}`}>Did you come here for something in particular or just general Riker-bashing?
                        And blowing into maximum warp
                    </p>    */}
                    <div className={`container__pop-post p-2 mb-3 ${isLightThems ? "bg-white" : "bg-neutral-600"} rounded-lg`}>
                        <p className={`text-lg mb-2`}>Did you come here for something in particular or just general Riker-bashing?
                            And blowing into maximum warp
                        </p>
                        <div className="About mb-5 flex flex-wrap ">
                            <p className=" text-sm ">autor name </p>
                            <p className=" text-sm ml-1"> | </p>
                            <p className=" text-sm ml-1">3 Min. To Read </p>
                        </div>
                    </div>

                    <div className={`container__pop-post p-2 mb-3 ${isLightThems ? "bg-white" : "bg-neutral-600"} rounded-lg`}>
                        <p className={`text-lg mb-2`}>I Created a Developer Rap Video - Here's What I Learned from it. Check it out
                        </p>
                        <div className="About mb-5 flex flex-wrap ">
                            <p className=" text-sm ">autor name </p>
                            <p className=" text-sm ml-1"> | </p>
                            <p className=" text-sm ml-1">3 Min. To Read </p>
                        </div>
                    </div>

                    <div className={`container__pop-post p-2 mb-3 ${isLightThems ? "bg-white" : "bg-neutral-600"} rounded-lg`}>
                        <p className={`text-lg mb-2`}>Did you come here for something in particular or just general Riker-bashing?
                            And blowing into maximum warp
                        </p>
                        <div className="About mb-5 flex flex-wrap ">
                            <p className=" text-sm ">autor name </p>
                            <p className=" text-sm ml-1"> | </p>
                            <p className=" text-sm ml-1">3 Min. To Read </p>
                        </div>
                    </div>

                    <div className={`container__pop-post p-2 mb-3  ${isLightThems ? "bg-white" : "bg-neutral-600"} rounded-lg`}>
                        <p className={`text-lg mb-2`}>Did you come here for something in particular or just general Riker-bashing?
                            And blowing into maximum warp
                        </p>
                        <div className="About mb-5 flex flex-wrap ">
                            <p className=" text-sm ">autor name </p>
                            <p className=" text-sm ml-1"> | </p>
                            <p className=" text-sm ml-1">3 Min. To Read </p>
                        </div>
                    </div>


                    <div className={`container__pop-post p-2 mb-3  ${isLightThems ? "bg-white" : "bg-neutral-600"} rounded-lg`}>
                        <p className={`text-lg mb-2`}>Did you come here for something in particular or just general Riker-bashing?
                            And blowing into maximum warp
                        </p>
                        <div className="About mb-5 flex flex-wrap ">
                            <p className=" text-sm ">autor name </p>
                            <p className=" text-sm ml-1"> | </p>
                            <p className=" text-sm ml-1">3 Min. To Read </p>
                        </div>
                    </div>

                    <div className={`container__pop-post p-2 mb-3  ${isLightThems ? "bg-white" : "bg-neutral-600"} rounded-lg`}>
                        <p className={`text-lg mb-2`}>Did you come here for something in particular or just general Riker-bashing?
                            And blowing into maximum warp
                        </p>
                        <div className="About mb-5 flex flex-wrap ">
                            <p className=" text-sm ">autor name </p>
                            <p className=" text-sm ml-1"> | </p>
                            <p className=" text-sm ml-1">3 Min. To Read </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section id="PostList" className={` pt-20 ${isLightThems ? "bg-white" : "switchBlackThem"}`}>
                <div className="wrap">
                    <TitelsSection styles="title-posts"/>

                    <div className="posts-main-container">
                        <div className="posts">
                            <PostsList className="" />
                            <PostsList className="" />
                            <PostsList className="" />
                            <PostsList className="" />
                            <PostsList className="" />
                            <Pagination />
                        </div>
                        
                        <div className="p-2">
                            <TopAutors
                                autorName={"Jenny Kia"}
                                autorDescription={"Fashion designer, Blogger, activist"}
                            />
                            <TopAutors
                                autorName={"Andress rasel"}
                                autorDescription={"Fashion designer, Blogger, activist"}
                            />
                            <TopAutors
                                autorName={"Jenny Kia"}
                                autorDescription={"Fashion designer, Blogger, activist"}
                            />

                            <AdBlocMain />
                        </div>
                    </div>
                    
                </div>
        </section>

        </>
    );
}