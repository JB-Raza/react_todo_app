import React, { useState, useEffect } from 'react'
import {useDispatch} from 'react-redux'
import {updateCard} from '../redux/CardSlice'

function Card({card}) {
  const [isChecked, setIsChecked] = useState(false)

  const dispatch = useDispatch()
  
  const handleCardChange = (e) => {    
    const updatedText = e.target.value
    dispatch(updateCard({...card, cardText: updatedText}))
  }

  const handleCheckState = () => {
    const updatedCheck = !isChecked
    setIsChecked(updatedCheck)
    dispatch(updateCard({...card, checkState: updatedCheck}))
  }

  
  return (
    <div className={`${card.checkState?"bg-gray-500":"bg-transparent"} flex w-full text-white rounded-l-md`}>
      <input
        type="text"
        placeholder='Add Todo'
        value={card.cardText}
        onChange={handleCardChange}
        className={`${card.checkState?"line-through":""} focus:text-lg bg-transparent transition-all rounded-md duration-200 px-2 py-3 w-full outline-none `}
      />
      <input type="checkbox" className='cursor-pointer outline-none scale-150 me-3'
        onChange={handleCheckState}
        checked={card.checkState}
      />

    </div>
  )
}

export default Card

    // cardInfo(card.id, card.checkState, card.description)
