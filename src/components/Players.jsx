import React, { useEffect } from 'react'

export default function Players({ choice, winner, timer, truePlayers, setTruePlayers }) {


    const pickSide = () => {
        if (Math.random() > 0.5) {
            return "left";
        } else {
            return "right";
        }
    };

    const createPlayers = num => {
        const players = [];
        for (let i = 1; i <= num; i++) {
            players.push({
                playerName: `player${i}`,
                colour: i,
                choice: pickSide(),
            });
        }
        setTruePlayers(players);
    };

    useEffect(() => {
        if (timer === 0) {
            const result = truePlayers.filter(player => player.choice === winner);
            setTruePlayers(result)
        }

    }, [timer, winner])



    return (
        <div>
            <div className={choice}>You</div>
            {truePlayers.map(player => {
                return (
                    <div className={player.choice} key={player.colour}>
                        <div>{player.playerName}</div>
                    </div>)
            })
            }
            <button onClick={() => {
                createPlayers(40)
            }}>
                Players
            </button>
        </div>
    )
}
