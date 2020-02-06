<template>
  <aside :class="{'has-subnav': hasSubnav}">
    <button class="trigger" @click="hasSubnav = !hasSubnav">TOGGLE SIDEBAR</button>
    <div class="main-nav">
      <div class="top-nav">
        <NavItem icon="logo">
          <template #item-link>
            <img width="100px" src="../assets/kong-logo.png"  />
          </template>
        </NavItem>
        <NavItem
          v-for="item in navList"
          :key="item"
          :icon="item.toLowerCase()"
          :text="item"
          :is-active="item === activeItem"
          @toggled="activeItem = item" />
      </div>
      <div class="bottom-nav">
        <NavItem
          v-for="item in bottomList"
          :key="item"
          :icon="item.toLowerCase()"
          :text="item === 'Gateways' ? 'API Gateway' : item"
          :is-active="item === activeItem"
          @toggled="activeItem = item">
        </NavItem>
        <NavItem icon="profile" class="profile-item">
          <template #item-icon>
            <img src="../assets/icon-profile.png"  />
          </template>
          <template v-slot:item-link>
            <span>Konger 1</span>
            <svg width="12" height="5" xmlns="http://www.w3.org/2000/svg">
              <path d="M1 0l5 5 5-5" stroke="#FFF" fill="none" fill-rule="evenodd" stroke-linejoin="bevel" stroke-opacity=".8"/>
            </svg>
          </template>
        </NavItem>
      </div>
    </div>
    <div
      v-if="hasSubnav"
      class="secondary-nav">
      <NavItem>
        <template #item-link>
          fooAPI
        </template>
      </NavItem>
      <NavItem
        v-for="item in subnavList"
        :key="item"
        :text="item"/>
    </div>
  </aside>
</template>

<script>
import NavItem from '@/components/NavItem'

export default {
  name: 'Sidebar',
  components: { NavItem },

  data () {
    return {
      hasSubnav: true,
      navList: [ 'Services', 'Portals', 'Observability' ],
      bottomList: [ 'Organization', 'Gateways', 'Help' ],
      subnavList: [ 'Overview', 'Contracts', 'Implementation', 'Observability' ],
      activeItem: 'Services'
    }
  }
}
</script>

<style lang="scss" scoped>
aside {
  display: flex;
  height: 100vh;
  color: #fff;
  &.has-subnav {
    max-width: 285px; // .main-nav (63px) + .secondary-width (222px)
    .main-nav {
      max-width: 63px;
    }
  }

  .main-nav,
  .secondary-nav {
    flex: 1;
  }

  .main-nav {
    display: flex;
    flex-direction: column;
    max-width: 220px;
    background-color: #1E4F82;
    transition: all 200ms ease;
    .top-nav {
      margin-bottom: auto;
    }
  }

  .secondary-nav {
    background-color: #396C9A;
  }
}
</style>

<style lang="scss">
.trigger {
  position: fixed;
  top: 0;
  right: 0;
  height: 50px;
}

.profile-item .nav-link {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
}
</style>
