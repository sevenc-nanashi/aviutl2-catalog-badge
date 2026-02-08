import { ComputedRef, ref, Ref, computed, watch } from "vue";

const uninit = Symbol("uninitialized");
export function debouncedComputed<T>(delay: number, computeFn: ComputedRef<T> | (() => T)): Ref<T> {
  let timeout: ReturnType<typeof setTimeout> | null = null;

  const val = ref(uninit) as Ref<T>;
  watch(typeof computeFn === "function" ? computed(computeFn) : computeFn, (newValue) => {
    if (timeout !== null) {
      clearTimeout(timeout);
    }
    timeout = setTimeout(() => {
      val.value = newValue;
      timeout = null;
    }, delay);
  });
  val.value = typeof computeFn === "function" ? computeFn() : computeFn.value;

  if (val.value === uninit) {
    // NOTE: この時点でwatchEffectは一度は実行されているのでval.valueはuninitではない
    throw new Error("debouncedComputed: Unexpected uninitialized state");
  }

  return val;
}
