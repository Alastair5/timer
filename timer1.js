let input = process.argv.slice(2);

const timer = input => {
  for (let i = 0; i < input.length; i++) {
    setTimeout(() => {
      if (input[i] <= 0 || isNaN(input[i])) {
        return;
      } else {
        process.stdout.write('\x07');
      }
    },input[i] * 1000);
  }
};
timer(input);