
export function WeatherUI(){
    return(
        <>
            <div className="flex flex-col gap-4 items-center justify-center bg-purple-500 text-white w-96 px4 py-2 rounded-lg">
                <div><h1 className='text-2xl font-semibold bg-indigo-500 px-32 py-2'>Wheather</h1></div>
                <div className='w-72 rounded-lg '>
                        <input type="text" className='py-1 px-6 rounded-tl-xl rounded-bl-xl'/>
                        <button className=' bg-white top-[109px] left-80 px-4 py-1 text-black rounded-tr-xl rounded-br-xl' type="submit"><i className='fa fa-search'></i></button>
                </div>
                <div>
                    <img src="" alt="" />
                    <p></p>
                </div>
                <div className='flex gap-4 items-center justify-center'>
                   <div>رطوبت</div> 
                   <div>فشار</div> 
                   <div>دما</div> 
                </div>
            </div>
        </>
)}