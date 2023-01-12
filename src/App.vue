<template>
  <div id="app">
    <NotificationsItem />
    <div class="content">
      <AppHeader />
      <router-view></router-view>
    </div>
    <AppFooter />
  </div>
</template>

<script>
import AppFooter from './components/FooterItem';
import AppHeader from './components/header';
import NotificationsItem from './components/notifications';

export default {
  name: 'App',
  components: {
    AppFooter,
    AppHeader,
    NotificationsItem,
  },
};
</script>

<style lang="scss" scoped>
#app {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  font-family: Montserrat, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.content {
  flex-grow: 1;
}
</style>