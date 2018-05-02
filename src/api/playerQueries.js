export default {
  list: `query ($fullName: String, $isAllStar: Boolean) {
    player(fullName: $fullName, isAllStar: $isAllStar) {
      fullName
      isAllStar
      jersey
    }
  }`
}
