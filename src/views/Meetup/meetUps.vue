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
            </div>
          </v-card-title>

          <v-card-actions>
            <v-btn flat color="primary" router :to="meetup.link">Explore</v-btn>
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
    show: false,
    meetups: [
      {
        id: "001",
        title: "MeetUp in Kiev",
        details:
          "I'm a thing. But, like most politicians, he promised more than he could deliver. You won't have time for sleeping, soldier, not with all the bed making you'll be doing. Then we'll go with that data file! Hey, you add a one and two zeros to that or we walk! You're going to do his laundry? I've got to find a way to escape.",
        montra: "Misto Bahato Fine Odne",
        link: "/meetups/001",
        src:
          "https://cdn-image.travelandleisure.com/sites/default/files/styles/1600x1000/public/1455214872/0-kiev0316.jpg?itok=6FUntx2l"
      },
      {
        id: "002",
        title: "MeetUp in Ternopil",
        details:
          "I'm a thing. But, like most politicians, he promised more than he could deliver. You won't have time for sleeping, soldier, not with all the bed making you'll be doing. Then we'll go with that data file! Hey, you add a one and two zeros to that or we walk! You're going to do his laundry? I've got to find a way to escape.",
        montra: "Misto Bahato Fine Odne",
        link: "/meetups/002",
        src: "https://rada.te.ua/app/webroot/files/DJI-0006-218000.jpg"
      },
      {
        id: "003",
        title: "MeetUp in Odesa",
        details:
          "I'm a thing. But, like most politicians, he promised more than he could deliver. You won't have time for sleeping, soldier, not with all the bed making you'll be doing. Then we'll go with that data file! Hey, you add a one and two zeros to that or we walk! You're going to do his laundry? I've got to find a way to escape.",
        montra: "Misto Bahato Fine Odne",
        link: "/meetups/003",
        src:
          "https://lonelyplanetimages.imgix.net/a/g/hi/t/0e8883342c4c387204eb7fe94f836a02-odesa.jpg?sharp=10&vib=20&w=1200"
      },
      {
        id: "004",
        title: "MeetUp in Lviv",
        details:
          "I'm a thing. But, like most politicians, he promised more than he could deliver. You won't have time for sleeping, soldier, not with all the bed making you'll be doing. Then we'll go with that data file! Hey, you add a one and two zeros to that or we walk! You're going to do his laundry? I've got to find a way to escape.",
        montra: "Misto Bahato Fine Odne",
        link: "/meetups/004",
        src: "http://k6s3v6r4.ssl.hwcdn.net/pictures/813/813416.jpg"
      }
    ]
  })
};
</script>