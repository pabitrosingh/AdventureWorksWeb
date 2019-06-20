export interface IAssemblyLine {
  WorkOrderID: number;
  Name: string;
  OrderQty: number;
  CurrentStage: string;
  AssemblyArea: string;
  ActualResourceHrs: number;
  PlannedCost: number;
  ActualCost: number;
  StartDate: string;
  EndDate: string;
}
