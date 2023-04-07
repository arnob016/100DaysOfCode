//Constructor function
function makeSqure(val) {
    let k = 1;
    this.sqrd = val * val;
    this.cbed = this.sqrd * val;
    this.poww = function(val) {
      for (let i = 0; i <= val; i++) {
  
        k *= val;
      }
      return k;
    }
    console.log(this.sqrd, this.cbed, this.poww(val));
  }
  
  const Power5 = new makeSqure(4)