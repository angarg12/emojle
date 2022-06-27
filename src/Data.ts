import raw from "./normalized_distances.json";

const normalizedDistances = raw as Record<string, Record<string, number>>;

function shuffleArray(array: string[]): string[] {
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
    return array;
}

let allEmojis = shuffleArray(Object.keys(normalizedDistances));

let emojis = allEmojis.slice(0, 20);

console.log(emojis)

export type EmojiDistance = {
  emoji: string,
  distance: number,
}

export function distancesToTarget(target: string): EmojiDistance[] {
  const distances = [];
  for(const item of emojis){
    const distance = normalizedDistances[target][item];
    distances.push(  {
        "emoji": item,
        "distance": distance,
      })
  }
  return distances ;
}

export function randomEmoji(): string {
  allEmojis = shuffleArray(Object.keys(normalizedDistances));
  emojis = allEmojis.slice(0, 20);

  return emojis[Math.floor(Math.random() * emojis.length)];
}