import Image from 'next/image';
import { socialIcon } from './constant';

interface DataType {
    img: string;
    redirect: string;
}
const Footer = () => {
    return (
        <div className='w-[100%] h-[114px] lg:h-[230px] bg-black '>
            <div className='flex justify-center gap-[16px]'>
                {socialIcon.map((icon: DataType, index) => (
                    <div key={index} className='mt-[24px] lg:mt-[75px]'>
                        <Image src={icon.img} alt='social icon' width={56} height={56} className='w-[32px] h-[32px] lg:w-[56px] lg:h-[56px]' />
                    </div>
                ))}
            </div>
            <p className='font-medium font-secondary text-[12px] leading-[18px] tracking-[-2%] text-center text-white  mt-[16px] lg:mt-[40px] lg:text-[14px] lg:leading-[15.68px]'>Copyright © <a className='text-primary' href=''>Betservices.GR</a>  2023 All right reserved</p>
        </div>
    );
};

export default Footer;