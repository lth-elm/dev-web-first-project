<template>
  <html>
      <div class="main-header">
        <header>
            <div id="main-title">
                <div id="logo">
                    <img src="@/assets/images/logo-quickscience-white.png" width="100" height="100" alt="Logo QuickScience" />
                    <div id="logo-text">
                        <h1>QuickScience</h1>
                        <h2 style="font-size: 1em;">Le résumé des news scientifiques à connaitre !</h2>
                    </div>
                </div>
            </div>
            <nav>
                <ul>
                    <li><router-link to="/"><i class="fas fa-home"></i></router-link></li>
                    <li><a href="#">Informatique <i class="fas fa-sort-down"></i></a>
                        <ul class="drop">
                            <li><a href="#">Python</a></li>
                            <li><router-link to="/csharp">C#</router-link></li>
                            <li><a href="#">Html</a></li>
                          </ul>
                    </li>
                    <li><a href="#">Finance <i class="fas fa-sort-down"></i></a>
                        <ul class="drop">
                            <li><a href="#">Marché financier</a></li>
                            <li><a href="#">Cryptomonnaie</a></li>
                          </ul>
                    </li>
                    <li><a href="#">Physique <i class="fas fa-sort-down"></i></a>
                        <ul class="drop">
                            <li><a href="#">Physique 1</a></li>
                            <li><a href="#">Physique 2</a></li>
                          </ul>
                    </li>
                </ul>
            </nav>
            <div id="sign-in">
                <a href="#" >Sign In <i class="fas fa-sign-in-alt"></i></a>
            </div>
        </header>
    </div>
  </html>
  <router-view/>
</template>

<style>
html {
    font-family : 'Baloo Tammudu 2', cursive, Calibri, Arial, Verdana, Geneva, Tahoma, sans-serif;
}

body {
    background-color: #ffd59e;
}

/* HEADER */

header {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
}

.main-header {
    background-color: #202020;
    color: #ffffff;
    padding-bottom: 1px;
    box-shadow: 0px 1px 15px black;
}

#main-title {
    display: flex;
    flex-direction: column;
}

#logo {
    display: flex;
    flex-direction: row;
    align-items: center;
}

#logo-text {
    font-family: 'Bad Script', cursive;
}

/* SIGN-IN and NAV */

#sign-in a {
    margin-right: 60px;
    color: #6fffdb;
    text-decoration: none;
}

#sign-in a:hover {
    color: #ffd59e;
}

nav ul {
    list-style-type: none;
    display: flex;
    justify-content: center;
}

nav li {
    margin-right: 20px;
}

nav a {
    color: #6fffdb;
    text-decoration: none;
}

nav a:hover {
    color: #ffd59e;
}

/* DROP */

.drop {
    list-style-type: none;
    margin: 0em;
    padding: 0em;
    position: absolute;
    display: none;
}

.drop >li >a {
    text-align: center;
    color:white;
    text-decoration: none;
    display: block;
    padding: 15px;
    font-size: medium;
    background-color: #686868;
}

.drop >li > a:hover {
    background-color: lavender;
    color: #686868;
}

nav >ul >li:hover .drop {
    display: block;
}

/* MAIN and ARTICLE */

#theme {
    padding-top: 10px;
    display: flex;
    justify-content: center;
    font-family: 'Bad Script', cursive;
}

main {
    width: 1200px;
    margin: auto;
}

.main {
    display: flex;
    margin-bottom: 40px;
}

article, aside {
    text-align: justify;
}

article {
    margin-right: 40px;
    flex: 3;
}

article h1 {
    font-size: 2.5em;
}

/* ASIDE */

aside {
    border-left: 1px solid black;
    margin-top: 90px;
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
}

aside h1 {
    margin-bottom: 50px;
    font-size: 1.75em;
}

aside a {
    line-height: 30px;
    display: flex;
    flex-direction: column;
    align-items: center;
}

aside a {
    color: #00008b;
    text-decoration: none;
}

aside a p:hover {
    font-weight: bold;
}

/* NAVIGATION ASIDE */

#Ibox {
    margin-bottom: 25px;
}

#Ibox h1 {
    display: flex;
    justify-content: center;
    margin-bottom: 40px;
}

#Ibox > ul {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    text-decoration: none;
}

#Ibox >ul >li {
    line-height: 30px;
}

#Ibox >ul >li >a {
    color: #00008b;
}

#Ibox >ul >li:hover {
    color: #00008b;
    background-color: rgb(219, 217, 217);
    /*font-weight: bold;*/
}

#Ibox >ul >li >a:link {
    color: black;
}

/* OPERATION */

.tableau {
    width:"60%";
}

.op {
    text-align: center;
    font-weight: bold;
}
</style>
