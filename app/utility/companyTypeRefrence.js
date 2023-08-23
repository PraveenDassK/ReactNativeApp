const companyTypes = [
    "private-unlimited",
    "ltd",
    "plc",
    "old-public-company",
    "private-limited-guarant-nsc-limited-exemption",
    "limited-partnership",
    "private-limited-guarant-nsc",
    "converted-or-closed",
    "private-unlimited-nsc",
    "private-limited-shares-section-30-exemption",
    "protected-cell-company",
    "assurance-company",
    "oversea-company",
    "eeig",
    "icvc-securities",
    "icvc-warrant",
    "icvc-umbrella",
    "registered-society-non-jurisdictional",
    "industrial-and-provident-society",
    "northern-ireland",
    "northern-ireland-other",
    "royal-charter",
    "investment-company-with-variable-capital",
    "unregistered-company",
    "llp",
    "other",
    "european-public-limited-liability-company-se",
    "uk-establishment",
    "scottish-partnership",
    "charitable-incorporated-organisation",
    "scottish-charitable-incorporated-organisation",
    "further-education-or-sixth-form-college-corporation",
    "registered-overseas-entity"
];

const companyTypeMappings = {
    "private-unlimited": "LIMITED COMPANY",
    "ltd": "LIMITED COMPANY",
    "plc": "LIMITED COMPANY",
    "old-public-company": "LIMITED COMPANY",
    "private-limited-guarant-nsc-limited-exemption": "LIMITED COMPANY",
    "limited-partnership": "LIMITED PARTNERSHIP",
    "private-limited-guarant-nsc": "LIMITED COMPANY",
    "converted-or-closed": "LIMITED COMPANY",
    "private-unlimited-nsc": "LIMITED COMPANY",
    "private-limited-shares-section-30-exemption": "LIMITED COMPANY",
    "protected-cell-company": "LIMITED COMPANY",
    "assurance-company": "LIMITED COMPANY",
    "oversea-company": "LIMITED COMPANY",
    "eeig": "LIMITED LIABILITY PARTNERSHIP",
    "icvc-securities": "LIMITED LIABILITY PARTNERSHIP",
    "icvc-warrant": "LIMITED LIABILITY PARTNERSHIP",
    "icvc-umbrella": "LIMITED LIABILITY PARTNERSHIP",
    "registered-society-non-jurisdictional": "LIMITED COMPANY",
    "industrial-and-provident-society": "LIMITED COMPANY",
    "northern-ireland": "LIMITED COMPANY",
    "northern-ireland-other": "LIMITED COMPANY",
    "royal-charter": "LIMITED COMPANY",
    "investment-company-with-variable-capital": "LIMITED COMPANY",
    "unregistered-company": "SOLE TRADER",
    "llp": "LIMITED LIABILITY PARTNERSHIP",
    "other": "LIMITED COMPANY",
    "european-public-limited-liability-company-se": "LIMITED COMPANY",
    "uk-establishment": "LIMITED COMPANY",
    "scottish-partnership": "ORDINARY PARTNERSHIP",
    "charitable-incorporated-organisation": "LIMITED COMPANY",
    "scottish-charitable-incorporated-organisation": "LIMITED COMPANY",
    "further-education-or-sixth-form-college-corporation": "LIMITED COMPANY",
    "registered-overseas-entity": "LIMITED COMPANY"
};

const mappedCompanyTypes = companyTypes.map(type => companyTypeMappings[type]);


export function getCompanyType(companyName) {
    console.log(companyName)
    const companType = mappedCompanyTypes[companyName] || "Unknown";
    console.log(companType)
    return companType;
}

