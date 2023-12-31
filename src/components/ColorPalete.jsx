
const ColorPalette = ({data, index, handleClick, selected}) => {
    return (
        <div className="flex flex-row gap-2">
            <div 
                className={`h-9 aspect-square rounded-full cursor-pointer hover:border-none bg-gradient-to-tr ${data.from} ${data.to} ${
                    selected !== index && `border-2`
                }`}
                onClick={(e) => {
                    e.stopPropagation();
                    handleClick(index);
                }}
            />
        </div>
    )
};

export default ColorPalette;