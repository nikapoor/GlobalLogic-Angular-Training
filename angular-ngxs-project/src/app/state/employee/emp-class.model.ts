import { EMP } from "../../shared/model/emp.model";

// State Model
export class EMPClassModel {
    employee!: EMP[];
    isLoadEMP!: boolean;
    selectedEMP!: EMP;
}