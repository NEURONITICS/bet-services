
interface ButtonProps {
    text: React.ReactNode;
    className?: string;
    width?: number;
    height?: number;
}
const Button = ({ text, className, width, height }: ButtonProps) => {
    return (
        <button className='bg-primary w-[343px] h-[60px] lg:w-[530px] lg:h-[60px] text-[#FFFFFF] font-bold text-[16px] leading-[24px] font-secondary'>
            {text}
        </button>
    );
};

export default Button;