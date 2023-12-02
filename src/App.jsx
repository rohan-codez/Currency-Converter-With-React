import { motion } from "framer-motion";
import { InputBox, Header } from './components';
import useCurrencyInfo from './hooks/useCurrencyInfo'
import { useState } from "react";
import backgroundImage from "./backgroundImage.png"

function App() {

  const [amount, setAmount] = useState()
  const [convertedAmount, setConvertedAmount] = useState()
  const [from, setFrom] = useState('usd')
  const [to, setTo] = useState('pkr')

  const currencyInfo = useCurrencyInfo(from)

  const options = Object.keys(currencyInfo)

  const swapHandler = () => {
    setTo(from)
    setFrom(to)
    setAmount(convertedAmount)
    setConvertedAmount(amount)
  }

  const convertHandler = () => {
    setConvertedAmount(amount * currencyInfo[to])
  }

  return (
    <>

      <div
        className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat overflow-hidden relative"
        style={{
          backgroundImage: `url(${backgroundImage})`,
        }}>

        <Header />

        <div className='css-bounding'>
          <motion.div className="w-full"
            initial={{ y: 350 }} animate={{ y: 0 }} transition={{ delay: 1.4, duration: 0.7, ease: 'easeInOut' }}>
            <div className="w-full max-w-md mx-auto  rounded-lg p-5 backdrop-blur-sm bg-white/25">
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  convertHandler()
                }}
              >
                <div className="w-full mb-1">

                  <InputBox
                    label="From"
                    amount={amount}
                    onAmountChange={(amount) => setAmount(amount)}
                    currencyOptions={options}
                    onCurrencyChange={(currency) => setAmount(amount)}
                    selectCurrency={from}
                  />

                </div>
                <div className="relative w-full h-0.5">
                  <button
                    onClick={swapHandler}
                    type="button"
                    className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md css-bg-lion text-black font-medium px-3 py-1"
                  >
                    Swap
                  </button>
                </div>
                <div className="w-full mt-1 mb-4">

                  <InputBox
                    label="To"
                    amount={Number(convertedAmount).toFixed(2)}
                    currencyOptions={options}
                    onCurrencyChange={(currency) => setTo(currency)}
                    selectCurrency={to}
                    amountDisable
                  />

                </div>
                <motion.button type="submit" className="w-full css-bg-lion text-black font-medium px-4 py-3 rounded-lg"
                  whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
                  Convert {from.toUpperCase()} to {to.toUpperCase()}
                </motion.button>
              </form>
            </div>
          </motion.div>
        </div>
      </div >
    </>
  )
}

export default App
