<template>
  <aside :class="{'has-subnav': hasSubnav}">
    <div class="main-nav">
      <div class="nav-logo">
        <NavItem
          has-icon
          :is-menu-item="false">
          <template #item-icon>
            <img src="@/assets/icon-kong.svg" />
          </template>
          <template #item-link>
            <img src="@/assets/icon-khcp.svg" />
          </template>
        </NavItem>
      </div>
      <div class="top-nav">
        <NavItem
          v-for="item in navList"
          :key="item.text"
          :icon="item.icon"
          :text="item.text"
          :is-active="activeItem === item.text"
          has-icon
          @clicked="(item) => activeItem = item" />
      </div>

      <div class="bottom-nav">
        <NavItem
          v-for="item in bottomList"
          :key="item.text"
          :icon="item.icon"
          :text="item.text"
          has-icon>
        </NavItem>
        <!--
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
        -->
      </div>

    </div>
    <Subnav
      v-if="hasSubnav"
      title="Services">
      <ServiceSwitcher />
    </Subnav>
  </aside>
</template>

<script>
import NavItem from '@/components/NavItem'
import Subnav from '@/components/Subnav'
import ServiceSwitcher from '@/components/ServiceSwitcher'

export default {
  name: 'Sidebar',
  components: { NavItem, Subnav, ServiceSwitcher },

  data () {
    return {
      kongLogo: require('@/assets/icon-kong.svg'),
      khcpLogo: require('@/assets/icon-khcp.svg'),
      navList: [
        { text: 'Services', icon: 'gateway' },
        { text: 'Portals', icon: 'portalV2' },
        { text: 'Observability', icon: 'vitals' }
      ],
      bottomList: [
        { text: 'Organization', icon: 'people' },
        { text: 'API Gateway', icon: 'stackedCards' },
        { text: 'Help', icon: 'vitals' }
      ],
      activeItem: ''
    }
  },

  computed: {
    hasSubnav () {
      return this.activeItem === 'Services'
    }
  }
}
</script>

<style lang="scss" scoped>
aside {
  --sidebarOpenWidth: 220px;
  --sidebarCollapsedWidth: 64px;
  --subnavWidth: 200px;

  display: flex;
  height: 100vh;
  color: #fff;
  font-family: 'Roboto';
  .nav-logo {
    margin-bottom: 10px;
    .nav-item { padding: 1rem; }
  }
  &.has-subnav {
    max-width: calc(var(--sidebarCollapsedWidth) + var(--subnavWidth));
    .main-nav { max-width: var(--sidebarCollapsedWidth); }
  }

  .main-nav,
  .secondary-nav {
    flex: 1;
  }

  .main-nav {
    display: flex;
    flex-direction: column;
    max-width: var(--sidebarOpenWidth);
    background-image: linear-gradient(to bottom right, #00487A, #00518A);
    background-color: #00487A;
    .top-nav { margin-bottom: auto; }
  }
}
</style>

<style lang="scss">
.profile-item .nav-link {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
}
</style>
