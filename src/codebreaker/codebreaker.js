class CodeBreaker {
  constructor(code, intentos = 0) {
    this.code = code;
    this.intentos = intentos;
  }

  arriesgar(intento) {
    
    if(intento === this.code){
      return "Ganaste!";
    }

    if(this.intentos === 1){
      return "Perdiste!";
    }
    else{  
      this.intentos--;    
      return `Te quedan ${this.intentos} intentos!`;
    }
  }
}

export default CodeBreaker;
