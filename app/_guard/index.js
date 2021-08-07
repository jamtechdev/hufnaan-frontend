export function _AuthGuard() {
    const storage = JSON.parse(localStorage.getItem('persist:pyrevsysreftock'))
    const auth = JSON.parse(storage.authentication)
    const storageTime = auth.timestamp
  
    const now = new Date().getTime().toString();
    if (auth && auth.access) {
        if ((now - storageTime) > 1000 * 60 * 60 * 24) {//(now - storageTime) > 1000 * 60 * 60 * 24
            localStorage.clear()
            return false
        }
        return true
    } else { return false }
}