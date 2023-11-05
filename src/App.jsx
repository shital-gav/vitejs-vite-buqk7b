import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import TrackerTable from './TrackerTable';

function App() {
  const [count, setCount] = useState(0);
  const scamData = [{Location:"Mumbai",Method:"Phishing",Category:"Cyber","Looted Money":50000,Date:"2023-10-15","Age Group":"25-40","Links/Sources":"https://example.com/article1","Victim Count":3,Status:"Investigation",Description:"Spoofed emails requesting personal information and payments.","Reporting Authority":"Online Fraud Agency","Modus Operandi":"Spoofed emails requesting personal information and payments."},{Location:"Delhi",Method:"Identity Theft",Category:"Financial","Looted Money":75000,Date:"2023-09-20","Age Group":"40-60","Links/Sources":"https://example.com/article2","Victim Count":1,Status:"Resolved",Description:"Stolen identity used for fraudulent bank loans","Reporting Authority":"Local Police Department","Modus Operandi":"Identity stolen from public database breach."},{Location:"Bangalore",Method:"Ponzi Scheme",Category:"Investment","Looted Money":1000000,Date:"2023-08-05","Age Group":"30-50","Links/Sources":"https://example.com/article3","Victim Count":10,Status:"Ongoing",Description:"Investment scam promising high returns","Reporting Authority":"Financial Crime Bureau","Modus Operandi":"Promised returns on investment not provided as advertised."},{Location:"Chennai",Method:"Fake Job Offers",Category:"Scam","Looted Money":20000,Date:"2023-07-10","Age Group":"20-35","Links/Sources":"https://example.com/article4","Victim Count":2,Status:"Resolved",Description:"Falsely promising job opportunities for a fee","Reporting Authority":"Consumer Rights Association","Modus Operandi":"Fake companies offering jobs for a fee without actual employment opportunities."}];


  return (
    <div className="w-full mx-auto p-4">
   
      <h1 className="text-3xl font-bold">FraudWatch India</h1>
      <p className=""> Tracking and Reporting Scams Nationwide</p>
      <br/>
      <div>
        
      <TrackerTable data={scamData} /> 
      </div>
      
      <p className="read-the-docs right">
      FraudWatch India is your centralized platform to monitor, report, and stay informed about fraudulent activities across the country. 
      </p>
      
    </div>
  );
}

export default App;
