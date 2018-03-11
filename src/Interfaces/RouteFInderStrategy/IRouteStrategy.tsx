import PathFinder from './../../PathFinderAlgorithm/PathFinderAlgorithm';
import GetCurrentAlgorithm from './../../PathFinderAlgorithm/GetCurrentAlgorithm';
import {AlgorithmName} from './../../Enums/AlgorithmName';

export default class IRoutingStrategyBase 
{

	GetRouteAlgorithm(DEALS: Array<any>, FROM: string, TO: string, TYPE: string) 
	{ 
       let AlgorithmType =  GetCurrentAlgorithm();
        switch (AlgorithmType.algorithmName) {

            case AlgorithmName.Dijkstra:

            return new PathFinder(DEALS, FROM, TO, TYPE);
                
                
        
            default:
            return new PathFinder(DEALS, FROM, TO, TYPE);
        }
		
	}
}

