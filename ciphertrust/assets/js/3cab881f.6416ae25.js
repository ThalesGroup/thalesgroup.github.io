"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[989],{2872:(e,t,n)=>{n.d(t,{Z:()=>a});var s=n(7294),r=n(9960);function a(){return s.createElement(s.Fragment,null,s.createElement("hr",null),s.createElement("p",{className:"text-md"},"For any questions or to request a tutorial check out our ",s.createElement(r.Z,{href:"https://supportportal.thalesgroup.com/community"},s.createElement("span",{className:"text-blue-600"},"community forum")),"."))}},7200:(e,t,n)=>{n.d(t,{Z:()=>p});var s=n(7294),r=n(5697),a=n.n(r),i=n(7373),o=n(9960);const c=e=>{let{href:t}=e;return s.createElement("div",null,s.createElement(o.Z,{href:t},s.createElement("button",{style:{backgroundColor:"#171515"},className:"p-2 my-4 rounded-md border-none cursor-pointer text-white"},"GitHub ",s.createElement(i.RrF,{className:"text-white"}))))},l=e=>{let{href:t}=e;return s.createElement("div",null,s.createElement(o.Z,{href:t},s.createElement("button",{className:"p-2 my-4 rounded-md border-none cursor-pointer"},"View Demo ",s.createElement(i.mGl,null))))},u=e=>{let{href:t,demourl:n}=e;return s.createElement("div",{className:"flex flex-row justify-between"},t?s.createElement(c,{href:t}):s.createElement(s.Fragment,null),n?s.createElement(l,{href:n}):s.createElement(s.Fragment,null))};u.propTypes={href:a().string.isRequired,demourl:a().string};const p=u},7148:(e,t,n)=>{n.d(t,{Z:()=>c});var s=n(7294),r=n(5697),a=n.n(r),i=n(7200);const o=e=>{let{embedId:t,github:n,demourl:r}=e;return s.createElement(s.Fragment,null,s.createElement("div",{className:"video-responsive"},s.createElement("iframe",{width:"853",height:"480",src:`https://www.youtube.com/embed/${t}`,frameBorder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0,title:"Embedded youtube"})),s.createElement(i.Z,{href:n,demourl:r}))};o.propTypes={embedId:a().string.isRequired};const c=o},9700:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>c,default:()=>d,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var s=n(7462),r=(n(7294),n(3905)),a=n(7148),i=n(2872);const o={sidebar_position:2},c="Encrypt RDS with AWS KMS",l={unversionedId:"key-manager/aws-kms",id:"key-manager/aws-kms",title:"Encrypt RDS with AWS KMS",description:"Pre-requisites",source:"@site/docs/key-manager/aws-kms.md",sourceDirName:"key-manager",slug:"/key-manager/aws-kms",permalink:"/ciphertrust/docs/key-manager/aws-kms",draft:!1,editUrl:"https://github.com/thalesgroup/ThalesGroup.github.io/tree/main/ciphertrust/docs/key-manager/aws-kms.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Client Side Object Storage Encryption for S3",permalink:"/ciphertrust/docs/key-manager/cs-object-storage"},next:{title:"Connectors",permalink:"/ciphertrust/docs/category/connectors"}},u={},p=[{value:"Pre-requisites",id:"pre-requisites",level:2},{value:"Goals",id:"goals",level:3},{value:"Step 1 - Create IAM User Policies",id:"step-1---create-iam-user-policies",level:3},{value:"Step 2 - Setup CipherTrust &lt;-&gt; AWS connection",id:"step-2---setup-ciphertrust---aws-connection",level:3},{value:"Step 3 - Create keys using new CipherTrust connection",id:"step-3---create-keys-using-new-ciphertrust-connection",level:3},{value:"(Optional) Step 4 - Encrypt AWS S3 bucket with the keys from CipherTrust",id:"optional-step-4---encrypt-aws-s3-bucket-with-the-keys-from-ciphertrust",level:3}],m={toc:p};function d(e){let{components:t,...o}=e;return(0,r.kt)("wrapper",(0,s.Z)({},m,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"encrypt-rds-with-aws-kms"},"Encrypt RDS with AWS KMS"),(0,r.kt)(a.Z,{embedId:"9Cs9s7DpJFU",mdxType:"YoutubeEmbed"}),(0,r.kt)("h2",{id:"pre-requisites"},"Pre-requisites"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"../category/deploy-ciphertrust-platform"},"Deployed Ciphertrust Manager instance"))),(0,r.kt)("h3",{id:"goals"},"Goals"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Setup CipherTrust Cloud Key Manager (CCKM) with AWS KMS"),(0,r.kt)("li",{parentName:"ul"},"Create Keys on CipherTrust Manager"),(0,r.kt)("li",{parentName:"ul"},"Encrypt RDS and S3 with the secure external key manager - CCKM")),(0,r.kt)("h3",{id:"step-1---create-iam-user-policies"},"Step 1 - Create IAM User Policies"),(0,r.kt)("p",null,"Select the IAM user you want to use to connect with CipherTrust Manager.\n",(0,r.kt)("img",{alt:"Select IAM user",src:n(2537).Z,width:"1322",height:"446"})),(0,r.kt)("p",null,"Go to the permissions tab and create a new policy with the following permissions."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="AWS IAM Permission JSON"',title:'"AWS',IAM:!0,Permission:!0,'JSON"':!0},'{\n    "Version": "2012-10-17",\n    "Statement": [\n        {\n            "Effect": "Allow",\n            "Action": [\n                "kms:DisableKey",\n                "kms:ListAliases",\n                "kms:ListKeyPolicies",\n                "kms:ListKeys",\n                "kms:ListResourceTags",\n                "kms:DescribeKey",\n                "kms:GetKeyPolicy",\n                "kms:GetKeyRotationStatus",\n                "kms:GetParametersForImport",\n                "kms:GetPublicKey",\n                "kms:TagResource",\n                "kms:UntagResource",\n                "kms:CancelKeyDeletion",\n                "kms:CreateAlias",\n                "kms:CreateKey",\n                "kms:DeleteAlias",\n                "kms:DeleteImportedKeyMaterial",\n                "kms:DisableKey",\n                "kms:DisableKeyRotation",\n                "kms:EnableKey",\n                "kms:EnableKeyRotation",\n                "kms:ImportKeyMaterial",\n                "kms:ScheduleKeyDeletion",\n                "kms:UpdateAlias",\n                "kms:UpdateKeyDescription",\n                "kms:PutKeyPolicy",\n                "iam:ListGroups",\n                "iam:ListRoles",\n                "iam:ListUsers",\n                "logs:DescribeLogGroups",\n                "logs:FilterLogEvents",\n                "ec2:DescribeRegions"\n            ],\n            "Resource": "*"\n        }\n    ]\n}\n')),(0,r.kt)("p",null,"Create security credentials for the user you just gave permissions to. More information on how to get security credentials of an IAM user ",(0,r.kt)("a",{parentName:"p",href:"https://docs.aws.amazon.com/IAM/latest/UserGuide/id_credentials_access-keys.html"},"here"),"."),(0,r.kt)("h3",{id:"step-2---setup-ciphertrust---aws-connection"},"Step 2 - Setup CipherTrust <-> AWS connection"),(0,r.kt)("p",null,'Now in CipherTrust Manager. Go to "Access Management -> Connections -> + New Connection". Click on the button to create a new connection.'),(0,r.kt)("p",null,"Select the ",(0,r.kt)("inlineCode",{parentName:"p"},"AWS")," option in the given choices.\n",(0,r.kt)("img",{alt:"AWS CipherTrust Connection",src:n(7030).Z,width:"1083",height:"580"})),(0,r.kt)("p",null,"Add your security credentials in to the form and click on ",(0,r.kt)("inlineCode",{parentName:"p"},"Test Connection")," to make sure the credentials provided work.\n",(0,r.kt)("img",{alt:"Add AWS Credentials in",src:n(7476).Z,width:"1083",height:"580"})),(0,r.kt)("h3",{id:"step-3---create-keys-using-new-ciphertrust-connection"},"Step 3 - Create keys using new CipherTrust connection"),(0,r.kt)("p",null,"Under the add products section select the ",(0,r.kt)("inlineCode",{parentName:"p"},"Cloud Key Manager")," option to enable CipherTrust Cloud Key Manager features to apply to your new connection.\n",(0,r.kt)("img",{alt:"Cloud Key Manager Location Information",src:n(9503).Z,width:"2013",height:"890"})),(0,r.kt)("p",null,"Under the ",(0,r.kt)("inlineCode",{parentName:"p"},"containers")," tab on the left panel, click on the ",(0,r.kt)("inlineCode",{parentName:"p"},"AWS Accounts")," button and add a new ",(0,r.kt)("inlineCode",{parentName:"p"},"AWS Account"),". Now select the AWS connection we just created in the drop down and select the regions you want this key to be accessible.\n",(0,r.kt)("img",{alt:"Add CCKM AWS Account",src:n(5881).Z,width:"836",height:"757"})),(0,r.kt)("p",null,"You should have successfully added your KMS account to CipherTrust!"),(0,r.kt)("p",null,"Now, head over to ",(0,r.kt)("inlineCode",{parentName:"p"},"Cloud Keys")," -> ",(0,r.kt)("inlineCode",{parentName:"p"},"AWS")," to create a new key. Click on create key and walk through the options to create the type of key you need for your use-case. \\\nOnce you've successfully created the key, you should see a screen similar to this.\n",(0,r.kt)("img",{alt:"CCKM AWS success key creation image",src:n(2479).Z,width:"1166",height:"712"})),(0,r.kt)("p",null,"That's it, now you can use this newly created key in any AWS services."),(0,r.kt)("h3",{id:"optional-step-4---encrypt-aws-s3-bucket-with-the-keys-from-ciphertrust"},"(Optional) Step 4 - Encrypt AWS S3 bucket with the keys from CipherTrust"),(0,r.kt)("p",null,"When you create a new AWS S3 bucket on the AWS console, under ",(0,r.kt)("inlineCode",{parentName:"p"},"Encryption")," configuration, you should see the new key we just created on CipherTrust\n",(0,r.kt)("img",{alt:"Select Encryption Key AWS S3",src:n(4997).Z,width:"1166",height:"712"})),(0,r.kt)("p",null,"That's it, now every file uploaded to the newly created S3 bucket will be encrypted with our key managed on CipherTrust Manager."),(0,r.kt)(i.Z,{mdxType:"TutorialFooter"}))}d.isMDXComponent=!0},5881:(e,t,n)=>{n.d(t,{Z:()=>s});const s=n.p+"assets/images/add-cckm-aws-account-options-02a31c51b2b24cbb918023ac6a15c6ec.png"},7030:(e,t,n)=>{n.d(t,{Z:()=>s});const s=n.p+"assets/images/connection-aws-setup-1f919312158393cc3ce6a5f38576713d.png"},4997:(e,t,n)=>{n.d(t,{Z:()=>s});const s=n.p+"assets/images/s3-select-encryption-key-f4566fcfdb3a01353a78b5a3608c276b.png"},9503:(e,t,n)=>{n.d(t,{Z:()=>s});const s=n.p+"assets/images/select-cckm-click-568878f5fb1e0c919e0d92070c50565d.png"},2537:(e,t,n)=>{n.d(t,{Z:()=>s});const s=n.p+"assets/images/select-user-aws-iam-05f1ced3f602760b55e7be964b87b236.png"},7476:(e,t,n)=>{n.d(t,{Z:()=>s});const s=n.p+"assets/images/setup-iam-creds-c6e6d3779bb0b9f3146825105fe09204.png"},2479:(e,t,n)=>{n.d(t,{Z:()=>s});const s=n.p+"assets/images/success-key-creation-aws-cckm-7241f304c5176219a62f49bab52ae09f.png"}}]);