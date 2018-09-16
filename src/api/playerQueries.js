export default {
  list: `query ($fullName: String, $isAllStar: Boolean) {
    player(fullName: $fullName, isAllStar: $isAllStar) {
      fullName
      isAllStar
      jersey
    }
  }`,
  profile: `query ($fullName: String, $language: String) {
    player(fullName: $fullName) {
      jersey
      img
      isAllStar
      position
      height(language: $language)
      weight(language: $language)
      team {
        fullName
        tricode
      }
    }
  }`,
  measures: `query ($fullName: String, $language: String) {
    player(fullName: $fullName) {
      height(language: $language)
      weight(language: $language)
    }
  }`
}
