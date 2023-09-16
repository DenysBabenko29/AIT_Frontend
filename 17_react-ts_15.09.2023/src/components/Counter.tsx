import React, { FC, useState } from 'react'

const Counter: FC = (): JSX.Element => {

    const [ count, setCount ] = useState<number>(0);

    const increment = (): void => {
        setCount(count + 1);
    }


    return (<>
        <h2>Counter: {count}</h2>
        <button onClick={():void => setCount(count - 1)}>Decrement</button>
        <button onClick={increment}>Increment</button>
  </>
  )
}

export default Counter