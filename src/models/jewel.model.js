import { db } from "../database/jewelly_store_db.js";
import format from "pg-format";


//Model Get Jewels to use in the controller..
export const getJewelModel = async ({ limit = 10, order_by = "id_ASC", page = 1 }) => {

    const [ field, direction ] = order_by.split("_");
    const offset = (page - 1) * limit;
    const formattedQuery = format(
        'SELECT * FROM inventory ORDER BY %I %s LIMIT $1 OFFSET $2',
        field,
        direction
    );

    const values = [ limit, offset ];
    const result = await db.query(formattedQuery, values);
    return result.rows;

}







//GET Jewels Filtered:

export const getJewelsModelFilters = async ({ max_price, min_price, category, metal }) => {
    const filters = [];
    const values = [];
    //Price > input value
    if (max_price !== undefined) {

        const parsedMaxPrice = Number(max_price);

        if (Number.isNaN(parsedMaxPrice)) {
            throw new Error("max_price must be a valid number");
        }

        values.push(parsedMaxPrice);
        filters.push(`price <= $${values.length}`);

    }

    //Price < input value
    if (min_price !== undefined) {

        const parsedMinPrice = Number(min_price);

        if(Number.isNaN(parsedMinPrice)){
            throw new Error("min_price must be a valid number")
        }


        values.push(parsedMinPrice);
        filters.push(`price >= $${values.length}`);

    }

    //Match category choosen
    if (category) {
        values.push(category);
        filters.push(`category = $${values.length}`);
    }
    //Match metal choosen
    if (metal) {
        values.push(metal);
        filters.push(`metal = $${values.length}`);
    }

    
    let query = "SELECT * FROM inventory";

    if (filters.length > 0) {
        query += ` WHERE ${filters.join(" AND ")}`;
    }

    const result = await db.query(query, values);
    return result.rows;
};