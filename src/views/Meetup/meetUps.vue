<template>
  <v-container>
    <v-layout row wrap class="mb-3" v-for="meetup in meetups" :key="meetup.id">
      <v-flex xs12 sm6 offset-sm3>
        <v-card>
          <v-img :src="meetup.src" :alt="meetup.title" height="200px"></v-img>

          <v-card-title primary-title>
            <div>
              <div class="headline">{{meetup.title}}</div>
              <span class="grey--text">{{meetup.montra}}</span>
              <br>
              <span class="grey--text">{{meetup.date}}</span>
            </div>
          </v-card-title>

          <v-card-actions>
            <v-btn flat color="primary" router :to="'/meetups/' + meetup.id">Explore</v-btn>
            <v-spacer></v-spacer>
            <v-btn title="View Details" icon @click="show = !show">
              <v-icon>{{ show ? 'keyboard_arrow_up' : 'keyboard_arrow_down' }}</v-icon>
            </v-btn>
          </v-card-actions>

          <v-slide-y-transition>
            <v-card-text v-show="show" title="View Details">{{meetup.details}}</v-card-text>
          </v-slide-y-transition>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  data: () => ({
    show: false
  }),
  computed: {
    meetups() {
      return this.$store.getters.loadedMeetups;
    }
  },
  methods: {
    onLoadMeetup(id) {
      this.$router.push("/meetups/" + id);
    }
  }
};
</script>