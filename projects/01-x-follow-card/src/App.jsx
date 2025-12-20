import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard.jsx'

const users = [
  {
    userName: 'faker',
    name: 'T1 Faker',
    isFollowing: true
  },
  {
    userName: 'Cristiano',
    name: 'Cristiano Ronaldo',
    isFollowing: false
  },
  {
    userName: 'OnePieceAnime',
    name: 'One Piece',
    isFollowing: true
  }
]

export function App () {
  return (
    <section className='App'>
      {
        users.map(({ userName, name, isFollowing }) => (
          <TwitterFollowCard
            key={userName}
            userName={userName}
            initialIsFollowing={isFollowing}
          >
            {name}
          </TwitterFollowCard>
        ))
      }
    </section>
  )
}