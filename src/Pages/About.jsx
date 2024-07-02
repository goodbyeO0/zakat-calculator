import React from 'react'

function About() {
    return (
        <>
            <div className='w-full h-screen bg-[#F5F5F7]'>

                <div className='flex justify-center flex-col w-full bg-[#F5F5F7]'>
                    <div className='p-4 mt-8 text-5xl text-center'>Temui <span className='font-bold'>pasukan</span> kami.</div>
                    <div className='flex flex-row items-center justify-center w-10/12 mx-auto'>
                        <div className='flex flex-col bg-[#FFFFFF] items-center w-[250px] h-[300px] m-8 rounded-xl shadow-2xl transition-transform duration-300 hover:scale-105'> {/* Added transition and hover effect */}
                            <div>
                                <img src="./src/assets/gambarIzhan.jpg" alt="Izhan" className='object-cover m-4' style={{ width: '150px', height: '150px', borderRadius: '50%' }} />
                            </div>
                            <div className='mt-3 text-lg font-semibold text-center'>IZHAN</div>
                            <div className='text-lg font-semibold text-center'>ZIKRY</div>
                            <div className='text-xs text-center text-[#7f7f7f] font-semibold p-2'>TEAM LEADER</div>
                        </div>
                        <div className='flex flex-col bg-[#FFFFFF] items-center w-[250px] h-[300px] m-8 rounded-xl shadow-2xl transition-transform duration-300 hover:scale-105'> {/* Added transition and hover effect */}
                            <div>
                                <img src="./src/assets/gambarHariz.jpeg" alt="hariz" className='object-cover m-4' style={{ width: '150px', height: '150px', borderRadius: '50%' }} />
                            </div>
                            <div className='mt-3 text-lg font-semibold text-center'>HARIZ</div>
                            <div className='text-lg font-semibold text-center'>HAKIM</div>
                            <div className='text-xs text-center text-[#7f7f7f] font-semibold p-2'>SOFTWARE DEVELOPER</div>
                        </div>
                        <div className='flex flex-col bg-[#FFFFFF] items-center w-[250px] h-[300px] m-8 rounded-xl shadow-2xl transition-transform duration-300 hover:scale-105'> {/* Added transition and hover effect */}
                            <div>
                                <img src="./src/assets/gambarDaus.jpeg" alt="Izhan" className='object-cover m-4' style={{ width: '150px', height: '150px', borderRadius: '50%' }} />
                            </div>
                            <div className='mt-3 text-lg font-semibold text-center'>FIRDAUS</div>
                            <div className='text-lg font-semibold text-center'>ALI</div>
                            <div className='text-xs text-center text-[#7f7f7f] font-semibold p-2'>UI/UX DESIGNER</div>
                        </div>
                        <div className='flex flex-col bg-[#FFFFFF] items-center w-[250px] h-[300px] m-8 rounded-xl shadow-2xl transition-transform duration-300 hover:scale-105'> {/* Added transition and hover effect */}
                            <div>
                                <img src="./src/assets/gambarIzhan.jpg" alt="Izhan" className='object-cover m-4' style={{ width: '150px', height: '150px', borderRadius: '50%' }} />
                            </div>
                            <div className='mt-3 text-lg font-semibold text-center'>AFIQ</div>
                            <div className='text-lg font-semibold text-center'>DANIAL</div>
                            <div className='text-xs text-center text-[#7f7f7f] font-semibold p-2'>SOFTWARE TESTER</div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default About