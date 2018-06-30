<template>
  <div class="base-board">
    <div class="slogan-box"></div>
    <div class="info-line">
      <div class="stock-list">
        <div class="title">
          <div>猜球大奖</div>
        </div>
        <div class="item">
          <img src="../assets/erji.png" />
          <div class="tips">
            <div>可口可乐限量版耳机</div>
          </div>
        </div>
        <div class="item">
          <img src="../assets/zuqiu.png" />
          <div class="tips">
            <div>可口可乐限量版足球</div>
          </div>
        </div>
        <div class="item">
          <img src="../assets/maoizi.png" />
          <div class="tips">
            <div>可口可乐限量版帽子</div>
          </div>
        </div>
        <div class="item">
          <img src="../assets/coffee.png" />
          <div class="tips">
            <div>畅爽提神麦隆咖啡<span class="tiny-text">(6罐)</span></div>
          </div>
        </div>
        <div class="item">
          <img src="../assets/skii.png" />
          <div class="tips dajiang">
            <div>神仙水清莹乳液套装</div>
          </div>
        </div>
        <div class="item">
          <img src="../assets/xbox.png" />
          <div class="tips dajiang">
            <div>Xbox One S 1TB</div>
          </div>
        </div>
      </div>
      <div class="stock-list top-space">
        <div class="go-tips">
          <div class="content">
            <div class="sub-solg">每场比赛，竞猜成功可参与限量版奖品抽奖</div>
            <div>连续竞猜，更有机会获得神秘大礼</div>
          </div>
        </div>
        <div class="qr-box">
          <div class="qr-code">
            <img src="../assets/world-cup-qr.png" />
          </div>
        </div>
        <div class="foot-tips">
          <div>
            保存或截图用微信扫码
          </div>
          <div>
            开始属于你的征程
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'didi-qr-code',
  methods: {
    save() {},
  },
};
</script>

<style lang="less" scoped>
  .base-board {
    min-height: 100vh;
    background-color: #0e3ca4;
    background-repeat: no-repeat;
  }
  .info-line {
    padding: 20px 18px 40px 18px;
  }
  .slogan-box {
    box-sizing: border-box;
    width: 100vw;
    height: calc(100vw/750*523);
    background-image: url("../assets/zhuti.png"), url("../assets/msg_channel.png");
    background-size: contain;
    background-repeat: no-repeat;
  }
  .stock-list {
    box-sizing: border-box;
    border-radius: 10px; /* no */
    width: 100%;
    padding: 56px 36px 40px 36px;
    background-color: #FFFFFF;
    background: linear-gradient(to bottom, #00aa90, #01be7e);
    background-size: 98%;
    background-position: top;
    background-repeat: no-repeat;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    .item {
      background-color: #FFFFFF;
      flex-shrink: 0;
      margin-bottom: 51px;
      width: 295px;
      height: 295px;
      border-radius: 5px;
      box-shadow: 0px 5px 13px 0px
      rgba(26, 27, 23, 0.42);
      img {
        width: 100%;
        height: 70%;
      }
      .tips {
        display: flex;
        flex-direction: column;
        justify-content: center;
        text-align: center;
        height: 30%;
        font-size: 26px;
        color: #FFFFFF;
        background-image: linear-gradient(-90deg,
        #ec2747 0%,
        #ff594e 100%),
        linear-gradient(
          #8ba110,
          #8ba110);
        border-radius: 0px 0px 8px 8px;
        box-shadow: 0px 5px 13px 0px
        rgba(26, 27, 23, 0.42);
      }
    }
  }
  .go-tips {
    /*background-image: url("../assets/secret-banner.png");*/
    /*background-repeat: no-repeat;*/
    /*background-size: contain;*/
    /*box-sizing: border-box;*/
    width: 100%;
    /*height: calc((100vw - 36px)/636*200);*/
    /*height: calc;*/
    background-color: #FFFFFF;
    padding: 10px;
    .content {
      display: flex;
      flex-direction: column;
      border: solid 2px #e45101; /* no */
      padding: 20px;
      font-size: 29px;
      text-align: center;
      .sub-solg {
        margin-bottom: 20px;
        color: #000000;
        height: 29px;
      }
    }
  }
  .qr-box {
    margin-top: 48px;
    display: flex;
    justify-content: center;
    width: 100%;
    .qr-code {
      width: 194px;
      height: 194px;
      border: 14px solid #FFFFFF;
      box-shadow: 0px 13px 24px 0px
      rgba(39, 39, 40, 0.67);
      img {
        width: 100%;
        height: 100%;
      }
    }
  }
  .foot-tips {
    margin-top: 47px;
    width: 100%;
    div {
      color: #FFFFFF;
      width: 100%;
      text-align: center;
      font-size: 30px;
    }
  }

  .dajiang {
    background-image: linear-gradient(-90deg,
    #caa576 0%,
    #e9cba9 100%) !important;
  }
  .tiny-text {
    font-size: 22px;
  }
  .title {
    width: 100%;
    display: flex;
    justify-content: center;
    padding-bottom: 48px;
    div {
      width: 93%;
      padding: 14px;
      font-size: 30px;
      text-align: center;
      background-color: #ffd602;
      border-radius: 50px;
      color: #a4470e;
    }
  }
  .top-space {
    margin-top: 38px;
  }
</style>
