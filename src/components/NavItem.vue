<template>
  <div
    :class="{ 'is-active': isActive }"
    class="nav-item">
    <a href="#" @click="$emit('toggled', text)">
      <div
        v-if="icon"
        class="nav-icon">
        <slot name="item-icon">
          <img :src="getIconUrl(icon)"  />
        </slot>
      </div>
      <div class="nav-link">
        <slot name="item-link">
          {{ text }}
        </slot>
      </div>
    </a>
  </div>
</template>

<script>
export default {
  name: 'NavItem',
  props: {
    isActive: {
      type: Boolean,
      default: false
    },
    icon: {
      type: String,
      default: ''
    },
    text: {
      type: String,
      default: ''
    }
  },

  methods: {
    getIconUrl (icon) {
      return require(`../assets/icon-${icon}.png`)
    }
  }
}
</script>

<style lang="scss" scoped>
.nav-item {
  display: flex;
  height: 50px;
  padding: 0 1rem;
  color: #fff;
  font-family: 'Roboto';
  white-space: nowrap;
  box-sizing:border-box;
  &:hover,
  &.is-active {
    background: rgba(255,255,255,.06);
  }
  &.is-active {
    font-weight: bold;
  }
  a {
    display: flex;
    width: 100%;
    align-items: center;
    color: inherit;
    text-decoration: none;
  }
  .nav-icon {
    padding-right: 1rem;
    img { width: 32px; }
  }
}
</style>
