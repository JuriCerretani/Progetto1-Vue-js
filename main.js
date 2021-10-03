Vue.component("grid", {
  template: "#grid",
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
    updatePlayer: function(player){
      if(player == 'X'){
        this.playerTurn = 'O'
      } else if(player == 'O') {
        this.playerTurn = 'X'
      }
    },
    updateSign: function(player, id){
      this.cells[id].sign = player
    },
    checkWin: function(player, id){
      for(i in this.winCon){
        if(this.cells[this.winCon[i][0]].sign == player &&
          this.cells[this.winCon[i][1]].sign == player &&
          this.cells[this.winCon[i][2]].sign == player){
          this.winnerText = 'Ha vinto il giocatore '+player
        }
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
})

Vue.component("cell" , {
  template: "<div @click='inner(playerTurn)'><span>{{item.sign}}</span></div>",
  props: ['item','playerTurn'],
  methods: {
    inner: function(value){
      this.$emit('updateSign' , value , this.item.id)
      this.$emit('checkWin', value , this.item.id)
      this.$emit('updatePlayer', value)
    }
  }
})

new Vue({
  el: '#app'
})
