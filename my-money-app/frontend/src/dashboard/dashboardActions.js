import axios from 'axios'

const BASE_URL = 'http://localhost:3003/api'

export function getSummary() {

    // faz a chamada ao backend assíncrona
    const request = axios.get(`${BASE_URL}/billingCycles/summary`)

    // retorna de forma síncrona.
    // só vai retornar após o request ser resolvido graças ao Promise, que é middleware, configurado no index.jsx
    return {
        type: 'BILLING_SUMMARY_FETCHED',
        payload: request
    }
}