<template>
  <section id="history">
    <h1>
      Work History
    </h1>
    <position
      v-for="(position, index) in jobs"
      :key="index"
      :position="position"
    ></position>
  </section>
</template>

<script>
import Position from '~/components/position'
export default {
  components: {
    Position
  },
  data() {
    return {
      jobs: [
        {
          title: 'Front End Developer',
          places: [
            {
              place: 'iTOVi',
              startYear: '2017',
              endYear: '2019',
              bullets: [
                'Redesigned and built iTOVi’s checkout page to create a smoother experience for customers.',
                'Rebuilt iTOVi’s user dashboard to be more stable and to better reflect the the branding of the company.'
              ]
            },
            {
              place: 'Catalog',
              startYear: '2018',
              bullets: [
                'Architected and built the client-facing app for Catalog, using the Vue framework.'
              ]
            }
          ]
        },
        {
          title: 'Full Stack Developer',
          places: [
            {
              place: 'Oddmob/iTOVi',
              startYear: '2017',
              endYear: '2019',
              bullets: [
                'Placed in charge of iTOVi’s release process for their software products.',
                'Worked on transitioning the flagship app for iTOVi to the Flutter framework.'
              ]
            },
            {
              place: 'ResMan',
              startYear: '2016',
              endYear: '2017',
              bullets: [
                'Led the development of an internal wiki for the customer support team.',
                'Helped with building a new UI for the flagship product'
              ]
            },
            {
              place: 'McKay School of Education (BYU)',
              startYear: '2016',
              // endYear: '2016',
              bullets: [
                'Led the development of an internal wiki for the customer support team.',
                'Helped with building a new UI for the flagship product'
              ]
            }
          ]
        }
      ]
    }
  }
}
</script>
