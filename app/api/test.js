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


// *-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*- /KYBCheck -*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-* 

    const KYBCheck = (  ) => client.post('/authverifymodule/KYBCheck', {  }); 


// *-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*- /SetToggles -*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-* 

    const SetToggles = (  ) => client.post('/cardmodule/SetToggles', {  }); 


// *-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*- /GetToggles -*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-* 

    const GetToggles_endpoint = '/cardmodule/GetToggles';
    const GetToggles = () => client.get(GetToggles_endpoint); 


// *-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*- /Earthly/GetProjectById -*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-* 

    const Earthly_GetProjectById_endpoint = '/ecomodule/Earthly/GetProjectById';
    const Earthly_GetProjectById = () => client.get(Earthly_GetProjectById_endpoint); 


// *-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*- /Earthly/GetUserImpacts/{userId} -*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-* 

    const Earthly_GetUserImpacts_userId_endpoint = '/ecomodule/Earthly/GetUserImpacts/{userId}';
    const Earthly_GetUserImpacts_userId = () => client.get(Earthly_GetUserImpacts_userId_endpoint); 


// *-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*- /Earthly/RewardUser/{userId}/{projectId} -*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-* 

    const Earthly_RewardUser_userId_projectId = ( userId, projectId ) => client.post('/ecomodule/Earthly/RewardUser/{userId}/{projectId}', { userId, projectId }); 


/* *-*-*-*-*-*-*-*-*-*- BODY -*-*-*-*-*-*-*-*-*-*
     userId
*/

// *-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*- /GenerateReferralCode -*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-* 

    const GenerateReferralCode = (  ) => client.post('/referralmodule/GenerateReferralCode', {  }); 


// *-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*- /VerifyReferralCode -*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-* 

    const VerifyReferralCode_endpoint = '/referralmodule/VerifyReferralCode';
    const VerifyReferralCode = () => client.get(VerifyReferralCode_endpoint); 


// *-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*- /UseReferralCode -*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-* 

    const UseReferralCode = (  ) => client.post('/referralmodule/UseReferralCode', {  }); 


// *-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*- /GetCustomerDetais -*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-* 

    const GetCustomerDetais_endpoint = '/regmodule/GetCustomerDetais';
    const GetCustomerDetais = () => client.get(GetCustomerDetais_endpoint); 


// *-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*- /GetTransactionList/{accountId} -*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-* 

    const GetTransactionList_accountId_endpoint = '/transactionmodule/GetTransactionList/{accountId}';
    const GetTransactionList_accountId = () => client.get(GetTransactionList_accountId_endpoint); 


// *-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*- /DisputeTransaction -*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-* 

    const DisputeTransaction = (  ) => client.post('/transactionmodule/DisputeTransaction', {  }); 


// *-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*- /SendReminder -*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-* 

    const SendReminder_endpoint = '/transactionmodule/SendReminder';
    const SendReminder = () => client.get(SendReminder_endpoint); 


// *-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*- /CarbonCalculation -*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-* 

    const CarbonCalculation_endpoint = '/transactionmodule/CarbonCalculation';
    const CarbonCalculation = () => client.get(CarbonCalculation_endpoint); 


// *-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*- /SetBudget -*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-* 

    const SetBudget = (  ) => client.post('/transactionmodule/SetBudget', {  }); 


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


// *-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*- /Enfuce/UpdatePrivateCustomer -*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-* 

    const Enfuce_UpdatePrivateCustomer = (  ) => client.patch('/walletmodule/Enfuce/UpdatePrivateCustomer', {  }); 


// *-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*- /Enfuce/UpdateCorporateCustomer -*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-* 

    const Enfuce_UpdateCorporateCustomer = (  ) => client.patch('/walletmodule/Enfuce/UpdateCorporateCustomer', {  }); 


// *-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*- /Enfuce/UpdateCustomer -*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-* 

    const Enfuce_UpdateCustomer = (  ) => client.post('/walletmodule/Enfuce/UpdateCustomer', {  }); 


// *-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*- /Enfuce/GetAccountbyId -*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-* 

    const Enfuce_GetAccountbyId_endpoint = '/walletmodule/Enfuce/GetAccountbyId';
    const Enfuce_GetAccountbyId = () => client.get(Enfuce_GetAccountbyId_endpoint); 


// *-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*- /Enfuce/GetAccountbyAccountNumber -*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-* 

    const Enfuce_GetAccountbyAccountNumber_endpoint = '/walletmodule/Enfuce/GetAccountbyAccountNumber';
    const Enfuce_GetAccountbyAccountNumber = () => client.get(Enfuce_GetAccountbyAccountNumber_endpoint); 


// *-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*- /Enfuce/CreateCreditAccount -*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-* 

    const Enfuce_CreateCreditAccount = (  ) => client.post('/walletmodule/Enfuce/CreateCreditAccount', {  }); 


// *-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*- /Enfuce/CreateDebitAccount -*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-* 

    const Enfuce_CreateDebitAccount = (  ) => client.post('/walletmodule/Enfuce/CreateDebitAccount', {  }); 


// *-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*- /Enfuce/CreatePrepaidAccount -*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-* 

    const Enfuce_CreatePrepaidAccount = (  ) => client.post('/walletmodule/Enfuce/CreatePrepaidAccount', {  }); 


// *-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*- /GetInvoiceById -*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-* 

    const GetInvoiceById_endpoint = '/walletmodule/GetInvoiceById';
    const GetInvoiceById = () => client.get(GetInvoiceById_endpoint); 


// *-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*- /GetTransactionsandAuthorizationsById -*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-* 

    const GetTransactionsandAuthorizationsById_endpoint = '/walletmodule/GetTransactionsandAuthorizationsById';
    const GetTransactionsandAuthorizationsById = () => client.get(GetTransactionsandAuthorizationsById_endpoint); 


// *-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*- /Enfuce/CreateCard -*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-* 

    const Enfuce_CreateCard = (  ) => client.post('/walletmodule/Enfuce/CreateCard', {  }); 


// *-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*- /Enfuce/UpdateCard/{id} -*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-* 

    const Enfuce_UpdateCard_id = ( id ) => client.patch('/walletmodule/Enfuce/UpdateCard/{id}', { id }); 


// *-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*- /Enfuce/GetCardByAccount -*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-* 

    const Enfuce_GetCardByAccount_endpoint = '/walletmodule/Enfuce/GetCardByAccount';
    const Enfuce_GetCardByAccount = () => client.get(Enfuce_GetCardByAccount_endpoint); 


// *-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*- /Enfuce/GetECBExchangeRates -*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-* 

    const Enfuce_GetECBExchangeRates_endpoint = '/walletmodule/Enfuce/GetECBExchangeRates';
    const Enfuce_GetECBExchangeRates = () => client.get(Enfuce_GetECBExchangeRates_endpoint); 


// *-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*- /Enfuce/FXExchangeRates -*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-* 

    const Enfuce_FXExchangeRates = (  ) => client.post('/walletmodule/Enfuce/FXExchangeRates', {  }); 


// *-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*- /Enfuce/GetAccountbyCustomerID -*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-* 

    const Enfuce_GetAccountbyCustomerID_endpoint = '/walletmodule/Enfuce/GetAccountbyCustomerID';
    const Enfuce_GetAccountbyCustomerID = () => client.get(Enfuce_GetAccountbyCustomerID_endpoint); 


// *-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*- /Enfuce/GetAccountHierarchy/{accountid} -*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-* 

    const Enfuce_GetAccountHierarchy_accountid_endpoint = '/walletmodule/Enfuce/GetAccountHierarchy/{accountid}';
    const Enfuce_GetAccountHierarchy_accountid = () => client.get(Enfuce_GetAccountHierarchy_accountid_endpoint); 


// *-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*- /Enfuce/UpdateDebitAccount -*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-* 

    const Enfuce_UpdateDebitAccount = (  ) => client.patch('/walletmodule/Enfuce/UpdateDebitAccount', {  }); 


// *-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*- /Enfuce/UpdatePrepaidAccount -*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-* 

    const Enfuce_UpdatePrepaidAccount = (  ) => client.patch('/walletmodule/Enfuce/UpdatePrepaidAccount', {  }); 


// *-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*- /Enfuce/UpdateAccount -*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-* 

    const Enfuce_UpdateAccount = (  ) => client.post('/walletmodule/Enfuce/UpdateAccount', {  }); 


// *-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*- /GetCustomer/{cid} -*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-* 

    const GetCustomer_cid_endpoint = '/walletmodule/GetCustomer/{cid}';
    const GetCustomer_cid = () => client.get(GetCustomer_cid_endpoint); 


// *-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*- /UploadDocument -*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-* 

    const UploadDocument = (  ) => client.post('/walletmodule/UploadDocument', {  }); 


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

    const PayInWebhook = (  ) => client.post('/walletmodule/PayInWebhook', {  }); 


// *-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*- /UpcomingDDCollectionCreditWebhook -*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-* 

    const UpcomingDDCollectionCreditWebhook = (  ) => client.post('/walletmodule/UpcomingDDCollectionCreditWebhook', {  }); 


// *-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*- /DDCollectionStatusWebhook -*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-* 

    const DDCollectionStatusWebhook = (  ) => client.post('/walletmodule/DDCollectionStatusWebhook', {  }); 


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

// *-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*- /CreateCustomerPCMBusiness -*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-* 

    const CreateCustomerPCMBusiness = (  ) => client.post('/walletmodule/CreateCustomerPCMBusiness', {  }); 


// *-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*- /CreateAccounts/{CustomerId} -*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-* 

    const CreateAccounts_CustomerId = ( customerId ) => client.post('/walletmodule/CreateAccounts/{CustomerId}', { customerId }); 


/* *-*-*-*-*-*-*-*-*-*- BODY -*-*-*-*-*-*-*-*-*-*
     customerId
     externalReference
     currency
*/

// *-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*- /FutureDated -*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-* 

    const FutureDated = (  ) => client.post('/walletmodule/FutureDated', {  }); 


// *-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*- /PaymentApproval -*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-* 

    const PaymentApproval_endpoint = '/walletmodule/PaymentApproval';
    const PaymentApproval = () => client.get(PaymentApproval_endpoint); 


// *-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*- /BlockSpecificAccount -*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-* 

    const BlockSpecificAccount = (  ) => client.post('/walletmodule/BlockSpecificAccount', {  }); 


// *-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*- /SendMoneyProcedureImplementation -*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-* 

    const SendMoneyProcedureImplementation = (  ) => client.post('/walletmodule/SendMoneyProcedureImplementation', {  }); 


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

    const InboundPayment = (  ) => client.post('/walletmodule/InboundPayment', {  }); 


// *-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*- /GetMandatesAccount/{accountId} -*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-* 

    const GetMandatesAccount_accountId_endpoint = '/walletmodule/GetMandatesAccount/{accountId}';
    const GetMandatesAccount_accountId = () => client.get(GetMandatesAccount_accountId_endpoint); 


// *-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*- /CancelMandateOutbound -*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-* 

    const CancelMandateOutbound = (  ) => client.post('/walletmodule/CancelMandateOutbound', {  }); 


// *-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*- /RejectCollection -*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-* 

    const RejectCollection = (  ) => client.post('/walletmodule/RejectCollection', {  }); 


// *-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*- /BatchPayment -*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-* 

    const BatchPayment = (  ) => client.post('/walletmodule/BatchPayment', {  }); 


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

    const CreateRule = (  ) => client.post('/walletmodule/CreateRule', {  }); 


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

    const Wallet_CreateAccount = (  ) => client.post('/walletmodule/Wallet/CreateAccount', {  }); 


// *-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*- /Wallet/CreateNewBeneficiary -*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-* 

    const Wallet_CreateNewBeneficiary = (  ) => client.post('/walletmodule/Wallet/CreateNewBeneficiary', {  }); 


// *-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*- /Wallet/DeleteBeneficiaries -*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-* 

    const Wallet_DeleteBeneficiaries = (  ) => client.delete('/walletmodule/Wallet/DeleteBeneficiaries', {  }); 


// *-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*- /Wallet/RetrieveBeneficiaries -*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-* 

    const Wallet_RetrieveBeneficiaries_endpoint = '/walletmodule/Wallet/RetrieveBeneficiaries';
    const Wallet_RetrieveBeneficiaries = () => client.get(Wallet_RetrieveBeneficiaries_endpoint); 

    const SendLoginOTP = (email, phoneNumber) => client.post('/SendLoginOTP', { email, phoneNumber });
