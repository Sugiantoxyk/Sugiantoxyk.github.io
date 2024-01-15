
import styles from '../styles/styles';
import Button from './Button';

const GameMenu = ({data, startGame}) => (
    <div className="gameMenu-shade absolute h-screen w-[100%] inset-0 text-center flex z-20 select-none">
        <div className="m-auto bg-white py-10 px-20 rounded-lg">
            <h1 className={`${styles.gameMenuTitle} mb-5`}>{data.title}</h1>
            {data.items.map((item) => {
                return <Button text={item.text} href={item.ref} type={2} handleClick={item.key === "2p" || item.key === "1p" ? ()=>startGame(item.key) : ()=>{}}/>
            })}
            <p className="text-secondary-white mt-4 md:text-[16px] text-[12px]">{data.footer}</p>
        </div>
    </div>
  );
  
  export default GameMenu;