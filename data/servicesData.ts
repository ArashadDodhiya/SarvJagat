export const services = [
  {
    name: "Non-Creamy Layer Certificate",
    description: "Application and renewal services for OBC, SEBC, etc.",
    category: "Certification",
    id: 1,
    requiredDocuments: [
      "Proof of Identity (e.g., Aadhaar, Passport)",
      "Address Proof (e.g., Utility Bill, Rental Agreement)",
      "Caste Certificate",
      "Income Certificate",
      "Application Form",
    ],
  },
  {
    name: "Caste Certificate",
    description: "Issuance of SC/ST, OBC, SEBC certificates.",
    category: "Certification",
    id: 2,
    requiredDocuments: [
      "Proof of Identity",
      "Address Proof",
      "Community Certificate",
      "Application Form",
    ],
  },
  {
    name: "Income Certificate",
    description: "For various government schemes and scholarships.",
    category: "Certification",
    id: 3,
    requiredDocuments: [
      "Proof of Identity",
      "Address Proof",
      "Income Details (e.g., salary slip, tax returns)",
      "Application Form",
    ],
  },
  {
    name: "Domicile Certificate",
    description: "Proof of residence for educational or employment purposes.",
    category: "Certification",
    id: 4,
    requiredDocuments: [
      "Proof of Identity",
      "Address Proof",
      "Affidavit of Residency",
      "Application Form",
    ],
  },
  {
    name: "Birth/Death Certificate",
    description: "Registration and issuance of birth and death certificates.",
    category: "Certification",
    id: 5,
    requiredDocuments: [
      "Proof of Birth (hospital records, if available)",
      "Parent/Guardian Identification",
      "Application Form",
    ],
  },
  {
    name: "Marriage Certificate",
    description: "Registration of marriages and issuance of certificates.",
    category: "Legal",
    id: 6,
    requiredDocuments: [
      "Proof of Identity for both spouses",
      "Marriage Invitation or Photo",
      "Witness Statements",
      "Application Form",
    ],
  },
  {
    name: "Affidavit Services",
    description:
      "Drafting and notarization of affidavits for various purposes.",
    category: "Legal",
    id: 7,
    requiredDocuments: [
      "Proof of Identity",
      "Affidavit Draft",
      "Notary or Lawyer Certification",
    ],
  },
  {
    name: "Rent Agreement Form Services",
    description: "Drafting and registration of rental agreements.",
    category: "Legal",
    id: 8,
    requiredDocuments: [
      "Proof of Identity",
      "Address Proof of Property",
      "Rental Agreement Draft",
    ],
  },
  {
    name: "Power of Attorney",
    description: "Drafting and registration of power of attorney documents.",
    category: "Legal",
    id: 9,
    requiredDocuments: [
      "Proof of Identity of Grantor and Grantee",
      "Power of Attorney Document",
      "Witness Statements",
    ],
  },
  {
    name: "Aadhaar Services",
    description: "Enrollment, updates, and Aadhaar authentication services.",
    category: "Digital",
    id: 18,
    requiredDocuments: [
      "Proof of Identity",
      "Proof of Address",
      "Biometric Verification",
    ],
  },
  {
    name: "Digital Locker",
    description: "Secure storage of digital documents linked to Aadhaar.",
    category: "Digital",
    id: 17,
    requiredDocuments: ["Aadhaar Card", "Mobile Number Linked to Aadhaar"],
  },
  {
    name: "Income Tax Filing",
    description: "Assistance with filing income tax returns.",
    category: "Finance",
    id: 28,
    requiredDocuments: ["PAN Card", "Proof of Income", "Bank Statements"],
  },
  {
    name: "PAN Card Services",
    description: "Application, correction, and reissue of PAN cards.",
    category: "Finance",
    id: 25,
    requiredDocuments: ["Proof of Identity", "Proof of Address", "Photograph"],
  },
  {
    name: "TDS/TCS Filing",
    description:
      "Tax Deducted at Source (TDS) and Tax Collected at Source (TCS) services.",
    category: "Finance",
    id: 26,
    requiredDocuments: ["PAN Card", "TDS/TCS Details", "Income Proof"],
  },
  {
    name: "GST Registration",
    description:
      "Registration for Goods and Services Tax (GST) for businesses.",
    category: "Finance",
    id: 27,
    requiredDocuments: [
      "PAN Card",
      "Business Registration Proof",
      "Bank Account Proof",
    ],
  },
  {
    name: "Subsidy Application",
    description: "Application for various government subsidies.",
    category: "Scheme",
    id: 29,
    requiredDocuments: [
      "Proof of Identity",
      "Proof of Income",
      "Subsidy Application Form",
    ],
  },
  {
    name: "Pension Services",
    description: "Application and renewal of government pensions.",
    category: "Scheme",
    id: 30,
    requiredDocuments: [
      "Proof of Identity",
      "Proof of Age",
      "Bank Account Details",
    ],
  },
  {
    name: "Welfare Scheme Enrollment",
    description:
      "Enrollment in government welfare schemes (e.g., PM-Kisan, Ujjwala Yojana).",
    category: "Scheme",
    id: 31,
    requiredDocuments: [
      "Proof of Identity",
      "Address Proof",
      "Income Certificate",
    ],
  },
  {
    name: "Scholarship Application",
    description:
      "Assistance with applying for various government scholarships.",
    category: "Education",
    id: 32,
    requiredDocuments: [
      "Proof of Identity",
      "Proof of Enrollment",
      "Income Certificate",
      "Application Form",
    ],
  },
  {
    name: "Employment Exchange Registration",
    description: "Registration with employment exchanges for job seekers.",
    category: "Education",
    id: 33,
    requiredDocuments: [
      "Proof of Identity",
      "Proof of Address",
      "Qualification Certificates",
    ],
  },
  {
    name: "Skill Development Programs",
    description:
      "Enrollment in government-sponsored skill development initiatives.",
    category: "Education",
    id: 34,
    requiredDocuments: [
      "Proof of Identity",
      "Proof of Enrollment",
      "Application Form",
    ],
  },
  {
    name: "Voter ID Registration",
    description: "Application and correction of Voter ID cards.",
    category: "Identity",
    id: 35,
    requiredDocuments: [
      "Proof of Identity",
      "Proof of Address",
      "Birth Certificate (if applicable)",
    ],
  },
  {
    name: "Passport Application",
    description: "Assistance with passport applications and renewals.",
    category: "Identity",
    id: 36,
    requiredDocuments: [
      "Proof of Identity",
      "Proof of Address",
      "Birth Certificate",
    ],
  },
  {
    name: "Driving License",
    description: "Application, renewal, and correction of driving licenses.",
    category: "Identity",
    id: 37,
    requiredDocuments: [
      "Proof of Identity",
      "Address Proof",
      "Medical Certificate",
    ],
  },
  {
    name: "Water/Electricity Connection",
    description: "Application for new water or electricity connections.",
    category: "Utility",
    id: 38,
    requiredDocuments: [
      "Proof of Identity",
      "Proof of Address",
      "Ownership Document",
    ],
  },
  {
    name: "Property Tax Payment",
    description: "Payment of municipal property taxes.",
    category: "Utility",
    id: 39,
    requiredDocuments: ["Proof of Property Ownership", "Previous Tax Receipts"],
  },
  {
    name: "Municipal Services",
    description:
      "Application for various municipal services like sanitation, building permits, etc.",
    category: "Utility",
    id: 40,
    requiredDocuments: [
      "Proof of Identity",
      "Proof of Address",
      "Service-Specific Documents",
    ],
  },
  {
    name: "Ayushman Bharat Registration",
    description: "Enrollment in the Ayushman Bharat health scheme.",
    category: "Health",
    id: 41,
    requiredDocuments: [
      "Proof of Identity",
      "Income Certificate",
      "Family Details",
    ],
  },
  {
    name: "Insurance Claim Assistance",
    description: "Filing and processing of insurance claims.",
    category: "Health",
    id: 42,
    requiredDocuments: [
      "Insurance Policy Document",
      "Medical Records",
      "Claim Form",
    ],
  },
  {
    name: "Health Card Issuance",
    description: "Issuance of health cards for government health schemes.",
    category: "Health",
    id: 43,
    requiredDocuments: [
      "Proof of Identity",
      "Income Proof",
      "Health Scheme Application Form",
    ],
  },
  {
    name: "Tender Form Fill-Up",
    description:
      "Assistance with filling and submitting government tender forms.",
    category: "Procurement",
    id: 19,
    requiredDocuments: [
      "Proof of Business Registration",
      "Financial Statements",
      "Tender Application Form",
    ],
  },
];
