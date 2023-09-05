let names = [
  "Иван",
  "Мария",
  "Анна",
  "Алексей",
  "Екатерина",
  "Дмитрий",
  "Ольга",
  "Сергей",
  "Наталья",
  "Артем",
];

for (let i = 0; i < names.length; i++) {
  let name = names[i];
  if (name.charAt(0).toLowerCase() === "а") {
    console.log(name);
  }
}