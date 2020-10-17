console.log("Start");

/* password: A-TO-Z */
/**letters 'B', 'R', 'O', 'K', 'E' and 'N' */

/** INT 1 <= T <= 1000  and 1 <= N <= 100 */

/** OUT "Secure"
"No Secure" */

var password = ["PASSWORDSECURE", "BLUEWORKING", "SECUREWORD"];

var checkS = function (params) {
  checkValue = true;

  var CharBro = {
    B: 0,
    R: 0,
    O: 0,
    K: 0,
    E: 0,
    N: 0,
  };

  for (const key in params) {
    switch (params[key]) {
      case "B":
        CharBro.B++;
        break;

      case "R":
        CharBro.R++;
        break;

      case "O":
        CharBro.O++;
        break;

      case "K":
        CharBro.K++;
        break;

      case "E":
        CharBro.E++;
        break;

      case "N":
        CharBro.N++;
        break;

      default:
        break;
    }
  }

  if (
    (CharBro.B == CharBro.R) |
    (CharBro.R == CharBro.O) |
    (CharBro.O == CharBro.K) |
    (CharBro.K == CharBro.E) |
    (CharBro.E == CharBro.N)
  ) {
    checkValue = false;
  }
  return checkValue;
};

password.forEach((element) => {
  if (checkS(element)) {
    console.log("Secure");
  } else {
    console.log("No Secure");
  }
});
