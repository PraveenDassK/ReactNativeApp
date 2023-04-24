import React, { useContext, useEffect, useState } from "react";
import {
  Text,
  StyleSheet,
  Image,
  View,
  Pressable,
  TextInput,
  Keyboard,
  ScrollView,
  Modal
} from "react-native";
import GlobalStyles from "../../GlobalStyles";
import moment from "moment";
import Button from "../components/Button";

const PrivacyPolicy = ({setIsOpen}) => {
  const accept = () => {
    setIsOpen(false)
  };

  return (
      <ScrollView>
        <Text style={[styles.myCards1, styles.historyTypo]}>Privacy policy</Text>
        <View style={styles.totalWalletBalanceContainer}>
          <Text>
            PRIVACY POLICY BACKGROUND: CARBONYTE LIMITED understands that your
            privacy is important to you and that you care about how your personal
            data is used. We respect and value the privacy of everyone who visits
            this website, www.carbonyte.io (“Our Site”) and will only collect and
            use personal data in ways that are described here, and in a way that
            is consistent with our obligations and your rights under the law.
            Please read this Privacy Policy carefully and ensure that you
            understand it. Your acceptance of this Privacy Policy is requested
            when you use our website. 1. Definitions and Interpretation In this
            Policy the following terms shall have the following meanings:
            “Account” means an account required to access and/or use certain areas
            and features of Our Site; “Cookie” means a small text file placed on
            your computer or device by Our Site when you visit certain parts of
            Our Site and/or when you use certain features of Our Site. Details of
            the Cookies used by Our Site are set out in Part 14, below; and
            “Cookie Law” means the relevant parts of the Privacy and Electronic
            Communications (EC Directive) Regulations 2003; Information About Us
            Our Site is owned and operated by CARBONYTE LIMITED, a Private Limited
            Company registered in England under company number 12870376.
            Registered address: 83 Integer House Bre Innovation, Campus, Bucknalls
            Lane, Watford, Hertfordshire, England, WD25 9XX. Data Protection
            Officer: Kevin Koonjah Email address: hello@carbonyte.io Postal
            address: 83 Integer House Bre Innovation, Campus, Bucknalls Lane,
            Watford, Hertfordshire, England, WD25 9XX. Phone Number: 02081766108
            2. What Does This Policy Cover? This Privacy Policy applies only to
            your use of Our Site. Our Site may contain links to other websites.
            Please note that we have no control over how your data is collected,
            stored, or used by other websites and we advise you to check the
            privacy policies of any such websites before providing any data to
            them. 3. What Is Personal Data? Personal data is defined by the UK
            GDPR and the Data Protection Act 2018 (collectively, “the Data
            Protection Legislation”) as ‘any information relating to an
            identifiable person who can be directly or indirectly identified in
            particular by reference to an identifier’. Personal data is, in
            simpler terms, any information about you that enables you to be
            identified. Personal data covers obvious information such as your name
            and contact details, but it also covers less obvious information such
            as identification numbers, electronic location data, and other online
            identifiers. 4. What Are My Rights? Under the Data Protection
            Legislation, you have the following rights, which we will always work
            to uphold: a. The right to be informed about our collection and use of
            your personal data. This Privacy Policy should tell you everything you
            need to know, but you can always contact us to find out more or to ask
            any questions using the details in Part 15. b. The right to access the
            personal data we hold about you. Part 13 will tell you how to do this.
            c. The right to have your personal data rectified if any of your
            personal data held by us is inaccurate or incomplete. Please contact
            us using the details in Part 15 to find out more. d. The right to be
            forgotten, i.e. the right to ask us to delete or otherwise dispose of
            any of your personal data that we hold. Please contact us using the
            details in Part 15 to find out more. e. The right to restrict (i.e.
            prevent) the processing of your personal data. f. The right to object
            to us using your personal data for a particular purpose or purposes.
            g. The right to withdraw consent. This means that, if we are relying
            on your consent as the legal basis for using your personal data, you
            are free to withdraw that consent at any time. h. The right to data
            portability. This means that, if you have provided personal data to us
            directly, we are using it with your consent or for the performance of
            a contract, and that data is processed using automated means, you can
            ask us for a copy of that personal data to re-use with another service
            or business in many cases. i. Rights relating to automated
            decision-making and profiling. We do not use your personal data in
            this way. For more information about our use of your personal data or
            exercising your rights as outlined above, please contact us using the
            details provided in Part 15. It is important that your personal data
            is kept accurate and up-to-date. If any of the personal data we hold
            about you changes, please keep us informed as long as we have that
            data. Further information about your rights can also be obtained from
            the Information Commissioner’s Office or your local Citizens Advice
            Bureau. If you have any cause for complaint about our use of your
            personal data, you have the right to lodge a complaint with the
            Information Commissioner’s Office. We would welcome the opportunity to
            resolve your concerns ourselves, however, so please contact us first,
            using the details in Part 15. 5. What Data Do You Collect and How?
            Depending upon your use of Our Site, we may collect and hold some or
            all of the personal and non-personal data set out in the table below,
            using the methods also set out in the table. Data Collected How We
            Collect the Data Identity Information including but not limited to
            Name, title, Date of Birth, Gender. Through the website including the
            customer portal, any email and call communications, postal letter or
            any other accepted form under this policy. Contact information
            including but not limited to Address, email address, contact number.
            Through the website including the customer portal, any email and call
            communications, postal letter or any other accepted form under this
            policy. Business information in case if you are a commercial customer,
            including but not limited to Business name, address, responsible
            person details like name, contact number, job title. Through the
            website including the customer portal, any email and call
            communications, postal letter or any other accepted form under this
            policy. Payment information including but not limited to card details,
            bank account number for the purposes of setting up Direct debit on
            your account. Through the website including the customer portal, any
            email and call communications, postal letter or any other accepted
            form under this policy. Profile information including but not limited
            to Preferences, interests, log in details, purchase history. Through
            the website including the customer portal, any email and call
            communications, postal letter or any other accepted form under this
            policy. Technical information including but not limited to IP address,
            Browser type and version, etc. Through the website including the
            customer portal, any email and call communications, postal letter or
            any other accepted form under this policy. Data from third parties
            including but not limited to technical information, contact
            information, profile information. Through the website including the
            customer portal, any email and call communications, postal letter or
            any other accepted form under this policy. Any other relevant
            information as and when required Through the website including the
            customer portal, any email and call communications, postal letter or
            any other accepted form under this policy. 6. How Do You Use My
            Personal Data? Under the Data Protection Legislation, we must always
            have a lawful basis for using personal data. The following table
            describes how we may use your personal data, and our lawful bases for
            doing so: What We Do What Data We Use Our Lawful Basis Registering you
            on Our Site. Identity Information including but not limited to Name,
            title, Date of Birth, Gender. Contact information including but not
            limited to Address, email address, contact number. legitimate business
            interests so that we can operate as an efficient and effective
            business and provide you with best and most efficient services.
            Providing and managing your Account. Identity Information including
            but not limited to Name, title, Date of Birth, Gender. legitimate
            business interests so that we can operate as an efficient and
            effective Contact information including but not limited to Address,
            email address, contact number. Business information in case if you are
            a commercial customer, including but not limited business name,
            address, responsible person details like name, contact number, job
            title. Payment information including but not limited to card details,
            bank account number for the purposes of setting up Direct debit on
            your account. business and provide you with best and most efficient
            services. Providing and managing your access to Our Site. Profile
            information including but not limited to Preferences, interests, log
            in details, purchase history. legitimate business interests so that we
            can operate as an efficient and effective business and provide you
            with best and most efficient services. Personalising and tailoring
            your experience on Our Site. Profile information including but not
            limited to Preferences, interests, log in details, purchase history.
            Data from third parties including but not limited to technical
            information, contact information, profile information legitimate
            business interests so that we can operate as an efficient and
            effective business and provide you with best and most efficient
            services. Administering Our Site. Technical information including but
            not limited to IP address, Browser type and version, etc. legitimate
            business interests so that we can operate as an efficient and
            effective business and provide you with best and most efficient
            services. Administering our business. Technical information including
            but not limited to IP address, Browser type and version, etc.
            legitimate business interests so that we can operate as an efficient
            and effective business and provide you with best and most efficient
            services. Supplying our services to you. Identity Information
            including but not limited to Name, title, Date of Birth, Gender.
            Contact information including but not limited to Address, email
            address, contact number. legitimate business interests so that we can
            operate as an efficient and effective business and provide you with
            best and most efficient services. Managing payments for our services.
            Payment information including but not limited to card details, bank
            account number for the purposes legitimate business interests so that
            we can operate as an efficient and effective business and provide you
            of setting up Direct debit on your account. with best and most
            efficient services. Personalising and tailoring our services for you.
            Profile information including but not limited to Preferences,
            interests, log in details, purchase history. Data from third parties
            including but not limited to technical information, contact
            information, profile information. legitimate business interests so
            that we can operate as an efficient and effective business and provide
            you with best and most efficient services. Communicating with you.
            Identity Information including but not limited to Name, title, Date of
            Birth, Gender. Contact information including but not limited to
            Address, email address, contact number. legitimate business interests
            so that we can operate as an efficient and effective business and
            provide you with best and most efficient services. Supplying you with
            information by email OR post that you have opted-in- to (you may
            opt-out at any time by contacting us.) Identity Information including
            but not limited to Name, title, Date of Birth, Gender. Contact
            information including but not limited to Address, email address,
            contact number. legitimate business interests so that we can operate
            as an efficient and effective business and provide you with best and
            most efficient services. With your permission and/or where permitted
            by law, we may also use your personal data for marketing purposes,
            which may include contacting you by email OR telephone OR text message
            with information, news, and offers on our services. You will not be
            sent any unlawful marketing or spam. We will always work to fully
            protect your rights and comply with our obligations under the Data
            Protection Legislation and the Privacy and Electronic Communications
            (EC Directive) Regulations 2003, and you will always have the
            opportunity to opt-out. We will always obtain your express opt-in
            consent before sharing your personal data with third parties for
            marketing purposes and you will be able to opt-out at any time. Third
            Parties whose content appears on Our Site may use third-party Cookies,
            as detailed below in Part 14. Please refer to Part 14 for more
            information on controlling cookies. Please note that we do not control
            the activities of such third parties, nor the data that they collect
            and use themselves, and we advise you to check the privacy policies of
            any such third parties. We will only use your personal data for the
            purpose(s) for which it was originally collected unless we reasonably
            believe that another purpose is compatible with that or those original
            purpose(s) and need to use your personal data for that purpose. If we
            do use your personal data in this way and you wish us to explain how
            the new purpose is compatible with the original, please contact us
            using the details in Part 15. If we need to use your personal data for
            a purpose that is unrelated to, or incompatible with, the purpose(s)
            for which it was originally collected, we will inform you and explain
            the legal basis which allows us to do so. In some circumstances, where
            permitted or required by law, we may process your personal data
            without your knowledge or consent. This will only be done within the
            bounds of the Data Protection Legislation and your legal rights. 7.
            How Long Will You Keep My Personal Data? We retain your personal data
            for as long as it is necessary to fulfil the purposes for which it was
            collected under the Financial Conduct Authority (FCA) License
            Conditions, or longer if required to fulfil our legal and contractual
            obligations under the Financial Conduct Authority (FCA) License
            Conditions. After expiration of the retention period, your personal
            data will be deleted. If We are unable to completely delete the
            personal data from our systems, we will ensure that there are
            appropriate measures in place to secure the information and protect it
            from further us. 8. How and Where Do You Store or Transfer My Personal
            Data? We will only store your personal data in the UK. This means that
            it will be fully protected under the Data Protection Legislation. 9.
            Do You Share My Personal Data? We will not share any of your personal
            data with any third parties for any purposes, subject to the following
            exceptions. If we sell, transfer, or merge parts of our business or
            assets, your personal data may be transferred to a third party. Any
            new owner of our business may continue to use your personal data in
            the same way(s) that we have used it, as specified in this Privacy
            Policy. In some limited circumstances, we may be legally required to
            share certain personal data, which might include yours, if we are
            involved in legal proceedings or complying with legal obligations, a
            court order, or the instructions of a government authority. In some
            limited circumstances, we may be legally required to share certain
            personal data, which might include yours, if we are required by our
            Regulator by means of a Request for Information by them, or by any
            other means. 10. How Can I Control My Personal Data? 1. In addition to
            your rights under the Data Protection Legislation, set out in Part 5,
            when you submit personal data via Our Site, you may be given options
            to restrict our use of your personal data. We aim to give you strong
            controls on our use of your data for direct marketing purposes
            (including the ability to opt-out of receiving emails from us which
            you may do by unsubscribing using the links provided in our emails and
            by managing your Account). 2. You may also wish to sign up to one or
            more of the preference services operating in the UK: The Telephone
            Preference Service (“the TPS”), the Corporate Telephone Preference
            Service (“the CTPS”), and the Mailing Preference Service (“the MPS”).
            These may help to prevent you receiving unsolicited marketing. Please
            note, however, that these services will not prevent you from receiving
            marketing communications that you have consented to receiving. 11. Can
            I Withhold Information? You may access Our Site without providing any
            personal data at all. However, to use all features and functions
            available on Our Site you may be required to submit or allow for the
            collection of certain data. You may restrict our use of Cookies. For
            more information, see Part 14 and our Cookie Policy at
            www.carbonyte.io 12. How Can I Access My Personal Data? If you want to
            know what personal data we have about you, you can ask us for details
            of that personal data and for a copy of it (where any such personal
            data is held). This is known as a “subject access request”. All
            subject access requests should be made in writing and sent to the
            email or postal addresses shown in Part 15. To make this as easy as
            possible for you, a Subject Access Request Form is available for you
            to use. You do not have to use this form, but it is the easiest way to
            tell us everything we need to know to respond to your request as
            quickly as possible. There is not normally any charge for a subject
            access request. If your request is ‘manifestly unfounded or excessive’
            (for example, if you make repetitive requests) a fee may be charged to
            cover our administrative costs in responding. We will respond to your
            subject access request within a period of 30 days and, in any case,
            not more than 60 days of receiving it if it is a complicated request.
            Normally, we aim to provide a complete response, including a copy of
            your personal data within that time. In some cases, however,
            particularly if your request is more complex, more time may be
            required up to a maximum of three months from the date we receive your
            request. You will be kept fully informed of our progress. 13. How Do
            You Use Cookies? Our Site may place and access certain first-party
            Cookies on your computer or device. First-party Cookies are those
            placed directly by us and are used only by us. We use Cookies to
            facilitate and improve your experience of Our Site and to provide and
            improve our services. By using Our Site you may also receive certain
            third-party Cookies on your computer or device. Third-party Cookies
            are those placed by websites, services, and/or parties other than us.
            Third-party Cookies are used on Our Site for promotions and marketing.
            In addition, Our Site uses analytics services provided by Google
            analytics, which also use Cookies. Website analytics refers to a set
            of tools used to collect and analyse usage statistics, enabling us to
            better understand how people use Our Site. For more details, please
            refer to our Cookie Policy at www.carbonyte.io 14. How Do I Contact
            You? To contact us about anything to do with your personal data and
            data protection, including to make a subject access request, please
            use the following details Email address: hello@carbonyte.io Postal
            address: 83 Integer House Bre Innovation, Campus, Bucknalls Lane,
            Watford, Hertfordshire, England, WD25 9XX. Phone Number: 02081766108
            15. Changes to this Privacy Policy We may change this Privacy Policy
            from time to time. This may be necessary, for example, if the law
            changes, or if we change our business in a way that affects personal
            data protection. Any changes will be immediately posted on Our Site
            and you will be deemed to have accepted the terms of the Privacy
            Policy on your first use of Our Site following the alterations. We
            recommend that you check this page regularly to keep to date. This
            Privacy Policy was last updated on (12/12/2022)
          </Text>
          <Button title="Accept" onPress={() => accept()} />
        </View>
      </ScrollView>
  );
};

const styles = StyleSheet.create({
  historyTypo: {
    textAlign: "center",
    color: GlobalStyles.Color.black,
    fontWeight: "700",
    fontSize: 30,
  },
  rounded: {
    borderRadius: 15,
  },

  myCards1: {
    marginTop: "6%",
    textAlign: "center",
  },
  totalWalletBalanceContainer: {
    marginTop: "2.5%",
    width: "80%",
    backgroundColor: "#FFFFFF",

    marginLeft: "10%",
    borderRadius: 15,
    flexDirection: "column",
    padding: "2.5%",
    justifyContent: "center",
    marginBottom: "14%",
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
    textAlign: "center",
    paddingRight: GlobalStyles.Padding.padding_md,
    paddingLeft: GlobalStyles.Padding.padding_md,
    shadowOpacity: 1,
  },
});

export default PrivacyPolicy;
