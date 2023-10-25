import Profile from '../public/portrait.jpeg';
import Pedrao from '../public/pedrao.jpeg';
import Smurfcat from '../public/smurfcat.jpg';


export const cardData = [
  {
    id: 0,
    name: 'Nash',
    age: 20,
    src: Profile,
    bio: 'Jack of all, Master of some',
    genre: ['Metalcore', 'Pop', 'Rap'],
    tracks: [
      {
        name: 'Blood & Water',
        artist: 'Memphis May Fire',
        img: 'https://i.scdn.co/image/ab67616d0000b27336daf308de541e4019a82139',
      },
      {
        name: 'Fighting Gravity',
        artist: 'Of Mice & Men',
        img: 'https://i.scdn.co/image/ab67616d0000b2738eaa8ea5ed8b61cfeeda605f',
      },
      {
        name: "Tears Don't Fall",
        artist: 'Bullet For my Valentine',
        img: 'https://i.scdn.co/image/ab67616d0000b27354113df5ab7a69df8a44c37e',
      },
      {
        name: 'FEEL NOTHING',
        artist: 'The Plot in You',
        img: 'https://i.scdn.co/image/ab67616d0000b273197f778e9f68a8ab1d7da3f8',
      },
    ],
  },
  {
    id: 1,
    name: 'dudu',
    age: 2,
    src: Pedrao,
    bio: 'Jack of all, Master of some',
    genre: ['Metalcore', 'Pop', 'Rap'],
    tracks: [
      {
        name: "Tears Don't Fall",
        artist: 'Bullet For my Valentine',
        img: 'https://i.scdn.co/image/ab67616d0000b27354113df5ab7a69df8a44c37e',
      },
      {
        name: 'FEEL NOTHING',
        artist: 'The Plot in You',
        img: 'https://i.scdn.co/image/ab67616d0000b273197f778e9f68a8ab1d7da3f8',
      },
    ],
  },
  {
    id: 2,
    name: 'Melo',
    age: 18,
    src: Smurfcat,
    bio: 'Jack of all, Master of some',
    genre: ['Indie rock', 'Pop', 'Rap'],
    tracks: [
      {
        name: 'Xo tour Lif3',
        artist: 'Lil Uzi Vert',
        img: 'https://i.scdn.co/image/ab67616d0000b273197f778e9f68a8ab1d7da3f8',
      },
      {
        name: 'Outcast',
        artist: 'Mainland',
        img: 'https://i.scdn.co/image/ab67616d0000b27354113df5ab7a69df8a44c37e',
      },
    ],
  }
]