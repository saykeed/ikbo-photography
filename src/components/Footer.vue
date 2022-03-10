<template>
  <div class="footer">
      <h3>IKBO</h3>
      <p>Copywrite Ikbo Media @ 2022</p>
      <div class="socialBtn">
          <i class="fa fa-facebook"></i>
          <i class="fa fa-instagram"></i>
      </div>
    </div>
</template>

<script>
export default {

}
</script>

<style>
    .footer{
        text-align: center;
        margin: 50px auto 0;
    }
    .socialBtn{
        margin: 10px auto;
        width: fit-content;
        display: flex;
        align-items: center;
    }
    .socialBtn i{
        width: 40px;
        height: 40px;
        border-radius: 40px;
        display: flex;
        align-items: center;
        justify-content: center;
        margin: 0 5px;
        font-size: 20px;
        transition: all .5s ease;
    }
    .socialBtn i:active{
        background: rgba(255, 255, 255, 0.481);
    }
    

    /*for the responsieve screen of lg and above*/
    @media screen and (min-width:960px){
        .socialBtn i:hover{
            background: rgba(255, 255, 255, 0.481);
        }
    }
    
</style>