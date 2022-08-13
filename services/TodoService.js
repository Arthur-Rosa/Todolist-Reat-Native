import { ApiService } from "./ApiServices";

const endpoint = 'tasks';

export const TodoService = {
    list() {
        return ApiService.get(endpoint);
    },
    create(item) {
        return ApiService.post(endpoint, item);
    },
    delete(id) {
        return ApiService.delete(endpoint, id);
    }
}