
const Notification = ({text}) => {
    return (
        <div className="bg-white w-fit px-8 py-2 rounded-lg text-center">
            <p className="relative lg:text-[14px] md:text-[14px] sm:text-[12px] text-[12px] text-black select-none">
                {text}
            </p>
        </div>
    )
};

export default Notification;