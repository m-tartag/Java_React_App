import axios from 'axios'

class ExpenseService {
    
    executeExpenseService() {
        return axios.get('http://localhost:8080/api/categories');        
    }
}

export default new ExpenseService()