const { CosmosClient } = require("@azure/cosmos");

const endpoint = "https://andrewzhukovweb.documents.azure.com:443/";
const key = "RG8Kk30xooYkNUVXgTyLPjmBAAZPFGn1PrjF2zuZkmmmxaeiREtG5zIj4ATCWk47wM7jKjnAVlhbALsst0eVYA==";
const databaseId = "educatorsDB";
const containerId = "educators";

module.exports = async function (context, req) {
    const client = new CosmosClient({ endpoint, key });
    const db = client.database(databaseId);
    const container = db.container(containerId);
    const querySpec = {
        query: "Select * FROM c"
    };
    const {resources:items} = await container.items.query(querySpec).fetchAll();
    const response = {
        data: items
    };
    context.res = {
        // status: 200, /* Defaults to 200 */
        body: response
    };
}