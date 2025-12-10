import { useEffect, useState } from "react"
import Cards from "./components/Cards"
import "./index.css"
import { fetchCards, type CardData } from "./services/GetCardDatas"

const App = () => {
  const [cards, setCards] = useState<CardData[]>([])
  const [currentCardIndex,setCurrentCardIndex] = useState(0)

  useEffect(()=>{
    fetchCards().then(data => setCards(data))
    
  })

  useEffect(()=>{
    if(currentCardIndex >= cards.length){
      setCurrentCardIndex(0)
    }
  }, [currentCardIndex])

  return (
    <div className="container">
      {
        cards.length === 0 ? <p>FINISHED</p> :
        <Cards {...cards[currentCardIndex]} onNextCard={() => setCurrentCardIndex(currentCardIndex + 1)} id={currentCardIndex} />
      }
      <progress value={currentCardIndex} max={cards.length}></progress>
      <div style={{color: "white"}}>{currentCardIndex}/{cards.length}</div>
    </div>
  )
}

export default App
