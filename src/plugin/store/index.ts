import { createPinia, Pinia } from 'pinia';
export const basicAPI: String = "http://localhost:8085"

let pinia: Pinia | null = null

export function createPluginStore(): Pinia {
    if (!pinia) {
        pinia = createPinia()
    }
    return pinia
}

export { pinia }