<template>
  <div class="py-5 px-6 bg-[#F9F9F9] rounded-xl border border-[#F7F7F7] my-8 flex flex-row gap-2">
    <p class="text-3xl">
      <slot name="icon"></slot>
    </p>
    <p class="text-xl text-[#6F6F6F]">
      <slot name="text"></slot>
    </p>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped></style>
