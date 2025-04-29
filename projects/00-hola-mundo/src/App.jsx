import "./App.css"
import { XFollowCard } from "./XFollowCard"

export function App () {
    
    return (
        <section className="App">
            <XFollowCard isFollowing userName="RamiMalekOnline" name="Rami Malek" />
            <XFollowCard isFollowing={false} userName="Boichi_Bo1" name="Boichi" />
            <XFollowCard isFollowing userName="elonmusk" name="Elon Musk" />
        </section>
    )
}