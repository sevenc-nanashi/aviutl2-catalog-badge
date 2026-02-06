<script lang="ts" setup>
import { usePageContext } from "vike-vue/usePageContext";

const pageContext = usePageContext();
</script>
<template>
  <div un-max-w="md:screen-md" un-mx="auto" un-p="4" un-space-y="2">
    <h1 v-if="pageContext.is404" class="text-xl font-bold mb-4">
      404 - Page Not Found
    </h1>
    <h1 v-else class="text-xl font-bold mb-4">
      Something went wrong!
    </h1>
    <p v-if="pageContext.is404">
      お探しのページは見つかりませんでした。URLが正しいかご確認ください。
    </p>
    <p v-else>
      エラーが発生しました。時間をおいて再度お試しください。
    </p>
  </div>
</template>
