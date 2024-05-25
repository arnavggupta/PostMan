import React, { useState } from 'react';
import { Tabs, Tab, Box, Typography,TextareaAutosize } from '@mui/material';
import TabHeader from './TabHeader';
import CreateTable from './CreateTable';
import Body from './Body';
import { useContext } from 'react';
import DataContext from '../context/Data';
import ErrorScreen from './ErrorScreen';
import SnackBar from './SnackBar';
function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

export default function Sswitcher({apiRes,errRes}) {

  let obj = apiRes;
    
  let readableobj = '{ \n';
  for(let key in obj) {
      readableobj += '\t'
      readableobj += (typeof obj[key] === "string")? `${key}: "${obj[key]}"` : `${key}: ${obj[key]}`; 
      if (Object.keys(obj).pop() !== key.toString()) {
          readableobj += ',\n'
      }
  }
  readableobj += '\n}';

  const [value, setValue] = useState(0);
const [error,seterror] = useState(true);
const {param,setParam,header,setHeader,bodyData,setBodyData}= useContext(DataContext);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <>
      <div >
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example"
        TabIndicatorProps={{sx:{backgroundColor:"#F26B3A",height:4,bottom:2}}}
        >
          <Tab label="Params" {...a11yProps(0)}  style={{textTransform: 'capitalize'}}/>
          <Tab label="Header" {...a11yProps(1)}style={{textTransform: 'capitalize'}} />
          <Tab label="Body" {...a11yProps(2)} style={{textTransform: 'capitalize'}}/>
        </Tabs>
      </div>
      <div  className='mt-5 '>
        <CustomTabPanel value={value} index={0}>
        <TabHeader prop={"Querey Params"}/>
        <CreateTable data={param} setData= {setParam}/>
        {
          errRes ? <ErrorScreen/> :
        <TextareaAutosize minRows={7} maxRows={10} style={{border:"2px solid black" ,width:"500px",marginTop:"30px"}} disabled="disabled" value={readableobj}/>
        
        }
        </CustomTabPanel>
        <CustomTabPanel value={value} index={1}>

        <TabHeader prop={"Header"}/>
        <CreateTable data={header} setData= {setHeader}/>
        </CustomTabPanel>
        <CustomTabPanel value={value} index={2}>
        <TabHeader prop={"Body"}/>
      <Body data={bodyData} setData={setBodyData}/>
        </CustomTabPanel>
      </div>
    </>
  );
}
