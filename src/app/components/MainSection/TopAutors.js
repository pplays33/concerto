import Image from "next/image";
import Linkedin from "../../../../public/icons8-linkedin.svg";
import youtube from "../../../../public/icons8-youtube.svg"

export default function TopAutors({autorName, autorDescription}){
    return(
        <>
            <div className="card-autor mb-9 flex  flex-wrap">
                <div className="avatar w-20 h-20 bg-slate-500 rounded-full"></div>
                <div className="container__about-autor ml-3">
                    <div className="Name-autor mb-2"> <h3>{autorName}</h3></div>
                    <div className="about-autor mb-2"> <p className="text-sm break-words"> {autorDescription} </p> </div>
                    <div className="socials-autor flex"> 
                        <div> <Image src={Linkedin} className="w-5 h-5" alt="linked"/> </div>
                        <div> <Image src={youtube} className="w-5 h-5" alt="linked"/> </div>
                    </div>
                </div>
            </div>
        </>
    );
}