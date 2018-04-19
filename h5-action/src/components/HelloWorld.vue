<template>
  <div>
    <template v-if="isSign">
      <div class="mask">
        <div class="input to-flex in-col set-bet">
          <input v-model="tel" class="number-input" placeholder="请输入手机号" />
          <div @click="getSign" class="toast-btn">报名</div>
        </div>
      </div>
    </template>
    <template v-if="isSuccess === 1">
      <div class="mask">
        <div class="input to-flex in-col set-center">
          <span class="msg">报名成功</span>
        </div>
      </div>
    </template>
    <template v-if="isSuccess === -14">
      <div class="mask">
        <div class="input to-flex in-col set-center">
          <span class="msg">现在不在报名时间</span>
        </div>
      </div>
    </template>
    <template v-if="isSuccess == -17">
      <div class="mask">
        <div class="input to-flex in-col set-center">
          <span class="msg">您还没有换新展陈</span>
        </div>
      </div>
    </template>
    <template v-if="isSuccess === -11">
      <div class="mask">
        <div class="input to-flex in-col set-center">
          <span class="msg">您还不是司机</span>
        </div>
      </div>
    </template>
    <template v-if="isSuccess === -13">
      <div class="mask">
        <div class="input to-flex in-col set-center">
          <span class="msg">活动不存在</span>
        </div>
      </div>
    </template>
    <template v-if="isSuccess === -1">
      <div class="mask">
        <div class="input to-flex in-col set-center">
          <span class="msg">报名失败</span>
        </div>
      </div>
    </template>
    <template v-if="isSuccess === -18">
      <div class="mask">
        <div class="input to-flex in-col set-center">
          <span class="msg">已经报过名了</span>
        </div>
      </div>
    </template>
    <div class="bg-base img-header"></div>
    <div class="action-detail">
      <div class="detail-board">
        <div class="bg-base board-header tutu-time"></div>
        <div class="item-box">
          <div class="to-flex set-bet dashboard">
            <div class="to-flex in-col">
                <div class="bg-base dash-item tutu-clock"></div>
                <div class="count">{{taskInfo.signUpEndTime | dayLeast}}</div>
                <div>报名剩余天数</div>
            </div>
            <div class="to-flex in-col">
              <div class="bg-base dash-item tutu-avatar"></div>
              <div class="count">{{taskInfo.signUpCount}}/{{taskInfo.maxEngagedMember}}</div>
              <div>当前报名人数</div>
            </div>
          </div>
          <div class="dash-footer">
             派发时间：
            <span class="high-color">
              2018-04-23至2018-04-30
            </span>
          </div>
        </div>
      </div>
      <div class="detail-board">
        <div class="bg-base board-header tutu-flow"></div>
        <div class="item-box">
          <ul>
            <li class="item">
              <div class="line-box">
                <div class="index">1</div>
                <div class="to-flex set-center">
                  <div class="line"></div>
                </div>
              </div>
              <div class="content">满足活动要求的司机点击下方报名按钮</div>
            </li>
            <li class="item">
              <div class="line-box">
                <div class="index">2</div>
                <div class="to-flex set-center">
                  <div class="line"></div>
                </div>
              </div>
              <div class="content">填写个人信息</div>
            </li>
            <li class="item">
              <div class="line-box">
                <div class="index">3</div>
                <div class="to-flex set-center">
                  <div class="line"></div>
                </div>
              </div>
              <div class="content">系统审核</div>
            </li>
            <li class="item">
              <div class="line-box">
                <div class="index">4</div>
                <div class="to-flex set-center">
                  <div class="line"></div>
                </div>
              </div>
              <div class="content">审核通过后于23号前往指定站点领取排样商品</div>
            </li>
            <li class="item">
              <div class="line-box">
                <div class="index">5</div>
                <div class="to-flex set-center">
                  <div class="line"></div>
                </div>
              </div>
              <div class="content">派发给乘客，乘客需要0.01元购买该商品</div>
            </li>
            <li class="item">
              <div class="line-box">
                <div class="index">6</div>
              </div>
              <div class="content">司机完成有效派发</div>
            </li>
          </ul>
        </div>
      </div>
      <div class="detail-board">
        <div class="bg-base board-header tutu-rule"></div>
        <div class="item-box">
          <div class="main-title">
            报名规则
          </div>
          <div class="sub-title">
            参与活动需满足以下条件
          </div>
          <ul>
            <li class="item spacing-item">
              <div>
                <div class="index">1</div>
              </div>
              <div class="content">已注册成为魔急便合伙人</div>
            </li>
            <li class="item spacing-item">
              <div>
                <div class="index">2</div>
              </div>
              <div class="content">已经更换为最新展陈</div>
            </li>
            <li class="item spacing-item">
              <div>
                <div class="index">3</div>
              </div>
              <div class="content">通过魔急便审核</div>
            </li>
          </ul>
          <div class="main-title">
            领取派发物品规则
          </div>
          <ul>
            <li class="item">
              <div>
                <div class="index">1</div>
              </div>
              <div class="content">成功报名的司机合伙人，请于23日前往西斗门站点和滴滴驿站两个站点补货，获取派发物品</div>
            </li>
            <li class="item">
              <div>
                <div class="index">2</div>
              </div>
              <div class="content">成功报名的司机合伙人，活动期间每天仅能领取10份派发物品</div>
            </li>
            <li class="item">
              <div>
                <div class="index">3</div>
              </div>
              <div class="content">物品数量有限，先到先得，我们将优先为前100名到店司机合伙人补充活动商品</div>
            </li>
          </ul>
          <div class="main-title">
            奖励发放规则
          </div>
          <ul>
            <li class="item">
              <div>
                <div class="index">1</div>
              </div>
              <div class="content">活动期间，有效派发一个指定商品（凸凸棉），可获得5元奖励，活动截止时间后产生的派发行为不作为有效派发</div>
            </li>
            <li class="item">
              <div>
                <div class="index">2</div>
              </div>
              <div class="content">奖励将于5月1日开始逐一发放</div>
            </li>
          </ul>
        </div>
      </div>
      <template v-if="canSign">
        <div @click="sign" class="bottom-btn">报名</div>
      </template>
      <div class="foot-box">
        <div class="foot-item">
          客服电话：<a href="tel:4000027527">400-0027-527</a>
        </div>
        <div>
          本次活动所有解释权归魔集便所有
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import moment from 'moment';
import { request } from '../util/http';
import { getActionInfo, getSignUrl } from '../api/api';


export default {
  name: 'HelloWorld',
  data() {
    return {
      msg: 'Welcome to Your Vue.js App',
      tel: null,
      taskInfo: {},
      signBtnFlag: null,
      isSign: false,
      promParams: {},
      signResult: null,
      isSuccess: null,
      canSign: false,
    };
  },
  methods: {
    async sign() {
      this.isSign = true;
    },
    async getSign() {
      const { promotionName, cityName } = this.promParams;
      const tel = this.tel;
      let queryParams = '';
      queryParams = queryParams.concat('driverTel=', tel, '&promotion_name=', promotionName, '&city_name=', cityName);
      /* eslint-disable camelcase */
      try {
        const { result: { biz_code } } = await request({
          method: 'POST',
          headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
          url: getSignUrl,
          data: queryParams,
        });
        this.isSign = false;
        if (biz_code === -14 || biz_code === -15 || biz_code === -16) {
          // TODO : 不在报名时间
          this.isSuccess = -14;
        } else if (biz_code === 2) {
          // TODO: 已经报过名
          this.isSuccess = -18;
        } else if (biz_code === -17) {
          // TODO：没有更换新展陈
          this.isSuccess = -17;
        } else if (biz_code === -11) {
          // TODO：您还不是司机
          this.isSuccess = -11;
        } else if (biz_code === 1) {
          this.isSuccess = 1;
        } else if (biz_code === -13) {
          this.isSuccess = -13;
        } else {
          this.isSuccess = -1;
        }
        setTimeout(() => {
          this.isSuccess = null;
        }, 1200);
      } catch (e) {
        this.isSuccess = false;
        this.isSign = false;
        setTimeout(() => {
          this.isSuccess = null;
        }, 1200);
      }
    },
    isExpired() {
      const { signUpEndTime } = this.taskInfo;
      const endTime = new Date(signUpEndTime);
      const nowTime = new Date();
      if (endTime - nowTime >= 0) {
        this.canSign = true;
      } else {
        this.canSign = false;
      }
    },
  },
  async created() {
    const { query: { promotionName, cityName } } = this.$route;
    this.promParams = {
      promotionName,
      cityName,
    }
    const queryActionInfo = getActionInfo.concat('?promotion_name=', '凸凸棉', '&city_name=', '杭州市');
    const { result: { data } } = await request({
      url: queryActionInfo,
    });
    const { signUpStartTime, signUpEndTime } = data;
    const { promotionStatus, maxEngagedMember, signUpCount } = data;
    this.taskInfo = {
      maxEngagedMember,
      signUpCount,
      signUpStartTime,
      signUpEndTime,
    }
    this.signBtnFlag = promotionStatus;
    this.isExpired();
  },
  filters: {
    pureDate(value) {
      if (value) {
        const time = new Date(value);
        return moment(time).format('YYYY-MM-DD');
      }
      return '';
    },
    dayLeast(value) {
      if (value) {
        const time = new Date(value);
        const now = new Date();
        const diffDays = Math.abs(moment().diff(time, 'days'));
        console.log('diffDays', now - time);
        if (time - now >= 0) {
          return diffDays;
        }
        return 0;
      }
      return '';
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
  .to-flex {
    display: flex;
  }
  .in-col {
    flex-direction: column;
  }
  .set-center {
    justify-content: center;
  }
  .set-bet {
    justify-content: space-between;
  }

  .bg-base {
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
  }
  .img-header {
    background-image: url("https://img.mobilemart.cn/tutu-header.png");
    height: calc(100vw/750 * 1116);
  }
  .action-detail {
    margin: -25px 12px 0 12px;
    background-color: #f5f5ff;
    padding: 75px 30px;
    .detail-board {
        background-color: #FFFFFF;
        box-shadow: 3px 5px 10px #ff734b, -2px -1px 2px #fdfdfd;
        border-radius: 40px;
        margin-bottom: 60px;
        min-height: 250px;
        .item-box {
          padding: 30px 42px 40px 42px;
          .main-title {
            font-size: 36px;
            color: #ff8a01;
            padding: 10px 0px;
          }
          .sub-title {
            font-size: 24px;
            color: #000;
            padding: 10px 0px;
          }
          .item {
            display: flex;
            .index {
              display: inline-block;
              width: 36px;
              height: 36px;
              line-height: 36px;
              text-align: center;
              color: #FFFFFF;
              background-color: #ffa861;
              border: 2px solid #ff7d16;
              border-radius: 12px;
            }
            .line-box {
              display: flex;
              flex-direction: column;
              .line {
                border-left: 1px dashed #ff7d16; /* no */
                height: 36px;
                width: 1px; /* no */
              }
            }
            .content {
              margin-left: 22px;
              display: inline-block;
            }
          }
          .spacing-item {
            margin: 18px 0;
          }
        }
      .dashboard {
        padding: 0 20px;
        text-align: center;
        .dash-item {
          width: 100%;
          height: 94px;
        }
        .count {
          padding: 15px 0;
          font-size: 32px;
          color: #ff8a01;
        }
      }
      .dash-footer {
        border-top: 1px solid #efefef; /* no */
        margin-top: 35px;
        padding-top: 40px;
        text-align: center;
      }
    }
    .board-header {
      position: relative;
      top: -15px;
      height: 81px;
    }
    .bottom-btn {
      margin: 0 40px;
      border-radius: 70px;
      padding: 10px 0;
      background: linear-gradient(to bottom, #ffd890, #ff6349);
      text-align: center;
      font-size: 74px;
      color: #FFFFFF;
      text-shadow: #2c3e50;
    }
    .foot-box {
      padding: 30px 0 0 0;
      text-align: center;
      font-size: 22px;
      .foot-item {
        margin-bottom: 80px;
      }
    }
  }
  .high-color {
    color: #ff8a01;
  }
  .mask {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, .8);
    z-index: 666;
    .input {
      margin: 311px auto;
      padding: 120px 57px 80px 57px;
      width: 500px;
      height: 340px;
      border-radius: 60px;
      background-color: #FFFFFF;
      .number-input {
        border: 1px solid #dddddd; /* no */
        border-radius: 8px;
        padding: 30px 25px;
      }
      .toast-btn {
        margin: 0 40px;
        border-radius: 70px;
        padding: 10px 0;
        background: linear-gradient(to bottom, #ffd890, #ff6349);
        text-align: center;
        font-size: 48px;
        color: #FFFFFF;
        text-shadow: #2c3e50;
      }
      .msg {
        text-align: center;
        font-size: 36px;
      }
    }
  }

  .tutu-avatar {
    background-image: url("https://img.mobilemart.cn/tutu-avatar.png");
  }

  .tutu-clock {
    background-image: url("https://img.mobilemart.cn/tutu-clock.png");
  }

  .tutu-time {
    background-image: url("https://img.mobilemart.cn/tutu-time.png");
  }
  .tutu-flow {
    background-image: url("https://img.mobilemart.cn/tutu-flow.png");
  }
  .tutu-rule {
    background-image: url("https://img.mobilemart.cn/tutu-rule.png");
  }

</style>
