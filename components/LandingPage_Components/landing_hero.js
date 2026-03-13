import React from 'react'
import { SVG_ICONS } from '@/Assets/Icons/IconsCollections'
const { Download } = SVG_ICONS

function Landing_Hero() {
    const scrollToWorks = () => {
        const targetSection = document.getElementById('project');
        targetSection.scrollIntoView({
            behavior: 'smooth', // Smooth animation
            block: 'start'      // Aligns the top of the element to the top of the viewport
        });
        
    }
    return (
        <div className='pt-6 flex flex-col md:flex-row justify-between px-6 md:px-32 pb-12 gap-4 md:gap-12 h-screen'>
            <div className='flex-1 flex justify-center items-center'>
                <div className='text-7xl font-[family-name:--default-header-font-family] font-medium'>
                    <p className='m-0 mb-0'>Hello!</p>
                    <p className='m-0 mb-6'>I am Prahasta Giri</p>
                    <p className='mb-8 md:w-2/3 w-full text-base font-[family-name:--default-font-family] font-light'>
                        I cook 3-minutes ramen in 2 minutes for I am a rebel and a nuisance.
                    </p>
                </div>
            </div>
            <div className='flex-1 flex justify-center items-center'>
                <article className='flex flex-col md:flex-row gap-6 px-6 py-4 wd:w-fit bg-[--bg-one] backdrop-blur-xl rounded-2xl w-fit '>
                    <section className='relative'>
                        <div className='w-[160px] overflow-hidden aspect-square rounded-full mx-auto my-2'>
                            <img src="https://images.pexels.com/photos/33018576/pexels-photo-33018576.jpeg" />
                        </div>
                        <button className='bg-[--bg-four] rounded-lg px-2 py-1 flex gap-1 m-auto'>
                            <p className='text-base font-[family-name:--default-font-family] m-0 font-medium text-[--bg-one]'>Resume</p>
                            <Download width={"24"} height={"24"} className="stroke-[--bg-one]" />
                        </button>
                    </section>
                    <section>
                        <div>
                            <header className='border border-b-gray-500 pb-4 mb-4'>
                                <p className='m-0 font-[family-name:--default-font-family] text-lg font-medium'>Prahasta Giri</p>
                                <p className='m-0 font-[family-name:--default-font-family] text-gray-700/50 text-xs'>Web Developer // Front-End Engineer</p>
                            </header>
                            <main className='mb-4'>
                                <table className='table-auto font-[family-name:--default-font-family]'>
                                    <tbody>
                                        <tr>
                                            <td className='w-1/4 text-black/50'>Email</td>
                                            <td>:</td>
                                            <td className='no-underline hover:underline hover:cursor-pointer'>adiprahastagiri18@gmail.com</td>
                                        </tr>
                                        <tr>
                                            <td className='w-1/4 text-black/50'>Phone</td>
                                            <td>:</td>
                                            <td className='no-underline hover:underline hover:cursor-pointer'>+62 87862380144</td>
                                        </tr>
                                        <tr>
                                            <td className='w-1/4 text-black/50'>City</td>
                                            <td>:</td>
                                            <td>Tabanan, Bali, Indonesia</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </main>
                        </div>
                        <nav className='flex justify-between'>
                            <button className='bg-transparent border-2 border-[--bg-four] rounded-md p-2 w-fit'>
                                <p className='text-sm font-[family-name:--default-font-family] m-0 font-medium text-[--bg-four]'>Get in touch</p>
                            </button>
                            <button className='bg-transparent border-2 border-[--bg-four] rounded-md p-2 w-fit' onClick={scrollToWorks}>
                                <p className='text-sm font-[family-name:--default-font-family] m-0 font-medium text-[--bg-four]'>Look at my works</p>
                            </button>
                        </nav>
                    </section>
                </article>
            </div>
        </div>
    )
}

export default Landing_Hero