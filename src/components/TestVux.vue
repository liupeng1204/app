<template>
  <div>
    <group>
      <icon type="success"></icon>
      <icon type="success-circle"></icon>
      <icon type="success-no-circle"></icon>
      <icon type="info"></icon>
      <icon type="warn"></icon>
      <icon type="waiting"></icon>

      <calendar v-bind:title="calendar_title" v-model="calendar_value"
                @on-change="calendar_change" start-date="2018-04-30" end-date="TODAY"
      ></calendar>
      <!--disable-past 禁止选过去时间-->
      <calendar title="日期控件[单选,默认今日]" v-model="calendar_value2"
                disable-past
      ></calendar>
      <calendar title="日期控件[多选]" v-model="calendar_value3"
                :display-format="calendar_format"
      ></calendar>

      <!--一般弹出选择-->
      <popup-picker popup-title="请选择" title="手机"
                    :data="popup_picker_data" v-model="popup_picker_value"
                    @on-change="popup_picker_change"
                    placeholder="请选择">
        <template slot="title"><!-- 插槽 自定义标题的模板 -->
          <span style="height:24px;">
            <icon type="success-circle"></icon>
            <span style="vertical-align:middle;">手机</span>
          </span>
        </template>
      </popup-picker>

      <!--联动弹出选择-->
      <popup-picker title="省-市-区" :data="popup_picker_data2" :columns="3" v-model="popup_picker_value2"
                    @on-change="popup_picker_change2" placeholder="请选择" show-name>
      </popup-picker>

      <swipeout>
        <swipeout-item @on-close="handleEvents('on-close')"
                       @on-open="handleEvents('on-open')"
                       :sensitivity="sensitivity"
                       :threshold="threshold"
                       transition-mode="follow"
                       style="text-align: center;"
                       v-for="(person, index) in swipeout_people"
                       :key="person.id"
        >
          <div slot="right-menu">
            <swipeout-button @click.native="doTop(person, index)" type="primary">
              <span v-if="person.top">取消</span>
              置顶
            </swipeout-button>
            <swipeout-button @click.native="doStar(person, index)" type="default">
              <span v-if="person.star">取消</span>
              收藏
            </swipeout-button>
            <swipeout-button @click.native="doDelete(person, index)" type="warn">
              删除
            </swipeout-button>
          </div>
          <div slot="content" class="demo-content vux-1px-t"
               :class="{swipeout_top: person.top}"
          >
            {{person.name}}
            <icon type="success" v-if="person.star"></icon>
          </div>
        </swipeout-item>
      </swipeout>


    </group>

  </div>
</template>

<script>
  import {
    Group,
    Cell,
    Icon,
    Calendar,
    PopupPicker,
    Swipeout,
    SwipeoutItem,
    SwipeoutButton
  } from 'vux'

  export default {
    data() {
      return {
        calendar_title: "日期控件[单选,指定日期]",
        calendar_value: "2018-05-01", // 当值为空时，为单选；当值为[]时，为多选；设置值为'TODAY'可快捷选取当前日期。placeholder只有在值为空或[]时显示。
        calendar_value2: "TODAY",
        calendar_value3: [],

        popup_picker_data: [['小米', 'iPhone', '华为', '情怀', '三星', '其他', '不告诉你']],
        popup_picker_value: ['iPhone'],

        popup_picker_data2: [
          {
            name: '中国',
            value: 'china',
            parent: 0
          }, {
            name: '美国',
            value: 'USA',
            parent: 0
          }, {
            name: '广东',
            value: 'china001',
            parent: 'china'
          }, {
            name: '广西',
            value: 'china002',
            parent: 'china'
          }, {
            name: '美国001',
            value: 'usa001',
            parent: 'USA'
          }, {
            name: '美国002',
            value: 'usa002',
            parent: 'USA'
          }, {
            name: '广州',
            value: 'gz',
            parent: 'china001'
          }, {
            name: '深圳',
            value: 'sz',
            parent: 'china001'
          }, {
            name: '广西001',
            value: 'gx001',
            parent: 'china002'
          }, {
            name: '广西002',
            value: 'gx002',
            parent: 'china002'
          }, {
            name: '美国001_001',
            value: '0003',
            parent: 'usa001'
          }, {
            name: '美国001_002',
            value: '0004',
            parent: 'usa001'
          }, {
            name: '美国002_001',
            value: '0005',
            parent: 'usa002'
          }, {
            name: '美国002_002',
            value: '0006',
            parent: 'usa002'
          }],
        popup_picker_value2: [],

        sensitivity: 0.4,
        threshold: 0.4,

        swipeout_people: [
          {id: 0, name: "沁哥", star: null, top: null},
          {id: 1, name: "老柏", star: null, top: null},
          {id: 2, name: "婷婷", star: null, top: null}
        ]
      }
    },
    components: {
      PopupPicker,
      Group,
      Cell,
      Icon,
      Calendar,
      Swipeout,
      SwipeoutItem,
      SwipeoutButton
    },
    methods: {
      calendar_change(value) {
        console.log("calendar_change_value", value)
      },
      calendar_format(value, type) {
        if (type === "string") {
          return value;
        } else {
          return value.length ? (value.length + ' days') : ''
        }
      },

      popup_picker_change(value) {
        console.log("popup_picker_change", value)
      },
      popup_picker_change2(value) {
        console.log("popup_picker_change2", value)
      },

      doTop(person, index) {  // 置顶&取消置顶
        console.log('doTop', index);
        let people = this.swipeout_people;

        if (!person.top) {  // 进行置顶操作
          people.splice(index, 1);
          people.unshift(person);
        } else {  // 进行取消置顶操作(来到第一个非置顶项前)
          let first_untop_index = _.findIndex(people, function(p){
            return !p.top
          });
          // 考虑到已全部置顶的情况
          first_untop_index = first_untop_index > -1 ? first_untop_index : people.length;
          people.splice(first_untop_index, 0, person);
          people.splice(index, 1);
        }
        person.top = !person.top;
      },
      doStar(person, index) {  // 收藏&取消收藏
        console.log('doStar', index);
        // person.star = true;
        person.star = !person.star;  // 考虑到取消收藏操作
      },
      doDelete(person, index) {  // 删除
        console.log('doDelete', index);
        this.swipeout_people.splice(index, 1);
      },
      handleEvents(type) {
        console.log('event: ', type)
      }
    }
  }
</script>

<style lang="less" scoped>
  .swipeout_top {
    background-color: darkgray;
  }

  .demo-content {
    padding: 10px;
  }
</style>
