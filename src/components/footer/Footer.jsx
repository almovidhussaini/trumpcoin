import React from 'react';
import manwithcoat from '../../assets/icons/manwithcoat.png'
import manwithcoatright from '../../assets/icons/manwithcoatright.png'
import footericon from '../../assets/icons/footericon.png'
import facebook from '../../assets/icons/Facebook.png'
import linkdin from '../../assets/icons/linkedin.png'
import youtube from '../../assets/icons/Youtube.png'
import instagram from '../../assets/icons/Instagram.png'

const Footer =()  =>{
    return (
        <div className='bg-[#77C1FE] flex flex-col justify-center items-center p-2'>
            <h1 className='pt-16 text-[#722E06] mb-10' >UPSKILL FOR A BETTER FUTURE</h1>

            <div className='grid grid-cols-1 md:grid-cols-4 px-24 ' style={{ borderBottom: "1px solid grey", width: "90%" }}>
                <div>
                    <img src={manwithcoat} width="240px" height="310px"/>
                </div>
                <div className='col-span-2 pt-11 flex flex-col items-center px-10'>
                    <h1 style={{fontFamily:'Abhaya Libre'}} className='text-4xl text-[#722E06]'>Request More Information</h1>
                    <p className='text-center my-10 text-[#722E06]'>Lift Media, LLC is a clinical stage healthcare company which is developing a unique</p>
                    <button className='bg-[#77AD4B] px-6 py-2 text-white rounded-xl'>Contact us</button>
                </div>

                <div>
                <img src={manwithcoatright} width="240px" height="310px"/>
                </div>

            </div>
            <div className='w-full'>
                <p className='text-center mt-6 text-[#742F06]'>2019 Lift Media LLC</p>
                <div className='grid  grid-cols-1 md:grid-cols-3'>
                    <div className='flex justify-center'>
                        <img src={footericon} height="82px" width="64px"/>
                    </div>
                    <div className='flex gap-2 justify-center items-center text-[#742F06]'>
                        <p className="cursor-pointer">Team</p>
                        <p className="cursor-pointer">Case Studies</p>
                        <p className="cursor-pointer">Publications</p>
                    </div>
                    <div className='flex justify-center gap-3 items-center'>
                    <div>
                        <img src={linkdin} height="40px" width="40px"/>
                        </div>
                        <div>
                        <img src={facebook} height="40px" width="40px"/>
                        </div>
                        <div>
                        <img src={instagram} height="40px" width="40px"/>
                        </div>
                        <div>
                        <img src={youtube} height="40px" width="40px"/>
                        </div>

                    </div>

                </div>
            </div>
        </div>
    );
}

export default Footer;