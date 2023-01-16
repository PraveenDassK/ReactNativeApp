// *-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*- /GetCompanySearch/{RegNo} -*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-* 

    const GetCompanySearch_RegNo_endpoint = '/authverifymodule/GetCompanySearch/{RegNo}';
    const GetCompanySearch_RegNo = () => client.get(GetCompanySearch_RegNo_endpoint); 


// *-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*- /GetOfficerList/{companyNumber} -*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-* 

    const GetOfficerList_companyNumber_endpoint = '/authverifymodule/GetOfficerList/{companyNumber}';
    const GetOfficerList_companyNumber = () => client.get(GetOfficerList_companyNumber_endpoint); 


// *-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*- /AdvanceCompanySearch -*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-* 

    const AdvanceCompanySearch_endpoint = '/authverifymodule/AdvanceCompanySearch';
    const AdvanceCompanySearch = () => client.get(AdvanceCompanySearch_endpoint); 


// *-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*- /ListStatement/{company_number} -*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-* 

    const ListStatement_company_number_endpoint = '/authverifymodule/ListStatement/{company_number}';
    const ListStatement_company_number = () => client.get(ListStatement_company_number_endpoint); 


// *-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*- /GetBeneficialOwner/{companyNumber},{psc_id} -*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-* 

    const GetBeneficialOwner_companyNumber_psc_id_endpoint = '/authverifymodule/GetBeneficialOwner/{companyNumber},{psc_id}';
    const GetBeneficialOwner_companyNumber_psc_id = () => client.get(GetBeneficialOwner_companyNumber_psc_id_endpoint); 


// *-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*- /GetStatement/{company_number},{statement_id} -*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-* 

    const GetStatement_company_number_statement_id_endpoint = '/authverifymodule/GetStatement/{company_number},{statement_id}';
    const GetStatement_company_number_statement_id = () => client.get(GetStatement_company_number_statement_id_endpoint); 


// *-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*- /GetSuperSecurePerson/{company_number},{super_secure_id} -*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-* 

    const GetSuperSecurePerson_company_number_super_secure_id_endpoint = '/authverifymodule/GetSuperSecurePerson/{company_number},{super_secure_id}';
    const GetSuperSecurePerson_company_number_super_secure_id = () => client.get(GetSuperSecurePerson_company_number_super_secure_id_endpoint); 


// *-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*- /GetSuperSecureBeneficialOwner/{company_number},{super_secure_id} -*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-* 

    const GetSuperSecureBeneficialOwner_company_number_super_secure_id_endpoint = '/authverifymodule/GetSuperSecureBeneficialOwner/{company_number},{super_secure_id}';
    const GetSuperSecureBeneficialOwner_company_number_super_secure_id = () => client.get(GetSuperSecureBeneficialOwner_company_number_super_secure_id_endpoint); 


// *-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*- /GetLegalPersonBeneficialOwner/{company_number},{psc_id} -*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-* 

    const GetLegalPersonBeneficialOwner_company_number_psc_id_endpoint = '/authverifymodule/GetLegalPersonBeneficialOwner/{company_number},{psc_id}';
    const GetLegalPersonBeneficialOwner_company_number_psc_id = () => client.get(GetLegalPersonBeneficialOwner_company_number_psc_id_endpoint); 


// *-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*- /GetLegalPerson/{company_number},{psc_id} -*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-* 

    const GetLegalPerson_company_number_psc_id_endpoint = '/authverifymodule/GetLegalPerson/{company_number},{psc_id}';
    const GetLegalPerson_company_number_psc_id = () => client.get(GetLegalPerson_company_number_psc_id_endpoint); 


// *-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*- /GetCooperateEntities/{company_number},{psc_id} -*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-* 

    const GetCooperateEntities_company_number_psc_id_endpoint = '/authverifymodule/GetCooperateEntities/{company_number},{psc_id}';
    const GetCooperateEntities_company_number_psc_id = () => client.get(GetCooperateEntities_company_number_psc_id_endpoint); 


// *-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*- /GetPSC/{companyNumber} -*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-* 

    const GetPSC_companyNumber_endpoint = '/authverifymodule/GetPSC/{companyNumber}';
    const GetPSC_companyNumber = () => client.get(GetPSC_companyNumber_endpoint); 


// *-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*- /GetPSCIndividual/{companyNumber}/{PSCId} -*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-* 

    const GetPSCIndividual_companyNumber_PSCId_endpoint = '/authverifymodule/GetPSCIndividual/{companyNumber}/{PSCId}';
    const GetPSCIndividual_companyNumber_PSCId = () => client.get(GetPSCIndividual_companyNumber_PSCId_endpoint); 


// *-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*- /GetOfficerAppointmentList/{officerId} -*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-* 

    const GetOfficerAppointmentList_officerId_endpoint = '/authverifymodule/GetOfficerAppointmentList/{officerId}';
    const GetOfficerAppointmentList_officerId = () => client.get(GetOfficerAppointmentList_officerId_endpoint); 


// *-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*- /GetCODisqualification/{officerId} -*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-* 

    const GetCODisqualification_officerId_endpoint = '/authverifymodule/GetCODisqualification/{officerId}';
    const GetCODisqualification_officerId = () => client.get(GetCODisqualification_officerId_endpoint); 


// *-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*- /GetNaturalOfficerDisqualification/{officerId} -*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-* 

    const GetNaturalOfficerDisqualification_officerId_endpoint = '/authverifymodule/GetNaturalOfficerDisqualification/{officerId}';
    const GetNaturalOfficerDisqualification_officerId = () => client.get(GetNaturalOfficerDisqualification_officerId_endpoint); 


// *-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*- /GetCompanyRegisters/{companyNumber} -*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-* 

    const GetCompanyRegisters_companyNumber_endpoint = '/authverifymodule/GetCompanyRegisters/{companyNumber}';
    const GetCompanyRegisters_companyNumber = () => client.get(GetCompanyRegisters_companyNumber_endpoint); 


// *-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*- /GetChargesList/{companyNumber} -*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-* 

    const GetChargesList_companyNumber_endpoint = '/authverifymodule/GetChargesList/{companyNumber}';
    const GetChargesList_companyNumber = () => client.get(GetChargesList_companyNumber_endpoint); 


// *-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*- /GetDissolvedCompany/{companyName}/{searchType} -*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-* 

    const GetDissolvedCompany_companyName_searchType_endpoint = '/authverifymodule/GetDissolvedCompany/{companyName}/{searchType}';
    const GetDissolvedCompany_companyName_searchType = () => client.get(GetDissolvedCompany_companyName_searchType_endpoint); 


// *-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*- /GetDisqualifiedOfficers/{Officer} -*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-* 

    const GetDisqualifiedOfficers_Officer_endpoint = '/authverifymodule/GetDisqualifiedOfficers/{Officer}';
    const GetDisqualifiedOfficers_Officer = () => client.get(GetDisqualifiedOfficers_Officer_endpoint); 


// *-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*- /GetChargers/{companyNumber}/{chargeId} -*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-* 

    const GetChargers_companyNumber_chargeId_endpoint = '/authverifymodule/GetChargers/{companyNumber}/{chargeId}';
    const GetChargers_companyNumber_chargeId = () => client.get(GetChargers_companyNumber_chargeId_endpoint); 


// *-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*- /GetFilingHistoryList/{companyNumber} -*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-* 

    const GetFilingHistoryList_companyNumber_endpoint = '/authverifymodule/GetFilingHistoryList/{companyNumber}';
    const GetFilingHistoryList_companyNumber = () => client.get(GetFilingHistoryList_companyNumber_endpoint); 


// *-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*- /GetFilingHistory/{companyNumber}/{transactionId} -*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-* 

    const GetFilingHistory_companyNumber_transactionId_endpoint = '/authverifymodule/GetFilingHistory/{companyNumber}/{transactionId}';
    const GetFilingHistory_companyNumber_transactionId = () => client.get(GetFilingHistory_companyNumber_transactionId_endpoint); 


// *-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*- /GetInsolvency/{companyNumber} -*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-* 

    const GetInsolvency_companyNumber_endpoint = '/authverifymodule/GetInsolvency/{companyNumber}';
    const GetInsolvency_companyNumber = () => client.get(GetInsolvency_companyNumber_endpoint); 


// *-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*- /GetExemptions/{companyNumber} -*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-* 

    const GetExemptions_companyNumber_endpoint = '/authverifymodule/GetExemptions/{companyNumber}';
    const GetExemptions_companyNumber = () => client.get(GetExemptions_companyNumber_endpoint); 


// *-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*- /GetRegisteredOfficeAddress/{companyNumber} -*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-* 

    const GetRegisteredOfficeAddress_companyNumber_endpoint = '/authverifymodule/GetRegisteredOfficeAddress/{companyNumber}';
    const GetRegisteredOfficeAddress_companyNumber = () => client.get(GetRegisteredOfficeAddress_companyNumber_endpoint); 


// *-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*- /GetCompaniesAlphabetically/{companyName} -*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-* 

    const GetCompaniesAlphabetically_companyName_endpoint = '/authverifymodule/GetCompaniesAlphabetically/{companyName}';
    const GetCompaniesAlphabetically_companyName = () => client.get(GetCompaniesAlphabetically_companyName_endpoint); 


// *-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*- /GetAddressesByPostcode -*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-* 

    const GetAddressesByPostcode_endpoint = '/authverifymodule/GetAddressesByPostcode';
    const GetAddressesByPostcode = () => client.get(GetAddressesByPostcode_endpoint); 

email
phoneNumber

// *-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*- /SendLoginOTP -*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*

    const SendLoginOTP = ( companyName ) => client.post('/authverifymodule/SendLoginOTP', { companyName });


/* *-*-*-*-*-*-*-*-*-*- BODY -*-*-*-*-*-*-*-*-*-*
     email
     phoneNumber
*/
email
emailOTP
phoneNumber
phoneOTP

// *-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*- /VerifyLoginOTP -*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*

    const VerifyLoginOTP = ( companyName ) => client.post('/authverifymodule/VerifyLoginOTP', { companyName });


/* *-*-*-*-*-*-*-*-*-*- BODY -*-*-*-*-*-*-*-*-*-*
     email
     emailOTP
     phoneNumber
     phoneOTP
*/
customerID
tokenId
DeviceId

// *-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*- /SaveTokenDetails -*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*

    const SaveTokenDetails = ( companyName ) => client.post('/authverifymodule/SaveTokenDetails', { companyName });


/* *-*-*-*-*-*-*-*-*-*- BODY -*-*-*-*-*-*-*-*-*-*
     customerID
     tokenId
     DeviceId
*/

// *-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*- /SendNotification -*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*

    const SendNotification = ( companyName ) => client.post('/authverifymodule/SendNotification', { companyName });


// *-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*- /KYCCheck -*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*

    const KYCCheck = ( companyName ) => client.post('/authverifymodule/KYCCheck', { companyName });


// *-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*- /KYBCheck -*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*

    const KYBCheck = ( companyName ) => client.post('/authverifymodule/KYBCheck', { companyName });


/* *-*-*-*-*-*-*-*-*-*- BODY -*-*-*-*-*-*-*-*-*-*
     CompanyName
     CompanyID
*/

// *-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*- /FaceComparisonAsync -*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*

    const FaceComparisonAsync = ( companyName ) => client.post('/authverifymodule/FaceComparisonAsync', { companyName });


// *-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*- /CropDocument -*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*

    const CropDocument = ( companyName ) => client.post('/authverifymodule/CropDocument', { companyName });


// *-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*- /ClassifyAndVerify -*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*

    const ClassifyAndVerify = ( companyName ) => client.post('/authverifymodule/ClassifyAndVerify', { companyName });


// *-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*- /VerifyDocument -*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*

    const VerifyDocument = ( companyName ) => client.post('/authverifymodule/VerifyDocument', { companyName });


// *-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*- /SetToggles -*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*

    const SetToggles = ( companyName ) => client.post('/cardmodule/SetToggles', { companyName });


/* *-*-*-*-*-*-*-*-*-*- BODY -*-*-*-*-*-*-*-*-*-*
     accountId
     onlineTransactions
     swipePayments
     atmWithdrawals
     contactlessPayments
*/

// *-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*- /GetToggles -*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*

    const GetToggles_endpoint = '/cardmodule/GetToggles';
    const GetToggles = () => client.get(GetToggles_endpoint);


// *-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*- /Earthly/GetProjectById -*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*

    const Earthly_GetProjectById_endpoint = '/ecomodule/Earthly/GetProjectById';
    const Earthly_GetProjectById = () => client.get(Earthly_GetProjectById_endpoint);


// *-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*- /Earthly/GetProjectList -*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*

    const Earthly_GetProjectList_endpoint = '/ecomodule/Earthly/GetProjectList';
    const Earthly_GetProjectList = () => client.get(Earthly_GetProjectList_endpoint);


// *-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*- /Earthly/CreateTokenizedUser -*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*

    const Earthly_CreateTokenizedUser = ( companyName ) => client.post('/ecomodule/Earthly/CreateTokenizedUser', { companyName });


// *-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*- /Earthly/GetCompanyImpacts -*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*

    const Earthly_GetCompanyImpacts_endpoint = '/ecomodule/Earthly/GetCompanyImpacts';
    const Earthly_GetCompanyImpacts = () => client.get(Earthly_GetCompanyImpacts_endpoint);


// *-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*- /Earthly/GetUserImpacts/{userId} -*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*

    const Earthly_GetUserImpacts_userId_endpoint = '/ecomodule/Earthly/GetUserImpacts/{userId}';
    const Earthly_GetUserImpacts_userId = () => client.get(Earthly_GetUserImpacts_userId_endpoint);


// *-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*- /Earthly/RewardUser/{userId}/{projectId} -*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*

    const Earthly_RewardUser_userId_projectId = ( userId, projectId ) => client.post('/ecomodule/Earthly/RewardUser/{userId}/{projectId}', { userId, projectId });


/* *-*-*-*-*-*-*-*-*-*- BODY -*-*-*-*-*-*-*-*-*-*
     userId
*/

// *-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*- /Earthly/Checkout -*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*

    const Earthly_Checkout = ( userId, projectId ) => client.post('/ecomodule/Earthly/Checkout', { userId, projectId });


// *-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*- /GenerateReferralCode -*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*

    const GenerateReferralCode = ( userId, projectId ) => client.post('/referralmodule/GenerateReferralCode', { userId, projectId });


/* *-*-*-*-*-*-*-*-*-*- BODY -*-*-*-*-*-*-*-*-*-*
     userId
     typeOfUser
     nameOfReferred
*/

// *-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*- /VerifyReferralCode -*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*

    const VerifyReferralCode_endpoint = '/referralmodule/VerifyReferralCode';
    const VerifyReferralCode = () => client.get(VerifyReferralCode_endpoint);


// *-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*- /UseReferralCode -*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*

    const UseReferralCode = ( userId, projectId ) => client.post('/referralmodule/UseReferralCode', { userId, projectId });


/* *-*-*-*-*-*-*-*-*-*- BODY -*-*-*-*-*-*-*-*-*-*
     referralCode
     status
*/
email
phoneNumber

// *-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*- /SendRegistrationOTP -*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*

    const SendRegistrationOTP = ( userId, projectId ) => client.post('/regmodule/SendRegistrationOTP', { userId, projectId });


/* *-*-*-*-*-*-*-*-*-*- BODY -*-*-*-*-*-*-*-*-*-*
     email
     phoneNumber
*/
email
emailOTP
phoneNumber
phoneOTP

// *-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*- /VerifyRegistrationOTP -*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*

    const VerifyRegistrationOTP = ( userId, projectId ) => client.post('/regmodule/VerifyRegistrationOTP', { userId, projectId });


/* *-*-*-*-*-*-*-*-*-*- BODY -*-*-*-*-*-*-*-*-*-*
     email
     emailOTP
     phoneNumber
     phoneOTP
*/

// *-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*- /GetCustomerDetais -*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*

    const GetCustomerDetais_endpoint = '/regmodule/GetCustomerDetais';
    const GetCustomerDetais = () => client.get(GetCustomerDetais_endpoint);


// *-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*- /SaveCustomerAccountDetails -*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*

    const SaveCustomerAccountDetails = ( userId, projectId ) => client.post('/regmodule/SaveCustomerAccountDetails', { userId, projectId });


// *-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*- /SaveCompanyDetails -*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*

    const SaveCompanyDetails = ( userId, projectId ) => client.post('/regmodule/SaveCompanyDetails', { userId, projectId });


// *-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*- /GetTransactionList/{accountId} -*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*

    const GetTransactionList_accountId_endpoint = '/transactionmodule/GetTransactionList/{accountId}';
    const GetTransactionList_accountId = () => client.get(GetTransactionList_accountId_endpoint);


// *-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*- /DisputeTransaction -*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*

    const DisputeTransaction = ( accountId ) => client.post('/transactionmodule/DisputeTransaction', { accountId });


/* *-*-*-*-*-*-*-*-*-*- BODY -*-*-*-*-*-*-*-*-*-*
     accountId
     transactionId
*/

// *-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*- /SendReminder -*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*

    const SendReminder_endpoint = '/transactionmodule/SendReminder';
    const SendReminder = () => client.get(SendReminder_endpoint);


// *-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*- /CarbonCalculation -*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*

    const CarbonCalculation_endpoint = '/transactionmodule/CarbonCalculation';
    const CarbonCalculation = () => client.get(CarbonCalculation_endpoint);


// *-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*- /SetBudget -*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*

    const SetBudget = ( accountId ) => client.post('/transactionmodule/SetBudget', { accountId });


/* *-*-*-*-*-*-*-*-*-*- BODY -*-*-*-*-*-*-*-*-*-*
     accountId
     periodType
     amount
*/

// *-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*- /GetBudget -*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*

    const GetBudget_endpoint = '/transactionmodule/GetBudget';
    const GetBudget = () => client.get(GetBudget_endpoint);


// *-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*- /DownloadTransaction -*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*

    const DownloadTransaction_endpoint = '/transactionmodule/DownloadTransaction';
    const DownloadTransaction = () => client.get(DownloadTransaction_endpoint);


// *-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*- /GetDDMandates/{accountId} -*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*

    const GetDDMandates_accountId_endpoint = '/transactionmodule/GetDDMandates/{accountId}';
    const GetDDMandates_accountId = () => client.get(GetDDMandates_accountId_endpoint);


// *-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*- /Enfuce/GetCustomerbyId -*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*

    const Enfuce_GetCustomerbyId_endpoint = '/walletmodule/Enfuce/GetCustomerbyId';
    const Enfuce_GetCustomerbyId = () => client.get(Enfuce_GetCustomerbyId_endpoint);


// *-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*- /Enfuce/GetCustomerbyCustomerNumber -*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*

    const Enfuce_GetCustomerbyCustomerNumber_endpoint = '/walletmodule/Enfuce/GetCustomerbyCustomerNumber';
    const Enfuce_GetCustomerbyCustomerNumber = () => client.get(Enfuce_GetCustomerbyCustomerNumber_endpoint);


// *-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*- /Enfuce/CreatePrivateCustomer -*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*

    const Enfuce_CreatePrivateCustomer = ( accountId ) => client.post('/walletmodule/Enfuce/CreatePrivateCustomer', { accountId });


// *-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*- /Enfuce/CreateCorporateCustomer -*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*

    const Enfuce_CreateCorporateCustomer = ( accountId ) => client.post('/walletmodule/Enfuce/CreateCorporateCustomer', { accountId });


// *-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*- /Enfuce/UpdatePrivateCustomer -*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*

    const Enfuce_UpdatePrivateCustomer = ( accountId ) => client.patch('/walletmodule/Enfuce/UpdatePrivateCustomer', { accountId });


/* *-*-*-*-*-*-*-*-*-*- BODY -*-*-*-*-*-*-*-*-*-*
     id
*/

// *-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*- /Enfuce/UpdateCorporateCustomer -*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*

    const Enfuce_UpdateCorporateCustomer = ( accountId ) => client.patch('/walletmodule/Enfuce/UpdateCorporateCustomer', { accountId });


/* *-*-*-*-*-*-*-*-*-*- BODY -*-*-*-*-*-*-*-*-*-*
     id
*/

// *-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*- /Enfuce/UpdateCustomer -*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*

    const Enfuce_UpdateCustomer = ( accountId ) => client.post('/walletmodule/Enfuce/UpdateCustomer', { accountId });


/* *-*-*-*-*-*-*-*-*-*- BODY -*-*-*-*-*-*-*-*-*-*
     id
     propertyToUpdate
     role
     dummy
*/

// *-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*- /Enfuce/GetAccountbyId -*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*

    const Enfuce_GetAccountbyId_endpoint = '/walletmodule/Enfuce/GetAccountbyId';
    const Enfuce_GetAccountbyId = () => client.get(Enfuce_GetAccountbyId_endpoint);


// *-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*- /Enfuce/GetAccountbyAccountNumber -*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*

    const Enfuce_GetAccountbyAccountNumber_endpoint = '/walletmodule/Enfuce/GetAccountbyAccountNumber';
    const Enfuce_GetAccountbyAccountNumber = () => client.get(Enfuce_GetAccountbyAccountNumber_endpoint);


// *-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*- /Enfuce/CreateCreditAccount -*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*

    const Enfuce_CreateCreditAccount = ( accountId ) => client.post('/walletmodule/Enfuce/CreateCreditAccount', { accountId });


/* *-*-*-*-*-*-*-*-*-*- BODY -*-*-*-*-*-*-*-*-*-*
     customerId
*/

// *-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*- /Enfuce/CreateDebitAccount -*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*

    const Enfuce_CreateDebitAccount = ( accountId ) => client.post('/walletmodule/Enfuce/CreateDebitAccount', { accountId });


/* *-*-*-*-*-*-*-*-*-*- BODY -*-*-*-*-*-*-*-*-*-*
     customerId
*/

// *-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*- /Enfuce/CreatePrepaidAccount -*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*

    const Enfuce_CreatePrepaidAccount = ( accountId ) => client.post('/walletmodule/Enfuce/CreatePrepaidAccount', { accountId });


/* *-*-*-*-*-*-*-*-*-*- BODY -*-*-*-*-*-*-*-*-*-*
     customerId
*/

// *-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*- /Enfuce/ViewPIN -*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*

    const Enfuce_ViewPIN = ( accountId ) => client.post('/walletmodule/Enfuce/ViewPIN', { accountId });


// *-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*- /Enfuce/GetTZPKforSetPIN -*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*

    const Enfuce_GetTZPKforSetPIN = ( accountId ) => client.post('/walletmodule/Enfuce/GetTZPKforSetPIN', { accountId });


// *-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*- /Enfuce/SetPIN -*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*

    const Enfuce_SetPIN = ( accountId ) => client.post('/walletmodule/Enfuce/SetPIN', { accountId });


// *-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*- /GetInvoiceById -*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*

    const GetInvoiceById_endpoint = '/walletmodule/GetInvoiceById';
    const GetInvoiceById = () => client.get(GetInvoiceById_endpoint);


// *-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*- /GetTransactionsandAuthorizationsById -*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*

    const GetTransactionsandAuthorizationsById_endpoint = '/walletmodule/GetTransactionsandAuthorizationsById';
    const GetTransactionsandAuthorizationsById = () => client.get(GetTransactionsandAuthorizationsById_endpoint);


// *-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*- /Enfuce/CreateCard -*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*

    const Enfuce_CreateCard = ( accountId ) => client.post('/walletmodule/Enfuce/CreateCard', { accountId });


/* *-*-*-*-*-*-*-*-*-*- BODY -*-*-*-*-*-*-*-*-*-*
     customerid
     accountid
     cardRole
*/

// *-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*- /Enfuce/UpdateCard/{id} -*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*

    const Enfuce_UpdateCard_id = ( id ) => client.patch('/walletmodule/Enfuce/UpdateCard/{id}', { id });


// *-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*- /Enfuce/GetCardByAccount -*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*

    const Enfuce_GetCardByAccount_endpoint = '/walletmodule/Enfuce/GetCardByAccount';
    const Enfuce_GetCardByAccount = () => client.get(Enfuce_GetCardByAccount_endpoint);


// *-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*- /Enfuce/GetECBExchangeRates -*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*

    const Enfuce_GetECBExchangeRates_endpoint = '/walletmodule/Enfuce/GetECBExchangeRates';
    const Enfuce_GetECBExchangeRates = () => client.get(Enfuce_GetECBExchangeRates_endpoint);


// *-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*- /Enfuce/FXExchangeRates -*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*

    const Enfuce_FXExchangeRates = ( id ) => client.post('/walletmodule/Enfuce/FXExchangeRates', { id });


/* *-*-*-*-*-*-*-*-*-*- BODY -*-*-*-*-*-*-*-*-*-*
     paymentScheme
     fromAmount
     fromCurrency
     issuerMarkupPercentage
     toCurrency
*/

// *-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*- /Enfuce/GetAccountbyCustomerID -*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*

    const Enfuce_GetAccountbyCustomerID_endpoint = '/walletmodule/Enfuce/GetAccountbyCustomerID';
    const Enfuce_GetAccountbyCustomerID = () => client.get(Enfuce_GetAccountbyCustomerID_endpoint);


// *-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*- /Enfuce/GetAccountHierarchy/{accountid} -*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*

    const Enfuce_GetAccountHierarchy_accountid_endpoint = '/walletmodule/Enfuce/GetAccountHierarchy/{accountid}';
    const Enfuce_GetAccountHierarchy_accountid = () => client.get(Enfuce_GetAccountHierarchy_accountid_endpoint);


// *-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*- /Enfuce/UpdateDebitAccount -*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*

    const Enfuce_UpdateDebitAccount = ( accountid ) => client.patch('/walletmodule/Enfuce/UpdateDebitAccount', { accountid });


/* *-*-*-*-*-*-*-*-*-*- BODY -*-*-*-*-*-*-*-*-*-*
     id
     address.address1
     address.address2
     address.address3
     address.address4
     address.city
     address.country
     address.region
     address.zipCode
     closureReason
     customerId
     name
     number
     paymentReference.number
     paymentReference.type
     reason
     segment
     status
     usageLimits
*/

// *-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*- /Enfuce/UpdatePrepaidAccount -*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*

    const Enfuce_UpdatePrepaidAccount = ( accountid ) => client.patch('/walletmodule/Enfuce/UpdatePrepaidAccount', { accountid });


/* *-*-*-*-*-*-*-*-*-*- BODY -*-*-*-*-*-*-*-*-*-*
     id
     address.address1
     address.address2
     address.address3
     address.address4
     address.city
     address.country
     address.region
     address.zipCode
     closureReason
     customerId
     name
     number
     paymentReference.number
     paymentReference.type
     reason
     segment
     status
     usageLimits
*/

// *-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*- /Enfuce/UpdateAccount -*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*

    const Enfuce_UpdateAccount = ( accountid ) => client.post('/walletmodule/Enfuce/UpdateAccount', { accountid });


/* *-*-*-*-*-*-*-*-*-*- BODY -*-*-*-*-*-*-*-*-*-*
     id
     propertyToUpdate
     dummy
*/

// *-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*- /GetCustomer/{cid} -*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*

    const GetCustomer_cid_endpoint = '/walletmodule/GetCustomer/{cid}';
    const GetCustomer_cid = () => client.get(GetCustomer_cid_endpoint);


// *-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*- /CreateNewCustomer -*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*

    const CreateNewCustomer = ( cid ) => client.post('/walletmodule/CreateNewCustomer', { cid });


// *-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*- /UploadDocument -*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*

    const UploadDocument = ( cid ) => client.post('/walletmodule/UploadDocument', { cid });


/* *-*-*-*-*-*-*-*-*-*- BODY -*-*-*-*-*-*-*-*-*-*
     fileName
     content
     group
*/

// *-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*- /CreateDDMandate/{id} -*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*

    const CreateDDMandate_id = ( id ) => client.post('/walletmodule/CreateDDMandate/{id}', { id });


/* *-*-*-*-*-*-*-*-*-*- BODY -*-*-*-*-*-*-*-*-*-*
     id
     accountName
     accountNumber
     address.addressLine1
     address.addressLine2
     address.country
     address.postCode
     address.postTown
     email
     externalReference
     name
     payeeAccountBid
     phone
     reference
*/

// *-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*- /GetMandates -*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*

    const GetMandates_endpoint = '/walletmodule/GetMandates';
    const GetMandates = () => client.get(GetMandates_endpoint);


// *-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*- /CancelMandate/{id} -*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*

    const CancelMandate_id = ( id ) => client.post('/walletmodule/CancelMandate/{id}', { id });


/* *-*-*-*-*-*-*-*-*-*- BODY -*-*-*-*-*-*-*-*-*-*
     id
*/

// *-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*- /DDMandateWebhook -*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*

    const DDMandateWebhook = ( id ) => client.post('/walletmodule/DDMandateWebhook', { id });


// *-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*- /GetCollectionActivities -*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*

    const GetCollectionActivities_endpoint = '/walletmodule/GetCollectionActivities';
    const GetCollectionActivities = () => client.get(GetCollectionActivities_endpoint);


// *-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*- /CreateCollectionSchedule/{id} -*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*

    const CreateCollectionSchedule_id = ( id ) => client.post('/walletmodule/CreateCollectionSchedule/{id}', { id });


/* *-*-*-*-*-*-*-*-*-*- BODY -*-*-*-*-*-*-*-*-*-*
     id
     currency
     externalReference
     firstPaymentAmount
     firstPaymentDate
     frequency
     numberOfPayments
     regularPaymentAmount
*/

// *-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*- /CancelDDCollection/{id} -*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*

    const CancelDDCollection_id = ( id ) => client.post('/walletmodule/CancelDDCollection/{id}', { id });


// *-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*- /CancelDDCollectionSchedule/{collectionScheduleId} -*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*

    const CancelDDCollectionSchedule_collectionScheduleId = ( collectionScheduleId ) => client.post('/walletmodule/CancelDDCollectionSchedule/{collectionScheduleId}', { collectionScheduleId });


// *-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*- /PayInWebhook -*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*

    const PayInWebhook = ( collectionScheduleId ) => client.post('/walletmodule/PayInWebhook', { collectionScheduleId });


/* *-*-*-*-*-*-*-*-*-*- BODY -*-*-*-*-*-*-*-*-*-*
     Type
     Payee.Name
     Payee.Address.addressLine1
     Payee.Address.addressLine2
     Payee.Address.country
     Payee.Address.postCode
     Payee.Address.postTown
     Payee.Identifier.Type
     Payee.Identifier.SortCode
     Payee.Identifier.AccountNumber
     Payer.Name
     Payer.Address.addressLine1
     Payer.Address.addressLine2
     Payer.Address.country
     Payer.Address.postCode
     Payer.Address.postTown
     Payer.Identifier.Type
     Payer.Identifier.SortCode
     Payer.Identifier.AccountNumber
     Amount
     EventId
     Currency
     DateTime
     AccountId
     EventName
     EventTime
     PaymentAppliedTime
     PayerName
     PaymentId
     SchemeInfo.Id
     ReturnReason
     TransactionId
     PaymentReference
     AccountExternalRef
     OriginatedOverseas
     OriginatingPayment.Institution.Id
*/

// *-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*- /UpcomingDDCollectionCreditWebhook -*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*

    const UpcomingDDCollectionCreditWebhook = ( collectionScheduleId ) => client.post('/walletmodule/UpcomingDDCollectionCreditWebhook', { collectionScheduleId });


/* *-*-*-*-*-*-*-*-*-*- BODY -*-*-*-*-*-*-*-*-*-*
     EventId
     Currency
     AccountId
     EventName
     EventTime
     SchemeInfo.Id
     SchemeInfo.Name
     CollectionDate
     ServiceUserNumber
     AccountExternalRef
     TotalCollectionAmount
*/

// *-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*- /DDCollectionStatusWebhook -*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*

    const DDCollectionStatusWebhook = ( collectionScheduleId ) => client.post('/walletmodule/DDCollectionStatusWebhook', { collectionScheduleId });


/* *-*-*-*-*-*-*-*-*-*- BODY -*-*-*-*-*-*-*-*-*-*
     accountBid
     sun
     mandateId
     currency
     amount
     returnReason
     representable
     CollectionId
     collectionStatus
     collectionDate
     mandateReference
     payer.name
     payer.identifier.type
     payer.identifier.accountNumber
     payer.identifier.sortCode
     returnReasonCode
     ddDirection
*/

// *-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*- /SuspendMandate/{id} -*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*

    const SuspendMandate_id = ( id ) => client.post('/walletmodule/SuspendMandate/{id}', { id });


/* *-*-*-*-*-*-*-*-*-*- BODY -*-*-*-*-*-*-*-*-*-*
     id
     cancelAllScheduledPayments
*/

// *-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*- /ReinstateMandate/{id} -*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*

    const ReinstateMandate_id = ( id ) => client.post('/walletmodule/ReinstateMandate/{id}', { id });


/* *-*-*-*-*-*-*-*-*-*- BODY -*-*-*-*-*-*-*-*-*-*
     id
*/

// *-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*- /CreateCustomerPCMIndividual -*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*

    const CreateCustomerPCMIndividual = ( id ) => client.post('/walletmodule/CreateCustomerPCMIndividual', { id });


// *-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*- /CreateCustomerPCMBusiness -*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*

    const CreateCustomerPCMBusiness = ( id ) => client.post('/walletmodule/CreateCustomerPCMBusiness', { id });


/* *-*-*-*-*-*-*-*-*-*- BODY -*-*-*-*-*-*-*-*-*-*
     registeredAddress.addressLine1
     registeredAddress.addressLine2
     registeredAddress.postTown
     registeredAddress.postCode
     registeredAddress.country
     tradingAddress.addressLine1
     tradingAddress.addressLine2
     tradingAddress.postTown
     tradingAddress.postCode
     tradingAddress.country
     associates
     documentInfo
     customerTrust.trustNature
     taxProfile.taxIdentifier
     externalReference
     name
     companyRegNumber
     industryCode
     tcsVersion
     type
     expectedMonthlySpend
     legalEntity
     provisionalCustomerId
*/

// *-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*- /CreateAccounts/{CustomerId} -*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*

    const CreateAccounts_CustomerId = ( customerId ) => client.post('/walletmodule/CreateAccounts/{CustomerId}', { customerId });


/* *-*-*-*-*-*-*-*-*-*- BODY -*-*-*-*-*-*-*-*-*-*
     customerId
     externalReference
     currency
*/

// *-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*- /FutureDated -*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*

    const FutureDated = ( customerId ) => client.post('/walletmodule/FutureDated', { customerId });


/* *-*-*-*-*-*-*-*-*-*- BODY -*-*-*-*-*-*-*-*-*-*
     sourceAccountId
     destination.type
     destination.id
     destination.iban
     destination.accountNumber
     destination.sortCode
     destination.name
     destination.address.addressLine1
     destination.address.addressLine2
     destination.address.postTown
     destination.address.postCode
     destination.address.country
     destination.birthdate
     destination.emailAddress
     destination.phoneNumber
     destination.bic
     destination.countrySpecificDetails.bankName
     destination.countrySpecificDetails.bankAddress
     destination.countrySpecificDetails.bankCity
     destination.countrySpecificDetails.bankBranchName
     destination.countrySpecificDetails.bankBranchCode
     destination.countrySpecificDetails.bankCode
     destination.countrySpecificDetails.chineseId
     destination.countrySpecificDetails.province
     destination.countrySpecificDetails.business
     currency
     amount
     reference
     externalReference
     endToEndReference
     regulatoryReporting.type
     regulatoryReporting.regulatoryAuthority.authorityName
     regulatoryReporting.regulatoryAuthority.authorityCountry
     regulatoryReporting.structuredRegulatoryReporting.code
     regulatoryReporting.structuredRegulatoryReporting.amount
     regulatoryReporting.structuredRegulatoryReporting.currencyCode
     regulatoryReporting.structuredRegulatoryReporting.information
     paymentDate
     overseasPaymentDetail.ultimatePayer.name
     overseasPaymentDetail.ultimatePayer.address.addressLine1
     overseasPaymentDetail.ultimatePayer.address.addressLine2
     overseasPaymentDetail.ultimatePayer.address.postTown
     overseasPaymentDetail.ultimatePayer.address.postCode
     overseasPaymentDetail.ultimatePayer.address.country
     overseasPaymentDetail.ultimatePayer.birthDetails.dateOfBirth
     overseasPaymentDetail.ultimatePayer.birthDetails.cityOfBirth
     overseasPaymentDetail.ultimatePayer.birthDetails.countryOfBirth
     overseasPaymentDetail.ultimatePayer.officialIdentification.drivingLicenceNumber
     overseasPaymentDetail.ultimatePayer.officialIdentification.customerNumber
     overseasPaymentDetail.ultimatePayer.officialIdentification.socialSecurityNumber
     overseasPaymentDetail.ultimatePayer.officialIdentification.passportNumber
     overseasPaymentDetail.ultimatePayer.officialIdentification.idCardNumber
     overseasPaymentDetail.ultimatePayer.officialIdentification.otherIdNumber
     overseasPaymentDetail.ultimatePayer.officialIdDetailOrgs.bankPartyIdentification
     overseasPaymentDetail.ultimatePayer.officialIdDetailOrgs.centralBankIdNumber
     overseasPaymentDetail.ultimatePayer.officialIdDetailOrgs.clearingIdNumber
     overseasPaymentDetail.ultimatePayer.officialIdDetailOrgs.certificateOfIncorporationNumber
     overseasPaymentDetail.ultimatePayer.officialIdDetailOrgs.countryIdCode
     overseasPaymentDetail.ultimatePayer.officialIdDetailOrgs.customerNumber
     overseasPaymentDetail.ultimatePayer.officialIdDetailOrgs.dataUniversalNumberingSystem
     overseasPaymentDetail.ultimatePayer.officialIdDetailOrgs.employerIdNumber
     overseasPaymentDetail.ultimatePayer.officialIdDetailOrgs.gs1glnIdentifier
     overseasPaymentDetail.ultimatePayer.officialIdDetailOrgs.sirenCode
     overseasPaymentDetail.ultimatePayer.officialIdDetailOrgs.siretCode
     overseasPaymentDetail.ultimatePayer.officialIdDetailOrgs.taxIdNumber
     overseasPaymentDetail.ultimatePayer.officialIdDetailOrgs.bicIdentifier
     overseasPaymentDetail.ultimatePayer.officialIdDetailOrgs.ibeiIdentifier
     overseasPaymentDetail.ultimatePayer.officialIdDetailOrgs.beiIdentifier
     overseasPaymentDetail.ultimatePayer.officialIdDetailOrgs.eanglnIdentifier
     overseasPaymentDetail.ultimatePayer.officialIdDetailOrgs.chipsUniversalIdentifier
     overseasPaymentDetail.ultimatePayer.officialIdDetailOrgs.genericIdentification3
     overseasPaymentDetail.ultimatePayer.officialIdDetailOrgs.genericIdentificationIssr
     overseasPaymentDetail.ultimatePayer.overseasAccountIdentifier.iban
     overseasPaymentDetail.ultimatePayer.overseasAccountIdentifier.bban
     overseasPaymentDetail.ultimatePayer.overseasAccountIdentifier.upic
     overseasPaymentDetail.ultimatePayer.overseasAccountIdentifier.otherAccountNumber
     overseasPaymentDetail.ultimatePayer.bic
     overseasPaymentDetail.originalPaymentDetails.amount
     overseasPaymentDetail.originalPaymentDetails.exchangeRate
     overseasPaymentDetail.originalPaymentDetails.currency
     overseasPaymentDetail.chargeDetails.bearer
     overseasPaymentDetail.chargeDetails.amount
     overseasPaymentDetail.chargeDetails.currency
     overseasPaymentDetail.additionalRemittanceInformation
*/

// *-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*- /PaymentApproval -*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*

    const PaymentApproval_endpoint = '/walletmodule/PaymentApproval';
    const PaymentApproval = () => client.get(PaymentApproval_endpoint);


// *-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*- /BlockSpecificAccount -*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*

    const BlockSpecificAccount = ( customerId ) => client.post('/walletmodule/BlockSpecificAccount', { customerId });


/* *-*-*-*-*-*-*-*-*-*- BODY -*-*-*-*-*-*-*-*-*-*
     AccountId
*/

// *-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*- /SendMoneyProcedureImplementation -*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*

    const SendMoneyProcedureImplementation = ( customerId ) => client.post('/walletmodule/SendMoneyProcedureImplementation', { customerId });


/* *-*-*-*-*-*-*-*-*-*- BODY -*-*-*-*-*-*-*-*-*-*
     sourceAccountId
     destination.type
     destination.id
     destination.iban
     destination.accountNumber
     destination.sortCode
     destination.name
     destination.address.addressLine1
     destination.address.addressLine2
     destination.address.postTown
     destination.address.postCode
     destination.address.country
     destination.birthdate
     destination.emailAddress
     destination.phoneNumber
     destination.bic
     destination.countrySpecificDetails.bankName
     destination.countrySpecificDetails.bankAddress
     destination.countrySpecificDetails.bankCity
     destination.countrySpecificDetails.bankBranchName
     destination.countrySpecificDetails.bankBranchCode
     destination.countrySpecificDetails.bankCode
     destination.countrySpecificDetails.chineseId
     destination.countrySpecificDetails.province
     destination.countrySpecificDetails.business
     currency
     amount
     reference
     externalReference
     endToEndReference
     regulatoryReporting.type
     regulatoryReporting.regulatoryAuthority.authorityName
     regulatoryReporting.regulatoryAuthority.authorityCountry
     regulatoryReporting.structuredRegulatoryReporting.code
     regulatoryReporting.structuredRegulatoryReporting.amount
     regulatoryReporting.structuredRegulatoryReporting.currencyCode
     regulatoryReporting.structuredRegulatoryReporting.information
     paymentDate
     overseasPaymentDetail.ultimatePayer.name
     overseasPaymentDetail.ultimatePayer.address.addressLine1
     overseasPaymentDetail.ultimatePayer.address.addressLine2
     overseasPaymentDetail.ultimatePayer.address.postTown
     overseasPaymentDetail.ultimatePayer.address.postCode
     overseasPaymentDetail.ultimatePayer.address.country
     overseasPaymentDetail.ultimatePayer.birthDetails.dateOfBirth
     overseasPaymentDetail.ultimatePayer.birthDetails.cityOfBirth
     overseasPaymentDetail.ultimatePayer.birthDetails.countryOfBirth
     overseasPaymentDetail.ultimatePayer.officialIdentification.drivingLicenceNumber
     overseasPaymentDetail.ultimatePayer.officialIdentification.customerNumber
     overseasPaymentDetail.ultimatePayer.officialIdentification.socialSecurityNumber
     overseasPaymentDetail.ultimatePayer.officialIdentification.passportNumber
     overseasPaymentDetail.ultimatePayer.officialIdentification.idCardNumber
     overseasPaymentDetail.ultimatePayer.officialIdentification.otherIdNumber
     overseasPaymentDetail.ultimatePayer.officialIdDetailOrgs.bankPartyIdentification
     overseasPaymentDetail.ultimatePayer.officialIdDetailOrgs.centralBankIdNumber
     overseasPaymentDetail.ultimatePayer.officialIdDetailOrgs.clearingIdNumber
     overseasPaymentDetail.ultimatePayer.officialIdDetailOrgs.certificateOfIncorporationNumber
     overseasPaymentDetail.ultimatePayer.officialIdDetailOrgs.countryIdCode
     overseasPaymentDetail.ultimatePayer.officialIdDetailOrgs.customerNumber
     overseasPaymentDetail.ultimatePayer.officialIdDetailOrgs.dataUniversalNumberingSystem
     overseasPaymentDetail.ultimatePayer.officialIdDetailOrgs.employerIdNumber
     overseasPaymentDetail.ultimatePayer.officialIdDetailOrgs.gs1glnIdentifier
     overseasPaymentDetail.ultimatePayer.officialIdDetailOrgs.sirenCode
     overseasPaymentDetail.ultimatePayer.officialIdDetailOrgs.siretCode
     overseasPaymentDetail.ultimatePayer.officialIdDetailOrgs.taxIdNumber
     overseasPaymentDetail.ultimatePayer.officialIdDetailOrgs.bicIdentifier
     overseasPaymentDetail.ultimatePayer.officialIdDetailOrgs.ibeiIdentifier
     overseasPaymentDetail.ultimatePayer.officialIdDetailOrgs.beiIdentifier
     overseasPaymentDetail.ultimatePayer.officialIdDetailOrgs.eanglnIdentifier
     overseasPaymentDetail.ultimatePayer.officialIdDetailOrgs.chipsUniversalIdentifier
     overseasPaymentDetail.ultimatePayer.officialIdDetailOrgs.genericIdentification3
     overseasPaymentDetail.ultimatePayer.officialIdDetailOrgs.genericIdentificationIssr
     overseasPaymentDetail.ultimatePayer.overseasAccountIdentifier.iban
     overseasPaymentDetail.ultimatePayer.overseasAccountIdentifier.bban
     overseasPaymentDetail.ultimatePayer.overseasAccountIdentifier.upic
     overseasPaymentDetail.ultimatePayer.overseasAccountIdentifier.otherAccountNumber
     overseasPaymentDetail.ultimatePayer.bic
     overseasPaymentDetail.originalPaymentDetails.amount
     overseasPaymentDetail.originalPaymentDetails.exchangeRate
     overseasPaymentDetail.originalPaymentDetails.currency
     overseasPaymentDetail.chargeDetails.bearer
     overseasPaymentDetail.chargeDetails.amount
     overseasPaymentDetail.chargeDetails.currency
     overseasPaymentDetail.additionalRemittanceInformation
*/

// *-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*- /GetAccount/{id} -*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*

    const GetAccount_id_endpoint = '/walletmodule/GetAccount/{id}';
    const GetAccount_id = () => client.get(GetAccount_id_endpoint);


// *-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*- /EditAccount/{id} -*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*

    const EditAccount_id = ( id ) => client.put('/walletmodule/EditAccount/{id}', { id });


/* *-*-*-*-*-*-*-*-*-*- BODY -*-*-*-*-*-*-*-*-*-*
     id
     externalReference
*/

// *-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*- /GetAccountByCustomer/{id} -*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*

    const GetAccountByCustomer_id_endpoint = '/walletmodule/GetAccountByCustomer/{id}';
    const GetAccountByCustomer_id = () => client.get(GetAccountByCustomer_id_endpoint);


// *-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*- /GetTransactions/{id} -*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*

    const GetTransactions_id_endpoint = '/walletmodule/GetTransactions/{id}';
    const GetTransactions_id = () => client.get(GetTransactions_id_endpoint);


// *-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*- /UnblockAccount/{id} -*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*

    const UnblockAccount_id = ( id ) => client.post('/walletmodule/UnblockAccount/{id}', { id });


// *-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*- /CloseAccount/{id} -*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*

    const CloseAccount_id = ( id ) => client.post('/walletmodule/CloseAccount/{id}', { id });


// *-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*- /InboundPayment -*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*

    const InboundPayment = ( id ) => client.post('/walletmodule/InboundPayment', { id });


/* *-*-*-*-*-*-*-*-*-*- BODY -*-*-*-*-*-*-*-*-*-*
     accountId
     payerDetail.identifier.type
     payerDetail.identifier.accountNumber
     payerDetail.identifier.sortCode
     payerDetail.identifier.iban
     payerDetail.identifier.bic
     payerDetail.address.addressLine1
     payerDetail.address.addressLine2
     payerDetail.address.country
     payerDetail.address.postCode
     payerDetail.address.postTown
     payerDetail.name
     payeeDetail.identifier.type
     payeeDetail.identifier.accountNumber
     payeeDetail.identifier.sortCode
     payeeDetail.identifier.iban
     payeeDetail.identifier.bic
     payeeDetail.address.addressLine1
     payeeDetail.address.addressLine2
     payeeDetail.address.country
     payeeDetail.address.postCode
     payeeDetail.address.postTown
     payeeDetail.name
     description
     amount
     type
     transactionDate
     numberOfTransactions
*/

// *-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*- /GetMandatesAccount/{accountId} -*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*

    const GetMandatesAccount_accountId_endpoint = '/walletmodule/GetMandatesAccount/{accountId}';
    const GetMandatesAccount_accountId = () => client.get(GetMandatesAccount_accountId_endpoint);


// *-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*- /CancelMandateOutbound -*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*

    const CancelMandateOutbound = ( accountId ) => client.post('/walletmodule/CancelMandateOutbound', { accountId });


/* *-*-*-*-*-*-*-*-*-*- BODY -*-*-*-*-*-*-*-*-*-*
     accountId
     cancellationCode
     mandateId
     merchantNumber
*/

// *-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*- /RejectCollection -*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*

    const RejectCollection = ( accountId ) => client.post('/walletmodule/RejectCollection', { accountId });


/* *-*-*-*-*-*-*-*-*-*- BODY -*-*-*-*-*-*-*-*-*-*
     claimBId
     rejectCode
*/

// *-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*- /BatchPayment -*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*

    const BatchPayment = ( accountId ) => client.post('/walletmodule/BatchPayment', { accountId });


/* *-*-*-*-*-*-*-*-*-*- BODY -*-*-*-*-*-*-*-*-*-*
     externalReference
     strictProcessing
     payment.sourceAccountId
     payment.destination.type
     payment.destination.iban
     payment.destination.id
     payment.destination.accountNumber
     payment.destination.sortCode
     payment.destination.name
     payment.destination.address.addressLine1
     payment.destination.address.addressLine2
     payment.destination.address.country
     payment.destination.address.postCode
     payment.destination.address.postTown
     payment.destination.birthdate
     payment.destination.emailAddress
     payment.destination.phoneNumber
     payment.destination.bic
     payment.destination.CountrySpecificDetails.bankName
     payment.destination.CountrySpecificDetails.bankAddress
     payment.destination.CountrySpecificDetails.bankCity
     payment.destination.CountrySpecificDetails.bankBranchName
     payment.destination.CountrySpecificDetails.bankBranchCode
     payment.destination.CountrySpecificDetails.bankCode
     payment.destination.CountrySpecificDetails.chineseId
     payment.destination.CountrySpecificDetails.province
     payment.destination.CountrySpecificDetails.business
     payment.currency
     payment.amount
     payment.reference
     payment.externalReference
     payment.endToEndReference
     payment.regulatoryReporting.type
     payment.regulatoryReporting.regulatoryAuthority.authorityName
     payment.regulatoryReporting.regulatoryAuthority.authorityCountry
     payment.regulatoryReporting.structuredRegulatoryReporting.code
     payment.regulatoryReporting.structuredRegulatoryReporting.amount
     payment.regulatoryReporting.structuredRegulatoryReporting.information
     payment.paymentDate
     payment.overseasPaymentDetail.ultimatePayer.name
     payment.overseasPaymentDetail.ultimatePayer.address.addressLine1
     payment.overseasPaymentDetail.ultimatePayer.address.addressLine2
     payment.overseasPaymentDetail.ultimatePayer.address.country
     payment.overseasPaymentDetail.ultimatePayer.address.postCode
     payment.overseasPaymentDetail.ultimatePayer.address.postTown
     payment.overseasPaymentDetail.ultimatePayer.birthDetails.dateOfBirth
     payment.overseasPaymentDetail.ultimatePayer.birthDetails.cityOfBirth
     payment.overseasPaymentDetail.ultimatePayer.birthDetails.countryOfBirth
     payment.overseasPaymentDetail.ultimatePayer.officialIdentification.drivingLicenceNumber
     payment.overseasPaymentDetail.ultimatePayer.officialIdentification.customerNumber
     payment.overseasPaymentDetail.ultimatePayer.officialIdentification.socialSecurityNumber
     payment.overseasPaymentDetail.ultimatePayer.officialIdentification.passportNumber
     payment.overseasPaymentDetail.ultimatePayer.officialIdentification.idCardNumber
     payment.overseasPaymentDetail.ultimatePayer.officialIdentification.otherIdNumber
     payment.overseasPaymentDetail.ultimatePayer.officialIdDetailOrgs.bankPartyIdentification
     payment.overseasPaymentDetail.ultimatePayer.officialIdDetailOrgs.centralBankIdNumber
     payment.overseasPaymentDetail.ultimatePayer.officialIdDetailOrgs.clearingIdNumber
     payment.overseasPaymentDetail.ultimatePayer.officialIdDetailOrgs.certificateOfIncorporationNumber
     payment.overseasPaymentDetail.ultimatePayer.officialIdDetailOrgs.countryIdCode
     payment.overseasPaymentDetail.ultimatePayer.officialIdDetailOrgs.customerNumber
     payment.overseasPaymentDetail.ultimatePayer.officialIdDetailOrgs.dataUniversalNumberingSystem
     payment.overseasPaymentDetail.ultimatePayer.officialIdDetailOrgs.employerIdNumber
     payment.overseasPaymentDetail.ultimatePayer.officialIdDetailOrgs.gs1glnIdentifier
     payment.overseasPaymentDetail.ultimatePayer.officialIdDetailOrgs.otherIdNumbsirenCodeer
     payment.overseasPaymentDetail.ultimatePayer.officialIdDetailOrgs.siretCode
     payment.overseasPaymentDetail.ultimatePayer.officialIdDetailOrgs.taxIdNumber
     payment.overseasPaymentDetail.ultimatePayer.officialIdDetailOrgs.bicIdentifier
     payment.overseasPaymentDetail.ultimatePayer.officialIdDetailOrgs.ibeiIdentifier
     payment.overseasPaymentDetail.ultimatePayer.officialIdDetailOrgs.beiIdentifier
     payment.overseasPaymentDetail.ultimatePayer.officialIdDetailOrgs.eanglnIdentifier
     payment.overseasPaymentDetail.ultimatePayer.officialIdDetailOrgs.chipsUniversalIdentifier
     payment.overseasPaymentDetail.ultimatePayer.officialIdDetailOrgs.genericIdentification3
     payment.overseasPaymentDetail.ultimatePayer.officialIdDetailOrgs.genericIdentificationIssr
     payment.overseasPaymentDetail.ultimatePayer.overseasAccountIdentifier.iban
     payment.overseasPaymentDetail.ultimatePayer.overseasAccountIdentifier.bban
     payment.overseasPaymentDetail.ultimatePayer.overseasAccountIdentifier.upic
     payment.overseasPaymentDetail.ultimatePayer.overseasAccountIdentifier.otherAccountNumber
     payment.overseasPaymentDetail.ultimatePayer.bic
     payment.overseasPaymentDetail.originalPaymentDetails.amount
     payment.overseasPaymentDetail.originalPaymentDetails.exchangeRate
     payment.overseasPaymentDetail.originalPaymentDetails.currency
     payment.overseasPaymentDetail.chargeDetails.bearer
     payment.overseasPaymentDetail.chargeDetails.amount
     payment.overseasPaymentDetail.chargeDetails.currency
     payment.overseasPaymentDetail.additionalRemittanceInformation
     payment.fxQuoteId
*/

// *-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*- /EditSpecificRule/{ruleId} -*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*

    const EditSpecificRule_ruleId = ( ruleId ) => client.put('/walletmodule/EditSpecificRule/{ruleId}', { ruleId });


/* *-*-*-*-*-*-*-*-*-*- BODY -*-*-*-*-*-*-*-*-*-*
     ruleId
     data.daysToRun
     data.frequency
     data.splits
     data.conditionalSplits
     data.conditionalSplitConfig.destinationId
     data.conditionalSplitConfig.percent
     data.conditionalSplitConfig.conditionAmount
     data.conditionalSplitConfig.conditionDone
     data.destinationId
     data.balanceToLeave
     data.triggerBalance
     data.sourceId
     type
     name
*/

// *-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*- /CreateRule -*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*

    const CreateRule = ( ruleId ) => client.post('/walletmodule/CreateRule', { ruleId });


/* *-*-*-*-*-*-*-*-*-*- BODY -*-*-*-*-*-*-*-*-*-*
     data.daysToRun
     data.frequency
     data.splits
     data.conditionalSplits
     data.conditionalSplitConfig.destinationId
     data.conditionalSplitConfig.percent
     data.conditionalSplitConfig.conditionAmount
     data.conditionalSplitConfig.conditionDone
     data.destinationId
     data.balanceToLeave
     data.triggerBalance
     data.sourceId
     type
     name
     accountId
*/

// *-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*- /DeleteRule/{rIds} -*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*

    const DeleteRule_rIds = ( rIds ) => client.delete('/walletmodule/DeleteRule/{rIds}', { rIds });


// *-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*- /GetSpecificRules/{accountId} -*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*

    const GetSpecificRules_accountId_endpoint = '/walletmodule/GetSpecificRules/{accountId}';
    const GetSpecificRules_accountId = () => client.get(GetSpecificRules_accountId_endpoint);


// *-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*- /GetRules/{accountId}/{rtype} -*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*

    const GetRules_accountId_rtype_endpoint = '/walletmodule/GetRules/{accountId}/{rtype}';
    const GetRules_accountId_rtype = () => client.get(GetRules_accountId_rtype_endpoint);


// *-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*- /CreateNewBeneficiary/{cid} -*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*

    const CreateNewBeneficiary_cid = ( cid ) => client.post('/walletmodule/CreateNewBeneficiary/{cid}', { cid });


/* *-*-*-*-*-*-*-*-*-*- BODY -*-*-*-*-*-*-*-*-*-*
     cid
     externalReference
     name
     birthdate
     emailAddress
     phoneNumber
     destinationIdentifier.type
     destinationIdentifier.accountNumber
     destinationIdentifier.sortCode
     destinationIdentifier.iban
     destinationIdentifier.bic
     destinationIdentifier.currency
     destinationIdentifier.countrySpecificDetails.bankName
     destinationIdentifier.countrySpecificDetails.bankAddress
     destinationIdentifier.countrySpecificDetails.bankCity
     destinationIdentifier.countrySpecificDetails.bankBranchName
     destinationIdentifier.countrySpecificDetails.bankBranchCode
     destinationIdentifier.countrySpecificDetails.bankCode
     destinationIdentifier.countrySpecificDetails.chineseId
     destinationIdentifier.countrySpecificDetails.province
     destinationIdentifier.countrySpecificDetails.business
     defaultReference
     idToReplace
     address.addressLine1
     address.addressLine2
     address.postTown
     address.postCode
     address.country
*/

// *-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*- /DeleteBeneficiaries/{cid}/{bId} -*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*

    const DeleteBeneficiaries_cid_bId = ( cid, bId ) => client.delete('/walletmodule/DeleteBeneficiaries/{cid}/{bId}', { cid, bId });


// *-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*- /RetrieveBeneficiaries/{customerId} -*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*

    const RetrieveBeneficiaries_customerId_endpoint = '/walletmodule/RetrieveBeneficiaries/{customerId}';
    const RetrieveBeneficiaries_customerId = () => client.get(RetrieveBeneficiaries_customerId_endpoint);


// *-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*- /Wallet/CreateAccount -*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*

    const Wallet_CreateAccount = ( customerId ) => client.post('/walletmodule/Wallet/CreateAccount', { customerId });


/* *-*-*-*-*-*-*-*-*-*- BODY -*-*-*-*-*-*-*-*-*-*
     customerId
     phoneNumber
     email
     customerType
*/

// *-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*- /Wallet/CreateNewBeneficiary -*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*

    const Wallet_CreateNewBeneficiary = ( customerId ) => client.post('/walletmodule/Wallet/CreateNewBeneficiary', { customerId });


/* *-*-*-*-*-*-*-*-*-*- BODY -*-*-*-*-*-*-*-*-*-*
     cid
*/

// *-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*- /Wallet/DeleteBeneficiaries -*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*

    const Wallet_DeleteBeneficiaries = ( customerId ) => client.delete('/walletmodule/Wallet/DeleteBeneficiaries', { customerId });


/* *-*-*-*-*-*-*-*-*-*- BODY -*-*-*-*-*-*-*-*-*-*
     cid
     bId
*/

// *-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*- /Wallet/RetrieveBeneficiaries -*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*

    const Wallet_RetrieveBeneficiaries_endpoint = '/walletmodule/Wallet/RetrieveBeneficiaries';
    const Wallet_RetrieveBeneficiaries = () => client.get(Wallet_RetrieveBeneficiaries_endpoint);