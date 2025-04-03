const bravelikelion = {
  name: "사자",
  attribute: " brave",
  color: "yellow",
};

const { color, ...rest } = bravelikelion;
console.log(color);
console.log(rest);
