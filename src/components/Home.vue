<template>
  <v-content>
      <v-layout row wrap >
          <v-flex xs12 sm6 class=" text-xs-center text-sm-right">
              <v-btn large router to="/meetups" class="primary">Explore Meetups</v-btn>
          </v-flex>
          <v-flex xs12 sm6 class=" text-xs-center text-sm-left">
              <v-btn large router to="/meetup/new" class="primary">Organize Meetup</v-btn>
          </v-flex>
      </v-layout>
      <v-layout row wrap class="mt-2">
           <v-flex xs12>
               <v-carousel style="cursor: pointer;">
                <v-carousel-item
                v-for="meetup in meetups"
                :key="meetup.id"
                :src="meetup.imageUrl"
                @click.native="onLoadMeetup(meetup.id)"
                >
                <div class="title">{{ meetup.title}}</div>
                </v-carousel-item>
                </v-carousel>
            </v-flex>
      </v-layout>

       <v-layout row wrap class="mt-2">
          <v-flex xs12 class=" text-xs-center">
             <p>Join our awesome meetup</p>
          </v-flex>
      </v-layout>
  </v-content>
</template>
<script>
export default {
  computed: {
    meetups () {
      return this.$store.getters.featuredMeetups
    }
  },
  methods: {
    onLoadMeetup (id) {
      this.$router.push('/meetups/' + id)
    }
  }
}
</script>
<style scoped>
.title {
  position: absolute;
  bottom: 50px;
  background-color: rgba(0, 0, 0, 0.5);
  color: white;
  font-size: 2em;
  padding: 20px;
}
</style>
