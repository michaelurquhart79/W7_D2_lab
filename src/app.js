import Vue from 'vue'

document.addEventListener('DOMContentLoaded', () => {
  console.log("I hate users!")
  new Vue({
    el: "#app",
    data: {
      countries: [],
      selectedCountry: null,
      selectedFavCountry: null,
      favCountries: []
    },
    mounted() {
      this.fetchCountries()
    },
    computed: {
      totalPopulation: function () {
        return this.countries.reduce((total, country) => {
          return total + country.population}, 0)
      },
      selectedCountryData: function () {
        return this.countries.find(country => country.name === this.selectedCountry)
      }
    },
    methods: {
      fetchCountries: function () {
        fetch("https://restcountries.eu/rest/v2/all")
        .then(response => response.json())
        .then(data => this.countries = data)
      },
      addFavCountry: function() {
        console.log("apples");
        this.favCountries.push(this.selectedFavCountry)
      }
    }
  })
})
