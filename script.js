

function getInput(){
    $(".git-form").on("submit",(e)=>{
        e.preventDefault();
        let searchInput = $("#search-repo").val();
        getRepos(searchInput);
    })
}

function getRepos(searchInput) {
const url = `https://api.github.com/users/${searchInput}/repos`;

fetch(url)
.then(response => response.json())
.then(responseJSON => renderRepos(responseJSON,searchInput))
.catch(error => console.log(error));
};

function renderRepos(responseJSON,searchInput) {
 console.log(responseJSON);
let repoURL = 
`https://www.github.com/${searchInput}/`
console.log(repoURL);
responseJSON.forEach((repo)=>{
     $(".repo-list").append(
         `<ul>Repo Name:${repo.name}</ul>
         <ul>Url:<a href='${repoURL}${repo.name}'>Link</a></ul>
         <br><br>`)
 })
}



$(getInput());