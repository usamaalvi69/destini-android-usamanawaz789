import React, { useEffect, useState, createContext} from 'react';
import HomeScreen from './HomeScreen';

import database from './Firestore';

import {DataContext} from './UserContext'

const MyData = () => {
const [mydata, setMydata] = useState([]);

 useEffect(()=>{
    // console.log('firebase data:')
    const unsubscribe = database
    .collection('data')
    .onSnapshot((snapshot) => 
    setMydata(snapshot.docs.map(doc => doc.data()))
    );
    // console.log(mydata);
    return () => {
      // this is the cleanUp....
      unsubscribe();
    }
  
      }, [])
       return(
           <DataContext.Provider value = {mydata}>
           <HomeScreen/>
           </DataContext.Provider>

       )


    }
    export default MyData;
