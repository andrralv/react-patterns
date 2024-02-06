import { createContext, Dispatch, SetStateAction } from "react";

interface Context {
  coin: 'heads' | 'tails',
  setCoin:  Dispatch<SetStateAction<'heads' | 'tails'>>;
}

const CoinContext = createContext<Context>({
  coin: 'heads',
  setCoin: () => {}
})

export default CoinContext;