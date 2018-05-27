<template>
  <div>
    ============================= BootstrapVue.vue<br>
    bootstrap-vue结合Vue使用，详见<a href="https://bootstrap-vue.js.org/docs">BV中文文档</a>

    <div class="row">
      1.进度条 show-progress展示value animated动态效果
    </div>
    <b-progress :value="progressValue" :max="progressMax" show-progress animated></b-progress>
    <b-progress class="mt-1" :max="progressMax" show-value>
      <b-progress-bar :value="progressValue*(6/10)" variant="success"></b-progress-bar>
      <b-progress-bar :value="progressValue*(2.5/10)" variant="warning"></b-progress-bar>
      <b-progress-bar :value="progressValue*(1.5/10)" variant="danger"></b-progress-bar>
    </b-progress>


    <div class="row">
      2.b-button(同b-btn) variant类型 size大小 disabled不可用
    </div>
    <b-button variant="primary" size="sm">primary</b-button>
    <b-button variant="secondary">secondary</b-button>
    <b-button variant="success" size="lg">success</b-button>
    <b-button variant="warning">warning</b-button>
    <b-btn variant="danger" disabled>danger</b-btn>

    <div class="row">
      3.b-tabs + b-card
    </div>
    <b-tabs>
      <b-tab title="b-carousel">
        <!--
        controls：显示左右滑动的箭头按钮
        indicators: 显示下方轮播点击的按钮
        -->

        <b-carousel id="carousel1"
                    style="text-shadow: 1px 1px 2px #333;"
                    controls
                    indicators
                    background="#ababab"
                    :interval="4000"
                    img-width="1024"
                    img-height="480"
                    v-model="slide"
                    @sliding-start="onSlideStart"
                    @sliding-end="onSlideEnd"
        >

          <!-- Text slides with image -->
          <b-carousel-slide caption="First slide"
                            text="Nulla vitae elit libero, a pharetra augue mollis interdum."
                            img-src="https://picsum.photos/1024/480/?image=52"
          ></b-carousel-slide>

          <!-- Slides with custom text -->
          <b-carousel-slide img-src="https://picsum.photos/1024/480/?image=54">
            <h1>Hello world!</h1>
          </b-carousel-slide>

          <!-- Slides with image only -->
          <b-carousel-slide img-src="https://picsum.photos/1024/480/?image=58">
          </b-carousel-slide>

          <!-- Slides with img slot -->
          <!-- Note the classes .d-block and .img-fluid to prevent browser default image alignment -->
          <b-carousel-slide>
            <img slot="img" class="d-block img-fluid w-100" width="1024" height="480"
                 src="https://picsum.photos/1024/480/?image=55" alt="image slot">
          </b-carousel-slide>

          <!-- Slide with blank fluid image to maintain slide aspect ratio -->
          <b-carousel-slide caption="Blank Image" img-blank img-alt="Blank image">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
              eros felis, tincidunt a tincidunt eget, convallis vel est. Ut pellentesque
              ut lacus vel interdum.
            </p>
          </b-carousel-slide>

        </b-carousel>

        <p class="mt-4">
          Slide #: {{ slide }}<br>
          Sliding: {{ sliding }}
        </p>
      </b-tab>

      <b-tab title="b-card" active>

        <b-card-group columns>
          <b-card title="Little Cat"
                  img-src="https://placekitten.com/g/400/450"
                  img-top
                  img-fluid
                  class="mb-2">
            <p class="card-text">
              Some quick example text to build on the card title and make up the bulk of the card's content.
            </p>
          </b-card>

          <b-card overlay
                  img-src="https://picsum.photos/900/250/?image=36"
                  img-alt="Card Image"
                  text-variant="white"
                  title="Image Overlay"
                  sub-title="Subtitle"
                  img-fluid>
            <p class="card-text">
              Some quick example text to build on the card and make
              up the bulk of the card's content.
            </p>
          </b-card>

          <b-card title="Title"
                  img-src="https://placekitten.com/500/350"
                  img-fluid
                  img-alt="image"
                  img-top>
            <p class="card-text">
              This card has supporting text below as a natural lead-in to additional content.
            </p>
            <small class="text-muted">Last updated 3 mins ago</small>
          </b-card>

          <b-card title="Title"
                  img-src="https://placekitten.com/500/350"
                  img-fluid
                  img-alt="image"
                  img-top>
            <p class="card-text">
              This card has supporting text below as a natural lead-in to additional content.
            </p>
            <small class="text-muted">Last updated 3 mins ago</small>
          </b-card>
        </b-card-group>
      </b-tab>

      <b-tab title="b-form-input">
        <b-form-group id="fieldsetHorizontal"
                      horizontal
                      :label-cols="3"
                      breakpoint="md"
                      description="Let us know your name."
                      label="Enter your name"
                      label-for="inputHorizontal">
          <b-form-input id="inputHorizontal"
                        required
                        placeholder="Enter your name"

                        v-model.trim="name"
                        :state="nameState"

                        :formatter="formatter"
                        lazy-formatter
          >
          </b-form-input>
        </b-form-group>


        <b-container fluid>
          <b-row class="my-1" v-for="type in types" :key="type">
            <b-col sm="3">
              <label :for="`type-${type}`">Type {{ type }}:</label>
            </b-col>
            <b-col sm="9">
              <b-form-input :id="`type-${type}`" :type="type"></b-form-input>
            </b-col>
          </b-row>
        </b-container>
      </b-tab>

      <b-tab title="b-form-select">
        <b-form-select v-model="selected" :options="options" class="mb-3" />
        <b-form-select v-model="selected2" :options="options" class="mb-3" size="sm" />
        <div>Selected: <strong>{{ selected }}</strong></div>
      </b-tab>

      <b-tab title="disabled" disabled>
        <br>Disabled tab!
      </b-tab>
    </b-tabs>
  </div>
</template>

<script>
  export default {
    name: "TestBootstrapVue",
    data() {
      return {
        progressValue: 60,
        progressMax: 100,

        slide: 0,
        sliding: null,

        name: '',
        types: [
          'text', 'password', 'email', 'number', 'url',
          'tel', 'date', `time`, 'range', 'color'
        ],

        selected: null,
        selected2: 'b',
        options: [
          { value: null, text: 'Please select an option' },
          { value: 'a', text: 'This is First option' },
          { value: 'b', text: 'Selected Option' },
          { value: {'C': '3PO'}, text: 'This is an option with object value' },
          { value: 'd', text: 'This one is disabled', disabled: true }
        ]
      }
    },
    computed: {
      nameState() {
        return this.name.length > 2
      }
    },
    methods: {
      onSlideStart (slide) {
        this.sliding = true
      },
      onSlideEnd (slide) {
        this.sliding = false
      },

      formatter (value, event) {
        return value.charAt(0).toUpperCase().concat(value.slice(1))
      }
    }
  }
</script>

<style scoped>

</style>
