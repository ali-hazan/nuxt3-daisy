<script setup lang="ts">
import { breakpointsTailwind, useBreakpoints } from '@vueuse/core'

const breakpoints = useBreakpoints(breakpointsTailwind)

const sm = breakpoints.smaller('sm')
const md = breakpoints.between('sm', 'md')
const lg = breakpoints.between('md', 'lg')
const xl = breakpoints.between('lg', 'xl')
const xxl = breakpoints.between('xl', '2xl')
const xxxl = breakpoints['2xl']
</script>

<template>
  <div class="btn-group flex justify-center p-8">
    <Button label="sm" :class="{ 'btn-warning': sm }" />
    <Button label="md" :class="{ 'btn-warning': md }" />
    <Button label="lg" :class="{ 'btn-warning': lg }" />
    <Button label="xl" :class="{ 'btn-warning': xl }" />
    <Button label="xxl" :class="{ 'btn-warning': xxl }" />
    <Button label="xxxl" :class="{ 'btn-warning': xxxl }" />
  </div>
</template>
