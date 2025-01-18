import { useState } from "react"
import InputBox from "./components/InputBox"
import useCurrencyData from "./hooks/useCurrencyData"

function App() {
  const [From,setFrom] = useState('usd')
  const [To,setTo] = useState('inr')
  const [amount,setAmount] = useState(0)
  const [convetedAmount,setConvetedAmount] = useState(0)

  let options = useCurrencyData(From)
  
  let optionss = Object.keys(options)

  let convert = () => {setConvetedAmount(amount * options[To])}

  return (
    <div className=" bg-gradient-to-r from-blue-900 to-blue-500 h-screen w-screen flex justify-center items-center">
      <form onSubmit={(e) => {
        e.preventDefault()
        convert()
      }}>
      <div  className="flex flex-col backdrop-blur-lg bg-white/30 p-8 rounded-xl shadow-lg border border-white/20">
      <InputBox
       loc = "From"
       amount = {amount}
       amountOnChange = {(amount) => setAmount(amount)}
       selectedCurrency = {From}
       currencyOnChange = {(currency) => setFrom(currency)}
       currencyOptions = {optionss}
      />

      <InputBox
       loc = "To"
       amount = {convetedAmount}
       amountDisabled
       selectedCurrency = {To}
       currencyOnChange = {(currency) => setTo(currency)}
       currencyOptions = {optionss}
      />

      <button type="submit" className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 " >
        convert {From.toUpperCase()} to {To.toUpperCase()}
        </button>
        </div>
      </form>
    </div>
  )
}

export default App
