import React  from "react";
import {assets} from "../assets/assets.js";
import {useNavigate} from "react-router-dom";

const Navbar = () => {
    const navigate = useNavigate()


    return (

        < >

            <div className='w-full flex justify-between items-center font-semibold'>
                <div className="flex items-center gap-2">
                    <img onClick={()=> navigate(-1)} className='w-8 bg-red-600 p-2 rounded-full cursor-pointer' src={assets.arrow_left} alt="a.left"/>
                    <img onClick={()=> navigate(1)} className='w-8 bg-green-600 p-2 rounded-full cursor-pointer' src={assets.arrow_right} alt="a.right"/>

                </div>
                <div className='flex items-center gap-4'>
                    <p className='bg-yellow-300 text-black text-[15px] px-4 py-1 rounded-full hidden md:block cursor-pointer' >Получи Premium</p>
                    <p className='bg-blue-800 py-1 px-3 rounded-full text-[15px] cursor-pointer'>Установи Приложение</p>
                    <p className='bg-green-500 text-black w-7 h-7 rounded-full flex items-center justify-center'>J</p>
                </div>
            </div>
            <div className='flex items-center gap-2 mt-4'>
                <p className='bg-white text-black px-4 py-1 rounded-full cursor-pointer'>Всё</p>
                <p className='bg-black px-4py-1 rounded-full cursor-pointer'>Музыка</p>
                <p className='bg-black px-4py-1 rounded-full cursor-pointer'>Подкасты</p>
            </div>
        </>
    )
}

export default Navbar