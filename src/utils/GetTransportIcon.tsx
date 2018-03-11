import {TransportType} from './../Enums/TransportType'
import {TransportIcons} from './../Enums/TransportIcons'

export const  getTransportIcons = (transport:any)=>{


    switch(transport)
    {

    case TransportType.bus:

      return TransportIcons.Bus

      case TransportType.train:

      return TransportIcons.Train

      case TransportType.car:

      return TransportIcons.Car;

      default:

      return TransportIcons.Car

    }


    

}

export default getTransportIcons;