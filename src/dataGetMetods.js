import AllData from "./mock-data/simulation_calculation.json";

export const getScenarioName = () => AllData.scenarioName;
export const getTotalProjectNumber = () => AllData.projects.length;

export const getRequiredCapacity = () => {
    return '5K'
}

export const getTotalPlannedProjectNumber = () => {
    return AllData.projects.filter(el=>el.planned).length;
}
export const getTotalUnPlannedProjectNumber = () => {
    return AllData.projects.filter(el=>!el.planned).length;
}

export const preparePlannedProjectChartData = () => {
    const plannedProjectNumber = getTotalPlannedProjectNumber();
    const unPlannedProjectNumber = getTotalUnPlannedProjectNumber();
    return [
        {
            name: 'Planned',
            y: plannedProjectNumber, // value
            z: plannedProjectNumber // size
        }, {
            name: 'Unplanned',
            y: unPlannedProjectNumber,
            z: unPlannedProjectNumber
        }
    ]
}
const createBUList = () => {
    return AllData.projects.map(el=> {
        return {
            name:el.bu,
            demandNumber: el.demandNumber,
            score: el.score,
        }

    });
}

export const prepBudgedPerBusinessUnitChartData = () => {
const buList = createBUList();
return {
    categories:buList.map(el=>el.name),
    series: [{
        name: 'RoleBased',
        data: buList.map(el=>+el.demandNumber),
    },{
        name: 'ResourceBased',
        data: buList.map(el=>el.score*100),
    }]
}


}
export const prepCapacityAllocationByPriorityTypesChartData = () => {
//- Öncelik tipine göre Kapasite gereksinimi (Grafik Adı: Capacity Allocation by Priority Types)
//Öncelik tipine göre planlanan projeler için kullanılan kapasite miktarını göstermektedir.

    //project.planned &&

}
export const prepBudgetRequirementOfBusinessUnitByPriorityChartData = () => {
//- Önceliğe göre iş birimi kapasite gereksinimi (Grafik Adı: Budget Requirement of Business Unit by Priority)
}



//- Gerekli Kapasite (Grafik Adı: Required Capacity)
//Planlamaya dahil edilen projeler için toplam kapasite miktarını temsil etmektedir.



