import { observable, action } from "mobx";

class VehicleStore {
    @observable vehicle: object = {}

    @action
    loadVehicle = () => {
        return this.vehicle
    }

    @action 
    addVehicle = (vehicle: object) => {
        this.vehicle = vehicle
    }
}

const store = new VehicleStore()

export default store