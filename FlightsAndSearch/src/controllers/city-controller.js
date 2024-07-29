const {CityService} =require("../services/index")

// Global city service object
const cityService = new CityService();

/**
 * POST
 * data -> req.body
*/

const create = async (req,res)=>{
    try{
        const city = await cityService.deleteCity(req.params.id);
        return res.status(200).json({
            data:Response,
            success: true,
            message: "Successfully deleted a city",
            err: {}
        });
    } catch(error){
        console.log(error);
        return res.status(500).json({
            data: {},
            success: false,
            message: "Not able to delete the city",
            err: error
        });
    }
}
/**
 * url -> /city/:id
 * DELETE -> req.params.id
*/

const destroy = async (req, res) => {
    try {
        const response = await cityService.deleteCity(req.params.id);
        return res.status(200).json({
            data: response,
            success: true,
            message: "Successfully deleted a city",
            err: {}
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data: {},
            success: false,
            message: "Not able to delete the city",
            err: error
        });
    }
}

/**
 * url -> /city/:id
 * GET -> req.params.id
*/

const get = async (req, res) => {
    try {
        const response = await cityService.getCity(req.params.id);
        return res.status(200).json({
            data: response,
            success: true,
            message: "Successfully fetched a city",
            err: {}
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data: {},
            success: false,
            message: "Not able to get the city",
            err: error
        });
    }
}

/**
 * url -> -> /city/:id
 * PATCH -> req.body
 */
const update = async (req, res) => {
    try {
        const response = await cityService.updateCity(req.params.id, req.body);
        return res.status(200).json({
            data: response,
            success: true,
            message: "Successfully updated city",
            err: {}
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data: {},
            success: false,
            message: "Not able to update the city",
            err: error
        });
    }
}

module.exports = {
    create,
    destroy,
    get,
    update
}