"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[6102],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>d});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),p=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},u=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),c=p(a),h=r,d=c["".concat(s,".").concat(h)]||c[h]||m[h]||o;return a?n.createElement(d,i(i({ref:t},u),{},{components:a})):n.createElement(d,i({ref:t},u))}));function d(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=h;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[c]="string"==typeof e?e:r,i[1]=l;for(var p=2;p<o;p++)i[p]=a[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}h.displayName="MDXCreateElement"},9680:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var n=a(7462),r=(a(7294),a(3905));const o={slug:"Data Security in DevOps",title:"Data Security without DevOps Disruption",authors:"hal",tags:["data-encryption","devops","data-security"]},i="Data Security without DevOps Disruption!",l={permalink:"/ciphertrust/blog/Data Security in DevOps",editUrl:"https://github.com/thalesgroup/ThalesGroup.github.io/tree/main/ciphertrust/blog/2023-04-18-data-security-without-DevOps-disruption.md",source:"@site/blog/2023-04-18-data-security-without-DevOps-disruption.md",title:"Data Security without DevOps Disruption",description:'Note - this article was originally posted on Hal\'s blog on March 24, 2023 under the title "CipherTrust Transparent Encryption."',date:"2023-04-18T00:00:00.000Z",formattedDate:"April 18, 2023",tags:[{label:"data-encryption",permalink:"/ciphertrust/blog/tags/data-encryption"},{label:"devops",permalink:"/ciphertrust/blog/tags/devops"},{label:"data-security",permalink:"/ciphertrust/blog/tags/data-security"}],readingTime:7.465,hasTruncateMarker:!1,authors:[{name:"Hal Yaman (B.Sc)",title:"Sales Engineering Manager @ Thales",imageURL:"https://i0.wp.com/cloudoasis.com.au/wp-content/uploads/2019/09/IMG_0054-30x40.jpg?resize=225%2C300&ssl=1",key:"hal"}],frontMatter:{slug:"Data Security in DevOps",title:"Data Security without DevOps Disruption",authors:"hal",tags:["data-encryption","devops","data-security"]},nextItem:{title:"A Guide to Picking the Right Key Manager for Your Org",permalink:"/ciphertrust/blog/choosing-a-key-manager"}},s={authorsImageUrls:[void 0]},p=[{value:"Introduction",id:"introduction",level:3},{value:"Scenario",id:"scenario",level:3},{value:"The Challenge",id:"the-challenge",level:3},{value:"Solution",id:"solution",level:3},{value:"Implementation",id:"implementation",level:3},{value:"CipherTrust User and Domain",id:"ciphertrust-user-and-domain",level:3},{value:"Create a Key",id:"create-a-key",level:3},{value:"Install the Transparent Encryption Agent",id:"install-the-transparent-encryption-agent",level:3},{value:"Create GuardPoint",id:"create-guardpoint",level:3},{value:"Summary",id:"summary",level:3}],u={toc:p},c="wrapper";function m(e){let{components:t,...a}=e;return(0,r.kt)(c,(0,n.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,'Note - this article was originally posted on Hal\'s blog on March 24, 2023 under the title "CipherTrust Transparent Encryption."'),(0,r.kt)("p",null,"In many organisations, IT departments are sometimes required to delegate some of their responsibilities to other teams, but at the same time, also required to keep control of the company security. Wait! In the world of security, can data security become a delegated responsibility? If that is a yes, then how?"),(0,r.kt)("p",null,"Five years ago, I was pulled into the DevOps team culture and mindset. Since then, I have been lucky enough to manage the building of several DevOps teams. One of the many attributes of the DevOps culture is their autonomy. DevOps teams build in a way that can execute a task from end to end. The teams build up while working through the requirements and functions of the project or product, and with this knowledge, go on to find the most effective way of breaking the silos encountered by traditional teams."),(0,r.kt)("h3",{id:"introduction"},"Introduction"),(0,r.kt)("p",null,"The previous paragraph described DevOps as being about speed of delivery and autonomy, which also requires the team to access resources that are not always managed within the team; Active Directory, file shares, and so on are examples of these resources. So, how can you keep your DevOps team focused, but not affect the company processes?"),(0,r.kt)("h3",{id:"scenario"},"Scenario"),(0,r.kt)("p",null,"Let\u2019s put the DevOps information above into context using a real scenario I came across last week with one of the teams I help to build two years ago."),(0,r.kt)("p",null,"Company A was working on a confidential application for a client; the client was concerned that a breach of their code data would expose their intellectual property to competitors, or would become general knowledge."),(0,r.kt)("p",null,"The client asked that the following hierarchy be implemented to help mitigate their risk:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Each Team has it own encrypted directory"),(0,r.kt)("li",{parentName:"ul"},"Only the specific team can access and read the code"),(0,r.kt)("li",{parentName:"ul"},"Admin can manage the files within all the directories, but cannot read the code")),(0,r.kt)("h3",{id:"the-challenge"},"The Challenge"),(0,r.kt)("p",null,"From those requirements, Company A faces the following challenges:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"How to implement access management and encryption at the same time"),(0,r.kt)("li",{parentName:"ul"},"How to avoid disruption of the DevOps team concept"),(0,r.kt)("li",{parentName:"ul"},"Delegate security manageability to the DevOps team without affecting the wider company policy")),(0,r.kt)("h3",{id:"solution"},"Solution"),(0,r.kt)("p",null,"Access management can be controlled using the company Active Directory; but doing so will complicate the workflow of the DevOps team and will slow the delivery. At the same time, Active Directory and Group Policies do not offer encryption, so the IT department turned to Thales CipherTrust Manager to solve this challenge."),(0,r.kt)("h3",{id:"implementation"},"Implementation"),(0,r.kt)("p",null,"To achieve all the security requirements, Company A decided to use CipherTrust Manager with the Transparent Encryption feature. Using Transparent Encryption Live Data Transformation (LDT), Company A can delegate the code data management to the DevOps team, but at the same time, encrypt the data and also keep Admin in control of managing and backing up the code files without compromising security."),(0,r.kt)("p",null,"So let\u2019s learn how company A uses CipherTrust Manager to keep each team in control."),(0,r.kt)("h3",{id:"ciphertrust-user-and-domain"},"CipherTrust User and Domain"),(0,r.kt)("p",null,"To delegate responsibilities, the Company A IT team was looking for a multi-tenanted system that can help the department to easily create and assign multiple teams to manage their own security requirements, while remaining isolated from each other. This requirement can be met with Thales CTM by creating a Domain to allow the DevOps team to manage their access control and security needs."),(0,r.kt)("p",null,"To create a Domain, you first create a user by browsing to ",(0,r.kt)("strong",{parentName:"p"},"\u201cAccess Management -> Users -> Add User\u201c:"),"\n",(0,r.kt)("img",{parentName:"p",src:"https://ThalesGroup.github.io%5Cciphertrust%5Cstatic%5Cimg%5Cadduser.webp",alt:"Add_User"})),(0,r.kt)("p",null,"After you have added the user, apply the user to ",(0,r.kt)("strong",{parentName:"p"},"CTE Admins and Clients")," by going to ",(0,r.kt)("strong",{parentName:"p"},"Edit/view")," the user. Under ",(0,r.kt)("strong",{parentName:"p"},"Groups"),", Search ",(0,r.kt)("strong",{parentName:"p"},"CTE")," and add to ",(0,r.kt)("strong",{parentName:"p"},"Admin/Client"),":\n",(0,r.kt)("img",{parentName:"p",src:"https://ThalesGroup.github.io%5Cciphertrust%5Cstatic%5Cimg%5CCTE_Groups.webp",alt:"CTE_Groups"})),(0,r.kt)("p",null,"The next step is to browse to \u201c",(0,r.kt)("strong",{parentName:"p"},"Admin Settings -> Domains"),"\u201d and click \u201c",(0,r.kt)("strong",{parentName:"p"},"Add Domain"),"\u201c:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Name: DevOps"),(0,r.kt)("li",{parentName:"ul"},"Admins: devops (the user you just created)"),(0,r.kt)("li",{parentName:"ul"},"Choose the default CA"),(0,r.kt)("li",{parentName:"ul"},"Save\n",(0,r.kt)("img",{parentName:"li",src:"https://ThalesGroup.github.io%5Cciphertrust%5Cstatic%5Cimg%5CAdd_Domain.webp",alt:"Add_Domain"}))),(0,r.kt)("p",null,"Now you are ready to logout and then login with the user you just created. After logging in again, change the domain to the new domain at the top right corner \u2013 ",(0,r.kt)("strong",{parentName:"p"},"Switch Domains"),":\n",(0,r.kt)("img",{parentName:"p",src:"https://ThalesGroup.github.io%5Cciphertrust%5Cstatic%5Cimg%5Cswitchdomains.webp",alt:"Switch_Domains"})),(0,r.kt)("h3",{id:"create-a-key"},"Create a Key"),(0,r.kt)("p",null,"To be able to encrypt the data, we must create a key. Creating a key is very simple with CipherTrust Manager, all you need is to browse to the keys at the left menu and press the \u201c",(0,r.kt)("strong",{parentName:"p"},"Add key"),"\u201c. The next step is to provide a Key name: for example we will create a key name: ",(0,r.kt)("strong",{parentName:"p"},"LDT_Key")," and then press\u201d",(0,r.kt)("strong",{parentName:"p"},"Add Key"),"\u201d to save it."),(0,r.kt)("p",null,"At the next window, expand the \u201c",(0,r.kt)("strong",{parentName:"p"},"Key Access"),"\u201d option. On the search bar, type \u201c",(0,r.kt)("strong",{parentName:"p"},"CTE"),"\u201d with show all groups, then tick the check boxes for all the Admins and Clients permissions. Press ",(0,r.kt)("strong",{parentName:"p"},"Update"),":\n",(0,r.kt)("img",{parentName:"p",src:"https://ThalesGroup.github.io%5Cciphertrust%5Cstatic%5Cimg%5Ckeyaccess.webp",alt:"Key_Access"})),(0,r.kt)("p",null,"Next, browse to \u201c",(0,r.kt)("strong",{parentName:"p"},"Key Labels -> CTE"),"\u201c. Choose ",(0,r.kt)("strong",{parentName:"p"},"CBC")," from the drop down menu\u201d. Press ",(0,r.kt)("strong",{parentName:"p"},"Update"),":\n",(0,r.kt)("img",{parentName:"p",src:"https://ThalesGroup.github.io%5Cciphertrust%5Cstatic%5Cimg%5Ckeylabel.webp",alt:"Key_Label"})),(0,r.kt)("h3",{id:"install-the-transparent-encryption-agent"},"Install the Transparent Encryption Agent"),(0,r.kt)("p",null,"To be able to install and use the Transparent Encryption feature, you must install an agent. The first step is to create a \u201c",(0,r.kt)("strong",{parentName:"p"},"Registration Token"),"\u201c; this will be used during the agent installation to add the agent to the CipherTrust Manager. To create the Token, browse to \u201c",(0,r.kt)("strong",{parentName:"p"},"Access Management -> Registration Tokens"),"\u201d and click on \u201c",(0,r.kt)("strong",{parentName:"p"},"Add Registration Token"),"\u201d and complete the following entries:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Provide a Name Prefix: on my case DevOps_Token"),(0,r.kt)("li",{parentName:"ul"},"Local CA: choose the default"),(0,r.kt)("li",{parentName:"ul"},"Create a token: Base64\n",(0,r.kt)("img",{parentName:"li",src:"https://ThalesGroup.github.io%5Cciphertrust%5Cstatic%5Cimg%5CCreatetoken.webp",alt:"Create_Token"}))),(0,r.kt)("p",null,"Copy the token; then go to your Windows or Linux machine to run the agent installation. During the installation, you will be asked to provide:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Componant to register: File System"),(0,r.kt)("li",{parentName:"ul"},"CipherTrust Manager IP/Hostname"),(0,r.kt)("li",{parentName:"ul"},"Enable LDT Feature (FS agent only)"),(0,r.kt)("li",{parentName:"ul"},"Token")),(0,r.kt)("p",null,"After the installation is completed and you have successfully rebooted, you will be able to see the registered client on your CipherTrust Manager under: ",(0,r.kt)("strong",{parentName:"p"},"Transparent Encryption -> Clients"),":\n",(0,r.kt)("img",{parentName:"p",src:"https://ThalesGroup.github.io%5Cciphertrust%5Cstatic%5Cimg%5CCTE_Client.webp",alt:"CTE_Client"})),(0,r.kt)("p",null,"Creating Policies:"),(0,r.kt)("p",null,"After deploying the agent and connecting it to the CTM, we can focus on creating our polices. As we have four different teams in our example, lets create four policies as shown below:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"DevOps_Admin_Team: Access and manage files and directories but can read files content"),(0,r.kt)("li",{parentName:"ul"},"DevOps_Dev_Team: access only Development directory"),(0,r.kt)("li",{parentName:"ul"},"DevOps_Ops_Policy: access only operation directory"),(0,r.kt)("li",{parentName:"ul"},"DevOps_QA_Team: access only QA diretory")),(0,r.kt)("p",null,"Let\u2019s create first policy, the ",(0,r.kt)("strong",{parentName:"p"},"DevOps_Admin_Team")," policy by browsing to \u201c",(0,r.kt)("strong",{parentName:"p"},"Transparent Encryption -> Policies -> Create policy"),"\u201c:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Name: DevOps_Admin_Team"),(0,r.kt)("li",{parentName:"ul"},"Policy Type: Live Data Transformation"),(0,r.kt)("li",{parentName:"ul"},"Security Rules: + Create Security Rule",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"User Set \u2013 Select \u2013 Create User Set:",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Name: Admin_Team"),(0,r.kt)("li",{parentName:"ul"},"Create User",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Agent \u2013 select Agent"),(0,r.kt)("li",{parentName:"ul"},"User Type: LDAP"),(0,r.kt)("li",{parentName:"ul"},"Member Choice: User or Group (on my case I choose group)"),(0,r.kt)("li",{parentName:"ul"},"gname: group name"))),(0,r.kt)("li",{parentName:"ul"},"Note: repeat the above steps to create all the users for each group (i.e: Admin, Dev, Ops and QA team. on each time you need to create a policy you can easily choose the appropriate group or user)"))),(0,r.kt)("li",{parentName:"ul"},"Action \u2013 Select",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"All_Ops"))),(0,r.kt)("li",{parentName:"ul"},"Effect \u2013 Select",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"select permit"),(0,r.kt)("li",{parentName:"ul"},"ApplyKey only of other group but not Admin group as the admin will not be able to unencrypt the data so a key not required"))))),(0,r.kt)("li",{parentName:"ul"},"Key Rules: Create key Rule",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Current Key Name: Select \u2013 \u201cclear_key\u201d"),(0,r.kt)("li",{parentName:"ul"},"Tranformation Key Name: Select \u2013 LTD_Key"),(0,r.kt)("li",{parentName:"ul"},"Add"))),(0,r.kt)("li",{parentName:"ul"},"Next \u2013 Confirmation \u2013 Save")),(0,r.kt)("p",null,"Note: repeat the above steps for all the groups"),(0,r.kt)("h3",{id:"create-guardpoint"},"Create GuardPoint"),(0,r.kt)("p",null,"Our last step is to apply these policies to our folders or client. In this example, I will be using a Windows client. So let\u2019s get started:"),(0,r.kt)("p",null,"As we have different teams and policies, each with different access, we must create a different client ",(0,r.kt)("strong",{parentName:"p"},"GuardPoint"),". Browse to ",(0,r.kt)("strong",{parentName:"p"},"Transparent Encryption -> Clients"),". Choose the client \u2013 \u201c",(0,r.kt)("strong",{parentName:"p"},"Create GuardPoint"),"\u201c:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Select Policy: choose DevOps_QA_Team"),(0,r.kt)("li",{parentName:"ul"},"Path: browse to the QA directory and select \u201cselect Path\u201d"),(0,r.kt)("li",{parentName:"ul"},"Create")),(0,r.kt)("p",null,"Note: repeat for each team and select the appropriate directory\n",(0,r.kt)("img",{parentName:"p",src:"https://ThalesGroup.github.io%5Cciphertrust%5Cstatic%5Cimg%5Ccreateguardpoint.webp",alt:"Create_GuardPoint"})),(0,r.kt)("p",null,"After all the directories are assigned to a group \u2013 on each GuardPoint \u2013 press the policy name and add the right action for each team as shown below; for example:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Development_Team can access, and apply key"),(0,r.kt)("li",{parentName:"ul"},"Operation_Team no access"),(0,r.kt)("li",{parentName:"ul"},"Admin_Team access but no key\n",(0,r.kt)("img",{parentName:"li",src:"https://ThalesGroup.github.io%5Cciphertrust%5Cstatic%5Cimg%5Cdevops_permission_group.webp",alt:"DevOps_Permission_Group"}))),(0,r.kt)("p",null,"Note: repeat for all other GuardPoints"),(0,r.kt)("h3",{id:"summary"},"Summary"),(0,r.kt)("p",null,"After Following the steps described above, you can check that your new configuration works by accessing your Windows machine with a different user; for example, QA, dev, ops or admin, then check to see if you can access or read the files. The above steps are a little involved, more than Active Directory Group Policies; but with CipherTrust you also get the encryption aspect with a full and controlled separation of responsibilities."),(0,r.kt)("p",null,"Company A was able to achieve their client\u2019s security request; but at the same time, did not affect the team processes, autonomy, and control. At both levels, Company A IT and DevOps, it was a win \u2013 win situation."))}m.isMDXComponent=!0}}]);