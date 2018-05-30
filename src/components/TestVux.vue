<template>
  <div>
    <group>
      <icon type="success"></icon>
      <calendar v-bind:title="calendar_title" v-model="calendar_value"
                @on-change="calendar_change" start-date="2018-04-30" end-date="TODAY"
      ></calendar>
      <!--disable-past 禁止选过去时间-->
      <calendar title="日期控件[单选,默认选中今日]" v-model="calendar_value2"
                disable-past
      ></calendar>
      <calendar title="日期控件[多选]" v-model="calendar_value3"
                :display-format="calendar_format"
      ></calendar>
    </group>

  </div>
</template>

<script>
  import {Group, Cell, Icon, Calendar} from 'vux'

  export default {
    data() {
      return {
        calendar_title: "日期控件[单选,选中指定日期]",
        calendar_value: "2018-05-01", // 当值为空时，为单选；当值为[]时，为多选；设置值为'TODAY'可快捷选取当前日期。placeholder只有在值为空或[]时显示。
        calendar_value2: "TODAY",
        calendar_value3: []
      }
    },
    components: {
      Group,
      Cell,
      Icon,
      Calendar
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
      }
    }
  }
</script>

<style scoped>

</style>
