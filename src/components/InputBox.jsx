import React,{useId} from 'react'

function InputBox({
    loc,
    amount,
    amountDisabled = false,
    amountOnChange,
    selectedCurrency,
    currencyOnChange,
    currencyOptions = [],
}) {
  let idd = useId();
  return (
    <div className='flex  bg-white p-5 w-96 rounded-xl mb-5'>
        <div className='flex flex-col pr-3'>
            <div>
                <label htmlFor={idd} className='text-gray-400 pb-5 block '>{loc}</label>
            </div>
            <div>
                <input 
                className=''
                type="text"
                name="box" 
                id={idd}
                value={amount}
                onChange={(e)=>{amountOnChange && amountOnChange(e.target.value)}}
                disabled={amountDisabled}
                />
            </div>
        </div>
        
        <div>
            <p className='text-gray-400 pb-5'>Currency Type</p>
            <div>
                <select 
                 value={selectedCurrency}
                 onChange={e=>{currencyOnChange && currencyOnChange(e.target.value)}}
                 >

                 {currencyOptions.map((currency) => (
                 <option key={currency} value={currency}>{currency}</option> ))}

                </select>
            </div>
        </div>
    </div>
  )
}

export default InputBox
