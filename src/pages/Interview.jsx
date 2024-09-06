import Image from "../components/Image";

function Interview() {
    return (
        <>
            <section id="interpad">
                <h2>Interview</h2>
                <div>
                    <p className="interintro">J'ai envoyé un message à quelques amis pour leur dire que je cherchais
                        quelqu'un à interviewer pour mon site. J'ai eu de la chance et deux personnes de milieux très
                        différents se sont portées volontaires. À gauche se trouve <a
                            href="https://www.linkedin.com/in/jddpro" target="_blank" rel="noreferrer" >JD Davis</a>, qui travaille de
                        manière indépendante à Austin, au Texas. À droite se trouve <a
                            href="https://be.linkedin.com/in/martin-copyright" target="_blank" rel="noreferrer" >Martin Copyright</a>, qui
                        travaille pour ERG ici même à Bruxelles </p>

                    <p className="interintro"><em><strong>Cliquez sur une question pour voir comment ils ont
                        répondu</strong></em></p>

                </div>
                <div className="row">
                    <div className="column" id="col1">JD Davis
                        <p id="intanswerJD">
                            <Image src="/images/JD.png" alt="JD" />
                        </p>
                    </div>

                    <div className="column" id="col2">
                        <ul>
                            <li id="q1">Pourquoi avez-vous décidé de vous lancer dans l'informatique?</li>
                            <li id="q2">Quel est ton parcours professionnel?</li>
                            <li id="q3">Comment se déroule une journée typique pour vous?</li>
                            <li id="q4">Quelles qualités sont éssentielles pour un bon développeur selon vous?</li>
                            <li id="q5">Des tips pour la suite?</li>

                        </ul>
                    </div>

                    <div className="column" id="col3">Martin Copyright
                        <p id="intanswerMC">

                            <Image src="/images/MC.png" alt="MC" title="Photo profil de linkedin" />
                        </p>
                    </div>

                </div>
            </section>
        </>
);
}

export default Interview;