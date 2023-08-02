import React, { useContext, useEffect, useState} from "react";
import { Text, StyleSheet, Image, View, Pressable, TextInput, Keyboard, ScrollView } from "react-native";
import GlobalStyles from "../../GlobalStyles";
import moment from "moment";


const TermsAndConditions = ({route,navigation}) => {
    const [isSelected, setSelection] = useState(false);
  var today = new Date();
  var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
  var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
  var dateTime = date+' '+time;
 


    return(
    <ScrollView>
        
        <Text style={[styles.myCards1, styles.historyTypo]}>Terms and conditions</Text>
        
        
      
        <View style={styles.totalWalletBalanceContainer}>
            <Text>
            Terms and Conditions – Carbonyte (Business) –(Draft)
Welcome to Carbonyte Website, if you continue browsing and want to use this website, you are
aggreging to comply and be bound by the following terms and conditions of use along with our
privacy statement, govern Carbonyte' relationship with you in connection to this website. If you
use and explore this website further, you signify your acceptance of and agreement to abide by
these terms and conditions of use. Please refrain from using our website if you disagree with any
portion of these terms and conditions.
1. DEFINITIONS
“Account Information Services” means an online service that provides consolidated information
on accounts held by you with one or more payment service providers such as banks.
“Account Information Services Provider” means a third-party payment service provider, which
is authorised by its Regulator, to provide Account Information Services with your explicit consent,
and under a separate agreement that you have signed with them.
“Account Maximum Balance” means the maximum balance you can have on your Carbonyte
Card.
“Apple Pay” means the mobile payment and digital wallet service created by Apple that allows
Carbonyte Cardholders to make payments from their Carbonyte Card using certain Apple devices
(subject to and in accordance with Apple Pay terms of use).
“Applicant” means the person applying to use the services provided by us in these Carbonyte
TermsAndConditionsn (EU) 2016/679) and any applicable replacement laws or
regulations as may be in force and applicable, from time to time.
“EEA” means the European Economic Area, which currently includes all countries in the
European Union together with Iceland, Norway and Liechtenstein.
“E-money” means the electronic money associated with your Carbonyte Cards.
“Expense Card” means any Carbonyte Cards issued, other than the first Carbonyte Card issued
under these Carbonyte Card Terms.
“Full Deductible Amount” means the full amount of the Carbonyte Card Transaction, including
the Carbonyte Card Transaction along with any associated fees, charges and taxes.
“Google Pay” means a mobile payments app created by Google that allows Carbonyte
Cardholders to make payments from their Carbonyte Card using their mobile device (subject to
and in accordance with Google Pay terms of use).
“Information” means any information related to the Institution, and any personal information
related to an Applicant, a Carbonyte Platform User, a holder of Carbonyte Business Account or
Carbonyte Cardholder.
“Institution” means a Limited Organisation or Non-Limited Business.
“Limited Organisation” means a Limited Company, Limited Liability Company, Limited
Liability Partnership, trusts, not-for-profit or government agencies incorporated in the UK.
“Mastercard” means Mastercard International Incorporated whose head office is at 2000
Purchase Street, Purchase, New York, 10577 USA.
“Mastercard Acceptance Mark” means the Mastercard International Incorporated Brand Mark,
indicating acceptance of the Carbonyte Card.
“Merchant” means a retailer, or any other person, firm or corporation that accepts cards which
display the Mastercard Acceptance Mark.
“Non-Limited Business” means a sole trader or partnership established in the UK. 
“Passcode” means the passcode or thumbprint or other method you or any Carbonyte Platform
User use to identify yourself and which is used for authorising any payments from the Carbonyte
Card.
“PIN” means your four-digit personal identification number for use with the Carbonyte Card.
“Regulator” means the Financial Conduct Authority in the UK or another European financial
services regulator.
“Carbonyte” means Carbonyte Platform Ltd, a company registered in England and Wales with
number 12870376 with its office address 83 Integer House Bre Innovation, Campus, Bucknalls
Lane, Watford, Hertfordshire, England, WD25 9XX..
“Carbonyte Business Account” means the deposit account provided to you by Modulr in
accordance with the Bank Account Terms.
“Carbonyte Card” means any prepaid Mastercard card issued under these Carbonyte Card Terms
under the bank identification number (xxxxxxxxx), including any Expense Card.
“Carbonyte Cardholder” means an individual selected by the Institution to whom a Carbonyte
Card is issued to.
“Carbonyte Card Number” means the 16-digit number on the front of your Carbonyte Card.
“Carbonyte Card Owner” means the entity legally responsible for a Carbonyte Card. For a NonLimited Business, this is either the individual acting in capacity as a sole trader, or the partners of
a partnership. For a Limited Organisation, this is the Institution itself.
“Carbonyte Card Transaction” means a transaction entered into using your Carbonyte Card,
including withdrawing cash using an ATM or purchasing a good and/or service using the
Carbonyte Card either in person, using contactless, over the internet or over the telephone
including any use of your Carbonyte Card to make payments using Apple Pay or Google Pay.
“Carbonyte Platform” has the meaning set out in the Carbonyte Terms.
“Carbonyte Platform User” has the meaning set out in the Carbonyte Terms.
“Carbonyte Terms” means the terms and condition between you and Carbonyte which you
agreed to when agreeing to these Carbonyte Card Terms, a copy of which can be found on the
Carbonyte Platform.
“Transaction Limits” means maximum limits that you can have in relation to the Carbonyte
Card, such as limits on transactions.
“We”, “Us”, “Our” or “Carbonyte” means Carbonyte Platform Limited.
“Website” means www.carbonyte.io
“Working Day” means Monday to Friday, but not including bank or public holidays in England. 
“You” or “Your” means you, the business which has entered into these Carbonyte Card Terms
with Carbonyte (and where applicable all people that you authorize to act for you).
The term Carbonyte or ‘us’ or ‘we’ refers to the owner of the website. The term ‘you’ refers to the
user or viewer of our website.
The following terms govern the use of this website:
1. The information on these pages is provided for general informational purposes. Without
prior notice, changes could be made.
2. Cookies are used on this website to track user preferences. We may retain the following
data for future use, including analytics and user information, if you agree to the usage of
cookies. As to the accuracy, timeliness, performance, completeness, or suitability of the
information and materials found or offered on this website for any particular purpose,
neither we nor any third parties make any warranty or guarantee. You understand that these
materials and information could have mistaken or inaccuracies, and we expressly disclaim
all responsibility for any such errors or inaccuracies to the fullest extent permissible by
law.
3. You use all information and content on this website at your own risk, and we will not be
held responsible. You are solely responsible for ensuring that any goods, services, or
information obtained from this website satisfy your particular needs.
4. This website contains content that we own or have a license to use. The design, layout,
look, appearance, documents, movies, and images are all included in this package. Other
than in line with the copyright notice, which is a component of these terms and conditions,
reproduction is not permitted.
5. You must not use our website and you must not let anybody else to access it (including any
content or materials on it):
a. Any action that violates a local, national, or international law or rule;
b. In any way that is dishonest, or has dishonest intentions or results (such as by giving
false information about your identity or account);
c. To get access to or tamper with a third party's records, pose as someone else, or
create or use a false identity or email account;
d. For commercial interests, whether your own or someone else's;
e. To cause harm to or attempt to cause harm to minors;
f. Transmitting any unsolicited or unauthorised advertisement, promotion, or similar
solicitation (often known as "spam");
g. To gain access—or attempt to gain access—unlawfully to, interfere with, disrupt,
or harm any aspect of our website, any computer systems, devices, programmes, or
networks on which our website is housed or run;
h. To alter, adapt, decrypt, decompile, disassemble, reverse engineer, or in any other
way contribute to our website or the services it offers or any software contained
therein;
i. Not to scrape, replicate, copy, publish, distribute, sell, or otherwise transfer any part
of our website, including any software, content, or services obtained through it;
j. To access, acquire, copy, monitor, traverse, or search our website or any part of it
using any technology or process, including data mining, robots, or other methods
for similar data gathering and extraction; or
k. In any manner that is against our interests or the interests of our third-party service
providers and is not authorized by us.
Important details about this Agreement that you should be aware of:
Carbonyte Ltd provides its services by collaborating with Enfuce License services oy (Enfuce) and
Modulr Finanace Services(Modulr). The E Money account is provided by Modulr and the pre-paid
card linked to the account is provided by Enfuce.
Before you activate your Carbonyte Card or use any of our services, please take the time to
carefully read this Agreement. This information serves as the contract for your Carbonyte account,
together with any related Carbonyte Cards and any payment services we might provide you. You
acknowledge that you have read and agreed to the terms of this Agreement by activating your
Carbonyte Card and/or making use of our services.
.
1. Scope of this Agreement
This agreement Covers the Carbonyte Platform, The Carbonyte e-money account,
Carbonyte cards and any additional services offered Via the Carbonyte platform.
1.1 Your Carbonyte Card is an e-money prepaid debit card and not a credit card.
1.2 We issued your Carbonyte Card in accordance with the terms of our Mastercard licence. The
Carbonyte GBP E-Money Account is a product that uses electronic money, and the electronic
money that goes along with it is supplied by us, distributed, and handled by carbonyte on behalf
of Modulr. The Carbonyte GBP E-Money Account that your Carbonyte Card is connected to is
listed. Your Carbonyte Card won't be associated with any accounts you have with the Carbonyte
Platform that are available in a currency other than GBP, such as electronic money accounts. This
is significant information to keep in mind with regard to any potential foreign transaction costs.
The Financial Conduct Authority oversees our issuing of electronic currency (xxxxxxx). The
registered brand Mastercard belongs to Mastercard International Incorporated. You and we have
an agreement that governs your rights and obligations when using this Carbonyte Card; you have
no rights against Mastercard or any of its affiliates. If you experience any difficulties in using the
Carbonyte Card you should contact Customer Services. The Carbonyte Card remains our property.
1.3 We agree to communicate with you in English regarding any matter relating to your Carbonyte
Card, Carbonyte GBP E-Money Account, or Enfuce. This Agreement has been created and is only
available in English.
1.4 You agree that we may contact you via Phone, email, SMS, and/or the Carbonyte Platform to
provide you with information about your Carbonyte GBP E-Money Accounts, your Carbonyte
Card, or Enfuce Payments. It is therefore crucial that you make sure the Carbonyte Platform is
updated with your current email address and mobile phone number.
1.5 If you have registered to use the Carbonyte Platform and your Carbonyte GBP E-Money
Account is active, you are permitted to access services offered by an Authorised Third-Party
Provider on that account. We suggest that you confirm that an Authorized Third-Party Provider is
permitted to offer their services by a Regulator before employing them. In the UK, the Financial
Conduct Authority’s register (available at https://register.fca.org.uk/) will tell you whether a
company is authorised. Each time access to your Carbonyte GBP E-Money Account is necessary
for the Authorized Third-Party Provider to supply you with their services, you must give them
your express consent or share your Carbonyte Platform credentials with them. You should always
consider the implications of sharing your Carbonyte Platform credentials and your personal
information.
1.6 We shall assume that you have given permission if an Authorized Third-Party Provider asks
access to your Carbonyte GBP E-Money Account in order to offer you their services using your
Carbonyte Platform login information. Please be aware that if an Authorized Third-Party Provider
requests access to your Carbonyte GBP E-Money Account, we are obligated to grant that request;
we may only deny access in specific situations.
1.7 Simply refuse to give your permission or refuse to divulge your Carbonyte Platform credentials
to an Authorised Third-Party Provider if you do not want to use services offered by an Authorised
Third-Party Provider on your Carbonyte GBP E-Money Account.
2. Opening a Carbonyte account
2.1 You must be a business to be eligible for a website Platform Account.
2.2 Prior to you passing our client verification and on-boarding processes and accepting these
Carbonyte Terms, we won't open a Carbonyte Platform Account for you. We shall not be
compelled to give you a justification if we reject your application.
2.3 Each business is limited to one Carbonyte Platform Account. The Carbonyte Platform Account
cannot be shared across several enterprises.
2.4 As a prerequisite of these Carbonyte Terms, you guarantee and represent the following:
(a) You are a UK-based company that satisfies our eligibility requirements;
(b) You possess the necessary power, authority, and capacity to enter into and abide by these
Carbonyte Terms;
(c) The information you give us is accurate, comprehensive, and does not mislead in order for
us to comply with our client verification and anti-money laundering policies regarding you,
and that you will keep us informed of any changes to the information supplied;
(d) Your company has and will continue to act in accordance with all applicable laws, rules,
codes of conduct, and regulatory guidelines or instructions;
(e) You will abide by the Carbonyte Acceptable Use Policy when using the Carbonyte
Platform Services as defined in these Carbonyte Terms.
2.5 We will ask for specific information as part of your application for a Carbonyte Platform
Account so that we can identify you and follow any applicable customer due diligence guidelines.
When setting up your carbonyte Platform Account, you must give us accurate information. You
must also let us know if any of the information or documents you have given us change.
2.6 You authorise Carbonyte to seek, confirm, and record details pertaining to your directors,
ultimate beneficial owners, partners, and funding sources, as well as details that identify and
authenticate you. Before any such change occurs, we will need to identify and verify any new or
replacement directors, ultimate beneficial owners, and partners. It is not assured that we will
approve of any such change. We shall deem this a serious violation of the Terms and may suspend
or terminate the Services as a result if the information that is legitimately required is not provided
or a change is not allowed by us.
3. Account/Transaction Limits
3.1 Account Limits are established upon opening a new account, subject to any further risk
assessment criteria. To meet our regulatory duties and lower the risk of financial crime, we reserve
the right to modify limitations at any moment.
3.2 You can contact Customer Services at any time to inquire about the restrictions that apply to
your account and request a Carbonyte GBP E-Money Account review if you need higher limits.
4. Creating an Account and Applying
4.1 After you open a Carbonyte Platform Account and a Carbonyte Business Account, you will
automatically receive a Carbonyte Card. In accordance with the Carbonyte Terms, you may also
be qualified to apply for additional Expense Cards using the Carbonyte Platform.
4.2 Based on the information you have submitted on the Carbonyte Platform, we will issue your
Carbonyte Card to you. In order for our records to stay valid, you must make sure that the
information you supply through the Carbonyte Platform is accurate and indicate any changes as
soon as possible using the Carbonyte Platform.
4.3 If we discover that the information, we hold about you is incorrect, we may have to suspend
or cancel your Carbonyte Card until we can establish the correct information, in order to protect
us both.
4.4 It is your responsibility to keep us updated of changes to your details by using the Carbonyte
Platform.
5. Getting a Card and Activating It
5.1 Users of the Carbonyte Platform may apply for Expense Cards there, and they will be sent to
the address you registered with Carbonyte (note that the initial Carbonyte Card issued to you will
be sent to the registered address of the Business). Each Carbonyte Card that you are allowed to
order on the Carbonyte Platform will be sent to the person the Institution chose when it made the
Carbonyte Card request.
5.2 The chosen Carbonyte Cardholder must sign the Carbonyte Card as soon as it is received, and
it must then be activated via the Carbonyte Platform.
5.3 The Carbonyte Platform will give the Carbonyte Cardholder the choice to divulge the PIN after
the Carbonyte Card has been activated. Other than the Carbonyte Cardholder, no one else should
ever know the PIN. We won't divulge the PIN to anyone else.
5.4 Any UK ATM will allow you to update your PIN. The Carbonyte Cardholder must avoid
choosing or updating a PIN that could be guessed by others, such as a number that:
a. is easily associated with the Carbonyte Cardholder, such as their telephone number or birth
date; or
b. is part of data imprinted on the Carbonyte Card; or
c. consists of the same digits or a sequence of running digits; or
d. is identical to a previously selected PIN.
Entirely Carbonyte Cards that you issue, how they are used, what each Carbonyte Cardholder does
in accordance with these Carbonyte Card Terms, and any fees or charges that these Carbonyte
Cards may accrue are all your responsibility.
6. Card Expiry and Card Use
6.1 The Carbonyte Card can be used at any Merchant to make in-person, online, or telephone
transactions, as well as to get cash from ATMs (fees will apply, see the Carbonyte Terms for more
information). If the merchant does not support chip and PIN authorisation, the merchant may allow
the Carbonyte cardholder to authorise the Carbonyte card transaction by signing the receipt. A
Carbonyte cardholder can authorise a Carbonyte card transaction at any merchant by entering the
PIN or other security code. By tapping the Carbonyte Card against a Contactless-enabled reader,
a Carbonyte Card Transaction may also be authorised. When the feature is made available, a
Carbonyte Cardholder may additionally authorise a transaction using Apple Pay or Google Pay.
To authorise some Carbonyte Card Transactions, a Carbonyte Cardholder might need to go
through more authentication processes. Please be aware that after a Carbonyte Card Transaction
has been authorised, it cannot often be stopped because we are assumed to have received it at that
time. If we believe a Carbonyte Card Transaction to be fraudulent or illegal, we reserve the right
to refuse to process it.
6.2 Because the Carbonyte Card is prepaid, you must buy E-Money from us in order to use it for
transactions, and you must tell Modulr to start a payment from your Carbonyte Business Account
to us. If there are insufficient funds in your Carbonyte Business Account to cover the full amount 
of the Carbonyte Card Transaction, including all associated fees, charges, and taxes, as well as any
additional ATM costs, the Carbonyte Cardholder must not use the Carbonyte Card. Please note
that your Carbonyte Card Transactions will be executed in sterling and we will only accept
payment for e-money value issued to your Carbonyte Card from your sterling Carbonyte Business
Account and not any other account you may have on the Carbonyte platform in another currency.
This is important to note in respect of any foreign transaction fees you may incur in connection
with Carbonyte Card Transactions.
6.3 Due to security precautions, businesses who accept the Carbonyte Card are required to get our
permission before the Carbonyte Cardholder can make any Carbonyte Card Transactions. In rare
cases, merchants may demand that the owner of a Carbonyte card have available funds that are
higher than the amount of the Carbonyte card transaction they want to perform. Only the actual
and final value of the Carbonyte Card Transaction will be charged to the Carbonyte Cardholder.
The reason why merchants ask for this is because they could need to access more money than the
Carbonyte Cardholder had anticipated using. For instance:
a. hotels, rental cars; and
b. internet Merchants – certain internet Merchant sites will, on registration or at checkout
stage, send a request for payment authorisation to verify if funds are available. In these
situations, we'll make sure your Carbonyte Business Account has enough money in it to
cover the amount that a Merchant has requested for verification. Your Carbonyte Business
Account's balance will momentarily be impacted by this. When checking the balance in
your Carbonyte Business Account to make sure there are enough funds available to cover
any transactions, please keep in mind that many sites won't deduct payment until the goods
are shipped.
6.4 When it is unable to get online authorization that the Carbonyte Cardholder has enough money
in their Carbonyte Business Account to pay for the purchase of electronic money from us to cover
the Carbonyte Card Transaction, the Carbonyte Card cannot be used. For instance, but not
restricted to, Carbonyte Card transactions made on ships, railways, and a few flights.
6.5 The Carbonyte Card can be used at self-service petrol pumps
6.6 The Carbonyte Card should not be used as a form of identification.
6.7 The Carbonyte Card can be used for gambling, including but not limited to the purchase of
traveler's checks, lottery tickets, casino chips, money orders, deposits, and money orders for wire
transfers.
6.8 Carbonyte may ask you to surrender any Carbonyte Cards at any time for a valid reason in
accordance with the provisions in paragraph 15 of these carbonyte Card Terms.
6.9 When we receive the money from a store who agrees to issue a refund for a purchase made
using the Carbonyte Card, we will transfer it to your Carbonyte Business Account, and you
authorise us to do so.
6.10 The amount of electronic money issued to your Carbonyte Card needed to complete the
Carbonyte Card Transaction will be converted to pounds sterling on the day we receive
information about that foreign currency transaction. The Carbonyte Card can be used to make
Carbonyte Card Transactions in currencies other than pounds sterling. Each Working Day, a rate
determined by Mastercard will be available, and any modifications to that rate will be effective
right away. Between the moment a Carbonyte Card Transaction is initiated and the time we request
payment from your Carbonyte Business Account, exchange rates are subject to change. Your
transaction history on the Carbonyte Platform will show the exchange rate that was used for a
Carbonyte Card transaction. For some foreign currency Carbonyte Card Transactions, there will
be an extra foreign transaction fee. To learn more, please refer to the Carbonyte Terms.
6.11 On the front of the Carbonyte Card is printed the expiration date. Once it expires, the
Carbonyte Cardholder won't be able to use their Carbonyte Card. If the owner of the Carbonyte
Card requests it, we will send a replacement Carbonyte Card (fees may apply; see the Carbonyte
Terms).
6.12 If we hold any electronic balance for you at a Carbonyte Card expiry that is not transferred to
your Carbonyte Business Account, it will remain yours for a period of six years from the expiry
date even though we will transfer any funds we receive for you in connection with your Carbonyte
Card to your Carbonyte Business Account. After six years after the expiration of the Carbonyte
Card, we will no longer honour any electronic money issued against it, and these Carbonyte Card
Terms will come to an end.
7. Adding Money to Your Carbonyte Business Account with A Carbonyte Card
7.1 A Carbonyte Cardholder can check the balance of their Carbonyte Business Account at an
ATM or on the Carbonyte Platform.
7.2 Subject to the Bank Account Terms (including any maximum cash deposit limits) and fees and
processing times as detailed in the Carbonyte Terms. Customers can only transfer money between
accounts and cannot be added through other means.
8. Checking Transactions
8.1 Carbonyte Platform Users can check your Carbonyte Card Transaction history via the
Carbonyte Platform.
8.2 You can view and download your monthly Carbonyte Card statements, which include a
breakdown of your Carbonyte Card Transactions, in pdf format on the Carbonyte Platform. When
they become accessible, Carbonyte will send you a monthly email or other form of notification.
9. Lost, Stolen or Damaged Cards
9.1 You must make sure that the Carbonyte Cardholder disables their Carbonyte Card via the
Carbonyte Platform right away or contacts Customer Services so we can block the Carbonyte Card 
and PIN in the event of loss, theft, fraud, or any other danger of an unauthorized use of the
Carbonyte Card.
9.2 You will be responsible for up to £35 of any loss that occurs before we are alerted if the
Carbonyte Cardholder either disables their Carbonyte Card or notifies us in line with these
Carbonyte Card Terms that their Carbonyte Card has been lost or stolen. (Subject to clause 4)
9.3 You won't be held responsible for losses due to Transactions authorised after the day the
Carbonyte Cardholder blocked its Carbonyte Card or notified Customer Services, provided that
the Carbonyte Cardholder has followed one of the procedures outlined in paragraph 1 and that
paragraph 11.4 does not apply. Subject to any limitations under the Carbonyte Terms that may
apply, the Carbonyte Cardholder may submit a replacement Carbonyte Card request via the
Carbonyte Platform.
9.4 If you or the Carbonyte Cardholder fail to report a lost or stolen Carbonyte Card, fail to keep
your carbonyte Card or security information related to the Carbonyte Platform safe, violate these
carbonyte Card Terms, or we have reason to believe that you or the Carbonyte Cardholder acted
fraudulently, grossly negligently, or intentionally, you will be held responsible for all losses.
10. Commencement and Term
10.1 These Terms shall commence on the day that Carbonyte confirm to you that your Carbonyte
Account has been approved and shall continue until terminated.
11. Your Account with Carbonyte E-Money
11.1 You can hold Electronic Money in currencies only in GBP in your Carbonyte Non-GBP EMoney Account in exchange for Carbonyte receiving the appropriate funds on your behalf in
accordance with these Terms.
11.2 In exchange for Enfuce obtaining the necessary money on your behalf in accordance with the
Enfuce Terms, Electronic Money in GBP is stored in Your Carbonyte GBP E-Money Account.
Your Carbonyte GBP E-Money Accounts are run by Modulr, thus using them is governed by the
Enfuce Terms.
11.3 Carbonyte or Modulr keeping the cash corresponding to the electronic money in one of your
Carbonyte E-Money Accounts is not the same as a bank holding money for you in that:
a. The monies received in exchange for the issued Electronic Money must be safeguarded by
Carbonyte or Modulr (as applicable), which means that they must be kept separate from
any of their own funds and placed in a designated safeguarding account.
b. Carbonyte or Modulr (as appropriate) cannot and will not invest in or lend to other people
or companies with the money received in exchange for the Electronic Money that has been
issued;
c. No interest will be charged on your Electronic Money; and
d. Your Electronic Money is not covered by the Financial Services Compensation Scheme.
e. In compliance with the Electronic Money Regulations of 2011, the funds related to
Electronic Money will be kept in one or more segregated bank accounts apart from
Carbonyte’s and Modulr's own funds.
12. Make Payments and Receive Payments
12.1 Instructing us to pay a debt:
You must start the payment instructions from your account by:
a. using the Tide Platform to communicate with us and give us instructions, or permitting
an extra user to perform (if appropriate);
b. Utilizing your Tide Card (including any extra cardholders' secondary Tide Cards); or
c. Providing us directives via a TPP.
12.2 Examining payment information
a. It is crucial to carefully review all of the information before submitting a payment
instruction because it is your responsibility to ensure that the information is accurate and clear and
that all required fields (such as the account number, sort code, account holder's name, and BIC and
IBAN where applicable) are filled out. We'll assume that the directions you gave us are accurate.
This applies to how you handle payments after receiving a Confirmation of Payee response.
b. Payee Verification
Providing a payment
As much as possible, we'll request that the receiving bank confirm that the recipient's name
corresponds to the account number and sort code you've provided. This is done prior to your
finalising the payment instruction and sending the payment. An additional security measure
known as called "Confirmation of Payee."
The replying bank will examine its records and respond with one of the following options:
"Match," "a Close Match," "No Match," or "a check is not feasible" (or other applicable response
corresponding to the circumstances). If there is a close match between the sort code and account
number you provided, we will display the account holder's name. Once you are aware of the
outcome of the Confirmation of Payee check, you will be prompted to indicate if you want to
proceed with the payment instruction. Before confirming that the payment will proceed, you can
make any necessary changes to the payment instruction. To ensure that you are paying the correct
individual, carefully review the Confirmation of Payee result and the payment information.
c. Refuse to receive Confirmation of Payee
Confirmation of Payee cannot be turned off when you are paying someone else. However, you
have the option to request that your information not be checked when someone wishes to pay you
in extraordinary circumstances. You will always have the choice to opt back in. If your request is
granted, the person or company will receive notification that your information cannot be verified.
12.3 If we have to stop letting you use our payment services
12.3.1 When appropriate, we may stop all or a portion of the services for your Tide Business
Account and notify Tide. For instance:
a. Tide notifies us that you have not made the required payments to Tide on schedule;
b. Our suspicions of fraud or unauthorised use are reasonable;
c. We firmly feel that doing so is vital to safeguard your account;
d. You've seriously violated any of these bank account terms; or
e. Due to Tide's suspension or termination of your access in accordance with the Tide
Terms, you are no longer allowed to access the Tide Portal.
Tide will often notify you before or right away after discontinuing or suspending payments and,
where feasible, provide an explanation as to why this has occurred, unless we're prevented by a
legal, regulatory, or security reason. Once the issue that caused the suspension of use has been
rectified, we might allow you to utilise the services for the Tide Business Account again.
12.4 The due date for payments
If a payment instruction is sent through the Tide Platform before the daily cutoff time listed below,
it will be processed the following working day. Otherwise, it won't.
If we receive an instruction after the deadline, we'll handle it the following business day.
Amount of payment Cutoff hour
Faster Payments None – available 24/7, 365 days of the year (or 366 days for a leap year)
CHAPS (inbound) 06:00 to 18:00 on working days
Bacs (inbound direct credits and direct debits paid out)
Once a day, by 07:00 on the day the payment is due to credit or debit the account
12.5 When we won't make payments or can delay payments
a. We will adhere to your payment instructions, unless:
• You need to supply more information in order to finish the payment, but you refuse to do
so when asked; You lack sufficient funds in your account to cover the payment;
• you transgress the payment and card transaction limits on your account, or both;
• the directive may have been fraudulent or connected to criminal behaviour, or there is a
plausible theory that you did not offer it;
• The instruction is not clear;
• the command came from a TPP and there are legitimate worries about fraud or security;
• there is a plausible suspicion that making the payment would subject us to any applicable
law or regulation; or
• You've gravely violated one or more of these bank account terms.
b. We occasionally must perform checks before carrying out a payment instruction, which may
cause a delay. You might occasionally be asked for more details or subjected to additional scrutiny.
c. When determining whether you have enough funds in your Tide Business Account to make a
payment, we'll check the balance of your account and subtract any immediate payments you've
previously given us permission to make (if they are not already reflected in your balance).
d. If your Tide Business Account goes into overdraft, you should make a payment right away to
bring your balance back up to zero or above.
e. If a directive hasn't been followed, you'll be informed via the Tide Platform, barring any
restrictions imposed by law, regulation, or security. Wherever it is practicable, you will be
informed of what happened, why it happened, and how to fix it. 10.6 If you want to change or
cancel a payment
Once submitted through the Tide Platform, payment instructions for quick payments cannot
typically be changed or cancelled because they are handled right away.
Up until the end of the working day before the day on which they are to be made, Direct Debits
can be cancelled via the Tide Platform.
10.7 When will you start getting incoming payments
If we receive any incoming electronic payments, we will update your balance and credit your
account as quickly as possible (unless we are precluded by a legal, regulatory, or security issue) or
if we have a good faith belief that doing so may result in us breaking a legal or regulatory
requirement.
13. The Carbonyte Platform
13.1 We provide Carbonyte Platform Users a non-exclusive, non-transferable permission to use
the Carbonyte Platform throughout the length of this Agreement solely for your internal business
operations as part of the Services provided under these Terms, without the right to award
sublicenses. Users of the Carbonyte Platform can access it through the mobile app.
13.2 The Carbonyte Platform is our portal where Carbonyte Platform Users can:
(a) add and remove Carbonyte Cardholders;
(b) add and remove Carbonyte E-Money Accounts;
(c) activate, suspend and terminate Carbonyte Cards;
(d) provide and withdraw consent for Employees being provided with access to the
Carbonyte Account Reader;
(e) provide and withdraw consent to Third Parties being provided with access to the
Carbonyte Account Reader.
(f) view the Carbonyte Platform; 
(g) enter into Electronic Money Exchanges
(h) enter into, amend and revoke Payments;
(i) draft and issue Customer Invoices;
(j) upload and pay Supplier Invoices;
(k) reconcile funds received into your Carbonyte E-Money Account against Customer
Invoices issued;
(l) view a list of Carbonyte Transactions that have already been entered into; and
(m) view the balance and currency of the Electronic Money you hold in your Carbonyte EMoney Accounts.
13.3 There is a facility whereby you can place a limit on the number of Payments on the basis of
budget and funds in the account that Carbonyte Platform Users are able to enter into.
14. Your Carbonyte Account's functionality for multiple users
14.1 Carbonyte platform users will be able to:
a. Appoint Carbnoyte Cardholders who are qualified to act on your behalf in Carbonyte Card
Transactions in accordance with the Enfuce Terms.
b. Grant employees' access to the Carbonyte Account Reader; and
c. Approve or deny Third-party requests for access to the Carbonyte Account Reader.
14.2 You give complete permission to Carbonyte Platform Users to utilise the Carbonyte Platform,
engage in Carbonyte Platform Transactions on your behalf, and debit your Carbonyte E-Money
Accounts for such transactions. To be clear, Carbonyte will not be responsible to you if Carbonyte
Platform Users engage in transactions on your behalf using the Carbonyte Platform. If you no
longer want someone to be able to enter into Carbonyte Platform Transactions on your behalf, for
instance because they are no longer employed by you, it is your obligation to make sure that you
remove them from the list of Carbonyte Platform Users.
14.3 You give complete permission to Carbonyte Cardholders to carry out Carbonyte Card
Transactions on your behalf, deducting funds from the corresponding Carbonyte GBP E-Money
Account. If you don't want someone to be able to use a Carbonyte Card to make purchases, say
because they're no longer working for you, you must make sure that you remove them from the
list of Carbonyte Cardholders.
15. Carbonyte Card
15.1 The Enfuce Terms apply to the issuance and usage of the Carbonyte Cards, which are issued
by Enfuce.
16. Fees
16.1 The fees outlined in the Carbonyte Terms apply to your usage of the Carbonyte Card.
Insert table with fees.
16.2 Any taxes or fees associated with a Transaction made using your Carbonyte Card will be
deducted by Carbonyte at the time of the transaction. If there are insufficient money or taxes or
charges outweigh the remaining funds, Carbonyte will make an effort to recoup those amounts by
following the procedures outlined in the Carbonyte Terms. Carbonyte has the right to pursue any
necessary measures, including legal action, to recoup any unpaid amounts.
16.3 We reserve the right to change the Fees from time to time. We will notify you of any change
to existing Fees.
16.4 In some circumstances a number of intermediaries (such as correspondent banks or payment
service providers) may charge fees and expenses for transactions you initiate. These charges are
beyond our control and whilst we will endeavour to minimise these for you wherever possible,
those charges sometimes cannot be calculated in advance. You hereby acknowledge that you shall
be liable for these charges.
17. Your Administrator, Read-Only Users and Carbonyte Cardholders
17.1 The person who opens your Carbonyte Platform Account will be the administrator of that
account (the "Administrator"), who will be able to give instructions on duties and transactions
inside of your carbonyte Platform Account, including on your Carbonyte Business Account. We
are free to assume that they are fully qualified to use the Carbonyte Platform Account and your
Carbonyte Business Account, and we are not compelled to ask you to confirm their authorization
before acting on any instructions they give.
17.2 You may nominate individual persons (the “Read-Only Users”) to have read-only access to
the Carbonyte Platform
17.3 You can ask for authorization to be granted so that a specific person (a "Carbonyte
Cardholder") can use or obtain a Carbonyte Card.
17.4 You must make sure that your Administrator, each Read-Only User, and each Carbonyte
Card are treated with respect. the cardholder who:
(a) When you give them access to your Carbonyte Platform Account or a Carbonyte Card, you
must provide us with accurate information about them;
(b) they receive a copy of the Terms and any other conditions governing the use of the
Carbonyte Platform Account and abide by them when using the carbonyte Platform
Account, Carbonyte Business Account, and/or Carbonyte Card;
(c) When there is a change to the information, they previously gave us, they notify us; and
(d) You must inform us right away to terminate the access of any Read-Only Users or
Carbonyte Cardholders you no longer desire to authorise.
17.5 You acknowledge and accept that as the Administrator, you are legally liable under the Terms
for yourself, as well as for Read-Only Users and Carbonyte Cardholders, and that you are bound 
by their actions as if they were your own. You specifically recognize that you will be liable for all
fees and charges associated with Carbonyte Card transactions carried out by your Carbonyte
Cardholders.
18. Compliance with our Eligibility Criteria and Acceptable Use Policy
18.1 When determining whether to let a potential customer to open a Carbonyte Platform Account,
Carbonyte will use its sole discretion based on its own risk assessment (which may alter from time
to time).
18.2 If any of the occurrences listed in our eligibility requirements happen to you or if you start
engaging in business activities that don't meet them, you must notify us right once.
18.3 It is a requirement of these Carbonyte Terms that you (and your Read Only Users) abide by
our Acceptable Use Policy when using your Carbonyte Platform Account.
19. Carbonyte’s Intellectual Property Rights
19.1 We provide you a non-exclusive, non-transferable permission to use the Carbonyte Platform
throughout the length of these Carbonyte Terms solely for your internal business operations as part
of the Services offered under these Carbonyte Terms, without the right to award sublicenses.
19.2 We own or have a licence for the Carbonyte Platform, Carbonyte websites, and any
intellectual property rights that are contained within, including but not limited to any material.
Intellectual property rights include all types of rights, including copyright, trademarks, domain
names, design rights, database rights, and patents, whether or not they are registered or
unregistered (anywhere in the world). All logos associated with the Services are considered to be
part of Carbonyte's intellectual property. Additionally, Carbonyte's service marks, trademarks,
and/or trade dress include all page headers, custom visuals, button icons, and scripts. The
intellectual property rights of Carbonyte may not be copied, imitated, or used without the
company's prior written approval.
19.3 Regarding these Carbonyte Terms, we reserve all of our intellectual property rights. This
implies, for instance, that we continue to be their proprietors and are free to utilise them anyway
we see proper.
19.4 Other than what is stated in these Carbonyte Terms, nothing in these Carbonyte Terms gives
you any legal rights in the Carbonyte Platform and/or the Carbonyte websites. You acknowledge
that any intellectual property notices on the Carbonyte Platform, specifically any notices relating
to digital rights or other security integrated in or contained within the Carbonyte Platform, may
not be changed, attempted to be circumvented, or deleted.
19.5. Your recommendations for enhancements to the Carbonyte Platform or Services
("Feedback") are provided voluntarily, and Carbonyte is free to use, disclose, reproduce, licence,
or otherwise distribute and exploit such Feedback as it sees fit, completely free from any obligation 
or limitation of any sort. Feedback includes—without limitation—feedback you give to Carbonyte
in response to any surveys the company conducts about your experience using any technology
currently in use.
20. Your Obligations
20.1 Whether Carbonyte gives you instructions for using the Carbonyte Platform Services via the
Carbonyte Platform, email, or another method, it is your responsibility to follow them.
20.2 Any equipment and auxiliary services, including but not limited to internet access, networking
hardware, software, and operating systems, that are required to connect to, access, or otherwise
use the Carbonyte Platform must be purchased, kept up to date, and kept secure by you.
20.3 The information necessary for Carbonyte to conduct the Carbonyte Platform Services,
including photographic identity, documents, and information as Carbonyte may lawfully request
to meet with regulatory duties, must be promptly provided by you. You affirm and guarantee to
Carbonyte that you have the legal right to disclose any information with Carbonyte that you
provide. You are accountable for the truthfulness and completeness of the data you give Carbonyte,
and you'll make sure it's consistently accurate and up to date. You understand that any losses
incurred as a result of providing Carbonyte with incomplete, inaccurate, or false information are
your responsibility.
20.4 You are responsible for reading any communications, statements, information, documents, or
other materials that Carbonyte posts to the Carbonyte Platform (or otherwise makes available to
you for review), and you are required to notify Carbonyte of any errors in any such materials as
soon as possible, or within the time frame specified in communications you receive from
Carbonyte.
21. Privacy Policy and Data
21.1 You consent to Carbonyte collecting, using, and disclosing your information in line with
Carbonyte's Privacy Policy by accepting these Carbonyte Terms. You agree that all information
you provide to Carbonyte may be shared with Modulr and Enfuce in the course of providing you
with services. If you tell us that you don't want us to use your information any longer, we will stop
offering the Services, but we may continue to use your data or information if we have a legal
justification, such as the requirement to keep records for regulatory purposes.
22. Third-Party Services, Websites and Resources
22.1 You will have the option to choose to receive services from third parties that Carbonyte has
introduced (a "Third Party" and each such service a "Third-Party Service") through the Carbonyte
Platform. It is your responsibility to decide whether to receive a third-party service, including
accepting their terms and conditions if necessary. Carbonyte makes no representations or
recommendations about and assumes no responsibility for third-party services or any content, 
information, or results made available through third-party services. If you choose to use a thirdparty service, you authorise carbonyte to give that third party any and all documents and
information about you and your company that are required for that third party to provide that
service to you. This includes, but is not limited to, your bank account information and any other
information that you have given Carbonyte in connection with these Carbonyte Terms and your
use of the third-party service. You affirm and warrant that Carbonyte's use or disclosure of such
information will not infringe upon any privacy rights, other proprietary rights, or any applicable
laws. Additionally, you declare and warrant that you have waived and released Carbonyte and its
directors, officers, and employees from any legal claims resulting from a Third Party's use of your
information, even if such use is not permitted by the applicable agreement between you and the
Third Party.
22.2 Links to external websites or resources may be present on the Carbonyte Platform and the
Services. These links are simply offered by Carbonyte as a convenience, and the information,
goods, or services found there or obtained from such websites, resources, or links are not within
the control of Carbonyte. You recognise entire responsibility for using any third-party websites or
resources and that you do so at your own risk.
23. Keeping Your Login Information Safe
23.1 You must instruct your users to take all necessary precautions to keep the unique security
credentials for accessing their carbonyte Platform Account, Carbonyte Business Account, or
Carbonyte Card, as appropriate, private and secure. When you become aware of the loss, theft,
misappropriation, or unauthorised access to or use of your personalised security credentials or your
Carbonyte Card, you must immediately notify us. You can do this by freezing your Carbonyte
Card and/or Carbonyte Platform Account using the functionality on the Carbonyte Platform, or
you can get in touch with us by using the member support feature on the Carbonyte Platform. You
can also reach us by dialing (XXXXXX) for lost, stolen, or damaged cards (available 24 hours a
day).
24. Termination or Suspension
24.1 These Carbonyte Card Terms are terminable at any time:
a. if we give you two months’ notice, or
b. if you, a Carbonyte Platform User, or the Carbonyte Cardholder have violated these
Carbonyte Card Terms, or if we have reason to believe that you, a Carbonyte Platform
User, or the Carbonyte Cardholder have used, or intend to use, the Carbonyte Card
fraudulently or for another illegal purpose, we may terminate your use of the Carbonyte
Card with immediate effect.
c. if third parties' actions prevent us from processing your transactions, such as if they force
us to fulfil obligations that make us unwilling or unable to continue processing payment
transactions; or
d. if your Carbonyte Business Account is closed.
24.2 Without giving you any previous notice, we reserve the right to suspend or cancel any
Carbonyte Cards at any time with immediate effect (and up until your default is corrected or the
Carbonyte Card Terms are cancelled) if:
a. if we learn that any of the data the applicant submitted while requesting a Carbonyte
Business Account and/or carbonyte Card was false;
b. we believe that this is necessary for security reasons; or
c. any unauthorised or fraudulent use of any Carbonyte Cards, or any unauthorised use of any
Carbonyte Cards' security credentials; or
d. any legal obligations require us to do so; or
e. If you, a Carbonyte Platform User, or any Carbonyte Cardholders have violated these
Carbonyte Card Terms, or if we have reason to suspect that you, a Carbonyte Platform
User, or any Carbonyte Cardholders have used, or intend to use, the carbonyte Card, the
Carbonyte Platform, or the Passcode negligently, fraudulently, or for any other illegal
purpose, or if we are unable to process any transactions because of the behaviour of third
parties.
24.3 If we are able to notify you in advance if we do decide to suspend or terminate any Carbonyte
Cards, we will do so; if not, we will do so as soon as possible (to the extent that we are permitted
by law). If a suspension occurs, we may let anybody engaged in the transaction know.
24.4 In accordance with these Carbonyte Card Terms, you must pay us any sum of fees and/or
charges that were rightfully imposed, whether before or after termination, in the event that further
fees are discovered to have been incurred under these Carbonyte Card Terms after termination by
either you or us. Carbonyte will make an effort to recoup these sums by following the procedures
outlined in the Carbonyte Terms. Carbonyte has the right to pursue any necessary measures,
including legal action, to recoup any unpaid amounts.
24.5 If either you or Carbonyte decides to terminate these Carbonyte Card Terms, this will also
serve as a notice that the Carbonyte Terms and the Bank Account Terms have also been terminated,
and this termination will take effect on the same date as the termination of these Carbonyte Card
Terms. These Carbonyte Card Terms will also be terminated if you or Carbonyte terminates the
Carbonyte Terms, and this termination will take effect on the same date as the termination of the
Carbonyte Terms. These Carbonyte Card Terms are not automatically terminated by the
cancellation of any one or more Expense Cards.
25. If Something Goes Wrong
25.1 Please contact us via the member support feature on the Carbonyte Platform if you think there
is a problem with your Carbonyte Platform Account, Carbonyte Business Account, or Carbonyte
Card.
You can also contact us by sending an email to hello@carbonyte.io. You can reach us by dialing
XXXXXXX if your Carbonyte Card is damaged, lost, or stolen (available 24 hours a day).
25.2 The table below shows issues faced and how Carbonyte will handle the issues (Solutions) 
Situation: A payment is incorrectly processed if it was sent to the wrong person or account, or
if Carbonyte informed you during the Confirmation of Payee process that the recipient's name
matched the sort code and account number you provided, but this information was incorrect and
the payment was sent to the wrong recipient or account.
Solution: The total amount of the payment and any associated fees will be returned.
Situation: Your account was used in an unauthorised transaction unless:
• You haven't taken proper care of your security information;
• We have cause to believe you committed fraud.
Solution: The payment amount and any charges associated with that payment will be repaid,
with the exception of the first £35 which Carbonyte may charge you, once your claim has been
examined and Carbonyte is satisfied that you have not been negligent or that you have not
behaved fraudulently. If an unauthorised payment is made after you've informed Carbonyte of
it or that your account security information has been lost or stolen, we won't charge you for it.
Situation: Due to a mistake by Carbonyte, a payment you requested is late.
Due to a mistake by Carbonyte, a payment you received to your account was delayed.
Solution: Your account will be restored to the state it would have been in if our error hadn't
occurred. You can also request that we get in touch with the other person's bank to adjust the
interest charged on their account.
Situation: A retailer deducts money from your account without telling you how much it will
be, and the amount deducted is higher than you anticipated.
Solution: The payment amount will typically be refunded if you notify us within eight (8)
weeks of the date of the payment that:
1) your authorisation did not specify the precise amount of the payment; and
2) the amount is higher than you could have reasonably expected to pay, based on your
previous spending and our investigation. When we look into your request and find that a
refund is not possible, we'll let you know why.
Situation: The payment was not sent to the person or account you intended because you made
a mistake and provided the incorrect payment information or because you continued with a
payment even when the Confirmation of Payee response was anything other than "complete
match."
Solution: If you do something wrong, we'll make a fair attempt to help you rectify it (which
may entail getting your money back), but Carbonyte reserves the right to charge a fee for this
service.
Carbonyte won't be able to credit your account with the refund if we are unable to retrieve the
payment.
You will need to speak with the recipient's bank about getting a refund if they have already
received the payment. If you require details regarding the payment to assist you in your
attempt to recover it, contact Carbonyte member support.
25.3 If you don't notify us about an issue with your payment within thirteen (13) months after the
debit date, then you might not be entitled to a refund.
25.4 Further investigation of your claim for a refund may be required to check that you're entitled
to a refund. If you are entitled to a refund, this will be done as soon as we can and no later than the
end of the next working day following the day that the request is received or after the conclusion
of any investigation into your claim, as applicable.
25.5 If funds are added to your account because of a systems error or a mistake, we have the right
to automatically reclaim those funds. It will be considered a serious breach of these Terms if you
do not return the funds upon being notified, in the event they cannot automatically be reclaimed.
26. Buy a Carbonyte Card
26.1 The Carbonyte Cards are issued by Enfuce and accordingly Carbonyte Card Purchases are
subject to the Enfuce Terms.
26.2 For the avoidance of doubt, card-not-present Carbonyte Card Purchases from merchants
based in certain Restricted Countries are also included in this restriction. We may instruct Enfuce
to prohibit Carbonyte Card Purchases and ATM Withdrawals in Restricted Countries, or Enfuce
may elect to do so on their own. We reserve the right to prohibit Carbonyte Card purchases and
ATM withdrawals in the restricted nations for any reason, but most likely to safeguard our
members from the higher fraud and security risks present in those nations. In order to help you in
case your Carbonyte Card purchases or ATM withdrawals are declined while you're travelling
outside of the United Kingdom, we advise that you bring along a backup payment method.
26.3 Additional services offered: Carbonyte offers their customers services like Account creation,
sending money, transferring funds between accounts and Eco module (buying of commodities
which are environment friendly)
Additional Services:
In order to help you with your business, we may occasionally offer extra services through the Tide
Platform (the "Additional Services"). You will be informed of any additional terms and conditions
before you choose to use these Additional Services. If there is a price associated with an Additional
Service, we will let you know about it and make sure you voluntarily agree to pay it. You agree to
pay the associated fees if you decide to sign up for an additional service through the Tide Platform.
Any such subscription will instantly take effect after you sign up, giving you access to all features
and services offered by the specific provider. We retain the right to stop providing your additional
services if we are unable to collect payment of the applicable subscription charge within five days
of the due date for payment. If you choose to stop using the service, the downgrade will only be
considered effective as of the start of the month that follows your decision to stop using the service. 
This is true when the prices for an additional service are periodic rather than transactional. In the
event that these Tide Terms are terminated, we will prorate the monthly costs for Additional
Services and pay them to you (unless otherwise provided for in the terms and conditions for these
Additional Services). In our sole discretion, we may reject your request to sign up for one of our
additional services.
27. Carbon Calculator and Offset Scheme
27.1 Customers can choose among the different offsetting "bundles" made possible by our partner
Mastercard on the Carbonyte app to offset their monthly computed carbon footprint.
27.2 You can choose their preferred offsetting package, cap the most they want to pay each month
for offsetting, or decide if they want to compound the amount they offset. The Carbonyte App
offers constant flexibility in terms of these choices.
27.3 If a customer elects to offset, Carbonyte will determine their carbon footprint at the end of
each month using transactions made on their Carbonyte card as well as any transactions made on
any accounts, they have linked to their Carbonyte account via open banking.
27.4 If a customer so chooses, carbonyte will provide them the option to remove specific
transactions from their carbon calculation. For example, if you have already used another method
to offset the transaction's emissions.
27.5 The offset cost will then be determined by Carbonyte based on the package the customer has
chosen and taking into account any cap or multiplication amounts. The figure includes the minimal
fee that Carbonyte charges for the sale of carbon offsetting bundles.
27.6 The customer's Carbonyte card will be charged the offset payment on the fifth day of the
following month. The consumer won't be charged and their carbon footprint won't be mitigated if
the debit card doesn't have enough money on it.
27.7 When a client makes an offset payment, Carbonyte will transfer the funds to our business
partner, who will complete the order by retiring carbon credits on carbonyte’s behalf (meaning
they cannot be purchased again by anyone else).
27.8 If Business partner does not already own carbon credits in any of the projects included in the
chosen bundle and the partner is unable to buy any credits in the bundle for which Carbonyte has
placed an order, Carbonyte will choose the bundle that is the closest to your choice and will
purchase credits to the same value. Carbonyte will notify you if this occurs.
27.9 Following the completion of carbon credit transactions, the acquired credits will be retired,
and the partner will give Carbonyte a certificate to prove the retirement of the credits.
27.10 Carbonyte will make a reasonable effort to guarantee that the prices of offsetting bundles
are displayed accurately. But there's always a chance that certain pricing could alter.
27.11 Up until the day before the payment is taken, a customer has the option to reject offsetting
at any time. If they do, no offset payment will be collected, and the consumer won't have any
purchases made on their behalf that month.
27.12 The offsetting order cannot be cancelled or refunded if the buyer has not cancelled before
the money is made (by the fourth of the month).
27.13 All charges quoted are inclusive of VAT. Carbonyte Limited’s VAT ID is GB424078311
28. Payment Services Directive ("PSD2")
28.1 PSD2 replaces the existing EU framework for the regulation of payment services under the
original Payment Services Directive 2009 ("PSD1") and is the result of a number of drivers,
including developments in technology, the increased threat of cyber-attack and a desire to increase
competition.
28.2 PSD2 requires modifications to the terms and conditions governing our clients' Accounts as
well as new criteria for how we provide payment services for client accounts.
The changes include:
28.2.1 Increased scope: PSD2 expands the scope of PSD1 by bringing certain transactions and
accounts that were previously beyond of its purview under the regulation of payment services in
the EU. As a result, we have updated our terms and conditions to include a new section on "Timings
of Withdrawals" (if you instruct us to make a payment during business hours we will process it on
that Banking Day, unless you have instructed us to make it on a future date).
28.2.2 SHA Charging: For both EEA and non-EEA currency intra-EEA transactions, this will be
the usual billing methodology. In these payment transactions, the payer only pays the fees assessed
by their bank, while the payee pays the fees assessed by the beneficiary bank. Due to payments
being cleared through intermediate banks outside of the EEA as a result of this requirement, the
principal amount received for intra-EEA transfers in a non-EEA currency may no longer be
guaranteed.
28.2.3 Access for third party payment providers: One of the key changes brought about by
PSD2 requires us to grant access to certain third-party payment service providers ("TPPs")
designated by our customers (subject to their approval) to online Accounts in order to initiate
payments and/or retrieve account and transactional data. Account Information Service Providers
(AISPs) and Payment Initiation Service Providers are the two different categories of TPPs (PISPs).
You can designate an AISP to give you consolidated data on the Accounts you have with us. You
are allowed to designate a PISP to start a payment transaction from your account with us at your
request.
You should take reasonable precautions while choosing, appointing, and using these services as
any appointed TPP may have access to account information and transactional data. You should be
aware of the dangers associated with granting access to your Account. A few of the new TPP
clauses are intended to assist us in recognising and minimising the impact of any unauthorised,
dishonest, or otherwise prohibited TPP behaviour.
28.2.4 Security, incident management and reporting: To improve security and transparency,
PSD2 adds a number of new standards. In response to recent worries about cyber-security, PSD2
in particular introduces several new security management and regulatory reporting obligations.
Due to these modifications, we have adjusted our security, incident management, and incident
response procedures to meet the new standards. For the purpose of enhancing the security of online
payments, they include certain authentication practices that are legally required (strong customer
or 2-factor authentication).
28.2.4 Complaints handling and dispute resolution: For our business clients, a new complaint
resolution obligation has been put in place. All pertinent clients have been told this. All pertinent
PSD2 concerns are tracked and reportable to the regulator.
29. Your Balance
29.1 You understand that actual balances and available funds reported on the Carbonyte Platform
may not be the settled amounts in your Carbonyte E-Money Account. Pending debits and credits
may not be included in a real-time balance. As soon as Carbonyte obtains information on pending
debits and credits, it will let you know.
30. Your Statements
30.1 We will send you statements in.pdf format with specific information regarding your payment
transactions carried out on your Carbonyte Business Account and the transactions carried out on
your Carbonyte Card once per month via the Carbonyte Platform.
30.2 You should monitor your account statements carefully and notify us of any payment
transactions or activity you do not recognise.
31. Our Regulatory Status
31.1 Under firm reference XXXXXX, Carbonyte is approved by the Financial Conduct Authority
to issue electronic money, provide payment initiation services, and account information services
in accordance with the Payment Services Regulations of 2017. With regard to its activities in credit
and insurance broking, Carbonyte is additionally authorised and subject to regulation by the
Financial Conduct Authority (FCA registration number XXXXX).
32. Notices
32.1 All notices and communications from us will be communicated to you electronically, and you
agree to this. Normally, we will notify you of important information and communicate with you
via the Carbonyte Platform. As these are updated periodically, we may also contact you by mail at
the addresses, email at the email addresses, SMS and phone call at the mobile numbers, and phone
call at the landline numbers that you have provided to Carbonyte.
32.2 Your notice to us must be delivered to us via the Carbonyte Platform, email (to
hello@carbonyte.io or another Carbonyte employee, if applicable), postal letter (to our address),
or a combination of these methods. If relevant, if you send your notice before 17:00 London time, 
it will be considered received the same working day; otherwise, it will be considered received the
following working day.
33. Changes to the terms
33.1 If the Terms change, we'll notify you at least two (2) months in advance. In most
circumstances, the Carbonyte Platform will be utilised to provide this, while other channels, such
email, may also be employed. The notice will state the day the change will go into effect.
33.2 You might not always be informed before a change is made, for instance:
• if we reasonably believe that the change is for your advantage;
• if we are not reasonably able to give prior notice and we change something to comply with
a law, regulation, or related guidance; or
• if there are only slight modifications made to the Carbonyte Platform Account, the
Carbonyte Business Account, the Carbonyte Cards, or how they function, provided that
these modifications do not have an impact on the account's functionality, the Terms, or the
quality of the service.
33.3 We'll presume that you've agreed to the modification until you let us know otherwise before
it happens.
33.4 You will be assumed to have given notice that you desire to terminate the applicable terms
on the date the changes are supposed to go into effect if you do notify us that you do not accept
the changes. Please take note that if the Carbonyte Terms are terminated, the Bank Account Terms
and the Carbonyte Card Terms will also end. If you terminate the Bank Account Terms or the
Carbonyte Card Terms, Carbonyte may choose to do the same if it so chooses in its sole discretion.
34. Security
34.1 We may stop:
(a) Carbonyte Cardholders’ use of the Carbonyte Cards; and/ or
(b) Carbonyte Platform Users’, Carbonyte Account Reader Employees’ and Carbonyte
Account Reader Users’ use of the Carbonyte Platform; and
(c) Carbonyte Account Reader Employees and Carbonyte Account Reader Users use of the
Carbonyte Account Reader;
About the security of the Carbonyte Platform, a Carbonyte Card, a Carbonyte Account Reader,
and the suspected unauthorised and/or fraudulent use of the Carbonyte Platform, a Carbonyte Card,
a Carbonyte Account Reader, on the basis of reasonable reasons.
34.2 You must ensure that:
(a) each Carbonyte Platform User takes all reasonable steps to:
(i) keep his/her Security Codes safe; 
(ii) ensure that access to the Carbonyte Platform is kept safe; and
(b) each Carbonyte Cardholder keeps his/her Carbonyte Card safe.
35. Complaints
35.1 Please send us an email at hello@carbonyte.io if you would like to file a complaint with us.
The mechanism for submitting and resolving concerns is outlined in our complaint's procedure.
You can reach us at any moment to seek a copy of our complaint's procedure.
35.2 If your complaint relates to: (a) your Carbonyte Platform Account; (b) a Payment Order; (c)
a Carbonyte Card transaction or the Carbonyte Card; (d) a Carbonyte Business Account, and after
having received our final response you are still unhappy or not satisfied, and you are: (a) a
microenterprise which employs fewer than 10 persons and whose annual turnover and/or annual
balance sheet total does not exceed EUR 2 million; (b) a charity which has an annual income of
less than £6.5 million; or (c) a trustee of a trust which has a net asset value of less than £5 million;
or (d) a small business which has an annual turnover of less than £6.5 million and employs fewer
than 50 persons or has a balance sheet total of less than £5 million, then you may, if your complaint
falls within the Financial Ombudsman Service’s jurisdiction, be able to take your complaint to the
Financial Ombudsman Service (FOS), details of which are available on the following link
www.financial-ombudsman.org.uk/faq/complain.html. You can also call the FOS on 0300 123
9123 or write to: Financial Ombudsman Service, Exchange Tower, Harbour Exchange, London,
E14 9SR.
35.3 Please be aware that Carbonyte will deal with grievances pertaining to a Carbonyte Business
Account on Modulr’s behalf. The Modulr Terms will also apply to complaints against Carbonyte
Card transactions or the Carbonyte Card, even if Carbonyte may be managing the complaint on
Modulr's behalf.
36 Personal information
36.1 We are the Data Controller and will only use your personal information for the purposes of
providing you with Carbonyte Cards and services as described in these carbonyte Card Terms.
37. Getting Customer Support
37.1 You can use the Carbonyte Platform to send an instant message to Carbonyte member services
if you have a question about your Carbonyte Card.
38.2 Lost, damaged or stolen cards can be reported via the Carbonyte Platform or XXX (Contact
Number to be mentioned) (available 24 hours a day). Mastercard is a registered trademark of
Mastercard International Incorporated.
38. Legal:
These Bank Account Terms shall be governed by the laws of England and Wales and any claim or
dispute under these Bank Account Terms shall be subject to the non-exclusive jurisdiction of the
courts of England and Wales
        </Text>
        </View>
        
    </ScrollView>
    )
}

const styles = StyleSheet.create({
    historyTypo: {
        textAlign: "center",
        color: GlobalStyles.Color.black,
        fontWeight: "700",
        fontSize:30,
        
      },
      rounded: {
        borderRadius: 15,
      },
      
      myCards1:{
        marginTop:"6%",
        textAlign: "center",
      },
      totalWalletBalanceContainer: {
        marginTop: "2.5%",
        width: "80%",
        backgroundColor: "#FFFFFF",
       
        marginLeft: "10%",
        borderRadius: 15,
        flexDirection: 'column',
        padding: "2.5%",
        justifyContent: "center",
        marginBottom:"14%"

    },
    hello: {
      left: 10,
      fontSize: GlobalStyles.FontSize.size_8xl,
      fontWeight: "700",
      fontFamily: GlobalStyles.FontFamily.typoGrotesk,
      textAlign: "left",
      color: GlobalStyles.Color.indigo_100,
      top: 0,
      position: "absolute",
    },
    TermsAndConditions: {
        backgroundColor: GlobalStyles.Color.gray_1100,
        flex: 1,
        paddingTop: GlobalStyles.Padding.padding_md,
        width: "100%",
        textAlign:"center",
        paddingRight:GlobalStyles.Padding.padding_md,
        paddingLeft:GlobalStyles.Padding.padding_md,
        shadowOpacity:1,
      },
      
  });
  
  export default TermsAndConditions;