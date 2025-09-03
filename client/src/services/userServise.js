const baseUrl = 'http://localhost:3030/jsonstore/users';

export default {
    async getAll(){
        const response = await fetch(baseUrl);
        const result = await response.json();
        const users = Object.values(result)

        return users;
    },
    async create(userdata) {
        const response = await fetch(baseUrl, {
            method: 'POST',
            headers: {
                'Content-type': 'application/json',
            },
            body: JSON.stringify(userdata),

        });

        const result = await response.json();
        
        return result;
    }
}