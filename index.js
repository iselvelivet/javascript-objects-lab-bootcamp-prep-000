let recipes = {}
function updateObjectWithKeyAndValue (recipes, key, value) {
  Object.assign(recipes, {[key]: value})
  return recipes
}
function destructivelyUpdateObjectWithKeyAndValue (recipes, key, value) {
  Object.assign({}, recipes, {[key]: value})
  return recipes
}
