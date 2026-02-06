<script setup lang="ts">
import { computed, onMounted } from "vue";
import Card from "../../../components/Card.vue";
import { usePageContext } from "vike-vue/usePageContext";

const pageContext = usePageContext();
const id = computed(() => pageContext.routeParams.id);
const url = computed(() => `aviutl2-catalog://package/${id.value}`);

onMounted(() => {
  // window.location.href = url.value;
});
</script>

<template>
  <div un-max-w="md:screen-md" un-mx="auto" un-p="4" un-space-y="2">
    <h1 class="text-xl font-bold mb-4">AviUtl2 Catalogを起動中...</h1>
    <p>AviUtl2 Catalogを開いています。</p>
    <Card>
      <template #header>手動で開く</template>
      <p>もし開かない場合は、以下のリンクから開いてください：</p>
      <a :href="url" class="link">{{ url }}</a>
    </Card>
    <Card>
      <p>
        AviUtl2
        Catalogをインストールしていない場合、以下のリンクからインストールしてください：
      </p>
      <a href="https://github.com/neosku/aviutl2-catalog" class="link"
        >Neosku/aviutl2-catalog</a
      >
    </Card>
  </div>
</template>
