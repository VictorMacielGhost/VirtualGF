import { Database as sqlite } from "sqlite3";
export class GFDatabase
{
    private handle: any;
    constructor ()
    {
        this.init();
    }
    private init()
    {
        // this.handle = new sqlite //Todo: Check For Sqlite3 docs
    }
}