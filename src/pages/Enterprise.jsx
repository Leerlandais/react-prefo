import Image from "../components/Image";
function Enterprise() {
    return(
        <>
            <Image src="/images/ERG.png" alt="ERG" id="entreimg" />
    <div id="rappad"><br /><br /><br />
        <h2>L'Ecole de Recherche Graphique</h2>
        <p>
            L'<abbr title="Ecole de Recherche Graphique">ERG</abbr> est le lieu des pratiques artistiques, plastiques, graphiques qui entrent dans les zones à risque théoriques et formelles. Un lieu et des pédagogies à définir et redéfinir collectivement. C'est un lieu où l'on peut apprendre de ce qui ne marche pas. Un lieu de recherche donc.
        </p>

        <p>
            Mis en place par le Décret du 7 novembre 2013, le Pôle académique de Bruxelles regroupe l'ensemble des institutions d'enseignement supérieur (IES) francophones situées en Région de Bruxelles-Capitale et représente la plus grande structure d'enseignement en Fédération Wallonie-Bruxelles. Situé au carrefour de l'Europe, le Pôle académique de Bruxelles bénéficie des atouts liés à son emplacement au sein d'une ville internationale et cosmopolite. Son but est de constituer un lieu de concertation pour ses 44 IES membres :
            <ul className={"ergUl"}>
                <li>2 Universités</li>
                <li>8 Hautes écoles</li>
                <li>8 Écoles supérieures des Arts</li>
                <li>26 Établissements de Promotion sociale</li>
            </ul>
        </p>
        <p>
            Le site de <a href="https://wiki.erg.be/m/#Bienvenue_%C3%A0_l%E2%80%99erg" target="_blank">l'erg</a> fait l'état des lieux d'un processus, il constitue une forme en constante évolution.

            Articulé comme une plateforme, il propose un mode d'emploi de l'erg (inventaire détaillé des cours, des outils techniques, théoriques, collectifs et restitue leurs interactions) et agrège l'actualité des blogs de cours, sites satellites et autres traces des activités de l'erg.

            Plusieurs interfaces graphiques sont invitées à cohabiter mettant en exergue des aspects spécifiques des contenus : cartographie, index, galerie d'images, vidéos; comme autant d'espaces de lecture possibles.

            Des sessions de travail sous la forme de workshops ouverts à tou-te-s ont été organisées de juillet 2017 à juillet 2018 afin de penser l'édition du site de manière collective et de réaliser des modes de navigation alternatifs. Les sources du site sont accessibles sur Gitlab, et elles sont physiquement inscrites dans l'école sur un serveur local (Raspberry Pi).
        </p>


    </div>
        </>
    );
}

export default Enterprise;