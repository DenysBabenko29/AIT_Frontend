import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../redux/store';

const Sandwich: React.FC = (): JSX.Element => {

  const sandwich = useSelector((state: RootState) => state.sandwich.value);
  const dispatch = useDispatch()

  const addIngredient = (ingredient: string):void => {
    dispatch({ type: "addIngredient", payload: ingredient })
  }
  const clear = ():void => {
    dispatch({ type: 'clear' })
  }
  

  return (
    <>
    <button type="button" onClick={() => addIngredient("Хлеб")}>Хлеб</button>
    <button type="button" onClick={() => addIngredient("Колбаса")}>Колбаса</button>
    <button type="button" onClick={() => addIngredient("Сыр")}>Сыр</button>
    <button type="button" onClick={clear}>Clear</button>
    <div>
      {sandwich.map((item, index) => (
        <p key={index}>{item}</p>
      ))}
    </div>
    
    </>
  )
}

export default Sandwich