(this["webpackJsonpfanance-homepage"]=this["webpackJsonpfanance-homepage"]||[]).push([[0],{131:function(e,t,r){},191:function(e,t,r){},192:function(e,t,r){},262:function(e,t,r){},277:function(e,t,r){},292:function(e,t,r){"use strict";r.r(t);var n=r(1),c=r(0),a=r.n(c),l=r(34),s=r.n(l),i=(r(191),r(63)),o=(r(131),r(313)),d=r(184),b=r(101),j=r(68),h=r(179),x=r(315),u=r(298),p=r(316),f=r(317),g=(r(192),r(46)),O=r(319),m=r(320),y=r(112);y.a.initializeApp({apiKey:"AIzaSyAQqsi0kEPF8WUaDHh28OgQpcsyRIgEWaU",authDomain:"fanance-club-landing-page.firebaseapp.com",projectId:"fanance-club-landing-page",storageBucket:"fanance-club-landing-page.appspot.com",messagingSenderId:"1010747472200",appId:"1:1010747472200:web:b2b35829394454a3381b7d",measurementId:"G-VJE58H7HTE"}),y.a.analytics(),y.a.auth();var k=y.a,w=r(137),C=r(299),A=r(300),v=r(301),F=r(302),S=r(303),T=r(304),P=r(305),N=r(306),E=r(307),R=r(308),I=r(309),W=r(310),B=r(297),z=r(314),L=B.a.Header,D=function(){return Object(n.jsxs)(L,{style:{zIndex:1,width:"100%",backgroundColor:"transparent"},children:[Object(n.jsx)("img",{src:"logo-v3.png",style:{float:"left",height:"100%"},alt:"logo",className:"large-screen-only"}),Object(n.jsxs)(z.a,{mode:"horizontal",style:{float:"right",backgroundColor:"transparent",height:"64px",borderColor:"none"},children:[Object(n.jsx)(z.a.Item,{children:Object(n.jsx)(g.a,{exact:!0,path:"/team",children:Object(n.jsx)("a",{href:"/",style:{color:"black",fontWeight:"bold"},children:"HOME"})})},"home"),Object(n.jsx)(z.a.Item,{children:Object(n.jsx)("a",{href:"/whitepaper.pdf",target:"_blank",rel:"noopener noreferrer",style:{color:"black",fontWeight:"bold"},children:"WHITEPAPER"})},"whitepaper"),Object(n.jsx)(z.a.Item,{children:Object(n.jsx)("a",{href:"https://fanance-club.gitbook.io/fanance-club/lite-paper",target:"_blank",rel:"noopener noreferrer",style:{color:"black",fontWeight:"bold"},children:"LITEPAPER"})},"litepaper"),Object(n.jsx)(z.a.Item,{children:Object(n.jsx)("a",{href:"https://fanance-club.gitbook.io/fanance-club/faqs",target:"_blank",rel:"noopener noreferrer",style:{color:"black",fontWeight:"bold"},children:"FAQs"})},"FAQ")]})]})},M=o.a.Title;var _=function(e){var t=Object(c.useState)(!1),r=Object(i.a)(t,2),a=r[0],l=r[1],s=Object(c.useState)(!1),o=Object(i.a)(s,2),y=o[0],B=o[1],z=Object(c.useState)(!1),L=Object(i.a)(z,2),_=L[0],U=L[1],Q=Object(c.useState)(!1),$=Object(i.a)(Q,2),G=$[0],H=$[1],q=Object(c.useState)(""),J=Object(i.a)(q,2),V=J[0],X=J[1],Y=Object(c.useState)(""),K=Object(i.a)(Y,2),Z=K[0],ee=K[1],te=Object(c.useState)(null),re=Object(i.a)(te,2),ne=re[0],ce=re[1];Object(c.useEffect)((function(){var t=k.firestore();e.user&&t.collection("users").doc(e.user.uid).get().then((function(e){e.exists?ce(e.data()):console.log("No such document!")})).catch((function(e){console.log("Error getting document:",e)}))}),[k.auth(),e.user]);var ae=function(){k.auth().signOut().then((function(){ce(null),B(!1),U(!1),H(!1),X(""),ee("")}))},le=new URLSearchParams(Object(g.f)().search);return Object(n.jsxs)("div",{style:{backgroundColor:"white",backgroundSize:"cover",backgroundPosition:"bottom"},children:[Object(n.jsx)(D,{}),Object(n.jsx)("div",{style:{textAlign:"center"},children:Object(n.jsx)("img",{src:"logo-v3.png",style:{width:"70%",textAlign:"center"},alt:"logo",className:"small-screen-only"})}),Object(n.jsxs)(b.a,{justify:"center",align:"middle",style:{display:"flexbox",marginTop:"65px"},className:"hero-height",children:[Object(n.jsx)(j.a,{xs:24,sm:24,md:16,lg:16,xl:16,children:Object(n.jsxs)("div",{className:"title",children:[Object(n.jsx)("h1",{style:{fontWeight:"bolder",margin:"0px 0px 20px"},className:"hero-title-1",children:"Sports Player's DEX"}),Object(n.jsxs)("h4",{style:{color:"black",textAlign:"center",fontWeight:"bold"},className:"hero-title-2",children:[Object(n.jsxs)("span",{className:"large-screen-only",children:[Object(n.jsx)("s",{style:{fontSize:"20px",color:"#263238"},children:"Stop being a Fantasy Player"}),Object(n.jsx)("br",{}),Object(n.jsx)("span",{style:{fontSize:"30px",color:"#263238"},children:"Start being an Owner"}),Object(n.jsx)("br",{}),Object(n.jsx)("br",{})]}),Object(n.jsx)("span",{style:{color:"#002c9c"},children:"Buy and Sell your Favourite Sports Player\u2019s Stocks"}),Object(n.jsx)("br",{}),Object(n.jsx)("br",{})]}),Object(n.jsx)(j.a,{xs:24,sm:24,md:0,children:Object(n.jsx)("img",{className:"hero-image",src:"/soccer-hero.png",alt:"soccer-player"})}),Object(n.jsx)(h.a,{type:"primary",size:"large",style:{backgroundColor:"#18ffff",borderColor:"#273238",borderRadius:"5px",color:"#273238",fontWeight:"bold"},onClick:function(){l(!0)},children:e.user?"DASHBOARD":"REGISTER"}),e.user?"":Object(n.jsx)(n.Fragment,{children:Object(n.jsxs)("h4",{style:{color:"black",textAlign:"center"},children:["\u26bd To avail 20 $FANC Airdrop",Object(n.jsx)("br",{}),"\ud83c\udfcf To join Fanance Club Referral Program and",Object(n.jsx)("br",{}),"\ud83c\udfc0 To get early access to $FANC Token Sale"]})})]})}),Object(n.jsx)(j.a,{xs:0,sm:0,md:8,lg:8,xl:8,children:Object(n.jsx)("img",{className:"hero-image",src:"/soccer-hero.png",alt:"soccer-player"})})]}),Object(n.jsx)(x.a,{title:"",placement:"right",closable:!0,onClose:function(){l(!1)},visible:a,drawerStyle:{backgroundColor:"#273238",color:"white"},children:e.user?Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)(M,{style:{color:"white",textAlign:"center"},children:"DASHBOARD"}),null==ne?Object(n.jsxs)(n.Fragment,{children:[Object(n.jsxs)("p",{children:["Dear ",e.user.displayName,","]}),Object(n.jsx)("p",{children:"To avail your Joining Bonus of 20 $FANC, complete the below tasks:"}),Object(n.jsx)(u.a,{orientation:"left",style:{color:"white"},children:"Twitter"}),"1. Follow"," ",Object(n.jsx)("a",{href:"https://twitter.com/FananceClub",target:"_blank",rel:"noreferrer",children:"@FananceClub"})," ","on Twitter",Object(n.jsx)("br",{}),Object(n.jsx)("br",{}),Object(n.jsx)(w.a,{screenName:"FananceClub",options:{size:"large"}}),"2. Like, Retweet and Tag 3 friends in the below tweet on Twitter (Click on the tweet or click this"," ",Object(n.jsx)("a",{href:"https://twitter.com/FananceClub/status/1406163615313383424",target:"_blank",rel:"noreferrer",children:"link"})," ","and Retweet)",Object(n.jsx)("div",{className:"centerContent",children:Object(n.jsx)("div",{className:"selfCenter",children:Object(n.jsx)(w.b,{tweetId:"1406163615313383424"})})}),Object(n.jsx)("p",{children:"3. Enter your twitter handle below:"}),Object(n.jsx)(p.a,{placeholder:"Twitter handle",prefix:Object(n.jsx)(O.a,{}),id:"twitter",value:V,onChange:function(e){X(e.target.value)}}),Object(n.jsx)(u.a,{orientation:"left",style:{color:"white"},children:"Telegram"}),"1. Join our Telegram channel for discussions and announcements",Object(n.jsx)("br",{}),Object(n.jsx)("br",{}),Object(n.jsx)("a",{href:"https://t.me/FananceClubChat",target:"_blank",rel:"noreferrer",children:Object(n.jsx)(h.a,{type:"primary",style:{color:"#273238"},shape:"round",children:"Follow on Telegram"})}),Object(n.jsx)("p",{children:"2. Enter your Telegram username below:"}),Object(n.jsx)(p.a,{placeholder:"Telegram username",id:"telegram",value:Z,onChange:function(e){ee(e.target.value)}}),Object(n.jsx)(u.a,{orientation:"left",style:{color:"white"},children:"Checklist"}),Object(n.jsx)(f.a,{id:"twitter1",style:{color:"white"},onChange:function(){B(!y)},children:"Followed @FananceClub on Twitter"}),Object(n.jsx)("br",{}),Object(n.jsx)(f.a,{id:"twitter2",style:{color:"white"},onChange:function(){U(!_)},children:"Liked, Retweeted and Tagged 3 friends in the above tweet"}),Object(n.jsx)("br",{}),Object(n.jsx)(f.a,{id:"telegram1",style:{color:"white"},onChange:function(){H(!G)},children:"Joined Telegram channel"}),Object(n.jsx)("br",{}),Object(n.jsx)("br",{}),Object(n.jsxs)("span",{style:{fontSize:"12px"},children:["* - Please note that your twitter retweet and telegram join status will be checked by our backend API at TGE",Object(n.jsx)("br",{})]}),Object(n.jsxs)("p",{style:{textAlign:"center"},children:[Object(n.jsx)(h.a,{type:"primary",style:{color:"#273238"},onClick:function(){return function(t){var r=k.firestore();y&&_&&G&&""!=V&&""!=Z?(t&&r.collection("users").doc(t).get().then((function(n){n.exists?r.collection("users").doc(t).set({referrees:k.firestore.FieldValue.arrayUnion(e.user.uid),tokenBalance:k.firestore.FieldValue.increment(10)},{merge:!0}):console.log("No such document!")})).catch((function(e){console.log("Error getting document:",e)})),r.collection("users").doc(e.user.uid).set({claimedTokens:0,displayName:e.user.displayName,referrees:[],referrer:t,registeredAt:Date.now(),telegramId:document.getElementById("telegram").value,tokenBalance:20,twitterId:document.getElementById("twitter").value}).then((function(){r.collection("users").doc(e.user.uid).get().then((function(e){e.exists?ce(e.data()):console.log("No such document!")})).catch((function(e){console.log("Error getting document:",e)})),d.b.success("Airdrop registration successful")})).catch((function(e){console.error("Error writing document: ",e)}))):d.b.error("Please complete the checklist and enter twitter and telegram details before submitting")}(le.get("referrer"))},size:"large",shape:"round",children:"Submit Airdrop entry"}),Object(n.jsx)("br",{}),Object(n.jsx)("br",{}),Object(n.jsx)(h.a,{type:"primary",onClick:ae,style:{color:"#273238"},shape:"round",children:"Sign Out"})]}),Object(n.jsx)("p",{id:"submissionError",style:{color:"red"}})]}):Object(n.jsxs)(n.Fragment,{children:[Object(n.jsxs)("p",{style:{textAlign:"center"},children:[Object(n.jsxs)(M,{level:3,style:{color:"white"},children:["Congrats, ",e.user.displayName]}),Object(n.jsx)("br",{}),Object(n.jsx)("img",{src:"./celebration.png",width:"30%",alt:"celebration"}),Object(n.jsxs)(M,{level:4,style:{color:"white"},children:["Your token balance is"," ",Object(n.jsx)("b",{style:{color:"#18ffff"},children:ne.tokenBalance})," ","$FANC"]}),Object(n.jsx)("p",{children:"(Can be claimed in September)"}),Object(n.jsxs)(M,{level:5,style:{color:"white"},children:["Number of successful referrals -"," ",Object(n.jsx)("b",{style:{color:"#18ffff"},children:ne.referrees.length})]})]}),Object(n.jsx)(u.a,{}),Object(n.jsx)(M,{level:4,style:{color:"white"},children:"Earn more by referrals !!"}),Object(n.jsx)("p",{children:"For Every Successful referral ( Referral should Signin and complete the steps ) you will earn 10 $FANC"}),Object(n.jsx)("p",{children:"To earn more $FANC, share your Referral Link with others:"}),Object(n.jsxs)("p",{style:{borderStyle:"solid",padding:"10px",borderColor:"#18ffff",borderRadius:"10px",fontWeight:"bold"},children:["https://fanance.club/?referrer=",e.user.uid,"/"]}),Object(n.jsx)(h.a,{type:"primary",size:"small",onClick:function(){return t="https://fanance.club/?referrer=".concat(e.user.uid,"/"),navigator.clipboard.writeText(t),void d.b.success("Referral link copied to clipboard");var t},style:{color:"#273238"},shape:"round",children:"Copy to clipboard"}),Object(n.jsx)("br",{}),Object(n.jsx)("br",{}),Object(n.jsx)(M,{level:4,style:{color:"white"},children:"Share referral link to your network"}),Object(n.jsx)(C.a,{url:"https://fanance.club/?referrer=".concat(e.user.uid,"/"),title:"Participate in Fanance Club Airdrop and earn 20 $FANC and more !!!",via:"FananceClub",hashtags:["Airdrop","FananceClub","DeFi","Cardano"],children:Object(n.jsx)(A.a,{size:40,round:!0})})," ",Object(n.jsx)(v.a,{url:"https://fanance.club/?referrer=".concat(e.user.uid,"/"),title:"Participate in Fanance Club Airdrop and earn 20 $FANC and more !!!",children:Object(n.jsx)(F.a,{size:40,round:!0})})," ",Object(n.jsx)(S.a,{url:"https://fanance.club/?referrer=".concat(e.user.uid,"/"),title:"Participate in Fanance Club Airdrop and earn 20 $FANC and more !!!",children:Object(n.jsx)(T.a,{size:40,round:!0})})," ",Object(n.jsx)(P.a,{url:"https://fanance.club/?referrer=".concat(e.user.uid,"/"),quote:"Participate in Fanance Club Airdrop and earn 20 $FANC and more !!!",hashtag:"#Airdrop #FananceClub #DeFi",children:Object(n.jsx)(N.a,{size:40,round:!0})})," ",Object(n.jsx)(E.a,{url:"https://fanance.club/?referrer=".concat(e.user.uid,"/"),title:"Participate in Fanance Club Airdrop and earn 20 $FANC and more !!!",children:Object(n.jsx)(R.a,{size:40,round:!0})})," ",Object(n.jsx)(I.a,{url:"https://fanance.club/?referrer=".concat(e.user.uid,"/"),title:"Participate in Fanance Club Airdrop and earn 20 $FANC and more !!!",children:Object(n.jsx)(W.a,{size:40,round:!0})}),Object(n.jsx)("br",{}),Object(n.jsx)("br",{}),Object(n.jsx)(h.a,{type:"primary",onClick:ae,style:{color:"#273238"},shape:"round",children:"Sign Out"})]})]}):Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)(M,{style:{color:"white",textAlign:"center"},children:"AIRDROP"}),Object(n.jsxs)("p",{style:{textAlign:"center"},children:[Object(n.jsx)("img",{src:"./airdrop.png",width:"30%",alt:"celebration"}),Object(n.jsx)("br",{}),Object(n.jsx)("br",{}),Object(n.jsxs)("p",{style:{textAlign:"center",fontSize:"20px"},children:["\u26bd Login to avail 20 $FANC Airdrop",Object(n.jsx)("br",{}),"\u26bd To join Fanance Club Referral Program and",Object(n.jsx)("br",{}),"\u26bd To get early access to $FANC Token Sale"]}),Object(n.jsx)("p",{style:{textAlign:"center"},children:Object(n.jsx)(h.a,{type:"primary",onClick:function(){var e=new k.auth.GoogleAuthProvider;k.auth().signInWithPopup(e).then((function(e){console.log("User logged in")})).catch((function(e){console.log(e)}))},size:"large",style:{color:"#273238"},icon:Object(n.jsx)(m.a,{}),shape:"round",children:"Login with Google"})})]})]})})]})},U=r(311),Q=function(e){var t=e.embedId;return Object(n.jsx)("div",{className:"video-responsive",children:Object(n.jsx)("iframe",{width:"50%",height:"480",src:"https://www.youtube.com/embed/".concat(t),frameBorder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0,title:"Embedded youtube"})})};o.a.Title;var $=function(){return Object(n.jsxs)(b.a,{justify:"center",align:"middle",id:"about-us",style:{backgroundColor:"white"},children:[Object(n.jsx)(j.a,{xs:24,md:12,style:{padding:"40px"},children:Object(n.jsxs)(U.a,{bordered:!1,style:{borderRadius:"12px",width:"100%",color:"black"},className:"radialbginvert",children:[Object(n.jsx)("b",{style:{fontSize:"20px"},children:"How is Real Life Performance linked?"}),Object(n.jsx)("br",{}),Object(n.jsx)("span",{style:{fontSize:"14px"},children:"Every month , the number of player tokens will be minted based on his/her real-life performance. These tokens are distributed to NFT owners & LP Stakers. Thus the player's performance directly influences users to Buy or sell or hold making it truly linked to real-life performance."})]})}),Object(n.jsx)(j.a,{xs:24,md:12,style:{color:"white",textAlign:"center"},children:Object(n.jsx)("img",{src:"/soccer-hero-2.png",alt:"soccer-hero",style:{padding:"40px",width:"80%"}})})]})},G=o.a.Title;var H=function(){return Object(n.jsxs)(b.a,{justify:"center",align:"middle",style:{backgroundColor:"radial - gradient(#e66465, #9198e5)"},className:"radialbg",id:"dapp",children:[Object(n.jsx)(j.a,{xs:24,md:12,style:{color:"#263238"},children:Object(n.jsx)("div",{style:{textAlign:"center",padding:"20px"},children:Object(n.jsx)(Q,{embedId:"xE1i1Cafu5k"})})}),Object(n.jsxs)(j.a,{xs:24,md:24,style:{textAlign:"center"},children:[Object(n.jsx)(G,{style:{color:"black",padding:"25px 25px 0 25px"},children:"USER FLOW"}),Object(n.jsx)("img",{src:"/user-flow.png",className:"dapp-image-width"})]})]})},q=r(312),J=(r(262),r(321)),V=r(322),X=r(323),Y=r(324),K=r(325),Z=r(326),ee=o.a.Title,te=[{icon:Object(n.jsx)(J.a,{}),title:"Buy, Sell or Trade",description:"Your favourite Sport Player\u2019s Stock just like stocks in stock market or cryptos in crypto market. The trades are secured by CARDANO BLOCKCHAIN"},{icon:Object(n.jsx)(V.a,{}),title:"Be a Liquidity Provider",description:"Provide Liquidity to \u201cFANC-ADA\u201d or any \u201cPLAYER- FANC\u201d pool and avail LP Tokens"},{icon:Object(n.jsx)(X.a,{}),title:"Stake your LP Token",description:"Stake your LP Tokens to Farm lucrative APYs and also to get a % of Transaction fee proportionate to your contribution in the pools"},{icon:Object(n.jsx)(Y.a,{}),title:"Buy Player's NFT",description:"Bid the auction and win the unique ( Only 1 per player) NFT for each Player. Enjoy the ownership of the Player\u2019s NFT along with % of Player\u2019s Transaction fee and Farm APY without staking. The ownership can be sold via opening an auction"},{icon:Object(n.jsx)(K.a,{}),title:"Predict and Win",description:"Predict the game outcome and win FANC tokens from game pool"},{icon:Object(n.jsx)(Z.a,{}),title:"Be a decision maker",description:"As community driven, your voice will be heard via your votes for every critical decision in the platform"}];var re=function(){return Object(n.jsxs)("div",{style:{backgroundImage:"linear-gradient(0deg, rgb(255,255,255,0.7), rgb(255,255,255,0.7)),url('/football-stadium-ball-bg.jpg')",textAlign:"center",backgroundSize:"cover",backgroundPosition:"bottom",padding:"20px"},id:"features",children:[Object(n.jsx)(ee,{style:{color:"black",padding:"25px 25px 0 25px"},children:"WHAT CAN YOU DO IN FANANCE CLUB"}),Object(n.jsx)(q.b,{grid:{gutter:16,xs:1,sm:1,md:2,lg:3,xl:3,xxl:3},dataSource:te,renderItem:function(e){return Object(n.jsx)(q.b.Item,{children:Object(n.jsx)(b.a,{justify:"space-around",align:"middle",style:{padding:"20px"},children:Object(n.jsxs)(U.a,{bordered:!1,style:{backgroundColor:"rgb(255,255,255,0.8)",borderRadius:"12px"},hoverable:!0,className:"feature-card-height",children:[Object(n.jsx)(j.a,{span:24,style:{fontSize:"50px",color:"black",textAlign:"center"},children:e.icon}),Object(n.jsxs)(j.a,{span:24,style:{textAlign:"center"},children:[Object(n.jsx)("span",{style:{fontSize:"20px",fontWeight:"bold",color:"black"},children:e.title}),Object(n.jsx)("br",{}),Object(n.jsx)("p",{style:{color:"black",textAlign:"justify"},children:e.description})]})]})})})},style:{padding:"10px"}}),Object(n.jsx)("br",{})]})};r(327),o.a.Title;var ne=r(318),ce=(r(277),o.a.Title);var ae=function(){return Object(n.jsxs)("div",{style:{backgroundImage:"linear-gradient(0deg, \trgb(0,0,0,0.7), rgb(0,0,0,0.8)),url('/football-player-bg.jpg')",backgroundSize:"cover",backgroundPosition:"bottom"},id:"roadmap",children:[Object(n.jsx)(ce,{style:{color:"white",padding:"25px 25px",textAlign:"center"},children:"ROADMAP"}),Object(n.jsx)("div",{children:Object(n.jsxs)(ne.a,{mode:"left",style:{color:"white",fontWeight:"bold",fontSize:"16px"},children:[Object(n.jsxs)(ne.a.Item,{label:"Q4 2020",color:"green",children:["Idea Conceptualization",Object(n.jsx)("br",{}),"Market Research"]}),Object(n.jsxs)(ne.a.Item,{label:"Q1 2021",color:"green",children:["Built and tested few key modules in Ethereum Rinkeby Testnet",Object(n.jsx)("br",{}),"(Only for Testing purposes)"]}),Object(n.jsxs)(ne.a.Item,{label:"Q2 2021",color:"yellow",children:["Website Launch",Object(n.jsx)("br",{}),"Social Media Launch",Object(n.jsx)("br",{}),"Community Channel Launch (Twitter & Discord)",Object(n.jsx)("br",{}),"White Paper Release"]}),Object(n.jsxs)(ne.a.Item,{label:"Q3 2021",children:["Private Sale",Object(n.jsx)("br",{}),"Pre Sale Round 1 ( Very Early Adopter Sale Round)",Object(n.jsx)("br",{}),"TestNet Launch"]}),Object(n.jsxs)(ne.a.Item,{label:"Q4 2021",children:["Pre-sale Round 2 ( Early Adopter Sale Round)",Object(n.jsx)("br",{}),"Community Sale (Initial Stake Pool Offering)",Object(n.jsx)("br",{}),"Exchange Listings",Object(n.jsx)("br",{}),"MainNet Phase 1"]}),Object(n.jsxs)(ne.a.Item,{label:"Q1 2022",children:["Main Net Phase 2",Object(n.jsx)("br",{}),"Partnerships with Sports Bodies / Players"]}),Object(n.jsxs)(ne.a.Item,{label:"Q2 2022",children:["Main Net Phase 3",Object(n.jsx)("br",{}),"Main Net Phase 4",Object(n.jsx)("br",{}),"Partnerships with Sports Bodies / Players Expansion"]}),Object(n.jsx)(ne.a.Item,{label:"Q3 2022",children:"New Sports / Market Addition ( Selected by Community Voting)"}),Object(n.jsx)(ne.a.Item,{label:"Q4 2022",children:"Completely Community-Driven Platform"})]})})]})},le=r(174),se=r(175),ie=r(183),oe=r(178),de=r(185),be=r(328),je=r(329),he=o.a.Title,xe=(a.a.Component,B.a.Footer);var ue=function(){return Object(n.jsxs)(xe,{style:{color:"white",textAlign:"center",backgroundColor:"#263238"},children:[Object(n.jsxs)(b.a,{align:"center",children:[Object(n.jsxs)(j.a,{xs:24,sm:24,md:24,lg:12,style:{textAlign:"justify",padding:"20px"},children:[Object(n.jsx)(u.a,{orientation:"left",style:{color:"white"},children:"Disclaimer"}),"Fanance Club is neither affiliated by nor associated with any private or government sports leagues and tournaments, until and unless expressly stated by the Company. In addition to this, Fanance club is not related to and does not claim any official status with any of the official or non-official sports team or sportsperson including but not limited to any official governing body of any sports or teams in any countries"]}),Object(n.jsxs)(j.a,{xs:24,sm:24,md:24,lg:12,style:{textAlign:"justify",fontWeight:"bold",padding:"20px"},children:[Object(n.jsx)(u.a,{orientation:"left",style:{color:"white"},children:"Useful Links"}),Object(n.jsx)(b.a,{children:Object(n.jsxs)(j.a,{xs:24,sm:12,md:12,lg:12,children:[Object(n.jsx)("a",{href:"/whitepaper.pdf",target:"_blank",rel:"noreferrer",children:"Whitepaper"}),Object(n.jsx)("br",{}),Object(n.jsx)("a",{href:"https://fanance-club.gitbook.io/fanance-club/lite-paper",target:"_blank",rel:"noreferrer",children:"Litepaper"}),Object(n.jsx)("br",{}),Object(n.jsx)("a",{href:"https://fanance-club.gitbook.io/fanance-club/faqs",target:"_blank",rel:"noreferrer",children:"FAQs"}),Object(n.jsx)("br",{}),Object(n.jsx)("a",{href:"/#/team",children:"Team"}),Object(n.jsx)("br",{}),Object(n.jsx)("a",{href:"https://twitter.com/FananceClub",target:"_blank",rel:"noreferrer",children:"Twitter"}),Object(n.jsx)("br",{}),Object(n.jsx)("a",{href:"https://fananceclub.medium.com/",target:"_blank",rel:"noreferrer",children:"Medium"}),Object(n.jsx)("br",{}),Object(n.jsx)("a",{href:"https://t.me/FananceClubChat",target:"_blank",rel:"noreferrer",children:"Telegram"})]})})]})]}),"Fanance Club \xa92020"]})},pe=o.a.Title,fe=function(){return Object(n.jsxs)("div",{style:{textAlign:"center",backgroundColor:"white"},children:[void window.scrollTo({top:600,left:0,behavior:"smooth"}),Object(n.jsx)(pe,{style:{color:"black"},children:"Meet the team behind Fanance Club"}),Object(n.jsxs)(b.a,{children:[Object(n.jsxs)(j.a,{style:{color:"black",padding:"20px"},xs:24,sm:12,md:6,children:[Object(n.jsx)("a",{href:"https://www.linkedin.com/in/sathisharavindhere",target:"_blank",rel:"noopener noreferrer",children:Object(n.jsx)("img",{src:"/team-1.jpg",alt:"team-1",width:"200px",style:{borderRadius:"50%",borderColor:"#18ffff",border:"3px solid #18ffff"}})}),Object(n.jsx)("p",{style:{fontWeight:"bold"},children:"Sathish Aravind"}),Object(n.jsxs)("p",{style:{color:"black"},children:[Object(n.jsx)("span",{style:{fontWeight:"bold"},children:"Co-Founder and CEO"}),Object(n.jsx)("br",{}),"EX-EMURGO - India marketing head",Object(n.jsx)("br",{}),"VP marketing of India's 1st crypto exchange"]})]}),Object(n.jsxs)(j.a,{style:{color:"black",padding:"20px"},xs:24,sm:12,md:6,children:[Object(n.jsx)("a",{href:"https://www.linkedin.com/in/shriraghuraaman",target:"_blank",rel:"noopener noreferrer",children:Object(n.jsx)("img",{src:"/team-2.jpeg",alt:"team-2",width:"200px",style:{borderRadius:"50%",borderColor:"#18ffff",border:"3px solid #18ffff"}})}),Object(n.jsx)("p",{style:{fontWeight:"bold"},children:"Raghu Thiyagharajan"}),Object(n.jsxs)("p",{style:{color:"black"},children:[Object(n.jsx)("span",{style:{fontWeight:"bold"},children:"Co-Founder and CTO"}),Object(n.jsx)("br",{}),"EX-EMURGO - AGM Blockchain tech",Object(n.jsx)("br",{}),"DeFi blockchain tech lead"]})]}),Object(n.jsxs)(j.a,{style:{color:"black",padding:"20px"},xs:24,sm:12,md:6,children:[Object(n.jsx)("a",{href:"https://www.linkedin.com/in/rahul-oberoi",target:"_blank",rel:"noopener noreferrer",children:Object(n.jsx)("img",{src:"/team-3.jpg",alt:"team-3",width:"200px",style:{borderRadius:"50%",borderColor:"#18ffff",border:"3px solid #18ffff"}})}),Object(n.jsx)("p",{style:{fontWeight:"bold"},children:"Rahul Oberoi"}),Object(n.jsxs)("p",{style:{color:"black"},children:[Object(n.jsx)("span",{style:{fontWeight:"bold"},children:"Partnership and Alliances Manager"}),Object(n.jsx)("br",{}),"EX-EMURGO - Strategic Alliances"]})]}),Object(n.jsxs)(j.a,{style:{color:"black",padding:"20px"},xs:24,sm:12,md:6,children:[Object(n.jsx)("a",{href:"https://www.linkedin.com/in/harshita-jain-7aa6a884",target:"_blank",rel:"noopener noreferrer",children:Object(n.jsx)("img",{src:"/team-4.jpg",alt:"team-4",width:"200px",style:{borderRadius:"50%",borderColor:"#18ffff",border:"3px solid #18ffff"}})}),Object(n.jsx)("p",{style:{fontWeight:"bold"},children:"Harshita Jain"}),Object(n.jsxs)("p",{style:{color:"black"},children:[Object(n.jsx)("span",{style:{fontWeight:"bold"},children:"Community & Marketing Manager"}),Object(n.jsx)("br",{}),"EX-EMURGO - Sales & Marketing Manager"]})]}),Object(n.jsxs)(j.a,{style:{color:"black",padding:"20px"},xs:24,sm:12,md:6,children:[Object(n.jsx)("a",{href:"https://www.linkedin.com/in/trilochana-chary-7b73b423",target:"_blank",rel:"noopener noreferrer",children:Object(n.jsx)("img",{src:"/team-5.jpg",alt:"team-5",width:"200px",style:{borderRadius:"50%",borderColor:"#18ffff",border:"3px solid #18ffff"}})}),Object(n.jsx)("p",{style:{fontWeight:"bold"},children:"T. Chary"}),Object(n.jsxs)("p",{style:{color:"black"},children:[Object(n.jsx)("span",{style:{fontWeight:"bold"},children:"Blockchain Smart Contract Developer lead"}),Object(n.jsx)("br",{}),"EX-EMURGO - AGM Blockchain Tech lead"]})]}),Object(n.jsxs)(j.a,{style:{color:"black",padding:"20px"},xs:24,sm:12,md:6,children:[Object(n.jsx)("a",{href:"https://www.linkedin.com/in/ramkiranb",target:"_blank",rel:"noopener noreferrer",children:Object(n.jsx)("img",{src:"/team-6.jpg",alt:"team-6",width:"200px",style:{borderRadius:"50%",borderColor:"#18ffff",border:"3px solid #18ffff"}})}),Object(n.jsx)("p",{style:{fontWeight:"bold"},children:"Ram Kiran"}),Object(n.jsxs)("p",{style:{color:"black"},children:[Object(n.jsx)("span",{style:{fontWeight:"bold"},children:"Blockchain Developer and Tester"}),Object(n.jsx)("br",{}),"Emurgo certified Blockchain developer",Object(n.jsx)("br",{}),"Functional Tester"]})]}),Object(n.jsxs)(j.a,{style:{color:"black",padding:"20px"},xs:24,sm:12,md:6,children:[Object(n.jsx)("a",{href:"https://www.linkedin.com/in/santhosh-kumar-p-9b166931/",target:"_blank",rel:"noopener noreferrer",children:Object(n.jsx)("img",{src:"/team-7.jpg",alt:"team-7",width:"200px",style:{borderRadius:"50%",borderColor:"#18ffff",border:"3px solid #18ffff"}})}),Object(n.jsx)("p",{style:{fontWeight:"bold"},children:"Santhosh Kumar"}),Object(n.jsxs)("p",{style:{color:"black"},children:[Object(n.jsx)("span",{style:{fontWeight:"bold"},children:"Backend Developer"}),Object(n.jsx)("br",{}),"8 years of experience in Backend Development"]})]}),Object(n.jsxs)(j.a,{style:{color:"#18ffff",padding:"20px"},xs:24,sm:12,md:6,children:[Object(n.jsx)("a",{href:"https://www.linkedin.com/in/contact-adil-abbas",target:"_blank",rel:"noopener noreferrer",children:Object(n.jsx)("img",{src:"/team-8.jpg",alt:"team-8",width:"200px",style:{borderRadius:"50%",borderColor:"#18ffff",border:"3px solid #18ffff"}})}),Object(n.jsx)("p",{style:{fontWeight:"bold"},children:"Adil Abbas"}),Object(n.jsxs)("p",{style:{color:"black"},children:[Object(n.jsx)("span",{style:{fontWeight:"bold"},children:"Strategic Advisor"}),Object(n.jsx)("br",{}),"Founder and CEO of Alacrity Blockchain"]})]})]})]})},ge=(r(330),r(278),r(90));k.auth().onAuthStateChanged((function(e){e?console.log("User signed in",e.displayName,e.uid):console.log("No User signed in")}));var Oe=function(){var e=Object(c.useState)(0),t=Object(i.a)(e,2),r=t[0],a=t[1];return Object(c.useEffect)((function(){k.auth().onAuthStateChanged((function(e){a(e)}))}),[k.auth()]),Object(n.jsx)(ge.a,{children:Object(n.jsxs)("div",{className:"App",children:[Object(n.jsx)(_,{user:r}),Object(n.jsxs)(g.c,{children:[Object(n.jsx)(g.a,{exact:!0,path:"/team",children:Object(n.jsx)(fe,{})}),Object(n.jsxs)(g.a,{path:"/",children:[Object(n.jsx)(re,{}),Object(n.jsx)(H,{}),Object(n.jsx)($,{}),Object(n.jsx)(ae,{})]})]}),Object(n.jsx)(ue,{})]})})},me=function(e){e&&e instanceof Function&&r.e(3).then(r.bind(null,331)).then((function(t){var r=t.getCLS,n=t.getFID,c=t.getFCP,a=t.getLCP,l=t.getTTFB;r(e),n(e),c(e),a(e),l(e)}))},ye=r(140);ye.a.initialize("UA-198554307-1"),ye.a.event({category:"User",action:"Visited website"}),s.a.render(Object(n.jsx)(a.a.StrictMode,{children:Object(n.jsx)(Oe,{})}),document.getElementById("root")),me()}},[[292,1,2]]]);
//# sourceMappingURL=main.816b7534.chunk.js.map