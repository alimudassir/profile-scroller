const data = [
  {
    name: 'Bruce Wayne',
    age: 23,
    gender: 'Male',
    lookingfor: 'Female',
    location: 'Gotham City',
    image: 'https://randomuser.me/api/portraits/men/10.jpg'
  },
  {
    name: 'Arya Stark',
    age: 26,
    gender: 'Female',
    lookingfor: 'Male',
    location: 'Winterfell',
    image: 'https://randomuser.me/api/portraits/women/82.jpg'
  },
  {
    name: 'James McGill',
    age: 38,
    gender: 'Male',
    lookingfor: 'Female',
    location: 'Mexico',
    image: 'https://randomuser.me/api/portraits/men/20.jpg'
  }
];

const profiles = profileIterator(data);

// For first profile
nextProfile();

// Event for next button
document.getElementById('next').addEventListener('click', nextProfile);

function nextProfile() {
  const currentProfile = profiles.next().value;

  if (currentProfile !== undefined) {
    document.getElementById('profileDisplay').innerHTML = `
      <ul class="list-group">
        <li class="list-group-item">Name: ${currentProfile.name}</li>
        <li class="list-group-item">Age: ${currentProfile.age}</li>
        <li class="list-group-item">Location: ${currentProfile.location}</li>
        <li class="list-group-item">Preference: ${currentProfile.gender} looking for ${currentProfile.lookingfor}</li>
      </ul>
    `;

    document.getElementById('imageDisplay').innerHTML = `<img src="${currentProfile.image}">`;
  } else {
    window.location.reload();
  }
}

// Iterator
function profileIterator(profiles) {
  let nextIndex = 0;

  return {
    next: function () {
      return nextIndex < profiles.length ?
        { value: profiles[nextIndex++], done: false } :
        { done: true }
    }
  };
}