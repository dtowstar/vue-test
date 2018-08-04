import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
    loadedMeetups: [
      {
        imageUrl: 'https://www.ediblemanhattan.com/wp-content/uploads/2016/04/header-new-york.jpg',
        id: 'sdfsdga',
        title: 'Meet up in New York',
        date: '2017-07-17'
      },
      { imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUzlZ9yLIa5T0tDT4hwxGgBImEKWbm59cDbvusRxLhC56ZQ6w7fA',
        id: 'sdfsdgasada',
        title: 'Meet up in New Paris',
        date: '2017-07-19'
      }
    ],
    user: {
      id: 'asdf12',
      registeredMeetups: ['sdfsdgasada']
    }
  },
  mutation: {},
  action: {},
  getters: {
    loadedMeetups (state) {
      return state.loadedMeetups.sort((MeetupA, MeetupB) => MeetupA.date > MeetupB.date)
    },
    featuredMeetups (state, getters) {
      return this.getters.loadedMeetups.slice(0, 5)
    },
    loadedMeetup (state) {
      return (meetupId) => {
        return state.loadedMeetups.find((meetup) => {
          return meetup.id === meetupId
        })
      }
    }
  }
})
