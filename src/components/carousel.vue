
  <template>
  <div>
    <v-layout row wrap>
      <v-carousel>
        <v-carousel-item
          v-for="meetup in meetups"
          :key="meetup.id"
          :src="meetup.src"
          reverse-transition="fade"
          transition="fade"
        >
          <div class="title s12">
            <v-container class="text-center">
              {{meetup.title}}
              <v-layout row wrap>
                <v-flex xs12 sm6 class="text-xs-center text-sm-right">
                  <v-btn medium router to="/meetups" class="primary">Explore Meetups</v-btn>
                </v-flex>
                <v-flex xs12 sm6 class="text-xs-center text-sm-left">
                  <v-btn medium router to="/createMeetUps" class="primary">Organize Meetup</v-btn>
                </v-flex>
              </v-layout>
            </v-container>
          </div>
        </v-carousel-item>
      </v-carousel>
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
  data() {
    return {
      meetups: [
        {
          id: "001",
          title: "MeetUp in Kiev",
          src:
            "https://cdn-image.travelandleisure.com/sites/default/files/styles/1600x1000/public/1455214872/0-kiev0316.jpg?itok=6FUntx2l"
        },
        {
          id: "002",
          title: "MeetUp in Ternopil",
          src: "https://rada.te.ua/app/webroot/files/DJI-0006-218000.jpg"
        },
        {
          id: "003",
          title: "MeetUp in Odesa",
          src:
            "https://lonelyplanetimages.imgix.net/a/g/hi/t/0e8883342c4c387204eb7fe94f836a02-odesa.jpg?sharp=10&vib=20&w=1200"
        },
        {
          id: "004",
          title: "MeetUp in Lviv",
          src: "http://k6s3v6r4.ssl.hwcdn.net/pictures/813/813416.jpg"
        }
      ]
    };
  }
};
</script>


<style lang="stylus">
#example-custom-transition {
  .fade {
    &-enter-active, &-leave-active, &-leave-to {
      transition: 0.3s ease-out;
      position: absolute;
      top: 0;
      left: 0;
    }

    &-enter, &-leave, &-leave-to {
      opacity: 0;
    }
  }
}

.title {
  width: 100%;
  text-align: center;
  justify-content: center;
  position: absolute;
  bottom: 50px;
  background-color: rgba(0, 0, 0, 0.5);
  color: #ffffff;
}
</style>
