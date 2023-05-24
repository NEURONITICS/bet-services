import Image from "next/image";
import { useRouter } from "next/router";
import { logEvent } from "../../../analytics";
import LogoText from "../LogoText/LogoText";

const Header = () => {
    const router = useRouter();
    const handleClick = () => {
        logEvent('Button', 'Click');
        router.push('https://www.google.com')
    };
    return (
        <section>
            <div style={{ background: 'linear-gradient(277.47deg, #00243B -52.56%, #00E5FF 133.61%)' }} className='w-[100%] lg:h-[424px] h-[123px] bg-no-repeat bg-cover relative'>
                <div className='px-[16px]  lg:px-[50px] 2xl:px-[96px] py-[12px]'>
                    <div className='flex gap-[8px] lg:gap-[24px]  lg:py-[56px] items-center'>
                        <Image src="/icons/logo.svg" alt="logo" width={120} height={120} className='w-[40px] h-[40px] lg:w-[120px] lg:h-[120px]' />
                        <LogoText text="BetServices.GR" />
                    </div>
                </div>
                <img onClick={handleClick} src="/images/En_Gr_Gif_Banner.gif" alt="banner" className="h-[110px] lg:h-[400px] w-[100%] px-[16px] lg:px-[60px] 2xl:px-[96px] absolute bottom-[-50px] lg:bottom-[-202px] right-0" />
            </div>
        </section>
    );
};

export default Header;