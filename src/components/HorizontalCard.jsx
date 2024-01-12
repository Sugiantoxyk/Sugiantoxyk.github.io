
import { PingLatest } from '.';

const HorizontalCard = ({ url, alt, title, href, index }) => (
    <div className="relative h-[50vh] w-[150px] min-[375px]:w-[200px] min-[425px]:w-[230px] min-[570px]:w-[330px] md:w-[400px] lg:w-[570px] min-[1420px]:w-[830px] overflow-hidden cursor-pointer">
        { index === 0 && <PingLatest />}
        <a href={href} target="_blank" rel="noreferrer" draggable="false">
            <img
                src={url}
                alt={alt}
                draggable="false"
                className="absolute w-full h-full object-cover rounded-[24px]"
            />
            <div className="absolute w-full bottom-0">
                <p className="text-white p-8 lg:text-[50px] md:text-[40px] sm:text-[30px] text-[18px] font-black">
                    {title}
                </p>
            </div>
        </a>
    </div>
  );
  
  export default HorizontalCard;