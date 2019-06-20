export interface IAssemblyLine {
  WorkOrderID: number;
  ProductName: string;
  OrderQty: number;
  CurrentStage: string;
  AssemblyArea: string;
  ActualResourceHrs: number;
  ActualCost: number;
  StartDate: string;
  EndDate: string;
}
