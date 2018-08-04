<template>
	<v-container>
    <v-layout row wrap v-for="meetup in meetups" :key="meetup.id" class="mb-2">
      <v-flex xs12>
        <v-card class="info">
          <v-container>
            <v-layout row>
              <v-flex xs12 sm10 md8 offset-sm1 offset-md2>
               	<v-card-media
                  :src="meetup.imageUrl"
                  height="130px">
               	</v-card-media>
              </v-flex>
              <v-flex xs7 sm8 md9>
                <v-card-title primary-title>
                  <div>
	                  <h5 class="white--text mb-0">{{meetup.title}}</h5>
	                  <div>{{ meetup.date }}</div>
                  </div>
                </v-card-title>
                <v-card-action>
                  <v-btn flat :to="'/meetups/' + meetup.id">
                    <v-icon left light>arrow_forward</v-icon>
                    View Meetup
                  </v-btn>
                </v-card-action>
              </v-flex>
            </v-layout>
          </v-container>
        </v-card>
      </v-flex>
    </v-layout>
	</v-container>
</template>

<script>
export default {
  computed: {
    meetups () {
      return this.$store.getters.loadedMeetups
    }
  }
}
</script>
