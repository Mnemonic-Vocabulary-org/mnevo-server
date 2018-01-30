export default {
  isMail(input) {
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(myForm.emailAddr.value)) {
      return (true)
    }
    return (false)
  }
}
