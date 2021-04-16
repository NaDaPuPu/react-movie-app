import React from 'react';

function Food({ name, desc }) {
  return (
    <div>
      <h2>I like {name}</h2>
      <h3>{desc}</h3>
    </div>
  );
}

const foodILike = [
  {
    name: '돈가스',
    desc: '빵가루 묻혀서 튀긴 돼지고기',
  },
  {
    name: '치킨',
    desc: '치느님',
  },
  {
    name: '피자',
    desc: '혈관 꽉꽉 밀가루 반죽 ',
  },
];

function App() {
  return (
    <div>
      {foodILike.map((current) => (
        <Food name={current.name} desc={current.desc} />
      ))}
    </div>
  );
}

export default App;
