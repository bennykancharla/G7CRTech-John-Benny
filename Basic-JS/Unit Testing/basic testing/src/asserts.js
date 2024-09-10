function assertEquals(expectedResult,actualResult){
    if(expectedResult !==actualResult){
        throw new Error(`Expected: ${expectedResult} but got ${actualResult}`);
    }
}
function assertNotEquals(expectedResult,actualResult){
    if(expectedResult ===actualResult){
        throw new Error(`Expected: ${expectedResult} !== ${actualResult} but it is Equals`);
    }
}

function assertTrue(condition){
    assertEquals(true,condition);
}
function assertFalse(condition){
    assertEquals(false,condition);
}

function assertNull(value){
    assertEquals(null,value);
}
function assertNotNull(value){
    assertNotEquals(null,value);
}



module.exports = {
    assertEquals,
    assertTrue,
    assertNull,
    assertNotNull,
    assertFalse,
    assertNotEquals
}