<template>
  <div class="secondary-nav">
    <div class="subnav-title">
      <slot name="title">{{ title }}</slot>
    </div>
    <slot />
    <NavItem
      v-for="item in subnavList"
      :key="item"
      :text="item"
      :class="{'is-active': item === 'Overview'}" />
  </div>
</template>

<script>
import NavItem from '@/components/NavItem'

export default {
  name: 'Subnav',
  components: { NavItem },
  props: {
    title: {
      type: String,
      default: ''
    }
  },
  data () {
    return {
      subnavList: [ 'Overview', 'Contracts', 'Implementation', 'Observability' ]
    }
  }
}
</script>

<style lang="scss" scoped>
.secondary-nav {
  background-image: linear-gradient(to bottom right, #03416C, #003255);
  background-color: 03416C;
  .subnav-title {
    display: flex;
    align-items: center;
    margin-bottom: 10px;
    padding: 0 1rem;
    height: 60px;
    font-weight: 500;
    font-size: 1.125rem;
    border-bottom: 1px solid rgba(255,255,255,.12);
  }
}
</style>

<style lang="scss">
.secondary-nav .nav-item {
  height: auto;
  padding: 0;
  margin: 0 10px;
  border-radius: 2px;
  font-size: .875rem;
  a { padding: 10px; }
  &:not(.is-active) { color: rgba(255, 255, 255, 7); }
}
</style>
