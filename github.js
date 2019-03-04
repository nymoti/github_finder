class Github {
    constructor(){
        this.client_id = '6b8195f3f083135b084d';
        this.client_secret = '1952febdd744db6065a048416c75fe3e1a7b0cc5';        
        this.repos_count = 6;
        this.repos_sort = 'created: asc'
    }

    async getUser(user){
        const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);
        const repoResponse = await fetch(`https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}&client_id=${this.client_id}&client_secret=${this.client_secret}`);
        const profile = await profileResponse.json();
        const repos = await repoResponse.json();
        return { 
            profile,
            repos
        }
    }
}