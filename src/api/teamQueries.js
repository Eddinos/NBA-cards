export default {
  names: `query ($fullName: String) {
      team(fullName: $fullName) {
      fullName
      tricode
      conference
    }
  }`
}
