<template>
  <v-app>

    <v-app-bar
        app
        color="#5f9ea0"
        flat
    >
      <v-row>
        <v-btn
            to="/dashboard"
            rounded
            color="primary"
            class="mr-10 ml-10"
        >Dashboard
        </v-btn>
        <v-btn
            to="/calculator"
            rounded
            color="primary"
        >Calculator
        </v-btn>
      </v-row>

    </v-app-bar>

    <v-main
        app
    >
      <v-container fluid>
        <router-view/>
      </v-container>
    </v-main>

  </v-app>
</template>

<script>
export default {
  name: 'App',
}
</script>
