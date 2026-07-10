import { getJewelModel } from "../models/jewel.model";
import prepareHATEOAS from "../utils/hateoas";



export const getJewels = async (req, res) => {
    console.log(`Fetching Jewels from PostgresSQL...`);

    try {
         
        const jewels = await getJewelModel();

        const hateoas = prepareHATEOAS(jewels);
        
        return res.status(200).json(hateoas);


    } catch (error) {
        console.log("Error fetching Jewels", error.message);

        return res.status(500).json({
            message: "Error fetching Jewels",
            error: error.message
        })

    }

}


























