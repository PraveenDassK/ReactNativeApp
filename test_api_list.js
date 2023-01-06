const registrationmodule_sendregistrationotp = (email, phoneNumber) => client.post('/registrationmodule/sendregistrationotp', { email, phoneNumber });

const registrationmodule_verifyregistrationotp = (email, emailOTP, phoneNumber, phoneOTP) => client.post('/registrationmodule/verifyregistrationotp', { email, emailOTP, phoneNumber, phoneOTP });

const registrationmodule_getcustomerdetais_endpoint = '/registrationmodule/getcustomerdetais';
const registrationmodule_getcustomerdetais = () => client.get(registrationmodule_getcustomerdetais_endpoint);

const registrationmodule_savecustomeraccountdetails = () => client.post('/registrationmodule/savecustomeraccountdetails', {  });

const registrationmodule_savecompanydetails = () => client.post('/registrationmodule/savecompanydetails', {  });

const authverifymodule_endpoint = '/authverifymodule/getcompanysearch/{regno}';
const authverifymodule = () => client.get(authverifymodule_endpoint);

const authverifymodule_endpoint = '/authverifymodule/getofficerlist/{companynumber}';
const authverifymodule = () => client.get(authverifymodule_endpoint);

const authverifymodule_advancecompanysearch_endpoint = '/authverifymodule/advancecompanysearch';
const authverifymodule_advancecompanysearch = () => client.get(authverifymodule_advancecompanysearch_endpoint);

const authverifymodule_endpoint = '/authverifymodule/liststatement/{company_number}';
const authverifymodule = () => client.get(authverifymodule_endpoint);

const authverifymodule_endpoint = '/authverifymodule/getbeneficialowner/{companynumber},{psc_id}';
const authverifymodule = () => client.get(authverifymodule_endpoint);

const authverifymodule_endpoint = '/authverifymodule/getstatement/{company_number},{statement_id}';
const authverifymodule = () => client.get(authverifymodule_endpoint);

const authverifymodule_endpoint = '/authverifymodule/getsupersecureperson/{company_number},{super_secure_id}';
const authverifymodule = () => client.get(authverifymodule_endpoint);

const authverifymodule_endpoint = '/authverifymodule/getsupersecurebeneficialowner/{company_number},{super_secure_id}';
const authverifymodule = () => client.get(authverifymodule_endpoint);

const authverifymodule_endpoint = '/authverifymodule/getlegalpersonbeneficialowner/{company_number},{psc_id}';
const authverifymodule = () => client.get(authverifymodule_endpoint);

const authverifymodule_endpoint = '/authverifymodule/getlegalperson/{company_number},{psc_id}';
const authverifymodule = () => client.get(authverifymodule_endpoint);

const authverifymodule_endpoint = '/authverifymodule/getcooperateentities/{company_number},{psc_id}';
const authverifymodule = () => client.get(authverifymodule_endpoint);

const authverifymodule_endpoint = '/authverifymodule/getpsc/{companynumber}';
const authverifymodule = () => client.get(authverifymodule_endpoint);

const authverifymodule_endpoint = '/authverifymodule/getpscindividual/{companynumber}/{pscid}';
const authverifymodule = () => client.get(authverifymodule_endpoint);

const authverifymodule_endpoint = '/authverifymodule/getofficerappointmentlist/{officerid}';
const authverifymodule = () => client.get(authverifymodule_endpoint);

const authverifymodule_endpoint = '/authverifymodule/getcodisqualification/{officerid}';
const authverifymodule = () => client.get(authverifymodule_endpoint);

const authverifymodule_endpoint = '/authverifymodule/getnaturalofficerdisqualification/{officerid}';
const authverifymodule = () => client.get(authverifymodule_endpoint);

const authverifymodule_endpoint = '/authverifymodule/getcompanyregisters/{companynumber}';
const authverifymodule = () => client.get(authverifymodule_endpoint);

const authverifymodule_endpoint = '/authverifymodule/getchargeslist/{companynumber}';
const authverifymodule = () => client.get(authverifymodule_endpoint);

const authverifymodule_endpoint = '/authverifymodule/getdissolvedcompany/{companyname}/{searchtype}';
const authverifymodule = () => client.get(authverifymodule_endpoint);

const authverifymodule_endpoint = '/authverifymodule/getdisqualifiedofficers/{officer}';
const authverifymodule = () => client.get(authverifymodule_endpoint);

const authverifymodule_endpoint = '/authverifymodule/getchargers/{companynumber}/{chargeid}';
const authverifymodule = () => client.get(authverifymodule_endpoint);

const authverifymodule_endpoint = '/authverifymodule/getfilinghistorylist/{companynumber}';
const authverifymodule = () => client.get(authverifymodule_endpoint);

const authverifymodule_endpoint = '/authverifymodule/getfilinghistory/{companynumber}/{transactionid}';
const authverifymodule = () => client.get(authverifymodule_endpoint);

const authverifymodule_endpoint = '/authverifymodule/getinsolvency/{companynumber}';
const authverifymodule = () => client.get(authverifymodule_endpoint);

const authverifymodule_endpoint = '/authverifymodule/getexemptions/{companynumber}';
const authverifymodule = () => client.get(authverifymodule_endpoint);

const authverifymodule_endpoint = '/authverifymodule/getregisteredofficeaddress/{companynumber}';
const authverifymodule = () => client.get(authverifymodule_endpoint);

const authverifymodule_endpoint = '/authverifymodule/getcompaniesalphabetically/{companyname}';
const authverifymodule = () => client.get(authverifymodule_endpoint);

const authverifymodule_getaddressesbypostcode_endpoint = '/authverifymodule/getaddressesbypostcode';
const authverifymodule_getaddressesbypostcode = () => client.get(authverifymodule_getaddressesbypostcode_endpoint);

const authverifymodule_cropdocument = (Page, DocumentType, ClientReference) => client.post('/authverifymodule/cropdocument', { Page, DocumentType, ClientReference });

const authverifymodule_classifyandverify = (DocumentType, ClientReference, AutoVerify) => client.post('/authverifymodule/classifyandverify', { DocumentType, ClientReference, AutoVerify });

const authverifymodule_verifydocument = () => client.post('/authverifymodule/verifydocument', {  });

const authverifymodule_sendloginotp = (email, phoneNumber) => client.post('/authverifymodule/sendloginotp', { email, phoneNumber });

const authverifymodule_verifyloginotp = (email, emailOTP, phoneNumber, phoneOTP) => client.post('/authverifymodule/verifyloginotp', { email, emailOTP, phoneNumber, phoneOTP });

const authverifymodule_savetokendetails = (customerID, tokenId, DeviceId) => client.post('/authverifymodule/savetokendetails', { customerID, tokenId, DeviceId });

const authverifymodule_sendnotification = () => client.post('/authverifymodule/sendnotification', {  });

const authverifymodule_kyccheck = () => client.post('/authverifymodule/kyccheck', {  });

const authverifymodule_kybcheck = (CompanyName, CompanyID) => client.post('/authverifymodule/kybcheck', { CompanyName, CompanyID });

const ecomodule_earthly_getprojectbyid_endpoint = '/ecomodule/earthly/getprojectbyid';
const ecomodule_earthly_getprojectbyid = () => client.get(ecomodule_earthly_getprojectbyid_endpoint);

const ecomodule_earthly_getprojectlist_endpoint = '/ecomodule/earthly/getprojectlist';
const ecomodule_earthly_getprojectlist = () => client.get(ecomodule_earthly_getprojectlist_endpoint);

const ecomodule_earthly_createtokenizeduser = () => client.post('/ecomodule/earthly/createtokenizeduser', {  });

const ecomodule_earthly_getcompanyimpacts_endpoint = '/ecomodule/earthly/getcompanyimpacts';
const ecomodule_earthly_getcompanyimpacts = () => client.get(ecomodule_earthly_getcompanyimpacts_endpoint);

const ecomodule_endpoint = '/ecomodule/earthly/getuserimpacts/{userid}';
const ecomodule = () => client.get(ecomodule_endpoint);

const ecomodule_earthly_rewarduser_{userid}_{projectid} = (userId, projectId, amount) => client.post('/ecomodule/earthly/rewarduser/{userid}/{projectid}', { userId, projectId, amount });

const ecomodule_earthly_checkout = () => client.post('/ecomodule/earthly/checkout', {  });
