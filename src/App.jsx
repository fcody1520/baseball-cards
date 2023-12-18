import playerData from './playerData'
import { useState } from 'react';



function BaseballCard(props) {
  let [showPicture, setShowPicture] = useState(true)
  
  let statsDisplay = Object.entries(props.stats).map(([statName, statValue]) => 
    <p key={statName}>
      {statName}:{statValue}
    </p>
  )

  function toggleCard(){
    setShowPicture(!showPicture)
  }

  return (
    <div className="card" onClick={toggleCard}>
     {showPicture 
        ? <>
          <h2>{props.name}</h2>
          <img src={props.imgUrl} alt={props.name} />
        </>
        : <>
            <h2>{props.name}</h2>
            <p>{props.team}</p>
            <p>{props.position}</p>
            {statsDisplay}
        </>
      }
    </div>
  );
}

function App() {
  const cards = playerData.map((player) => (<BaseballCard
  name= {player.name}
  team={player.team}
  position={player.position}
  stats={player.stats}
  imgUrl={player.imgUrl}
  key={player.cardId}
  />));
  return <>{cards}</>;
}

export default App;
