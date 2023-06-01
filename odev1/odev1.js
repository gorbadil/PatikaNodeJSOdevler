let i = process.argv.slice(2);

const res = (r) => {
  console.log(`Yarıçapı ${r} olan dairenin alanı: ${Math.PI * r * r}.`);
}

res(i)
