<!-- https://vike.dev/Layout -->

<template>
  <header
    un-p="4"
    un-text="2xl"
    un-font="bold"
    un-bg="white/80 dark:slate-900/80"
    un-border-b="1 slate-200 dark:slate-800"
  >
    AviUtl2 Catalog Badge
  </header>
  <div un-p="4">
    <slot />
  </div>
  <div un-flex-grow />
  <footer
    un-bg="white/80 dark:slate-900/80"
    un-p="2"
    un-text="center xs slate-500 dark:slate-400 sm"
    un-border-t="1 slate-200 dark:slate-800"
  >
    <a
      href="https://github.com/sevenc-nanashi/aviutl2-catalog-badge"
      target="_blank"
      rel="noopener noreferrer"
      class="link"
      >AviUtl2 Catalog Badge</a
    >
    &copy; 2026
    <a
      href="https://sevenc7c.com"
      target="_blank"
      rel="noopener noreferrer"
      class="link"
      un-text="![#48b0d5]"
      >Nanashi.</a
    >
    / このページはAviUtl2 Catalogと関係のない非公式のページです。
  </footer>
</template>

<script lang="ts" setup>
import "@unocss/reset/tailwind-v4.css";
import "@fontsource/noto-sans-jp/400.css";
import "@fontsource/noto-sans-jp/700.css";
import "virtual:uno.css";
import "./style.css";
</script>
