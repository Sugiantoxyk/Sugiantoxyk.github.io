
const Notification = ({text}) => {
    return (
        <div className="bg-white pl-8 pr-8 pt-2 pb-2 rounded-lg">
            <p className="relative text-black select-none">
                {text}
            </p>
        </div>
    )
};

export default Notification;