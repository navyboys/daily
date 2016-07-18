var FIRST_NAMES = [
    'Rich', 'Ben'
  ];


function randomUsername(existingIdentity) {
    function rando(arr) {
        return arr[Math.floor(Math.random()*arr.length)];
    }
    if (existingIdentity=="Rich") {
      return "Ben";
    }
    return "Rich"
}

module.exports = randomUsername;
