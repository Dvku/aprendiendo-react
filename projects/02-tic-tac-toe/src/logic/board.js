import { WINNER_COMBOS } from "../constants"

export const checkWinnerFrom = (boardToCheck) => {
    // revisar todas las combinaciones ganadoras 
    // para ver si X u O fue el ganador
    for (const combo of WINNER_COMBOS) {
      const [a, b, c] = combo
      if (
        boardToCheck[a] && 
        boardToCheck[a] === boardToCheck[b] &&
        boardToCheck[a] === boardToCheck[c]
      ) {
        return boardToCheck[a]
      }
    }

    // si no hay ganador
    return null 
  }

// Revisar si hay un empate
export const checkEndGame = (newBoard) => {
  return newBoard.every((square) => square != null)
}