export const district = [
  'Chennai', 'Chennai', 'Kanchipuram', 'Chennai', 'Vellore', 'Thiruvannamalai', 'Villupuram', 'Cuddalore', 
  'Salem', 'Namakkal'
];

export const Fir_No = Array.from({ length: 10 }, (_, i) => `00${i + 1}/2016`);

export const CrimeGroup = ['Murder', 'Murder', 'Theft', 'Gambling', 'Robbery', 'Assault', 'Forgery', 'Burglary', 
  'Kidnapping', 'Vandalism'
];

export const FIR_Stage = ['Dis/Acq', 'Convicted', 'Resolved', 'Under Investigation', 'Under Trial', 'Dis/Acq', 
  'Convicted', 'Resolved', 'Under Investigation', 'Under Trial'
];

export const FIR_Type = ['Non Heinous', 'Heinous', 'Non Heinous', 'Heinous', 'Non Heinous', 'Heinous', 'Non Heinous', 
  'Heinous', 'Non Heinous', 'Heinous'
];

export const IOName =  [
  'R S BIRADAR (PI)', 'G.H.KUPPI (PSI)', 'S G HELVAR (ASI)', 'Karuneshagowda J (PI)', 'Raj', 'Pooja Mishra (ASI)', 
  'Amit Kumar (SI)', 'Neha Singh (PI)', 'Rajiv Verma (ASI)', 'Kavita Sharma (SI)'
];

export const PolcieStsation = ['Ramapuram', 'Koyambedu', 'Valasaravakam', 'Maduravoyal', 'Anna Nagar', 'Teynampet', 
  'Guindy', 'Porur', 'Vadapalani', 'Aminjikarai'
];
export const Arrested = ['Male', 'Female', 'Female', 'Male', '0', 'Male', 
  'Female', 'Female', '0', '0'
];


export const categories = ['CrimeGroup', 'FIR_Stage',  'FIR_Type', 'IOName', 'PolcieStsation'];

// Define the interface for formatted data
export interface FormattedData {
  [location: string]: {
    [category: string]: { label: string; value: number }[];
  };
}

// Create a function to generate data for each district
export function generateDistrictData(districtName: string): Record<string, any> {
  const districtData: Record<string, any> = {};

  // Iterate through FIR types
  districtData.FIR_Type = {};
  FIR_Type.forEach((type, index) => {
    if (district[index] === districtName) {
      districtData.FIR_Type[type] = (districtData.FIR_Type[type] || 0) + 1;
    }
  });
// Iterate through arrested values
districtData.Arrested = {};
Arrested.forEach((arrested, index) => {
  if (district[index] === districtName && arrested !== '0') {
    districtData.Arrested[arrested] = (districtData.Arrested[arrested] || 0) + 1;
  }
});


  // Iterate through IO names
  districtData.IO = {};
  IOName.forEach((name, index) => {
    if (district[index] === districtName) {
      districtData.IO[name] = (districtData.IO[name] || 0) + 1;
    }
  });

  // Iterate through FIR stages
  districtData.FIR_Stages = {};
  FIR_Stage.forEach((stage, index) => {
    if (district[index] === districtName) {
      districtData.FIR_Stages[stage] = (districtData.FIR_Stages[stage] || 0) + 1;
    }
  });

  // Iterate through crime categories
  districtData.CrimeCt = {};
  CrimeGroup.forEach((crime, index) => {
    if (district[index] === districtName) {
      districtData.CrimeCt[crime] = (districtData.CrimeCt[crime] || 0) + 1;
    }
  });

  // Iterate through police stations
  districtData.PolcieStsation = {};
  PolcieStsation.forEach((station, index) => {
    if (district[index] === districtName) {
      districtData.PolcieStsation[station] = (districtData.PolcieStsation[station] || 0) + 1;
    }
  });

  return districtData;
}

// Create a dictionary to store data for each district
export const districtDataDict: Record<string, Record<string, any>> = {};
district.forEach((districtName) => {
  districtDataDict[districtName] = generateDistrictData(districtName);
});

// Format the data
function formatData(districtDataDict): FormattedData {
  const formattedData: FormattedData = {};

  // Iterate over the main keys (districts)
  for (const districtName in districtDataDict) {
    formattedData[districtName] = {};
    const districtData = districtDataDict[districtName];

    // Iterate over the keys of each district
    for (const key in districtData) {
      const nestedData = districtData[key];
      formattedData[districtName][key] = [];

      // Iterate over the keys of the nested object
      for (const nestedKey in nestedData) {
        formattedData[districtName][key].push({ label: nestedKey, value: nestedData[nestedKey] });
      }
    }
  }

  return formattedData;
}

// Export the formatted data
export const formattedData: FormattedData = formatData(districtDataDict);
console.log(formattedData);

