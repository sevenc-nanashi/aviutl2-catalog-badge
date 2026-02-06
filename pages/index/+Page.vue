<script setup lang="ts">
import { computed, ref } from "vue";
import Card from "../../components/Card.vue";
import Switch from "../../components/Switch.vue";
import CodeBlock from "../../components/CodeBlock.vue";

const choice = ref<"markdown" | "html">("markdown");
const packageId = ref("");

const pageUrl = computed(() => {
  if (!packageId.value) {
    return "";
  }
  return `https://aviutl2-catalog-badge.sevenc-nanashi.dev/packages/${encodeURIComponent(
    packageId.value,
  )}`;
});
const badgeUrl = computed(() => {
  if (!packageId.value) {
    return "";
  }
  const apiUrl = `https://aviutl2-catalog-badge.sevenc7c.workers.dev/api/badges/${encodeURIComponent(
    packageId.value,
  )}`;
  return `https://img.shields.io/endpoint?url=${encodeURIComponent(apiUrl)}`;
});
const markdownCode = computed(() => {
  if (!packageId.value) {
    return "パッケージIDを入力してください。";
  }
  return `[![AviUtl2 Catalog](${badgeUrl.value})](${pageUrl.value})`;
});
const htmlCode = computed(() => {
  if (!packageId.value) {
    return "パッケージIDを入力してください。";
  }
  return `<a href="${pageUrl.value}"><img src="${badgeUrl.value}" alt="AviUtl2 Catalog"></a>`;
});
</script>

<template>
  <div un-max-w="md:screen-md" un-mx="auto" un-p="4" un-space-y="2">
    <h1 class="text-xl font-bold mb-4">バッジを作成</h1>
    <p>パッケージIDを入力してください。</p>
    <input
      v-model="packageId"
      type="text"
      placeholder="sevenc-nanashi.aviutl2-rs.rusty_scripts_search"
      un-w="full"
    />

    <Card un-space-y="4">
      <template #header>
        <Switch :choices="['markdown', 'html']" v-model="choice">
          <template #markdown>Markdown</template>
          <template #html>HTML</template>
        </Switch>
      </template>

      <div un-space-y="2">
        以下のコードをコピーして、READMEなどに貼り付けてください。
        <CodeBlock :code="choice === 'markdown' ? markdownCode : htmlCode" />
      </div>
    </Card>
  </div>
</template>
