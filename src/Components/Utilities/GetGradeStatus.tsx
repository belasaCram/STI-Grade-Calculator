export const GetGradeStatus = (totalAverage: number): { result: number, status: string, color: string } => {
    enum status {
        Excellent = "Excellent",
        VeryGood = "Very Good",
        Satisfactory = "Satisfactory",
        Fair = "Fair",
        Failed = "Failed",
        Invalid = "Invalid Score"
    }

    enum colorStatus {
        Success = "green",
        Warning = "yellow",
        Error = "red",
        Info = "cyan"
    }

    const numbers = (value: number, min: number, max: number): boolean => {
        return value >= min && value <= max;
    };

    let toReturn = { result: 0, status: status.Invalid, color: colorStatus.Error };

    if (numbers(totalAverage, 0, 69.49)) {
        toReturn = { result: 5.00, status: status.Failed, color: colorStatus.Error };
    } else if (numbers(totalAverage, 69.50, 74.49)) {
        toReturn = { result: 3.00, status: status.Fair, color: colorStatus.Warning };
    } else if (numbers(totalAverage, 73.50, 77.49)) {
        toReturn = { result: 2.75, status: status.Fair, color: colorStatus.Warning };
    } else if (numbers(totalAverage, 77.50, 81.49)) {
        toReturn = { result: 2.50, status: status.Satisfactory, color: colorStatus.Info };
    } else if (numbers(totalAverage, 81.50, 85.49)) {
        toReturn = { result: 2.25, status: status.Satisfactory, color: colorStatus.Info };
    } else if (numbers(totalAverage, 85.50, 88.49)) {
        toReturn = { result: 2.00, status: status.Satisfactory, color: colorStatus.Info };
    } else if (numbers(totalAverage, 88.50, 91.49)) {
        toReturn = { result: 1.75, status: status.VeryGood, color: colorStatus.Success };
    } else if (numbers(totalAverage, 91.50, 94.49)) {
        toReturn = { result: 1.50, status: status.VeryGood, color: colorStatus.Success };
    } else if (numbers(totalAverage, 94.50, 97.49)) {
        toReturn = { result: 1.25, status: status.VeryGood, color: colorStatus.Success };
    } else if (numbers(totalAverage, 97.50, 100)) {
        toReturn = { result: 1.00, status: status.Excellent, color: colorStatus.Success };
    }

    return toReturn;
};
