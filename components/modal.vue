<script setup>
const modal = useModalStore();
</script>

<template>
  <div>
    <template
      v-for="{
        key,
        type,
        addClass,
        isActive,
        title,
        message,
        buttons,
        size,
      } in modal.items"
    >
      <div
        v-if="type === 'modal' && isActive"
        class="c-modal"
        :class="addClass"
      >
        <div class="c-dimmer" />
        <div
          :id="key"
          class="c-modal__inner"
          :style="{ maxWidth: `${size}px` }"
        />
      </div>
      <div v-else-if="type === 'alert' && isActive" class="c-alert">
        <div class="c-dimmer" />
        <div class="c-alert__inner">
          <div class="c-alert__title">{{ title }}</div>
          <div class="t-b15 c-alert__text" v-html="message" />
          <div class="c-alert__btns">
            <Button
              v-for="{
                text,
                styleType,
                validator,
                onClick,
                onConfirm,
                autoClose,
              } in buttons"
              size="auto"
              :text="text"
              :styleType="styleType"
              :validator="validator"
              :onClick="
                () => {
                  onClick && onClick(key);
                }
              "
              :onConfirm="
                () => {
                  onConfirm && onConfirm(key);
                  autoClose === false || modal.close(key);
                }
              "
            />
          </div>
        </div>
      </div>
    </template>
  </div>
</template>
