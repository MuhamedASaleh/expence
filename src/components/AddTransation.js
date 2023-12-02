import { useState } from "react"
export const AddTransation = () => {
    const [text, setText] = useState('')
    const [amount, setAmount] = useState(0)

    const updateText = (e) => {
        setText(e.target.value)
        console.log(text)
    }
    const updateAmount = (e) => {
        setAmount(e.target.value)
        console.log(amount)
    }
    return (
        <>
            <h3>Add new transation</h3>
            <form>
                <div>
                    <label>text</label>
                    <input type="text" value={text} onChange={updateText} placeholder="Enter text ..." />
                </div>
                <div>
                    <label>amount <br /> ( negative - expence , positive - income )</label>
                    <input type="number" value={amount} onChange={updateAmount} placeholder="Enter amount ..." />
                </div>
                <button>Add transation</button>
            </form>
        </>
    )
}
