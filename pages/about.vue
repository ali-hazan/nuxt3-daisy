<script lang="ts" setup>
import { Swiper, SwiperSlide } from 'swiper/vue'
const data = reactive(['Slide 1', 'Slide 2', 'Slide 3', 'Slide 4', 'Slide 5'])
</script>

<template>
  <div>
    <Breakpoint />
    <Swiper class="mySwiper">
      <SwiperSlide v-for="slide in data" :key="slide">
        <div class="card m-auto my-10 w-96 bg-base-100 shadow-xl">
          <figure><img src="https://placeimg.com/400/225/arch" alt="Shoes" /></figure>
          <div class="card-body">
            <h2 class="card-title">
              {{ slide }}
              <div class="badge-secondary badge">NEW</div>
            </h2>
            <p>If a dog chews shoes whose shoes does he choose?</p>
            <div class="card-actions justify-end">
              <div class="badge-outline badge">Fashion</div>
              <div class="badge-outline badge">Products</div>
            </div>
          </div>
        </div>
      </SwiperSlide>
    </Swiper>
  </div>
</template>
