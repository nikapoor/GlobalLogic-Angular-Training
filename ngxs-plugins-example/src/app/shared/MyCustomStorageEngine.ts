import { Injectable } from "@angular/core";
import { StorageEngine } from "@ngxs/storage-plugin";

@Injectable()
export class MyCustomStorageEngine implements StorageEngine {
    getItem(key: string) {
        return sessionStorage.getItem(key);
    }
    setItem(key: string, value: any): void {
        sessionStorage.setItem(key, value);
    }
    
}