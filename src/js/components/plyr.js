import Plyr from "../vendor/plyr";
import {Modal} from '../vendor/modal'

console.log(Plyr);

document.addEventListener("DOMContentLoaded", () => {
  const players = document.querySelectorAll(".player")
  const {options} = new Modal();
  const plyrs = [];

  players.forEach(el => {
    const player = new Plyr(el)

    setTimeout(() => {
      player.poster = el.dataset.poster;
    })

    plyrs.push(player)

    options.isClose = () => plyrs.forEach(el => el.pause())
  })
})