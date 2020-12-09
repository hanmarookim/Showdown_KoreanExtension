var bodyHTML = document.querySelector("body").innerHTML;
for(let key in data_pokedex) {
  var regEx = new RegExp(key, "g");
  bodyHTML = bodyHTML.replace(regEx, data_pokedex[key]);
}
for(let key in data_abilities) {
  var regEx = new RegExp(key, "g");
  bodyHTML = bodyHTML.replace(regEx, data_abilities[key]);
}
for(let key in data_items) {
  var regEx = new RegExp(key, "g");
  bodyHTML = bodyHTML.replace(regEx, data_items[key]);
}
for(let key in data_skills) {
  var regEx = new RegExp(key, "g");
  bodyHTML = bodyHTML.replace(regEx, data_skills[key]);
}
document.querySelector("body").innerHTML = bodyHTML;
