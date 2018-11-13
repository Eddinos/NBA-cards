export default {
  names: `query ($fullName: String) {
      team(fullName: $fullName) {
      fullName
      tricode
      conference
    }
  }`,
  profile: `query ($tricode: String) {
      team(tricode: $tricode) {
      fullName
      tricode
      conference
      city
      division
      logo
    }
  }`
}
