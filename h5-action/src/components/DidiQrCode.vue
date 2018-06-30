<template>
  <div class="base-board">
    <div>
      <div class="solagon-box">
        <div class="solagon"></div>
      </div>
      <div class="sub-solagon">
        <span>领取后，自动放入【个人中心】的 【我的优惠券】</span>
      </div>
      <div class="redpack">
        <button @click="save" class="save">保存图片</button>
        <div class="qrbox">
          <div ref="qrCodeBox" class="qrcode qr-img">
            <!--<img src="@/assets/qrCode.png" />-->
          </div>
        </div>
      </div>
      <div class="map">
        <div class="step-box">
           <div class="step line">1</div>
           <div class="info">保存图片或截图</div>
        </div>
        <div class="step-box">
          <div class="step">2</div>
          <div class="info">微信扫码</div>
        </div>
        <div class="step-box">
          <div class="step">3</div>
          <div class="info">领优惠券</div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'didi-qr-code',
  props: {
    channelCode: String,
  },
  methods: {
    save() {
      alert('请长按二维码图片保存二维码。');
    },
  },
  mounted() {
    console.log(this.channelCode);
    const { channelCode = '' } = this;
    const testGetCouponUrl = `https://h5.xiaojubianli.com/qrcode-xcx/test-didiTicket.html?channel=${channelCode}`;
    const getCouponUrl = `https://h5.xiaojubianli.com/qrcode-xcx/didiTicket.html?channel=${channelCode}`;
    new QRCode(this.$refs.qrCodeBox, {
      text: getCouponUrl,
      colorDark: '#000000',
      colorLight: '#ffffff',
      correctLevel: QRCode.CorrectLevel.H,
    });
  },
};
</script>

<style lang="less" scoped>
   .base-board {
     display: flex;
     justify-content: center;
     padding-top: 74px;
     padding-bottom: 50px;
     background-color: #314bca;
     min-height: 100vh;
     background-image: url("../assets/full-bg.png");
     background-size: contain;
     background-position-y: 20vh;
     background-repeat: no-repeat;
   }
  .solagon-box {
    display: flex;
    justify-content: center;
    .solagon {
      background-image: url("../assets/main_words.png");
      background-size: contain;
      background-position: center;
      background-repeat: no-repeat;
      width: 63.2vw;
      height: calc(63.2vw/474 * 53);
    }
  }
  .sub-solagon {
    margin-top: 25px;
    text-align: center;
    color: #FFFFFF;
    font-size: 20px;
  }
  .redpack {
    display: flex;
    flex-direction: column-reverse;
    margin-top: 71px;
    width: 80vw;
    height: calc(80vw/375*444);
    background-image: url("../assets/simple-redpack.png");
    background-size: contain;
    background-repeat: no-repeat;
    .qrbox {
      display: flex;
      justify-content: center;
      .qrcode {
        padding: 27px;
        width: calc(80vw*0.41);
        height: calc(80vw*0.41);
        border-radius: 5px; /* no */
        background-color: #ffffff;
        img {
          width: 150px;
          height: 150px;
        }
      }
    }
    .save {
      outline: none;
      margin: 25px;
      padding: 26px;
      border: 0;
      border-radius: 5px /* no */;
      background: linear-gradient(180deg, #fedd9e 0%, #f6b977 100%),
                  linear-gradient(#cfa972, #cfa972);
      font-size: 36px;
      color: #923f12;
    }
  }
  .map {
    background-image: url("../assets/tit_bg.png");
    background-size: contain;
    background-repeat: no-repeat;
    background-position: top;
    box-sizing: border-box;
    margin-top: 72px;
    padding: 64px 34px 24px 34px;
    width: 80vw;
    height: 34.66vw;
    background-color: #FFFFFF;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .step-box {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      align-items: center;
      width: 105px;
      height: 138px;
      .step {
        width: 53px;
        height: 53px;
        border-radius: 25px;
        background-color: #e18d4f;
        font-size: 36px;
        color: #FFFFFF;
        text-align: center;
        line-height: 53px;
        position: relative;
      }
      .line:after {
        position: absolute;
        top: 26px;
        left: 53px;
        width: 400px;
        height: 3px; /* no */
        /*background-color: red;*/
        border-top:1px dashed #e18d4f; /* no */
        content: '';
      }
      .info {
        height: 59px;
        text-align: center;
        color: #974b22;
      }
    }
  }
</style>
<style lang="less">
  .qr-img {
    img {
      width: calc(80vw*0.41);
      height: calc(80vw*0.41);
    }
  }
</style>
