// process_release_data.js

/*
Problem
- write a function `processReleaseData`
- input
  - array of objects
- output
  - array of objects
- Rules
  - validate input? No
  - return array should only contain objects that have both a `title` and `id`
  - the only keys on the objects shold be `title` and `id`

Example
- for the `newReleases` array below, only `Die Hard` and `Fracture` should
  be in the return array

Data Structure
- Array

Algorithm
- filter the array to the objects that have both an `id` and `title` key
- map the resulting array to a new array
- each element of the new array is an object that only has `id` and `title`
- return the mapped array
*/

function processReleaseData(data) {
  return data
    .filter(movie => movie.hasOwnProperty("id") && movie.hasOwnProperty("title"))
    .map(movie => ({ "id": movie.id, "title": movie.title }));
}

let newReleases = [
  {
    'id': 70111470,
    'title': 'Die Hard',
    'boxart': 'http://cdn-0.nflximg.com/images/2891/DieHard.jpg',
    'uri': 'http://api.netflix.com/catalog/titles/movies/70111470',
    'rating': [4.0],
    'bookmark': [],
  },
  {
    'id': 654356453,
    'boxart': 'http://cdn-0.nflximg.com/images/2891/BadBoys.jpg',
    'uri': 'http://api.netflix.com/catalog/titles/movies/70111470',
    'rating': [5.0],
    'bookmark': [{ id:432534, time:65876586 }],
  },
  {
    'title': 'The Chamber',
    'boxart': 'http://cdn-0.nflximg.com/images/2891/TheChamber.jpg',
    'uri': 'http://api.netflix.com/catalog/titles/movies/70111470',
    'rating': [4.0],
    'bookmark': [],
  },
  {
    'id': 675465,
    'title': 'Fracture',
    'boxart': 'http://cdn-0.nflximg.com/images/2891/Fracture.jpg',
    'uri': 'http://api.netflix.com/catalog/titles/movies/70111470',
    'rating': [5.0],
    'bookmark': [{ id:432534, time:65876586 }],
  },
];

console.log(processReleaseData(newReleases));
