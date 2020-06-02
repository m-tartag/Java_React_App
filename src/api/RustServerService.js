import axios from 'axios'

class RustServerService {
    
    executeRustServerService() {
        return axios.get('https://api.rust-servers.info/status/1');        
    }
}

export default new RustServerService();

