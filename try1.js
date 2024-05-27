const express = require('express');
const puppeteer = require('puppeteer-core');
const path = require('path');
const { fontSize } = require('pdfkit');

const app = express();
const port = 3000;

// Middleware to parse JSON bodies
app.use(express.json());
// Middleware to enable CORS
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*'); // Allow requests from any origin
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE'); // Allow specified HTTP methods
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization'); // Allow specified headers
  next();
});
// Serve the HTML form with form validation
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'oveall2-12.html'));
});

// Generate PDF endpoint
app.post('/generate-pdf', async (req, res) => {
    const { stationName, division, contactDetails, moduleDetails, ACM, D43, Det, contractNo, inspectionDate, firm, check, impart ,Embrossing,remarks01,Clearance,remarks02,Height,remarks03,Hole,remarks04,Diameter,remarks05,Rail,remarks06,TRANSMITTER,remarks07,clamps,remarks1,
      bolt,remarks2,tight,remarks3,rx,remarks4,dwc,remarks5,a450,remarks6,Sleepers,remarks7,sod,remarks8,yell,remarks9,grom,remarks10,clr,remarks11,clr2,remarks12,axle,remarks13,
      clr45N,remarks14,ens,remarks15,o450,remarks16,abc,remarks17,a10sq,remarks18,cal,remarks19,a54v,remarks20,r30v,remarks21,r10mv,remarks22,
      ok,remarks23,s1,remarks24,s2,remarks25,s3,remarks26,s4,remarks27,s5,remarks28,s6,remarks29,s7,remarks30,s8,remarks31,s9,remarks32,s10,remarks33,s11,remarks34,s12,remarks35,s13,remarks36
    ,Neoprene,remarks001,tightness,remarks002,gasket,remarks003,trackside,remarks004,plastic,remarks005,Earthing,remarks006,terminal,remarks007,station,remarks008,Placement,remarks009,overvoltage,remarks010,
    tightness70, tightness71, tightness72, tightness73, tightness74, tightness75, tightness76, tightness77, tightness78, tightness79,clearance90,
    remarks90,
    clearance91,
    remarks91,
    clearance92,
    remarks92,
    clearance93,
    remarks93,
    clearance94,
    remarks94,
    clearance95,
    remarks95,
    clearance96,
    remarks96




} = req.body;

    try {
        const browser = await puppeteer.launch({
            executablePath: 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe' // Provide your Chrome executable path here
        });

        const page = await browser.newPage();
        // CSS styles
      

        // Load the HTML content with filled form data
        await page.setContent(`
        <!DOCTYPE html>
        <html lang="en">
        <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Form Validation</title>
        <style>
        /* Style for the table container */
        .page-break {
            page-break-before: always;
        }
        
        /* Style for the table container */
        body{
            margin:auto;
        }
        
        .table-container {
            width: 100%;
            margin:0 auto;
        }
        
        
        
        
        
        
        /* Style for the table */
        table {
            border-collapse: collapse;
            width: 100%;
        }
        
        /* Style for table rows */
        tr {
            border: 1px solid black; /* Add border to each row */
        }
        
        /* Style for table data cells */
        td {
            padding: 8px;
            border: none; /* Remove border for data cells */
            text-align: left; /* Align text to the left */
            font-size: 16px; /* Reduce font size */
            position: relative; /* Enable relative positioning */
        }
        
        
        
        
        /* Style for text input */
        input[type="text"] {
            width: calc(100% - 16px); /* Adjust width to account for padding */
            padding: 8px;
            border: none; /* Remove border for text input */
            box-sizing: border-box;
            font-size: 16px; /* Reduce font size */
        }
        
        /* Style for the center line */
        td::after {
            content: "";
            position: absolute;
            top: 0;
            bottom: 0;
            right: 0; /* Align the line to the right */
            width: 1px;
            background-color: black;
        }
        
        /* Style for the outer border */
        .outer-box {
            border: 1px solid black; /* Set border properties */
            width: 87%; /* Set width of the box */
            margin: 0 auto; /* Center the box horizontally */
            padding: 20px; /* Add padding for spacing */
            display: flex; /* Use flexbox */
            flex-direction: column; /* Set flex direction to column */
           /* Center items horizontally */
        }
        
        .center{
            text-align: center;
        }
        /* Style for the headline */
        .headline {
            font-size: 18px; /* Set font size for the headline */
            /*margin-bottom: 10px;  Add margin at the bottom */
            text-align: left; /* Align text to the left */
        }
        
        /* Signature Container */
        .signature-container {
            position: fixed;
            bottom: 0;
            left: 0;
            right: 0;
            background-color: #fff; /* You can adjust this as needed */
            padding: 10px;
            border-top: 1px solid #ccc; /* Optional: Add a border at the top of the signature container */
            display: flex;
            justify-content: space-between; /* Align signatures to the left and right */
            padding-left: 80px; /* Adjust left padding */
            padding-right: 80px;
            padding-bottom: 50px; /* Adjust right padding */
        }

        /* Styles for the signature elements */
        .signature {
            text-align: center;
        }

        /* Style to hide the upload button */
        .upload-button {
            display: none;
        }

        /* Style to hide the file input */
        input[type="file"] {
            display: none;
        }
        
          table {
            width: 90%;
            margin: 0 auto;
          }
          #table1 {
            border-collapse: collapse; /* Collapse table borders */
            width: 90%; /* Set table width */
          }
          #table1 th {
            border: 1px solid black; /* Add border to all table headers */
            padding: 8px; /* Add padding for better appearance */
          }
          #table1 th:not(:last-child) {
            border-right: none; /* Remove right border for all table headers except the last one */
          }
          h2 {
            position: relative; /* Set the position of the heading to relative */
            margin-bottom: 20px; /* Add bottom margin for spacing */
            padding-left: 190px; /* Add padding to the left */
          }
          h2 span:first-child {
            position:relative; /* Set the position of the first span to absolute */
            padding-left:70;  /* Position the first span at the left edge of the h2 */
          }
          
        
        </style>
        </head>
        <body>
            <table id="table1">
                <tr>
                    <th>Page 2 of 34</th>
                    <th>Document no.:SI-G-7.1-0624</th>
                    <th>Version:2.0</th>
                    <th>Date of issue:19.11.2019</th>
                </tr>
                <tr><td colspan="4"  style="text-align:center;" >Document Title:Pre-commissioning Check List of Multi Section Digital axle Counter MSDAC Model:ACM 200<br>(Another variant)
                    and Track side Equipment ZP D 43 of M/s Siemens India Ltd.,Mumbai.</td>
                    
                </tr>
            </table>
            <div class="table-container">
                <h2 style="text-align: center;"><span>3.</span><span ><u><b>General Information</b></u></span></h2>
                <table>
                    <tr>
                        <td style="width:5%">1</td>
                        <td style="width:25%">Station/Yard Name:</td>
                        <td>${stationName}</td>
                    </tr>
                    <tr>
                        <td>2</td>
                        <td>Division/Zonal Railway:</td>
                        <td>${division}</td>
                    </tr>
                    <tr>
                        <td>3</td>
                        <td>Contact Details Of Railways at HQ/Division:</td>
                        <td>${contactDetails}</td>
                    </tr>
                    <tr>
                        <td>4</td>
                        <td>Details of Modules (Refer Annexure E & F)</td>
                        <td>${moduleDetails}</td>
                    </tr>
                    <tr>
                        <td></td>
                        <td>Nos. of ACM Modules</td>
                        <td>${ACM}</td>
                    </tr>
                    <tr>
                        <td></td>
                        <td>Nos. of ZP D43</td>
                        <td>${D43}</td>
                    </tr>
                    <tr>
                        <td></td>
                        <td>Total Nos. of Detections & sections</td>
                        <td>${Det}</td>
                    </tr>
                    <tr>
                        <td>5</td>
                        <td>Contract Agreement /LOA/PO No.</td>
                        <td>${contractNo}</td>
                    </tr>
                    <tr>
                        <td>6</td>
                        <td>Date of Pre-Commissioning Inspection</td>
                        <td>${inspectionDate}</td>
                    </tr>
                    <tr>
                        <td>7</td>
                        <td>Firm’s (Siemens) Engineer</td>
                        <td>${firm}</td>
                    </tr>
                    <tr>
                        <td>8</td>
                        <td>Checksum of ACM Module<br> 
                        [Can be seen as MD4 Binary file of ACM 200 <br>
                        Software on diagnostic Web Page] <br>
                        ( Refer Annexure I ) 
                        </td>
                        <td>${check}</td>
                    </tr>
                    <tr>
                    <td>9</td>
                    <td>Imparted Training or Not </td>
                    <td>${impart}</td>
                    </tr>
                </table>
                </div>
                <br>
                <br>
                <br>
                <div class="outer-box">
                <div class="headline" style="text-align: left;"><u>Note:</u></div>
                <div>
                    <p>(1) The system should be installed and commissioned by authorized technical staff of M/S SIEMENS.</p>
                    <p>(2) Tools used by authorized technical staff of M/S SIEMENS should be proper and calibrated.</p>
                    <p>(3) The installation practices should be strictly adhered to and checked before commissioning.</p>
                    <p>(4) All points should be covered as provided in the pre-commissioning checklist.</p>
                </div>
            </div>
            <br>
            <br>
            <div class="container">
            <div class="signature-container">
                <!-- Siemens Representative Signature -->
                <div class="signature left">
                    <label for="signatureImage1" class="upload-button"></label>
                    <input type="file" id="signatureImage1" accept="image/*" required>
                    <p>Signature of Siemens Representative</p>
                    <p>With Name, Designation & Date</p>
                </div>
                
                <!-- Railway Representative Signature -->
                <div class="signature right">
                    <label for="signatureImage2" class="upload-button"></label>
                    <input type="file" id="signatureImage2" accept="image/*" required>
                    <p>Signature of Railway Representative</p>
                    <p>With Name, Designation & Date</p>
                </div>
            </div>
        </div>
        
        

                <div class="page-break"></div>
                <table id="table1">
                <tr>
                    <th>Page 3 of 34</th>
                    <th>Document no.:SI-G-7.1-0624</th>
                    <th>Version:2.0</th>
                    <th>Date of issue:19.11.2019</th>
                </tr>
                <tr><td colspan="4" style="text-align:center;">Document Title:Pre-commissioning Check List of Multi Section Digital axle Counter MSDAC Model:ACM 200<br>(Another variant)
                    and Track side Equipment ZP D 43 of M/s Siemens India Ltd.,Mumbai.</td>
                    
                </tr>
            </table>
            <div class="table-container">
                <h2><span>4.</span><span ><u><b>Outdoor (Rail Contact also called track device):</b></u></span></h2>
                <table>
                    <tr>
                        
                        <td style="width:2%;text-align:center"><b>Sr.<br>No.</b></td>
                        <td style="width:15%;text-align:center"><b>Item</b></td>
                        <td style="width:20%;text-align:center"><b>Required</b></td>
                        <td style="width:25%;text-align:center"><b>Measured<br>/Observed</b> </td>
                        <td style="width:25%;text-align:center"><b>Remarks<br>(Ok/Not ok)</b></td>
                    </tr>
                    <tr>
                        <td>4.1</td>
                        <td>Embossing on the rail<br>web.</td>
                        <td>No embossing on the rail web<br>where holes are to be drilled.</td>  

                <td>${Embrossing}</td>
                <td>${remarks01}</td>
            </tr>
            <tr>
                <td>4.2</td>
                <td>Clearance between<br>Sleepers.</td>
                <td>There should be 350mm (Min.)<br>between the sleepers where the<br>sensors are mounted.</td>   
                <td>${Clearance}</td>
                <td>${remarks02}</td>
            </tr>
            <tr>
                <td>4.3</td>
                <td>Rail Height </td>
                <td>60 Kg : 159mm-172mm <br>52 Kg : 148mm-156mm<br>90 R : 138mm-143mm</td>   
                <td>${Height}</td>
                <td>${remarks03}</td>
                </td>
            </tr>
            <tr>
                <td>4.4</td>
                <td>Position of mounting<br>holes on rail.</td>
                <td>60 Kg: 85mm +1.5mm <br>52 Kg: 69mm +1.5mm<br>90 R: 56mm +1.5mm<br>Measured from the bottom of the<br>Rail.</td>   
                <td>${Hole}</td>
                <td>${remarks04}</td>
                </td>
            </tr>
            <tr>
                <td>4.5</td>
                <td>Diameter of the mounting<br>holes.</td>   
                <td>Should be of 13mm dia.  </td>
                <td>${Diameter}</td>
                <td>${remarks05}</td>
            </tr>
            <tr>
                <td>4.6</td>
                <td>Selection of rail for<br>mounting trackside<br>device (wheel sensor).</td>
                <td>a) The Rail on which the wheel 
                    <br>sensor is mounted can be either<br>rail on a straight track where<br>both rails are at the same<br>height.<br>b) On a curved track the wheel<br>sensor must always be mounted<br>on the outer rail with respect to<br>the curvature, i.e. rail farthest
                    <br>from the Centre of curvature, or <br>on the rail which is higher than<br>the other.
                </td>   
                <td>${Rail}</td>
                <td>${remarks06}</td>
            </tr>
            <tr>
                <td>4.7</td>
                <td>Fixing of rail contacts<BR>(Trackside Device) & <BR>Transmitter and Receiver <BR>reduction plates. 
                </td>  
                <td>Transmitter part having label 
                    <br>("SENDER") to be fixed on the<br>Outside of the rail.<BR><BR>Receiver part having label<BR> 
                        ("EMPFANGER") to be fixed on the<BR>
                        inside of the rail.<BR><BR>
                        Reduction plates matching the rail<BR> 
                        profile to be fitted against the rail<BR>
                        web. 
                         </td>   
                <td>${TRANSMITTER}</td>
                <td>${remarks07}</td>
            </tr>

        </table>
        <div class="container">
        <div class="signature-container">
            <!-- Siemens Representative Signature -->
            <div class="signature left">
                <label for="signatureImage1" class="upload-button"></label>
                <input type="file" id="signatureImage1" accept="image/*" required>
                <p>Signature of Siemens Representative</p>
                <p>With Name, Designation & Date</p>
            </div>
            
            <!-- Railway Representative Signature -->
            <div class="signature right">
                <label for="signatureImage2" class="upload-button"></label>
                <input type="file" id="signatureImage2" accept="image/*" required>
                <p>Signature of Railway Representative</p>
                <p>With Name, Designation & Date</p>
            </div>
        </div>
    </div>
    
       
  
        <div class="page-break"></div>
       
    <table id="table1">
    <tr>
        <th>Page 4 of 34</th>
        <th>Document no.:SI-G-7.1-0624</th>
        <th>Version:2.0</th>
        <th>Date of issue:19.11.2019</th>
    </tr>
    <tr><td colspan="4" style="text-align:center;">Title:Pre-commissioning Check List of Multi Section Digital axle Counter MSDAC Model:ACM 200<br>(Another variant)
        and Track side Equipment ZP D 43 of M/s Siemens India Ltd.,Mumbai.</td>
        
    </tr>
</table>
<br>

<div class="table-container">
   
    <table>
    
        <tr>
            <td style="width:2%">4.8</td>
            <td style="width:15%">Fixing of Sensor clamps </td>
            <td style="width:22%">The sensor clamps should be fixed <br>
                properly to reduce vibration on Tx <br>
& Rx side</td>   
            <td>${clamps}</td>
            <td>${remarks1}</td>
        </tr>
        <tr>
            <td>4.9</td>
            <td>Nuts, bolts & washers for 
                 <br>fixing the rail contacts.</td>
            <td>The Nuts, Bolts (2 each) and<br>washers supplied with the rail <br>contacts must be used for fixing<br>the rail contacts. 
<br> The bolts must be inserted from<br> the receiver side              </td>   
<td>${bolt}</td>
<td>${remarks2}</td>
        </tr>
        <tr>
            <td>4.10</td>
            <td>Torque applied to tighten <br>the rail contacts. 
            </td>
            <td>45 Nm ± 5 using the torque wrench <br>Supplied with the tool kit. </td>   
            <td>${tight}</td>
            <td>${remarks3}</td>
        </tr>
        <tr>
            <td>4.11</td>
            <td> Exposed Tx and Rx cables <br>between DWC/HDPE pipe<br>and the heads. 
            </td>
            <td style="text-align: justify;">Should be free from obstruction  <br>and have adequate radius of <br>curvature</td>   
            <td>${rx}</td>
            <td>${remarks4}</td>
        </tr>
        <tr>
            <td>4.12</td>
            <td>Protection of Tx and Rx 
                <br>cables.</td>   
            <td>Both Tx and Rx cables must be <br>protected through DWC/HDPE pipe<br> at least 80 mm with outer dia.</td>
            <td>${dwc}</td>
            <td>${remarks5}</td>
        </tr>
        <tr>
            <td>4.13</td>
            <td> Position of deflectors. </td>
            <td>To be fitted at least 450 mm away <br>from the rail contacts on either <br>side</td>   
            <td>${a450}</td>
            <td>${remarks6}</td>
        </tr>
        <tr>
            <td>4.14</td>
            <td>Height of Deflectors <br>Sleepers.</td>
            <td>To be adjusted as per the rail <br>profile.</td>   
            
            <td>${Sleepers}</td>
            <td>${remarks7}</td>
        </tr>
        </table>
<br>

<h2 style="text-align: justify-center;"><span>4.</span><span ><u><b>Outdoor(Location Box / Mushroom Cover / Dust cover): </b></u></span></h2>
<br>
<table>
    <tr >
        <td style="width:2%;text-align: center"><b>Sr.<br>No.</b></td>
        <td style="width:15%;text-align: center"><b>Item</b></td>
        <td style="width:20%;text-align: center"><b>Required</b></td>
        <td style="width:25%;text-align: center"><b>Measured<br>/Observed</b> </td>
        <td style="width:25%;text-align: center"><b>Remarks<br>(Ok/Not ok)</b></td>
    </tr>
    <tr>
        <td>5.1</td>
        <td>Foundation along with<br>Trackside connection box</td>
        <td>Should be firm, <br>Straight within permissible height<br>and should not infringe with the 
<br>Railways SOD.             </td>   
        
<td>${sod}</td>
<td>${remarks8}</td>
    </tr>
    <tr>
        <td>5.2</td>
        <td>Trackside connection Box<br>with yellow plastic cover.<br>Installed either inside<br>Location box or outside of <br>Location box. </td>
        <td>To be fitted firm and tightened             </td>   
        <td>${yell}</td>
        <td>${remarks9}</td>

    </tr>
    <tr>
        <td>5.3</td>
        <td>Water tight rubber<br>grommets (washers with <br>metal rings) in the cable<br>glands. </td>
        <td>To be used properly with all rail <br> contacts cables and quad cable <br>through them and tightened.        </td>   
        <td>${grom}</td>
        <td>${remarks10}</td>

    </tr>
    </table>
    <div class="container">
    <div class="signature-container">
        <!-- Siemens Representative Signature -->
        <div class="signature left">
            <label for="signatureImage1" class="upload-button"></label>
            <input type="file" id="signatureImage1" accept="image/*" required>
            <p>Signature of Siemens Representative</p>
            <p>With Name, Designation & Date</p>
        </div>
        
        <!-- Railway Representative Signature -->
        <div class="signature right">
            <label for="signatureImage2" class="upload-button"></label>
            <input type="file" id="signatureImage2" accept="image/*" required>
            <p>Signature of Railway Representative</p>
            <p>With Name, Designation & Date</p>
        </div>
    </div>
</div>

    <div class="page-break"></div>
    <table id="table1">
    <tr>
        <th>Page 5 of 34</th>
        <th>Document no.:SI-G-7.1-0624</th>
        <th>Version:2.0</th>
        <th>Date of issue:19.11.2019</th>
    </tr>
    <tr>
        <td colspan="4" style="text-align:center;">Document Title:Pre-commissioning Check List of Multi Section Digital axle Counter MSDAC Model:ACM 200<br>(Another variant)
            and Track side Equipment ZP D 43 of M/s Siemens India Ltd.,Mumbai.
        </td>
    </tr>
</table>
<br>
<div class="table-container">
    <table>
        <tr>
            <td style="width:2%">5.4</td>
            <td style="width:15%">Neoprene rings and<br>fastening clips.</td>
            <td style="width:20%">Rings to be used and fixed in place<br>for all cables into the mushroom<br>box and clamp with fastening clips <br>provided</td>   
            <td style="width:25%">${Neoprene}</td>
            <td>${remarks001}</td>
        </tr>
        <tr>
            <td>5.5</td>
            <td style="text-align: justify;">Water-tightness of cable glands.</td>
            <td style="text-align: justify;">All cable glands to be made water tight using silicon rubber solution or equivalent.</td>   
            <td>${tightness}</td>
            <td>${remarks002}</td>
        </tr>
        <tr>
            <td>5.6</td>
            <td style="text-align: justify;">Rubber gasket in the mushroom cover </td>
            <td style="text-align: justify;">Should be one single continuous piece fitted snugly in its groove.</td>   
            <td>${gasket}</td>
            <td>${remarks003}</td>
        </tr>
        <tr>
            <td>5.7</td>
            <td style="text-align: justify;">Closing of the trackside connection box with yellow plastic cover. </td>
            <td style="text-align: justify;">The yellow plastic cover must be fixed by tightening all four bolts at the four corners of the cover.</td>   
            <td>${trackside}</td>
            <td>${remarks004}</td>
        </tr>
        <tr>
            <td>5.8</td>
            <td style="text-align: justify;">Locking the yellow plastic cover of trackside connection box.</td>   
            <td style="text-align: justify;">Yellow plastic cover locked with base of the box using a pad lock.</td>
            <td>${plastic}</td>
            <td>${remarks005}</td>
        </tr>
        <tr>
            <td>5.9</td>
            <td style="text-align: justify;">Earthing of overvoltage protection module.</td>
            <td style="text-align: justify;">The overvoltage protection module inside trackside connection box must be connected to Earth.</td>   
            <td>${Earthing}</td>
            <td>${remarks006}</td>
        </tr>
        <tr>
            <td>5.10</td>
            <td style="text-align: justify;">Earthing to the rail.</td>  
            <td style="text-align: justify;">The earth terminal of TCB must be connected to Earth rail with 25mm² copper cable.</td>   
            <td>${terminal}</td>
            <td>${remarks007}</td>
        </tr>
        <tr>
            <td>5.11</td>
            <td style="text-align: justify;">Earth connection in case of Non RE section/Sub-station area & RE section & Substation area.</td>  
            <td style="text-align: justify;">The earth should be connected to Earth pit whose value should be < 2 ohm in case of Non RE section/Sub-station area and in case of RE section Earth should be connected to the earth rail.</td>   
            <td>${station}</td>
            <td>${remarks008}</td>
        </tr>
    </table>
</div>
<div class="table-container">
    <h2><span>6.</span><span ><u><b>Outdoor Trackside Connection Box and its Electronics – ZP D 43:</b></u></span></h2>
    <table>
        <tr>
            <td style="width:2%;text-align:center"><b>Sr.<br>No.</b></td>
            <td style="width:15%;text-align:center"><b>Item</b></td>
            <td style="width:20%;text-align:center"><b>Required</b></td>
            <td style="width:25%;text-align:center"><b>Measured<br>/Observed</b></td>
            <td style="width:25%;text-align:center"><b>Remarks<br>(Ok/Not ok)</b></td>
        </tr>
        <tr>
            <td>6.1</td>
            <td style="text-align: justify;">Placement of Track side connection box (Refer part list as Sr. no.13)</td>
            <td style="text-align: justify;">Should be fitted Horizontally / Vertically to adaptor plate inside trackside connection box.</td>   
            <td>${Placement}</td>
            <td>${remarks009}</td>
        </tr>
        <tr>
            <td>6.2</td>
            <td style="text-align: justify;">Placement of overvoltage protection module.</td>
            <td style="text-align: justify;">Should be fitted Horizontally/ Vertically to adaptor plate inside trackside connection box with axle detection equipment module.</td>   
            <td>${overvoltage}</td>
            <td>${remarks010}</td>
        </tr>
    </table>
</div>
<div class="container">
        <div class="signature-container">
            <!-- Siemens Representative Signature -->
            <div class="signature left">
                <label for="signatureImage1" class="upload-button"></label>
                <input type="file" id="signatureImage1" accept="image/*" required>
                <p>Signature of Siemens Representative</p>
                <p>With Name, Designation & Date</p>
            </div>
            
            <!-- Railway Representative Signature -->
            <div class="signature right">
                <label for="signatureImage2" class="upload-button"></label>
                <input type="file" id="signatureImage2" accept="image/*" required>
                <p>Signature of Railway Representative</p>
                <p>With Name, Designation & Date</p>
            </div>
        </div>
    </div>




<div class="page-break"></div>

    <table id="table1">
        <tr>
            <th>Page 6 of 34</th>
            <th>Document no.:SI-G-7.1-0624</th>
            <th>Version:2.0</th>
            <th>Date of issue:19.11.2019</th>
        </tr>
        <tr><td colspan="4" style="text-align:center;">Title:Pre-commissioning Check List of Multi Section Digital axle Counter MSDAC Model:ACM 200<br>(Another variant)
            and Track side Equipment ZP D 43 of M/s Siemens India Ltd.,Mumbai.</td>
            
        </tr>
    </table>
    <br>
    
    <div class="table-container">
       
        <table>
        
            <tr>
                <td style="width:2%">6.3</td>
                <td style="width:15%;text-align:justify">Connection of Rx cores to 
                    Axle detection equipment 
                    module to corresponding 
                    terminals. 
                    (Refer part list as Sr. 
                    no.13) 
                     </td>
                <td style="width:22%"><b>Blue (1) </b> terminal-1 of Axle 
                    Detection equipment 
                    module 
                     <br>
                    <b>Green (2)</b>  to terminal-2 of Axle 
                     Detection equipment 
                     module 
                      <br><b>Yellow (3) </b>to terminal-3 of Axle 
                      Detection equipment 
                      module <br><b>Red (4)</b> to terminal-4 of Axle 
                      Detection equipment 
                      module. 
                      
                      
</td>   
<td>${clr}</td>
<td>${remarks11}</td>
            </tr>
            <tr>
                <td>6.4</td>
                <td style="text-align: justify;">Connection of Tx cores to 
                    Axle detection equipment 
                    module to corresponding 
                    terminals. 
                    (Refer part list as per 
                    point no.13) 
                    </td>
                <td><b>Red (5)</b> to terminal-5 of Axle 
                    Detection equipment 
                    module. <br>
                    <b>Yellow (6)</b> to terminal-6 of Axle 
                    Detection equipment 
                    module.<br> 
                   <b> Red (7)</b> to terminal-7 of Axle 
                    Detection equipment 
                    module. <br>
                    <b>Green (8)</b> to terminal-8 of Axle 
                    Detection equipment 
                    module. <br>
                   <b> Blue (9)</b> to terminal-9 of Axle 
                    Detection equipment 
                    module.           </td>   
                    <td>${clr2}</td>
                    <td>${remarks12}</td>
            </tr>
            <tr>
                <td>6.5</td>
                <td style="text-align: justify;">Calibration of Axle 
                    detection equipment
                </td>
                <td style="text-align: justify;">Calibration process is required 
                    after switching on indoor 
                    equipment (ACM modules). 
                    As per annexure D.</td>   
                    <td>${axle}</td>
                    <td>${remarks13}</td>
            </tr>
            <tr>
                <td>6.6</td>
                <td style="text-align: justify;"> Measurement of 
                    electrical parameters at 
                    trackside connection box.
                </td>
                <td style="text-align: justify;">The readings are to be taken 
                    initially, when the trackside device 
                    (Axle sensor) has been fixed to the 
                    rail web & tightened using a torque 
                    wrench with a force of 45Nm ± 5.</td>   
                    <td>${clr45N}</td>
                    <td>${remarks14}</td>
            </tr>
            <tr>
                <td>6.7</td>
                <td style="text-align: justify;"> Use of star Quad cable for 
                    Axle Counter 
                    </td>   
                <td style="text-align: justify;">Ensure that star quad cable should 
                    not be laid in a common cable 
                    route or cable through with cables 
                    carrying traction return current. </td>
                    <td>${ens}</td>
        <td>${remarks15}</td>
            </tr>
            <tr>
                <td>6.8</td>
                <td style="text-align: justify;">  Handling of boards  </td>
                <td style="text-align: justify;">Don’t touch the boards in trackside 
                    connection box when trackside is 
                    functioning. </td>   
                    <td>${o450}</td>
                    <td>${remarks16}</td>
            </tr>
           
        </table>

        <div class="container">
        <div class="container">
        <div class="signature-container">
            <!-- Siemens Representative Signature -->
            <div class="signature left">
                <label for="signatureImage1" class="upload-button"></label>
                <input type="file" id="signatureImage1" accept="image/*" required>
                <p>Signature of Siemens Representative</p>
                <p>With Name, Designation & Date</p>
            </div>
            
            <!-- Railway Representative Signature -->
            <div class="signature right">
                <label for="signatureImage2" class="upload-button"></label>
                <input type="file" id="signatureImage2" accept="image/*" required>
                <p>Signature of Railway Representative</p>
                <p>With Name, Designation & Date</p>
            </div>
        </div>
    </div>
<div class="page-break"></div>

        <table id="table1">
    <tr>
        <th>Page 7 of 34</th>
        <th>Document no.:SI-G-7.1-0624</th>
        <th>Version:2.0</th>
        <th>Date of issue:19.11.2019</th>
    </tr>
    <tr>
        <td colspan="4" style="text-align:center;">Document Title:Pre-commissioning Check List of Multi Section Digital axle Counter MSDAC Model:ACM 200<br>(Another variant)
            and Track side Equipment ZP D 43 of M/s Siemens India Ltd.,Mumbai.
        </td>
    </tr>
</table>
<br>
<div class="table-container">
    <h2><span>6.6.1</span><span ><u><b>Measurement (parameters) at Track side Connection box: 
    </b></u></span></h2>
    <table>
        <tr>
            <td style="width:25%;text-align:center"><b>Parameters to be Measured</b></td>
            <td style="width:15%;text-align:center"><b>Acceptable Range</b></td>
            <td style="width:10%;text-align:center"><b>Value at the time of commissioning</b></td>
            <td style="width:10%;text-align:center"><b>Value after tightening trackside device after passage of 25-30 trains</b></td>
        </tr>
        <tr>
            <td style="text-align: justify;">Axle Detection Equipment supply voltage [U 60 at terminal NS]</td>
            <td style="text-align: justify;">30 to 72VDC</td>
            <td>${tightness70}</td>
            <td>${tightness71}</td>
        </tr>
        <tr>
            <td style="text-align: justify;">Axle Detection Equipment [U 60 at terminal FS] (i) supply voltage (ii) supply voltage with local (external) supply</td>
            <td style="text-align: justify;">30 to 72VDC 26 to 50VAC</td>
            <td>${tightness72}</td>
            <td>${tightness73}</td>
        </tr>
        <tr>
            <td style="text-align: justify;">Transmitter frequency of the DEK [double wheel detector] [FS] at terminal 6 and 7 or at terminal 8 and 9</td>
            <td style="text-align: justify;">41.5 to 44.5kHz</td>
            <td>${tightness74}</td>
            <td>${tightness75}</td>
        </tr>
        <tr>
            <td style="text-align: justify;">Receiver voltage 1 [uE1] at terminal 3 and 4</td>
            <td style="text-align: justify;">60 to 150mV</td>
            <td>${tightness76}</td>
            <td>${tightness77}</td>
        </tr>
        <tr>
            <td style="text-align: justify;">Receiver voltage 2 [uE2] at terminal 1 and 2</td>
            <td style="text-align: justify;">60 to 150mV</td>
            <td>${tightness78}</td>
            <td>${tightness79}</td>
        </tr>
        <tr>
            <td style="text-align: justify;">Maximum Control distance from ACM 200 module to Outdoor ZP D 43 (Track Device)</td>
            <td colspan="3" style="text-align: justify;">The typical control distance from Evaluator to Track side connection box is defined as 4.5km. In case of longer distance i.e. more than 4.5km, the broadband transformer (Part No.V25319-Z1-A9-*) is to be used for reduction of influence.</td>
        </tr>
    </table>
</div>
<div class="container">
        <div class="signature-container">
            <!-- Siemens Representative Signature -->
            <div class="signature left">
                <label for="signatureImage1" class="upload-button"></label>
                <input type="file" id="signatureImage1" accept="image/*" required>
                <p>Signature of Siemens Representative</p>
                <p>With Name, Designation & Date</p>
            </div>
            
            <!-- Railway Representative Signature -->
            <div class="signature right">
                <label for="signatureImage2" class="upload-button"></label>
                <input type="file" id="signatureImage2" accept="image/*" required>
                <p>Signature of Railway Representative</p>
                <p>With Name, Designation & Date</p>
            </div>
        </div>
    </div>

<div class="page-break"></div>
 
    <table id="table1">
        <tr>
            <th>Page 8 of 34</th>
            <th>Document no.:SI-G-7.1-0624</th>
            <th>Version:2.0</th>
            <th>Date of issue:19.11.2019</th>
        </tr>
        <tr><td colspan="4" style="text-align:center;">Title:Pre-commissioning Check List of Multi Section Digital axle Counter MSDAC Model:ACM 200<br>(Another variant)
            and Track side Equipment ZP D 43 of M/s Siemens India Ltd.,Mumbai.</td>
            
        </tr>
    </table>
    <br>
    <div class="table-container">
   
    <h2 style="text-align: justify-center;"><span>7.</span><span ><u><b>Indoor Relay Room (Power supply &CT Rack):
    </b></u></span></h2>
    <br>
    <table>
        <tr >
            <td style="width:2%;text-align: center"><b>Sr.<br>No.</b></td>
            <td style="width:15%;text-align: center"><b>Item</b></td>
            <td style="width:20%;text-align: center"><b>Required</b></td>
            <td style="width:25%;text-align: center"><b>Measured<br>/Observed</b> </td>
            <td style="width:25%;text-align: center"><b>Remarks<br>(Ok/Not ok)</b></td>
        </tr>
       
            <tr>
                <td>7.1</td>
                <td style="text-align: justify;"> Power supply
                    </td>
                <td>a) Power supply should be suitable 
                    for Axle Counter System. 
                    <br>
                    b) There should not be any other 
load on the power supply except 
the Axle Counter System. <br> 
c) Class "B” typesurge protection 
must be provided on 230V mains 
line. <br>
                             </td>   
                             <td>${abc}</td>
                             <td>${remarks17}</td>
            </tr>
            <tr>
                <td>7.2</td>
                <td style="text-align: justify;"> Cable for feeding 
                    (i) 24 or 60VDC to the 
                    busbar from main 
                    power 
                    supply(IPS/Battery 
                    Charger ) and <br>
                    (ii)Busbar to Central 
                    evaluator
                </td>
                <td style="text-align: justify;">a) Minimum 10 sq.mm multistrand copper cable from main 
                    power supply to busbar and <br>
                    b) 2core shielded cable from 
                    busbar to ACM modules must 
                    be used.
                    </td>   
                    <td>${a10sq}</td>
                    <td>${remarks18}</td>
                
            </tr>
            <tr>
                <td>7.3</td>
                <td style="text-align: justify;"> Total load calculation 
                    [Basic current 
                    requirement for 1 No. of 
                    ACM 200 module and 2 
                    Nos. ofZP D 43 = 1.3Amp
                </td>
                <td style="text-align: justify;">Load calculation 
                    Includes ACM modules, Detection 
                    points & Reset modules/Panel. 
                    Load Calculation for fuse rating: 
                    ~ 1.5*(No. of ACM modules*12w + 
                     No. of Detection point*5w + 
                     No. of reset 
                    modules*5w/24 or 60 VDC) = 
                    Total current. .</td>   
                    <td>${cal}</td>
                             <td>${remarks19}</td>
            </tr>
            <tr>
                <td>7.4</td>
                <td style="text-align: justify;"> Battery Charger Input 
                    supply should be off for 
                    15 min. 
                    
                    </td>   
                <td style="text-align: justify;">Should notbe less than 54VDC. </td>
                <td>${a54v}</td>
                <td>${remarks20}</td>
            </tr>
            <tr>
                <td>7.5</td>
                <td style="text-align: justify;">  Input voltage(local from 
                    battery charger) at the 
                    Trackside connection box 
                    should be off for 15 min. </td>
                <td style="text-align: justify;">Should not be less than 30VDC. </td>   
                <td>${r30v}</td>
                             <td>${remarks21}</td>
            </tr>
            <tr>
                <td>7.6</td>
                <td style="text-align: justify;"> Ripple content of power 
                    supply  </td>
                <td style="text-align: justify;">Should not exceed 
                    50 mVAC (peak - peak) or 
                    10 mV rms.  </td>   
                    <td>${r10mv}</td>
                    <td>${remarks22}</td>
            </tr>
           
        </table>

        <div class="container">
        <div class="signature-container">
            <!-- Siemens Representative Signature -->
            <div class="signature left">
                <label for="signatureImage1" class="upload-button"></label>
                <input type="file" id="signatureImage1" accept="image/*" required>
                <p>Signature of Siemens Representative</p>
                <p>With Name, Designation & Date</p>
            </div>
            
            <!-- Railway Representative Signature -->
            <div class="signature right">
                <label for="signatureImage2" class="upload-button"></label>
                <input type="file" id="signatureImage2" accept="image/*" required>
                <p>Signature of Railway Representative</p>
                <p>With Name, Designation & Date</p>
            </div>
        </div>
    </div>
    
        <div class="page-break"></div>
        

<table id="table1">
<tr>
    <th>Page 9 of 34</th>
    <th>Document no.:SI-G-7.1-0624</th>
    <th>Version:2.0</th>
    <th>Date of issue:19.11.2019</th>
</tr>
<tr>
    <td colspan="4" style="text-align:center;">Document Title:Pre-commissioning Check List of Multi Section Digital axle Counter MSDAC Model:ACM 200<br>(Another variant)
        and Track side Equipment ZP D 43 of M/s Siemens India Ltd.,Mumbai.</td>
</tr>
</table>
<br>
<div class="table-container">
<table>
    <tr>
        <td style="width:2%;text-align: justify;">7.7</td>
        <td style="width:15%;text-align: justify;">Spike in the power supply</td>
        <td style="width:20%;text-align: justify;">There should be no spikes in the power supply exceeding of 20% of nominal voltage.</td>
        <td style="width:25%">${clearance90}</td>
        <td style="width:25%">${remarks90}</td>
    </tr>
    <tr>
        <td style="width:2%;text-align: justify;">7.8</td>
        <td style="width:15%;text-align: justify;">Terminal blocks between ACM and CT rack</td>
        <td style="width:20%;text-align: justify;">Wago/Phoenix makes cage clamp type terminals to be used.</td>
        <td style="width:25%">${clearance91}</td>
        <td style="width:25%">${remarks91}</td>
    </tr>
    <tr>
        <td style="width:2%;text-align: justify;">7.9</td>
        <td style="width:15%;text-align: justify;">Cable from the evaluator to CT rack.</td>
        <td style="width:20%;text-align: justify;">24 cores shielded cable, single strand, 0.5 mm dia. shielded telecom cable to be used. Shield of the cable should be earthed.</td>
        <td style="width:25%">${clearance92}</td>
        <td style="width:25%">${remarks92}</td>
    </tr>
    <tr>
        <td style="width:2%;text-align: justify;">7.10</td>
        <td style="width:15%;text-align: justify;">Placement of overvoltage protection module. (D Class)</td>
        <td style="width:20%;text-align: justify;">Should be fitted between ACM 200 Module and Detection Point Conductors.</td>
        <td style="width:25%">${clearance93}</td>
        <td style="width:25%">${remarks93}</td>
    </tr>
    <tr>
        <td style="width:2%;text-align: justify;">7.11</td>
        <td style="width:15%;text-align: justify;">Use of proper rated fuse inserts. (Fuse rating for DP = 200mA, for Vital relay/ track = 1.6A)</td>
        <td style="width:20%;text-align: justify;">Don’t use fuse of higher rating than specified</td>
        <td style="width:25%">${clearance94}</td>
        <td style="width:25%">${remarks94}</td>
    </tr>
    <tr>
        <td style="width:2%;text-align: justify;">7.12</td>
        <td colspan="4" style="width:15%;text-align: justify;"><b>Proving of Back Contact of AXTPR Relay (K50 Type 5F/3B) in Interlocking circuits.</b></td>
    </tr>
    <tr>
        <td style="width:2%;text-align: justify;">Scenario 1</td>
        <td style="width:15%;text-align: justify;">Interlocking circuits with Metal to Metal and Metal to Carbon relays</td>
        <td style="width:20%;text-align: justify;">Back contact of AXTPR must be proved in circuits which positively check that the track was occupied. (Like sub route release circuit)</td>
        <td style="width:25%">${clearance95}</td>
        <td style="width:25%">${remarks95}</td>
    </tr>
    <tr>
        <td style="width:2%;text-align: justify;">Scenario 2</td>
        <td style="width:15%;text-align: justify;">Electronic Interlocking</td>
        <td style="width:20%;text-align: justify;">Back contact of AXTPR must be read into EI using an input channel. The Bit monitoring the valid occupied status must be proved in logic which checks positively that the track was occupied. (Like sub route release circuit)</td>
        <td style="width:25%">${clearance96}</td>
        <td style="width:25%">${remarks96}</td>
    </tr>
    <tr>
        <td colspan="5" style="width:2%;text-align: justify;">Note: The proving of back contact of AXTPR in the interlocking circuits to be ensured by zonal railways while designing interlocking circuits</td>
    </tr>
</table>
</div>
<div class="container">
        <div class="signature-container">
            <!-- Siemens Representative Signature -->
            <div class="signature left">
                <label for="signatureImage1" class="upload-button"></label>
                <input type="file" id="signatureImage1" accept="image/*" required>
                <p>Signature of Siemens Representative</p>
                <p>With Name, Designation & Date</p>
            </div>
            
            <!-- Railway Representative Signature -->
            <div class="signature right">
                <label for="signatureImage2" class="upload-button"></label>
                <input type="file" id="signatureImage2" accept="image/*" required>
                <p>Signature of Railway Representative</p>
                <p>With Name, Designation & Date</p>
            </div>
        </div>
    </div>


        <div class="page-break"></div>

        <table id="table1">
            <tr>
                <th>Page 12 of 34</th>
                <th>Document no.:SI-G-7.1-0624</th>
                <th>Version:2.0</th>
                <th>Date of issue:19.11.2019</th>
            </tr>
            <tr><td colspan="4" style="text-align:center;">Title:Pre-commissioning Check List of Multi Section Digital axle Counter MSDAC Model:ACM 200<br>(Another variant)
                and Track side Equipment ZP D 43 of M/s Siemens India Ltd.,Mumbai.</td>
                
            </tr>
        </table>
        <table>
        <br>
        <div class="table-container">
        <tr>
            <td colspan="5">8.4 Indications on the ACM modules after pressing ‘RST’ button for 2 sec.
            </td>
            
        </tr>
        <tr >
            <td style="width:2%;text-align: center">8.4.1</b></td>
            <td style="width:15%;text-align: center"> “OK” LED (Green) </td>
            <td style="width:20%;text-align: center">Steady Green light : ACM is OK</td>
            <td>${ok}</td>
                    <td>${remarks23}</td>
        </tr>
        <tr >
            <td style="width:2%;text-align: center">8.4.2</b></td>
            <td style="width:15%;text-align: center"> “TVDS1” LED </td>
            <td style="width:20%;text-align: center">Steady Red light : Due to Section 
                ‘OCCUPIED’ </td>
                <td>${s1}</td>
                <td>${remarks24}</td>
        </tr>
        <tr >
            <td style="width:2%;text-align: center">8.4.3</b></td>
            <td style="width:15%;text-align: center"> “TVDS2” LED </td>
            <td style="width:20%;text-align: center">Steady Red light : Due to Section 
                ‘OCCUPIED’  </td>
                <td>${s2}</td>
                <td>${remarks25}</td>
        </tr>
        <tr >
            <td style="width:2%;text-align: center">8.4.4</b></td>
            <td style="width:15%;text-align: center">  “DS1.1” LED  </td>
            <td style="width:20%;text-align: center">Steady Green light : Pulse free 
            </td>
                
              
            <td>${s3}</td>
                <td>${remarks26}</td>
        </tr>
        <tr >
            <td style="width:2%;text-align: center">8.4.5</b></td>
            <td style="width:15%;text-align: center">  “DS1.2” LED  </td>
            <td style="width:20%;text-align: center">Steady Green light : Pulse free 
            </td>
                
                
            <td>${s4}</td>
            <td>${remarks27}</td>
        </tr>
        <tr >
            <td style="width:2%;text-align: center">8.4.6</b></td>
            <td style="width:15%;text-align: center">  “DS2.1” LED  </td>
            <td style="width:20%;text-align: center">Steady Green light : Pulse free 
            </td>
                
            <td>${s5}</td>
            <td>${remarks28}</td>
        </tr>
        <tr >
            <td style="width:2%;text-align: center">8.4.7</b></td>
            <td style="width:15%;text-align: center">  “DS1.1” LED  </td>
            <td style="width:20%;text-align: center">Steady Green light : Pulse free 
            </td>
                
               
            <td>${s6}</td>
            <td>${remarks29}</td>
        </tr>
        <tr >
            <td style="width:2%;text-align: center">8.4.8</b></td>
            <td style="width:15%;text-align: center">  “RR1” LED</td>
            <td style="width:20%;text-align: center">Off condition
            </td>
                
                
            <td>${s7}</td>
            <td>${remarks30}</td>
        </tr>
        <tr >
            <td style="width:2%;text-align: center">8.4.9</b></td>
            <td style="width:15%;text-align: center">  “RR2” LED</td>
            <td style="width:20%;text-align: center">Off condition
            </td>
                
                
            <td>${s8}</td>
                <td>${remarks31}</td>
        </tr>
        <tr >
            <td style="width:2%;text-align: center">8.4.10</b></td>
            <td style="width:15%;text-align: center">  "COM" LED</td>
            <td style="width:20%;text-align: center">Steady Green light: All fail safe 
                connections OK. 
                
            </td>
                
                
            <td>${s9}</td>
                <td>${remarks32}</td>
        </tr>
        <tr >
            <td style="width:2%;text-align: center">8.4.10</b></td>
            <td style="width:15%;text-align: center">  "COM" LED</td>
            <td style="width:20%;text-align: center">Steady Green light: All fail safe 
                connections OK. 
                
            </td>
                
                
            <td>${s10}</td>
            <td>${remarks33}</td>
        </tr>
        <tr>
            <td colspan="5">8.5 Indications on the ACM modules after calibration process by pressing ‘CAL’ on ACM module for 3 Sec. 
            </td>
            
        </tr>
        <tr >
            <td style="width:2%;text-align: center">8.5.1</b></td>
            <td style="width:15%;text-align: center">   “CAL” LED </td>
            <td style="width:20%;text-align: center">Steady Green light : Calibration is 
                OK. 
                
            </td>
                
                
            <td>${s11}</td>
            <td>${remarks34}</td>
        </tr>
        <tr >
            <td style="width:2%;text-align: center">8.5.2</b></td>
            <td style="width:15%;text-align: center">   “DIR 1” LED </td>
            <td style="width:20%;text-align: center">Off condition after calibration  </td>
                
            <td>${s12}</td>
            <td>${remarks35}</td>
        </tr>
        <tr >
            <td style="width:2%;text-align: center">8.5.3</b></td>
            <td style="width:15%;text-align: center">   “DIR 2” LED </td>
            <td style="width:20%;text-align: center">Off condition after calibration 
    
                
          
                
                
            <td>${s13}</td>
            <td>${remarks36}</td>
        </tr>
    
       </div>
    
    </table>
    <div class="container">
    <div class="signature-container">
        <!-- Siemens Representative Signature -->
        <div class="signature left">
            <label for="signatureImage1" class="upload-button"></label>
            <input type="file" id="signatureImage1" accept="image/*" required>
            <p>Signature of Siemens Representative</p>
            <p>With Name, Designation & Date</p>
        </div>
        
        <!-- Railway Representative Signature -->
        <div class="signature right">
            <label for="signatureImage2" class="upload-button"></label>
            <input type="file" id="signatureImage2" accept="image/*" required>
            <p>Signature of Railway Representative</p>
            <p>With Name, Designation & Date</p>
        </div>
    </div>
</div>



    
        </body>
        </html>
        `);

        // Generate PDF
       // Generate PDF
       const pdfBuffer = await page.pdf({
        
        format: 'A3',
        displayHeaderFooter: false,
        printBackground: true,
        pageRanges: '1-35', // Generate only page 1
        
        margin: {
          top: '50',
          right: '0px',
          bottom: '50',
          left: '0px',
        },
        
      });
           
    
       
    
        await browser.close();

        // Send the PDF as a response
        res.setHeader('Content-Type', 'application/pdf');
        res.setHeader('Content-Disposition', 'attachment; filename="form_submission.pdf"');
        res.send(pdfBuffer);
    } catch (error) {
        console.error('Error generating PDF:', error);
        res.status(500).send('Internal Server Error');
    }
});


        

// Start the server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
