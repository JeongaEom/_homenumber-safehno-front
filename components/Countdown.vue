<script setup>
import { ref, watch, onMounted, onBeforeUnmount } from "vue";
import { timer, getCountDownText } from "@/utils";

const p = defineProps({
  // start, restart, stop
  command: { type: String, default: null },
  seconds: { type: Number, default: null },
  onUpdate: { type: Function, default: null },
  onEnd: { type: Function, default: null },
});

const self = ref();

let timerId = null;
const startTimer = (savedStartSeconds) => {
  timerId && clearInterval(timerId);
  timerId = timer(
    (current) => {
      self.value.querySelector("[counter]").innerText =
        getCountDownText(current);
      const progress = (savedStartSeconds - current) / savedStartSeconds;
      p.onUpdate && p.onUpdate(progress);
    },
    () => {
      p.onEnd && p.onEnd();
    },
    p.seconds
  );
};

const command = () => {
  if (!Number(p.seconds)) return;
  setTimeout(() => {
    if (p.command === "start") {
      startTimer(p.seconds);
    } else if (p.command === "restart") {
      startTimer(p.seconds);
    } else if (p.command === "stop") {
      clearInterval(timerId);
    }
  });
};

watch(
  () => p.command,
  () => {
    command();
  },
  { immediate: true }
);

onMounted(() => {});

onBeforeUnmount(() => {
  timerId && clearInterval(timerId);
});
</script>

<template>
  <div ref="self">
    <slot></slot>
  </div>
</template>
