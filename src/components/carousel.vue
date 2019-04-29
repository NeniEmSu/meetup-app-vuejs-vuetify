
  <template>
  <div>
    <v-layout row wrap>
      <v-carousel hide-delimiters>
        <v-carousel-item
          style="cursor: pointer;"
          prevent.stop
          v-for="meetup in meetups"
          :key="meetup.id"
          :src="meetup.src"
          @click="onLoadMeetup(meetup.id)"
        >
          <div class="title s12">
            <v-container class="text-center">{{meetup.title}}</v-container>
          </div>
        </v-carousel-item>
      </v-carousel>
      <v-layout row wrap>
        <v-flex xs12 sm6 class="text-xs-center text-sm-right">
          <v-btn large router to="/meetups" class="primary">Explore Meetups</v-btn>
        </v-flex>
        <v-flex xs12 sm6 class="text-xs-center text-sm-left">
          <v-btn large router to="/meetUp/new" class="primary">Organize Meetup</v-btn>
        </v-flex>
      </v-layout>
    </v-layout>
    <v-layout row wrap>
      <v-container>
        <v-flex xs12 class="text-xs-center my-3">
          <h3>Join our awesome Meetups today!</h3>
        </v-flex>

        <v-flex xs12>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda non delectus accusantium libero, tempora nobis excepturi inventore dicta corporis minima harum eum fugit! Accusamus assumenda sed sapiente inventore, eum libero modi minus quia. Eos dolor ullam magnam tempore odit debitis quas enim. Quia, expedita dolores! Quam, iure ipsum quia cupiditate iste illo deserunt recusandae. Magnam laudantium itaque ipsa commodi atque dolor sint, necessitatibus aliquam fuga expedita nisi aspernatur pariatur cumque reprehenderit impedit rem quis soluta sit ea quisquam adipisci mollitia! Aut aspernatur molestiae, illo ullam aliquid exercitationem ratione ipsa quas aperiam tempore nulla natus debitis explicabo iste excepturi deserunt? Blanditiis?</p>
        </v-flex>
        <v-flex xs12 class="text-xs-center my-3">
          <h3>What do we do?</h3>
        </v-flex>
        <v-flex xs12>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda non delectus accusantium libero, tempora nobis excepturi inventore dicta corporis minima harum eum fugit! Accusamus assumenda sed sapiente inventore, eum libero modi minus quia. Eos dolor ullam magnam tempore odit debitis quas enim. Quia, expedita dolores! Quam, iure ipsum quia cupiditate iste illo deserunt recusandae. Magnam laudantium itaque ipsa commodi atque dolor sint, necessitatibus aliquam fuga expedita nisi aspernatur pariatur cumque reprehenderit impedit rem quis soluta sit ea quisquam adipisci mollitia! Aut aspernatur molestiae, illo ullam aliquid exercitationem ratione ipsa quas aperiam tempore nulla natus debitis explicabo iste excepturi deserunt? Blanditiis?</p>
        </v-flex>
      </v-container>
    </v-layout>
  </div>
</template>

  

<script>
export default {
  computed: {
    meetups() {
      return this.$store.getters.featuredMeetups;
    }
  },
  methods: {
    onLoadMeetup(id) {
      this.$router.push("/meetups/" + id);
    }
  }
};
</script>


<style lang="stylus">
.title {
  width: 100%;
  text-align: center;
  justify-content: center;
  position: absolute;
  bottom: 0px;
  background-color: rgba(0, 0, 0, 0.5);
  color: #ffffff;
}
</style>
