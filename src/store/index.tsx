class Store {
    private static _instance: Store;
    private store :any;

    private constructor() {}

    public static get Instance() {
        return this._instance || (this._instance = new this());
    }

    public SetStore(store:any){
        this.store = store;
    }

    public GetStore(){
        return this.store;
    }

    public GetStoreState(){
        if(this.store && this.store.getState){
            return this.store.getState();
        }
        return null;
    }
}

const storeInstance = Store.Instance;
export default storeInstance;
