"use client"
import Image from 'next/image';
import Img from '../../../public/cardImg.jpg';
import { useSelector } from "react-redux";

export default function PostView() {
    const isLightThems = useSelector((state) => state.SwithThem.value);
    return (
        <div className={`pt-20 ${isLightThems ? "" : "switchBlackThem"}`}>
            <div className='wrap2'>
                <p className="teg text-sm mb-5"> #ai </p>
                <h2 className="mb-5"> I Created a Developer Rap Video - Here's What I Learned </h2>
                <div className="About mb-5 m-w-[289px] flex flex-wrap">
                    <p className=" text-sm ">autor name </p>
                    <p className=" text-sm ml-1"> | </p>
                    <p className=" text-sm ml-1">02 december 1900 </p>
                    <p className=" text-sm ml-1"> | </p>
                    <p className=" text-sm ml-1">3 Min. To Read </p>
                </div>
                <Image src={Img} className='max-w-[400px] mb-5 max-h-80 bg-no-repeat bg-cover bg-center rounded-lg' />
                <p className='mb-5'>Did you come here for something in particular or just general Riker-bashing? And blowing into maximum warp speed, you appeared for an instant to be in two places at once. We have a saboteur aboard. We know you’re dealing in stolen ore. But I wanna talk about the assassination attempt on Lieutenant Worf. Could someone survive inside a transporter buffer for 75 years? Fate. It protects fools, little children, and ships.</p>
                <p>Математика играет важную роль в развитии и применении искусственного интеллекта. Некоторые из примеров использования математики в AI включают:
                    Нейросети: Нейронные сети являются основой многих AI-систем. Они используют математические модели, чтобы обучаться на больших объемах данных и делать предсказания на основе этого обучения
                    1
                    .
                    Теория игр: Теория игр может быть применена в AI для оптимизации стратегий и принятия решений. Например, она может использоваться для определения наилучшей стратегии в игре или для оптимизации распределения ресурсов
                    2
                    .
                    Чат-боты: Некоторые чат-боты, такие как ChatGPT и Google Bard, используют математические модели для генерации текста и ответов на вопросы. Они могут использовать модели языка и нейронные сети для создания более естественных и понятных ответов
                    3
                    4
                    .
                    Data Science: Data Science включает в себя множество математических методов, которые могут быть применены для анализа и обработки данных. Эти методы могут использоваться для обучения нейронных сетей, оптимизации алгоритмов и принятия решений на основе данных
                    6
                    .
                    Математика является неотъемлемой частью AI и играет важную роль в развитии и применении искусственного интеллекта. Она используется для создания моделей, обучения нейронных сетей, оптимизации стратегий и принятия решений на основе данных.
                </p>
            </div>
        </div>
    )
}