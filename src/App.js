import React from 'react';

function Food({ name, image }) {
  return (
    <div>
      <h2>I like {name}</h2>
      <img src={image} alt={name} />
    </div>
  );
}

const foodILike = [
  {
    id: 1,
    name: '김치',
    image:
      'http://aeriskitchen.com/wp-content/uploads/2008/09/kimchi_bokkeumbap_02-.jpg',
  },
  {
    id: 2,
    name: '삼겹살',
    image:
      'https://3.bp.blogspot.com/-hKwIBxIVcQw/WfsewX3fhJI/AAAAAAAAALk/yHxnxFXcfx4ZKSfHS_RQNKjw3bAC03AnACLcBGAs/s400/DSC07624.jpg',
  },
  {
    id: 3,
    name: '비빔밥',
    image:
      'http://cdn-image.myrecipes.com/sites/default/files/styles/4_3_horizontal_-_1200x900/public/image/recipes/ck/12/03/bibimbop-ck-x.jpg?itok=RoXlp6Xb',
  },
];

function App() {
  return (
    <div>
      {foodILike.map((food) => (
        <Food key={food.id} name={food.name} image={food.image} />
      ))}
    </div>
  );
}

export default App;
