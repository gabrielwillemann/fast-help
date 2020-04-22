







if(!window.SiteRecruit_Globals){
var SiteRecruit_Config=new Object();
var SiteRecruit_Globals=new Object();
var SiteRecruit_Constants=new Object();

SiteRecruit_Globals.parseFlag=false;
SiteRecruit_Globals.empty=false;

SiteRecruit_Constants.browser=new Object();
SiteRecruit_Constants.browser.internetExplorer='Microsoft Internet Explorer';
SiteRecruit_Constants.browser.mozilla='Netscape';

SiteRecruit_Globals.browserName=navigator.appName;
SiteRecruit_Globals.browserVersion=parseInt(navigator.appVersion);

SiteRecruit_Globals.isInternetExplorer=false;
SiteRecruit_Globals.isMozilla=false;

if(SiteRecruit_Globals.browserName==SiteRecruit_Constants.browser.internetExplorer){if(SiteRecruit_Globals.browserVersion>3){SiteRecruit_Globals.isInternetExplorer=true;
}}
if(SiteRecruit_Globals.browserName==SiteRecruit_Constants.browser.mozilla){if(SiteRecruit_Globals.browserVersion>4){SiteRecruit_Globals.isMozilla=true;
}}
SiteRecruit_Constants.cookieLifetimeType=new Object();
SiteRecruit_Constants.cookieLifetimeType.duration=1;
SiteRecruit_Constants.cookieLifetimeType.expireDate=2;

SiteRecruit_Constants.invitationType=new Object();
SiteRecruit_Constants.invitationType.standard=0;
SiteRecruit_Constants.invitationType.email=1;
SiteRecruit_Constants.invitationType.domainDeparture=2;

SiteRecruit_Constants.cookieType=new Object();
SiteRecruit_Constants.cookieType.alreadyAsked=1;
SiteRecruit_Constants.cookieType.inProgress=2;

SiteRecruit_Constants.horizontalAlignment=new Object();
SiteRecruit_Constants.horizontalAlignment.left=0;
SiteRecruit_Constants.horizontalAlignment.middle=1;
SiteRecruit_Constants.horizontalAlignment.right=2;
SiteRecruit_Constants.verticalAlignment=new Object();
SiteRecruit_Constants.verticalAlignment.top=0;
SiteRecruit_Constants.verticalAlignment.middle=1;
SiteRecruit_Constants.verticalAlignment.bottom=2;

SiteRecruit_Config.cookieName='msresearch';
SiteRecruit_Config.cookieDomain='.microsoft.com';
SiteRecruit_Config.cookiePath='/';

SiteRecruit_Constants.cookieJoinChar=':';

SiteRecruit_Config.cookieLifetimeType=1;

 SiteRecruit_Config.cookieDuration=90;




function SiteRecruit_KeepAlive(){
 this.keepAlivePollDelay=1000;

 this.id=Math.random();

 this.attemptStart=KeepAlive_attemptStart;
this.checkCookie=KeepAlive_checkCookie;
this.inProgressCookieExists=KeepAlive_inProgressCookieExists;

 function KeepAlive_attemptStart(){if(this.inProgressCookieExists()){setInterval('SiteRecruit_Globals.keepAlive.checkCookie()',this.keepAlivePollDelay);
}}
 function KeepAlive_checkCookie(){if(this.inProgressCookieExists()){var j=SiteRecruit_Constants.cookieJoinChar;

 var c=SiteRecruit_Config.cookieName+'='+SiteRecruit_Constants.cookieType.inProgress+j+escape(document.location)+j+(new Date()).getTime()+j+this.id+'path='+SiteRecruit_Config.cookiePath;
if(SiteRecruit_Config.cookieDomain!=''){c+='domain='+SiteRecruit_Config.cookieDomain;
}document.cookie=c;
}}
 function KeepAlive_inProgressCookieExists(){var c=SiteRecruit_Config.cookieName+'='+SiteRecruit_Constants.cookieType.inProgress;
if(document.cookie.indexOf(c)!=-1){return true;
}return false;
}}
SiteRecruit_Globals.keepAlive=new SiteRecruit_KeepAlive();
SiteRecruit_Globals.keepAlive.attemptStart();




function SiteRecruit_PageConfigurationBroker(){this.urls=new Array();
this.pages=new Array();
this.priorities=new Array();

 this.start=PageConfigurationBroker_start;
this.initializeMapping=PageConfigurationBroker_initializeMapping;
this.getConfigurationForPage=PageConfigurationBroker_getConfigurationForPage;
this.loadConfiguration=PageConfigurationBroker_loadConfiguration;

 function PageConfigurationBroker_start(url){this.initializeMapping();

 var configuration=this.getConfigurationForPage(url);

 if(configuration!=null){this.loadConfiguration(configuration);
}}
 function PageConfigurationBroker_initializeMapping(){var u=this.urls;
var p=this.pages;
var x=this.priorities;

 u[0]='';
p[0]='/library/svy/SiteRecruit_PageConfiguration_2944mt.js';
x[0]=0;
}
 function PageConfigurationBroker_getConfigurationForPage(url){var currentScore=0;
var currentMatch=-1;

 for(var i=0;
i<this.urls.length;
i++){
 var r=new RegExp(this.urls[i],'i');
if(url.toString().search(r)!=-1){
 var newScore=this.priorities[i];
if(newScore>=currentScore){currentMatch=i;
currentScore=newScore;
}}}
 var page=null;
if(currentMatch>=0){page=this.pages[currentMatch];
}return page;
}
 function PageConfigurationBroker_loadConfiguration(configuration){document.write('<script language="JavaScript" src="'+configuration+'"></script>');
}}
SiteRecruit_Globals.isEnUs=false;
SiteRecruit_Globals.isFR=false;
SiteRecruit_Globals.isDE=false;
SiteRecruit_Globals.isJA=false;

if(document.cookie.toString().toLowerCase().indexOf('gsslang=')!=-1){
	if(document.cookie.toString().toLowerCase().indexOf('gsslang=en-us')!=-1){
		SiteRecruit_Globals.isEnUs=true;
	}
	if(document.cookie.toString().toLowerCase().indexOf('gsslang=fr')!=-1){
		SiteRecruit_Globals.isFR=true;
	}
	if(document.cookie.toString().toLowerCase().indexOf('gsslang=de')!=-1){
		SiteRecruit_Globals.isDE=true;
	}
	if(document.cookie.toString().toLowerCase().indexOf('gsslang=ja')!=-1){
		SiteRecruit_Globals.isJA=true;
	}
}else{
	if((navigator.language&&navigator.language.toString().toLowerCase()=='en-us')||(navigator.userLanguage&&navigator.userLanguage.toString().toLowerCase()=='en-us')){
		SiteRecruit_Globals.isEnUs=true;
	}
	if((navigator.language&&navigator.language.toString().toLowerCase()=='fr')||(navigator.userLanguage&&navigator.userLanguage.toString().toLowerCase()=='fr')){
		SiteRecruit_Globals.isFR=true;
	}
	if((navigator.language&&navigator.language.toString().toLowerCase()=='de')||(navigator.userLanguage&&navigator.userLanguage.toString().toLowerCase()=='de')){
		SiteRecruit_Globals.isDE=true;
	}
	if((navigator.language&&navigator.language.toString().toLowerCase()=='ja')||(navigator.userLanguage&&navigator.userLanguage.toString().toLowerCase()=='ja')){
		SiteRecruit_Globals.isJA=true;
	}
}
try{
 if(SiteRecruit_Globals.isInternetExplorer||SiteRecruit_Globals.isMozilla){
 if(SiteRecruit_Globals.isEnUs||SiteRecruit_Globals.isFR||SiteRecruit_Globals.isDE||SiteRecruit_Globals.isJA){
 SiteRecruit_Globals.broker=new SiteRecruit_PageConfigurationBroker();
SiteRecruit_Globals.broker.start(window.location);
}}}catch(e){}SiteRecruit_Globals.parseFlag=true;
}