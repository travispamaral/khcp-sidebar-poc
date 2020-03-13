<template>
  <div class="switcher">
  <div
    v-if="isOpen"
    class="switcher-background"
    @click="isOpen = false" />
    <div
      :class="{ 'is-open': isOpen }"
      class="switcher-title"
      @click="isOpen = !isOpen">
      fooAPI
    </div>
    <div
      v-if="isOpen"
      class="switcher-panel">
      <div class="switcher-search">
        <input v-model="search" type="text" placeholder="Search Services" />
      </div>
      <div class="switcher-items">
        <ul>
          <li
            v-for="(item, idx) in filteredItems"
            :key="idx"
            :class="idx === 0 && 'selected'">
            {{ item }}
          </li>
        </ul>
      </div>
      <div class="switcher-footer">
        <a href="#">View all services</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ServiceSwitcher',
  data () {
    return {
      isOpen: false,
      search: '',
      items: [ 'fooAPI', 'esodAPI', 'acmeAPI', 'kong', 'mashape' ]
    }
  },
  computed: {
    filteredItems () {
      return this.search
        ? this.items.filter(i => i.includes(this.search.toLowerCase()))
        : this.items
    }
  }
}
</script>

<style lang="scss" scoped>
.switcher-background {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 0;
}

.switcher {
  .switcher-title {
    position: relative;
    padding: 10px;
    margin: 10px;
    font-weight: 500;
    border-radius: 2px;
    cursor: pointer;
    &.is-open { background-color: rgba(255,255,255,.06); }
    &::after{
      content: "";
      display: block;
      position: absolute;
      width: 9px;
      height: 5px;
      background-image: url("data:image/svg+xml,%3Csvg width='11' height='5' viewBox='0 0 11 5' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M1 0l4.5 5L10 0' stroke='%23FFF' fill='none' fill-rule='evenodd' stroke-linejoin='bevel' stroke-opacity='.8'/%3E%3C/svg%3E");
      right: 6px;
      top: 17px;
      background-size: 9px 5px;
    }
    &.is-open:after { transform: rotate(180deg); }
  }
  .switcher-panel {
    position: absolute;
    width: 200px;
    border-radius: 2px;
    background-color: #fff;
    box-shadow: 0 2px 4px rgba(0,0,0,.2);
    z-index: 1;
    .switcher-search {
      padding: .5rem;
      border-bottom: 1px solid rgba(0,0,0,.10);
      input {
        width: 100%;
        height: 30px;
        box-sizing: border-box;
        border-radius: 3px;
        border: 1px solid rgba(0,0,0,.10);
        padding: 12px;
      }
    }
    .switcher-items ul {
      list-style-type: none;
      padding: 0;
      margin: .5rem 0 1rem;
      color: rgba(0,0,0,.7);
      li {
        display: flex;
        align-items: center;
        padding: .5rem 1.125rem;
        cursor: pointer;
        &.selected,
        &:hover {
          color: rgb(23, 130, 207);
          background-color: rgba(23, 130, 207, .06);
        }
      }
    }
    .switcher-footer {
      padding: 1rem 1.25rem;
      border-top: 1px solid rgba(0,0,0,.10);
      a {
        color: #1782CF;
        text-decoration: none;
        &:hover { text-decoration: underline; }
      }
    }
  }
}
</style>
