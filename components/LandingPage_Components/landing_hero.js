import React from 'react'
import { SVG_ICONS } from '@/Assets/Icons/IconsCollections'
const { Download } = SVG_ICONS

function Landing_Hero() {
    return (
        <div className='mt-28 flex justify-between px-32 pb-12 gap-12'>
            <div className='flex-1'>
                <div>
                    <p className='m-0 mb-0 text-7xl font-[family-name:--default-header-font-family] font-medium'>Hello!</p>
                    <p className='m-0 mb-6 text-7xl font-[family-name:--default-header-font-family] font-medium'>I am Prahasta Giri</p>
                    <p className='mb-8 w-2/3 text-base font-[family-name:--default-font-family] font-light'>
                        I cook 3-minutes ramen in 2 minutes just to prove that I can have my own rule and walking this earth proudly with my standard.
                    </p>
                    {/* <p className='m-0 mb-6 text-7xl font-[family-name:--default-header-font-family] font-medium'>Prahasta Giri</p> */}
                    {/* <div className='flex gap-2 rounded-lg px-4 py-2 w-fit bg-white/30 backdrop-blur-sm'>
                <div className='w-12 overflow-hidden aspect-square rounded-lg'>
                  <img src="https://images.pexels.com/photos/33018576/pexels-photo-33018576.jpeg" />
                </div>
                <div>
                  <p className='m-0 text-lg font-[family-name:--default-font-family] font-medium'>Software Engineer</p>
                  <p className='m-0 text-base font-[family-name:--default-font-family]'>Front-End Developer</p>
                </div>
              </div> */}
                </div>
            </div>
            <div className='flex-1'>
                <article className='flex gap-6 px-6 py-4 w-fit bg-[--bg-one] backdrop-blur-xl rounded-2xl'>
                    <section className='relative'>
                        <div className='w-[160px] overflow-hidden aspect-square rounded-full m-2'>
                            <img src="https://images.pexels.com/photos/33018576/pexels-photo-33018576.jpeg" />
                        </div>
                        {/* <button className='bg-[--bg-four] rounded-full aspect-square w-fit px-2 absolute top-2 right-2'>
                  <p className='text-base font-[family-name:--default-font-family] m-0 font-medium text-[--bg-one]'>CV</p>
                </button> */}
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
                            <button className='bg-transparent border-2 border-[--bg-four] rounded-md p-2 w-fit'>
                                <p className='text-sm font-[family-name:--default-font-family] m-0 font-medium text-[--bg-four]'>Look at my work</p>
                            </button>
                        </nav>
                    </section>
                </article>
            </div>
        </div>
    )
}

export default Landing_Hero