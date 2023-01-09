export function validacionVacios(username, password){
    if(username === '' || password === ''){
        return true;
    }
}

export function validarDimesion(dimension){
  if(dimension !== 'cea'){
    return true;
  }
}

export function validarVacios(arr) {
  return arr.includes('') ? true : false;
}