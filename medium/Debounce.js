const saveUserProfile = (name, age) => {
  console.log(`Hi ${name}, you look so young for ${age}`);
};

function debounce(mainFunction, delayInMs) {
  let timer;

  return function(...args) {
    // Clear any previous timer
    if (timer) {
      clearTimeout(timer);
    }

    timer = setTimeout(() => {
      mainFunction.apply(this, args);
    }, delayInMs);
  };
}

const smartSearch = debounce(saveUserProfile, 1000);

smartSearch("Shubham", 26);
