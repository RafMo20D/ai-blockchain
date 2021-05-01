pragma solidity >=0.4.22 <0.7.0;

contract  SendSignal {
    
    uint public myData;
    
    event blinkEvent(uint data);
    
    function getData() public view returns (uint ){ 
    return myData;
    }
    
    function setData(uint theData) public returns(uint){
        myData=theData; 
        emit blinkEvent(myData);
    }
     
}