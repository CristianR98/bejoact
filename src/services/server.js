class Server {
    static baseUrl = 'http://localhost';
    static getProductsUrl = '/getProducts';

    static getProducts() {
        const request = `${this.baseUrl}${this.getProductsUrl}`;
        return fetch(request);
    }
}