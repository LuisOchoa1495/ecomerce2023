let app = document.getElementById('typewriter');
 
let typewriter = new Typewriter(app, {
  loop: true,
  delay: 75,
});
 
typewriter
  .pauseFor(1500)
  .typeString('Disponible')
  .pauseFor(100)
  .deleteChars(10)
  .start();