const GET_ALL_TOUR = 'GET_ALL_TOUR'
const GET_CITY_TOUR = 'GET_CITY_TOUR'
const GET_ALL_REST = 'GET_ALL_REST'
const GET_CITY_REST = 'GET_CITY_REST'
const GET_ALL_HOTEL = 'GET_ALL_HOTEL'
const GET_CITY_HOTEL = 'GET_CITY_HOTEL'
const GET_ALL_ACTIVITY = 'GET_ALL_ACTIVITY'
const GET_CITY_ACTIVITY = 'GET_CITY_ACTIVITY'

const state = () => ({
  allTour: '',
  cityTour: '',
  allRest: '',
  cityRest: '',
  allHotel: '',
  cityHotel: '',
  allActivity: '',
  cityActivity: ''
})

const mutations = {
  [GET_ALL_TOUR](state, tours) {
    state.allTour = tours
  },
  [GET_CITY_TOUR](state, cityTour) {
    state.cityTour = cityTour
  },
  [GET_ALL_REST](state, rests) {
    state.allRest = rests
  },
  [GET_CITY_REST](state, cityRest) {
    state.cityRest = cityRest
  },
  [GET_ALL_HOTEL](state, hotels) {
    state.allHotel = hotels
  },
  [GET_CITY_HOTEL](state, cityHotel) {
    state.cityHotel = cityHotel
  },
  [GET_ALL_ACTIVITY](state, activitys) {
    state.allActivity = activitys
  },
  [GET_CITY_ACTIVITY](state, cityActivity) {
    state.cityActivity = cityActivity
  }
}

const actions = {
  async getAllTours({ commit }) {
    const url = 'ScenicSpot'
    const res = await this.$axios.$get(`${url}?$format=JSON`)

    commit('GET_ALL_TOUR', res)
  },
  async getCityTours({ commit }, city) {
    const url = 'ScenicSpot'
    const data = await this.$axios.$get(`${url}/${city}?$format=JSON`)

    commit('GET_CITY_TOUR', data)
  },
  async getAllRest({ commit }) {
    const url = 'Restaurant'
    const res = await this.$axios.$get(`${url}?$format=JSON`)

    commit('GET_ALL_REST', res)
  },
  async getCityRest({ commit }, city) {
    const url = 'Restaurant'
    const res = await this.$axios.$get(`${url}/${city}?$format=JSON`)

    commit('GET_CITY_REST', res)
  },
  async getAllHotel({ commit }) {
    const url = 'Hotel'
    const res = await this.$axios.$get(`${url}?$format=JSON`)

    commit('GET_ALL_HOTEL', res)
  },
  async getCityHotel({ commit }, city) {
    const url = 'Hotel'
    const res = await this.$axios.$get(`${url}/${city}?$format=JSON`)

    commit('GET_CITY_HOTEL', res)
  },
  async getAllActivity({ commit }) {
    const url = 'Activity'
    const res = await this.$axios.$get(`${url}?$format=JSON`)

    commit('GET_ALL_ACTIVITY', res)
  },
  async getCityActivity({ commit }, city) {
    const url = 'Activity'
    const res = await this.$axios.$get(`${url}/${city}?$format=JSON`)

    commit('GET_CITY_ACTIVITY', res)
  },
}

export default {
  state,
  mutations,
  actions
}