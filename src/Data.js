import normalizedDistances from "./normalized_distances.json";

const emojis = Object.keys(normalizedDistances);

export function distancesToTarget(target) {
  const distances = [];
  for(const item in normalizedDistances[target]){
    const distance = normalizedDistances[target][item];
    distances.push(  {
        "emoji": item,
        "distance": distance,
      })
  }
  return distances ;
}

export function randomEmoji() {
  return emojis[Math.floor(Math.random() * emojis.length)];
}