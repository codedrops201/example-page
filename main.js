(async () => {
  const responseHouse1 = await fetch(
    'https://anapioficeandfire.com/api/houses/1'
  );
  const dataHouse1 = await responseHouse1.json();

  const responseHouse2 = await fetch(
    'https://anapioficeandfire.com/api/houses/2'
  );
  const dataHouse2 = await responseHouse2.json();

  const ulElement = document.getElementById('house-list');

  ulElement.innerHTML = `
    <li>${dataHouse1.name}</li>
    <li>${dataHouse2.name}</li>
  `;
})();
