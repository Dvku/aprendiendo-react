export function XFollowCard ({ userName, name, isFollowing }) {
    console.log(isFollowing)

    return (
        <article className="x-followCard">

            <header className="x-followCard-header">
                <img 
                    className="x-followCard-avatar"
                    alt="Avatar de Rami Malek" 
                    src={`https://unavatar.io/x/${userName}`} />

                <div className="x-followCard-info">
                    <strong>{name}</strong>
                    <span className="x-followCard-infoUserName">@{userName}</span>
                </div>

            </header>

            <aside>
                <button className="x-followCard-button">
                    Seguir
                </button>
            </aside>

        </article>
    )
}