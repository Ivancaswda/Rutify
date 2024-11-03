import React from "react";
import {assets} from "../assets/assets.js";
import {useNavigate} from "react-router-dom";

const Sidebar = () => {

    const navigate = useNavigate()


    return (
        <div className='w-[25%] h-full p-2 flex-col gap-2 text-white hidden lg:flex' >
            <div className='bg-[#121212] h-[15%] rounded flex flex-col justify-around '>
                <div onClick={()=>navigate('/')} className='flex items-center gap-3 pl-8 cursor-pointer hover:bg-[#ffffff2b]  '>
                    <img className='w-6' src={assets.home_icon} alt=""/>
                    <p className='font-bold'>Главная</p>
                </div>

                <div className='flex items-center gap-3 pl-8 cursor-pointer hover:bg-[#ffffff2b]'>
                    <img className='w-6' src={assets.search_icon} alt=""/>
                    <p className='font-bold'>Найти</p>
                </div>
            </div>
            <div className='bg-[#121212] h-[85%] rounded'>

                <div className='p-3 flex item-center justify-between cursor-pointer'>
                    <div className='flex items-center gap-3'>
                        <img className='w-8' src={assets.stack_icon} alt=""/>
                        <p className='font-semibold'>Твоя Библиотека</p>
                    </div>
                    <div className='flex items-center gap-3'>
                        <img className='w-5' src={assets.arrow_icon} alt="arrow"/>
                        <img className='w-5 bg-blue' src={assets.plus_icon} alt="plus"/>
                    </div>
                </div>
                <div
                    className='p-4 bg-[#242424] m-2 rounded font-semibold flex flex-col items-start justify-start gap-1 pl-4'>
                    <h1>Создай свой первый плэйлист</h1>
                    <p className='font-light'>Мы поможем тебе</p>
                    <button className='px-4 py-1.5 bg-white text-[15px] text-black rounded-full mt-4'>Создать Плэйлист
                    </button>

                </div>
                <div
                    className='p-4 bg-[#242424] m-2 rounded font-semibold flex flex-col items-start justify-start gap-1 pl-4'>
                    <h1>Давай найдем подкаст чтобы продолжить </h1>
                    <p className='font-light'>мы сохраним твой подкаст на новый эпизод</p>
                    <button className='px-4 py-1.5 bg-white text-[15px] text-black rounded-full mt-4'>Просмотреть подкасты
                    </button>

                </div>
            </div>

        </div>
    )
}

export default Sidebar