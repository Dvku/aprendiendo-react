import "./App.css"
import { XFollowCard } from "./XFollowCard"

const users = [
    {
        userName: "RamiMalekOnline",
        name: "Rami Malek",
        isFollowing: true
    },
    {
        userName: "Boichi_Bo1",
        name: "Boichi",
        isFollowing: false
    },
    {
        userName: "reach_ina",
        name: "Riichiro Inagaki",
        isFollowing: true
    },
    {
        userName: "gorillaz",
        name: "gorillaz",
        isFollowing: false
    }
]

export function App () {
    
    return (
        <section className="App">
            {
                users.map(({ userName, name, isFollowing }) => (
                    <XFollowCard
                        key={userName}
                        userName={userName}
                        initialIsFollowing={isFollowing}               
                    >
                        {name}
                    </XFollowCard>
                    
                    
                ))
            }
        </section>
    )
}