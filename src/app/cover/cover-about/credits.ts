
const items = json['Items'];
const credits = Object.keys(items).map(k => items[k])
  .filter(c => c.license);
export default credits;