// Define the arrays for FIR_No, CrimeGroup, FIR_Stage, FIR_Type, IOName, and PolcieStsation
export const Fir_No = ['001/2016', '002/2016', '003/2016', '004/2016', '005/2016', '006/2016', '007/2016', '008/2016', '009/2016', '010/2016', '011/2016', '012/2016', '013/2016', '014/2016', '015/2016', '016/2016', '017/2016', '018/2016', '019/2016', '020/2016', '021/2016', '022/2016', '023/2016', '024/2016', '025/2016', '026/2016', '027/2016', '028/2016', '029/2016', '030/2016'];
export const CrimeGroup = ['Murder', 'POCSO', 'Theft', 'Murder', 'gambling', 'Theft', 'Murder', 'gambling', 'POCSO', 'Robbery', 'Assault', 'Forgery', 'Burglary', 'Kidnapping', 'Vandalism', 'Extortion', 'Cybercrime', 'Fraud', 'Arson', 'Stalking', 'Fraud', 'Hate Crime', 'White-Collar Crime', 'Domestic Violence', 'Drug Offenses', 'Burglary', 'Theft', 'Robbery', 'Kidnapping', 'Hate Crime'];
export const FIR_Stage = ['Dis/Acq', 'Convicted', 'Convicted','Convicted','Dis/Acq','Resolved','Convicted','Dis/Acq','Under Investigation','Under Trial','Under Trial','Convicted','Under Investigation','Dis/Acq','Under Trial','Under Trial','Under Investigation','Convicted','Convicted','Under Investigation','Resolved','Dis/Acq','Convicted','Resolved','Under Investigation','Dis/Acq','Under Trial','Resolved','Under Trial'];
export const FIR_Type = ['Non Heinous', 'Non Heinous', 'Non Heinous', 'Non Heinous', 'Heinous', 'Non Heinous', 'Non Heinous', 'Heinous', 'Non Heinous', 'Heinous', 'Non Heinous', 'Heinous', 'Non Heinous', 'Heinous', 'Non Heinous', 'Heinous', 'Non Heinous', 'Heinous', 'Non Heinous', 'Heinous', 'Non Heinous', 'Heinous', 'Non Heinous', 'Heinous', 'Non Heinous', 'Heinous', 'Non Heinous', 'Heinous', 'Non Heinous', 'Heinous'];
export const IOName =  ['R S BIRADAR   (PI)', 'G.H.KUPPI   (PSI)', 'S G HELVAR   (ASI)', 'R S BIRADAR   (PI)', 'Karuneshagowda J   (PI)', 'R S BIRADAR   (PI)', 'Karuneshagowda J   (PI)', 'Raj', 'Pooja Mishra (ASI)', 'Amit Kumar (SI)', 'Neha Singh (PI)', 'Rajiv Verma (ASI)', 'Kavita Sharma (SI)', 'Vikram Singh (PI)', 'Anita Gupta (ASI)', 'Rajesh Kumar (SI)', 'Nidhi Verma (PI)', 'Gaurav Sharma (ASI)', 'Priya Gupta (SI)', 'Amit Singh (ASI)', 'Neha Sharma (PI)', 'Rajiv Kumar (SI)', 'Kavita Verma (ASI)', 'Vikas Gupta (SI)', 'Anita Sharma (PI)', 'Rajesh Verma (ASI)', 'Nidhi Gupta (SI)', 'Gaurav Verma (PI)', 'Priyanka Sharma (ASI)'];
export const PolcieStsation = ['Ramapuram', 'Koyambedu', 'Koyambedu', 'Ramapuram', 'Valasaravakam', 'Maduravoyal', 'Valasaravakam', 'Maduravoyal', 'Anna Nagar', 'Teynampet', 'Guindy', 'Porur', 'Vadapalani', 'Aminjikarai', 'Ambattur', 'Perambur', 'Kilpauk', 'Nungambakkam', 'Tondiarpet', 'Royapuram', 'Anna Nagar', 'Teynampet', 'Guindy', 'Porur', 'Vadapalani', 'Aminjikarai', 'Ambattur', 'Perambur', 'Kilpauk', 'Nungambakkam'];


export const categories = ['CrimeGroup','FIR_Stage','FIR_Type','IOName','PolcieStsation'];

// Define the interface for formatted data
export interface FormattedData {
  [location: string]: {
    [category: string]: { label: string; value: number }[];
  };
}

// Create a function to generate data for each police station
export function generateStationData(stationName: string): Record<string, any> {
  const stationData: Record<string, any> = {};

  // Iterate through FIR types
  stationData.FIR_Type = {};
  FIR_Type.forEach((type, index) => {
    if (PolcieStsation[index] === stationName) {
      stationData.FIR_Type[type] = (stationData.FIR_Type[type] || 0) + 1;
    }
  });

  // Iterate through IO names
  stationData.IO = {};
  IOName.forEach((name, index) => {
    if (PolcieStsation[index] === stationName) {
      stationData.IO[name] = (stationData.IO[name] || 0) + 1;
    }
  });

  // Iterate through FIR stages
  stationData.FIR_Stages = {};
  FIR_Stage.forEach((stage, index) => {
    if (PolcieStsation[index] === stationName) {
      stationData.FIR_Stages[stage] = (stationData.FIR_Stages[stage] || 0) + 1;
    }
  });

  // Iterate through crime categories
  stationData.CrimeCt = {};
  CrimeGroup.forEach((crime, index) => {
    if (PolcieStsation[index] === stationName) {
      stationData.CrimeCt[crime] = (stationData.CrimeCt[crime] || 0) + 1;
    }
  });

  return stationData;
}

// Create a dictionary to store data for each police station
export const stationDataDict: Record<string, Record<string, any>> = {};
PolcieStsation.forEach((station) => {
  stationDataDict[station] = generateStationData(station);
});

// Format the data
function formatData(stationDataDict): FormattedData {
  const formattedData: FormattedData = {};
  
  // Iterate over the main keys (locations)
  for (const location in stationDataDict) {
    formattedData[location] = {};
    const locationData = stationDataDict[location];
  
    // Iterate over the keys of each location
    for (const key in locationData) {
      const nestedData = locationData[key];
      formattedData[location][key] = [];
  
      // Iterate over the keys of the nested object
      for (const nestedKey in nestedData) {
        formattedData[location][key].push({ label: nestedKey, value: nestedData[nestedKey] });
      }
    }
  }
  
  return formattedData;
}

// Export the formatted data
export const formattedData: FormattedData = formatData(stationDataDict);
console.log(formattedData);
