
import './App.css';

function App() {
  return (
      <div className="App">
        <header>
          <nav>
            <div>
              <hr/>
              <h1 id="hspec">Site Préformation de Lee Brennan</h1>
              <hr/>
            </div>
            <ul>
              <a href="index.html">
                <li>Home</li>
              </a>
              <a href="entreprise/rapport.html">
                <li>Entreprise</li>
              </a>
              <a href="entreprise/inter2.html">
                <li>Interview</li>
              </a>
              <a href="expo/museum.html">
                <li>Musée</li>
              </a>
              <a href="expo/galerie1.html">
                <li>Galerie</li>
              </a>
              <a href="conclusion.html">
                <li>Conclusion</li>
              </a>
            </ul>
          </nav>

        </header>
        <h2>Home</h2>

        <div>
          <img src="./images/Me.jpg" alt={"sdf"} height="400px" width="400px" id="me"/>
        </div>
        <div id="intro">

          <p> Comme je l'ai peut-être mentionné à plusieurs reprises, j'ai grandi avec des ordinateurs. Quand j'avais 2
            ans, mon père a acheté le tout premier ordinateur domestique <em>(Commodore Pet)</em> et toutes les mises à
            niveau qui ont suivi. Je pouvais taper au clavier avant de savoir écrire en cursive. Le samedi matin, à 6
            heures du matin, voire plus tôt, mon frère et moi nous précipitions dans le couloir parce que la première
            personne devant l'ordinateur était le "patron" de la journée. À 6 ans, je ne me sentais pas bien, alors j'ai
            pris un jour de congé de l'école. Mon père m'a demandé de taper un programme dans le <em>Commodore
              Pet</em> et à 9h30, je l'ai appelé au travail parce que j'avais atteint la fin de l'écran et je ne savais
            pas quoi faire... En gros, je n'ai jamais été sans un ordinateur devant moi. Jamais.</p>

          <p>Mon premier travail avec les ordinateurs a commencé en 1997, lorsque j'ai commencé à travailler au Voyager
            Internet Café (le premier cybercafé public du sud de l'Irlande). C'est à ce moment-là que j'ai découvert
            pour la première fois HTML (le CSS était à peine présent à l'époque, mais HTML était lui aussi presque
            nouveau. J'ai appris un peu d'HTML mais j'ai abandonné car, soyons honnêtes, le Bloc-notes n'est pas le
            meilleur outil pour travailler). Heureusement, les choses se sont considérablement améliorées depuis
            lors.</p>

          <p>En 2000, j'étais chez <em>Compustore</em>, à Waterford, où je vendais des ordinateurs <em>Packard
            Bell</em> et <em>Compaq</em> à des personnes découvrant l'informatique pour la première fois. À ce
            moment-là, je faisais également office de technicien de la boutique, passant mon temps à travailler sur les
            entrailles des machines, à les réparer, à les mettre à niveau et même à en construire une à partir de zéro.
          </p>

          <p>Malheureusement, <em>Compustore</em> a fermé ses portes en 2001, alors j'ai fini par travailler comme
            barman pendant quelques années, pendant lesquelles j'ai suivi un cours sur Visual Basic (c'était à l'époque
            avant où VB commençait à être généralement détesté), avant de décider de déménager en Belgique. Depuis que
            je suis ici, j'ai travaillé dans de nombreuses industries différentes, mais j'ai toujours voulu revenir
            travailler avec des ordinateurs, notamment en programmation, car j'appréciais particulièrement de devoir
            "penser comme un ordinateur".</p>

          <p>Au début de l'été, un bon ami, Mark Harris, m'a parlé du CF2M et des excellents cours disponibles là-bas.
            J'ai parcouru les cours disponibles, j'ai vu celui de WebDev et le reste appartient à "l'histoire"...</p>
        </div>
        <footer>
          <hr/>
          <h4 id="copyright">
            &copy; Lee Brennan
          </h4>
          <hr/>
        </footer>
      </div>
  );
}

export default App;
