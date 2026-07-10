import { getJewelModel, getJewelsModelFilters } from "../models/jewel.model.js";
import prepareHATEOAS from "../utils/hateoas.js";



export const getJewelsController = async (req, res) => {
    console.log(`Fetching Jewels from PostgresSQL...`);

    try {
         
        const jewels = await getJewelModel(req.query);

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

export const getJewelsControllerFilters = async (req, res) => {
    console.log(`Fetching Jewels from PostgresSQL...`);

    try {

        const jewels = await getJewelsModelFilters(req.query);

        const hateoas = prepareHATEOAS(jewels);

        return res.status(200).json({hateoas})

        
    } catch (error) {
        console.log("Error fetching Filtered Jewels", error.message);

        return res.status(500).json({
            message: "Error fetching Filtered Jewels",
            error: error.message
        })
    }


    
}


























