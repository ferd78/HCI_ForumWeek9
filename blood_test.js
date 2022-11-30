function canGiveBlood(bd, br) {
    if (bd.charAt(1) == "-") {
      if (bd.charAt(0) == "O") {
        return true;
      } else if (bd.charAt(0) == "A") {
        if (br.charAt(0) == "A" || br == "AB+") {
          return true;
        } else {
          return false;
        }
      }
    } else if (bd.charAt(0) == "B") {
      if (bd.charAt(0) == "B" || bd == "AB") {
        return true;
      } else {
        return false;
      }
    } else if (bd.charAt(1) == "+") {
      if (bd.charAt(0) == "O") {
        if (br.charAt(1) == "+" || br.charAt(2) == "+") {
          return true;
        } else {
          return false;
        }
      }
    } else if (bd.charAt(0) == "A") {
      if (br == "A+" || br == "AB+") {
        return true;
      } else {
        return false;
      }
    } else if (bd.charAt(0) == "B") {
      if (br == "B+" || br == "AB+") {
        return true;
      } else {
        return false;
      }
    } else if (bd == "AB+") {
      if (br == "AB+") {
        return true;
      } else {
        return false;
      }
    } else if (bd == "AB-") {
      if (br == "AB+" || br == "AB-") {
        return true;
      } else {
        return false;
      }
    }
  }
  
  var x = canGiveBlood("O-", "A+");
  var y = canGiveBlood("A-", "B+");
  var z = canGiveBlood("A-", "AB+");
  
  console.log(x);
  console.log(y);
  console.log(z);
 