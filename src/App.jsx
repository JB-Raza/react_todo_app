import { useEffect, useState } from 'react'
import './App.css'
import Card from './components/Card'
import Header from './components/Header'
import { useSelector, useDispatch } from 'react-redux'
import { addCard, delCard } from './redux/CardSlice'

function App() {

  const [darkTheme, setDarkTheme] = useState(false)

  useEffect(() => {
    localStorage.setItem("darkTheme", JSON.stringify(darkTheme))
  })
  
  const cards = useSelector(state => state.cards)
  const dispatch = useDispatch()

  useEffect(() => {
    localStorage.setItem("cards", JSON.stringify(cards))
  }, [cards])

  return (
    <div className={`${darkTheme ? "dark" : ""}`}>
      <div className='md:flex dark:bg-[#181818] dark:text-[#D1D1D1]'>
        <Header />
        <div className="w-full m-5">
          {/* filters and Add button*/}
          <div className='flex filters'>
            <button
              className='bg-purple-600 hover:bg-purple-700 dark:bg-slate-800 dark:hover:bg-slate-900 hover:scale-105 transition-all duration-150 h-9 px-6 rounded-full text-white outline-none'
              onClick={() => setDarkTheme(prev => !prev)}
            >{darkTheme ? "Light Theme" : "Dark Theme"}</button>

            {/* all filters comes here */}
            <button
              className='bg-purple-600 hover:bg-purple-700 dark:bg-slate-800 dark:hover:bg-slate-900 hover:scale-105 transition-all duration-150 h-9 px-6 rounded-full text-white ms-auto me-3'
              onClick={() => dispatch(addCard())}
            >
              ADD
            </button>
          </div>
          <hr className='my-3 font-bold' />

          {/* all cards */}
          {cards.map(card => (
            <div className='flex p-0 bg-purple-700 rounded-md my-2  dark:bg-[#232323]' key={card.id}>

              <Card card={card} />

              {/* del card btn */}
              <button
                onClick={() => dispatch(delCard(card.id))}
                className='outline-none px-2 py-1 text-white hover:bg-purple-800 hover:text-lg transition-all duration-150 rounded-r-md'>Delete</button>
            </div>
          ))}

        </div>
      </div>
    </div>

  )
}

export default App


// add card--------
// delete card------
// store card data --------
// update card -------
// store data in localStorage ------

// dark theme -------
// working on filters   ??


// Filters like completed, pending and none

{/* <div className='dark:hover:text-white'>
              <input className='cursor-pointer' type="radio" name='taskStatus' id='completedTask' />
              <label htmlFor="completedTask" className='cursor-pointer my-auto mx-1'>Completed</label>
            </div>
            <div className='ms-4 dark:hover:text-white'>
              <input className='cursor-pointer' type="radio" name='taskStatus' id='pendingTask' />
              <label htmlFor="pendingTask" className='cursor-pointer my-auto mx-1'>Pending</label>
            </div>
            <div className='ms-4 dark:hover:text-white'>
              <input className='cursor-pointer' type="radio" name='taskStatus' defaultChecked={true} id='none' />
              <label htmlFor="none" className='cursor-pointer my-auto mx-1'>None</label>
            </div> */}