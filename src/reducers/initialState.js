const initialState = () => ({
  authToken: null,
  refreshToken:null,
  role:null,
  isAuthenticated:false,
  user:{
    role:null,
    access_token:'',
    refresh_token:'',
    isAuthenticated:false
  }
});
export default initialState;
