import Button from "@/components/Button/Button";
import classNames from 'classnames';
import Image from "next/image";
import { useRouter } from "next/router";
import { logEvent } from '../../../analytics';


const Home = () => {
  const router = useRouter();
  const pStyle = "font-bold text-[20px] leading-[30px] text-gray-700 lg:text-[24px] lg:leading-[36px] "
  const ButtonText = <p>Κάνε κλικ εδώ για την <span className="ml-[5px] font-bold">BETSERVICES.GR</span></p>

  const handleClick = () => {
    logEvent('Button', 'Click');
    router.push('https://www.bbc.com')
  };

  return (
    <div className="bg-[url('/images/home-bg-sm.png')] lg:bg-[url('/images/home-bg.png')] w-[100%] h-auto bg-no-repeat bg-cover md:bg-[center_bottom_-18rem] lg:bg-[center_bottom_-14rem]">
      <div className="pt-[75px] pb-[25px] lg:pt-[275px] lg:pb-[120px]">
        <div className="max-w-[343px] lg:max-w-[540px] h-auto mx-auto container">
          <div className="flex flex-col items-center gap-[8px] text-center">
            <Image onClick={handleClick} src="/icons/fonbet.svg" alt="logo" width={280} height={280} className="w-[130px] h-[130px] lg:w-[280px] lg:h-[280px]" />
            <p className={classNames(`${pStyle}`, 'mt-[8px] lg:mt-[16px] w-[328px] lg:w-[540px]')}>Παίξε υπεύθυνα στην αγαπημένη σου διαδικτυακή στοιχηματική πλατφόρμα.</p>
            <p className={classNames(`${pStyle}`)}>Ξεκίνα τώρα!</p>
          </div>
          <div className="flex flex-col items-center">
            <div onClick={handleClick} className="py-[36px] lg:py-[48px]"><Button text={ButtonText} /></div>
            <Image src="/icons/glob-icon.svg" alt="global icon" width={80} height={80} className="w-[60] h-[60] lg:w-[80px] lg:h-[80px] lg:mt-[12px]" />
            <a href="www.top-channel.tv"></a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;