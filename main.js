var app = new Vue({
  el: '#app',
  data:{
    signs: ['','','','','','','','',''],
    player : 'X',
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
    winnerText : '',
  },
  methods:{
    inner : function(nArray){
      this.$set(this.signs , nArray , this.player)
    },
    changePlayer : function(player){
      if(this.player == 'X'){
        this.player = 'O'
      } else if(this.player == 'O') {
        this.player = 'X'
      }
    },
    restart : function(){
      this.signs = ['','','','','','','','','']
      this.winnerText = ''
      this.player = 'X'
    },

    winConFun : function(player){
      for(i in this.winCon){
        if(this.signs[this.winCon[i][0]] == this.player &&
          this.signs[this.winCon[i][1]] == this.player &&
          this.signs[this.winCon[i][2]] == this.player){
          this.winnerText = 'Ha vinto il giocatore '+this.player
        }
      }
    }
  }
})
