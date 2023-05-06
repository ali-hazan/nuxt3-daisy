<script lang="ts">
export default {
  props: {
    label: {
      type: String,
      requried: true,
    },
  },
}
</script>

<template>
  <button class="btn">
    {{ label }}
  </button>
</template>
