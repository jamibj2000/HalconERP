export default class LocalStorage{
  
   setItem(key, value) {
    localStorage.setItem(key, value);
  }
   setAsStringItem(key, jsonObject ) {
    localStorage.setItem(key, JSON.stringify(jsonObject));
  }
   getItem(key){
    return localStorage.getItem(key)
  }
   getAsJsonItem(key){
    return  JSON.parse(localStorage.getItem(key));
    
  }
   removeItem(key) {
    localStorage.removeItem(key);
  }
   clear(){
    localStorage.clear();
  }
}