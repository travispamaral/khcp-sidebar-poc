<template>
  <div
    :class="[{'is-active': isActive }, {'is-menu-item': isMenuItem }]"
    class="nav-item">
    <a href="#" @click="$emit('clicked', text)">
      <div
        v-if="hasIcon"
        class="nav-icon">
        <slot name="item-icon">
          <KIcon
            :color="isActive ? 'rgba(255,255,255,1)' :  'rgba(255,255,255,.5)'"
            :icon="icon" />
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
    isMenuItem: {
      type: Boolean,
      default: true
    },
    hasIcon: {
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
  }
}
</script>

<style lang="scss" scoped>
.nav-item {
  display: flex;
  padding: 14px 20px;
  color: #fff;
  font-family: 'Roboto';
  white-space: nowrap;
  box-sizing:border-box;
  a {
    display: flex;
    width: 100%;
    align-items: center;
    color: inherit;
    text-decoration: none;
  }
  .nav-icon {
    display: flex;
    padding-right: 20px;
  }
  &.is-menu-item {
    &:hover,
    &.is-active { background: rgba(255,255,255,.06); }
    &.is-active { font-weight: bold; }
  }
}
</style>
