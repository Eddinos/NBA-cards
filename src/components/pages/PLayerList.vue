<template>
  <div class="PlayerList" :class="{'PlayerList--waitingForInput': allPlayers.length === 0 && searchInput === ''}">
    <input type="text" class="searchBar" placeholder="search player"
    @input="handleSearch" v-model="searchInput" @keyup.enter="submit">
    <ul class="list" v-if="allPlayers.length > 0">
      <router-link v-for="(player, index) in allPlayers"
      :to="{ name: 'Profile', params: {fullName: player.fullName} }"
      :key="player.fullName + player.jersey"
      class="profileLink">
        <li
          class="PlayerList__ListItem"
          is="ListItem"
          :item-name="player.fullName"
          :item-number="player.jersey"
          :isAllStar="player.isAllStar"
         >
       </li>
     </router-link>
    </ul>
    <div v-else-if="searchInput === ''" class="PlayerList__empty">
      <p>Please start typing to find a player, or press ⏎ Enter key to show them all</p>
    </div>
    <div v-else class="PlayerList__noResults">
      <p>We could not find this player, you may want to browse the entire list ?</p>
      <button type="button" name="button" @click="displayAllPlayers">Click here</button>
    </div>
  </div>
</template>

<script>
import ListItem from '@/components/molecules/ListItem'
import { mapState, mapActions, mapMutations } from 'vuex'
export default {
  name: 'PlayerList',
  data () {
    return {
      searchInput: ''
      }
  },
  methods: {
    submit () {
      this.getAllPlayers({fullName: this.searchInput})
    },
    handleSearch () {
      if (this.searchInput === '') this.setPlayers([]);
      else this.getAllPlayers({fullName: this.searchInput})
    },
    displayAllPlayers () {
      this.searchInput = '';
      this.submit();
    },
    ...mapActions({
      getAllPlayers: 'getAllPlayers'
    }),
    ...mapMutations({
      setPlayers: 'setPlayers'
    })
  },
  computed: {
    ...mapState({
      allPlayers: state => state.players.all
    })
  },
  components: {
    ListItem
  }
}
</script>

<style lang="scss">
@import "@/scss/vars.scss";
.PlayerList {
  .profileLink {
    text-decoration: none;
    color: inherit;
    &:nth-child(odd) {
      background-color: #F5F5F5;
    }
    &:nth-child(even) {
      background-color: #FAFAFA;
    }
  }
  &__ListItem {
    background-color: inherit;
  }
  .list {
    padding-left: 5%;
    max-width: 90%;
  }

  &--waitingForInput {
    height: 100vh;
    display: flex;
    flex-direction: column;
    margin: 0 20px;
    justify-content: center;
  }
}
</style>
