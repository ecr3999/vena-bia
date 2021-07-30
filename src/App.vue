<template>
  <v-app id="inspire">
<v-navigation-drawer 
v-model="drawer"
app>
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title class="text-h4">
            VENA
          </v-list-item-title>
          <v-list-item-subtitle>
            Vendor Application
          </v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>

      <v-divider></v-divider>

      <v-list
        dense
        nav
      >
        <v-list-item
          v-for="item in items"
          :key="item.title"
          :to="item.to"
          link
        >
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

        <v-app-bar
      app
      color="#125d98"
      dark
      shrink-on-scroll
      prominent
      src="https://picsum.photos/1920/1080?random"
      fade-img-on-scroll
      scroll-target="#scrolling-techniques-5"
      scroll-threshold="500"
    >
      <template v-slot:img="{ props }">
        <v-img
          v-bind="props"
          gradient="to top right, rgba(255,255,255,.7), rgba(18,93,152,.7)"
        ></v-img>
      </template>

      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>

      <v-app-bar-title>VENA</v-app-bar-title>

      <v-spacer></v-spacer>

      <v-btn icon>
        <v-icon>mdi-bell</v-icon>
      </v-btn>
    </v-app-bar>

    <v-main>
      <router-view></router-view>
    </v-main>
  </v-app>
</template>

<script>
  export default {
    data: () => ({ drawer: null,
            items: [
          { title: 'Home', icon: 'mdi-home', to: '/' },
          { title: 'New Submission', icon: 'mdi-file-document-edit', to: '/new' },
          { title: 'Task List', icon: 'mdi-order-bool-ascending-variant', to: '/tasklist' },
          { title: 'About', icon: 'mdi-help-box', to: '/about' }
        ],
        }),
  }
</script>