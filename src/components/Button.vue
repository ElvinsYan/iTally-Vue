<template>
  <button class="button">
    <slot/>
  </button>
</template>

<script lang="ts">
import Vue from 'vue';
import {Component} from 'vue-property-decorator';

@Component
export default class Button extends Vue {

}
</script>

<style lang="scss" scoped>
.button {
  background: #767676;
  color: #FFFFFF;
  border-radius: 4px;
  border: none;
  padding: 8px 16px;

  &-wrapper {
    text-align: center;
    padding-top: 44px;
  }
}
</style>