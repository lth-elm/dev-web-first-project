<template>
  <div class="charp">
    <main>
        <h1 id="theme">Informatique</h1>
        <div class="main">
            <article>
                <h1>Le C#</h1>
                <p>C# est un langage de programmation orientée objet,
                fortement typé, dérivé de C et de C++, ressemblant au langage Java3.
                Il est utilisé pour développer des applications web, ainsi que des applications de bureau,
                des services web, des commandes, des widgets ou des bibliothèques de classes3. En C#,
                une application est un lot de classes où une des classes comporte une méthode Main, comme cela se fait
                en Java3.</p>
                <br>
                <div id="Type">
                    <h2><a id="Types">Type</a></h2>
                    <div class="ZoneTexte">
                        <ul><p><strong>Qu’est ce qu’un Type ?</strong></p>
                        <li>Le type détermine la place mémoire occupée par la variable.</li>
                            <li>Le type détermine les valeurs possibles/acceptables qui pourront être stockées (une à la fois!) dans la variable.</li>
                            </ul>
                        <ul><p><strong>Les Types Possibles</strong></p>
                            <li>Les Entiers : <strong>Byte</strong> (1octet), <strong>short</strong> (2 octets), <strong>int</strong> (4 octets), <strong>long</strong> (8 octets).</li>
                            <li>Les Réels : <strong>float</strong>, simple précision (32 bits)  <strong>double</strong> double précision (64 bits).</li>
                            <li>Les booléens : <strong>bool</strong> (True False).</li>
                            <li>Les caractères : <strong>char</strong>, la valeur d’un caractère doit être placée entre deux simples quote (’).</li>
                            <li>Chaîne de caractères : <strong>string</strong>, est un ensemble de caractères placé entre double quote (").</li>
                        </ul>
                    </div>
                </div>
                <br>
                <div>
                    <h2><a id="Operations">Les Opérations</a></h2>
                    <table class="styled-table">
                        <thead>
                            <tr>
                                <th>Fonctions</th>
                                <th>Symboles</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr><td class="op" colspan="2">Arithmétiques</td></tr>
                            <tr>
                                <td>Addition (utile aussi pour la concaténation de chaine de caractères)</td>
                                <td class="op">+</td>
                            </tr>
                            <tr>
                                <td>Soustraction</td>
                                <td class="op">-</td>
                            </tr>
                            <tr>
                                <td>Multiplication</td>
                                <td class="op">*</td>
                            </tr>
                            <tr>
                                <td>Division </td>
                                <td class="op">/</td>
                            </tr>
                            <tr>
                                <td>Modulo (reste de la division entière)</td>
                                <td class="op">%</td>
                            </tr>
                            <tr><td class="op" colspan="2">Affectation</td></tr>
                            <tr>
                                <td>Affectation</td>
                                <td class="op">=</td>
                            </tr>
                            <tr>
                                <td>Addition puis affectation </td>
                                <td class="op">+=</td>
                            </tr>
                            <tr>
                                <td>Soustraction puis affectation </td>
                                <td class="op">-=</td>
                            </tr>
                            <tr>
                                <td>Multiplication puis affectation</td>
                                <td class="op">*= </td>
                            </tr>
                            <tr>
                                <td>Division puis affectation </td>
                                <td class="op">/=</td>
                            </tr>
                            <tr>
                                <td>Modulo puis affectation </td>
                                <td class="op">%=</td>
                            </tr>
                            <tr>
                                <td>Incrémentation de 1</td>
                                <td class="op">++</td>
                            </tr>
                            <tr>
                                <td>Décrémentation de 1</td>
                                <td class="op">--</td>
                            </tr>
                            <tr><td class="op" colspan="2">Comparaison</td></tr>
                            <tr>
                                <td>Égalite</td>
                                <td class="op">==</td>
                            </tr>
                            <tr>
                                <td>Non égalité (différence) </td>
                                <td class="op">!=</td>
                            </tr>
                            <tr>
                                <td>Inférieur strictement</td>
                                <td class="op">&lt;</td>
                            </tr>
                            <tr>
                                <td>Inférieur ou égal</td>
                                <td class="op">&lt;=</td>
                            </tr>
                            <tr>
                                <td>Supérieur strictement</td>
                                <td class="op">&gt;</td>
                            </tr>
                            <tr>
                                <td>Supérieur ou égal</td>
                                <td class="op">&gt;=</td>
                            </tr>
                            <tr><td class="op" colspan="2">Logiques</td></tr>
                            <tr>
                                <td>ET logique</td>
                                <td class="op">&&</td>
                            </tr>
                            <tr>
                                <td>OU logique</td>
                                <td class="op">||</td>
                            </tr>
                            <tr>
                                <td>NON logique</td>
                                <td class="op">!</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <br><br>
                <div class="conditionnelles">
                    <h2><a id="Conditionnelles">Les Structures conditionnelles</a></h2>
                    <div class="structures">
                        <ul><p>Il existe 2 types de structures conditionnelles :</p>
                            <li>La classique : <strong>if</strong> (si), <strong>else if</strong> (sinon si), <strong>else</strong> (sinon).</li>
                                <li>Choix multiple : S’il y a plus de deux choix possibles, l’instruction selon <strong>switch</strong> permet une facilité
                                    l’écriture plutôt qu’une série de if imbriqués.</li>
                                </ul>
                        <img class="photo" src="@/assets/images/switch.png" alt="switch">
                    </div>
                </div>
                <br><br>
                <div class="conditionnelles">
                    <h2><a id="Repetitives">Les Structures répétitives</a></h2>
                    <div class="structures">
                        <ul><p>Elles permettent une exécution répétitive(boucle) et cessent lorsqu’une condition de test n’est plus vérifiée!<br>
                                Il existe deux familles de structures de répétitions :</p>
                            <li>Itérative : <strong>for</strong> (pour)</li>
                                <li>Evénementielle :  <strong>while</strong> (Tant que), <strong>do ... while</strong> (Faire ... Tant que).</li>
                                </ul>
                        <img src="@/assets/images/dowhile.png" alt="do/while">
                    </div>
                </div>
                <br><br>
            </article>
            <aside>
                <div id="Ibox">
                    <h1>Navigation</h1>
                    <ul>
                        <li><a href="#Types">Type</a></li>
                        <li><a href="#Operations">Les Opérations</a></li>
                        <li><a href="#Conditionnelles">Les Structures conditionnelles</a></li>
                        <li><a href="#Repetitives">Les Structures répétitives</a></li>
                        <li><a href="#Loin">Pour aller plus loin</a></li>
                        <li><a href="#Feedback">FeedBack</a></li>
                    </ul>
                </div>
                <h1>Ressources utilisés</h1>
                <a href="https://openclassrooms.com/fr/courses/1526901-apprenez-a-developper-en-c" target="_blank"><img src="https://upload.wikimedia.org/wikipedia/fr/0/0d/Logo_OpenClassrooms.png" width="50" height="50" alt="Logo OpenClassrooms" /><p>C# OpenClassroom</p></a>
            </aside>
        </div>
        <div>
            <h2><a id="Loin">Pour aller plus loin</a></h2>
            <p>Je vous propose ce site internet pour continuer à apprendre le C#</p>
            <a href="https://openclassrooms.com/fr/courses/1526901-apprenez-a-developper-en-c" target="_blank"><img src="https://consent.trustarc.com/get?name=oc_logo.png" width="417" height="50" alt="Logo OpenClassrooms" /></a>
        </div>
        <br><br>
        <div>
            <h2><a id="Feedback">FeedBack</a></h2>
            <form class="FeedBack" action="">
                <fieldset>
                    <label for="title">
                        Titre :
                    </label>
                    <input autofocus type="text" name='title' id="title" placeholder="    Titre    "  ><br><br>
                    <textarea
                    placeholder="
                        ici votre FeedBack"
                    name="comment"
                    cols="100"
                    rows="10"
                    ></textarea>
                    <input type="submit" value="Send">
                </fieldset>
                </form>
        </div>
    </main>
    <foot></foot>
  </div>
</template>

<script>
import Foot from '../components/foot.vue'
export default {
  name: 'Csharp',
  components: {
    foot: Foot
  }
}
</script>

<style scoped>
.styled-table {
    margin-left: 30px;
    margin-bottom: 15px;
    border-collapse: collapse;
    font-size: 0.9em;
    font-family: sans-serif;
    min-width: 400px;
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.15);
}

.styled-table thead tr {
    background-color: #009879;
    color: #ffffff;
    text-align: left;
}

.styled-table th,
.styled-table td {
    padding: 12px 15px;
}

.styled-table tbody tr {
    border-bottom: 1px solid #dddddd;
}

.styled-table tbody tr:nth-of-type(odd) {
    background-color: #f3f3f3;
}

.styled-table tbody tr:nth-of-type(even) {
    background-color: #e0e0e0;
}

.styled-table tbody tr:last-of-type {
    border-bottom: 2px solid #009879;
}
</style>
