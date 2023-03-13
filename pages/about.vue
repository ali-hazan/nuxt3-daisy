<script lang="ts" setup>
import { Swiper, SwiperSlide } from 'swiper/vue'
const data = reactive(['Slide 1', 'Slide 2', 'Slide 3', 'Slide 4', 'Slide 5'])
</script>

<template>
  <div>
    <Breakpoint />
    <Swiper class="mySwiper">
      <SwiperSlide v-for="slide in data" :key="slide">
        <div class="card w-96 bg-base-100 shadow-xl my-10 m-auto">
          <figure><img src="https://placeimg.com/400/225/arch" alt="Shoes"></figure>
          <div class="card-body">
            <h2 class="card-title">
              {{ slide }}
              <div class="badge badge-secondary">NEW</div>
            </h2>
            <p>If a dog chews shoes whose shoes does he choose?</p>
            <div class="card-actions justify-end">
              <div class="badge badge-outline">Fashion</div>
              <div class="badge badge-outline">Products</div>
            </div>
          </div>
        </div>
      </SwiperSlide>
    </Swiper>
  </div>
</template>
