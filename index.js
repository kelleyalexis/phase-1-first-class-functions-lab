const drivers = ['Antonia', 'Nuru', 'Amari', 'Mo'];

const returnFirstTwoDrivers = arrayOfDrivers => arrayOfDrivers.slice(0, 2);

const returnLastTwoDrivers = arrayOfDrivers => arrayOfDrivers.slice(2, 4);

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

function createFareMultiplier(fare) {
    return fareMultiplier = x => x * fare;  
}
const fareDoubler = fare => 2 * fare;

const fareTripler = fare => 3 * fare;

const selectDifferentDrivers = (arrayOfDrivers, returnFirstTwoDrivers) => returnFirstTwoDrivers(arrayOfDrivers);
