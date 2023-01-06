const SendRegistrationOTP = (email, phoneNumber) => client.post('/SendRegistrationOTP', { email, phoneNumber });

const VerifyRegistrationOTP = (email, emailOTP, phoneNumber, phoneOTP) => client.post('/VerifyRegistrationOTP', { email, emailOTP, phoneNumber, phoneOTP });

const GetCustomerDetais_endpoint = '/GetCustomerDetais';
const GetCustomerDetais = () => client.get(GetCustomerDetais_endpoint);

const SaveCustomerAccountDetails = () => client.post('/SaveCustomerAccountDetails', {  });

const SaveCompanyDetails = () => client.post('/SaveCompanyDetails', {  });

const GetCompanySearch_endpoint = '/GetCompanySearch/{RegNo}';
const GetCompanySearch = () => client.get(GetCompanySearch_endpoint);

const GetOfficerList_endpoint = '/GetOfficerList/{companyNumber}';
const GetOfficerList = () => client.get(GetOfficerList_endpoint);

const AdvanceCompanySearch_endpoint = '/AdvanceCompanySearch';
const AdvanceCompanySearch = () => client.get(AdvanceCompanySearch_endpoint);

const ListStatement_endpoint = '/ListStatement/{company_number}';
const ListStatement = () => client.get(ListStatement_endpoint);

const GetBeneficialOwner_endpoint = '/GetBeneficialOwner/{companyNumber},{psc_id}';
const GetBeneficialOwner = () => client.get(GetBeneficialOwner_endpoint);

const GetStatement_endpoint = '/GetStatement/{company_number},{statement_id}';
const GetStatement = () => client.get(GetStatement_endpoint);

const GetSuperSecurePerson_endpoint = '/GetSuperSecurePerson/{company_number},{super_secure_id}';
const GetSuperSecurePerson = () => client.get(GetSuperSecurePerson_endpoint);

const GetSuperSecureBeneficialOwner_endpoint = '/GetSuperSecureBeneficialOwner/{company_number},{super_secure_id}';
const GetSuperSecureBeneficialOwner = () => client.get(GetSuperSecureBeneficialOwner_endpoint);

const GetLegalPersonBeneficialOwner_endpoint = '/GetLegalPersonBeneficialOwner/{company_number},{psc_id}';
const GetLegalPersonBeneficialOwner = () => client.get(GetLegalPersonBeneficialOwner_endpoint);

const GetLegalPerson_endpoint = '/GetLegalPerson/{company_number},{psc_id}';
const GetLegalPerson = () => client.get(GetLegalPerson_endpoint);

const GetCooperateEntities_endpoint = '/GetCooperateEntities/{company_number},{psc_id}';
const GetCooperateEntities = () => client.get(GetCooperateEntities_endpoint);

const GetPSC_endpoint = '/GetPSC/{companyNumber}';
const GetPSC = () => client.get(GetPSC_endpoint);

const GetPSCIndividual_endpoint = '/GetPSCIndividual/{companyNumber}/{PSCId}';
const GetPSCIndividual = () => client.get(GetPSCIndividual_endpoint);

const GetOfficerAppointmentList_endpoint = '/GetOfficerAppointmentList/{officerId}';
const GetOfficerAppointmentList = () => client.get(GetOfficerAppointmentList_endpoint);

const GetCODisqualification_endpoint = '/GetCODisqualification/{officerId}';
const GetCODisqualification = () => client.get(GetCODisqualification_endpoint);

const GetNaturalOfficerDisqualification_endpoint = '/GetNaturalOfficerDisqualification/{officerId}';
const GetNaturalOfficerDisqualification = () => client.get(GetNaturalOfficerDisqualification_endpoint);

const GetCompanyRegisters_endpoint = '/GetCompanyRegisters/{companyNumber}';
const GetCompanyRegisters = () => client.get(GetCompanyRegisters_endpoint);

const GetChargesList_endpoint = '/GetChargesList/{companyNumber}';
const GetChargesList = () => client.get(GetChargesList_endpoint);

const GetDissolvedCompany_endpoint = '/GetDissolvedCompany/{companyName}/{searchType}';
const GetDissolvedCompany = () => client.get(GetDissolvedCompany_endpoint);

const GetDisqualifiedOfficers_endpoint = '/GetDisqualifiedOfficers/{Officer}';
const GetDisqualifiedOfficers = () => client.get(GetDisqualifiedOfficers_endpoint);

const GetChargers_endpoint = '/GetChargers/{companyNumber}/{chargeId}';
const GetChargers = () => client.get(GetChargers_endpoint);

const GetFilingHistoryList_endpoint = '/GetFilingHistoryList/{companyNumber}';
const GetFilingHistoryList = () => client.get(GetFilingHistoryList_endpoint);

const GetFilingHistory_endpoint = '/GetFilingHistory/{companyNumber}/{transactionId}';
const GetFilingHistory = () => client.get(GetFilingHistory_endpoint);

const GetInsolvency_endpoint = '/GetInsolvency/{companyNumber}';
const GetInsolvency = () => client.get(GetInsolvency_endpoint);

const GetExemptions_endpoint = '/GetExemptions/{companyNumber}';
const GetExemptions = () => client.get(GetExemptions_endpoint);

const GetRegisteredOfficeAddress_endpoint = '/GetRegisteredOfficeAddress/{companyNumber}';
const GetRegisteredOfficeAddress = () => client.get(GetRegisteredOfficeAddress_endpoint);

const GetCompaniesAlphabetically_endpoint = '/GetCompaniesAlphabetically/{companyName}';
const GetCompaniesAlphabetically = () => client.get(GetCompaniesAlphabetically_endpoint);

const GetAddressesByPostcode_endpoint = '/GetAddressesByPostcode';
const GetAddressesByPostcode = () => client.get(GetAddressesByPostcode_endpoint);

const CropDocument = (Page, DocumentType, ClientReference) => client.post('/CropDocument', { Page, DocumentType, ClientReference });

const ClassifyAndVerify = (DocumentType, ClientReference, AutoVerify) => client.post('/ClassifyAndVerify', { DocumentType, ClientReference, AutoVerify });

const VerifyDocument = () => client.post('/VerifyDocument', {  });

const SendLoginOTP = (email, phoneNumber) => client.post('/SendLoginOTP', { email, phoneNumber });

const VerifyLoginOTP = (email, emailOTP, phoneNumber, phoneOTP) => client.post('/VerifyLoginOTP', { email, emailOTP, phoneNumber, phoneOTP });

const SaveTokenDetails = (customerID, tokenId, DeviceId) => client.post('/SaveTokenDetails', { customerID, tokenId, DeviceId });

const SendNotification = () => client.post('/SendNotification', {  });

const KYCCheck = () => client.post('/KYCCheck', {  });

const KYBCheck = (CompanyName, CompanyID) => client.post('/KYBCheck', { CompanyName, CompanyID });

const Earthly_GetProjectById_endpoint = '/Earthly/GetProjectById';
const Earthly_GetProjectById = () => client.get(Earthly_GetProjectById_endpoint);

const Earthly_GetProjectList_endpoint = '/Earthly/GetProjectList';
const Earthly_GetProjectList = () => client.get(Earthly_GetProjectList_endpoint);

const Earthly_CreateTokenizedUser = () => client.post('/Earthly/CreateTokenizedUser', {  });

const Earthly_GetCompanyImpacts_endpoint = '/Earthly/GetCompanyImpacts';
const Earthly_GetCompanyImpacts = () => client.get(Earthly_GetCompanyImpacts_endpoint);

const Earthly_endpoint = '/Earthly/GetUserImpacts/{userId}';
const Earthly = () => client.get(Earthly_endpoint);

const Earthly_RewardUser_{userId}_{projectId} = (userId, projectId, amount) => client.post('/Earthly/RewardUser/{userId}/{projectId}', { userId, projectId, amount });

const Earthly_Checkout = () => client.post('/Earthly/Checkout', {  });