import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../redux/store';

const Sandwich: React.FC = (): JSX.Element => {

  const sandwich = useSelector((state: RootState) => state.sandwich.value);
  const dispatch = useDispatch()

  const addBread = ():void => {
    dispatch({ type: "addBread" })
  }
  const addSausage = ():void => {
    dispatch({ type: "addSausage" })
  }
  const addCheese = ():void => {
    dispatch({ type: "addCheese" })
  }

  return (
    <>
    <button type="button" onClick={addBread}>Хлеб</button>
    <button type="button" onClick={addSausage}>Колбаса</button>
    <button type="button" onClick={addCheese}>Сыр</button>
    <div>
      {sandwich.map((item, index) => (
        <p key={index}>{item}</p>
      ))}
    </div>
    </>
  )
}

export default Sandwich