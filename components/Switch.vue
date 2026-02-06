<script setup lang="ts" generic="T extends string">
const props = defineProps<{
  choices: T[];
}>();
const choice = defineModel<T>({
  required: true,
});
</script>
<template>
  <div
    un-border-b="border slate-100 dark:slate-800"
    un-bg="slate-50 dark:slate-900/50"
    un-flex
    un-gap="1"
    un-rounded="lg"
    un-border="border slate-200/50 dark:slate-800/50"
    un-w="fit"
  >
    <button
      v-for="option in choices"
      :key="option"
      type="button"
      @click="choice = option"
      :class="[
        'flex items-center gap-2 px-4 py-2 rounded-md text-sm font-medium transition-all cursor-pointer',
        choice === option
          ? 'bg-white dark:bg-slate-800 text-blue-600 dark:text-blue-400 shadow-sm'
          : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200 hover:bg-slate-200/50 dark:hover:bg-slate-800/50',
      ]"
    >
      <slot :name="option" />
    </button>
  </div>
</template>
