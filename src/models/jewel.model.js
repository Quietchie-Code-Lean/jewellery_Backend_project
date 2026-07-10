import { db } from "../database/jewelly_store_db";
import format from "pg-format";


//Model Get Jewels to use in the controller..
export const getJewelModel = async () => {

    const result = await db.query("SELECT * FROM inventory");
    return result.rows;

}