<template>
  <div class="game">
    <h1>Tris</h1>
    <div class='tris'>
      <cell class='cell' @check='check' :key="item.id" v-for='item in cells' :item='item' :playerTurn='playerTurn'></cell>
    </div>
    <h3>E' il turno del giocatore: <strong>{{playerTurn}}</strong></h3>
    <br>
    <button type="button" @click='restart' class='btn btn-outline-light'> Restart </button>
    <br>
    <h2>{{winnerText}}</h2>
    <br>
  </div>
</template>


<script>

  import Cell from '../components/cell.vue'



  export default {
    name: 'tris-game',
    components:{ Cell },
    data(){
      return{
        cells:[
          {sign: '', id: 0},{sign: '', id: 1},{sign: '', id: 2},
          {sign: '', id: 3},{sign: '', id: 4},{sign: '', id: 5},
          {sign: '', id: 6},{sign: '', id: 7},{sign: '', id: 8},
        ],
        winCon : [
          ['0','1','2'],
          ['3','4','5'],
          ['6','7','8'],
          ['0','3','6'],
          ['1','4','7'],
          ['2','5','8'],
          ['0','4','8'],
          ['2','4','6']
        ],
        playerTurn: 'X',
        winnerText: ''
      }
    },
    methods: {
      check: function(player, id){
        this.cells[id].sign = player

        for(let i in this.winCon){
          if(this.cells[this.winCon[i][0]].sign == player &&
            this.cells[this.winCon[i][1]].sign == player &&
            this.cells[this.winCon[i][2]].sign == player){
            this.winnerText = 'Ha vinto il giocatore ' + player
          }
        }

        if(player == 'X'){
          this.playerTurn = 'O'
        } else if(player == 'O') {
          this.playerTurn = 'X'
        }
      },
      restart: function(){
        this.cells = [
          {sign: '', id: 0},{sign: '', id: 1},{sign: '', id: 2},
          {sign: '', id: 3},{sign: '', id: 4},{sign: '', id: 5},
          {sign: '', id: 6},{sign: '', id: 7},{sign: '', id: 8},
        ]
        this.winnerText = ''
        this.playerTurn = 'X'
      }
    }
  }
</script>


<style>
  .btn {
    font-family: "Arial", sans-serif;
    background-color: #EFE6F2;
    border-radius: 10px;
    border: solid white 2px;
    padding-left: 10px;
    padding-right: 10px;
    font-size: 20px;
    color: black
  }

  .game{
    padding: 50px
  }

  .tris {
    display: grid;
    grid-template-columns: repeat(3, auto);
    width: 300px;
    margin: 50px auto;
  }
</style>
