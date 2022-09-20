import {Messages} from "../messages/messages";
import {Vehicles} from "../vehicles/vehicles";

export class Prediction {
  routeCode: string;
  routeMnemonic: string;
  companyId: string;
  stopId: string;
  serviceId: string;
  serviceMnemonic: string;
  predictionType: string;
  activeVehicles: number;
  scheduledVehicles: number;
  messages: Messages[] ;
  vehicles: Vehicles[];
  hasRealTime: boolean;



}
