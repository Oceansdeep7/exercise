import React, {useRef, useState} from 'react';

const BASE64 = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ+/'

const getBinary = (value: number) => {
    return value.toString(2)
}
const binaryToBase64 = (binary: string) => {
    const _arr = binary.split('.')
    return _arr.map((item, index) => {
        const {length} = item
        if (length === 1) {
            return item
        }
        let result = ''
        if (index === 0) {
            for (let i = length - 1; i >= 0; i -= 6) {
                let sum = 0
                for (let j = i; j > i - 6; j--) {
                    if (item[j] === "1") {
                        sum += 2 ** (i - j)
                    }
                }
                result = BASE64[sum] + result
            }
        } else {
            for (let i = 0; i < length; i += 6) {
                let sum = 0
                for (let j = i; j < i + 6; j++) {
                    if (item[j] === "1") {
                        sum += 2 ** (j - i)
                    }
                }
                result = result + BASE64[sum]
            }
        }
        return result
    }).join('.')
}

function App(): JSX.Element {
    const [result, setResult] = useState<string>()
    const inputRef = useRef<HTMLInputElement>(null)
    const handleClick = () => {
        if (!inputRef.current) {
            return
        }
        if (inputRef.current.value === undefined) {
            return
        }
        const value = +inputRef.current.value
        if (Number.isNaN(+value)) {
            return
        }
        setResult(binaryToBase64(getBinary(value)))
    }

    return (
        <>
            <input ref={inputRef} type="number"/>
            <button onClick={handleClick}>转化</button>
            <div>{result}</div>
        </>
    );
}

export default App
