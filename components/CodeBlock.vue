<script setup lang="ts">
const props = defineProps<{
  code: string;
}>();
</script>
<template>
  <textarea
    readonly
    un-w="full"
    un-font="mono"
    un-bg="slate-100 dark:slate-900"
    un-whitespace="pre"
    :value="props.code"
  />
</template>
