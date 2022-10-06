function findPlantById(plants, id) {
    let result = null;
    for (let i = 0; i < plants.length; i++) {
        let plant = plants[i];
        if (plant.id === id) {
            result = plant;
        }
    }
    return result;
}

module.exports = findPlantById;