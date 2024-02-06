import { useContext } from "react";
import CoinContext from "../context/CoinContext";

export default function ContextTrigger() {
  const coins = useContext(CoinContext);

  return (
    <div style={{ marginTop: '20px', cursor: 'pointer' }} 
         onClick={() => coins.setCoin(coins.coin === 'heads' ? 'tails' : 'heads')}>
      {coins.coin}
      </div>)
}