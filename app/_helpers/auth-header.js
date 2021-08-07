export function authHeader() {
    // return authorization header with jwt toke
    const storage = JSON.parse(localStorage.getItem('persist:pyrevsysreftock'))
    const auth = JSON.parse(storage.authentication)
    if (auth && auth.access) {
        return auth.access
    } else {
        return {};
    }
}