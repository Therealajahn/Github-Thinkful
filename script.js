

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
$(".repo-list").html("");
responseJSON.forEach((repo)=>{
     $(".repo-list").append(
         `<li>Github Repo Name:${repo.name}</li>
         <li>Repo Url:<a href='${repoURL}${repo.name}'>Link</a></li>
         <br><br>`)
 })
}



$(getInput());