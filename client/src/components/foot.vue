<template>
    <footer class="main-footer">
        <div id="us">
            <img src="@/assets/images/kakashi-avatar.jpg" width="50" height="50" alt="Avatar Kakashi" />
            <p>Première manipulation en développement web du jeune kakashi hatake</p>
        </div>
        <div id="lien-github">
            <a href="https://github.com/lth-elm/dev-web-first-project" target="_blank">Lien vers le code GitHub <i class="fab fa-github fa-2x"></i></a>
        </div>
    </footer>
</template>

<script>
export default {
  name: 'Foot'
}
</script>

<style scoped>
footer {
    margin-top: 50px;
    padding-top: 10px;
    padding-bottom: 10px;
    background-color: #202020;
    color: #ffffff;

    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    font-family: 'Bad Script', cursive;
}

#us {
    margin-left: 40px;
    display: flex;
    flex-direction: row;
}

#us img {
    margin-right: 20px;
    border-radius: 50%;
}

#lien-github a {
    color: #6fffdb;
    text-decoration: none;
    margin-right: 40px;
}

#lien-github a:hover {
    color: #ffd59e;
}

#lien-github a i {
    margin-left: 10px;
}
</style>
