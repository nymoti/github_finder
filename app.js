// Init GitHub
const github = new Github;
// Init UI
const ui = new UI;
// Search Input
const searchUser = document.getElementById('searchUser');

// Search Input EventListener
searchUser.addEventListener('keyup',(e) =>{
    // Get input text
    const userText = e.target.value;
    if(userText !== '') { 
        // Make HTTP call 
        github.getUser(userText)
            .then(data => {
                if(data.profile.message === 'Not Found') {
                	// Shwo alert
                	ui.showAlert('User not found', 'alert alert-danger');
                } else {
                	// Show profile
                	ui.showProfile(data.profile);
                	// Show repos
                	ui.showRepos(data.repos);
                }
            })
    } else {
    	// Clear profile
    	ui.clearProfile();
    }
});