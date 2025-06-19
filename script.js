// Sample character data
const profiles = [
  { name: "Hermione Granger", img: "imgs/hermione.png", desc: "Bookworm, loyal friend, always prepared. Quote: 'Aren't You Two Ever Going to Read Hogwarts, A History?'" },
  { name: "Tony Stark", img: "imgs/tony.png", desc: "Genius, billionaire, playboy, philanthropist. Quote: 'I told you, I don’t want to join your super-secret boy band.'" },
  { name: "Katniss Everdeen", img: "imgs/katniss.png", desc: "Survivor, courageous, caring, persistant. Quote: 'If he wants me broken, then I will have to be whole.'" },
  { name: "Mitsukuni Haninozuka", img: "imgs/honey.png", desc: "Deceptively cute, sweet tooth, full of energy. Quote: 'A person who can't care about himself can't protect anyone, I think.'" }
];
let current = 0;
const results = [];
function showProfile(idx) {
  if (idx >= profiles.length) {
    document.getElementById('card').innerHTML = `<h2>All done!</h2>
    <div id="results"></div>`;
    const relate = results
      .map((r, i) => (r === 'relate' ? profiles[i].name : null))
      .filter(Boolean);
    const notRelate = results
      .map((r, i) => (r === 'not_relate' ? profiles[i].name : null))
      .filter(Boolean);
    document.getElementById('results').innerHTML = `
      <p><strong>You relate to:</strong> ${relate.join(', ') || 'No one'}</p>
      <p><strong>You don’t relate to:</strong> ${notRelate.join(', ') || 'No one'}</p>
    `;
    return;
  }
  document.getElementById('character-img').src = profiles[idx].img;
  document.getElementById('character-name').textContent = profiles[idx].name;
  document.getElementById('character-desc').textContent = profiles[idx].desc;
}
function swipe(choice) {
  results[current] = choice;
  current++;
  showProfile(current);
}
showProfile(current);