// Write your solution in this file!

const driver = { //create new obj 
    name:'Sam'   //with one key(name)
    
}

function updateDriverWithKeyAndValue(driver, key, value){
    
    const driverCopy = { ...driver }; // create copy obj
    driverCopy ['address'] = '11 Broadway'; //add new key(adress)
    return driverCopy; // return copy obj with new key
}

//------------------------------------------------------//


function destructivelyUpdateDriverWithKeyAndValue(driver, key, value){
    driver['address'] = '12 Broadway'; // modif value(adress) in original obj
    return driver;
}

//-------------------------------------------------------//

function deleteFromDriverByKey(driver, key){
    const driverCopy2 = { ...driver }; // first copy original obj
    delete driverCopy2.name; // then delete key on new obj(driverCopy2)
    return driverCopy2; //return new obj modificate
}

//-------------------------------------------------------//

function destructivelyDeleteFromDriverByKey(driver, key){
    delete driver.name; // delete from original obj
    return driver;
}