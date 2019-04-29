<template>
  <v-container>
    <v-layout row wrap>
      <v-flex xs12>
        <v-card>
          <v-card-title>
            <h1 class="primary--text">{{meetup.title}}</h1>
          </v-card-title>
          <v-img :src="meetup.src" :alt="meetup.title" height="250px"></v-img>
          <v-card-text>
            <div class="info--text">{{meetup.date}} - Where it takes Place.</div>
            <div>{{meetup.details}}</div>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn class="primary">Register</v-btn>
          </v-card-actions>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>


<script>
export default {
  props: ["id"],
  computed: {
    meetup() {
      return this.$store.getters.loadedMeetup(this.id);
    }
  }
};
</script>