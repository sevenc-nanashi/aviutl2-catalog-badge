<script setup lang="ts">
defineOptions({ inheritAttrs: false });
</script>
<template>
  <div class="card">
    <div
      v-if="$slots.header"
      un-py="3"
      un-px="6"
      un-border-b="1 slate-100 dark:slate-800"
      un-bg="slate-50 dark:slate-900/50"
      class="font-bold text-sm"
    >
      <slot name="header" />
    </div>
    <div un-p="5" v-bind="$attrs">
      <slot />
    </div>
  </div>
</template>

<style scoped>
.card {
  /* <details className="group mb-4 rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-600 shadow-sm dark:border-slate-800 dark:bg-slate-900 dark:text-slate-300"> */
  border: 1px solid light-dark(theme("colors.slate.200"), theme("colors.slate.800"));
  background: light-dark(theme("colors.white"), theme("colors.slate.900"));
  border-radius: theme("radius.xl");
  color: light-dark(theme("colors.slate.600"), theme("colors.slate.300"));
  margin-bottom: calc(theme("spacing") * 4);

  @apply text-sm shadow-sm;
}
</style>
