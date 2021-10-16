<template>
  <div @click='inner(playerTurn)'><span>{{item.sign}}</span></div>
</template>


<script>
  export default {
    name: 'cell',
    props: ['item','playerTurn'],
    methods: {
      inner: function(value){
        this.$emit('check' , value , this.item.id)
      }
    }
  }
</script>


<style>

  .cell {
    font-family: "Permanent Marker", cursive;
    width: 100px;
    height: 100px;
    box-shadow: 0 0 0 1px #333333;
    border: 1px solid #333333;
    cursor: pointer;
    line-height: 100px;
    font-size: 60px;
    padding: 0;
    background-color: white;
  }

  div.cell:hover{
    background-color: #E8E8E8;
  }

</style>
