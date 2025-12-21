import { WINNER_COMBOS } from "../constants.js"

export const checkWinnerFrom = (boardToCheck) => {
    // Revisar todas las combinaciones ganadoras
    // para verificar si alguien ganó
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
    // Si no hay ganador
    return null
}

export const checkEndGame = (newBoard) => {
    // Revisa si el tablero está lleno y es un empate
    return newBoard.every(square => square !== null)
  }