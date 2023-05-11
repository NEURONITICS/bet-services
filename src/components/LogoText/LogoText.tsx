import classNames from 'classnames';

interface LogoHeader {
    className?: string;
    text: string;
}
const LogoText = ({ className, text }: LogoHeader) => {
    return (
        <h1 className={(classNames("font-bold text-[56px] leading-[44px] tracking-[2%] lg:text-[100px] lg:leading-[100px] text-[#D61727] inline-block", `${className}`))}>{text}</h1>
    );
};

export default LogoText;