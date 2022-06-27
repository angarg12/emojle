"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.randomEmoji = exports.distancesToTarget = void 0;
const normalized_distances_json_1 = __importDefault(require("./normalized_distances.json"));
const normalizedDistances = normalized_distances_json_1.default;
function shuffleArray(array) {
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
console.log(emojis);
function distancesToTarget(target) {
    const distances = [];
    for (const item of emojis) {
        const distance = normalizedDistances[target][item];
        distances.push({
            "emoji": item,
            "distance": distance,
        });
    }
    return distances;
}
exports.distancesToTarget = distancesToTarget;
function randomEmoji() {
    allEmojis = shuffleArray(Object.keys(normalizedDistances));
    emojis = allEmojis.slice(0, 20);
    return emojis[Math.floor(Math.random() * emojis.length)];
}
exports.randomEmoji = randomEmoji;
