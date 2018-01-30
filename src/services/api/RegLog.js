import Api from '@/services/api/Api'

export default{
  send(user){
    return Api().post('user',user);
  }
}
